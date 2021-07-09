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
      root: ctx.node[0],// root 为拍平的数据
      node: ctx.node[1],// 当前的节点
      data: ctx.data,// 当前点选的节点
    }
    return ctx.render(params)
  },
}
