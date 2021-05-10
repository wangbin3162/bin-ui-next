<template>
  <div :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
import { computed, inject } from 'vue'

const prefixCls = 'bin-col'

export default {
  name: 'BCol',
  props: {
    span: [Number, String],
    order: [Number, String],
    offset: [Number, String],
    push: [Number, String],
    pull: [Number, String],
    className: String,
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object],
    xxl: [Number, Object],
  },
  setup(props) {
    const gutter = inject('BRow', 0)
    const classes = computed(() => {
      const classList = [
        `${prefixCls}`,
        {
          [`${prefixCls}-span-${props.span}`]: props.span,
          [`${prefixCls}-order-${props.order}`]: props.order,
          [`${prefixCls}-offset-${props.offset}`]: props.offset,
          [`${prefixCls}-push-${props.push}`]: props.push,
          [`${prefixCls}-pull-${props.pull}`]: props.pull,
          [`${props.className}`]: !!props.className,
        },
      ];

      ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].forEach(size => {
        if (typeof props[size] === 'number') {
          classList.push(`${prefixCls}-span-${size}-${props[size]}`)
        } else if (typeof props[size] === 'object') {
          let propItem = props[size]
          Object.keys(propItem).forEach(prop => {
            classList.push(
              prop !== 'span'
                ? `${prefixCls}-${size}-${prop}-${propItem[prop]}`
                : `${prefixCls}-span-${size}-${propItem[prop]}`,
            )
          })
        }
      })

      return classList
    })
    const styles = computed(() => {
      let style = {}
      if (gutter !== 0) {
        style = {
          paddingLeft: gutter / 2 + 'px',
          paddingRight: gutter / 2 + 'px',
        }
      }
      return style

    })

    return {
      gutter, classes, styles,
    }
  },
}
</script>
