<template>
  <div
    class="bin-form-item"
    :class="formItemClass"
  >
    <LabelWrap
      :is-auto-width="labelStyle.width === 'auto'"
      :update-all="elForm.labelWidth === 'auto'"
    >
      <label
        v-if="label || $slots.label"
        :for="labelFor"
        class="bin-form-item__label"
        :style="labelStyle"
      >
        <slot name="label">{{ label }}</slot>
        <span class="item-suffix">{{ elForm.labelSuffix }}</span>
      </label>
    </LabelWrap>
    <div class="bin-form-item__content" :style="contentStyle">
      <slot></slot>
      <transition name="zoom-in-top">
        <slot
          v-if="shouldShowError"
          name="error"
          :error="validateMessage"
        >
          <div
            class="bin-form-item__error"
            :class="{
              'bin-form-item__error--inline':
                typeof inlineMessage === 'boolean'
                  ? inlineMessage
                  : elForm.inlineMessage || false
            }"
          >
            {{ validateMessage }}
          </div>
        </slot>
      </transition>
    </div>
  </div>
</template>

<script>
import {
  provide,
  inject,
  ref,
  watch,
  computed,
  nextTick,
  onMounted,
  onBeforeUnmount,
  getCurrentInstance,
  toRefs,
  reactive,
} from 'vue'
import { NOOP } from '@vue/shared'
import AsyncValidator from 'async-validator'
import LabelWrap from './label-wrap'
import { getPropByPath } from '../../utils/util-helper'
import { validSize } from '../../utils/validator-size'
import mitt from 'mitt'
import { FormKey, FormItemKey, FormEvents } from './token'

export default {
  name: 'BFormItem',
  componentName: 'BFormItem',
  components: { LabelWrap },
  props: {
    label: String,
    labelWidth: String,
    prop: String,
    required: {
      type: Boolean,
      default: undefined,
    },
    rules: [Object, Array],
    error: String,
    validateStatus: String,
    for: String,
    inlineMessage: {
      type: [String, Boolean],
      default: '',
    },
    showMessage: {
      type: Boolean,
      default: true,
    },
    size: {
      types: String,
      validator: validSize,
    },
  },
  setup(props) {
    const formItemMitt = mitt()

    const elForm = inject(FormKey, {})
    const validateState = ref('')
    const validateMessage = ref('')
    const validateDisabled = ref(false)

    const computedLabelWidth = ref('')

    const vm = getCurrentInstance()
    const isNested = computed(() => {
      let parent = vm.parent
      while (parent && parent.type.name !== 'BForm') {
        if (parent.type.name === 'BFormItem') {
          return true
        }
        parent = parent.parent
      }
      return false
    })


    let initialValue = undefined

    watch(
      () => props.error,
      val => {
        validateMessage.value = val
        validateState.value = val ? 'error' : ''
      }, {
        immediate: true,
      },
    )
    watch(
      () => props.validateStatus,
      val => {
        validateState.value = val
      },
    )

    const labelFor = computed(() => props.for || props.prop)
    const labelStyle = computed(() => {
      if (elForm.labelPosition === 'top') return {}
      const labelWidth = props.labelWidth || elForm.labelWidth
      if (labelWidth) {
        return {
          width: labelWidth,
        }
      }
      return {}
    })
    const contentStyle = computed(() => {
      if (elForm.labelPosition === 'top' || elForm.inline) {
        return {}
      }
      if (!props.label && !props.labelWidth && isNested.value) {
        return {}
      }
      const labelWidth = props.labelWidth || elForm.labelWidth
      const ret = {}
      if (labelWidth === 'auto') {
        if (props.labelWidth === 'auto') {
          ret.marginLeft = computedLabelWidth.value
        } else if (elForm.labelWidth === 'auto') {
          ret.marginLeft = elForm.autoLabelWidth
        }
      } else {
        ret.marginLeft = labelWidth
      }
      return ret
    })
    const fieldValue = computed(() => {
      const model = elForm.model
      if (!model || !props.prop) {
        return
      }

      let path = props.prop
      if (path.indexOf(':') !== -1) {
        path = path.replace(/:/, '.')
      }

      return getPropByPath(model, path, true).v
    })
    const isRequired = computed(() => {
      let rules = getRules()
      let required = false

      if (rules && rules.length) {
        rules.every(rule => {
          if (rule.required) {
            required = true
            return false
          }
          return true
        })
      }
      return required
    })
    const elFormItemSize = computed(() => props.size || elForm.size)
    const sizeClass = computed(() => {
      return elFormItemSize.value
    })

    const validate = (trigger, callback = NOOP) => {
      validateDisabled.value = false
      const rules = getFilteredRule(trigger)
      if ((!rules || rules.length === 0) && props.required === undefined) {
        callback()
        return
      }
      validateState.value = 'validating'
      const descriptor = {}
      if (rules && rules.length > 0) {
        rules.forEach(rule => {
          delete rule.trigger
        })
      }
      descriptor[props.prop] = rules
      const validator = new AsyncValidator(descriptor)
      const model = {}
      model[props.prop] = fieldValue.value
      validator.validate(
        model,
        { firstFields: true },
        (errors, invalidFields) => {
          validateState.value = !errors ? 'success' : 'error'
          validateMessage.value = errors ? errors[0].message : ''
          callback(validateMessage.value, invalidFields)
          elForm.emit?.(
            'validate',
            props.prop,
            !errors,
            validateMessage.value || null,
          )
        },
      )
    }

    const clearValidate = () => {
      validateState.value = ''
      validateMessage.value = ''
      validateDisabled.value = false
    }
    const resetField = () => {
      validateState.value = ''
      validateMessage.value = ''
      let model = elForm.model
      let value = fieldValue.value
      let path = props.prop
      if (path.indexOf(':') !== -1) {
        path = path.replace(/:/, '.')
      }
      let prop = getPropByPath(model, path, true)
      validateDisabled.value = true
      if (Array.isArray(value)) {
        prop.o[prop.k] = [].concat(initialValue)
      } else {
        prop.o[prop.k] = initialValue
      }
      // reset validateDisabled after onFieldChange triggered
      nextTick(() => {
        validateDisabled.value = false
      })
    }

    const getRules = () => {
      const formRules = elForm.rules
      const selfRules = props.rules
      const requiredRule =
        props.required !== undefined ? { required: !!props.required } : []

      const prop = getPropByPath(formRules, props.prop || '', false)
      const normalizedRule = formRules
        ? (prop.o[props.prop || ''] || prop.v)
        : []

      return [].concat(selfRules || normalizedRule || []).concat(requiredRule)
    }
    const getFilteredRule = trigger => {
      const rules = getRules()

      return rules
        .filter(rule => {
          if (!rule.trigger || trigger === '') return true
          if (Array.isArray(rule.trigger)) {
            return rule.trigger.indexOf(trigger) > -1
          } else {
            return rule.trigger === trigger
          }
        })
        .map(rule => ({ ...rule }))
    }

    const onFieldBlur = () => {
      validate('blur')
    }

    const onFieldChange = () => {
      if (validateDisabled.value) {
        validateDisabled.value = false
        return
      }

      validate('change')
    }
    const updateComputedLabelWidth = width => {
      computedLabelWidth.value = width ? `${width}px` : ''
    }

    const addValidateEvents = () => {
      const rules = getRules()

      if (rules.length || props.required !== undefined) {
        formItemMitt.on(FormEvents.blur, onFieldBlur)
        formItemMitt.on(FormEvents.change, onFieldChange)
      }
    }
    const removeValidateEvents = () => {
      formItemMitt.off(FormEvents.blur, onFieldBlur)
      formItemMitt.off(FormEvents.change, onFieldChange)
    }

    const elFormItem = reactive({
      ...toRefs(props),
      size: sizeClass,
      validateState,
      removeValidateEvents,
      addValidateEvents,
      resetField,
      clearValidate,
      validate,
      formItemMitt,
      updateComputedLabelWidth,
    })

    onMounted(() => {
      if (props.prop) {
        elForm.formMitt?.emit(FormEvents.addField, elFormItem)

        let value = fieldValue.value
        initialValue = Array.isArray(value)
          ? [...value] : value

        addValidateEvents()
      }
    })
    onBeforeUnmount(() => {
      elForm.formMitt?.emit(FormEvents.removeField, elFormItem)
    })

    provide(FormItemKey, elFormItem)

    const formItemClass = computed(() => [
      {
        'bin-form-item--feedback': elForm.statusIcon,
        'is-error': validateState.value === 'error',
        'is-validating': validateState.value === 'validating',
        'is-success': validateState.value === 'success',
        'is-required': isRequired.value || props.required,
        'is-no-asterisk': elForm.hideRequiredAsterisk,
      },
      sizeClass.value ? 'bin-form-item--' + sizeClass.value : '',
    ])

    const shouldShowError = computed(() => {
      return validateState.value === 'error' && props.showMessage && elForm.showMessage
    })

    return {
      formItemClass,
      shouldShowError,
      elForm,
      labelStyle,
      contentStyle,
      validateMessage,
      labelFor,
      resetField,
      clearValidate,
    }
  },
}
</script>
