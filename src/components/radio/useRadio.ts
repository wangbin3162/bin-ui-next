import { ref, computed, inject, WritableComputedRef } from 'vue'
// import { elFormKey, elFormItemKey } from '../../form'
import radioGroupKey from './token'

import type { ComputedRef } from 'vue'
// import type { ElFormContext, ElFormItemContext } from '../../form'
import type { RadioGroupContext } from './token'

export const useRadio = () => {

  // const elForm = inject(elFormKey, {} as ElFormContext)
  // const elFormItem = inject(elFormItemKey, {} as ElFormItemContext)
  const radioGroup = inject(radioGroupKey, {} as RadioGroupContext)
  const focus = ref(false)
  const isGroup = computed(() => radioGroup?.name === 'BRadioGroup')

  return {
    isGroup,
    focus,
    radioGroup,
  }
}

interface IUseRadioAttrsProps {
  disabled?: boolean
  label: string | number | boolean
}

interface IUseRadioAttrsState {
  isGroup: ComputedRef<boolean>
  radioGroup: RadioGroupContext
  // elForm: ElFormContext
  model: WritableComputedRef<string | number | boolean>
}

export const useRadioAttrs = (props: IUseRadioAttrsProps, {
  isGroup,
  radioGroup,
  // elForm,
  model,
}: IUseRadioAttrsState) => {
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
