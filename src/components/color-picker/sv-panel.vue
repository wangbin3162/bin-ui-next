<template>
  <div
    class="bin-color-svpanel"
    :style="{
      backgroundColor: background,
    }"
  >
    <div class="bin-color-svpanel__white"></div>
    <div class="bin-color-svpanel__black"></div>
    <div
      class="bin-color-svpanel__cursor"
      :style="{
        top: cursorTop + 'px',
        left: cursorLeft + 'px',
      }"
    >
      <div></div>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch, getCurrentInstance, onMounted } from 'vue'
import draggable from './draggable'

export default {
  name: 'BSlPanel',
  props: {
    color: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    // instance
    const instance = getCurrentInstance()
    // data
    const cursorTop = ref(0)
    const cursorLeft = ref(0)
    const background = ref('hsl(0, 100%, 50%)')
    const colorValue = computed(() => {
      const hue = props.color.get('hue')
      const value = props.color.get('value')
      return { hue, value }
    })

    // methods
    function update() {
      const saturation = props.color.get('saturation')
      const value = props.color.get('value')

      const el = instance.vnode.el
      let { clientWidth: width, clientHeight: height } = el

      cursorLeft.value = (saturation * width) / 100
      cursorTop.value = ((100 - value) * height) / 100

      background.value = 'hsl(' + props.color.get('hue') + ', 100%, 50%)'
    }

    function handleDrag(event) {
      const el = instance.vnode.el
      const rect = el.getBoundingClientRect()

      let left = event.clientX - rect.left
      let top = event.clientY - rect.top
      left = Math.max(0, left)
      left = Math.min(left, rect.width)

      top = Math.max(0, top)
      top = Math.min(top, rect.height)

      cursorLeft.value = left
      cursorTop.value = top
      props.color.set({
        saturation: (left / rect.width) * 100,
        value: 100 - (top / rect.height) * 100,
      })
    }

    // watch
    watch(
      () => colorValue.value,
      () => {
        update()
      },
    )
    // mounted
    onMounted(() => {
      draggable(instance.vnode.el, {
        drag: event => {
          handleDrag(event)
        },
        end: event => {
          handleDrag(event)
        },
      })

      update()
    })
    return {
      cursorTop,
      cursorLeft,
      background,
      colorValue,
      handleDrag,
      update,
    }
  },
}
</script>
