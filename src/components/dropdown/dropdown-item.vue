<template>
  <li
    class="bin-dropdown-item"
    :class="{
      'bin-dropdown-item-disabled': disabled,
      'bin-dropdown-item-divided': divided,
      'bin-dropdown-item-selected': selected
    }"
    :aria-disabled="disabled"
    :tabindex="disabled ? null : -1"
    @click="handleClick"
  >
    <i v-if="icon" :class="`b-iconfont b-icon-${icon}`"></i>
    <slot></slot>
  </li>
</template>
<script>
import { getCurrentInstance } from 'vue'
import { useDropdown } from './useDropdown'

export default {
  name: 'BDropdownItem',
  props: {
    name: {
      type: [Object, String, Number],
      default: () => ({}),
    },
    disabled: Boolean,
    divided: Boolean,
    selected: Boolean,
    icon: String,
  },
  setup(props) {
    const { bDropdown } = useDropdown()
    const _instance = getCurrentInstance()

    function handleClick(e) {
      if (props.disabled) return
      if (bDropdown.hideOnClick.value) {
        bDropdown.handleClick?.()
      }
      bDropdown.commandHandler?.(props.name, _instance, e)
    }

    return {
      handleClick,
    }
  },
}
</script>
