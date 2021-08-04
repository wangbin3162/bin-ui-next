## Tag 标签

显示标签

### 基础用法

由`type`属性来选择`tag`的类型，也可以通过`color`属性来自定义背景色。 由于标签原有高度和按钮类似，因此去除size设置

::: demo

```html

<template>
  <div>
    <b-tag>default</b-tag>
    <b-tag type="primary">primary</b-tag>
    <b-tag type="success">success</b-tag>
    <b-tag type="info">info</b-tag>
    <b-tag type="warning">warning</b-tag>
    <b-tag type="danger">danger</b-tag>
  </div>
</template>
```

:::

### 多种颜色

由`dark`属性来设置深色模式,并可以设置更多颜色类型的标签

::: demo

```html

<template>
  <div>
    <b-tag>default</b-tag>
    <b-tag type="primary" dark>primary</b-tag>
    <b-tag type="success" dark>success</b-tag>
    <b-tag type="info" dark>info</b-tag>
    <b-tag type="warning" dark>warning</b-tag>
    <b-tag type="danger" dark>danger</b-tag>
    <b-tag type="magenta">magenta</b-tag>
    <b-tag type="red">red</b-tag>
    <b-tag type="volcano">volcano</b-tag>
    <b-tag type="orange">orange</b-tag>
    <b-tag type="gold">gold</b-tag>
    <b-tag type="cyan">cyan</b-tag>
    <b-tag type="blue">blue</b-tag>
    <b-tag type="geekblue">geekblue</b-tag>
    <b-tag type="purple">purple</b-tag>
  </div>
</template>
```

:::

### 可选择标签

设置`checkable`属性可以定义一个标签是否可可选择。

::: demo

```html

<template>
  <div class="mb-10">
    <b-tag type="primary" dark checkable><span>primary</span></b-tag>
    <b-tag type="success" dark checkable>success</b-tag>
    <b-tag type="info" dark checkable>info</b-tag>
    <b-tag type="warning" dark checkable>warning</b-tag>
    <b-tag type="danger" dark checkable>danger</b-tag>
    <b-tag type="magenta" dark checkable>magenta</b-tag>
    <b-tag type="red" dark checkable>red</b-tag>
    <b-tag type="volcano" dark checkable>volcano</b-tag>
    <b-tag type="orange" dark checkable>orange</b-tag>
    <b-tag type="gold" dark checkable>gold</b-tag>
    <b-tag type="cyan" dark checkable>cyan</b-tag>
    <b-tag type="blue" dark checkable>blue</b-tag>
    <b-tag type="geekblue" dark checkable>geekblue</b-tag>
    <b-tag type="purple" dark checkable>purple</b-tag>
  </div>
  <div>
    <b-tag type="primary" checkable><span>primary</span></b-tag>
    <b-tag type="success" checkable>success</b-tag>
    <b-tag type="info" checkable>info</b-tag>
    <b-tag type="warning" checkable>warning</b-tag>
    <b-tag type="danger" checkable>danger</b-tag>
    <b-tag type="magenta" checkable>magenta</b-tag>
    <b-tag type="red" checkable>red</b-tag>
    <b-tag type="volcano" checkable>volcano</b-tag>
    <b-tag type="orange" checkable>orange</b-tag>
    <b-tag type="gold" checkable>gold</b-tag>
    <b-tag type="cyan" checkable>cyan</b-tag>
    <b-tag type="blue" checkable>blue</b-tag>
    <b-tag type="geekblue" checkable>geekblue</b-tag>
    <b-tag type="purple" checkable>purple</b-tag>
  </div>
</template>
```

:::

### 可移除标签

设置`closable`属性可以定义一个标签是否可移除。

::: demo

```html

<template>
  <b-tag type="primary" closable>标签一</b-tag>
  <b-tag type="success" closable>标签二</b-tag>
  <b-tag type="info" closable>标签三</b-tag>
  <b-tag type="warning" closable>标签四</b-tag>
  <b-tag type="danger" closable>标签五</b-tag>
</template>
```

:::

### dot 模式

dot 模式可以简单显示带有提示小圆点等内容

::: demo

```html

<template>
  <b-tag type="primary" dot><span>primary</span></b-tag>
  <b-tag type="success" dot>success</b-tag>
  <b-tag type="info" dot>info</b-tag>
  <b-tag type="warning" dot>warning</b-tag>
  <b-tag type="danger" dot>danger</b-tag>
  <b-tag type="magenta" dot>magenta</b-tag>
  <b-tag type="red" dot>red</b-tag>
  <b-tag type="volcano" dot>volcano</b-tag>
  <b-tag type="orange" dot>orange</b-tag>
  <b-tag type="gold" dot>gold</b-tag>
  <b-tag type="cyan" dot>cyan</b-tag>
  <b-tag type="blue" dot>blue</b-tag>
  <b-tag type="geekblue" dot>geekblue</b-tag>
  <b-tag type="purple" dot>purple</b-tag>
</template>
```

:::

### 动态编辑标签

::: demo

```html

<template>
  <div>
    <b-button class="button-new-tag" @click="addOne">+ New Tag</b-button>
    <p>
      <b-tag
        :key="tag"
        v-for="tag in dynamicTags"
        type="primary"
        closable
        @close="handleCloseTag(tag)">
        {{tag}}
      </b-tag>
    </p>
  </div>
</template>
<script>
  import { reactive, toRefs } from 'vue'

  export default {
    setup() {
      const data = reactive({
        dynamicTags: ['标签一', '标签二', '标签三'],
        count: 0
      })
      const handleCloseTag = (tag) => {
        data.dynamicTags.splice(data.dynamicTags.indexOf(tag), 1)
      }
      const addOne = () => {
        data.count++
        data.dynamicTags.push('new tag' + data.count);
      }
      return {
        ...toRefs(data),
        handleCloseTag,
        addOne
      }
    }
  }
</script>
```

:::

### 自定义样式

具有多种自定义样式的方式可供选择

::: demo

```html

<template>
  <b-tag color="#ffa2d3">Custom Color</b-tag>
  <b-tag type="primary" no-border font-size="14px">No Border</b-tag>
  <b-tag :tag-style="{backgroundColor: '#5AFAFC',color:'#606266'}">Style</b-tag>
  <b-tag closable>Default</b-tag>
</template>
```

:::

### Props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| closable     | 是否可关闭   | boolean  |   —            |    false    |
| type     | 主题   | string  |   success/info/warning/danger     |    —         |
| dot     |  是否显示是小圆点   | boolean  |   —         |    false       |
| no-border     |  是否关闭边框   | boolean  |   —         |    false       |
| color    |  背景颜色(可自定义)   | String  |   —         |    —          |
| fontSize    |  字体大小   | String  |    —      |    —          |
| tag-style    |  标签样式(完全控制，尽量不要设置)   | String  |    —      |    —          |
| checkable    |  是否可选中   | Boolean  |    —      |   false       |
| modelValue |  选中状态可以使用v-model双向绑定    | Boolean  |    —      |   true        |

### Events

| 事件名      | 说明    | 返回值      |
|---------- |-------- |---------- |
| close    | 关闭事件回调   | event  |
| click    | 点击事件回调   | event  |
| change   | 选中事件回调,第二项需要设置name值   | checked,name  |
