<template>
  <div class="bin-layout">
    <div v-if="hasSider" class="bin-layout-sider" :style="siderStyle">
      <div class="sider-inner" :class="{ hide: collapsed && !showCollapsedContent }">
        <slot name="sider">hasSider</slot>
      </div>
      <div
        class="bin-layout-toggle-button"
        v-if="showToggle"
        :class="{ collapsed }"
        @click="collapsed = !collapsed"
      >
        <b-icon name="left"></b-icon>
      </div>
    </div>
    <div class="bin-layout-content" :style="contentStyles"><slot>content</slot></div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

defineOptions({
  name: 'BLayout',
})

const props = defineProps({
  hasSider: {
    type: Boolean,
    default: true,
  },
  siderWidth: {
    type: Number,
    default: 240,
  },
  collapsedWidth: {
    type: Number,
    default: 40,
  },
  showToggle: {
    type: Boolean,
    default: true,
  },
  showCollapsedContent: {
    type: Boolean,
  },
  contentStyle: {
    type: Object,
    default: () => ({}),
  },
})

const collapsed = ref(false)

const siderStyle = computed(() => ({
  width: collapsed.value ? `${props.collapsedWidth}px` : `${props.siderWidth}px`,
}))

const contentStyles = computed(() => ({
  ...props.contentStyle,
  width: collapsed.value
    ? `calc(100% - ${props.collapsedWidth}px)`
    : `calc(100% - ${props.siderWidth}px)`,
}))
</script>
