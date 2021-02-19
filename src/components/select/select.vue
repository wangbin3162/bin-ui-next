<template>
  <div
    ref="selectWrapper"
    v-click-outside:[triggerElm]="handleClose"
    :class="[
      'bin-select',
      {
        ['bin-select-visible']: visible,
        ['bin-select-disabled']: disabled,
        ['bin-select-multiple']: multiple,
        ['bin-select-single']: !multiple,
        [`bin-select-${size}`]: !!size,
      },
    ]"
  >
    <b-popper
      ref="triggerVNode"
      v-model:visible="dropVisible"
      :placement="placement"
      theme="light"
      pure
      manual-mode
      trigger="click"
      popper-class="bin-select__popper"
      :append-to-body="appendToBody"
      transition="zoom-in-top"
      :offset="5"
      :stop-popper-mouse-event="false"
      :gpu-acceleration="false"
      :show-arrow="false"
    >
      <template #trigger>
        <div
          ref="reference"
          :class="{
            ['bin-select-selection']: !autoComplete,
            ['bin-select-selection-focused']: isFocused,
          }"
          :tabindex="disabled || filterable ? -1 : 0"
          @blur="toggleHeaderFocus"
          @focus="toggleHeaderFocus"
          @click="toggleMenu"
          @mouseenter="hasMouseHoverHead = true"
          @mouseleave="hasMouseHoverHead = false"
        >
          <slot name="input">
            <input type="hidden" :name="name" :value="publicValue" />
            <select-head
              :filterable="filterable"
              :multiple="multiple"
              :values="values"
              :clearable="canBeCleared"
              :prefix="prefix"
              :disabled="disabled"
              :remote="remote"
              :input-element-id="elementId"
              :initial-label="initialLabel"
              :placeholder="placeholder"
              :query-prop="query"
              :max-tag-count="maxTagCount"
              :max-tag-placeholder="maxTagPlaceholder"
              @query-change="onQueryChange"
              @input-focus="isFocused = true"
              @input-blur="isFocused = false"
              @clear="clearSingleSelect"
            >
            </select-head>
          </slot>
        </div>
      </template>
      <template #default>
        <ul v-show="showNotFoundLabel" class="bin-select-not-found">
          <li>{{ notFoundText }}</li>
        </ul>
        <ul class="bin-select-dropdown-list" ref="dropdownRef">
          <template v-if="!remote || (remote && !loading)">
            <slot></slot>
          </template>
        </ul>
        <div v-show="loading" class="'bin-select-loading'">loading...</div>
      </template>
    </b-popper>
  </div>
</template>

<script lang="ts">
import {
  ComponentPublicInstance,
  computed,
  defineComponent,
  nextTick,
  onUnmounted,
  provide,
  reactive,
  ref,
  toRefs,
  watch,
} from 'vue'
import ClickOutside from '../../directives/click-outside'
import mitt from 'mitt'
import BPopper from '../popper'
import SelectHead from './select-head.vue'
import { selectEvents, selectKey } from './token'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '../../utils/constants'

const checkValuesNotEqual = (value, publicValue, values) => {
  const strValue = JSON.stringify(value)
  const strPublic = JSON.stringify(publicValue)
  const strValues = JSON.stringify(
    values.map((item) => {
      return item.value
    }),
  )
  return strValue !== strPublic || strValue !== strValues || strValues !== strPublic
}
type Nullable<T> = T | null
export default defineComponent({
  name: 'BSelect',
  directives: { ClickOutside },
  components: { BPopper, SelectHead },
  props: {
    modelValue: {
      type: [String, Number, Array],
      default: '',
    },
    label: {
      type: [String, Number, Array],
      default: '',
    },
    multiple: Boolean,
    disabled: Boolean,
    clearable: Boolean,
    placeholder: {
      type: String,
      default: '请选择',
    },
    filterable: Boolean,
    filterMethod: Function,
    remoteMethod: Function,
    loading: Boolean,
    loadingText: String,
    size: {
      validator: (value: string) => {
        return ['small', 'large', 'default', 'mini'].includes(value)
      },
      default: 'default',
    },
    labelInValue: Boolean,
    notFoundText: {
      type: String,
      default: '没有数据',
    },
    placement: {
      validator: (value: string) => {
        return ['top', 'bottom', 'top-start', 'bottom-start', 'top-end', 'bottom-end'].includes(
          value,
        )
      },
      default: 'bottom-start',
    },
    appendToBody: Boolean,
    // Use for AutoComplete
    autoComplete: Boolean,
    name: String,
    elementId: String,
    prefix: String,
    maxTagCount: Number,
    maxTagPlaceholder: Function,
  },
  setup(props, ctx) {
    const states = reactive({
      visible: false,
      query: '',
      isFocused: false,
      initialLabel: props.label,
      values: [],
      vModelValue: '',
      hasMouseHoverHead: false,
      focusIndex: -1,
      unchangedQuery: true,
      hasExpectedValue: false,
      preventRemoteCall: false,
      filterQueryChange: false,
      lastRemoteQuery: '',
      options: [],
      dropDownWidth: 0,
      caretPosition: -1,
    })
    const selectWrapper = ref(null)
    const optionsChild = ref([]) // 插入的options集合
    const dropdownRef = ref(null)
    const selectEmitter = mitt()

    const triggerVNode = ref<Nullable<ComponentPublicInstance>>(null)
    const triggerElm = computed<Nullable<HTMLElement>>(() => {
      const _: any = (triggerVNode.value?.$refs.triggerRef as HTMLElement)?.children[0] ?? {}
      return _
    })
    const dropVisible = computed(() => {
      return states.visible
    })
    const publicValue = computed(() => {
      if (props.labelInValue) {
        return props.multiple ? states.values : states.values[0]
      } else {
        return props.multiple
          ? states.values.map((option) => option.value)
          : states.values[0]
            ? states.values[0].value
            : ''
      }
    })
    const canBeCleared = computed(() => {
      const uiStateMatch = states.hasMouseHoverHead
      const qualifiesForClear = !props.multiple && !props.disabled && props.clearable
      return uiStateMatch && qualifiesForClear && reset // we return a function
    })
    const remote = computed(() => typeof props.remoteMethod === 'function')
    const selectOptions = computed(() => (optionsChild.value || []))
    const showNotFoundLabel = computed(() => {
      return (
        selectOptions.value &&
        selectOptions.value.length === 0 &&
        (!remote.value || (remote.value && !props.loading))
      ) || selectOptions.value.every(i => !i.visible)
    })

    // ====methods====
    const toggleMenu = (e, force) => {
      if (props.disabled) {
        return false
      }
      states.visible = typeof force !== 'undefined' ? force : !states.visible
    }

    const toggleHeaderFocus = ({ type }) => {
      if (props.disabled) return
      states.isFocused = type === 'focus'
    }

    const handleClose = () => {
      if (states.visible) {
        if (props.filterable) {
          reset()
        }
        hideMenu()
        states.isFocused = true
      } else {
        states.isFocused = false
      }
    }

    const onQueryChange = (query) => {
      if (query.length > 0 && query !== states.query) {
        states.visible = true
      }
      states.query = query
      states.unchangedQuery = states.visible
      states.filterQueryChange = true

      for (let option of selectOptions.value) {
        option.visible = props.filterable && states.filterQueryChange && validateOption(option.props)
      }
    }

    const clearSingleSelect = () => {
      // PUBLIC API
      ctx.emit('clear')
      hideMenu()
      if (props.clearable) reset()
    }

    function reset() {
      states.query = ''
      states.focusIndex = -1
      states.unchangedQuery = true
      states.values = []
      states.filterQueryChange = false
    }

    function hideMenu() {
      toggleMenu(null, false)
      setTimeout(() => {
        states.unchangedQuery = true
      }, 300)
    }

    function onOptionClick(option) {
      if (props.multiple) {
        // keep the query for remote select
        if (remote.value) {
          states.lastRemoteQuery = states.lastRemoteQuery || states.query
        } else {
          states.lastRemoteQuery = ''
        }

        const valueIsSelected = states.values.find(({ value }) => value === option.value)
        if (valueIsSelected) {
          states.values = states.values.filter(({ value }) => value !== option.value)
        } else {
          states.values = states.values.concat(option)
        }

        states.isFocused = true // so we put back focus after clicking with mouse on option elements
      } else {
        states.query = String(option.label).trim()
        states.values = [option]
        states.lastRemoteQuery = ''
        hideMenu()
      }
      states.focusIndex = selectOptions.value.findIndex((opt) => {
        if (!opt || !opt.props) return false
        return opt.props.value === option.value
      })
      if (props.filterable) {
        const inputField = selectWrapper?.value.querySelector('input[type="text"]')
        if (!props.autoComplete) nextTick(() => inputField.focus())
      }
      setTimeout(() => {
        states.filterQueryChange = false
        for (let option of selectOptions.value) {
          option.visible = true
        }
      }, 300)
    }

    function getOptionData(value) {
      const option = selectOptions.value.find(({ props }) => props.value === value)
      if (!option) return null
      return {
        value: value,
        label: option.props.label || option.props.value,
      }
    }

    function getInitialValue() {
      const multiple = props.multiple
      const value = props.modelValue
      let initialValue = Array.isArray(value) ? value : [value]
      if (
        !multiple &&
        (typeof initialValue[0] === 'undefined' ||
          (String(initialValue[0]).trim() === '' && !Number.isFinite(initialValue[0])))
      )
        initialValue = []
      if (remote.value && !multiple && value) {
        const data = getOptionData(value)
        states.query = data ? data.label : String(value)
      }
      return initialValue.filter((item) => {
        return Boolean(item) || item === 0
      })
    }

    function checkUpdateStatus() {
      if (getInitialValue().length > 0 && selectOptions.value.length === 0) {
        states.hasExpectedValue = true
      }
    }

    function validateOption(propsData) {
      const value = propsData.value
      const label = propsData.label || ''
      const stringValues = JSON.stringify([value, label])
      const query = states.query.toLowerCase().trim()
      return stringValues.toLowerCase().includes(query)
    }

    // 事件监听
    selectEmitter.on(selectEvents.selected, onOptionClick)
    provide(selectKey, { props, states, optionsChild, selectEmitter })

    onUnmounted(() => {
      selectEmitter.all.clear()
    })
    watch(
      () => props.modelValue,
      (value) => {
        checkUpdateStatus()
        if (value === '') {
          states.values = []
        } else if (checkValuesNotEqual(value, publicValue.value, states.values)) {
          nextTick(() => {
            states.values = getInitialValue().map(getOptionData).filter(Boolean)
          })
          // this.dispatch('BFormItem', 'form-change', this.publicValue)
        }
      },
    )
    watch(
      () => states.values,
      (now, before) => {
        const newValue = JSON.stringify(now)
        const oldValue = JSON.stringify(before)
        // v-model is always just the value, event with labelInValue === true
        states.vModelValue =
          publicValue.value && props.labelInValue
            ? props.multiple
            ? publicValue.value.map(({ value }) => value)
            : publicValue.value.value
            : publicValue.value
        const shouldEmitInput = newValue !== oldValue && states.vModelValue !== props.modelValue
        if (shouldEmitInput) {
          ctx.emit(UPDATE_MODEL_EVENT, states.vModelValue) // to update v-model
          ctx.emit(CHANGE_EVENT, publicValue.value)
          // this.dispatch('BFormItem', 'form-change', this.publicValue)
        }
      },
    )
    watch(
      () => states.query,
      (query) => {
        ctx.emit('query-change', query)
        const hasValidQuery =
          query !== '' && (query !== states.lastRemoteQuery || !states.lastRemoteQuery)
        const shouldCallRemoteMethod =
          props.remoteMethod && hasValidQuery && !states.preventRemoteCall
        states.preventRemoteCall = false // remove the flag

        if (shouldCallRemoteMethod) {
          states.focusIndex = -1
          const promise = props.remoteMethod(query)
          states.initialLabel = ''
          if (promise && promise.then) {
            promise.then((options) => {
              if (options) states.options = options
            })
          }
        }
        if (query !== '' && remote.value) states.lastRemoteQuery = query
      },
    )
    watch(
      () => states.isFocused,
      (focused) => {
        const el = props.filterable
          ? selectWrapper?.value.querySelector('input[type="text"]')
          : selectWrapper?.value
        el[states.isFocused ? 'focus' : 'blur']()

        // restore query value in filterable single selects
        const [selectedOption] = states.values
        if (selectedOption && props.filterable && !props.multiple && !focused) {
          const selectedLabel = String(selectedOption.label || selectedOption.value).trim()
          if (selectedLabel && states.query !== selectedLabel) {
            states.preventRemoteCall = true
            states.query = selectedLabel
          }
        }
      },
    )
    watch(
      () => states.focusIndex,
      (index) => {
        if (index < 0 || props.autoComplete) return
        // update scroll
        const optionInstance = selectOptions.value[index].vm

        let bottomOverflowDistance =
          optionInstance.$el.getBoundingClientRect().bottom -
          dropdownRef.value.getBoundingClientRect().bottom
        let topOverflowDistance =
          optionInstance.$el.getBoundingClientRect().top -
          dropdownRef.value.getBoundingClientRect().top
        if (bottomOverflowDistance > 0) {
          dropdownRef.value.scrollTop += bottomOverflowDistance
        }
        if (topOverflowDistance < 0) {
          dropdownRef.value.scrollTop += topOverflowDistance
        }
      },
    )
    watch(
      () => selectOptions.value,
      (value) => {
        if (states.hasExpectedValue && value.length > 0) {
          if (states.values.length === 0) {
            states.values = getInitialValue()
          }
          states.values = states.values.map(getOptionData).filter(Boolean)
          states.hasExpectedValue = false
        }

        if (states.options && states.options.length === 0) {
          states.query = ''
        }
      },
    )
    return {
      ...toRefs(states),
      selectWrapper,
      optionsChild,
      dropdownRef,
      triggerVNode,
      triggerElm,
      dropVisible,
      publicValue,
      canBeCleared,
      remote,
      showNotFoundLabel,
      handleClose,
      toggleMenu,
      toggleHeaderFocus,
      onQueryChange,
      clearSingleSelect,
    }
  },
  emits: ['clear', UPDATE_MODEL_EVENT, CHANGE_EVENT, 'query-change'],
})
</script>
