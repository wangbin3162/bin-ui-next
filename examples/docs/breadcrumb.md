## Breadcrumb 面包屑

显示当前页面的路径，快速返回之前的任意页面或者跳转链接

### 基础用法

面包屑的用法，separator设置分隔符 不设置to属性，一切都需要自行在插槽中灵活运用

::: demo

```html

<template>
  <b-breadcrumb separator="/">
    <b-breadcrumb-item>首页</b-breadcrumb-item>
    <b-breadcrumb-item>组件</b-breadcrumb-item>
    <b-breadcrumb-item>面包屑</b-breadcrumb-item>
  </b-breadcrumb>
  <b-divider />
  <b-breadcrumb separator="/">
    <b-breadcrumb-item>
      <b-dropdown>
        <a>Dashboard
          <b-icon name="down"></b-icon>
        </a>
        <template #dropdown>
          <b-dropdown-menu>
            <b-dropdown-item>操作台</b-dropdown-item>
            <b-dropdown-item>分析页</b-dropdown-item>
          </b-dropdown-menu>
        </template>
      </b-dropdown>
    </b-breadcrumb-item>
    <b-breadcrumb-item>组件</b-breadcrumb-item>
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
    <b-breadcrumb-item><a href="/">首页</a></b-breadcrumb-item>
    <b-breadcrumb-item><a href="/">组件</a></b-breadcrumb-item>
    <b-breadcrumb-item>面包屑</b-breadcrumb-item>
  </b-breadcrumb>
  <br>
  <b-breadcrumb separator-icon="caret-right">
    <b-breadcrumb-item><a href="/">首页</a></b-breadcrumb-item>
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
