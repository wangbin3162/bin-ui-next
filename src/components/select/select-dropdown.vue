<template>
  <div
    class="bin-select-dropdown"
    :class="[{ 'is-multiple': isMultiple }, popperClass]"
    :style="{ minWidth: minWidth }"
  >
    <slot></slot>
  </div>
</template>

<script>
import { computed, onMounted, onBeforeUnmount, inject, ref } from 'vue'
import { addResizeListener, removeResizeListener } from '../../utils/resize-event'
import { selectKey } from './token'


export default {
  name: 'BSelectDropdown',
  componentName: 'BSelectDropdown',
  setup() {
    const select = inject(selectKey)
    // computed
    const popperClass = computed(() => select.props.popperClass)
    const isMultiple = computed(() => select.props.multiple)
    const minWidth = ref('')

    function updateMinWidth() {
      minWidth.value = select.selectWrapper?.getBoundingClientRect().width + 'px'
    }

    onMounted(() => {
      // TODO: updatePopper
      // popper.value.update()
      addResizeListener(select.selectWrapper, updateMinWidth)
    })

    onBeforeUnmount(() => {
      removeResizeListener(select.selectWrapper, updateMinWidth)
    })

    return {
      minWidth,
      popperClass,
      isMultiple,
    }
  },
}
</script>
