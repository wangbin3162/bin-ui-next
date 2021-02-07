## Carousel 轮播

<div class="global-anchor">
  <b-anchor :scroll-offset="100">
    <b-anchor-link href="#ji-chu-yong-fa" title="基础用法"></b-anchor-link>
    <b-anchor-link href="#zi-dong-qie-huan-he-su-du" title="自动切换和速度"></b-anchor-link>
    <b-anchor-link href="#zhi-shi-qi-yang-shi-he-wei-zhi" title="指示器样式和位置"></b-anchor-link>
    <b-anchor-link href="#qia-pian-feng-ge" title="卡片风格"></b-anchor-link>
    <b-anchor-link href="#fang-xiang" title="方向"></b-anchor-link>
    <b-anchor-link href="#props" title="Props"></b-anchor-link>
    <b-anchor-link href="#events" title="Events"></b-anchor-link>
  </b-anchor>
</div>

### 基础用法

轮播组件，用于滚动显示图片等

::: demo

```html

<template>
  <b-carousel v-model="value1" loop trigger="click">
    <b-carousel-item>
      <div class="demo-carousel-panel">1</div>
    </b-carousel-item>
    <b-carousel-item>
      <div class="demo-carousel-panel">2</div>
    </b-carousel-item>
    <b-carousel-item>
      <div class="demo-carousel-panel">3</div>
    </b-carousel-item>
    <b-carousel-item>
      <div class="demo-carousel-panel">4</div>
    </b-carousel-item>
  </b-carousel>
</template>
<script>
  export default {
    data() {
      return {
        value1: 0
      }
    }
  }
</script>
```

:::

### 自动切换和速度

可以设置`autoplay`自动切换，`trigger="hover"`悬停切换

::: demo

```html

<template>
  <b-carousel autoplay :interval="2000" :initial-index="value1" loop>
    <b-carousel-item>
      <div class="demo-carousel-panel">1</div>
    </b-carousel-item>
    <b-carousel-item>
      <div class="demo-carousel-panel">2</div>
    </b-carousel-item>
    <b-carousel-item>
      <div class="demo-carousel-panel">3</div>
    </b-carousel-item>
    <b-carousel-item>
      <div class="demo-carousel-panel">4</div>
    </b-carousel-item>
  </b-carousel>
</template>
<script>
  export default {
    data() {
      return {
        value1: 1
      }
    }
  }
</script>
```

:::

### 指示器样式和位置

::: demo

```html

<template>
  <b-carousel indicator-position="inside"
              arrow="always"
              trigger="hover" loop>
    <b-carousel-item>
      <div class="demo-carousel-panel">1</div>
    </b-carousel-item>
    <b-carousel-item>
      <div class="demo-carousel-panel">2</div>
    </b-carousel-item>
    <b-carousel-item>
      <div class="demo-carousel-panel">3</div>
    </b-carousel-item>
    <b-carousel-item>
      <div class="demo-carousel-panel">4</div>
    </b-carousel-item>
  </b-carousel>
  <b-divider></b-divider>
  <b-carousel indicator-position="outside" loop>
    <b-carousel-item>
      <div class="demo-carousel-panel">1</div>
    </b-carousel-item>
    <b-carousel-item>
      <div class="demo-carousel-panel">2</div>
    </b-carousel-item>
    <b-carousel-item>
      <div class="demo-carousel-panel">3</div>
    </b-carousel-item>
    <b-carousel-item>
      <div class="demo-carousel-panel">4</div>
    </b-carousel-item>
  </b-carousel>
</template>
```

:::

### 卡片风格

可以设置`card`卡片风格

::: demo

```html

<template>
  <b-carousel :interval="4000" type="card" height="200px" loop>
    <b-carousel-item>
      <div class="demo-carousel-panel">1</div>
    </b-carousel-item>
    <b-carousel-item>
      <div class="demo-carousel-panel">2</div>
    </b-carousel-item>
    <b-carousel-item>
      <div class="demo-carousel-panel">3</div>
    </b-carousel-item>
    <b-carousel-item>
      <div class="demo-carousel-panel">4</div>
    </b-carousel-item>
  </b-carousel>
</template>
```

:::

### 方向

可以设置`direction`方向为竖直方向

::: demo

```html

<template>
  <b-carousel height="200px" direction="vertical" :autoplay="false">
    <b-carousel-item>
      <div class="demo-carousel-panel">1</div>
    </b-carousel-item>
    <b-carousel-item>
      <div class="demo-carousel-panel">2</div>
    </b-carousel-item>
    <b-carousel-item>
      <div class="demo-carousel-panel">3</div>
    </b-carousel-item>
    <b-carousel-item>
      <div class="demo-carousel-panel">4</div>
    </b-carousel-item>
  </b-carousel>
</template>
```

:::

### Props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| initial-index     | 轮播的索引，从 0 开始，  | Number  |  —   |   0  |
| height   | 走马灯的高度，可填 auto 或具体高度数值，单位 px   | String / Number  |  —   |   200px  |
| loop   | 是否开启循环   | Boolean |  —   |   false  |
| autoplay   | 是否自动切换   | Boolean |  —   |   false  |
| interval   | 自动切换的时间间隔，单位为毫秒   | Number |  —   |   3000  |
| indicator-position  | 指示器的位置   | String | inside （内部），outside（外部），none（不显示）  |   inside  |
| trigger | 触发方式   | String |  click，hover  |   click  |
| arrow | 切换箭头的显示时机   | String |  hover，always，never |   hover  |
| direction | 方向   | String |  horizontal、vertical  |   horizontal  |
| type |  类型   | String |  card  |    —   |

### Events

| 事件名      | 说明    | 返回值      |
|---------- |-------- |---------- |
| change    | 轮播切换时触发，目前激活的索引，原的索引   | oldValue, value  |
