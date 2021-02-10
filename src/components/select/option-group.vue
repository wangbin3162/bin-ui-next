<template>
  <li class="bin-select-group-wrap" v-show="visible">
    <div class="bin-select-group-title">{{ label }}</div>
    <ul>
      <li class="bin-select-group" ref="groupRef">
        <slot></slot>
      </li>
    </ul>
  </li>
</template>

<script lang="ts">
import { defineComponent, provide, inject, ref, nextTick } from 'vue'
import { selectGroupKey, selectKey, selectEvents } from './token'

export default defineComponent({
  name: 'BOptionGroup',
  props: {
    label: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const visible = ref(true)
    const groupRef = ref(null)

    provide(selectGroupKey, props)

    const select = inject(selectKey)
    const queryChange = () => {
      nextTick(() => {
        const options = groupRef?.value.querySelectorAll('.bin-select-item')
        let hasVisibleOption = false
        for (let i = 0; i < options.length; i++) {
          if (options[i].style.display !== 'none') {
            hasVisibleOption = true
            break
          }
        }
        visible.value = hasVisibleOption
      })
    }

    // emitter 监听事件
    select.selectEmitter.on(selectEvents.queryChange, queryChange)
    return {
      visible,
      groupRef,
    }
  },
})
</script>
