<template>
  <teleport to="body" :disabled="!appendToBody">
    <div class="bin-drawer-root">
      <transition name="fade-in">
        <div
          :class="maskClasses"
          :style="wrapStyles"
          v-show="visible"
          v-if="mask"
          @click="handleMask"
        ></div>
      </transition>
      <div
        :class="wrapClasses"
        :style="wrapStyles"
        ref="wrapRef"
        @click="handleWrapClick"
      >
        <transition :name="'move-' + placement" @after-leave="wrapShow = false">
          <div :class="classes" :style="mainStyles" v-show="visible">
            <div :class="contentClasses" ref="content">
              <a class="bin-drawer-close" v-if="showClose" @click="close">
                <slot name="close">
                  <i class="b-iconfont b-icon-close"></i>
                </slot>
              </a>
              <div class="bin-drawer-header" v-if="$slots.header || title">
                <slot name="header">
                  <div class="bin-drawer-header-inner">{{ title }}</div>
                </slot>
              </div>
              <div class="bin-drawer-body" :style="styles">
                <slot></slot>
              </div>
              <div class="bin-drawer-footer" v-if="$slots.footer">
                <div style="text-align: right">
                  <slot name="footer"> </slot>
                </div>
              </div>
            </div>
            <div
              class="bin-drawer-drag"
              :class="{ 'bin-drawer-drag-left': placement === 'left' }"
              v-if="draggable"
              @mousedown="handleTriggerMousedown"
            >
              <slot name="trigger">
                <div class="bin-drawer-drag-move-trigger">
                  <div class="bin-drawer-drag-move-trigger-point">
                    <i></i><i></i><i></i><i></i><i></i>
                  </div>
                </div>
              </slot>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </teleport>
</template>

<script>
import { ref, watch } from 'vue'

import { on, off } from '../../utils/dom'
import { useLockScreen } from '../../hooks'
import { transferIncrease } from '../../utils/config'

const prefixCls = 'bin-drawer'

export default {
  name: 'BDrawer',
  props: {
    modelValue: Boolean,
    title: String,
    width: {
      type: [Number, String],
      default: 300,
    },
    minWidth: {
      type: [Number, String],
      default: 300,
    },
    showClose: {
      type: Boolean,
      default: true,
    },
    maskClosable: {
      type: Boolean,
      default: true,
    },
    mask: {
      type: Boolean,
      default: true,
    },
    styles: Object,
    placement: {
      validator: (value) => {
        return ['left', 'right'].includes(value)
      },
      default: 'right',
    },
    zIndex: {
      type: Number,
      default: 1000,
    },
    appendToBody: Boolean,
    className: String,
    lockScroll: {
      type: Boolean,
      default: true,
    },
    inner: Boolean,
    // Whether drag and drop is allowed to adjust width
    draggable: Boolean,
    beforeClose: Function,
  },
  setup(props) {
    const visible = ref(props.modelValue)
    const wrapShow = ref(false)
    const wrapRef = ref(null)
    const canMove = ref(false)
    const dragWidth = ref(props.width)
    const wrapperWidth = ref(props.width)
    const wrapperLeft = ref(0)
    const modalIndex = transferIncrease()

    if (props.lockScroll) {
      useLockScreen(visible)
    }
    watch(
      () => props.modelValue,
      (val) => {
        visible.value = val
        if (val) wrapShow.value = true
      },
    )
    return {
      wrapRef,
      wrapShow,
      visible,
      canMove,
      dragWidth,
      wrapperWidth,
      wrapperLeft,
      modalIndex,
    }
  },
  emits: ['update:modelValue', 'close', 'resize-width'],
  computed: {
    wrapClasses() {
      return [
        `${prefixCls}-wrap`,
        {
          [`${prefixCls}-hidden`]: !this.wrapShow,
          [`${this.className}`]: !!this.className,
          [`${prefixCls}-no-mask`]: !this.mask,
          [`${prefixCls}-wrap-inner`]: this.inner,
          [`${prefixCls}-wrap-dragging`]: this.canMove,
        },
      ]
    },
    wrapStyles() {
      return {
        zIndex: this.modalIndex + this.zIndex,
      }
    },
    mainStyles() {
      let style = {}
      const width = parseInt(this.dragWidth)
      const styleWidth = {
        width: width <= 100 ? `${width}%` : `${width}px`,
      }
      Object.assign(style, styleWidth)
      return style
    },
    contentClasses() {
      return [
        `${prefixCls}-content`,
        {
          [`${prefixCls}-content-no-mask`]: !this.mask,
        },
      ]
    },
    classes() {
      return [
        `${prefixCls}`,
        `${prefixCls}-${this.placement}`,
        {
          [`${prefixCls}-no-header`]: !(this.$slots.header || this.title),
          [`${prefixCls}-inner`]: this.inner,
        },
      ]
    },
    maskClasses() {
      return [
        `${prefixCls}-mask`,
        {
          [`${prefixCls}-mask-inner`]: this.inner,
        },
      ]
    },
  },
  methods: {
    close() {
      if (!this.beforeClose) {
        return this.handleClose()
      }
      const before = this.beforeClose()
      if (before && before.then) {
        before.then(() => {
          this.handleClose()
        })
      } else {
        this.handleClose()
      }
    },
    handleClose() {
      this.visible = false
      this.$emit('update:modelValue', false)
      this.$emit('close')
    },
    handleMask() {
      if (this.maskClosable && this.mask) {
        this.close()
      }
    },
    handleWrapClick(event) {
      // use indexOf,do not use === ,because bin-modal-wrap can have other custom className
      const className = event.target.getAttribute('class')
      if (className && className.indexOf(`${prefixCls}-wrap`) > -1)
        this.handleMask()
    },
    handleMousemove(event) {
      if (!this.canMove || !this.draggable) return
      // 更新容器宽度和距离左侧页面距离，如果是window则距左侧距离为0
      this.handleSetWrapperWidth()
      const left = event.pageX - this.wrapperLeft
      // 如果抽屉方向为右边，宽度计算需用容器宽度减去left
      let width = this.placement === 'right' ? this.wrapperWidth - left : left
      // 限定最小宽度
      width = Math.max(width, parseFloat(this.minWidth))
      event.atMin = width === parseFloat(this.minWidth)
      // 如果当前width不大于100，视为百分比
      if (width <= 100) width = (width / this.wrapperWidth) * 100
      this.dragWidth = width
      this.$emit('resize-width', parseInt(this.dragWidth))
    },
    handleSetWrapperWidth() {
      const { width, left } = this.wrapRef.getBoundingClientRect()
      this.wrapperWidth = width
      this.wrapperLeft = left
    },
    handleMouseup() {
      if (!this.draggable) return
      this.canMove = false
    },
    handleTriggerMousedown() {
      this.canMove = true
      // 防止鼠标选中抽屉中文字，造成拖动trigger触发浏览器原生拖动行为
      window.getSelection().removeAllRanges()
    },
  },
  mounted() {
    if (this.visible) this.wrapShow = true
    on(document, 'mousemove', this.handleMousemove)
    on(document, 'mouseup', this.handleMouseup)
    this.handleSetWrapperWidth()
  },
  beforeUnmount() {
    off(document, 'mousemove', this.handleMousemove)
    off(document, 'mouseup', this.handleMouseup)
  },
}
</script>
