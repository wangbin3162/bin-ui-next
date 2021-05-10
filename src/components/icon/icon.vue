<template>
  <i :class="['b-iconfont', 'b-icon-' + name]" :style="iconStyle"></i>
</template>

<script>
export default {
  name: 'BIcon',
  props: {
    name: {
      type: String,
      default: '',
    },
    size: [Number, String],
    color: String,
  },
  computed: {
    iconStyle() {
      return {
        fontSize: this.size ? `${this.size}px` : null,
        color: this.color,
      }
    },
  },
}
</script>
