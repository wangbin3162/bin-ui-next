## Switch 开关

在两种状态间切换时用到的开关选择器。

### 基础用法

::: demo

```html

<template>
  <b-switch v-model="switch1" @change="change"></b-switch>
</template>
<script>
  export default {
    data() {
      return {
        switch1: false
      }
    },
    methods: {
      change(status) {
        this.$message('开关状态：' + status);
      }
    }
  }
</script>
```

:::

### 大小及颜色

::: demo

```html

<template>
  <b-switch size="large"></b-switch>&nbsp;
  <b-switch></b-switch>&nbsp;
  <b-switch size="small"></b-switch>&nbsp;
  <b-switch active-color="#13ce66" inactive-color="#ff4949"></b-switch>
</template>
```

:::

### 文字或图标

::: demo

```html

<template>
  <b-switch>
    <template #open><span>开</span></template>
    <template #close><span>关</span></template>
  </b-switch>&nbsp;
  <b-switch>
    <template #open>
      <b-icon name="check"></b-icon>
    </template>
    <template #close>
      <b-icon name="close"></b-icon>
    </template>
  </b-switch>
  <br><br>
  <b-switch size="large">
    <template #open><span>开启</span></template>
    <template #close><span>关闭</span></template>
  </b-switch>&nbsp;
  <b-switch size="large">
    <template #open><span>ON</span></template>
    <template #close><span>OFF</span></template>
  </b-switch>
</template>
```

:::

### 禁用

::: demo

```html

<template>
  <b-switch :disabled="disabled"></b-switch>&nbsp;
  <b-button type="primary" @click="disabled = !disabled" size="mini">Toggle Disabled</b-button>
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

### 切换前拦截

可以通过设置`confirm`来设置切换前拦截，并通过`confirm-txt`来自定义切换文字提示。

::: demo

```html

<template>
  <b-switch confirm></b-switch>
</template>
```

:::

### Props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| modelValue     | 指定当前是否选中，可以使用 v-model 双向绑定数据   | Boolean  |  —   |  false   |
| size     | 开关的尺寸。建议开关如果使用了2个汉字的文字，使用 large。   | String  |  large、small、default   |  default   |
| disabled     | 禁用开关       | Boolean  |  —   |  false   |
| true-value     | 选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用       | String, Number, Boolean  |  —   |  true   |
| false-value     | 没有选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用       | String, Number, Boolean  |  —   |  false   |
| active-color     | switch 打开时的背景色       | string |  —   |   —    |
| inactive-color | switch 关闭时的背景色       | string |  —   |   —    |
| confirm | 开启切换前拦截功能  | Boolean  |  —   |  false   |
| confirm-txt | 切换拦截文字   | string |  —   |   —    |

### Events

| 事件名      | 说明    | 返回值      |
|---------- |-------- |---------- |
| change     | 开关变化时触发，返回当前的状态   | true、false  |

### Slot

| 事件名      | 说明    |
|---------- |-------- |
| open  | 自定义显示打开时的内容  |
| close  | 自定义显示关闭时的内容  |
