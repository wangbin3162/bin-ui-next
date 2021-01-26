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
    <b-icon
      class="button-loading icon-is-rotating"
      :name="loadingIcon ? loadingIcon : 'loading'"
      v-if="loading"
      :style="iconStyles"
    />
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
    <b-icon
      class="button-loading icon-is-rotating"
      :name="loadingIcon ? loadingIcon : 'loading'"
      v-if="loading"
      :style="iconStyles"
    />
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
      :class="['b-iconfont', 'b-icon-' + icon]"
      v-if="icon && !loading"
      :style="iconStyles"
    ></i>
    <span v-if="$slots.default" :style="textStyle"><slot></slot></span>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'
import { ComponentSize } from '../../utils/types'

type IButtonType = PropType<'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'text'
  | 'dashed'
  | 'default'>
type IButtonNativeType = PropType<'button' | 'submit' | 'reset'>
type IAnimationType = PropType<'click' | 'waves'>
export default defineComponent({
  name: 'BButton',
  props: {
    type: {
      type: String as IButtonType,
      default: 'default',
      validator: (val: string) =>
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
      type: String as ComponentSize,
      validator: (val: string) =>
        ['default', 'large', 'small', 'mini'].includes(val),
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
      type: String as IAnimationType,
      validator: (val: string) => ['click', 'waves'].includes(val),
      default: 'click',
    },
    textColor: String,
    nativeType: {
      type: String as IButtonNativeType,
      default: 'button',
      validator: (val: string) => ['button', 'submit', 'reset'].includes(val),
    },
  },
  emits: ['click'],
  setup(props, ctx) {
    const waveColor = computed(() => {
      let { type, plain, transparent, dashed } = props
      return (type === 'default' || type === 'dashed' || plain || transparent || dashed)
        ? 'rgba(0, 0, 0, 0.25)' : 'rgba(255, 255, 255, 0.3)'
    })
    const textStyle = computed(() => {
      const colorMap = {
        primary: '#1089ff',
        success: '#52c41a',
        info: '#35495E',
        warning: '#fea638',
        danger: '#ff4d4f',
      }
      let color = props.textColor ? (colorMap[props.textColor] ? colorMap[props.textColor] : props.textColor) : null
      if (color) {
        return {
          color,
        }
      }
      return null
    })
    const iconStyles = computed(() => {
      return {
        ...(textStyle as Object),
        ...props.iconStyle,
      }
    })

    //methods
    const handleClick = (evt: any) => {
      ctx.emit('click', evt)
    }

    return {
      iconStyles,
      waveColor,
      textStyle,
      handleClick,
    }
  },
})
</script>
