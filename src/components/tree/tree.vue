<template>
  <div
    ref="el$"
    class="bin-tree"
    :class="{
      'is-dragging': !!dragState.draggingNode,
      'is-drop-not-allow': !dragState.allowDrop,
      'is-drop-inner': dragState.dropType === 'inner'
    }"
    role="tree"
  >
    <template v-if="!isEmpty">
      <tree-node
        v-for="(item, i) in stateTree"
        :key="i"
        :data="item"
        :multiple="multiple"
        :show-checkbox="showCheckbox"
        :children-key="childrenKey"
      >
      </tree-node>
    </template>
    <div v-else>
      <b-empty style="margin: 16px 0">{{ emptyText }}</b-empty>
    </div>
    <div
      v-show="dragState.showDropIndicator"
      ref="dropIndicator$"
      class="bin-tree__drop-indicator"
    >
    </div>
  </div>
</template>

<script>
import TreeNode from './node.vue'
import BEmpty from '../empty'
import { provide, reactive, ref, toRefs, watch } from 'vue'
import expand from '../table/main/expand'
import { addClass, removeClass } from '../../utils/dom'
import { deepCopy } from '../../utils/util'

export default {
  name: 'BTree',
  components: { TreeNode, BEmpty },
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      },
    },
    multiple: Boolean,
    showCheckbox: Boolean,
    checkStrictly: Boolean,
    // 当开启 showCheckbox 时，如果开启 checkDirectly，select 将强制转为 check 事件
    checkDirectly: Boolean,
    emptyText: {
      type: String,
      default: '暂无数据',
    },
    titleKey: {
      type: String,
      default: 'title',
    },
    childrenKey: {
      type: String,
      default: 'children',
    },
    loadData: Function,
    render: Function,
    lockSelect: Boolean,
    draggable: {
      type: Boolean,
      default: false,
    },
    allowDrag: Function,
    allowDrop: Function,
    titleEllipsis: {
      type: Boolean,
      default: true,
    },
    defaultExpand: Boolean,
    filterNodeMethod: Function,
    highlightFilter: {
      type: Boolean,
      default: true,
    },
  },
  emits: [
    'select-change',
    'toggle-expand',
    'check-change',
    'node-drag-start',
    'node-drag-end',
    'node-drop',
    'node-drag-leave',
    'node-drag-enter',
    'node-drag-over',
  ],
  setup(props, ctx) {
    const el$ = ref(null)
    const dropIndicator$ = ref(null)
    const states = reactive({
      stateTree: [],
      flatState: [],
      query: '',
    })

    const dragState = ref({
      showDropIndicator: false,
      draggingNode: null,
      dropNode: null,
      allowDrop: true,
      dropType: null,
    })

    function compileFlatState() {
      // 每个结点都有一个关系父结点/子结点
      let keyCounter = 0
      let childrenKey = props.childrenKey
      let defaultExpand = props.defaultExpand
      const flatTree = []

      const flattenChildren = (node, parent, parentKeys) => {
        node['nodeKey'] = keyCounter++
        if (typeof node.expand === 'undefined') {
          node['expand'] = defaultExpand
        }
        if (typeof node.visible === 'undefined') {
          node['visible'] = true
        }
        if (typeof node.loading === 'undefined' && props.loadData) {
          node['loading'] = false
        }
        if (typeof node.isLeaf === 'undefined') {
          node['isLeaf'] = !node[childrenKey]
        }
        flatTree[node.nodeKey] = { node: node, nodeKey: node.nodeKey }
        if (typeof parent !== 'undefined') {
          flatTree[node.nodeKey].parent = parent.nodeKey
          flatTree[parent.nodeKey][childrenKey].push(node.nodeKey)
        }
        let parents = parentKeys ? parentKeys.split(',').map(i => +i) : []
        // 拼接parents
        if (typeof parentKeys !== 'undefined') {
          parents.push(parent.nodeKey)
          flatTree[node.nodeKey].parents = parents
        }

        if (node[childrenKey]) {
          flatTree[node.nodeKey][childrenKey] = []
          node[childrenKey].forEach((child) => flattenChildren(child, node, parents.join(',')))
        }
      }

      props.data.forEach((rootNode) => {
        flattenChildren(rootNode)
      })
      return flatTree
    }

    function updateTreeUp(nodeKey) {
      const parentKey = states.flatState[nodeKey].parent
      if (typeof parentKey === 'undefined' || props.checkStrictly) return

      const node = states.flatState[nodeKey].node
      const parent = states.flatState[parentKey].node
      if (node.checked === parent.checked && node.indeterminate === parent.indeterminate) return // no need to update upwards

      if (node.checked === true) {
        parent['checked'] = parent[props.childrenKey].every((node) => node.checked)
        parent['indeterminate'] = !parent.checked
      } else {
        parent['checked'] = false
        parent['indeterminate'] = parent[props.childrenKey].some(
          (node) => node.checked || node.indeterminate,
        )
      }
      updateTreeUp(parentKey)
    }

    //===============public start=====================//
    function getFlatState() {
      return states.flatState
    }

    function getCheckedNodes() {
      return states.flatState.filter((obj) => obj.node.checked).map((obj) => obj.node)
    }

    function getSelectedNodes() {
      return states.flatState.filter((obj) => obj.node.selected).map((obj) => obj.node)
    }

    function getCheckedAndIndeterminateNodes() {
      return states.flatState
        .filter((obj) => obj.node.checked || obj.node.indeterminate)
        .map((obj) => obj.node)
    }

    function collapseAll() {
      states.flatState.forEach((node) => {
        node.node.expand = false
      })
    }

    function expandAll() {
      states.flatState.forEach((node) => {
        node.node.expand = true
      })
    }

    function checkAll() {
      states.flatState.forEach((node) => {
        handleCheck({ checked: true, nodeKey: node.nodeKey })
      })
    }

    function uncheckAll() {
      states.flatState.forEach((node) => {
        handleCheck({ checked: false, nodeKey: node.nodeKey })
      })
    }

    function setChecked(keys, flag = true) {
      keys.forEach(nodeKey => {
        handleCheck({ checked: flag, nodeKey })
      })
    }

    function setSelected(keys, flag = true, expandParent = true) {
      keys.forEach(nodeKey => {
        handleSelect(nodeKey, flag)
        if (expandParent) { // 是否展开祖先层级
          const parents = states.flatState[nodeKey].parents
          if (parents) {
            setExpand(parents)
          }
        }
      })
    }

    function unselectAll() {
      states.flatState.forEach((node) => {
        node.node.selected = false
      })
    }

    function setExpand(keys, flag = true) {
      keys.forEach(nodeKey => {
        states.flatState[nodeKey].node.expand = flag
      })
    }

    //===============public end=====================//

    function getMatchesNode(query) {
      return states.flatState.filter((obj) =>
        props.filterNodeMethod.call(obj.node, query, obj.node),
      )
    }

    function filter(query) {
      // 如果不存在则如果不存在判定函数则跳出
      if (!props.filterNodeMethod) return
      // 获取匹配的拉平节点
      let matches = getMatchesNode(query)
      // 隐藏全部
      states.flatState.forEach((item) => {
        item.node.visible = false
        if (props.highlightFilter) {
          replaceDisplayTitle(item.node, query)
        }
        if (query.length > 0) {
          item.node['expand'] = false
        }
      })
      // 再遍历一次匹配数组以及父级的开关tes
      matches.forEach((item) => {
        item.node.visible = true
        if (query.length > 0) {
          item.node['expand'] = true
          if (props.highlightFilter) {
            replaceDisplayTitle(item.node, query)
          }
        }
        const parentKey = item.parent
        // 如果是第一层则直接跳过下面逻辑
        if (typeof parentKey === 'undefined') return

        let parentNode = states.flatState[parentKey]
        do {
          parentNode.node.visible = true
          if (query.length > 0) {
            parentNode.node['expand'] = true
          }
          parentNode = states.flatState[parentNode.parent]
        } while (parentNode)
      })
    }

    // 替换节点文字
    function replaceDisplayTitle(node, query) {
      if (query) {
        node['display'] = node[props.titleKey].replace(new RegExp(query, 'g'), `<span>${query}</span>`)
      } else {
        delete node['display']
      }
    }

    function updateTreeDown(node, changes = {}) {
      if (props.checkStrictly) return

      for (let key in changes) {
        node[key] = changes[key]
      }
      if (node[props.childrenKey]) {
        node[props.childrenKey].forEach((child) => {
          updateTreeDown(child, changes)
        })
      }
    }

    function handleToggle(node) {
      ctx.emit('toggle-expand', node)
    }

    function rebuildTree() {
      // only called when `data` prop changes
      const checkedNodes = getCheckedNodes()
      checkedNodes.forEach((node) => {
        updateTreeDown(node, { checked: true })
        // propagate upwards
        const parentKey = states.flatState[node.nodeKey].parent
        if (!parentKey && parentKey !== 0) return
        const parent = states.flatState[parentKey].node
        const childHasCheckSetter = typeof node.checked !== 'undefined' && node.checked
        if (childHasCheckSetter && parent.checked !== node.checked) {
          updateTreeUp(node.nodeKey) // update tree upwards
        }
      })
    }

    function handleSelect(nodeKey, flag) {
      if (props.lockSelect) { // 如果锁定选择，则不触发选中事件
        return
      }
      const node = states.flatState[nodeKey].node
      if (!props.multiple) { // reset previously selected node
        const currentSelectedKey = states.flatState.findIndex(obj => obj.node.selected)
        if (currentSelectedKey >= 0 && currentSelectedKey !== nodeKey) {
          states.flatState[currentSelectedKey].node['selected'] = false
        }
      }
      node['selected'] = flag || !node.selected

      ctx.emit('select-change', getSelectedNodes(), node, states.flatState)
    }

    function handleCheck({ checked, nodeKey }) {
      const node = states.flatState[nodeKey].node
      node['checked'] = checked
      node['indeterminate'] = false

      updateTreeUp(nodeKey) // propagate up
      updateTreeDown(node, { checked, indeterminate: false }) // reset `indeterminate` when going down

      ctx.emit('check-change', getCheckedNodes(), node, getCheckedAndIndeterminateNodes(), states.flatState)
    }

    function updateTreeState() {
      states.stateTree = props.data
      states.flatState = compileFlatState()
      rebuildTree()
    }

    //===============drag event=====================//
    function handleTreeNodeDragStart({ e, treeNode }) {
      if (typeof props.allowDrag === 'function' && !props.allowDrag(treeNode.node)) {
        e.preventDefault()
        return false
      }
      e.dataTransfer.effectAllowed = 'move'
      // wrap in try catch to address IE's error when first param is 'text/plain'
      try {
        // setData is required for draggable to work in FireFox
        // the content has to be '' so dragging a node out of the tree won't open a new tab in FireFox
        e.dataTransfer.setData('text/plain', '')
      } catch (e) {
        console.warn('fix FireFox dataTransfer')
      }
      dragState.value.draggingNode = treeNode
      ctx.emit('node-drag-start', treeNode.node, e)
    }

    function handleTreeNodeDragOver({ e, treeNode }) {
      const dropNode = treeNode
      const oldDropNode = dragState.value.dropNode
      if (oldDropNode && oldDropNode !== dropNode) {
        removeClass(oldDropNode.$el, 'is-drop-inner')
      }
      const draggingNode = dragState.value.draggingNode
      if (!draggingNode || !dropNode) return
      let dropPrev = true
      let dropInner = true
      let dropNext = true
      let userAllowDropInner = true
      if (typeof props.allowDrop === 'function') {
        dropPrev = props.allowDrop(draggingNode.node, dropNode.node, 'prev')
        userAllowDropInner = dropInner = props.allowDrop(draggingNode.node, dropNode.node, 'inner')
        dropNext = props.allowDrop(draggingNode.node, dropNode.node, 'next')
      }
      e.dataTransfer.dropEffect = dropInner ? 'move' : 'none'
      if ((dropPrev || dropInner || dropNext) && oldDropNode !== dropNode) {
        if (oldDropNode) {
          ctx.emit('node-drag-leave', draggingNode.node, oldDropNode.node, e)
        }
        ctx.emit('node-drag-enter', draggingNode.node, dropNode.node, e)
      }
      if (dropPrev || dropInner || dropNext) {
        dragState.value.dropNode = dropNode
      }
      if (dropNode.node.nextSibling === draggingNode.node) {
        dropNext = false
      }
      if (dropNode.node.previousSibling === draggingNode.node) {
        dropPrev = false
      }
      if (dropNode.$el.contains(draggingNode.$el, false)) {
        dropInner = false
      }
      if (draggingNode.node === dropNode.node || draggingNode.$el.contains(dropNode.$el)) {
        dropPrev = false
        dropInner = false
        dropNext = false
      }
      const targetPosition = dropNode.$el.getBoundingClientRect()
      const treePosition = el$.value.getBoundingClientRect()
      let dropType
      const prevPercent = dropPrev ? (dropInner ? 0.25 : (dropNext ? 0.45 : 1)) : -1
      const nextPercent = dropNext ? (dropInner ? 0.75 : (dropPrev ? 0.55 : 0)) : 1

      let indicatorTop = -9999
      const distance = e.clientY - targetPosition.top
      if (distance < targetPosition.height * prevPercent) {
        dropType = 'before'
      } else if (distance > targetPosition.height * nextPercent) {
        dropType = 'after'
      } else if (dropInner) {
        dropType = 'inner'
      } else {
        dropType = 'none'
      }

      const iconPosition = dropNode.$el.querySelector('.bin-tree-arrow').getBoundingClientRect()
      const dropIndicator = dropIndicator$.value
      if (dropType === 'before') {
        indicatorTop = iconPosition.top - treePosition.top
      } else if (dropType === 'after') {
        indicatorTop = iconPosition.bottom - treePosition.top
      }
      dropIndicator.style.top = indicatorTop + 'px'
      dropIndicator.style.left = (iconPosition.right - treePosition.left) + 'px'

      if (dropType === 'inner') {
        addClass(dropNode.$el, 'is-drop-inner')
      } else {
        removeClass(dropNode.$el, 'is-drop-inner')
      }
      dragState.value.showDropIndicator = dropType === 'before' || dropType === 'after'
      dragState.value.allowDrop = dragState.value.showDropIndicator || userAllowDropInner
      dragState.value.dropType = dropType
      ctx.emit('node-drag-over', draggingNode.node, dropNode.node, e)
    }

    function handleTreeNodeDragEnd({ e, treeNode }) {
      const { draggingNode, dropType, dropNode } = dragState.value
      e.preventDefault()
      e.dataTransfer.dropEffect = 'move'
      if (draggingNode && dropNode) {
        // 复制节点
        const draggingNodeCopy = deepCopy(draggingNode.node)
        delete draggingNodeCopy['nodeKey']
        // 获取父级节点
        const node = states.flatState[draggingNode.node.nodeKey]
        let parent = null
        if (node && node.parent !== undefined) {
          const parentKey = node.parent
          parent = states.flatState[parentKey].node
        }
        if (dropType !== 'none') {
          if (parent) {
            // 移除当前节点
            const index = parent?.children.indexOf(draggingNode.node)
            parent?.children.splice(index, 1)
          } else {
            // 如果parent不存在，即为最上级节点，则需要移除自己
            const index = states.stateTree.indexOf(draggingNode.node)
            states.stateTree.splice(index, 1)
          }
        }
        if (dropType === 'before') {
          // 获取目标children
          const target = states.flatState[dropNode.node.nodeKey]
          let targetParent = null
          if (target && target.parent !== undefined) {
            const parentKey = target.parent
            targetParent = states.flatState[parentKey].node
            if (targetParent) {
              const children = targetParent?.children || []
              const index = children.indexOf(dropNode.node)
              // 插入位置
              targetParent?.children.splice(index, 0, draggingNodeCopy)
            }
          } else {
            // 如果没有父级节点则需要将节点拼至根节点位置
            const children = states.stateTree || []
            const index = children.indexOf(dropNode.node)
            // 插入位置
            states.stateTree.splice(index, 0, draggingNodeCopy)
          }
        } else if (dropType === 'after') {
          const target = states.flatState[dropNode.node.nodeKey]
          let targetParent = null
          if (target && target.parent !== undefined) {
            const parentKey = target.parent
            targetParent = states.flatState[parentKey].node
            if (targetParent) {
              const children = targetParent?.children || []
              const index = children.indexOf(dropNode.node) + 1
              // 插入位置
              targetParent?.children.splice(index, 0, draggingNodeCopy)
            }
          } else {
            // 如果没有父级节点则需要将节点拼至根节点位置
            const children = states.stateTree || []
            const index = children.indexOf(dropNode.node) + 1
            // 插入位置
            states.stateTree.splice(index, 0, draggingNodeCopy)
          }
        } else if (dropType === 'inner') {
          // 往最后一级拼接一个节点
          const children = dropNode.node.children || []
          dropNode.node.expand = true
          children.push(draggingNodeCopy)
          dropNode.node.children = children
        }

        removeClass(dropNode.$el, 'is-drop-inner')

        ctx.emit('node-drag-end', draggingNode.node, dropNode.node, dropType, e)
        if (dropType !== 'none') {
          ctx.emit('node-drop', draggingNode.node, dropNode.node, dropType, e)
        }
      }
      if (draggingNode && !dropNode) {
        ctx.emit('node-drag-end', draggingNode.node, null, dropType, e)
      }

      dragState.value.showDropIndicator = false
      dragState.value.draggingNode = null
      dragState.value.dropNode = null
      dragState.value.allowDrop = true
    }

    watch(
      () => props.data,
      () => {
        updateTreeState()
      },
      { deep: true, immediate: true },
    )
    provide('BTreeRoot', {
      loadData: props.loadData,
      showCheckbox: props.showCheckbox,
      checkDirectly: props.checkDirectly,
      render: props.render,
      draggable: props.draggable,
      states,
      titleEllipsis: props.titleEllipsis,
      titleKey: props.titleKey,
      handleToggle,
      handleSelect,
      handleCheck,
      updateTreeState,
      handleTreeNodeDragStart,
      handleTreeNodeDragOver,
      handleTreeNodeDragEnd,
    })
    return {
      el$,
      dropIndicator$,
      ...toRefs(states),
      dragState,
      updateTreeUp,
      getCheckedNodes,
      getSelectedNodes,
      getCheckedAndIndeterminateNodes,
      collapseAll,
      expandAll,
      getFlatState,
      checkAll,
      uncheckAll,
      setChecked,
      setSelected,
      unselectAll,
      setExpand,
      getMatchesNode,
      filter,
      handleToggle,
      handleSelect,
      handleCheck,
      updateTreeState,
    }
  },
  computed: {
    isEmpty() {
      const { stateTree } = this
      return !stateTree || stateTree.length === 0 || stateTree.every(({ visible }) => !visible)
    },
  },
}
</script>
