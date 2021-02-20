import {
  ref,
  computed,
  inject,
  getCurrentInstance,
  // watch,
} from 'vue'
import { toTypeString } from '@vue/shared'
import { UPDATE_MODEL_EVENT } from '../../utils/constants'
import { PartialReturnType } from '../../utils/types'
// import { elFormKey, elFormItemKey } from '@element-plus/form'
import { ICheckboxGroupInstance, ICheckboxProps } from './checkbox.type'

// import type { ElFormContext, ElFormItemContext } from '@element-plus/form'

export const useCheckboxGroup = () => {
  // const elForm = inject(elFormKey, {} as ElFormContext)
  // const elFormItem = inject(elFormItemKey, {} as ElFormItemContext)
  const checkboxGroup = inject<ICheckboxGroupInstance>('CheckboxGroup', {})
  const isGroup = computed(() => checkboxGroup && checkboxGroup?.name === 'BCheckboxGroup')
  return {
    isGroup,
    checkboxGroup,
    // elForm,
    // elFormItemSize,
    // elFormItem,
  }
}

const useModel = (props: ICheckboxProps) => {
  let selfModel = false
  const { emit } = getCurrentInstance()
  const { isGroup, checkboxGroup } = useCheckboxGroup()
  const isLimitExceeded = ref(false)
  const store = computed(() => checkboxGroup ? checkboxGroup.modelValue?.value : props.modelValue)
  const model = computed({
    get() {
      return isGroup.value
        ? store.value
        : props.modelValue ?? selfModel
    },

    set(val: unknown) {
      if (isGroup.value && Array.isArray(val)) {
        isLimitExceeded.value = false

        if (checkboxGroup.min !== undefined && val.length < checkboxGroup.min.value) {
          isLimitExceeded.value = true
        }
        if (checkboxGroup.max !== undefined && val.length > checkboxGroup.max.value) {
          isLimitExceeded.value = true
        }

        isLimitExceeded.value === false && checkboxGroup?.changeEvent?.(val)
      } else {
        emit(UPDATE_MODEL_EVENT, val)
        selfModel = val as boolean
      }
    },
  })

  return {
    model,
    isLimitExceeded,
  }
}

const useCheckboxStatus = (props: ICheckboxProps, { model }: PartialReturnType<typeof useModel>) => {
  const focus = ref(false)

  // eslint-disable-next-line vue/return-in-computed-property
  const isChecked = computed(() => {
    const value = model.value
    if (toTypeString(value) === '[object Boolean]') {
      return value
    } else if (Array.isArray(value)) {
      return value.includes(props.label)
    } else if (value !== null && value !== undefined) {
      return value === props.trueLabel
    }
  })

  return {
    isChecked,
    focus,
  }
}

const useDisabled = (
  props: ICheckboxProps,
  { model, isChecked }: PartialReturnType<typeof useModel> & PartialReturnType<typeof useCheckboxStatus>,
) => {
  const { isGroup, checkboxGroup } = useCheckboxGroup()
  const isLimitDisabled = computed(() => {
    const max = checkboxGroup.max?.value
    const min = checkboxGroup.min?.value
    return !!(max || min) && (model.value.length >= max && !isChecked.value) ||
      (model.value.length <= min && isChecked.value)
  })
  const isDisabled = computed(() => {
    const disabled = props.disabled //|| elForm.disabled
    return isGroup.value
      ? checkboxGroup.disabled?.value || disabled || isLimitDisabled.value
      : props.disabled // || elForm.disabled
  })

  return {
    isDisabled,
    isLimitDisabled,
  }
}

const setStoreValue = (props: ICheckboxProps, { model }: PartialReturnType<typeof useModel>) => {
  function addToStore() {
    if (
      Array.isArray(model.value) &&
      !model.value.includes(props.label)
    ) {
      model.value.push(props.label)
    } else {
      model.value = props.trueLabel || true
    }
  }

  props.checked && addToStore()
}

const useEvent = (props: ICheckboxProps, { isLimitExceeded }: PartialReturnType<typeof useModel>) => {
  // const { elFormItem } = useCheckboxGroup()
  const { emit } = getCurrentInstance()

  function handleChange(e: InputEvent) {
    if (isLimitExceeded.value) return
    const target = e.target as HTMLInputElement
    const value = target.checked
      ? props.trueLabel ?? true
      : props.falseLabel ?? false

    emit('change', value, e)
  }

  // watch(() => props.modelValue, val => {
  //   elFormItem.formItemMitt?.emit('el.form.change', [val])
  // })

  return {
    handleChange,
  }
}

export const useCheckbox = (props: ICheckboxProps) => {
  const { model, isLimitExceeded } = useModel(props)
  const { focus, isChecked } = useCheckboxStatus(props, { model })
  const { isDisabled } = useDisabled(props, { model, isChecked })
  const { handleChange } = useEvent(props, { isLimitExceeded })

  setStoreValue(props, { model })

  return {
    isChecked,
    isDisabled,
    model,
    handleChange,
    focus,
  }
}
