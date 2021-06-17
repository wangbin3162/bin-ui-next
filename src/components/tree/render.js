export default {
  name: 'RenderCell',
  functional: true,
  props: {
    render: Function,
    data: Object,
    node: Array,
  },
  render: (ctx) => {
    const params = {
      root: ctx.node[0],
      node: ctx.node[1],
      data: ctx.data,
    }
    return ctx.render(params)
  },
}
