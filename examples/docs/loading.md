## 加载进度

获取数据或加载中时显示，提示用户正在等待中。

### 基础用法

最简单的Loading

:::demo

```html

<template>
  <div class="demo-loading">
    <b-loading></b-loading>
  </div>
</template>
```

:::

### 居中固定

可以在父级元素中居中固定 默认是剧中固定的，fix设置为false后用于加载类似下拉加载的功能

:::demo

```html

<template>
  <div class="demo-loading">
    <div>我是后面的段落我是后面的段落我是后面的段落我是后面的段落</div>
    <b-loading fix></b-loading>
  </div>
</template>
```

:::

### 自定义内容

可以自定义文字和内容

:::demo

```html

<template>
  <div class="demo-loading">
    <b-loading fix>加载中</b-loading>
  </div>
  <div class="demo-loading">
    <b-loading fix show-text="loading"></b-loading>
  </div>
  <div class="demo-loading">
    <b-loading fix show-text="loading" show-icon="loading2"></b-loading>
  </div>
</template>
```

:::

### 切换显示状态

切换显示状态

:::demo

```html

<template>
  <div flex>
    <div>
      <p>普通使用</p>
      <div class="demo-loading">
        <div>我是后面的段落我是后面的段落我是后面的段落我是后面的段落</div>
        <b-loading fix v-if="loading1"></b-loading>
      </div>
      <div>
        <b-button @click="loading1=true">加载</b-button>
        <b-button type="danger" @click="loading1=false">停止</b-button>
      </div>
    </div>
    <div>
      <p>指令调用</p>
      <div class="demo-loading" v-loading:[loadingText]="loading2">
        <div>我是后面的段落我是后面的段落我是后面的段落我是后面的段落</div>
      </div>
      <div>
        <b-button @click="loading2=true">加载</b-button>
        <b-button type="danger" @click="loading2=false">停止</b-button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        loading1: true,
        loading2: true,
        loadingText: '正在努力加载中'
      }
    }
  }
</script>
```

:::

### Props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| showIcon     |  显示加载图标   | String  |   loading        |   —   |
| showText   |  显示加载的文字   | String  |   loading  |  —    |
| fix   |  是否固定于父级中心   | Boolean  |   —   | false   |
| size  |  文字显示的大小  | Number  |   —   |  —    |
