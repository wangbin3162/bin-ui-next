<template>
  <div class="bin-breadcrumb" aria-label="Breadcrumb" role="navigation" ref="el">
    <slot></slot>
  </div>
</template>

<script>
import { onMounted, provide, ref } from 'vue'

export default {
  name: 'BBreadcrumb',
  props: {
    separator: {
      type: String,
      default: '/',
    },
    separatorIcon: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const el = ref(null)
    provide('Breadcrumb', { props })
    onMounted(() => {
      const items = el.value.querySelectorAll('.bin-breadcrumb__item')
      if (items.length) {
        items[items.length - 1].setAttribute('aria-current', 'page')
      }
    })
    return { el }
  },
}
</script>
