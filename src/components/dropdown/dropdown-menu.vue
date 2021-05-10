<template>
  <ul
    v-click-outside:[triggerElm]="innerHide"
    class="bin-dropdown-menu"
    @mouseenter.stop="show"
    @mouseleave.stop="hide"
  >
    <slot></slot>
  </ul>
</template>
<script>
import { getCurrentInstance, onMounted } from 'vue'
import ClickOutside from '../../directives/click-outside'
import { useDropdown, initDropdownDomEvent } from './useDropdown'

export default {
  name: 'BDropdownMenu',
  directives: { ClickOutside },
  setup() {
    const { bDropdown } = useDropdown()

    function show() {
      bDropdown.show?.()
    }

    function hide() {
      if (bDropdown.trigger.value === 'click') return
      _hide()
    }

    function _hide() {
      bDropdown.hide?.()
    }

    onMounted(() => {
      const dropdownMenu = getCurrentInstance()
      initDropdownDomEvent(dropdownMenu, bDropdown.triggerElm.value, bDropdown.instance)
    })

    return {
      show,
      hide,
      innerHide: _hide,
      triggerElm: bDropdown.triggerElm,
    }
  },
}
</script>

