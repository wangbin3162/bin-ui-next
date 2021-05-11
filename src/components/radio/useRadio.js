import { ref, computed, inject } from 'vue'
import useForm from '../../hooks/useForm'

export const useRadio = () => {
  const { BForm, BFormItem, formEmit } = useForm()
  const radioGroup = inject('RadioGroup', {})
  const focus = ref(false)
  const isGroup = computed(() => radioGroup?.name === 'BRadioGroup')

  return {
    isGroup,
    focus,
    radioGroup,
    BForm, BFormItem, formEmit,
  }
}

export const useRadioAttrs = (props, { isGroup, radioGroup, BForm, model }) => {
  const isDisabled = computed(() => {
    return isGroup.value
      ? radioGroup.disabled || props.disabled || BForm.disabled
      : props.disabled || BForm.disabled
  })

  const tabIndex = computed(() => {
    return (isDisabled.value || (isGroup.value && model.value !== props.label)) ? -1 : 0
  })

  return {
    isDisabled,
    tabIndex,
  }
}
