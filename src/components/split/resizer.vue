<template>
  <div :class="['bin-splitter-pane-resizer', split, className]"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    split: {
      validator(value) {
        return ['vertical', 'horizontal'].includes(value)
      },
      required: true,
    },
    className: String,
  },
})
</script>
