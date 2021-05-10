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
<script>
import { computed, ref } from 'vue'
import { EVENT_CODE } from '../../utils/aria'
import { on, off } from '../../utils/dom'

const TypeMap = {
  'info': 'info-circle-fill',
  'success': 'check-circle-fill',
  'warning': 'warning-circle-fill',
  'error': 'close-circle-fill',
}

export default {
  name: 'BMessage',
  props: {
    customClass: { type: String, default: '' },
    useHTML: { type: Boolean, default: false },
    duration: { type: Number, default: 3 },
    iconClass: { type: String, default: '' },
    id: { type: String, default: '' },
    message: {
      type: [String, Object],
      default: '',
    },
    onClose: {
      type: Function,
      required: true,
    },
    showClose: { type: Boolean, default: false },
    type: { type: String, default: 'info' },
    offset: { type: Number, default: 20 },
    zIndex: { type: Number, default: 0 },
  },
  data() {
    return {
      visible: false,
      closed: false,
    }
  },
  computed: {
    typeClass() {
      const type = this.type
      return type && TypeMap[type] ? `bin-message__icon b-iconfont b-icon-${TypeMap[type]} is-${type}` : ''
    },
    customStyle() {
      return {
        top: `${this.offset}px`,
        zIndex: this.zIndex,
      }
    },
  },
  watch: {
    closed(newVal) {
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
    keydown({ code }) {
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
}
</script>
