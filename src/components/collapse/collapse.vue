<template>
  <div :class="['bin-collapse',{'bin-collapse-simple': simple}]">
    <slot></slot>
  </div>
</template>

<script>
import {  onUnmounted, provide, ref, watch} from 'vue'

import mitt from 'mitt'
import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from '../../utils/constants'

export default {
  name: 'BCollapse',
  props: {
    accordion: Boolean,
    modelValue: {
      type: [Array, String, Number],
      default: () => [],
    },
    simple: Boolean,
  },
  emits: [UPDATE_MODEL_EVENT, CHANGE_EVENT],
  setup(props, { emit }) {
    const activeNames = ref([].concat(props.modelValue))
    const collapseMitt = mitt()

    const setActiveNames = _activeNames => {
      activeNames.value = [].concat(_activeNames)
      const value = props.accordion ? activeNames.value[0] : activeNames.value
      emit(UPDATE_MODEL_EVENT, value)
      emit(CHANGE_EVENT, value)
    }

    const handleItemClick = name => {
      if (props.accordion) {
        setActiveNames(
          (activeNames.value[0] || activeNames.value[0] === 0) &&
          activeNames.value[0] === name ? '' : name)
      } else {
        let _activeNames = activeNames.value.slice(0)
        const index = _activeNames.indexOf(name)

        if (index > -1) {
          _activeNames.splice(index, 1)
        } else {
          _activeNames.push(name)
        }
        setActiveNames(_activeNames)
      }
    }

    watch(
      () => props.modelValue,
      () => {
        activeNames.value = [].concat(props.modelValue)
      },
    )

    collapseMitt.on('item-click', handleItemClick)

    onUnmounted(() => {
      collapseMitt.all.clear()
    })

    provide('collapse', {
      activeNames,
      collapseMitt,
    })

    return {
      activeNames,
      setActiveNames,
      handleItemClick,
    }
  },
}
</script>
