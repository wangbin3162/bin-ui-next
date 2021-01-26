<template>
  <i :class="['b-iconfont', 'b-icon-' + name]" :style="getStyle"></i>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'BIcon',
  props: {
    name: {
      type: String,
      default: '',
    },
    size: [Number, String],
    color: String,
  },
  setup(props) {
    const getStyle = computed(() => {
      return {
        fontSize: props.size ? `${props.size}px` : null,
        color: props.color,
      }
    })
    return { getStyle }
  },
})
</script>
