<template>
  <div id="app" ref="scrollBox">
    <main-header />
    <div class="main-cnt">
      <side-nav class="nav" />
      <div class="page-container">
        <router-view />
        <main-footer />
      </div>
      <b-back-top></b-back-top>
    </div>
  </div>
</template>

<script lang="ts">
import { watch } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'App',
  setup() {
    const route = useRoute()
    watch(() => route.path, () => {
      if (route.meta.desc) {
        document.title = route.meta.desc + ' - Bin UI Next'
        document.scrollingElement.scrollTop = 0
      }
    })
    return {}
  },
}
</script>

<style lang="stylus">
#app {
  width: 100%;
  min-height: 100vh;
}
.main-cnt {
  padding-top: 80px;
  width: 100%;
  height: 100%;
  .page-container {
    box-sizing: border-box;
    margin-left: 260px;
    background: #fff;
  }
}
</style>
