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

interface IAnchorProps {
  icon: string
  iconSize: number
  activeColor: string
  offsetTop: number
  bounds: number
  showInk: boolean
  scrollOffset: number
  target: string
}

interface IAnchorLink {
  href?: string
  title?: string
  scrollOffset?: number
}

interface IAnchorData {
  inkTop: number
  currentLink: string
  currentId: string
  titlesOffsetArr: [number],
}

interface IAnchorInject {
  data: IAnchorData
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
    const selectLink: any = inject('chooseLink')

    const anchorLinkClasses = computed(() => {
      return [
        prefix,
        parent.data.currentLink === props.href ? `${prefix}-active` : '',
      ]
    })

    const activeColor = computed(() => {
      return {
        color: parent.data.currentLink === props.href ? parent.props.activeColor : null,
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
