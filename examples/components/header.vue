<template>
  <header class="page-header">
    <div class="header-container">
      <div class="left" style="width: 580px" flex="main:justify cross:center">
        <div class="logo">
          <img src="../assets/images/logo/bin-ui-next-02.svg" class="icon" alt="icon"/>
          <div class="text">
            <img src="../assets/images/text.svg" alt="text"/>
          </div>
        </div>
      </div>
      <div class="link-box">
        <b-tooltip content="搜索组件">
          <span class="search" @click="openSearch"><i class="b-iconfont b-icon-search"></i></span>
        </b-tooltip>
        <router-link :to="{ name: 'guide' }" class="active">指南</router-link>
        <router-link :to="{ name: 'button' }" class="active">组件</router-link>
        <b-dropdown @command="handleCommand">
          <a href="#" class="active" @click.prevent>生态
            <i class="iconfont icon-ios-arrow-down"></i>
          </a>
          <template #dropdown>
            <b-dropdown-menu>
              <b-dropdown-item name="bin-admin-pro">bin-admin-pro</b-dropdown-item>
              <b-dropdown-item name="bin-tree-org">bin-tree-org</b-dropdown-item>
              <b-dropdown-item name="bin-charts">bin-charts</b-dropdown-item>
            </b-dropdown-menu>
          </template>
        </b-dropdown>
        <a
          href="https://github.com/wangbin3162/bin-ui-next"
          class="github"
          target="_blank"
        >GitHub</a>
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
      this.$util.open(`https://github.com/wangbin3162/${name}`, true)
    }
  }
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
  width: 100%;
  height: 80px;
  transition: all 0.3s;
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
        color: #1989fa;
        display: inline-block;
        line-height: 1.5;
        padding: 0 22px;
        font-size: 15px;
        &.github {
          color: #636363;
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
</style>
