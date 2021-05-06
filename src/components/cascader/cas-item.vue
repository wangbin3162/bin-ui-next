<template>
  <li :class="classes">
    {{ data.label }}
    <i class="b-iconfont b-icon-right" v-if="showArrow"></i>
    <i v-if="showLoading" class="b-iconfont b-icon-loading bin-cascade-menu-item-loading"></i>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CasItem',
  props: {
    data: Object,
    prefixCls: String,
    tmpItem: Object,
  },
  computed: {
    classes() {
      return [
        `${this.prefixCls}-menu-item`,
        {
          [`${this.prefixCls}-menu-item-active`]: this.tmpItem.value === this.data.value,
          [`${this.prefixCls}-menu-item-disabled`]: this.data.disabled,
        },
      ]
    },
    showArrow() {
      return (this.data.children && this.data.children.length) || ('loading' in this.data && !this.data.loading)
    },
    showLoading() {
      return 'loading' in this.data && this.data.loading
    },
  },
})
</script>
