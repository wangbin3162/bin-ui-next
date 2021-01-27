<template>
  <div :class="anchorLinkClasses">
    <a class="bin-anchor-link-title" :href="href" :data-href="href" :style="activeColor"
       @click.prevent="goAnchor" :title="title">{{ title }}</a>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, computed } from 'vue'
import type { Ref } from 'vue'
import type { IAnchorProps } from './anchor'

interface IAnchorLink {
  href: string
  title: string
  scrollOffset: number
}

interface IAnchorInject {
  props: IAnchorProps
  linksRef: Ref<IAnchorLink[]>
}

export default defineComponent({
  name: 'BAnchorLink',
  props: {
    href: String,
    title: String,
    scrollOffset: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const prefix = 'bin-anchor-link'
    const parent: IAnchorInject = inject('BAnchor')
    const selectLink = inject('chooseLink')

    const anchorLinkClasses = computed(() => {
      return [
        prefix,
        parent.data.currentLink === props.href ? `${prefix}-active` : '',
      ]
    })

    const activeColor = computed(() => {
      return {
        color: parent.data.currentLink === props.href ? parent.props.activeColorStr : null,
      }
    })

    parent.linksRef.value = [...parent.linksRef.value, props]
    const goAnchor = () => {
      selectLink(props.href)
    }
    return {
      parent,
      selectLink,
      anchorLinkClasses,
      activeColor,
      goAnchor,
    }
  },
})
</script>
