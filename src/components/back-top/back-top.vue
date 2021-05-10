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

<script>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { throttle } from '../../utils/util'
import { scrollTop, on, off } from '../../utils/dom'

export default {
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
  setup(props, ctx) {
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

    const throttledScrollHandler = throttle(onScroll, 50)

    onMounted(() => {
      container.value = document
      el.value = document.documentElement
      if (props.target) {
        el.value = document.querySelector(props.target)
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
}
</script>
