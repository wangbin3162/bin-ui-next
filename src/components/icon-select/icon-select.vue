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
      :offset="5"
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
                @click.stop.prevent="handleClearClick"
              ></i>
            </template>
          </b-input>
        </div>
      </template>
      <template #default>
        <div class="bin-icon-select-panel__query">
          <b-input v-model="query" placeholder="输入图标名称搜索" size="small" clearable></b-input>
        </div>
        <b-scrollbar
          v-show="visible && showIcons.length"
          ref="scrollbar"
          tag="ul"
          wrap-class="bin-icon-select-panel__wrap"
          view-class="icon-list"
        >
          <li v-for="name in showIcons"
              :key="name"
              class="list-complete-item"
              :title="name"
              @click="handleSelect(name)">
            <i :class="['b-iconfont' ,'b-icon-'+ name]"></i>
          </li>
        </b-scrollbar>
        <b-empty v-show="showIcons.length===0">没有匹配图标</b-empty>
      </template>
    </b-popper>
  </div>
</template>

<script>
import BPopper from '../popper'
import { ClickOutside } from '../../directives'
import BInput from '../input/input'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '../../utils/constants'
import { computed, ref, watch } from 'vue'
import useForm from '../../hooks/useForm'
import icon from '../icon/iconfont.json'
import BScrollbar from '../scrollbar/scrollbar'
import BButton from '../button/button'
import BIcon from '../icon/icon'
import BEmpty from '../empty/empty'

export default {
  name: 'BIconSelect',
  components: { BEmpty, BIcon, BButton, BScrollbar, BInput, BPopper },
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
    const query = ref('')

    const popperPaneRef = computed(() => popper.value?.popperRef)
    const showClose = computed(() => selectedLabel.value && inputHovering.value)
    const iconClass = computed(() => (visible.value ? 'down is-reverse' : 'down'))
    const inputSize = computed(() => props.size || BForm.size)
    const showIcons = computed(() => query.value ? icons.value.filter(i => i.includes(query.value)) : icons.value)
    const { BForm, formEmit } = useForm()

    function handleSelect(name) {
      changeValue(name)
      toggleMenu()
    }

    function toggleMenu() {
      visible.value = !visible.value
    }

    function handleClose() {
      visible.value = false
      query.value = ''
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
      query,
      popperPaneRef,
      selectedLabel,
      visible,
      icons,
      inputHovering,
      showClose,
      iconClass,
      showIcons,
      inputSize,
      toggleMenu,
      handleSelect,
      handleClose,
      handleClearClick,
    }
  },
}
</script>
