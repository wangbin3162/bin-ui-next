<template>
  <div class="bin-card"
       :class="[shadow ? 'is-' + shadow + '-shadow' : 'is-hover-shadow',bordered ? '':'is-no-border']"
       :style="cardStyle">
    <div class="bin-card__header" v-if="$slots.header || header"
         :class="[divider ? divider+'-divider' : 'has-divider',headTip?'has-tip':'']">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="bin-card__body" :style="bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import button from '../button/button.vue'

// eslint-disable-next-line no-unused-vars
interface ICardProps {
  header: object
  bodyStyle: object
  shadow: string
  bordered: boolean
  width: string
  radius: string
  bgColor: string
  divider: string
  headTip: boolean
}

export default defineComponent({
  name: 'BCard',
  props: {
    header: {},
    bodyStyle: {},
    shadow: String,
    bordered: {
      type: Boolean,
      default: true,
    },
    width: String,
    radius: String,
    bgColor: String,
    divider: String,
    headTip: Boolean,
  },
  computed: {
    cardStyle() {
      return {
        width: this.width,
        borderRadius: this.radius,
        backgroundColor: this.bgColor,
      }
    },
  },
})
</script>
