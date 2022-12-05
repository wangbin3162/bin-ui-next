import { inject } from 'vue'

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
  setup(props) {
    const tableRoot = inject('BTable', {})
    const render = tableRoot.slots[props.column.slot]
    if (!render) {
      throw Error('columns slot should be write <template> in table slots')
    }
    return () =>
      render({
        row: props.row,
        column: props.column,
        index: props.index,
      })
  },
}
