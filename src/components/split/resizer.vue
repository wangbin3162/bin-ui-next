<template>
  <div :class="['bin-splitter-pane-resizer', split, className]"></div>
</template>

<script>

export default {
  props: {
    split: {
      validator: (value) => {
        return ['vertical', 'horizontal'].includes(value)
      },
      required: true,
    },
    className: String,
  },
}
</script>
