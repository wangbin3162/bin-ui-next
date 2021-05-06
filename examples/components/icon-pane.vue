<template>
  <p>收录了<span style="color:red;">{{ $icon.length }}</span>个图标</p>
  <ul class="icon-list">
    <li v-for="name in $icon" :key="name" class="list-complete-item" @click="copy(name)">
        <span>
            <i :class="['b-iconfont' ,'b-icon-'+ name]"></i>
            <span class="icon-name">{{ name }}</span>
        </span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'icon-pane',
  methods: {
    copy(name) {
      this.$copy(name)
      this.$message(`已复制图标名称【${name}】到剪切板`)
      console.log(name)
    },
  },
}
</script>

<style scoped>

</style>
