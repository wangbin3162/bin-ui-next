<template>
  <div :class="['bin-collapse-wrap', {'bin-collapse-wrap-active': isActive, }]" :style="wrapStyle">
    <div class="header" :class="{'is-collapse':collapse&&!$slots.right}" :style="headerStyle" @click="toggle">
      <slot name="title">
        <div class="label">
          {{ title }}
        </div>
      </slot>
      <div class="right" :class="{'can-collapse':collapse}" v-if="$slots.right">
        <slot name="right">
          {{ title }}
        </slot>
      </div>
      <div class="arrow" :style="{cursor:$slots.right?'pointer':null}"
           @click="arrowToggle">
        <b-icon :name="arrowIcon" v-if="collapse"></b-icon>
      </div>
    </div>
    <b-collapse-transition v-if="mounted">
      <div class="content" v-show="isActive">
        <div class="content-box">
          <slot></slot>
        </div>
      </div>
    </b-collapse-transition>
  </div>
</template>

<script>
import { computed, onMounted, reactive, toRefs, watch } from 'vue'
import BCollapseTransition from '../collapse-transition'
import BIcon from '../icon'

export default {
  name: 'BCollapseWrap',
  components: { BCollapseTransition, BIcon },
  props: {
    modelValue: Boolean,
    title: String,
    collapse: Boolean,
    shadow: String,
    arrowIcon: {
      type: String,
      default: 'down',
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit, slots }) {
    const data = reactive({
      isActive: props.modelValue,
      mounted: false,
    })

    const wrapStyle = computed(() => {
      return {
        boxShadow: props.shadow,
      }
    })
    const headerStyle = computed(() => ({
      boxShadow: props.shadow,
      borderBottom: props.shadow === 'none' ? '1px solid #eee' : null,
    }))
    const toggle = () => {
      // 可以收起且没有右侧功能插入时点击一行展开收起
      if (props.collapse && !slots.right) {
        data.isActive = !data.isActive
        emit('update:modelValue', data.isActive)
      }
    }
    const arrowToggle = () => {
      // 可以收起且没有右侧功能插入时点击一行展开收起
      if (props.collapse && slots.right) {
        data.isActive = !data.isActive
        emit('update:modelValue', data.isActive)
      }
    }
    watch(() => props.modelValue, (val) => {
      data.isActive = val
    })
    onMounted(() => {
      data.mounted = true
    })
    return {
      ...toRefs(data),
      wrapStyle,
      headerStyle,
      toggle,
      arrowToggle,
    }
  },
}
</script>
