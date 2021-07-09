<template>
  <div class="bin-tree">
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
  </div>
</template>

<script>
import TreeNode from './node.vue'
import BEmpty from '../empty'
import {provide, reactive, toRef, toRefs, unref, watch} from 'vue'
import expand from '../table/main/expand'

export default {
  name: 'BTree',
  components: {TreeNode, BEmpty},
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
    defaultExpand: Boolean,
    filterNodeMethod: Function,
  },
  emits: ['select-change', 'toggle-expand', 'check-change'],
  setup(props, ctx) {
    const states = reactive({
      stateTree: [],
      flatState: [],
      query: '',
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
        flatTree[node.nodeKey] = {node: node, nodeKey: node.nodeKey}
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
        handleCheck({checked: true, nodeKey: node.nodeKey})
      })
    }

    function uncheckAll() {
      states.flatState.forEach((node) => {
        handleCheck({checked: false, nodeKey: node.nodeKey})
      })
    }

    function setChecked(keys, flag = true) {
      keys.forEach(nodeKey => {
        handleCheck({checked: flag, nodeKey})
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
        replaceDisplayTitle(item.node, query)
        if (query.length > 0) {
          item.node['expand'] = false
        }
      })
      // 再遍历一次匹配数组以及父级的开关tes
      matches.forEach((item) => {
        item.node.visible = true
        if (query.length > 0) {
          item.node['expand'] = true
          replaceDisplayTitle(item.node, query)
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
        updateTreeDown(node, {checked: true})
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

      ctx.emit('select-change', getSelectedNodes(), node)
    }

    function handleCheck({checked, nodeKey}) {
      const node = states.flatState[nodeKey].node
      node['checked'] = checked
      node['indeterminate'] = false

      updateTreeUp(nodeKey) // propagate up
      updateTreeDown(node, {checked, indeterminate: false}) // reset `indeterminate` when going down

      ctx.emit('check-change', getCheckedNodes(), node, getCheckedAndIndeterminateNodes())
    }

    function updateTreeState() {
      states.stateTree = props.data
      states.flatState = compileFlatState()
      console.log(states.flatState)
      rebuildTree()
    }

    watch(
      () => props.data,
      () => {
        updateTreeState()
      },
      {deep: true, immediate: true},
    )
    provide('BTreeRoot', {
      loadData: props.loadData,
      showCheckbox: props.showCheckbox,
      checkDirectly: props.checkDirectly,
      render: props.render,
      states,
      titleKey: props.titleKey,
      handleToggle,
      handleSelect,
      handleCheck,
      updateTreeState,
    })
    return {
      ...toRefs(states),
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
      const {stateTree} = this
      return !stateTree || stateTree.length === 0 || stateTree.every(({visible}) => !visible)
    },
  },
}
</script>
