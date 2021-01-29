## Breadcrumb 面包屑

<div class="global-anchor">
  <b-anchor :scroll-offset="100">
    <b-anchor-link href="#ji-chu-yong-fa" title="基础用法"></b-anchor-link>
    <b-anchor-link href="#fen-ge-fu" title="分隔符"></b-anchor-link>
    <b-anchor-link href="#breadcrumb-props" title="Breadcrumb Props"></b-anchor-link>
    <b-anchor-link href="#breadcrumb-item-props" title="Breadcrumb Item Props"></b-anchor-link>
  </b-anchor>
</div>

显示当前页面的路径，快速返回之前的任意页面或者跳转链接

### 基础用法

面包屑的用法，separator设置分隔符 :to表示当前为router a标签引用

::: demo

```html

<template>
  <b-breadcrumb separator="/">
    <b-breadcrumb-item :to="{ path: '/' }">首页</b-breadcrumb-item>
    <b-breadcrumb-item><a href="/">组件</a></b-breadcrumb-item>
    <b-breadcrumb-item>面包屑</b-breadcrumb-item>
  </b-breadcrumb>
</template>
```

:::

### 分隔符

可以设置分隔符

::: demo

```html

<template>
  <b-breadcrumb separator-icon="right">
    <b-breadcrumb-item :to="{ path: '/' }">首页</b-breadcrumb-item>
    <b-breadcrumb-item><a href="/">组件</a></b-breadcrumb-item>
    <b-breadcrumb-item>面包屑</b-breadcrumb-item>
  </b-breadcrumb>
  <br>
  <b-breadcrumb separator-icon="caret-right">
    <b-breadcrumb-item :to="{ path: '/' }">首页</b-breadcrumb-item>
    <b-breadcrumb-item><a href="/">组件</a></b-breadcrumb-item>
    <b-breadcrumb-item>面包屑</b-breadcrumb-item>
  </b-breadcrumb>
</template>
```

:::

### Breadcrumb Props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| separator     | 分隔   | string  |  —   |   '/'   |
| separator-icon| 图标分隔符icon  | string  |  —   |   —    |

### Breadcrumb Item Props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| to     | 路由跳转对象，同 vue-router 的 to   | string/object  |  —   |   —    |
| replace| 不向 history 添加新记录 | boolean  |  —   |   false  |
