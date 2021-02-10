<template>
  <li
    v-show="visible"
    :class="[
      'bin-select-item',
      {
        [`bin-select-item-disabled`]: disabled,
        [`bin-select-item-selected`]: itemSelected,
        [`bin-select-item-focus`]: isFocused,
      },
    ]"
    @click.stop="handleSelect"
    @mousedown.prevent
  >
    <slot>{{ label || value }}</slot>
  </li>
</template>

<script lang="ts">
import { defineComponent, ref, inject, getCurrentInstance, computed } from 'vue'
import { selectKey, selectEvents } from './token'
import { getValueByPath } from '../../utils/util-helper'

export default defineComponent({
  name: 'BOption',
  componentName: 'select-item',
  props: {
    value: {
      type: [String, Number],
      required: true,
    },
    label: [String, Number],
    disabled: Boolean,
    isFocused: Boolean,
  },
  setup(props, ctx) {
    const select = inject(selectKey)
    const visible = ref(true)
    const autoComplete = ref(select?.props.autoComplete || false)
    // computed
    const isObject = computed(() => {
      return Object.prototype.toString.call(props.value).toLowerCase() === '[object object]'
    })
    const contains = (arr = [], target) => {
      if (!isObject.value) {
        return arr && arr.indexOf(target) > -1
      } else {
        return arr && arr.some(item => {
          return getValueByPath(item, 'value') === getValueByPath(target, 'value')
        })
      }
    }

    const isEqual = (a: unknown, b: unknown) => {
      if (!isObject.value) {
        return a === b
      } else {
        return getValueByPath(a, 'value') === getValueByPath(b, 'value')
      }
    }
    const itemSelected = computed(() => {
      if (!select.props.multiple) {
        return isEqual(props.value, select.props.modelValue) || isEqual(props.value, select.states.vModelValue)
      } else {
        return contains(select.props.modelValue as unknown[], props.value)
      }
    })
    const handleSelect = () => {
      if (props.disabled) return false
      const selected = {
        value: props.value,
        label: props.label || props.value,
      }

      ctx.emit(selectEvents.selected, selected)
      select.selectEmitter.emit(selectEvents.selected, selected)
    }
    // 通知父级更新集合
    const vm = getCurrentInstance().proxy
    select.optionsChild.value = [...select.optionsChild.value, { props, visible, vm }]
    return {
      autoComplete,
      itemSelected,
      handleSelect,
      visible,
    }
  },
})
</script>
