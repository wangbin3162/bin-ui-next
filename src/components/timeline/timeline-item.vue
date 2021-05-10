<template>
  <li :class="itemClasses">
    <div :class="tailClasses"></div>
    <div :class="headClasses" :style="customStyle" ref="dotEl">
      <slot name="dot"></slot>
    </div>
    <div :class="contentClasses">
      <slot></slot>
    </div>
  </li>
</template>

<script>
import { onMounted, ref } from 'vue'

const prefixCls = 'bin-timeline'

export default {
  name: 'BTimelineItem',
  props: {
    color: {
      type: String,
      default: 'primary',
    },
    dotTop: String,
  },
  setup() {
    const dotEl = ref(null)
    let dot = ref(false)
    onMounted(() => {
      dot.value = !!(dotEl.value.innerHTML.length)
    })
    return { dotEl, dot }
  },
  computed: {
    itemClasses() {
      return `${prefixCls}-item`
    },
    tailClasses() {
      return `${prefixCls}-item-tail`
    },
    headClasses() {
      return [
        `${prefixCls}-item-head`,
        {
          [`${prefixCls}-item-head-custom`]: this.dot,
          [`${prefixCls}-item-head-${this.color}`]: this.headColorShow,
        },
      ]
    },
    headColorShow() {
      return ['primary', 'success', 'info', 'warning', 'danger'].includes(this.color)
    },
    customStyle() {
      let style = {}
      if (this.color) {
        if (!this.headColorShow) {
          style = {
            'color': this.color,
            'border-color': this.color,
            top: this.dotTop,
          }
        } else {
          style = {
            top: this.dotTop,
          }
        }
      }

      return style
    },
    contentClasses() {
      return `${prefixCls}-item-content`
    },
  },
}
</script>
