<template>
  <transition name="fade-in">
    <div v-if="!closed" :class="wrapClasses">
            <span class="bin-alert-icon" v-if="showIcon">
                <slot name="icon">
                    <b-icon :name="iconType"></b-icon>
                </slot>
            </span>
      <span class="bin-alert-message"><slot></slot></span>
      <span class="bin-alert-desc"><slot name="desc"></slot></span>
      <a class="bin-alert-close" v-if="closable" @click="close">
        <slot name="close">
          <b-icon name="close"></b-icon>
        </slot>
      </a>
    </div>
  </transition>
</template>

<script>
import { computed, onMounted, ref } from 'vue'

const prefixCls = 'bin-alert'

const TYPE_CLASSES_MAP = {
  'info': 'info-circle',
  'success': 'check-circle',
  'warning': 'warning-circle',
  'error': 'error',
}

export default {
  name: 'BAlert',
  props: {
    type: {
      type: String,
      default: 'info',
    },
    closable: Boolean,
    showIcon: Boolean,
    banner: Boolean,
  },
  emits: ['close'],
  setup(props, { emit, slots }) {
    const closed = ref(false)
    const desc = ref(false)
    const iconType = computed(() => TYPE_CLASSES_MAP[props.type])
    const wrapClasses = computed(() => {
      return [
        `${prefixCls}`,
        `${prefixCls}-${props.type}`,
        {
          [`${prefixCls}-with-icon`]: props.showIcon,
          [`${prefixCls}-with-desc`]: desc.value,
          [`${prefixCls}-with-banner`]: props.banner,
        },
      ]
    })
    const close = (e) => {
      closed.value = true
      emit('close', e)
    }
    onMounted(() => {
      desc.value = slots.desc !== undefined
    })
    return {
      closed,
      desc,
      iconType,
      wrapClasses,
      close,
    }
  },
}
</script>
