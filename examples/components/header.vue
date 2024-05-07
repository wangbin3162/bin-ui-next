<template>
  <header class="page-header">
    <div class="header-container">
      <div class="left" style="width: 580px" flex="main:justify cross:center">
        <div class="logo">
          <img src="../assets/images/logo/bin-ui-next-02.svg" class="icon" alt="icon" />
          <div class="text">
            <img src="../assets/images/text.svg" alt="text" />
          </div>
        </div>
      </div>
      <div class="link-box">
        <b-tooltip content="搜索组件">
          <span class="search" @click="openSearch"><i class="b-iconfont b-icon-search"></i></span>
        </b-tooltip>
        <router-link :to="{ name: 'guide' }" class="active">指南</router-link>
        <b-dropdown @command="handleCommand">
          <a href="#" class="active" @click.prevent>
            生态系统
            <i class="b-iconfont b-icon-down"></i>
          </a>
          <template #dropdown>
            <b-dropdown-menu>
              <div class="drop-down-menu-group">官方生态</div>
              <b-dropdown-item name="bin-admin-pro">bin-admin-pro</b-dropdown-item>
              <b-dropdown-item name="bin-datav">bin-datav</b-dropdown-item>
              <b-dropdown-item name="bin-editor-next">bin-editor-next</b-dropdown-item>
              <b-dropdown-item name="bin-charts-next">bin-charts-next</b-dropdown-item>
              <div class="drop-down-menu-group">Vue2组件</div>
              <b-dropdown-item name="bin-ui">bin-ui(vue2+)</b-dropdown-item>
              <b-dropdown-item name="bin-admin">bin-admin</b-dropdown-item>
              <b-dropdown-item name="bin-tree-org">bin-tree-org</b-dropdown-item>
              <div class="drop-down-menu-group">动画库</div>
              <b-dropdown-item name="bin-animation">bin-animation</b-dropdown-item>
              <b-dropdown-item name="bin-keyframe-animation">
                bin-keyframe-animation
              </b-dropdown-item>
            </b-dropdown-menu>
          </template>
        </b-dropdown>
        <router-link :to="{ name: 'color' }" class="active">色彩设计</router-link>
        <a href="https://github.com/wangbin3162/bin-ui-next" class="github" target="_blank">
          国内镜像
        </a>
        <a href="https://github.com/wangbin3162/bin-ui-next" class="github" target="_blank">
          GitHub
        </a>
      </div>
      <search ref="searchRef"></search>
    </div>
  </header>
</template>

<script>
import Search from './search'

export default {
  name: 'MainHeader',
  components: { Search },
  methods: {
    openSearch() {
      this.$refs.searchRef.handleOpen()
    },
    handleCommand(name) {
      const githubUrl = `https://github.com/wangbin3162/${name}/`
      const giteeUrl = `https://github.com/wangbin3162/${name}/`
      const preview = `https://wangbin3162.github.io/${name}/`
      this.$log.primary(`------------------------------[${name}]-------------------------------`)
      this.$log.primary(`github：  ${githubUrl}`)
      this.$log.primary(`gitee：  ${giteeUrl}`)
      this.$log.primary(`preview：${preview}`)
      this.$log.primary(
        '----------------------------------------------------------------------------',
      )
      this.$open(preview, true)
    },
  },
}
</script>

<style lang="stylus" scoped>
.page-header {
  background-color: #fff;
  border-bottom: 1px solid #eeeeee;
  position: fixed !important;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  z-index: 100;
  .header-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
    height: 80px;
    .logo {
      display: flex;
      align-items: center;
      color: #1089ff;
      text-transform: uppercase;
      font-weight: bold;
      font-family: helvetica;
      font-size: 40px;
      height: 80px;
      padding-left: 24px;
      .icon {
        width: 54px;
        height: 54px;
      }
      .text {
        height: 64px;
        overflow: hidden;
        margin-left: 18px;
        img {
          width: 100%;
          opacity: .85;
          transform: translate(-132px, -166px);
        }
      }
    }
    .link-box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
      height: 80px;
      .search {
        cursor: pointer;
      }
      a {
        text-decoration: none;
        color: #636363;
        display: inline-block;
        line-height: 1.5;
        padding: 0 22px;
        font-size: 15px;
        &:hover {
          color: #1089ff;
        }
      }
      > span {
        padding: 0 20px;
        color: rgba(0, 0, 0, .65);
        i {
          font-size: 18px;
        }
      }
    }
  }
  :deep(.bin-select) {
    .bin-input.bin-input-default {
      border-color: transparent;
    }
    .bin-input-suffix {
      opacity: 0;
    }
  }
}
.drop-down-menu-group {
  padding: 8px 8px 4px;
  line-height: 18px;
  width: 100%;
  clear: both;
  color: #1c1f31;
  font-weight: 700;
  font-size: 12px !important;
  white-space: nowrap;
  border-top: 1px solid #eee;
  margin-top: 6px;
  &:first-child {
    border-top: none;
    margin-top: 0;
  }
}
</style>
