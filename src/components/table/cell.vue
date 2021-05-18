<template>
  <div :class="classes" ref="cell">
    <template v-if="renderType === 'index'">
      <span>{{ column.indexMethod ? column.indexMethod(row) : (naturalIndex + 1) }}</span>
    </template>
    <template v-if="renderType === 'selection'">
      <b-checkbox :model-value="checked" @click.native.stop @change="toggleSelect"
                  :disabled="disabled"></b-checkbox>
    </template>
    <template v-if="renderType === 'html'">
      <span v-html="row[column.key]"></span>
    </template>
    <template v-if="renderType === 'normal'">
      <template v-if="column.tooltip &&tooltipTheme">
        <b-tooltip
          class="bin-table-cell-tooltip-content"
          append-to-body
          :theme="tooltipTheme"
        >
          <span>{{ row[column.key] }}</span>
          <template #content>
            <div>{{ row[column.key] }}</div>
          </template>
        </b-tooltip>
      </template>
      <span
        v-else-if="column.tooltip && !tooltipTheme"
        class="bin-table-cell-tooltip-content"
        :title="row[column.key]"
      >{{ row[column.key] }}
      </span>
      <span v-else>{{ row[column.key] }}</span>
    </template>
    <template v-if="renderType === 'expand' && !row._disableExpand">
      <div :class="expandCls" @click="toggleExpand">
        <b-icon name="right"></b-icon>
      </div>
    </template>
    <table-expand
      v-if="renderType === 'render'"
      :row="row"
      :column="column"
      :index="index"
      :render="column.render"></table-expand>
    <table-slot
      v-if="renderType === 'slot'"
      :row="row"
      :column="column"
      :index="index"></table-slot>
  </div>
</template>

<script>
import TableExpand from './main/expand'
import TableSlot from './main/slot'
import BIcon from '../icon/icon'
import BCheckbox from '../checkbox/checkbox'
import { inject, ref } from 'vue'
import BTooltip from '../tooltip'

export default {
  name: 'TableCell',
  components: { BTooltip, BCheckbox, BIcon, TableExpand, TableSlot },
  props: {
    prefixCls: String,
    row: Object,
    column: Object,
    naturalIndex: Number, // 重建数据索引
    index: Number, // _index of data
    checked: Boolean,
    disabled: Boolean,
    expanded: Boolean,
    fixed: {
      type: [Boolean, String],
      default: false,
    },
  },
  computed: {
    classes() {
      return [
        `${this.prefixCls}-cell`,
        {
          [`${this.prefixCls}-hidden`]: !this.fixed && this.column.fixed && (this.column.fixed === 'left' || this.column.fixed === 'right'),
          [`${this.prefixCls}-cell-ellipsis`]: this.column.ellipsis || false,
          [`${this.prefixCls}-cell-tooltip`]: this.column.tooltip || false,
          [`${this.prefixCls}-cell-with-expand`]: this.renderType === 'expand',
          [`${this.prefixCls}-cell-with-selection`]: this.renderType === 'selection',
        },
      ]
    },
    expandCls() {
      return [
        `${this.prefixCls}-cell-expand`,
        { [`${this.prefixCls}-cell-expand-expanded`]: this.expanded },
      ]
    },
  },
  setup(props) {
    const tooltipContentRef = ref(null)
    const TableRoot = inject('BTable', {})
    const renderType = ref(getRenderType())

    function getRenderType() {
      const column = props.column
      if (column.type === 'index') {
        return 'index'
      } else if (column.type === 'selection') {
        return 'selection'
      } else if (column.type === 'html') {
        return 'html'
      } else if (column.type === 'expand') {
        return 'expand'
      } else if (column.render) {
        return 'render'
      } else if (column.slot) {
        return 'slot'
      } else {
        return 'normal'
      }
    }

    function toggleSelect() {
      TableRoot.toggleSelect(props.index)
    }

    function toggleExpand() {
      TableRoot.toggleExpand(props.index)
    }

    return {
      tooltipTheme: TableRoot.props.tooltipTheme,
      renderType,
      tooltipContentRef,
      toggleSelect,
      toggleExpand,
    }
  },
}
</script>
