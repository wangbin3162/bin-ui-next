import { h, inject } from 'vue'

export default {
  name: 'TableSlot',
  functional: true,
  props: {
    row: Object,
    index: Number,
    column: {
      type: Object,
      default: null,
    },
  },
  setup() {
    const tableRoot = inject('BTable', {})
    return {
      tableRoot,
    }
  },
  render: (ctx) => {
    return h('div', ctx.injections.tableRoot.$scopedSlots[ctx.props.column.slot]({
      row: ctx.props.row,
      column: ctx.props.column,
      index: ctx.props.index,
    }))
  },
}
