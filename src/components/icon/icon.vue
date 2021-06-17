<template>
  <i :class="['b-iconfont', 'b-icon-' + name]" :style="iconStyle" @click="handleClick"></i>
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
    type: {
      type: String,
      validator(val) {
        return ['icon', 'button'].includes(val)
      },
      default: 'icon',
    },
  },
  emits: ['click'],
  computed: {
    iconStyle() {
      return {
        fontSize: this.size ? `${this.size}px` : null,
        color: this.color,
        cursor: this.type === 'button' ? 'pointer' : null,
      }
    },
  },
  methods: {
    handleClick() {
      if (this.type === 'button') {
        this.$emit('click')
      }
    },
  },
}
</script>
