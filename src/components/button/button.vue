<template>
  <button
    v-if="type !== 'text'"
    class="bin-button"
    :disabled="disabled || loading"
    :type="nativeType"
    :class="btnClass"
    @click="handleClick"
    v-click-animation
  >
    <span :style="textStyle">
      <i
        class="bin-button-loading icon-is-rotating"
        :class="[
          'b-iconfont',
          `b-icon-${loadingIcon || 'loading'}`,
          { 'has-text': $slots.default },
        ]"
        v-if="loading"
        :style="iconStyles"
      ></i>
      <i
        :class="['b-iconfont', 'b-icon-' + icon, { 'has-text': $slots.default }]"
        v-if="icon && !loading"
        :style="iconStyles"
      ></i>
      <slot></slot>
    </span>
  </button>
  <button
    v-else
    :disabled="disabled || loading"
    :type="nativeType"
    class="bin-button"
    :class="[
      {
        [`bin-button--${type}`]: type,
        'is-disabled': disabled,
        'is-loading': loading,
      },
    ]"
    @click="handleClick"
  >
    <i
      class="bin-button-loading icon-is-rotating"
      :class="['b-iconfont', `b-icon-${loadingIcon || 'loading'}`, { 'has-text': $slots.default }]"
      v-if="loading"
      :style="iconStyles"
    ></i>
    <i
      :class="['b-iconfont', 'b-icon-' + icon, { 'has-text': $slots.default }]"
      v-if="icon && !loading"
      :style="iconStyles"
    ></i>
    <span v-if="$slots.default" :style="textStyle"><slot></slot></span>
  </button>
</template>

<script>
import { validSize } from '../../utils/validator-size'
import clickAnimation from '../../directives/click-animation'
import waves from '../../directives/waves'

export default {
  name: 'BButton',
  directives: { clickAnimation, waves },
  props: {
    type: {
      type: String,
      validator: val =>
        ['default', 'primary', 'success', 'warning', 'info', 'danger', 'text'].includes(val),
    },
    size: {
      type: String,
      validator: validSize,
    },
    icon: String,
    iconStyle: Object,
    loading: Boolean,
    loadingIcon: String,
    disabled: Boolean,
    plain: Boolean,
    round: Boolean,
    dashed: Boolean,
    transparent: Boolean,
    background: Boolean,
    animationType: {
      type: String,
      validator: val => ['click', 'waves'].includes(val),
      default: 'click',
    },
    textColor: String,
    nativeType: {
      type: String,
      default: 'button',
      validator: val => ['button', 'submit', 'reset'].includes(val),
    },
  },
  emits: ['click'],
  computed: {
    waveColor() {
      return !this.type || this.type === 'default' || this.plain || this.transparent || this.dashed
        ? 'rgba(0, 0, 0, 0.25)'
        : 'rgba(255, 255, 255, 0.3)'
    },
    textStyle() {
      const colorMap = {
        primary: '#1089ff',
        success: '#52c41a',
        info: '#35495E',
        warning: '#fa8c16',
        danger: '#f5222d',
      }
      let color = this.textColor
        ? colorMap[this.textColor]
          ? colorMap[this.textColor]
          : this.textColor
        : null
      return color ? { color } : null
    },
    iconStyles() {
      return { ...this.textStyle, ...this.iconStyle }
    },
    btnClass() {
      return [
        `bin-button--${this.type || 'default'}`,
        {
          [`bin-button--${this.size}`]: this.size,
          'is-disabled': this.disabled,
          'is-loading': this.loading,
          'is-plain': this.plain,
          'is-round': this.round,
          'is-dashed': this.dashed,
          'is-transparent': this.transparent,
          'is-background': this.background,
        },
      ]
    },
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e)
    },
  },
}
</script>
