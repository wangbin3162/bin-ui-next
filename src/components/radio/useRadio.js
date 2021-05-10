import { ref, computed, inject, WritableComputedRef } from 'vue'
// import { elFormKey, elFormItemKey } from '../../form'

// import type { ElFormContext, ElFormItemContext } from '../../form'

export const useRadio = () => {
  // const elForm = inject(elFormKey, {} as ElFormContext)
  // const elFormItem = inject(elFormItemKey, {} as ElFormItemContext)
  const radioGroup = inject('RadioGroup', {})
  const focus = ref(false)
  const isGroup = computed(() => radioGroup?.name === 'BRadioGroup')

  return {
    isGroup,
    focus,
    radioGroup,
  }
}

export const useRadioAttrs = (props, { isGroup, radioGroup, model }) => {
  const isDisabled = computed(() => {
    return isGroup.value
      ? radioGroup.disabled || props.disabled
      : props.disabled
    // ? radioGroup.disabled || props.disabled || elForm.disabled
    // : props.disabled || elForm.disabled
  })

  const tabIndex = computed(() => {
    return (isDisabled.value || (isGroup.value && model.value !== props.label)) ? -1 : 0
  })

  return {
    isDisabled,
    tabIndex,
  }

}
