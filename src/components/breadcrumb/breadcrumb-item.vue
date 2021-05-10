<template>
  <span class="bin-breadcrumb__item">
    <span
      :class="['bin-breadcrumb__inner', to ? 'is-link' : '']"
      ref="link"
      role="link">
      <slot></slot>
    </span>
    <i v-if="separatorIcon" class="bin-separator icon" :class="['b-iconfont','b-icon-'+separatorIcon]"></i>
    <span v-else class="bin-separator" role="presentation">{{ separator }}</span>
  </span>
</template>


<script>
import { inject, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'BBreadcrumbItem',
  props: {
    to: {},
    replace: Boolean,
  },
  setup(props) {
    const parent = inject('Breadcrumb')
    const separator = ref(parent.props.separator)
    const separatorIcon = ref(parent.props.separatorIcon)
    const link = ref(null)
    const router = useRouter()
    onMounted(() => {
      link.value.setAttribute('role', 'link')
      link.value.addEventListener('click', () => {
        if (!props.to || !router) return
        props.replace ? router.replace(props.to) : router.push(props.to)
      })
    })
    return {
      parent,
      link,
      separator,
      separatorIcon,
    }
  },
}
</script>
