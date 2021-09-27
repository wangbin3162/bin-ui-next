<template>
  <div
    class="bin-splitter-container clear-fix"
    :class="{'hide-line':hideLine,'is-active':active}"
    @mouseup="onMouseUp"
    @mousemove="onMouseMove"
  >

    <pane class="bin-splitter-pane splitter-left" :split="split" :style="leftStyle">
      <slot name="left"></slot>
    </pane>

    <resizer
      :className="className"
      :style="resizerStyle"
      :split="split"
      @mousedown.native="onMouseDown"
      @dblclick.native="onDblclick"
    ></resizer>

    <pane class="bin-splitter-pane splitter-right" :split="split" :style="rightStyle">
      <slot name="right">
        <p>type: {{ type }}</p>
        <p>resizeType: {{ resizeType }}</p>
        <p>active: {{ active }}</p>
        <p>hasMoved: {{ hasMoved }}</p>
      </slot>
    </pane>
  </div>
</template>

<script>
import { computed, reactive, toRefs } from 'vue'

import Resizer from './resizer.vue'
import Pane from './pane.vue'

export default {
  name: 'BSplit',
  components: { Resizer, Pane },
  props: {
    default: {
      type: Number,
      default: 200,
    },
    min: {
      type: Number,
      default: 60,
    },
    defaultWrapStyle: {
      type: Array,
    },
    resizerColor: {
      type: String,
    },
    hideLine: {
      type: Boolean,
    },
    split: {
      validator: (value) => {
        return ['vertical', 'horizontal'].includes(value)
      },
      default: 'vertical',
    },
    className: String,
  },
  emits: ['resize'],
  setup(props, { emit }) {
    const status = reactive({
      active: false,
      hasMoved: false,
      hasResize: false, // 是否拖拽过
      pixel: props.default,
      type: props.split === 'vertical' ? 'width' : 'height',
      resizeType: props.split === 'vertical' ? 'left' : 'top',
    })

    const leftStyle = computed(() => {
      const style = props.defaultWrapStyle
      const px = `${status.pixel}px`
      if (style && style.length > 0) {
        return { [status.type]: status.hasResize ? px : `${style[0]}` }
      }
      return { [status.type]: px }
    })
    const resizerStyle = computed(() => {
      const style = props.defaultWrapStyle
      const px = `${status.pixel}px`
      if (style && style.length > 0) {
        return { [status.resizeType]: status.hasResize ? px : `${style[0]}`, backgroundColor: props.resizerColor }
      }
      return { [status.resizeType]: px, backgroundColor: props.resizerColor }
    })
    const rightStyle = computed(() => {
      const style = props.defaultWrapStyle
      const px = `calc(100% - ${status.pixel}px)`
      if (style && style.length > 1) {
        return { [status.type]: status.hasResize ? px : `${style[1]}` }
      }
      return { [status.type]: px }
    })


    const onDblclick = () => {
      const style = props.defaultWrapStyle
      if (style && style.length > 1) {
        status.hasResize = false // 是否拖拽过
        emit('resize', status.pixel)
        return
      }

      if (!status.hasMoved) {
        status.pixel = props.default
        emit('resize', style[0])
      }
    }
    const onMouseDown = () => {
      status.active = true
      status.hasMoved = false
    }
    const onMouseUp = () => {
      status.active = false
    }
    const onMouseMove = (e) => {
      if (e.buttons === 0) {
        status.active = false
      }
      if (status.active) {
        status.hasResize = true
        let offset = 0
        let target = e.currentTarget
        if (props.split === 'vertical') {
          while (target) {
            offset += target.offsetLeft
            target = target.offsetParent
          }
        } else {
          while (target) {
            offset += target.offsetTop
            target = target.offsetParent
          }
        }
        const currentPage = props.split === 'vertical' ? e.pageX : e.pageY
        const targetOffset = props.split === 'vertical' ? e.currentTarget.offsetWidth : e.currentTarget.offsetHeight
        const px = currentPage - offset
        console.log(targetOffset)
        if (px >= props.min && px < targetOffset - props.min) {
          status.pixel = px
        }
        emit('resize', status.pixel)
        status.hasMoved = true
      }
    }

    return {
      ...toRefs(status),
      leftStyle,
      resizerStyle,
      rightStyle,
      onDblclick,
      onMouseDown,
      onMouseUp,
      onMouseMove,
    }
  },
}
</script>
