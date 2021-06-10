<template>
  <tr>
    <template v-for="(cell, index) in row" :key="`tr3-${index}`">
      <template v-if="descriptions.border">
        <b-desc-cell :cell="cell" tag="td" type="label" />
        <b-desc-cell :cell="cell" tag="td" type="content" />
      </template>
      <b-desc-cell v-else :cell="cell" tag="td" type="both" />
    </template>
  </tr>
</template>

<script>
import { inject } from 'vue'
import BDescCell from './descriptions-cell'

export default {
  name: 'BDescRow',
  components: { BDescCell },
  props: {
    row: {
      type: Array,
    },
  },
  setup() {
    const descriptions = inject('BDesc', {})

    return {
      descriptions,
    }
  },
}
</script>
