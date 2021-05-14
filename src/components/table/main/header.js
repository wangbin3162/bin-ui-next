import { h } from 'vue'

export default {
  name: 'TableRenderHeader',
  functional: true,
  props: {
    render: Function,
    column: Object,
    index: Number,
  },
  render: (ctx) => {
    const params = {
      column: ctx.props.column,
      index: ctx.props.index,
    }
    return ctx.props.render(h, params)
  },
}
