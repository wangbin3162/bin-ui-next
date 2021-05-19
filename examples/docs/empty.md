## Empty 空状态

### 基础用法

目前表格和tree型结构使用，可以自定义标签使用，也可以使用指令使用

::: demo

```html

<template>
  <div style="width: 224px;border: 1px solid #eee;height: 150px;">
    <b-empty>当前无数据</b-empty>
  </div>
</template>
```

:::

### 指令方式

可以使用v-no-data指令动态指定，并可以绑定显示文字

::: demo

```html

<template>
  <div style="width: 224px;">
    <div style="border: 1px solid #eee;height: 150px;" v-no-data:[dataText]="true"></div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        dataText: '抱歉没有数据'
      }
    }
  }
</script>
```

:::

### Props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| title     | 文字提示   | string  |    —       |    暂无数据    |


### Methods

| 方法名      | 说明    | 返回值      |
|---------- |-------- |---------- |
| setTitle     | 设置文字，主要为指令提供外部操作  | Function(title)  |
