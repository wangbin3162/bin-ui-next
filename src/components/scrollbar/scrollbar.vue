<template>
  <div class="bin-scrollbar">
    <div
      ref="wrap"
      :class="[
        wrapClass,
        'bin-scrollbar__wrap',
        'bin-scrollbar__wrap--hidden-default'
      ]"
      :style="style"
      @scroll="handleScroll"
    >
      <component
        :is="tag"
        ref="resize"
        :class="['bin-scrollbar__view', viewClass]"
        :style="viewStyle"
      >
        <slot></slot>
      </component>
    </div>
    <template v-if="!native">
      <bar
        :class="{ 'always': always }"
        :move="moveX"
        :size="sizeWidth"
        :bar-style="barStyle"
        :bar-wrap-style="barWrapStyle"
      />
      <bar
        :class="{ 'always': always }"
        vertical
        :move="moveY"
        :size="sizeHeight"
        :bar-style="barStyle"
        :bar-wrap-style="barWrapStyle"
      />
    </template>
  </div>
</template>

<script>
import { addResizeListener, removeResizeListener } from '../../utils/resize-event'
import { toObject } from './util'
import { on, off } from '../../utils/dom'
import {
  ref,
  onMounted,
  onBeforeUnmount,
  nextTick,
  provide,
  computed,
} from 'vue'
import Bar from './bar'

export default {
  name: 'BScrollbar',
  components: { Bar },
  props: {
    native: {
      type: Boolean,
      default: false,
    },
    always: { // 是否是一直显示，不是悬停显示
      type: Boolean,
      default: false,
    },
    wrapStyle: {
      type: [String, Array],
      default: '',
    },
    wrapClass: {
      type: [String, Array],
      default: '',
    },
    viewClass: {
      type: [String, Array],
      default: '',
    },
    viewStyle: {
      type: [String, Array],
      default: '',
    },
    noresize: Boolean, // 如果 container 尺寸不会发生变化，最好设置它可以优化性能
    tag: {
      type: String,
      default: 'div',
    },
    barStyle: {}, // bar的样式
    barWrapStyle: {}, // bar容器样式
  },
  setup(props) {
    const sizeWidth = ref('0')
    const sizeHeight = ref('0')
    const moveX = ref(0)
    const moveY = ref(0)
    const wrap = ref(null)
    const resize = ref(null)

    provide('scroll-bar-wrap', wrap)

    const handleScroll = () => {
      if (!props.native && wrap.value) {
        moveY.value = (wrap.value.scrollTop * 100) / wrap.value.clientHeight
        moveX.value = (wrap.value.scrollLeft * 100) / wrap.value.clientWidth
      }
    }

    const update = () => {
      if (!wrap.value) return

      const heightPercentage =
        (wrap.value.clientHeight * 100) / wrap.value.scrollHeight
      const widthPercentage =
        (wrap.value.clientWidth * 100) / wrap.value.scrollWidth

      sizeHeight.value = heightPercentage < 100 ? heightPercentage + '%' : ''
      sizeWidth.value = widthPercentage < 100 ? widthPercentage + '%' : ''
    }

    onMounted(() => {
      if (props.native) return
      nextTick(update)
      if (!props.noresize) {
        on(window, 'resize', update)
        addResizeListener(resize.value, update)
      }
    })

    onBeforeUnmount(() => {
      if (props.native) return
      if (!props.noresize) {
        off(window, 'resize', update)
        removeResizeListener(resize.value, update)
      }
    })
    const style = computed(() => {
      let style = props.wrapStyle
      if (Array.isArray(props.wrapStyle)) {
        style = toObject(props.wrapStyle)
      }
      return style
    })
    return {
      moveX,
      moveY,
      sizeWidth,
      sizeHeight,
      style,
      wrap,
      resize,
      update,
      handleScroll,
    }
  },
}
</script>
