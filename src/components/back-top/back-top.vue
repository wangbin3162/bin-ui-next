<template>
  <transition name="fade-in">
    <div
      v-if="visible"
      :style="{
        'right': styleRight,
        'bottom': styleBottom
      }"
      class="bin-back-top"
      @click.stop="handleClick"
    >
      <slot>
        <div class="bin-back-top-inner">
          <i class="b-iconfont b-icon-caret-up"></i>
        </div>
      </slot>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { debounce } from '../../utils/util'
import { scrollTop, on, off } from '../../utils/dom'

interface BackTopProps {
  visibilityHeight: number
  target: string
  right: number
  bottom: number
  duration: number
}

export default defineComponent({
  name: 'BBackTop',
  props: {
    visibilityHeight: {
      type: Number,
      default: 400,
    },
    target: {
      type: String,
      default: '',
    },
    right: {
      type: Number,
      default: 40,
    },
    bottom: {
      type: Number,
      default: 40,
    },
    duration: {
      type: Number,
      default: 1000,
    },
  },
  emits: ['click'],
  setup(props: BackTopProps, ctx) {
    const el = ref(null)
    const container = ref(null)
    const visible = ref(false)
    const styleBottom = computed(() => `${props.bottom}px`)
    const styleRight = computed(() => `${props.right}px`)

    const onScroll = () => {
      visible.value = el.value.scrollTop >= props.visibilityHeight
    }
    const handleClick = event => {
      scrollTop(el.value, el.value.scrollTop, 0, props.duration)
      ctx.emit('click', event)
    }

    const throttledScrollHandler = debounce(onScroll, 50, false)

    onMounted(() => {
      container.value = document
      el.value = document.documentElement
      if (props.target) {
        el.value = document.querySelector(props.target)
        console.log(el.value)
        if (!el.value) {
          throw new Error(`target is not existed: ${props.target}`)
        }
        container.value = el.value
      }
      on(container.value, 'scroll', throttledScrollHandler)
    })
    onBeforeUnmount(() => {
      off(container.value, 'scroll', throttledScrollHandler)
    })

    return {
      el,
      container,
      visible,
      styleBottom,
      styleRight,
      handleClick,
    }
  },
})
</script>
