<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'BSpace',
  props: {
    prefixCls: {
      type: String,
      default: 'bin-space',
    },
  },
  setup(props) {
    return {
      classes: computed(() => `${props.prefixCls}__item`),
    }
  },
}
</script>
