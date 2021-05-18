<template>
  <div
    ref="selectWrapper"
    v-click-outside:[popperPaneRef]="handleClose"
    class="bin-icon-select"
    @click.stop="toggleMenu"
  >
    <b-popper
      ref="popper"
      v-model:visible="visible"
      placement="bottom-start"
      :append-to-body="appendToBody"
      :popper-class="`bin-icon-select__popper ${popperClass}`"
      manual-mode
      theme="light"
      pure
      trigger="click"
      :stop-popper-mouse-event="false"
      :gpu-acceleration="false"
      :show-arrow="false"
      :offset="4"
      transition="zoom-in-top"
    >
      <template #trigger>
        <div class="select-trigger">
          <b-input
            ref="reference"
            v-model="selectedLabel"
            type="text"
            :placeholder="placeholder"
            :size="inputSize"
            :disabled="disabled"
            :readonly="true"
            :validate-event="false"
            :class="{ 'is-focus': visible }"
            @mouseenter="inputHovering = true"
            @mouseleave="inputHovering = false"
          >
            <template #prepend>
              <b-button style="width: 40px;padding: 0;">
                <b-icon :name="selectedLabel" size="16"></b-icon>
              </b-button>
            </template>
            <template #suffix>
              <i v-show="!showClose" :class="['bin-select__caret', 'b-iconfont', 'b-icon-'+iconClass]"></i>
              <i
                v-if="showClose"
                :class="`bin-select__caret is-show-close b-iconfont b-icon-close-circle-fill`"
                @click="handleClearClick"
              ></i>
            </template>
          </b-input>
        </div>
      </template>
      <template #default>
        <b-scrollbar
          v-show="visible"
          ref="scrollbar"
          tag="ul"
          wrap-class="bin-icon-select-panel__wrap"
          view-class="icon-list">
          <li v-for="name in icons" :key="name" class="list-complete-item" @click="handleSelect(name)">
            <i :class="['b-iconfont' ,'b-icon-'+ name]"></i>
          </li>
        </b-scrollbar>
      </template>
    </b-popper>
  </div>
</template>

<script>
import BPopper from '../popper'
import { ClickOutside } from '../../directives'
import BInput from '../input/input'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '../../utils/constants'
import { useSelect, useSelectStates } from '../select/useSelect'
import { useFocus } from '../../hooks'
import { computed, nextTick, onBeforeUnmount, onMounted, provide, reactive, ref, toRefs, watch } from 'vue'
import { selectKey } from '../select/token'
import { addResizeListener, removeResizeListener } from '../../utils/resize-event'
import useForm from '../../hooks/useForm'
import { isEdge, isIE } from '../../utils/util-helper'
import icon from '../icon/iconfont.json'
import BScrollbar from '../scrollbar/scrollbar'
import BButton from '../button/button'
import BIcon from '../icon/icon'

export default {
  name: 'BIconSelect',
  components: { BIcon, BButton, BScrollbar, BInput, BPopper },
  directives: { ClickOutside },
  props: {
    modelValue: String,
    size: {
      type: String,
      validator: (value) => {
        return ['small', 'large', 'default', 'mini'].includes(value)
      },
      default: 'default',
    },
    disabled: Boolean,
    clearable: Boolean,
    placeholder: {
      type: String,
      default: '选择图标',
    },
    appendToBody: {
      type: Boolean,
      default: true,
    },
    clearIcon: {
      type: String,
      default: 'close-circle-fill',
    },
    popperClass: String,
  },
  emits: [UPDATE_MODEL_EVENT, CHANGE_EVENT, 'clear', 'visible-change', 'focus', 'blur'],
  setup(props, { emit }) {
    const popper = ref(null)
    const input = ref(null)
    const reference = ref(null)
    const selectedLabel = ref(props.modelValue)
    const visible = ref(false)
    const inputHovering = ref(false)
    const icons = ref(icon.glyphs.map(i => i.font_class))

    const popperPaneRef = computed(() => popper.value?.popperRef)
    const showClose = computed(() => selectedLabel.value && inputHovering.value)
    const iconClass = computed(() => (visible.value ? 'down is-reverse' : 'down'))
    const inputSize = computed(() => props.size || BForm.size)
    const { BForm, BFormItem, formEmit } = useForm()


    function handleSelect(name) {
      changeValue(name)
      toggleMenu()
    }

    function toggleMenu() {
      visible.value = !visible.value
    }

    function handleClose() {
      visible.value = false
    }

    function handleClearClick() {
      emit('clear')
      changeValue('')
    }

    function changeValue(val) {
      selectedLabel.value = val
      emit(UPDATE_MODEL_EVENT, val)
      emit(CHANGE_EVENT, val)
      formEmit('change', val)
    }

    watch(() => props.modelValue, (val) => {
      selectedLabel.value = val
    })
    return {
      reference,
      input,
      popper,
      popperPaneRef,
      selectedLabel,
      visible,
      icons,
      inputHovering,
      showClose,
      iconClass,
      inputSize,
      toggleMenu,
      handleSelect,
      handleClose,
      handleClearClick,
    }
  },
}
</script>

<style scoped>

</style>
