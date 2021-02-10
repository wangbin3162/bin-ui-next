<template>
  <div @click="onHeaderClick" :class="headCls" ref="elRef">
    <span class="bin-select-prefix" v-if="$slots.prefix || prefix">
      <slot name="prefix">
        <i :class="`b-iconfont b-icon-${prefix}`" />
      </slot>
    </span>
    <template v-for="(item, index) in selectedMultiple">
      <div
        class="bin-tag bin-tag-checked"
        v-if="maxTagCount === undefined || index < maxTagCount"
        :key="index"
      >
        <span class="bin-tag-text">{{ item.label }}</span>
        <i class="b-iconfont b-icon-close" @click.stop="removeTag(item)" />
      </div>
    </template>
    <div
      class="bin-tag bin-tag-checked"
      v-if="maxTagCount !== undefined && selectedMultiple.length > maxTagCount"
    >
      <span class="bin-tag-text bin-select-max-tag">
        <template v-if="maxTagPlaceholder">
          {{ maxTagPlaceholder(selectedMultiple.length - maxTagCount) }}
        </template>
        <template v-else> + {{ selectedMultiple.length - maxTagCount }}... </template>
      </span>
    </div>
    <span :class="singleDisplayClasses" v-show="singleDisplayValue">
      {{ singleDisplayValue }}
    </span>
    <label>
      <input
        :id="inputElementId"
        type="text"
        v-if="filterable"
        v-model="query"
        :disabled="disabled"
        class="bin-select-input"
        :placeholder="showPlaceholder ? placeholder : ''"
        :style="inputStyle"
        autocomplete="off"
        spellcheck="false"
        @keydown="resetInputState"
        @keydown.delete="handleInputDelete"
        @focus="onInputFocus"
        @blur="onInputBlur"
        ref="inputRef"
      />
    </label>
    <i class="b-iconfont b-icon-close-circle-fill" v-if="resetSelect" @click.stop="onClear" />
    <i class="b-iconfont b-icon-down bin-select-arrow" v-if="!resetSelect && !remote" />
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, computed, reactive, PropType, inject, ref, watch } from 'vue'
import { selectKey, selectEvents } from './token'

interface IItem {
  label?: string
  value?: string
}

const prefixCls = 'bin-select'
export default defineComponent({
  name: 'BSelectHead',
  props: {
    disabled: Boolean,
    filterable: Boolean,
    multiple: Boolean,
    remote: Boolean,
    initialLabel: [String, Number, Array],
    values: {
      type: Array as PropType<IItem[]>,
      default: () => [],
    },
    clearable: {
      type: [Function, Boolean],
      default: false,
    },
    inputElementId: String,
    placeholder: String,
    queryProp: String,
    prefix: String,
    maxTagCount: Number,
    maxTagPlaceholder: Function,
  },
  setup(props, ctx) {
    const status = reactive({
      query: '',
      inputLength: 20,
      preventRemoteCall: false,
    })
    const inputRef = ref(null)
    const elRef = ref(null)

    const select = inject(selectKey)

    const headCls = computed(() => {
      return [
        {
          [`${prefixCls}-head-flex`]: props.filterable && (ctx.slots.prefix || props.prefix),
          [`${prefixCls}-head-with-prefix`]: ctx.slots.prefix || props.prefix,
        },
        { 'head-multiple-wrap': props.multiple },
      ]
    })

    const showPlaceholder = computed(() => {
      let status = false
      if (!props.multiple) {
        const value = props.values[0]
        if (typeof value === 'undefined' || String(value).trim() === '') {
          status = !props.initialLabel
        }
      } else {
        if (props.values.length === 0) {
          status = true
        }
      }
      return status
    })

    const singleDisplayClasses = computed(() => {
      return [
        {
          [prefixCls + '-placeholder']: showPlaceholder.value && !props.filterable,
          [prefixCls + '-selected-value']:
          !showPlaceholder.value && !props.multiple && !props.filterable,
        },
      ]
    })

    const singleDisplayValue = computed(() => {
      if ((props.multiple && props.values.length > 0) || props.filterable) return ''
      return props.values[0]?.label || props.initialLabel || props.placeholder
    })

    const resetSelect = computed(() => !showPlaceholder.value && props.clearable)

    const inputStyle = computed(() => {
      let style = {
        width: null,
      }
      if (props.multiple) {
        if (showPlaceholder.value) {
          style.width = '100%'
        } else {
          style.width = `${status.inputLength}px`
        }
      }
      return style
    })

    const selectedMultiple = computed(() => (props.multiple ? props.values : []))

    // methods
    const onClear = () => ctx.emit('clear')
    const onInputFocus = () => ctx.emit('input-focus')
    const onInputBlur = () => {
      if (!props.values.length) status.query = '' // #5155
      ctx.emit('input-blur')
    }
    const removeTag = (value) => {
      if (props.disabled) return false
      select.selectEmitter.emit(selectEvents.selected, value)
    }
    const resetInputState = () => {
      status.inputLength = inputRef?.value.value.length * 12 + 20
      ctx.emit('keydown')
    }
    const handleInputDelete = () => {
      if (props.multiple && selectedMultiple.value.length && status.query === '') {
        removeTag(selectedMultiple.value[selectedMultiple.value.length - 1])
      }
    }
    const onHeaderClick = (e) => {
      if (props.filterable && e.target === elRef.value) {
        inputRef?.value.focus()
      }
    }
    return {
      inputRef,
      elRef,
      ...toRefs(status),
      headCls,
      showPlaceholder,
      singleDisplayClasses,
      singleDisplayValue,
      resetSelect,
      inputStyle,
      selectedMultiple,
      onInputFocus,
      onInputBlur,
      onClear,
      removeTag,
      resetInputState,
      handleInputDelete,
      onHeaderClick,
    }
  },
  watch: {
    values([value]) {
      if (!this.filterable) return
      this.preventRemoteCall = true
      if (this.multiple) {
        this.query = ''
        this.preventRemoteCall = false // this should be after the query change setter above
        return
      }
      // #982
      if (typeof value === 'undefined' || value === '' || value === null) {
        this.query = ''
      } else {
        this.query = value.label
      }
      this.$nextTick(() => {
        this.preventRemoteCall = false
      }) // this should be after the query change setter above
    },
    query(val) {
      if (this.preventRemoteCall) {
        this.preventRemoteCall = false
        return
      }

      this.$emit('query-change', val)
    },
    queryProp(query) {
      if (query !== this.query) this.query = query
    },
  },
  emits: ['input-focus', 'input-blur', 'keydown', 'clear','query-change'],
})
</script>
