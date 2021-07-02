## 顶部加载

<template>
    <div class="global-anchor">
      <b-anchor :scroll-offset="100">
        <b-anchor-link href="#shuo-ming" title="说明"></b-anchor-link>
        <b-anchor-link href="#dai-ma-shi-li" title="代码实例"></b-anchor-link>
        <b-anchor-link href="#api" title="API"></b-anchor-link>
        <b-anchor-link href="#attributes" title="Attributes"></b-anchor-link>
      </b-anchor>
    </div>
</template>

全局创建一个显示页面加载、异步请求、文件上传等的加载进度条。

### 说明

LoadingBar 只会在全局创建一个，因此在任何位置调用的方法都会控制这同一个组件。 主要使用场景是路由切换和Ajax，因为这两者都不能拿到精确的进度，LoadingBar 会模拟进度， 当然也可以通过update()
方法来传入一个精确的进度，比如在文件上传时会很有用，具体见API。

#### 在路由中使用

```javascript        
    import BinUI from '../../src/index'
    Vue.use(BinUI)
    
    router.beforeEach((to, from, next) => {
      BinUI.LoadingBar.start()
      next()
    })
    router.afterEach(() => {
      BinUI.LoadingBar.finish()
    })
```

### 代码实例

点击 Start 开始进度，点击 Done 结束。在调用start()方法后，组件会自动模拟进度，当调用done()或error()时，补全进度并自动消失。

:::demo 点击 `Config` 之后再次查看配置项一般默认即可

```html

<template>
  <b-button @click="start">Start</b-button>
  <b-button @click="update(50)">Update 50</b-button>
  <b-button @click="done">Done</b-button>
  <b-button @click="error">Error</b-button>
  <b-button @click="config">Config</b-button>
</template>
<script>
  export default {
    methods: {
      start() {
        this.$loadingBar.start();
      },
      update(val) {
        this.$loadingBar.update(val);
      },
      done() {
        this.$loadingBar.done();
      },
      error() {
        this.$loadingBar.error();
      },
      config() {
        this.$loadingBar.config({
          color: '#5cb85c',
          failedColor: '#f0ad4e',
          height: 5,
          icon: 'loading2'
        })
      }
    }
  }
</script>
```

:::

### API

通过直接调用以下方法来使用组件：

    this.$loading.start()
    
    this.$loading.finish()
    
    this.$loading.error()
    
    this.$loading.update(percent)

以上方法隐式的创建及维护Vue组件。函数及参数说明如下：

### Options

| 函数      | 说明    | 
|---------- |-------- |
| color     |  默认颜色 ，primary  |
| duration  |  动画执行时间 ，默认800 |
| failedColor  | 错误颜色，默认error |
| height  | 进度条高度，默认2 |
| icon  | 可以设置icon开启右侧loading icon|
