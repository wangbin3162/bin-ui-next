<template>
  <div :style="{ cursor:active ? 'col-resize' : '', userSelect:active ? 'none' : ''}"
       class="bin-splitter-container clear-fix"
       @mouseup="onMouseUp"
       @mousemove="onMouseMove">

    <pane class="bin-splitter-pane splitter-left" :split="split" :style="{ [type]: percent+'%'}">
      <slot name="left"></slot>
    </pane>

    <resizer :className="className"
             :style="{ [resizeType]: percent+'%'}"
             :split="split"
             @mousedown.native="onMouseDown"
             @click.native="onClick"></resizer>

    <pane class="bin-splitter-pane splitter-right" :split="split" :style="{ [type]: 100-percent+'%'}">
      <slot name="right"></slot>
    </pane>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

import Resizer from './resizer.vue'
import Pane from './pane.vue'

export default {
  name: 'BSplit',
  components: { Resizer, Pane },
  props: {
    minPercent: {
      type: Number,
      default: 10,
    },
    defaultPercent: {
      type: Number,
      default: 20,
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
    const data = reactive({
      active: false,
      hasMoved: false,
      height: null,
      percent: props.defaultPercent,
      type: props.split === 'vertical' ? 'width' : 'height',
      resizeType: props.split === 'vertical' ? 'left' : 'top',
    })
    const onClick = () => {
      if (!data.hasMoved) {
        data.percent = props.defaultPercent
        emit('resize', data.percent)
      }
    }
    const onMouseDown = () => {
      data.active = true
      data.hasMoved = false
    }
    const onMouseUp = () => {
      data.active = false
    }
    const onMouseMove = (e) => {
      if (e.buttons === 0 || e.which === 0) {
        data.active = false
      }
      if (data.active) {
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
        const percent = Math.floor(((currentPage - offset) / targetOffset) * 10000) / 100
        if (percent > props.minPercent && percent < 100 - props.minPercent) {
          data.percent = percent
        }
        emit('resize', percent)
        data.hasMoved = true
      }
    }
    return {
      ...toRefs(data),
      onClick,
      onMouseDown,
      onMouseUp,
      onMouseMove,
    }
  },
}
</script>
