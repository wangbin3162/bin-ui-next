export default {
  name: 'TableExpand',
  functional: true,
  props: {
    row: Object,
    render: Function,
    index: Number,
    column: {
      type: Object,
      default: null,
    },
  },
  render: (ctx) => {
    const params = {
      row: ctx.row,
      index: ctx.index,
    }
    if (ctx.column) params.column = ctx.column
    return ctx.render(params)
  },
}
