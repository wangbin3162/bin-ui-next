<template>
    <span :class="['bin-tag',
            type ? `is-${type}` : '',
            size ? `is-${size}` : '',
            dark ? 'is-dark' : '',
            checkable ? 'is-checkable' : '',
            (checkable && checked) ? 'is-checked' : '',
            { 'no-border': noBorder }
          ]"
          :style="tagStyleBind"
          @click="handleClick">
      <span v-if="dot" class="bin-dot" :style="{ backgroundColor: dotColor }"></span>
      <slot></slot>
      <i class="b-iconfont b-icon-close" v-if="closable"
         :style="dot ? { backgroundColor: '#fff',color } : {}"
         @click="handleClose"></i>
    </span>
</template>

<script>
import { computed, ref, watch } from 'vue'
import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from '../../utils/constants'
import { typeColor } from '../../utils/log'

export default {
  name: 'BTag',
  props: {
    name: String,
    closable: Boolean,
    type: String,
    dot: Boolean,
    noBorder: Boolean,
    color: String,
    tagStyle: {},
    size: String,
    fontSize: String,
    dark: Boolean,
    checkable: Boolean,
    modelValue: {
      type: Boolean,
      default: true,
    },
  },
  emits: [UPDATE_MODEL_EVENT, CHANGE_EVENT, 'click', 'close'],
  setup(props, { emit }) {
    const checked = ref(props.modelValue)

    const handleClose = (e) => {
      e.stopPropagation()
      emit('close', e)
    }
    const handleClick = (e) => {
      e.stopPropagation()
      if (props.checkable) {
        checked.value = !checked.value
        emit(UPDATE_MODEL_EVENT, checked.value)
        emit(CHANGE_EVENT, checked.value, props.name)
      }
      emit('click', e)
    }
    const dotColor = computed(() => props.type ? typeColor(props.type) : props.color)
    const tagStyleBind = computed(() => {
      return props.tagStyle ? props.tagStyle : props.dot ?
        {
          backgroundColor: 'transparent',
          color: props.color,
          fontSize: props.fontSize,
        } :
        {
          backgroundColor: props.color,
          color: props.color ? '#fff' : '',
          fontSize: props.fontSize,
        }
    })
    watch(
      () => props.modelValue,
      () => {
        checked.value = !props.modelValue
      },
    )
    return {
      checked,
      dotColor,
      tagStyleBind,
      handleClose,
      handleClick,
    }
  },
}
</script>
