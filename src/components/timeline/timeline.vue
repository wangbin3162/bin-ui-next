<template>
  <ul :class="cpClasses">
    <slot></slot>
  </ul>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

const prefixCls = 'bin-timeline'

export default defineComponent({
  name: 'BTimeline',
  props: {
    pending: Boolean,
  },
  setup(props) {
    const cpClasses = computed(() => {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-pending`]: props.pending,
        },
      ]
    })
    return {
      cpClasses,
    }
  },
})
</script>
