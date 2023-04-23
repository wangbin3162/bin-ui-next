<template>
  <div class="bin-checkbox-group" role="group" aria-label="checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
import { computed, provide, nextTick, toRefs, watch } from 'vue'
import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from '../../utils/constants'
import { useCheckboxGroup } from './useCheckbox'

export default {
  name: 'BCheckboxGroup',
  props: {
    modelValue: {
      type: [Object, Boolean, Array],
      default: () => undefined,
    },
    disabled: Boolean,
    min: {
      type: Number,
      default: undefined,
    },
    max: {
      type: Number,
      default: undefined,
    },
  },
  emits: [UPDATE_MODEL_EVENT, CHANGE_EVENT],
  setup(props, ctx) {
    const { formEmit } = useCheckboxGroup()

    const changeEvent = value => {
      ctx.emit(UPDATE_MODEL_EVENT, value)
      nextTick(() => {
        ctx.emit(CHANGE_EVENT, value)
      })
    }

    const modelValue = computed({
      get() {
        return props.modelValue
      },
      set(val) {
        changeEvent(val)
      },
    })

    provide('CheckboxGroup', {
      name: 'BCheckboxGroup',
      modelValue,
      ...toRefs(props),
      changeEvent,
    })

    watch(
      () => props.modelValue,
      val => {
        formEmit('change', [val])
      },
    )
  },
}
</script>
