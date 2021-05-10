<template>
  <div ref="radioGroup" class="bin-radio-group" role="radiogroup" @keydown="handleKeydown">
    <slot></slot>
  </div>
</template>

<script>
import {  nextTick, provide, onMounted, ref, reactive, toRefs } from 'vue'
import { EVENT_CODE } from '../../utils/aria'
import { UPDATE_MODEL_EVENT } from '../../utils/constants'
// import { elFormItemKey } from '@element-plus/form'
// import type { ElFormItemContext } from '@element-plus/form'

export default {
  name: 'BRadioGroup',
  componentName: 'BRadioGroup',
  props: {
    modelValue: {
      type: [Boolean, String, Number],
      default: '',
    },
    disabled: Boolean,
  },

  emits: [UPDATE_MODEL_EVENT, 'change'],

  setup(props, ctx) {
    const radioGroup = ref(null)

    // const elFormItem = inject(elFormItemKey, {} as ElFormItemContext)

    // methods
    const changeEvent = (value) => {
      ctx.emit(UPDATE_MODEL_EVENT, value)
      nextTick(() => {
        ctx.emit('change', value)
      })
    }

    provide(
      'RadioGroup',
      reactive({
        name: 'BRadioGroup',
        ...toRefs(props),
        changeEvent: changeEvent,
      }),
    )

    // watch(() => props.modelValue, val => {
    //   elFormItem.formItemMitt?.emit('el.form.change', [val])
    // })

    const handleKeydown = (e) => {
      // 左右上下按键 可以在radio组内切换不同选项
      const target = e.target
      const className = target.nodeName === 'INPUT' ? '[type=radio]' : '[role=radio]'
      const radios = radioGroup.value.querySelectorAll(className)
      const length = radios.length
      const index = Array.from(radios).indexOf(target)
      const roleRadios = radioGroup.value.querySelectorAll('[role=radio]')
      let nextIndex = null
      switch (e.code) {
        case EVENT_CODE.left:
        case EVENT_CODE.up:
          e.stopPropagation()
          e.preventDefault()
          nextIndex = index === 0 ? length - 1 : index - 1
          break
        case EVENT_CODE.right:
        case EVENT_CODE.down:
          e.stopPropagation()
          e.preventDefault()
          nextIndex = index === length - 1 ? 0 : index + 1
          break
        default:
          break
      }
      if (nextIndex === null) return
      roleRadios[nextIndex].click()
      roleRadios[nextIndex].focus()
    }

    onMounted(() => {
      const radios = radioGroup.value.querySelectorAll('[type=radio]')
      const firstLabel = radios[0]
      if (!Array.from(radios).some((radio) => radio.checked) && firstLabel) {
        firstLabel.tabIndex = 0
      }
    })
    return {
      handleKeydown,
      radioGroup,
    }
  },
}
</script>

