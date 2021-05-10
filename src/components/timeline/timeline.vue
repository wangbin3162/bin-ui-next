<template>
  <ul :class="cpClasses">
    <slot></slot>
  </ul>
</template>

<script>
const prefixCls = 'bin-timeline'

export default {
  name: 'BTimeline',
  props: {
    pending: Boolean,
  },
  computed: {
    cpClasses() {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-pending`]: this.pending,
        },
      ]
    },
  },
}
</script>
