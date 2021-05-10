<template>
  <button
    v-if="type !== 'text' && animationType === 'click'"
    class="bin-button"
    :disabled="disabled || loading"
    :type="nativeType"
    :class="[
      'bin-button--' + type,
      'bin-button--' + size,
      {
        'is-disabled': disabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-dashed': dashed,
        'is-transparent': transparent,
      },
    ]"
    @click="handleClick"
    v-click-animation
  >
    <i
      class="button-loading icon-is-rotating"
      :class="['b-iconfont', 'b-icon-' + loadingIcon ? loadingIcon : 'loading']"
      v-if="loading"
      :style="iconStyles"
    ></i>
    <i
      :class="['b-iconfont', 'b-icon-' + icon]"
      v-if="icon && !loading"
      :style="iconStyles"
    ></i>
    <span v-if="$slots.default" :style="textStyle"><slot></slot></span>
  </button>
  <button
    v-else-if="type !== 'text' && animationType === 'waves'"
    class="bin-button"
    :disabled="disabled || loading"
    :type="nativeType"
    :class="[
      'bin-button--' + type,
      'bin-button--' + size,
      {
        'is-disabled': disabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-dashed': dashed,
        'is-transparent': transparent,
      },
    ]"
    @click="handleClick"
    v-waves="waveColor"
  >
    <i
      class="button-loading icon-is-rotating"
      :class="['b-iconfont', 'b-icon-' + loadingIcon ? loadingIcon : 'loading']"
      v-if="loading"
      :style="iconStyles"
    ></i>
    <i
      :class="['b-iconfont', 'b-icon-' + icon]"
      v-if="icon && !loading"
      :style="iconStyles"
    ></i>
    <span v-if="$slots.default" :style="textStyle"><slot></slot></span>
  </button>
  <button
    v-else
    :disabled="disabled || loading"
    :type="nativeType"
    class="bin-button"
    :class="[
      'bin-button--' + type,
      { 'is-disabled': disabled, 'is-loading': loading },
    ]"
    @click="handleClick"
  >
    <i
      class="button-loading icon-is-rotating"
      :class="['b-iconfont', 'b-icon-' + loadingIcon ? loadingIcon : 'loading']"
      v-if="loading"
      :style="iconStyles"
    ></i>
    <i
      :class="['b-iconfont', 'b-icon-' + icon]"
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
      default: 'default',
      validator: (val) =>
        [
          'default',
          'primary',
          'success',
          'warning',
          'info',
          'danger',
          'dashed',
          'text',
        ].includes(val),
    },
    size: {
      type: String,
      validator: validSize,
      default: 'default',
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
    animationType: {
      type: String,
      validator: (val) => ['click', 'waves'].includes(val),
      default: 'click',
    },
    textColor: String,
    nativeType: {
      type: String,
      default: 'button',
      validator: (val) => ['button', 'submit', 'reset'].includes(val),
    },
  },
  emits: ['click'],
  computed: {
    waveColor() {
      return (this.type === 'default' || this.type === 'dashed' || this.plain || this.transparent || this.dashed)
        ? 'rgba(0, 0, 0, 0.25)' : 'rgba(255, 255, 255, 0.3)'
    },
    textStyle() {
      const colorMap = {
        primary: '#1089ff',
        success: '#52c41a',
        info: '#35495E',
        warning: '#fea638',
        danger: '#ff4d4f',
      }
      let color = this.textColor ? (colorMap[this.textColor] ? colorMap[this.textColor] : this.textColor) : null
      return color ? { color } : null
    },
    iconStyles() {
      return { ...this.textStyle, ...this.iconStyle }
    },
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e)
    },
  },
}
</script>
