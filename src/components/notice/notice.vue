<template>
  <transition name="bin-notice-fade">
    <div
      v-show="visible"
      :id="id"
      :class="['bin-notice', customClass, horizontalClass]"
      :style="noticeStyles"
      role="alert"
      @mouseenter="clearTimer()"
      @mouseleave="startTimer()"
      @click="click"
    >
      <i
        v-if="type || iconClass"
        class="bin-notice__icon"
        :class="[typeClass, iconClass]"
      ></i>
      <div
        class="bin-notice__group"
        :class="{ 'is-with-icon': typeClass || iconClass }"
      >
        <h2 class="bin-notice__title" v-text="title"></h2>
        <div v-show="message" class="bin-notice__content">
          <slot>
            <p v-if="!useHTML">{{ message }}</p>
            <p v-else v-html="message"></p>
          </slot>
        </div>
        <div
          v-if="showClose"
          class="b-iconfont b-icon-close"
          @click.stop="close"
        ></div>
      </div>
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
  name: 'BNotice',
  props: {
    customClass: { type: String, default: '' },
    useHTML: { type: Boolean, default: false },
    duration: { type: Number, default: 4.5 },
    iconClass: { type: String, default: '' },
    id: { type: String, default: '' },
    message: {
      type: [String, Object],
      default: '',
    },
    offset: { type: Number, default: 0 },
    onClick: {
      type: Function,
    },
    onClose: {
      type: Function,
      required: true,
    },
    position: {
      type: String,
      default: 'top-right',
    },
    showClose: { type: Boolean, default: true },
    title: { type: String, default: '' },
    type: { type: String, default: '' },
    zIndex: { type: Number, default: 0 },
  },
  emits: ['close', 'click'],
  setup(props) {

    const typeClass = computed(() => {
      const type = props.type
      return type && TypeMap[type] ? `b-iconfont b-icon-${TypeMap[type]} is-${type}` : ''
    })

    const horizontalClass = computed(() => {
      return props.position.indexOf('right') > 1 ? 'right' : 'left'
    })

    const verticalProperty = computed(() => {
      return props.position.startsWith('top') ? 'top' : 'bottom'
    })

    const noticeStyles = computed(() => {
      return {
        [verticalProperty.value]: `${props.offset}px`,
        zIndex: props.zIndex,
      }
    })

    const visible = ref(false)
    const closed = ref(false)
    const timer = ref(null)

    return {
      horizontalClass,
      typeClass,
      noticeStyles,
      verticalProperty,
      visible,
      closed,
      timer,
    }
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
    // start counting down to destroy notification instance
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
    click() {
      this?.onClick()
    },
    close() {
      this.closed = true
      this.timer = null
    },
    keydown({ code }) {
      if (code === EVENT_CODE.delete || code === EVENT_CODE.backspace) {
        this.clearTimer() // press delete/backspace clear timer
      } else if (code === EVENT_CODE.esc) {
        // press esc to close the notification
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
