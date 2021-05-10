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
    </span>
    <template #content>
      <p>
        <i class="b-iconfont b-icon-question-circle" style="color: #f5222d"></i>
        {{ confirmTxt || '确定切换吗？' }}
      </p>
      <div style="text-align: right; margin: 0">
        <b-button size="mini" type="text" @click="visible = false"
          >取消</b-button
        >
        <b-button type="primary" size="mini" @click="confirmFun($event)"
          >确定</b-button
        >
      </div>
    </template>
  </b-popover>
</template>

<script>
import BPopover from '../popover'
import BButton from '../button'
import { ref, watch } from 'vue'

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
        return ['large', 'small', 'default', 'mini'].includes(value)
      },
      default: 'default',
    },
    name: String,
    activeColor: String,
    inactiveColor: String,
    confirm: Boolean,
    confirmTxt: String,
  },
  emits: ['update:modelValue', 'change'],
  setup(props, { emit }) {
    const currentValue = ref(props.modelValue)
    const visible = ref(false)

    const handleToggle = (e) => {
      e.preventDefault()
      if (props.disabled) {
        return false
      }
      const checked =
        currentValue.value === props.trueValue
          ? props.falseValue
          : props.trueValue
      currentValue.value = checked
      emit('update:modelValue', checked)
      emit('change', checked)

      // this.dispatch('BFormItem', 'form-change', checked)
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
          console.log('Value should be true or false.')
        }
        currentValue.value = val
      },
    )
    return {
      visible,
      currentValue,
      toggle,
      confirmFun,
    }
  },
  computed: {
    wrapClasses() {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-checked`]: this.currentValue === this.trueValue,
          [`${prefixCls}-disabled`]: this.disabled,
          [`${prefixCls}-${this.size}`]: !!this.size,
        },
      ]
    },
    wrapStyle() {
      let isChecked = this.currentValue === this.trueValue
      return {
        backgroundColor: isChecked ? this.activeColor : this.inactiveColor,
        borderColor: isChecked ? this.activeColor : this.inactiveColor,
      }
    },
  },
}
</script>
