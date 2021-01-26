<template>
  <header class="page-header">
    <div class="header-container">
      <div class="left" style="width: 480px">
        <div class="logo"></div>
      </div>
      <div class="link">
        <router-link :to="{ name: 'guide' }" class="active">指南</router-link>
        <router-link :to="{ name: 'button' }" class="active">组件</router-link>
        <a
          href="https://github.com/wangbin3162/bin-ui-next"
          class="github"
          target="_blank"
          >GitHub</a
        >
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MainHeader',
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
      color: #1089ff;
      text-transform: uppercase;
      font-weight: bold;
      font-family: helvetica;
      text-align: center;
      font-size: 40px;
      margin-left: 30px;
      width: 220px;
      height: 80px;
      background: url('../assets/bin-ui.png') no-repeat 0 0;
      background-size: 220px 80px;
    }
    .link {
      padding: 0 20px;
      line-height: 80px;
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
    }
  }
}
</style>
