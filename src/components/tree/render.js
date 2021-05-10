import { h, inject } from 'vue'

export default {
  name: 'RenderCell',
  functional: true,
  props: {
    node: {
      type: Object,
      required: true,
    },
    renderContent: Function,
  },
  setup(props) {
    const nodeInstance = inject('NodeInstance')
    return () => {
      const node = props.node
      return (
        props.renderContent
          ? props.renderContent(h, { _self: nodeInstance, node, data: node })
          : h('span', { class: 'bin-tree-title' }, [node.title])
      )
    }
  },
}
