import { h, Transition, TransitionGroup } from 'vue'

export default {
  name: 'BMoveTransition',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'fade-transverse',
    },
    group: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { slots }) {
    return () => {
      const config = {
        name: props.name,
        appear: true,
        onBeforeLeave(el) {
          el.style.position = 'absolute'
          el.style.top = '0'
          el.style.left = '0'
          el.style.width = '100%'
          el.style.height = '100%'
          el.style.overflow = 'hidden'
        },
        onAfterLeave(el) {
          el.style = ''
        },
      }
      if (props.group) {
        return h(TransitionGroup, config, slots.default)
      }
      return h(Transition, config, slots.default)
    }
  },
}
