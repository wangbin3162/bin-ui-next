<template>
  <p>收录了<span style="color:red;">{{ $icon.length }}</span>个图标</p>
  <b-alert type="error">双击复制图标名称，邮件复制组件代码</b-alert>
  <ul class="icon-list">
    <li v-for="name in $icon"
        :key="name"
        class="list-complete-item"
        @dblclick="copy(name)" @contextmenu.stop.prevent="copyComp(name)"
    >
        <span>
            <i :class="['b-iconfont' ,'b-icon-'+ name]"></i>
            <span class="icon-name">{{ name }}</span>
        </span>
    </li>
  </ul>
</template>

<script>
import BAlert from '../../src/components/alert/alert'

export default {
  name: 'icon-pane',
  components: { BAlert },
  methods: {
    copy(name) {
      this.$copy(name)
      this.$message(`已复制图标名称【${name}】到剪切板`)
      console.log(name)
    },
    copyComp(name) {
      const str = `<b-icon name="${name}"></b-icon>`
      this.$copy(str)
      this.$message(`已复制图标 ${str} 代码至剪切板`)
      console.log(str)
    },
  },
}
</script>

