import type { Theme, Options, Placement } from '../popper'
import BPopper from '../popper'
import log from '../../utils/log'
import type { PropType } from 'vue'
import { defineComponent, h, ref } from 'vue'

export default defineComponent({
  name: 'BTooltip',
  components: { BPopper },
  props: {
    theme: {
      type: String as PropType<Theme>,
      default: 'dark' as Theme,
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
      validator: (val: unknown) => {
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
      type: String as PropType<Placement>,
      default: 'top' as Placement,
    },
    // Once this option were given, the entire popper is under the users' control, top priority
    popperOptions: {
      type: Object as PropType<Options>,
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
      type: [String, Array] as PropType<string | string[]>,
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
      log.pretty('[ElTooltip]', 'You need to pass a v-model to b-tooltip when `manual` is true', 'danger')
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
})
