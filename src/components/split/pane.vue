<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Pane',
  props: {
    className: String,
    split: String,
  },
  setup(props) {
    return {
      classes: [props.split, props.className],
      percent: 50,
    }
  },
})
</script>
