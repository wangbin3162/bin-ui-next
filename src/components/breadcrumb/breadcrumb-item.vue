<template>
  <span class="bin-breadcrumb__item">
    <span
      :class="['bin-breadcrumb__inner']"
      ref="link"
      role="link">
      <slot></slot>
    </span>
    <i v-if="separatorIcon" class="bin-separator icon" :class="['b-iconfont','b-icon-'+separatorIcon]"></i>
    <span v-else class="bin-separator" role="presentation">{{ separator }}</span>
  </span>
</template>

<script>
import { inject, ref } from 'vue'

export default {
  name: 'BBreadcrumbItem',
  setup() {
    const parent = inject('Breadcrumb')
    const separator = ref(parent.props.separator)
    const separatorIcon = ref(parent.props.separatorIcon)
    const link = ref(null)
    return {
      parent,
      link,
      separator,
      separatorIcon,
    }
  },
}
</script>
