## Tooltip 提示

文字提示气泡框，在鼠标悬停时显示，代替了系统的title提示。tooltip的default slot应该保证是一个dom或者一个component

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
    <b-button>light</b-button>
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
  <b-tooltip placement="top" content="我是一段长文本，我是一段长文本，我是一段长文本，我是一段长文本，我是一段长文本，我是一段长文本">
    <b-button>长文本</b-button>
  </b-tooltip>
</template>
```

:::

### 延时，触发时机和禁用提示

::: demo

```html

<template>
  <b-tooltip content="延时一秒显示悬停文字" :open-delay="1000">
    <b-button>延时一秒</b-button>
  </b-tooltip>
  <b-tooltip content="点击显示" trigger="click">
    <b-button>点击显示</b-button>
  </b-tooltip>
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
| theme     | 主题   |  string  |  dark 或 light   |   dark   |
| open-delay     | 延迟出现，单位毫秒   | number  | — |   0    |
| hide-delay     | 延迟消失，单位毫秒   | number  | — |   0    |
| offset    | 出现位置的偏移量   |  Number |  — |    12     |
| appendToBody    | 是否将弹层放置于 body 内   | Boolean  |  —   |   false   |

### Slot

| 名称      | 说明    |
|---------- |-------- |
| content     | 提示框的内容，定义此 slot 时，会覆盖 props content。   |
