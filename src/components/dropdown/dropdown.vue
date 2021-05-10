<template>
  <b-popper
    ref="triggerVNode"
    v-model:visible="visible"
    :placement="placement"
    :theme="theme"
    pure
    :manual-mode="true"
    :trigger="[trigger]"
    popper-class="bin-dropdown__popper"
    :append-to-body="appendToBody"
    transition="zoom-in-top"
    :offset="4"
    :stop-popper-mouse-event="false"
    :gpu-acceleration="false"
    :show-arrow="false"
  >
    <template #default>
      <slot name="dropdown"></slot>
    </template>
    <template #trigger>
      <div class="bin-dropdown" @contextmenu.prevent="handleRight">
        <slot></slot>
      </div>
    </template>
  </b-popper>
</template>
<script>
import {
  provide,
  getCurrentInstance,
  ref,
  computed,
  watch,
  onMounted,
} from 'vue'
import { on, addClass, removeClass } from '../../utils/dom'
import BPopper from '../popper'

export default {
  name: 'BDropdown',
  components: { BPopper },
  props: {
    trigger: {
      type: String,
      default: 'hover',
    },
    type: String,
    appendToBody: Boolean,
    hideOnClick: {
      type: Boolean,
      default: true,
    },
    placement: {
      type: String,
      default: 'bottom',
    },
    tabindex: {
      type: Number,
      default: 0,
    },
    showTimeout: {
      type: Number,
      default: 150,
    },
    hideTimeout: {
      type: Number,
      default: 150,
    },
    theme: {
      type: String,
      default: 'light',
    },
  },
  emits: ['visible-change', 'command'],
  setup(props, { emit }) {
    const _instance = getCurrentInstance()
    const timeout = ref(null)
    const visible = ref(false)
    watch(
      () => visible.value,
      val => {
        if (val) triggerElmFocus()
        if (!val) triggerElmBlur()
        emit('visible-change', val)
      },
    )

    const focusing = ref(false)
    watch(
      () => focusing.value,
      val => {
        const selfDefine = triggerElm.value
        if (selfDefine) {
          if (val) {
            addClass(selfDefine, 'focusing')
          } else {
            removeClass(selfDefine, 'focusing')
          }
        }
      },
    )

    const triggerVNode = ref(null)
    const triggerElm = computed(() => {
      return (triggerVNode.value?.$refs.triggerRef)?.children[0] ?? {}
    })

    function handleClick() {
      if (triggerElm.value?.disabled) return
      if (visible.value) {
        hide()
      } else {
        show()
      }
    }

    function handleRight() {
      if (props.trigger !== 'contextmenu') {
        return
      }
      handleClick()
    }

    function show() {
      if (triggerElm.value?.disabled) return
      timeout.value && clearTimeout(timeout.value)
      timeout.value = window.setTimeout(
        () => {
          visible.value = true
        },
        props.trigger === 'click' ? 0 : props.showTimeout,
      )
    }

    function hide() {
      if (triggerElm.value?.disabled) return
      removeTabindex()
      if (props.tabindex >= 0) {
        resetTabindex(triggerElm.value)
      }
      clearTimeout(timeout.value)
      timeout.value = window.setTimeout(
        () => {
          visible.value = false
        },
        props.trigger === 'click' ? 0 : props.hideTimeout,
      )
    }

    function removeTabindex() {
      triggerElm.value?.setAttribute('tabindex', '-1')
    }

    function resetTabindex(ele) {
      removeTabindex()
      ele?.setAttribute('tabindex', '0')
    }

    function triggerElmFocus() {
      triggerElm.value?.focus?.()
    }

    function triggerElmBlur() {
      triggerElm.value?.blur?.()
    }

    function commandHandler(...args) {
      emit('command', ...args)
    }

    provide('BDropdown', {
      instance: _instance,
      visible,
      handleClick,
      commandHandler,
      show,
      hide,
      trigger: computed(() => props.trigger),
      hideOnClick: computed(() => props.hideOnClick),
      triggerElm,
    })

    onMounted(() => {
      if (props.trigger === 'hover') {
        on(triggerElm.value, 'mouseenter', show)
        on(triggerElm.value, 'mouseleave', hide)
      } else if (props.trigger === 'click') {
        on(triggerElm.value, 'click', handleClick)
      }

      Object.assign(_instance, {
        handleClick,
        hide,
        resetTabindex,
      })
    })

    return {
      visible,
      triggerVNode,
      handleRight,
    }
  },
}
</script>
