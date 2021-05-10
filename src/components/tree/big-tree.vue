<template>
  <div :class="prefixCls" ref="scrollerRef" :style="wrapStyle"
       @scroll="handleScroll">
    <template v-if="!isEmpty">
      <div :class="`${prefixCls}-phantom`" :style="{ height: contentHeight }"></div>
      <div :class="`${prefixCls}-content`" :style="{ transform: `translateY(${offset}px)` }">
        <div
          v-for="(node,index) in visibleData"
          :key="node.id||index"
          :class="`${prefixCls}-node`"
          :style="{ paddingLeft: 18 * (node.level - 1) + 'px', height: itemHeight + 'px' }"
        >
          <div :class="arrowClasses(node)" @click="handleExpand(node)">
            <i v-if="node[childrenKey] && node[childrenKey].length" class="b-iconfont b-icon-caret-right"></i>
          </div>
          <b-checkbox
            v-if="showCheckbox"
            :value="node.checked"
            :indeterminate="node.indeterminate"
            :disabled="node.disabled || node.disableCheckbox"
            @click.native.prevent="handleCheck(node)"></b-checkbox>
          <span v-if="node.display" :class="titleClasses(node)"
                @click="handleSelect(node)"
                v-html="node.display"></span>
          <span v-else :class="titleClasses(node)" @click="handleSelect(node)">{{ node.title }}</span>
        </div>
      </div>
    </template>
    <div v-else>
      <b-empty style="margin: 16px 0;">{{ emptyText }}</b-empty>
    </div>
  </div>
</template>

<script>
import { onBeforeUnmount, onMounted, reactive, ref, toRefs, watch } from 'vue'
import BEmpty from '../empty'
import BCheckbox from '../checkbox'

const prefixCls = 'bin-tree'
let lastTime = 0
export default {
  name: 'BBigTree',
  components: { BEmpty, BCheckbox },
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      },
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    showCheckbox: {
      type: Boolean,
      default: false,
    },
    checkStrictly: {
      type: Boolean,
      default: false,
    },
    // 当开启 showCheckbox 时，如果开启 checkDirectly，select 将强制转为 check 事件
    checkDirectly: {
      type: Boolean,
      default: false,
    },
    emptyText: {
      type: String,
      default: '暂无数据',
    },
    childrenKey: {
      type: String,
      default: 'children',
    },
    lockSelect: {
      type: Boolean,
      default: false,
    },
    timeout: { // 刷新频率
      type: Number,
      default: 17,
    },
    defaultExpand: {
      type: Boolean,
    },
    itemHeight: {
      type: Number,
      default: 28,
    },
    visibleCount: {
      type: Number,
      default: 15,
    },
    filterNodeMethod: {
      type: Function,
    },
  },
  emits: ['update', 'select-change', 'check-change'],
  setup(props, ctx) {
    const scrollerRef = ref(null)
    const states = reactive({
      offset: 0, // translateY偏移量
      contentHeight: '0px',
      visibleData: [],
      flattenTree: compileFlatState(),
    })

    function compileFlatState() {
      // 每个结点都有一个关系父结点/子结点
      let keyCounter = 0
      let childrenKey = props.childrenKey
      let defaultExpand = props.defaultExpand

      const flatten = function(list, level = 1, parent = null) {
        let arr = []
        list.forEach(item => {
          item.level = level
          item.nodeKey = keyCounter++
          if (item.expand === undefined) {
            item.expand = defaultExpand
          }
          if (item.visible === undefined) {
            item.visible = true
          }
          if (!parent.visible || !parent.expand) {
            item.visible = false
          }
          item.parent = parent
          arr.push(item)
          if (item[childrenKey]) {
            arr.push(...flatten(item[childrenKey], level + 1, item))
          }
        })
        return arr
      }
      return flatten(props.data, 1, { level: 0, visible: true, expand: true, children: props.data })
    }

    function handleScroll() {
      let currentTime = +new Date()
      if (currentTime - lastTime > props.timeout) {
        updateVisibleData(scrollerRef?.value.scrollTop)
        lastTime = currentTime
      }
    }

    function updateVisibleData(scrollTop = 0) {
      let start = Math.floor(scrollTop / props.itemHeight) - Math.floor(props.visibleCount / 2)
      start = start < 0 ? 0 : start
      const end = start + props.visibleCount * 2
      const allVisibleData = (states.flattenTree || []).filter(item => item.visible)
      states.visibleData = allVisibleData.slice(start, end)
      states.offset = start * props.itemHeight
    }

    function getContentHeight() {
      states.contentHeight = (states.flattenTree || []).filter(item => item.visible).length * props.itemHeight + 'px'
    }

    function getCheckedNodes() {
      return states.flattenTree.filter(obj => obj.selected)
    }

    function getSelectedNodes() {
      return states.flattenTree.filter(obj => obj.checked)
    }

    function getCheckedAndIndeterminateNodes() {
      return states.flattenTree.filter(obj => (obj.checked || obj.indeterminate))
    }

    function arrowClasses(node) {
      return [
        `${prefixCls}-arrow`,
        {
          [`${prefixCls}-arrow-disabled`]: node.disabled,
          [`${prefixCls}-arrow-open`]: node.expand,
        },
      ]
    }

    function titleClasses(node) {
      return [
        `${prefixCls}-title`,
        {
          [`${prefixCls}-title-selected`]: node.selected,
        },
      ]
    }

    function updateView() {
      getContentHeight()
      ctx.emit('update', props.data)
      handleScroll()
    }

    function handleExpand(node) {
      const isExpand = node.expand
      if (isExpand) {
        collapse(node) // 折叠
      } else {
        expand(node) // 展开
      }
      updateView()
    }

    /* public API 折叠所有 */
    function collapseAll(level = 1) {
      states.flattenTree.forEach(node => {
        node.expand = false
        if (node.level !== level) {
          node.visible = false
        }
      })
      updateView()
    }

    /* public API 展开所有 */
    function expandAll() {
      states.flattenTree.forEach(node => {
        node.expand = true
        node.visible = true
      })
      updateView()
    }

    // 展开节点
    function expand(node) {
      node.expand = true
      recursionVisible(node.children, true)
    }

    // 折叠节点
    function collapse(node) {
      node.expand = false
      recursionVisible(node.children, false)
    }

    // 递归节点
    function recursionVisible(children, status) {
      children.forEach(node => {
        node.visible = status
        if (!node.parent.visible || !node.parent.expand) {
          node.visible = false
        }
        if (node.children) {
          recursionVisible(node.children, status)
        }
      })
    }

    function filter(query) {
      // 如果不存在则如果不存在判定函数则跳出
      if (!props.filterNodeMethod) return
      // 获取匹配的拉平节点
      let matches = states.flattenTree.filter(obj => props.filterNodeMethod.call(obj, query, obj))
      // 隐藏全部
      states.flattenTree.forEach(item => {
        item.visible = false
        replaceDisplayTitle(item, query)
        if (query.length > 0) {
          item['expand'] = true
        }
      })
      // 再遍历一次匹配数组以及父级的开关
      matches.forEach(item => {
        item.visible = true
        if (query.length > 0) {
          item.expand = true
          replaceDisplayTitle(item, query)
        }
        // 如果是第一层则直接跳过下面逻辑
        if (item.parent === undefined || item.parent.level === 1) return

        let parentNode = item.parent
        do {
          parentNode.visible = true
          if (query.length > 0) {
            parentNode.expand = true
          }
          parentNode = parentNode.parent
        } while (parentNode && parentNode.level !== 0)
      })
    }

    // 替换节点文字
    function replaceDisplayTitle(node, query) {
      if (query) {
        node['display'] = node.title.replace(new RegExp(query, 'g'), `<span>${query}</span>`)
      } else {
        delete node['display']
      }
    }

    function handleSelect(node) {
      if (props.lockSelect) { // 如果锁定选择，则不触发选中事件
        return
      }
      if (props.showCheckbox && props.checkDirectly) {
        handleCheck(node)
        return
      }
      if (!props.multiple) { // reset previously selected node
        const currentSelectedKey = states.flattenTree.findIndex(obj => obj.selected)
        if (currentSelectedKey >= 0 && currentSelectedKey !== node.nodeKey) {
          states.flattenTree[currentSelectedKey]['selected'] = false
        }
      }
      node['selected'] = !node.selected
      ctx.emit('select-change', getSelectedNodes(), node)
    }

    function handleCheck(node) {
      let checked = !node.checked && !node.indeterminate
      node['checked'] = checked
      node['indeterminate'] = false
      updateTreeUp(node) // propagate up
      updateTreeDown(node, { checked, indeterminate: false }) // reset `indeterminate` when going down

      ctx.emit('check-change', getCheckedNodes(), node)
    }

    function updateTreeDown(node, changes = {}) {
      if (props.checkStrictly) return

      for (let key in changes) {
        node[key] = changes[key]
      }
      if (node[props.childrenKey]) {
        node[props.childrenKey].forEach(child => {
          updateTreeDown(child, changes)
        })
      }
    }

    function updateTreeUp(node) {
      if (node.parent === undefined || node.level === 0 || props.checkStrictly) return

      const parent = node.parent
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
      updateTreeUp(parent)
    }

    onMounted(() => {
      updateView()
    })
    onBeforeUnmount(() => {
      states.flattenTree = null
    })

    watch(
      () => props.data,
      () => {
        states.flattenTree = compileFlatState()
        updateView()
      },
    )

    return {
      scrollerRef,
      prefixCls,
      ...toRefs(states),
      compileFlatState,
      updateView,
      handleScroll,
      getCheckedNodes,
      getSelectedNodes,
      getCheckedAndIndeterminateNodes,
      titleClasses,
      arrowClasses,
      handleExpand,
      expandAll,
      collapseAll,
      collapse,
      expand,
      recursionVisible,
      updateTreeUp,
      updateTreeDown,
      filter,
      handleSelect,
      handleCheck,
    }
  },
  computed: {
    wrapStyle() {
      return {
        position: 'relative',
        overflow: 'auto',
        height: this.visibleCount * this.itemHeight + 'px',
      }
    },
    isEmpty() {
      return this.visibleData.length === 0
    },
  },
}
</script>
