<template>
  <transition name="fade-in-linear">
    <div :class="classes">
      <div class="bin-loading-inner">
        <slot>
          <div v-if="!showIcon">
            <svg class="circular" viewBox="25 25 50 50">
              <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10"></circle>
            </svg>
          </div>
          <b-icon v-else :name="showIcon" class="loading-icon icon-is-rotating"></b-icon>
        </slot>
        <slot name="text">
          <div v-if="showText" class="loading-text" :style="textStyle">{{ showText }}</div>
        </slot>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const prefixCls = 'bin-loading'
export default defineComponent({
  name: 'BLoading',
  props: {
    showIcon: String,
    showText: String,
    fix: Boolean,
    size: String,
  },
  computed: {
    classes() {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-fix`]: this.fix,
          [`${prefixCls}-show-text`]: this.showText,
        },
      ]
    },
    textStyle() {
      return {
        fontSize: `${this.size}px`,
      }
    },
  },
})
</script>
