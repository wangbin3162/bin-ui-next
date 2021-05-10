<template>
  <div :class="wrapClasses">
    <template v-if="type !== 'textarea'">
      <span class="bin-input-group-prepend" v-if="$slots.prepend">
        <slot name="prepend"></slot>
      </span>
      <!--清空按钮-->
      <span :class="closeClasses" v-if="clearable && currentValue && !disabled">
        <i class="b-iconfont b-icon-close-circle-fill" @click="handleClear"></i>
      </span>
      <i
        class="b-iconfont"
        :class="['b-icon-' + icon, 'bin-input-icon', 'bin-input-icon-normal']"
        v-else-if="icon"
        @click="handleIconClick"
      ></i>
      <i
        class="b-iconfont b-icon-search"
        :class="['bin-input-icon', 'bin-input-icon-normal', 'bin-input--search-icon']"
        v-else-if="search"
        @click="handleSearch"
      ></i>
      <span class="bin-input-suffix" v-else-if="showSuffix">
        <slot name="suffix"
        ><i class="b-iconfont" :class="['b-icon-' + suffix]" v-if="suffix"></i></slot
        ></span>
      <input
        :id="elementId"
        :autocomplete="autocomplete"
        ref="inputRef"
        :type="type"
        :class="inputClasses"
        :placeholder="placeholder"
        :disabled="disabled"
        :maxlength="maxlength"
        :readonly="readonly"
        :name="name"
        :value="currentValue"
        :number="number"
        :autofocus="autofocus"
        @keyup.enter="handleEnter"
        @keyup="handleKeyup"
        @keypress="handleKeypress"
        @keydown="handleKeydown"
        @focus="handleFocus"
        @blur="handleBlur"
        @compositionstart="handleComposition"
        @compositionupdate="handleComposition"
        @compositionend="handleComposition"
        @input="handleInput"
        @change="handleChange"
      />
      <span class="bin-input-prefix" v-if="showPrefix">
        <slot name="prefix"
        ><i class="b-iconfont" :class="['b-icon-' + prefix]" v-if="prefix"></i
        ></slot>
      </span>
      <span class="bin-input-word-count" v-if="showWordCount">{{ wordCount }}</span>

      <span class="bin-input-group-append" v-if="$slots.append">
        <slot name="append"></slot>
      </span>
    </template>
    <template v-else>
      <textarea
        :id="elementId"
        :wrap="wrap"
        :autocomplete="autocomplete"
        ref="textareaRef"
        :class="textareaClasses"
        :style="textareaStyle"
        :placeholder="placeholder"
        :disabled="disabled"
        :rows="rows"
        :maxlength="maxlength"
        :readonly="readonly"
        :name="name"
        :value="currentValue"
        :autofocus="autofocus"
        @keyup.enter="handleEnter"
        @keyup="handleKeyup"
        @keypress="handleKeypress"
        @keydown="handleKeydown"
        @focus="handleFocus"
        @blur="handleBlur"
        @compositionstart="handleComposition"
        @compositionupdate="handleComposition"
        @compositionend="handleComposition"
        @input="handleInput"
      ></textarea>
      <span class="bin-input-word-count" v-if="showWordCount">{{ wordCount }}</span>
    </template>
  </div>
</template>

<script>
import calcTextareaHeight from './calcTextareaHeight'
import { computed, ref, watch, onMounted, reactive, toRefs, nextTick } from 'vue'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '../../utils/constants'

const prefixCls = 'bin-input'

export default {
  name: 'BInput',
  props: {
    type: {
      validator: (value) => {
        return ['text', 'textarea', 'password', 'url', 'email', 'date', 'number', 'tel'].includes(
          value,
        )
      },
      default: 'text',
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
    size: {
      validator: (value) => {
        return ['small', 'large', 'default', 'mini'].includes(value)
      },
      default: 'default',
    },
    placeholder: {
      type: String,
      default: '',
    },
    maxlength: {
      type: Number,
    },
    disabled: Boolean,
    icon: String,
    autosize: {
      type: Object,
      default: () => {
        return {}
      },
    },
    rows: {
      type: Number,
      default: 2,
    },
    readonly: Boolean,
    name: String,
    number: Boolean,
    autofocus: Boolean,
    autocomplete: {
      validator: (value) => {
        return ['on', 'off'].includes(value)
      },
      default: 'off',
    },
    clearable: Boolean,
    elementId: String,
    wrap: {
      validator: (value) => {
        return ['hard', 'soft'].includes(value)
      },
      default: 'soft',
    },
    prefix: {
      type: String,
      default: '',
    },
    suffix: {
      type: String,
      default: '',
    },
    search: Boolean,
    noResize: Boolean,
    showWordCount: Boolean,
    validateEvent: {
      type: Boolean,
      default: true,
    },
  },
  emits: [
    UPDATE_MODEL_EVENT,
    CHANGE_EVENT,
    'enter',
    'search',
    'keydown',
    'keyup',
    'keypress',
    'click',
    'blur',
    'focus',
    'input',
    'input-change',
    'clear',
  ],
  setup(props, ctx) {
    // data
    const data = reactive({
      currentValue: props.modelValue,
      textareaStyles: {},
      isOnComposition: false,
    })
    const inputRef = ref(null)
    const textareaRef = ref(null)
    // watch
    watch(
      () => props.modelValue,
      (val) => {
        setCurrentValue(val)
      },
    )
    // computed
    const wrapClasses = computed(() => {
      return [
        `${prefixCls}-wrapper`,
        {
          [`${prefixCls}-wrapper-${props.size}`]: !!props.size,
          [`${prefixCls}-type-${props.type}`]: props.type,
          [`${prefixCls}-group-with-prepend`]: ctx.slots.prepend,
          [`${prefixCls}-group-with-append`]: ctx.slots.append || props.search,
          [`${prefixCls}-hide-icon`]: ctx.slots.append, // #554
          [`${prefixCls}-with-search`]: props.search,
          [`${prefixCls}-with-word-count`]: props.showWordCount,
        },
      ]
    })
    const showPrefix = computed(() => props.prefix !== '' || ctx.slots.prefix !== undefined)
    const showSuffix = computed(() => props.suffix !== '' || ctx.slots.suffix !== undefined)
    const inputClasses = computed(() => {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-${props.size}`]: !!props.size,
          [`${prefixCls}-disabled`]: props.disabled,
          [`${prefixCls}-with-prefix`]: showPrefix.value,
          [`${prefixCls}-with-suffix`]: showSuffix.value || props.search,
        },
      ]
    })
    const closeClasses = computed(() => [
      prefixCls + '-icon',
      prefixCls + '-icon-clear',
      prefixCls + '-icon-normal',
    ])
    const textareaStyle = computed(() => {
      return {
        resize: props.noResize ? 'none' : null,
        ...data.textareaStyles,
      }
    })
    const textareaClasses = computed(() => {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-disabled`]: props.disabled,
        },
      ]
    })
    const wordCount = computed(() => {
      return data.currentValue.toString().length + (props.maxlength ? `/${props.maxlength}` : '')
    })

    // self methods
    const setCurrentValue = (value) => {
      if (value === data.currentValue) return
      nextTick(() => {
        resizeTextarea()
      })
      data.currentValue = value
      // Todo 触发校验
      // if (props.validateEvent) {
      //   this.dispatch('BFormItem', 'form-change', value)
      // }
    }
    const resizeTextarea = () => {
      const autosize = props.autosize
      if (!autosize || props.type !== 'textarea') {
        return false
      }

      const minRows = autosize.minRows || props.rows
      const maxRows = autosize.maxRows || props.rows

      data.textareaStyles = calcTextareaHeight(textareaRef.value, minRows, maxRows)
    }
    // handle methods
    const handleEnter = (e) => {
      ctx.emit('enter', e)
      if (props.search) ctx.emit('search', data.currentValue)
    }
    const handleKeydown = (e) => {
      ctx.emit('keydown', e)
    }
    const handleKeypress = (e) => {
      ctx.emit('keypress', e)
    }
    const handleKeyup = (e) => {
      ctx.emit('keyup', e)
    }
    const handleIconClick = (e) => {
      ctx.emit('click', e)
    }
    const handleFocus = (e) => {
      ctx.emit('focus', e)
    }
    const handleBlur = (e) => {
      ctx.emit('blur', e)
      // Todo 触发校验
      // if (props.validateEvent) {
      //   this.dispatch('BFormItem', 'form-change', value)
      // }
    }

    const handleComposition = (e) => {
      if (e.type === 'compositionstart') {
        data.isOnComposition = true
      }
      if (e.type === 'compositionend') {
        data.isOnComposition = false
        handleInput(e)
      }
    }
    const handleInput = (e) => {
      if (data.isOnComposition) return

      let value = e.target.value
      if (props.number && value !== '') value = Number.isNaN(Number(value)) ? value : Number(value)
      setCurrentValue(value)
      ctx.emit(UPDATE_MODEL_EVENT, value)
      ctx.emit(CHANGE_EVENT, e)
      ctx.emit('input', e)
    }
    const handleChange = (e) => {
      ctx.emit('input-change', e)
    }

    const handleClear = () => {
      const e = { target: { value: '' } }
      ctx.emit(UPDATE_MODEL_EVENT, '')
      setCurrentValue('')
      ctx.emit(CHANGE_EVENT, e)
      ctx.emit('clear')
    }
    const handleSearch = () => {
      if (props.disabled) return false
      inputRef?.value.focus()
      ctx.emit('search', data.currentValue)
    }

    const focus = () => {
      if (props.type === 'textarea') {
        textareaRef?.value.focus()
      } else {
        inputRef?.value.focus()
      }
    }

    const blur = () => {
      if (props.type === 'textarea') {
        textareaRef?.value.blur()
      } else {
        inputRef?.value.blur()
      }
    }

    // mounted
    onMounted(() => {
      if (props.type === 'textarea') {
        resizeTextarea()
      }
    })
    return {
      inputRef,
      textareaRef,
      ...toRefs(data),
      handleEnter,
      handleKeydown,
      handleKeypress,
      handleKeyup,
      handleIconClick,
      handleFocus,
      handleBlur,
      handleComposition,
      handleInput,
      handleChange,
      handleClear,
      handleSearch,
      focus,
      blur,
      wrapClasses,
      showPrefix,
      showSuffix,
      inputClasses,
      closeClasses,
      textareaStyle,
      textareaClasses,
      wordCount,
    }
  },
}
</script>
