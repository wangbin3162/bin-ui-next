<template>
  <div :class="[ 'bin-collapse-item',{ 'bin-collapse-item-active': isActive } ]">
    <div class="bin-collapse-header" @click="handleHeaderClick">
      <b-icon name="right" v-if="!hideArrow"></b-icon>
      <slot name="title">
        {{ title }}
      </slot>
    </div>
    <b-collapse-transition>
      <div class="bin-collapse-content" v-show="isActive">
        <div class="bin-collapse-content-box">
          <slot></slot>
        </div>
      </div>
    </b-collapse-transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, inject, computed, Ref } from 'vue'
import { Emitter } from 'mitt'

export interface CollapseProvider {
  activeNames: Ref
  collapseMitt: Emitter
}

export const generateId = (): number => Math.floor(Math.random() * 10000)
export default defineComponent({
  name: 'BCollapsePanel',
  props: {
    title: String,
    name: String,
    hideArrow: Boolean,
  },
  setup(props) {
    const collapse = inject<CollapseProvider>('collapse')
    const collapseMitt = collapse?.collapseMitt

    const contentWrapStyle = ref({
      height: 'auto',
      display: 'block',
    })
    const contentHeight = ref(0)
    const isClick = ref(false)
    const id = ref(generateId())

    const isActive = computed(() => {
      return collapse?.activeNames.value.indexOf(props.name) > -1
    })

    const handleHeaderClick = () => {
      if (props.disabled) return
      collapseMitt?.emit('item-click', props.name)
      isClick.value = true
    }

    return {
      isActive,
      contentWrapStyle,
      contentHeight,
      isClick,
      id,
      handleHeaderClick,
      collapse,
    }
  },
})
</script>
