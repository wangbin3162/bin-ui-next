<template>
  <b-popper
    :class="className"
    ref="triggerVNode"
    :placement="placement"
    :theme="theme"
    v-model:visible="visible"
    :manual-mode="true"
    :trigger="[trigger]"
    :append-to-body="appendToBody"
    :transition="transition"
    :offset="offset"
    :stop-popper-mouse-event="stopPopperMouseEvent"
    :gpu-acceleration="false"
    :disabled="disabled"
    :show-arrow="visibleArrow"
  >
    <template #default>
      <slot name="content">{{ content }}</slot>
    </template>
    <template #trigger>
      <div class="bin-tooltip" v-click-outside:[triggerElm]="hide">
        <slot></slot>
      </div>
    </template>
  </b-popper>
</template>

<script>
import BPopper from '../popper'
import { computed, onMounted, ref } from 'vue'
import { on } from '../../utils/dom'
import { ClickOutside } from '../../directives'

export default {
  name: 'BTooltip',
  components: { BPopper },
  directives: { ClickOutside },
  props: {
    theme: {
      type: String,
      default: 'dark',
    },
    className: {
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
    openDelay: {
      type: Number,
      default: 0,
    },
    placement: {
      type: String,
      default: 'top',
    },
    showDelay: {
      type: Number,
      default: 0,
    },
    hideDelay: {
      type: Number,
      default: 0,
    },
    transition: {
      type: String,
      default: 'fade-in-linear',
    },
    trigger: {
      type: String,
      default: () => 'hover',
    },
    visibleArrow: {
      type: Boolean,
      default: true,
    },
    stopPopperMouseEvent: {
      type: Boolean,
      default: false,
    },
    appendToBody: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const triggerVNode = ref(null)
    const visible = ref(false)
    const timeout = ref(null)

    const triggerElm = computed(() => (triggerVNode.value?.$refs.triggerRef) ?? {})

    function handleClick() {
      if (triggerElm.value?.disabled) return
      if (visible.value) {
        hide()
      } else {
        show()
      }
    }

    function show() {
      if (triggerElm.value?.disabled) return
      timeout.value && clearTimeout(timeout.value)
      timeout.value = window.setTimeout(
        () => {
          visible.value = true
        },
        props.trigger === 'click' ? 0 : props.showDelay,
      )
    }

    function hide() {
      if (triggerElm.value?.disabled) return
      clearTimeout(timeout.value)
      timeout.value = window.setTimeout(
        () => {
          visible.value = false
        },
        props.trigger === 'click' ? 0 : props.hideDelay,
      )
    }

    onMounted(() => {
      if (props.trigger === 'hover') {
        on(triggerElm.value, 'mouseenter', show)
        on(triggerElm.value, 'mouseleave', hide)
      } else if (props.trigger === 'click') {
        on(triggerElm.value, 'click', handleClick)
      }
    })
    return {
      triggerVNode,
      triggerElm,
      visible,
      timeout,
      hide,
    }
  },
}
</script>
