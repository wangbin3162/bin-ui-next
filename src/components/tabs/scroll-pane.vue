<template>
  <div class="nav-wrap" :class="{ 'is-scrollable': isScrollable }">
    <template v-if="!hideArrow && isScrollable">
      <span class="nav-prev" @click="handlePrev" v-if="!hidePrev">
        <i class="b-iconfont b-icon-left" />
      </span>
      <span class="nav-next" @click="handleNext" v-if="!hideNext">
        <i class="b-iconfont b-icon-right" />
      </span>
    </template>
    <div
      class="scroll-container"
      ref="scrollContainerRef"
      @wheel.prevent="handleScroll"
    >
      <div
        class="scroll-wrapper"
        ref="scrollWrapperRef"
        :style="{ transform: `translateX(${left}px)` }"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive, ref, toRefs } from 'vue'

const padding = 16 // tag's padding
export default {
  name: 'ScrollPane',
  props: {
    hideArrow: Boolean,
  },
  setup() {
    const scrollContainerRef = ref(null)
    const scrollWrapperRef = ref(null)
    const data = reactive({
      left: 0,
      isScrollable: false,
    })
    const calcWidth = () => {
      const $containerWidth = scrollContainerRef?.value.offsetWidth
      const $wrapperWidth = scrollWrapperRef?.value.offsetWidth
      data.isScrollable = $wrapperWidth > $containerWidth - padding
      if (!data.isScrollable) {
        data.left = 0
      }
    }

    const moveStep = (step, containerWidth, wrapperWidth) => {
      if (step > 0) {
        data.left = Math.min(0, data.left + step)
      } else {
        if (containerWidth - padding < wrapperWidth) {
          if (data.left < -(wrapperWidth - containerWidth + padding)) {
            // this.left = this.left
          } else {
            data.left = Math.max(
              data.left + step,
              containerWidth - wrapperWidth - padding,
            )
          }
        } else {
          data.left = 0
        }
      }
    }
    const handleScroll = (e) => {
      const eventDelta = e.wheelDelta * 0.5 || -e.deltaY * 3
      const $containerWidth = scrollContainerRef?.value.offsetWidth
      const $wrapperWidth = scrollWrapperRef?.value.offsetWidth
      moveStep(eventDelta, $containerWidth, $wrapperWidth)
    }
    const handlePrev = () => {
      const $containerWidth = scrollContainerRef?.value.offsetWidth
      const $wrapperWidth = scrollWrapperRef?.value.offsetWidth
      // 缓存容器宽度
      let moveWidth = $containerWidth - padding * 0.5
      moveStep(moveWidth, $containerWidth, $wrapperWidth)
    }

    const handleNext = () => {
      const $containerWidth = scrollContainerRef?.value.offsetWidth
      const $wrapperWidth = scrollWrapperRef?.value.offsetWidth
      // 缓存容器宽度
      let moveWidth = $containerWidth - padding * 0.5
      moveStep(-moveWidth, $containerWidth, $wrapperWidth)
    }

    const moveToTarget = ($target) => {
      const $containerWidth = scrollContainerRef?.value.offsetWidth
      const $wrapperWidth = scrollWrapperRef?.value.offsetWidth

      const $targetLeft = $target.offsetLeft
      const $targetWidth = $target.offsetWidth
      data.isScrollable = $wrapperWidth > $containerWidth - padding

      if ($targetLeft < -data.left) {
        // tag in the left
        data.left = -$targetLeft + padding
      } else if (
        $targetLeft + padding > -data.left &&
        $targetLeft + $targetWidth < -data.left + $containerWidth - padding
      ) {
        // tag in the current view
        // eslint-disable-line
      } else {
        // tag in the right
        data.left = $containerWidth - $wrapperWidth - padding
      }
      if (!data.isScrollable) {
        data.left = 0
      }
    }
    const hidePrev = computed(() => data.left === 0)
    const hideNext = computed(() => data.left === scrollContainerRef?.value.offsetWidth - scrollWrapperRef?.value.offsetWidth - padding)
    onMounted(() => {
      calcWidth()
    })
    return {
      scrollContainerRef,
      scrollWrapperRef,
      hidePrev,
      hideNext,
      ...toRefs(data),
      calcWidth,
      handleScroll,
      handlePrev,
      handleNext,
      moveToTarget,
    }
  },
}
</script>
