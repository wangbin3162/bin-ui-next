<template>
  <transition name="fade-in-linear" @after-leave="$emit('vanish')">
    <b-mask
      v-show="visible"
      :z-index="state.zIndex"
      :mask-class="['is-message-box', modalClass]"
      :mask="mask"
      @click.self="handleWrapperClick"
    >
      <div
        ref="root"
        :aria-label="title || 'dialog'"
        aria-modal="true"
        :class="[ 'bin-message-box',customClass, ]"
      >
        <div
          v-if="title !== null && title !== undefined"
          class="bin-message-box__header"
        >
          <i v-if="icon"
             :class="['bin-message-box__status',`b-iconfont b-icon-${icon} is-${type}` ]"
          ></i>
          <div class="bin-message-box__title">
            <span>{{ title }}</span>
          </div>
        </div>
        <div v-if="hasMessage" class="bin-message-box__message">
          <slot>
            <p v-if="!useHTML">{{ message }}</p>
            <p v-else v-html="message"></p>
          </slot>
        </div>
        <div class="bin-message-box__footer">
          <b-button
            v-if="showCancelButton"
            :loading="state.cancelButtonLoading"
            :class="[cancelButtonClass]"
            @click="handleAction('cancel')"
          >
            {{ state.cancelText }}
          </b-button>
          <b-button
            v-show="showConfirmButton"
            ref="confirmRef"
            :loading="state.confirmButtonLoading"
            :class="[confirmButtonClasses]"
            type="primary"
            :disabled="state.confirmButtonDisabled"
            @click="handleAction('confirm')"
          >
            {{ state.confirmText }}
          </b-button>
        </div>
      </div>
    </b-mask>
  </transition>
</template>

<script>
import {
  nextTick,
  onMounted,
  onBeforeUnmount,
  computed,
  watch,
  reactive,
  ref,
} from 'vue'
import BButton from '../button'
import BMask from '../modal/mask.vue'
import { useModal, useLockScreen, useRestoreActive } from '../../hooks'
import { transferIncrease } from '../../utils/config'
import { on, off } from '../../utils/dom'

const TypeMap = {
  'info': 'info-circle',
  'success': 'check-circle',
  'warning': 'warning-circle',
  'error': 'close-circle',
}

export default {
  name: 'BMessageBox',
  components: {
    BMask,
    BButton,
  },
  props: {
    beforeClose: {
      type: Function,
      default: undefined,
    },
    callback: Function,
    cancelText: {
      type: String,
      default: '取消',
    },
    cancelButtonClass: String,
    maskClosable: {
      type: Boolean,
      default: true,
    },
    escClosable: {
      type: Boolean,
      default: true,
    },
    closeOnHashChange: {
      type: Boolean,
      default: true,
    },
    confirmText: {
      type: String,
      default: '确定',
    },
    confirmButtonClass: String,
    container: {
      type: String, // default append to body
      default: 'body',
    },
    customClass: String,
    useHTML: Boolean,
    iconClass: String,
    lockScroll: {
      type: Boolean,
      default: true,
    },
    message: [String, Object],
    modalFade: { // implement this feature
      type: Boolean,
      default: true,
    },
    modalClass: String,
    mask: {
      type: Boolean,
      default: true,
    },
    showCancelButton: Boolean,
    showConfirmButton: {
      type: Boolean,
      default: true,
    },
    type: String,
    title: String,
    zIndex: Number,
  },
  emits: ['vanish', 'action'],
  setup(props, { emit }) {
    // const popup = usePopup(props, doClose)
    const visible = ref(false)
    // s represents state
    const state = reactive({
      action: '',
      confirmButtonLoading: false,
      cancelButtonLoading: false,
      cancelText: props.cancelText,
      confirmButtonDisabled: false,
      confirmText: props.confirmText,
      zIndex: transferIncrease(),
    })
    const icon = computed(() => props.iconClass || (props.type && TypeMap[props.type] ? TypeMap[props.type] : ''))
    const hasMessage = computed(() => !!props.message)
    const confirmRef = ref(null)

    const confirmButtonClasses = computed(() => `b-button--primary ${props.confirmButtonClass}`)

    watch(() => visible.value, val => {
      if (val) {
        if (props.type === 'alert' || props.type === 'confirm') {
          nextTick().then(() => {
            confirmRef.value?.$el?.focus?.()
          })
        }
        state.zIndex = transferIncrease()
      }
    })

    onMounted(async () => {
      await nextTick()
      if (props.closeOnHashChange) {
        on(window, 'hashchange', doClose)
      }
    })

    onBeforeUnmount(() => {
      if (props.closeOnHashChange) {
        off(window, 'hashchange', doClose)
      }
    })

    function doClose() {
      if (!visible.value) return
      visible.value = false
      nextTick(() => {
        if (state.action) emit('action', state.action)
      })
    }

    const handleWrapperClick = () => {
      if (props.maskClosable) {
        handleAction('cancel')
      }
    }

    const handleAction = (action) => {
      state.action = action

      if (props.beforeClose) {
        props.beforeClose?.(action, state, doClose)
      } else {
        doClose()
      }
    }

    const handleClose = () => {
      handleAction('close')
    }

    if (props.escClosable) {
      useModal({
        handleClose,
      }, visible)
    }

    // locks the screen to prevent scroll
    if (props.lockScroll) {
      useLockScreen(visible)
    }

    // restore to prev active element.
    useRestoreActive(visible)

    return {
      state,
      visible,
      hasMessage,
      icon,
      confirmButtonClasses,
      confirmRef,
      doClose, // for outside usage
      handleClose, // for out side usage
      handleWrapperClick,
      handleAction,
    }
  },
}
</script>
