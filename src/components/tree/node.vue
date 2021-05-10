<template>
  <ul class="bin-tree-children">
    <li v-show="data.visible">
      <div class="bin-tree-node">
        <span :class="arrowClasses" @click="handleExpand">
          <template v-if="!isLeaf">
            <i v-if="showArrow" class="b-iconfont b-icon-caret-right"></i>
            <i v-if="showLoading" class="b-iconfont b-icon-loading bin-load-loop"></i>
          </template>
        </span>
        <b-checkbox
          v-if="showCheckbox"
          :model-value="data.checked"
          :indeterminate="data.indeterminate"
          :disabled="data.disabled || data.disableCheckbox"
          @change="handleCheck"
        ></b-checkbox>
        <span
          v-if="data.display"
          :class="titleClasses"
          @click="handleSelect"
          v-html="data.display"
        ></span>
        <span v-else :class="titleClasses" @click="handleSelect">{{ data.title }}</span>
      </div>
      <collapse-transition>
        <div class="bin-tree-node-children" v-show="data.expand">
          <tree-node
            v-for="(item, i) in children"
            :key="i"
            :data="item"
            :multiple="multiple"
            :show-checkbox="showCheckbox"
            :children-key="childrenKey"
          >
          </tree-node>
        </div>
      </collapse-transition>
    </li>
  </ul>
</template>

<script>
import CollapseTransition from '../collapse-transition'
import { inject, nextTick, getCurrentInstance, provide } from 'vue'
import BCheckbox from '../checkbox'

const prefixCls = 'bin-tree'

export default {
  name: 'TreeNode',
  components: { CollapseTransition, BCheckbox },
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      },
    },
    multiple: Boolean,
    childrenKey: {
      type: String,
      default: 'children',
    },
    showCheckbox: Boolean,
  },
  setup(props) {
    const TreeInstance = inject('BTreeRoot')

    const instance = getCurrentInstance()

    provide('NodeInstance', instance)
    const handleExpand = () => {
      const item = props.data
      if (item.disabled) return
      if (item.isLeaf) return

      // async loading
      if (item[props.childrenKey].length === 0) {
        const tree = TreeInstance
        if (tree && tree.loadData) {
          props.data.loading = true
          tree.loadData(item, (children) => {
            props.data.loading = false
            if (children.length) {
              props.data[props.childrenKey] = children
              tree.updateTreeState()
              nextTick(() => handleExpand())
            }
          })
          return
        }
      }

      if (item[props.childrenKey] && item[props.childrenKey].length) {
        props.data.expand = !props.data.expand
        TreeInstance.handleToggle(props.data)
      }
    }
    const handleSelect = () => {
      if (props.data.disabled) return
      if (TreeInstance.showCheckbox && TreeInstance.checkDirectly) {
        handleCheck()
      } else {
        TreeInstance.handleSelect(props.data.nodeKey)
      }
    }
    const handleCheck = () => {
      if (props.data.disabled) return
      const changes = {
        checked: !props.data.checked && !props.data.indeterminate,
        nodeKey: props.data.nodeKey,
      }
      TreeInstance.handleCheck(changes)
    }
    return {
      TreeInstance,
      handleExpand,
      handleSelect,
      handleCheck,
    }
  },
  computed: {
    classes() {
      return [`${prefixCls}-children`]
    },
    arrowClasses() {
      return [
        `${prefixCls}-arrow`,
        {
          [`${prefixCls}-arrow-disabled`]: this.data.disabled,
          [`${prefixCls}-arrow-noop`]: this.data.isLeaf,
          [`${prefixCls}-arrow-open`]: this.data.expand,
        },
      ]
    },
    titleClasses() {
      return [
        `${prefixCls}-title`,
        {
          [`${prefixCls}-title-selected`]: this.data.selected,
        },
      ]
    },
    renderClasses() {
      return [
        `${prefixCls}-render-title`,
        {
          [`${prefixCls}-title-selected`]: this.data.selected,
        },
      ]
    },
    showArrow() {
      return (
        (this.data[this.childrenKey] && this.data[this.childrenKey].length) ||
        ('loading' in this.data && !this.data.loading)
      )
    },
    showLoading() {
      return 'loading' in this.data && this.data.loading
    },
    isLeaf() {
      return 'isLeaf' in this.data && this.data.isLeaf
    },
    children() {
      return this.data[this.childrenKey]
    },
  },
}
</script>
