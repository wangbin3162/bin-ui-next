import BPopper from '../popper'
import { throwError } from '../../utils/log'
import { h, ref } from 'vue'

export default {
  name: 'BTooltip',
  components: { BPopper },
  props: {
    theme: {
      type: String,
      default: 'dark',
    },
    class: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    enterable: {
      type: Boolean,
      default: true,
    },
    hideAfter: {
      type: Number,
      default: 0,
    },
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
    offset: {
      type: Number,
      default: 12,
    },
    // This API should be decaprecate since it's confusing with close-delay
    openDelay: {
      type: Number,
      default: 0,
    },
    placement: {
      type: String,
      default: 'top',
    },
    // Once this option were given, the entire popper is under the users' control, top priority
    popperOptions: {
      type: Object,
      default: () => null,
    },
    // Alias for open-delay, which controls the popper's appearing time
    showAfter: {
      type: Number,
      default: 0,
    },
    transition: {
      type: String,
      default: 'fade-in-linear',
    },
    trigger: {
      type: [String, Array],
      default: () => ['hover'],
    },
    visibleArrow: {
      type: Boolean,
      default: true,
    },
    stopPopperMouseEvent: {
      type: Boolean,
      default: true,
    },
    appendToBody: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue'],
  setup(props, ctx) {
    // when manual mode is true, v-model must be passed down
    if (props.manual && typeof props.modelValue === 'undefined') {
      throwError('BTooltip', 'You need to pass a v-model to b-tooltip when `manual` is true')
    }

    const popper = ref(null)

    const onUpdateVisible = val => {
      ctx.emit('update:modelValue', val)
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
      disabled,
      theme,
      enterable,
      hideAfter,
      manual,
      offset,
      openDelay,
      onUpdateVisible,
      placement,
      popperOptions,
      showAfter,
      transition,
      trigger,
      visibleArrow,
      stopPopperMouseEvent,
      appendToBody,
    } = this
    return h(
      BPopper,
      {
        ref: 'popper',
        appendToBody,
        class: this.class,
        disabled,
        theme,
        enterable,
        hideAfter,
        manualMode: manual,
        offset,
        placement,
        showAfter: openDelay || showAfter, // this is for mapping API due to we decided to rename the current openDelay API to showAfter for better readability,
        showArrow: visibleArrow,
        stopPopperMouseEvent,
        transition,
        trigger,
        popperOptions, // Breakings!: Once popperOptions is provided, the whole popper is under user's control, ElPopper nolonger generates the default options for popper, this is by design if the user wants the full control on @PopperJS, read the doc @https://popper.js.org/docs/v2/
        visible: this.modelValue,
        'onUpdate:visible': onUpdateVisible,
      },
      {
        default: () => ($slots.content ? $slots.content() : content),
        trigger: () => $slots.default(),
      },
    )
  },
}
