<template>
  <form
    class="bin-form"
    :class="[
      labelPosition ? 'bin-form--label-' + labelPosition : '',
      { 'bin-form--inline': inline },
    ]"
  >
    <slot></slot>
  </form>
</template>

<script>
import { provide, watch, ref, computed, reactive, toRefs } from 'vue'
import mitt from 'mitt'
import { FormKey, FormEvents } from './token'

function useFormLabelWidth() {
  const potentialLabelWidthArr = ref([])
  const autoLabelWidth = computed(() => {
    if (!potentialLabelWidthArr.value.length) return '0'
    const max = Math.max(...potentialLabelWidthArr.value)
    return max ? `${max}px` : ''
  })

  function getLabelWidthIndex(width) {
    const index = potentialLabelWidthArr.value.indexOf(width)
    if (index === -1) {
      console.warn('[Element Warn][ElementForm]unexpected width ' + width)
    }
    return index
  }

  function registerLabelWidth(val, oldVal) {
    if (val && oldVal) {
      const index = getLabelWidthIndex(oldVal)
      potentialLabelWidthArr.value.splice(index, 1, val)
    } else if (val) {
      potentialLabelWidthArr.value.push(val)
    }
  }

  function deregisterLabelWidth(val) {
    const index = getLabelWidthIndex(val)
    index > -1 && potentialLabelWidthArr.value.splice(index, 1)
  }

  return {
    autoLabelWidth,
    registerLabelWidth,
    deregisterLabelWidth,
  }
}

export default {
  name: 'BForm',
  props: {
    model: Object,
    rules: Object,
    labelPosition: String,
    labelWidth: String,
    labelSuffix: {
      type: String,
      default: '',
    },
    inline: Boolean,
    inlineMessage: Boolean,
    statusIcon: {
      type: Boolean,
      default: false,
    },
    showMessage: {
      type: Boolean,
      default: true,
    },
    size: String,
    disabled: Boolean,
    validateOnRuleChange: {
      type: Boolean,
      default: true,
    },
    hideRequiredAsterisk: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['validate'],
  setup(props, { emit }) {
    const formMitt = mitt()

    const fields = []

    watch(
      () => props.rules,
      () => {
        fields.forEach(field => {
          field.removeValidateEvents()
          field.addValidateEvents()
        })

        if (props.validateOnRuleChange) {
          validate(() => ({}))
        }
      },
    )

    formMitt.on(FormEvents.addField, field => {
      if (field) {
        fields.push(field)
      }
    })

    formMitt.on(FormEvents.removeField, field => {
      if (field.prop) {
        fields.splice(fields.indexOf(field), 1)
      }
    })

    const resetFields = () => {
      if (!props.model) {
        console.warn('[Element Warn][Form]model is required for resetFields to work.')
        return
      }
      fields.forEach(field => {
        field.resetField()
      })
    }

    const clearValidate = (props = []) => {
      const fds = props.length
        ? typeof props === 'string'
          ? fields.filter(field => props === field.prop)
          : fields.filter(field => props.indexOf(field.prop) > -1)
        : fields
      fds.forEach(field => {
        field.clearValidate()
      })
    }

    const validate = callback => {
      if (!props.model) {
        console.warn('[Element Warn][Form]model is required for validate to work!')
        return
      }

      let promise
      // if no callback, return promise
      if (typeof callback !== 'function') {
        promise = new Promise(resolve => {
          callback = function (valid, invalidFields) {
            if (valid) {
              resolve(true)
            } else {
              resolve(false, invalidFields)
            }
          }
        })
      }

      if (fields.length === 0) {
        callback(true)
      }
      let valid = true
      let count = 0
      let invalidFields = {}
      for (const field of fields) {
        field.validate('', (message, field) => {
          if (message) {
            valid = false
          }
          invalidFields = { ...invalidFields, ...field }
          if (++count === fields.length) {
            callback(valid, invalidFields)
          }
        })
      }
      return promise
    }

    const validateField = (props, cb) => {
      props = [].concat(props)
      const fds = fields.filter(field => props.indexOf(field.prop) !== -1)
      if (!fields.length) {
        console.warn('[Element Warn]please pass correct props!')
        return
      }

      fds.forEach(field => {
        field.validate('', cb)
      })
    }

    const elForm = reactive({
      formMitt,
      ...toRefs(props),
      resetFields,
      clearValidate,
      validateField,
      emit,
      ...useFormLabelWidth(),
    })

    provide(FormKey, elForm)

    return {
      validate, // export
      resetFields,
      clearValidate,
      validateField,
    }
  },
}
</script>
