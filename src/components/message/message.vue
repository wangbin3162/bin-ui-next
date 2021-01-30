<template>
  <transition name="bin-message-fade">
    <div
      v-show="visible"
      :id="id"
      :class="[
        'bin-message',
        type && !iconClass ? `bin-message--${type}` : '',
        showClose ? 'is-closable' : '',
        customClass,
      ]"
      :style="customStyle"
      role="alert"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
    >
      <i v-if="type || iconClass" :class="[typeClass, iconClass]"></i>
      <slot>
        <p v-if="!useHTML" class="bin-message__content">
          {{ message }}
        </p>
        <p v-else class="bin-message__content" v-html="message"></p>
      </slot>
      <div
        v-if="showClose"
        class="b-iconfont b-icon-close"
        @click.stop="close"
      ></div>
    </div>
  </transition>
</template>
<script lang="ts">
import { defineComponent, computed, ref, PropType } from 'vue'
import type { MessageVM } from './types'
import { EVENT_CODE } from '../../utils/aria'
import { on, off } from '../../utils/dom'

const TypeMap = {
  'info': 'info-circle-fill',
  'success': 'check-circle-fill',
  'warning': 'warning-circle-fill',
  'error': 'close-circle-fill',
}

export default defineComponent({
  name: 'ElMessage',
  props: {
    customClass: { type: String, default: '' },
    useHTML: { type: Boolean, default: false },
    duration: { type: Number, default: 3 },
    iconClass: { type: String, default: '' },
    id: { type: String, default: '' },
    message: {
      type: [String, Object] as PropType<string | MessageVM>,
      default: '',
    },
    onClose: {
      type: Function as PropType<() => void>,
      required: true,
    },
    showClose: { type: Boolean, default: false },
    type: { type: String, default: 'info' },
    offset: { type: Number, default: 20 },
    zIndex: { type: Number, default: 0 },
  },
  setup(props) {
    const typeClass = computed(() => {
      const type = props.type
      return type && TypeMap[type]
        ? `bin-message__icon b-iconfont b-icon-${TypeMap[type]} is-${type}`
        : ''
    })

    const customStyle = computed(() => {
      return {
        top: `${props.offset}px`,
        zIndex: props.zIndex,
      }
    })

    const visible = ref(false)
    const closed = ref(false)
    const timer = ref(null)

    return {
      typeClass,
      customStyle,
      visible,
      closed,
      timer,
    }
  },
  watch: {
    closed(newVal: boolean) {
      if (newVal) {
        this.visible = false
        on(this.$el, 'transitionend', this.destroyElement)
      }
    },
  },
  mounted() {
    this.startTimer()
    this.visible = true
    on(document, 'keydown', this.keydown)
  },
  beforeUnmount() {
    off(document, 'keydown', this.keydown)
  },
  methods: {
    destroyElement() {
      this.visible = false
      off(this.$el, 'transitionend', this.destroyElement)
      this.onClose()
    },
    // start counting down to destroy message instance
    startTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.close()
          }
        }, this.duration * 1000)
      }
    },
    // clear timer
    clearTimer() {
      clearTimeout(this.timer)
      this.timer = null
    },
    // Event handlers
    close() {
      this.closed = true
      this.timer = null
    },
    keydown({ code }: KeyboardEvent) {
      if (code === EVENT_CODE.esc) {
        // press esc to close the message
        if (!this.closed) {
          this.close()
        }
      } else {
        this.startTimer() // resume timer
      }
    },
  },
})
</script>
