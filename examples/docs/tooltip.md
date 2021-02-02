## Tooltip 提示

<div class="global-anchor">
  <b-anchor :scroll-offset="100">
    <b-anchor-link href="#ji-chu-yong-fa" title="基础用法"></b-anchor-link>
    <b-anchor-link href="#duo-zhong-xuan-ting-wei-zhi" title="多种悬停位置"></b-anchor-link>
    <b-anchor-link href="#bu-tong-zhu-ti" title="不同主题"></b-anchor-link>
    <b-anchor-link href="#duo-xing" title="多行"></b-anchor-link>
    <b-anchor-link href="#guan-bi-ti-shi" title="关闭提示"></b-anchor-link>
    <b-anchor-link href="#props" title="Props"></b-anchor-link>
    <b-anchor-link href="#slot" title="Slot"></b-anchor-link>
  </b-anchor>
</div>

文字提示气泡框，在鼠标悬停时显示，代替了系统的title提示。

### 基础用法

::: demo

```html

<template>
  <b-tooltip content="这是tooltip悬停文字">
    <span>这是一段文字，鼠标经过其上时会显示tooltip</span>
  </b-tooltip>
</template>
```

:::

### 多种悬停位置

::: demo

```html

<template>
  <div class="top">
    <b-tooltip content="Top Left text" placement="top-start">
      <b-button>上左</b-button>&nbsp;&nbsp;
    </b-tooltip>
    <b-tooltip content="Top Center text" placement="top">
      <b-button>上边</b-button>&nbsp;&nbsp;
    </b-tooltip>
    <b-tooltip content="Top Right text" placement="top-end">
      <b-button>上右</b-button>
    </b-tooltip>
  </div>
  <div class="center">
    <div class="center-left">
      <b-tooltip content="Left Top text" placement="left-start">
        <b-button>左上</b-button>
      </b-tooltip>
      <br><br>
      <b-tooltip content="Left Center text" placement="left">
        <b-button>左边</b-button>
      </b-tooltip>
      <br><br>
      <b-tooltip content="Left Bottom text" placement="left-end">
        <b-button>左下</b-button>
      </b-tooltip>
    </div>
    <div class="center-right">
      <b-tooltip content="Right Top text" placement="right-start">
        <b-button>右上</b-button>
      </b-tooltip>
      <br><br>
      <b-tooltip content="Right Center text" placement="right">
        <b-button>右边</b-button>
      </b-tooltip>
      <br><br>
      <b-tooltip content="Right Bottom text" placement="right-end">
        <b-button>右下</b-button>
      </b-tooltip>
    </div>
  </div>
  <div class="bottom">
    <b-tooltip content="Bottom Left text" placement="bottom-start">
      <b-button>下左</b-button>&nbsp;&nbsp;
    </b-tooltip>
    <b-tooltip content="Bottom Center text" placement="bottom">
      <b-button>下边</b-button>&nbsp;&nbsp;
    </b-tooltip>
    <b-tooltip content="Bottom Right text" placement="bottom-end">
      <b-button>下右</b-button>
    </b-tooltip>
  </div>
</template>
```

:::

### 不同主题

::: demo

```html

<template>
  <b-tooltip content="light" theme="light">
    <b-button>light</b-button>&nbsp;&nbsp;
  </b-tooltip>
  <b-tooltip content="Dark" theme="dark">
    <b-button>Dark(default)</b-button>
  </b-tooltip>
</template>
```

:::

### 多行

::: demo

```html

<template>
  <b-tooltip placement="top">
    <b-button>多行</b-button>
    <template #content>
      <div>这是多行文字</div>
      <div>这是多行文字</div>
    </template>
  </b-tooltip>
</template>
```

:::

### 关闭提示

::: demo

```html

<template>
  <b-tooltip content="关闭和隐藏提示" :disabled="disabled">
    <b-button @click="disabled=!disabled">{{ disabled ? '关闭提示':'开启提示'}}</b-button>
  </b-tooltip>
</template>
<script>
  export default {
    data() {
      return {
        disabled: false
      }
    }
  }
</script>
```

:::

### Props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| v-model:visible     | 状态是否可见   | Boolean  |  —   |  false   |
| content     | 显示的内容   | string  |  —   |   —   |
| placement     | 提示框出现的位置   | string  |  top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end   |   —   |
| disabled     | 是否禁用提示框   | Boolean  |  —   |   false   |
| transition | 自定义渐变动画   |  string     |  —   |   fade-in-linear   |
| visible-arrow     | 是否显示箭头  |  Boolean  |  —   |   true   |
| popper-options  | popper.js 参数   |  Object  |   —    |   { boundariesElement: 'body', gpuAcceleration: false }   |
| theme     | 主题   |  string  |  dark 或 light   |   dark   |
| show-after     | 延迟出现，单位毫秒   | number  | — |   0    |
| hide-after     | 延迟消失，单位毫秒   | number  | — |   0    |
| auto-close     | tooltip出现后自动隐藏演示，单位毫秒，为0时不隐藏  | number  | — |   0    |
| manual    | 手动控制模式，true时鼠标进入移出事件不生效   | Boolean  |  —   |   false   |
| offset    | 出现位置的偏移量   |  Number |  — |    0     |
| appendToBody    | 是否将弹层放置于 body 内   | Boolean  |  —   |   false   |
| options    | 自定义 popper.js 的配置项具体参考popper.js   | Object  |  —   |   —    |

### Slot

| 名称      | 说明    |
|---------- |-------- |
| content     | 提示框的内容，定义此 slot 时，会覆盖 props content。   |
