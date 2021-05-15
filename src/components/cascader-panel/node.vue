<template>
  <li
    :id="`${menuId}-${node.uid}`"
    role="menuitem"
    :aria-haspopup="!isLeaf"
    :aria-owns="isLeaf ? null : menuId"
    :aria-expanded="inExpandingPath"
    :tabindex="expandable ? -1 : null"
    :class="[
      'bin-cascader-node',
      checkStrictly && 'is-selectable',
      inExpandingPath && 'in-active-path',
      inCheckedPath && 'in-checked-path',
      node.checked && 'is-active',
      !expandable && 'is-disabled'
    ]"
    @mouseenter="handleHoverExpand"
    @focus="handleHoverExpand"
    @click="handleClick"
  >
    <!-- prefix -->
    <b-checkbox
      v-if="multiple"
      :model-value="node.checked"
      :indeterminate="node.indeterminate"
      :disabled="isDisabled"
      @click.stop
      @update:model-value="handleCheck"
    />
    <b-radio
      v-else-if="checkStrictly"
      :model-value="checkedNodeId"
      :label="node.uid"
      :disabled="isDisabled"
      @update:model-value="handleCheck"
      @click.stop
    >
      <span></span>
    </b-radio>
    <i v-else-if="isLeaf && node.checked" class="b-iconfont b-icon-check bin-cascader-node__prefix"></i>

    <!-- content -->
    <node-content />

    <!-- postfix -->
    <template v-if="!isLeaf">
      <i v-if="node.loading" class="b-iconfont b-icon-loading icon-is-rotating bin-cascader-node__postfix"></i>
      <i v-else class="b-iconfont b-icon-right bin-cascader-node__postfix"></i>
    </template>
  </li>
</template>

<script>
import { computed, inject, h } from 'vue'
import BCheckbox from '../checkbox'
import BRadio from '../radio'

export default {
  name: 'BCascaderNode',
  components: {
    BCheckbox,
    BRadio,
    NodeContent: {
      render() {
        const { node, panel } = this.$parent
        const { data, label } = node
        const { renderLabelFn } = panel
        return h(
          'span',
          { class: 'bin-cascader-node__label' },
          renderLabelFn ? renderLabelFn({ node, data }) : label,
        )
      },
    },
  },
  props: {
    node: {
      type: Object,
      required: true,
    },
    menuId: String,
  },
  emits: ['expand'],
  setup(props, { emit }) {
    const panel = inject('BPanel', {})

    const isHoverMenu = computed(() => panel.isHoverMenu)
    const multiple = computed(() => panel.config.multiple)
    const checkStrictly = computed(() => panel.config.checkStrictly)
    const checkedNodeId = computed(() => panel.checkedNodes[0]?.uid)
    const isDisabled = computed(() => props.node.isDisabled)
    const isLeaf = computed(() => props.node.isLeaf)
    const expandable = computed(() => checkStrictly.value && !isLeaf.value || !isDisabled.value)
    const inExpandingPath = computed(() => isInPath(panel.expandingNode))
    // only useful in check-strictly mode
    const inCheckedPath = computed(() => checkStrictly.value && panel.checkedNodes.some(isInPath))

    const isInPath = (node) => {
      const { level, uid } = props.node
      return node?.pathNodes[level - 1]?.uid === uid
    }

    const doExpand = () => {
      if (inExpandingPath.value) return
      panel.expandNode(props.node)
    }

    const doCheck = (checked) => {
      const { node } = props
      if (checked === node.checked) return
      panel.handleCheckChange(node, checked)
    }

    const doLoad = () => {
      panel.lazyLoad(props.node, () => {
        if (!isLeaf.value) doExpand()
      })
    }

    const handleHoverExpand = (e) => {
      if (!isHoverMenu.value) return
      handleExpand()
      !isLeaf.value && emit('expand', e)
    }

    const handleExpand = () => {
      const { node } = props
      // do not exclude leaf node because the menus expanded might have to reset
      if (!expandable.value || node.loading) return
      node.loaded ? doExpand() : doLoad()
    }

    const handleClick = () => {
      if (isHoverMenu.value && !isLeaf.value) return

      if (isLeaf.value && !isDisabled.value && !checkStrictly.value && !multiple.value) {
        handleCheck(true)
      } else {
        handleExpand()
      }
    }

    const handleCheck = (checked) => {
      if (!props.node.loaded) {
        doLoad()
      } else {
        doCheck(checked)
        !checkStrictly.value && doExpand()
      }
    }

    return {
      panel,
      isHoverMenu,
      multiple,
      checkStrictly,
      checkedNodeId,
      isDisabled,
      isLeaf,
      expandable,
      inExpandingPath,
      inCheckedPath,
      handleHoverExpand,
      handleExpand,
      handleClick,
      handleCheck,
    }
  },
}
</script>
