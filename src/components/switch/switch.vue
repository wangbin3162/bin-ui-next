<template>
  <b-popover v-model:visible="visible" :width="200" :disabled="!confirm">
    <span
      tabindex="0"
      :class="wrapClasses"
      :style="wrapStyle"
      @click="toggle"
      @keydown.space="toggle"
    >
      <input type="hidden" :name="name" :value="currentValue" />
      <span class="bin-switch-inner">
        <slot name="open" v-if="currentValue === trueValue"></slot>
        <slot name="close" v-if="currentValue === falseValue"></slot>
      </span>
      <i v-if="loading" class="b-iconfont b-icon-loading" :style="{color:currentValue?activeColor:inactiveColor}"></i>
    </span>
    <template #content>
      <p>
        <i class="b-iconfont b-icon-question-circle" style="color: #f5222d"></i>
        {{ confirmTxt || '确定切换吗？' }}
      </p>
      <div style="text-align: right; margin: 0">
        <b-button size="mini" type="text" @click="visible = false">取消
        </b-button>
        <b-button type="primary" size="mini" @click="confirmFun($event)">确定
        </b-button>
      </div>
    </template>
  </b-popover>
</template>

<script>
import BPopover from '../popover'
import BButton from '../button'
import { isPromise } from '@vue/shared'
import { computed, ref, watch } from 'vue'
import useForm from '../../hooks/useForm'
import { isBool } from '../../utils/util-helper'

const prefixCls = 'bin-switch'

export default {
  name: 'BSwitch',
  components: { BPopover, BButton },
  props: {
    modelValue: {
      type: [String, Number, Boolean],
      default: false,
    },
    trueValue: {
      type: [String, Number, Boolean],
      default: true,
    },
    falseValue: {
      type: [String, Number, Boolean],
      default: false,
    },
    disabled: Boolean,
    size: {
      validator: (value) => {
        return ['large', 'small', 'default'].includes(value)
      },
      default: 'default',
    },
    name: String,
    activeColor: String,
    inactiveColor: String,
    confirm: Boolean,
    confirmTxt: String,
    loading: {
      type: Boolean,
      default: false,
    },
    beforeChange: Function,
  },
  emits: ['update:modelValue', 'change'],
  setup(props, { emit }) {
    const currentValue = ref(props.modelValue)
    const visible = ref(false)
    const { BForm, formEmit } = useForm()

    const switchDisabled = computed(() => props.disabled || props.loading || (BForm || {}).disabled)
    const wrapClasses = computed(() => {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-checked`]: currentValue.value === props.trueValue,
          [`${prefixCls}-disabled`]: switchDisabled.value,
          [`${prefixCls}-${props.size}`]: !!props.size,
          'is-confirm': props.confirm,
        },
      ]
    })
    const wrapStyle = computed(() => {
      let isChecked = currentValue.value === props.trueValue
      return {
        backgroundColor: isChecked ? props.activeColor : props.inactiveColor,
        borderColor: isChecked ? props.activeColor : props.inactiveColor,
      }
    })
    // 更新
    const handleChange = () => {
      const checked = currentValue.value === props.trueValue ? props.falseValue : props.trueValue
      currentValue.value = checked
      emit('update:modelValue', checked)
      emit('change', checked)

      formEmit('change', checked)
    }
    const handleToggle = (e) => {
      e.preventDefault()
      if (switchDisabled.value) return
      const { beforeChange } = props
      // 如果没有拦截函数，则直接更新
      if (!beforeChange) {
        handleChange()
        return
      }

      const shouldChange = beforeChange()
      const isExpectType = [isPromise(shouldChange), isBool(shouldChange)].some(i => i)
      if (!isExpectType) {
        console.error('beforeChange must return type `Promise<boolean>` or `boolean`')
      }
      if (isPromise(shouldChange)) {
        shouldChange.then(result => {
          if (result) {
            handleChange()
          }
        }).catch(e => {
          if (process.env.NODE_ENV !== 'production') {
            console.warn(`switch beforeChange error: ${e}`)
          }
        })
      } else if (shouldChange) {
        handleChange()
      }
    }
    const toggle = (e) => {
      if (!props.confirm) handleToggle(e)
    }

    const confirmFun = (e) => {
      visible.value = false
      handleToggle(e)
    }
    watch(
      () => props.modelValue,
      (val) => {
        if (val !== props.trueValue && val !== props.falseValue) {
          console.warn('Value should be true or false.')
        }
        currentValue.value = val
      },
    )
    return {
      visible,
      currentValue,
      toggle,
      confirmFun,
      BForm,
      formEmit,
      switchDisabled,
      wrapStyle,
      wrapClasses,
    }
  },
}
</script>
