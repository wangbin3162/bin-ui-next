import { FormItemKey, FormKey, FormEvents } from '../components/form'
import { inject, computed } from 'vue'

export const VALIDATE_STATE_MAP = {
  validating: 'b-icon-loading icon-is-rotating',
  success: 'b-icon-check-circle',
  error: 'b-icon-close-circle',
}
export default function useForm() {
  const BForm = inject(FormKey, {})
  const BFormItem = inject(FormItemKey, {})


  const validateState = computed(() => BFormItem.validateState || '')

  const validateIcon = computed(() => VALIDATE_STATE_MAP[validateState.value])

  // blur, change,value
  function formEmit(type, value) {
    BFormItem.formItemMitt?.emit(FormEvents[type], value)
  }

  return {
    BForm,
    BFormItem,
    validateState,
    validateIcon,
    formEmit,
  }
}
