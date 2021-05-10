<template>
  <div :class="[
        'bin-input-number',
        {
          [`bin-input-number-${size}`]: !!size,
          ['bin-input-number-disabled']: disabled,
          ['bin-input-number-focused']: focused,
          ['bin-input-number-always']: always
        }
      ]">
    <template v-if="always">
      <a @click="down" :class="minusClasses">
        <i class="b-iconfont b-icon-minus"></i>
      </a>
      <a @click="up" :class="plusClasses">
        <i class="b-iconfont b-icon-plus"></i>
      </a>
    </template>
    <div v-else :class="handlerClasses">
      <a
        @click="up"
        :class="upClasses">
        <span :class="innerUpClasses" @click="preventDefault"></span>
      </a>
      <a
        @click="down"
        :class="downClasses">
        <span :class="innerDownClasses" @click="preventDefault"></span>
      </a>
    </div>
    <div :class="inputWrapClasses">
      <input
        :id="elementId"
        :class="inputClasses"
        :disabled="disabled"
        autocomplete="off"
        spellcheck="false"
        :autofocus="autofocus"
        @focus="focus"
        @blur="blur"
        @keydown.stop="keyDown"
        @input="change"
        @mouseup="preventDefault"
        @change="change"
        :readonly="readonly || !editable"
        :name="name"
        :value="formatterValue"
        :placeholder="placeholder">
    </div>
  </div>
</template>

<script >
import { reactive, watch, toRefs, } from 'vue'

// import { elFormKey, elFormItemKey } from '../form'

function addNum(num1, num2) {
  let sq1, sq2, m
  try {
    sq1 = num1.toString().split('.')[1].length
  } catch (e) {
    sq1 = 0
  }
  try {
    sq2 = num2.toString().split('.')[1].length
  } catch (e) {
    sq2 = 0
  }
  m = Math.pow(10, Math.max(sq1, sq2))
  return (Math.round(num1 * m) + Math.round(num2 * m)) / m
}

// import type { ElFormContext, ElFormItemContext } from '../form'

const prefixCls = 'bin-input-number'

export default {
  name: 'BInputNumber',
  props: {
    max: {
      type: Number,
      default: Infinity,
    },
    min: {
      type: Number,
      default: -Infinity,
    },
    step: {
      type: Number,
      default: 1,
    },
    activeChange: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: Number,
      default: 1,
    },
    size: {
      type: String,
      validator: (val) => ['', 'large', 'default', 'small', 'mini'].includes(val),
      default: 'default',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    autofocus: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    editable: {
      type: Boolean,
      default: true,
    },
    name: {
      type: String,
    },
    precision: {
      type: Number,
    },
    elementId: {
      type: String,
    },
    formatter: {
      type: Function,
    },
    parser: {
      type: Function,
    },
    placeholder: {
      type: String,
      default: '',
    },
    always: {
      type: Boolean,
    },
  },
  emits: ['update:modelValue', 'change', 'input', 'blur', 'focus'],
  setup(props, ctx) {
    // const elForm = inject(elFormKey, {} as ElFormContext)
    // const elFormItem = inject(elFormItemKey, {} as ElFormItemContext)

    const data = reactive({
      currentValue: props.modelValue,
      focused: false,
      upDisabled: false,
      downDisabled: false,
    })

    const preventDefault = (e) => {
      e.preventDefault()
    }

    const up = (e) => {
      const targetVal = Number(e.target.value)
      if (data.upDisabled && isNaN(targetVal)) {
        return false
      }
      changeStep('up', e)
    }
    const down = (e) => {
      const targetVal = Number(e.target.value)
      if (data.downDisabled && isNaN(targetVal)) {
        return false
      }
      changeStep('down', e)
    }
    const focus = (e) => {
      data.focused = true
      ctx.emit('focus', e)
    }
    const blur = () => {
      data.focused = false
      ctx.emit('blur')

      // this.dispatch('BFormItem', 'form-blur', this.currentValue)
    }

    const keyDown = (e) => {
      if (e.keyCode === 38) {
        e.preventDefault()
        up(e)
      } else if (e.keyCode === 40) {
        e.preventDefault()
        down(e)
      }
    }
    const change = (e) => {
      let val = e.target.value.trim()
      // 需要格式化数据时
      let needFormat = (e.type === 'input' && props.activeChange) || (e.type === 'change' && !props.activeChange)
      if (needFormat) {
        if (e.type === 'input' && !props.activeChange) return
        if (props.parser) {
          val = props.parser(val)
        }

        const isEmptyString = val.length === 0
        if (isEmptyString) {
          setValue(null)
          return
        }
        // eslint-disable-next-line no-useless-escape
        if (e.type === 'input' && val.match(/^\-?\.?$|\.$/)) return // prevent fire early if decimal. If no more input the change e will fire later

        val = Number(val)

        if (!isNaN(val)) {
          data.currentValue = val
          setValue(val)
        } else {
          e.target.value = data.currentValue
        }
      }
    }

    function changeStep(type, e) {
      if (props.disabled || props.readonly) {
        return false
      }

      const targetVal = Number(e.target.value)
      let val = Number(data.currentValue)
      const step = Number(props.step)
      if (isNaN(val)) {
        return false
      }

      // input a number, and key up or down
      if (!isNaN(targetVal)) {
        if (type === 'up') {
          if (addNum(targetVal, step) <= props.max) {
            val = targetVal
          } else {
            return false
          }
        } else if (type === 'down') {
          if (addNum(targetVal, -step) >= props.min) {
            val = targetVal
          } else {
            return false
          }
        }
      }

      if (type === 'up') {
        val = addNum(val, step)
      } else if (type === 'down') {
        val = addNum(val, -step)
      }
      setValue(val)
    }

    function setValue(val) {
      // 如果 step 是小数，且没有设置 precision，是有问题的
      if (val && !isNaN(props.precision)) val = Number(Number(val).toFixed(props.precision))
      if (val !== null) {
        if (val > props.max) {
          val = props.max
        } else if (val < props.min) {
          val = props.min
        }
      }

      data.currentValue = val
      ctx.emit('update:modelValue', val)
      ctx.emit('change', val)
      // nextTick(() => {
      //   this.dispatch('BFormItem', 'form-change', val)
      // })
    }

    function changeVal(val) {
      val = Number(val)
      if (!isNaN(val)) {
        const step = props.step

        data.upDisabled = val + step > props.max
        data.downDisabled = val - step < props.min
      } else {
        data.upDisabled = true
        data.downDisabled = true
      }
    }

    watch(
      () => props.modelValue,
      (val) => {
        data.currentValue = val
        changeVal(val)
      },
    )
    watch(
      () => props.min,
      () => {
        changeVal(data.currentValue)
      },
    )
    watch(
      () => props.max,
      () => {
        changeVal(data.currentValue)
      },
    )
    return {
      ...toRefs(data),
      preventDefault,
      up,
      down,
      focus,
      blur,
      keyDown,
      change,
    }
  },
  computed: {
    handlerClasses() {
      return `${prefixCls}-handler-wrap`
    },
    upClasses() {
      return [
        `${prefixCls}-handler`,
        `${prefixCls}-handler-up`,
        {
          [`${prefixCls}-handler-up-disabled`]: this.upDisabled,
        },
      ]
    },
    plusClasses() {
      return [
        `${prefixCls}-handler-plus`,
        {
          [`${prefixCls}-handler-plus-disabled`]: this.upDisabled,
        },
      ]
    },
    innerUpClasses() {
      return `${prefixCls}-handler-up-inner b-iconfont b-icon-up`
    },
    downClasses() {
      return [
        `${prefixCls}-handler`,
        `${prefixCls}-handler-down`,
        {
          [`${prefixCls}-handler-down-disabled`]: this.downDisabled,
        },
      ]
    },
    minusClasses() {
      return [
        `${prefixCls}-handler-minus`,
        {
          [`${prefixCls}-handler-plus-minus`]: this.downDisabled,
        },
      ]
    },
    innerDownClasses() {
      return `${prefixCls}-handler-down-inner b-iconfont b-icon-down`
    },
    inputWrapClasses() {
      return `${prefixCls}-input-wrap`
    },
    inputClasses() {
      return `${prefixCls}-input`
    },
    precisionValue() {
      // can not display 1.0
      if (!this.currentValue) return this.currentValue
      return this.precision ? this.currentValue.toFixed(this.precision) : this.currentValue
    },
    formatterValue() {
      if (this.formatter && this.precisionValue !== null) {
        return this.formatter(this.precisionValue)
      } else {
        return this.precisionValue
      }
    },
  },
}
</script>
