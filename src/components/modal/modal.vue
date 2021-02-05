<template>
  <teleport to="body" :disabled="!appendToBody">
    <transition
      name="modal-fade"
      @after-enter="afterEnter"
      @after-leave="afterLeave"
      @before-leave="beforeLeave"
    >
      <b-mask
        v-show="visible"
        :mask="mask"
        :overlay-class="maskClass"
        :z-index="zIndex"
        @click="onModalClick">
        <div
          ref="modalRef"
          :class="['bin-modal',
           { 'bin-modal-wrap': draggable},
           { 'is-fullscreen': fullscreen},
            customClass,
          ]"
          aria-modal="true"
          role="dialog"
          :aria-label="title || 'dialog'"
          :style="style"
          @click.stop=""
        >
          <div class="bin-modal-close">
            <slot name="ctrl"></slot>
            <i v-if="showClose" class="b-iconfont b-icon-close" @click="handleClose"></i>
          </div>
          <div class="bin-modal-header" v-if="$slots.title||title">
            <slot name="title">
              <span class="bin-modal-title">
                {{ title }}
              </span>
            </slot>
          </div>
          <template v-if="rendered">
            <div class="bin-modal-body">
              <slot></slot>
            </div>
          </template>
          <div v-if="$slots.footer" class="bin-modal-footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </b-mask>
    </transition>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, nextTick, onMounted, ref, toRefs, watch } from 'vue'
import type { PropType, SetupContext } from 'vue'
import {
  default as useDialog,
  CLOSE_EVENT,
  CLOSED_EVENT,
  OPEN_EVENT,
  OPENED_EVENT,
  UPDATE_MODEL_EVENT,
} from './useModal'
import BMask from './mask.vue'
import { useModalDragMove } from '../../hooks/useModalDrag'
import { addEventListenerWrap } from './addListener'

let mousePosition: { x: number; y: number } | null = null
// ref: https://github.com/ant-design/ant-design/issues/15795
const getClickPosition = (e: MouseEvent) => {
  mousePosition = {
    x: e.pageX,
    y: e.pageY,
  }
  // 100ms 内发生过点击事件，则从点击位置动画展示
  // 否则直接 zoom 展示
  // 这样可以兼容非点击方式展开
  // eslint-disable-next-line no-unused-vars
  setTimeout(() => (mousePosition = null), 100)
}

// 只有点击事件支持从鼠标位置动画展开
if (typeof window !== 'undefined' && window.document && window.document.documentElement) {
  addEventListenerWrap(document.documentElement, 'click', getClickPosition, true)
}

function getScroll(w, top) {
  let ret = w[`page${top ? 'Y' : 'X'}Offset`]
  const method = `scroll${top ? 'Top' : 'Left'}`
  if (typeof ret !== 'number') {
    const d = w.document
    ret = d.documentElement[method]
    if (typeof ret !== 'number') {
      ret = d.body[method]
    }
  }
  return ret
}

function setTransformOrigin(node, value) {
  const style = node.style;
  ['Webkit', 'Moz', 'Ms', 'ms'].forEach(prefix => {
    style[`${prefix}TransformOrigin`] = value
  })
  style[`transformOrigin`] = value
}

function offset(el) {
  const rect = el.getBoundingClientRect()
  const pos = {
    left: rect.left,
    top: rect.top,
  }
  const doc = el.ownerDocument
  const w = doc.defaultView || doc.parentWindow
  pos.left += getScroll(w, false)
  pos.top += getScroll(w, true)
  return pos
}

export default defineComponent({
  name: 'BModal',
  components: { BMask },
  props: {
    appendToBody: {
      type: Boolean,
      default: false,
    },
    beforeClose: {
      // eslint-disable-next-line no-unused-vars
      type: Function as PropType<(...args: any[]) => unknown>,
    },
    destroyOnClose: {
      type: Boolean,
      default: false,
    },
    customClass: {
      type: String,
      default: '',
    },
    maskClosable: {
      type: Boolean,
      default: true,
    },
    escClosable: {
      type: Boolean,
      default: true,
    },
    fullscreen: {
      type: Boolean,
      default: false,
    },
    lockScroll: {
      type: Boolean,
      default: true,
    },
    mask: {
      type: Boolean,
      default: true,
    },
    showClose: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: '',
    },
    openDelay: {
      type: Number,
      default: 0,
    },
    closeDelay: {
      type: Number,
      default: 0,
    },
    top: {
      type: String,
      default: '100px',
    },
    modelValue: {
      type: Boolean,
      required: true,
    },
    maskClass: String,
    width: {
      type: String,
      default: '520px',
    },
    draggable: Boolean,
    zIndex: {
      type: Number,
    },
  },
  emits: [
    OPEN_EVENT,
    OPENED_EVENT,
    CLOSE_EVENT,
    CLOSED_EVENT,
    UPDATE_MODEL_EVENT,
  ],
  setup(props, ctx) {
    const modalRef = ref<HTMLElement>(null)

    const { modelValue, draggable, destroyOnClose } = toRefs(props)
    useModalDragMove({
      visible: modelValue,
      destroyOnClose,
      draggable,
    })

    const updateCallback = (visible) => {
      if (props.modelValue) {
        // first show
        if (!visible) {
          const dialogNode = modalRef.value
          if (mousePosition) {
            const elOffset = offset(dialogNode)
            setTransformOrigin(
              dialogNode,
              `${mousePosition.x - elOffset.left}px ${mousePosition.y - elOffset.top}px`,
            )
          } else {
            setTransformOrigin(dialogNode, '')
          }
        }
      }
    }
    watch(() => props.modelValue, (val) => {
      nextTick(() => {
        updateCallback(!val)
      })
    })
    onMounted(() => {
      nextTick(() => {
        updateCallback(false)
      })
    })
    return {
      ...useDialog(props, ctx as SetupContext, modalRef),
      modalRef,
    }
  },
})
</script>
