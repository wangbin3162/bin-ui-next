import { cloneVNode, h, ref } from 'vue'
import BPopper, { defaultProps } from '../popper'
import { UPDATE_MODEL_EVENT } from '../../utils/constants'
import { getFirstValidNode } from '../../utils/vnode'
import { throwError } from '../../utils/log'

export default {
  name: 'BTooltip',
  components: { BPopper },
  props: {
    ...defaultProps,
    manual: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: Boolean,
      validator: (val) => {
        return typeof val === 'boolean'
      },
      default: undefined,
    },
    openDelay: {
      type: Number,
      default: 0,
    },
    visibleArrow: {
      type: Boolean,
      default: true,
    },
    tabindex: {
      type: Number,
      default: 0,
    },
  },
  emits: [UPDATE_MODEL_EVENT],
  setup(props, ctx) {
    // when manual mode is true, v-model must be passed down
    if (props.manual && typeof props.modelValue === 'undefined') {
      throwError('[BTooltip]', 'You need to pass a v-model to b-tooltip when `manual` is true')
    }

    const popper = ref(null)

    const onUpdateVisible = val => {
      ctx.emit(UPDATE_MODEL_EVENT, val)
    }

    const updatePopper = () => {
      return popper.value.update()
    }

    return {
      popper,
      onUpdateVisible,
      updatePopper,
    }
  },
  render() {
    const {
      $slots,
      content,
      manual,
      openDelay,
      onUpdateVisible,
      showAfter,
      visibleArrow,
      modelValue,
      tabindex,
    } = this

    const throwErrorTip = () => {
      throwError('[BTooltip]', 'you need to provide a valid default slot.')
    }

    return h(
      BPopper,
      {
        ...Object.keys(defaultProps).reduce((result, key) => {
          return { ...result, [key]: this[key] }
        }, {}),
        ref: 'popper',
        manualMode: manual,
        showAfter: openDelay || showAfter, // this is for mapping API due to we decided to rename the current openDelay API to showAfter for better readability,
        showArrow: visibleArrow,
        visible: modelValue,
        'onUpdate:visible': onUpdateVisible,
      },
      {
        default: () => ($slots.content ? $slots.content() : content),
        trigger: () => {
          if ($slots.default) {
            const firstVnode = getFirstValidNode($slots.default(), 1)
            if (!firstVnode) throwErrorTip()
            return cloneVNode(firstVnode, { tabindex }, true)
          }
          throwErrorTip()
        },
      },
    )
  },
}
