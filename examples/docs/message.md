## Message 通知

<div class="global-anchor">
  <b-anchor :scroll-offset="100">
    <b-anchor-link href="#ji-chu-yong-fa" title="基础用法"></b-anchor-link>
    <b-anchor-link href="#bu-tong-lei-bie" title="不同类别"></b-anchor-link>
    <b-anchor-link href="#pei-zhi-can-shu" title="配置参数"></b-anchor-link>
    <b-anchor-link href="#api" title="API"></b-anchor-link>
    <b-anchor-link href="#options" title="Options"></b-anchor-link>
  </b-anchor>
</div>

轻量级的信息反馈组件，在顶部居中显示，并自动消失。有多种不同的提示状态可选择。

### 基础用法

基本用法，默认在 3 秒后关闭

:::demo

```html

<template>
  <b-button @click="$message('普通的消息提示')">info</b-button>
  <b-button @click="open1">render函数</b-button>
</template>
<script>
  import { h } from 'vue'

  export default {
    methods: {
      open1() {
        this.$message.info({
          message: h('i', { style: 'color: red' }, '我是render函数渲染出来的内容')
        });
      },
    }
  }
</script>
```

:::

### 不同类别

用来显示「成功、警告、消息、错误」类的操作反馈。

:::demo

```html

<template>
  <b-button type="primary" plain @click="$message.info('我是普通消息提示')">info</b-button>
  <b-button type="success" plain @click="$message.success('成功的提示消息')">success</b-button>
  <b-button type="warning" plain @click="$message.warning('警告的提示消息')">warning</b-button>
  <b-button type="danger" plain @click="$message.error('错误的提示消息')">error</b-button>
</template>
```

:::

### 配置参数

可以设置配置参数来渲染

:::demo

```html

<template>
  <b-button @click="$message({message:'我10秒消失',duration:10})">我10秒消失</b-button>
  <b-button @click="$message({message:'我是可关闭的的提示', duration: 5, showClose: true})">可关闭的</b-button>
  <b-button @click="$message({message:'我永远不会关闭除非手动', duration: 0, showClose: true, zIndex:3000})">不会关闭</b-button>
</template>
```

:::

### API

组件注册了$notice 已方便快速调用函数如下

```javascript
this.$message(options)
this.$message.info(options)
this.$message.success(options)
this.$message.warning(options)
this.$message.error(options)
```


在vue3中你也可以手动引入并使用

```javascript
import { Message } from 'bin-ui-next'

Message(options)
Message.info(options)
Message.success(options)
Message.warning(options)
Message.error(options)

```

### Options

| 函数      | 说明    |  类型      | 默认值      |
|---------- |-------- |---------- |---------|
| message     | 通知提醒的内容，为空或不填时，自动应用仅标题模式下的样式   | String  | —  |
| duration     | 自动关闭的延时，单位秒，不关闭可以写 0 | Number | 3  |
| onClose     | 关闭时的回调 | Function	 |  —  |
| showClose     | 是否显示关闭按钮 | Boolean	 |  true  |
| useHTML     | 是否将message转换成HTML片段插入，此操作需谨慎 | Boolean	 |  false  |
| offset     | 偏移量 | Number	 |  —   |
| zIndex     | 层级，默认2000以后追加 | Number	 |  —   |
