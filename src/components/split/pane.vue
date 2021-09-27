<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'Pane',
  props: {
    className: String,
    split: String,
  },
  setup(props) {
    return {
      classes: [props.split, props.className],
    }
  },
}
</script>
