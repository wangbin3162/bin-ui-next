<template>
  <p>
    收录了
    <span style="color: red">{{ baseIcons.length }}</span>
    个图标
  </p>
  <b-alert type="error">点击复制图标名称，右键复制组件代码</b-alert>
  <ul class="icon-list">
    <li
      v-for="name in baseIcons"
      :key="name"
      class="list-complete-item"
      @click="copy(name)"
      @contextmenu.stop.prevent="copyComp(name)"
    >
      <span>
        <i :class="['b-iconfont', 'b-icon-' + name]"></i>
        <span class="icon-name">{{ name }}</span>
      </span>
    </li>
  </ul>
</template>

<script>
import BAlert from '../../src/components/alert/alert'
import builtInIcons from '../../src/styles/fonts/iconfont.json'

const iconList = builtInIcons.glyphs.map(v => v.font_class)

export default {
  name: 'icon-pane',
  components: { BAlert },
  data() {
    return {
      baseIcons: [
        ...iconList.filter(i => !i.includes('-fill')),
        ...iconList.filter(i => i.includes('-fill')),
      ],
    }
  },
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

<style lang="stylus">
.demo-block {
  .demo-icon {
    > i {
      color: #606266;
      margin-right: 20px;
      font-size: 20px;
      vertical-align: middle;
    }
  }
  .bin-button + .bin-button {
    margin-left: 8px;
  }
}
#app .main-cnt .page-container {
  ul.icon-list {
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    min-height: 120px;
    border: 1px solid #eaeefb;
    li {
      display: inline-block;
      width: 125px;
      text-align: center;
      height: 120px;
      line-height: 120px;
      color: #666;
      font-size: 13px;
      margin-right: -1px;
      margin-bottom: -1px;
      margin-left: 0;
      padding: 0;
      i {
        display: block;
        font-size: 32px;
        margin-bottom: 15px;
        color: #606266;
        transition: .15s linear;
      }
      &:hover {
        span {
          color: #5cb6ff;
        }
        i {
          font-size: 40px;
        }
      }
      span {
        display: inline-block;
        vertical-align: middle;
        line-height: normal;
        font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
        color: #99a9bf;
        transition: color .15s linear;
      }
      .icon-name {
        display: inline-block;
        padding: 0 3px;
        height: 1em;
      }
      &:after {
        content: "";
        height: 100%;
      }
    }
  }
}
</style>
