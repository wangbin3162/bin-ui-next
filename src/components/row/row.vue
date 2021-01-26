<template>
  <div :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>
<script lang="ts">

import { defineComponent, computed, PropType } from 'vue'

const prefixCls = 'bin-row'

export default defineComponent({
  name: 'BRow',
  props: {
    type: {
      type: String,
      validator(value) {
        return ['flex'].includes(value)
      },
    },
    align: {
      type: String as PropType<'top' | 'middle' | 'bottom'>,
      validator(value) {
        return ['top', 'middle', 'bottom'].includes(value)
      },
    },
    justify: {
      type: String as PropType<'start' | 'end' | 'space-around' | 'space-between'>,
      validator(value) {
        return ['start', 'end', 'center', 'space-around', 'space-between'].includes(value)
      },
    },
    gutter: {
      type: Number,
      default: 0,
    },
    className: String,
  },
  setup(props) {
    const classes = computed(() => {
      return [
        {
          [`${prefixCls}`]: !props.type,
          [`${prefixCls}-${props.type}`]: !!props.type,
          [`${prefixCls}-${props.type}-${props.align}`]: !!props.align,
          [`${prefixCls}-${props.type}-${props.justify}`]: !!props.justify,
          [`${props.className}`]: !!props.className,
        },
      ]
    })
    const styles = computed(() => {
      let style = {}
      if (props.gutter !== 0) {
        style = {
          marginLeft: props.gutter / -2 + 'px',
          marginRight: props.gutter / -2 + 'px',
        }
      }
      return style
    })
    return {
      classes, styles,
    }
  },
})
</script>
