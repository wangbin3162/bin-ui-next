import { defineComponent, h } from 'vue'

export default defineComponent({
  name: 'RenderCell',
  functional: true,
  props: {
    render: Function,
  },
  setup(props) {
    // 返回render函数
    return () => props.render(h)
  },
})
