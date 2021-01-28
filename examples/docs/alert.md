## Alert 警告提示

<div class="global-anchor">
  <b-anchor :scroll-offset="100">
    <b-anchor-link href="#ji-chu-yong-fa" title="基础用法"></b-anchor-link>
    <b-anchor-link href="#bao-han-miao-shu-xin-xi" title="包含描述信息"></b-anchor-link>
    <b-anchor-link href="#tu-biao" title="图标"></b-anchor-link>
    <b-anchor-link href="#ke-yi-guan-bi" title="可以关闭"></b-anchor-link>
    <b-anchor-link href="#ding-bu-gong-gao-yang-shi" title="顶部公告样式"></b-anchor-link>
    <b-anchor-link href="#props" title="Props"></b-anchor-link>
    <b-anchor-link href="#events" title="Events"></b-anchor-link>
    <b-anchor-link href="#slot" title="Slot"></b-anchor-link>
  </b-anchor>
</div>

静态的展示一些区块，提示或者警告，可以动态的去删除

### 基础用法

基础的按钮用法

::: demo

```html

<template>
  <b-alert>info alert</b-alert>
  <b-alert type="success">success alert</b-alert>
  <b-alert type="warning">warning alert</b-alert>
  <b-alert type="error">error alert</b-alert>
</template>
```

:::

### 包含描述信息

自定义`#desc`插入描述内容。

::: demo

```html

<template>
  <b-alert>info alert
    <template #desc>我是描述信息...</template>
  </b-alert>
  <b-alert type="success">success alert
    <template #desc>我是描述信息...</template>
  </b-alert>
  <b-alert type="warning">warning alert
    <template #desc>我是描述信息...</template>
  </b-alert>
  <b-alert type="error">error alert
    <template #desc>我是描述信息...</template>
  </b-alert>
</template>
```

:::

### 图标

根据 `type` 属性自动添加不同图标，或者自定义图标 `slot` 。

::: demo

```html

<template>
  <b-alert show-icon>info alert</b-alert>
  <b-alert type="success" show-icon>success alert</b-alert>
  <b-alert type="warning" show-icon>warning alert</b-alert>
  <b-alert type="error" show-icon>error alert
    <template #desc> Custom error description copywriting.</template>
  </b-alert>
  <b-alert show-icon>
    自定义icon
    <template #icon>
      <b-icon name="smile"></b-icon>
    </template>
    <template #desc>自定义icon描述</template>
  </b-alert>
</template>
```

:::

### 可以关闭

设置属性 `banner` 可以应用顶部公告的样式。

::: demo

```html

<template>
  <b-alert closable>An info prompt</b-alert>
  <b-alert type="success" show-icon closable>
    A success prompt
    <template #desc>Content of prompt. Content of prompt. Content of prompt. Content of prompt. </template>
  </b-alert>
  <b-alert type="warning" closable>
    Custom closing content
    <template #close>No longer prompt</template>
  </b-alert>
</template>
```

:::

### 顶部公告样式

设置属性 `banner` 可以应用顶部公告的样式。

::: demo

```html

<template>
  <b-alert banner>公告样式...</b-alert>
  <b-alert banner closable type="warning">公告样式...</b-alert>
</template>
```

:::

### Props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type     |  警告提示样式   | string  |  info、success、warning、error   |   info   |
| closable    |  是否可关闭       | boolean  |  —   |   false   |
| show-icon    |  是否显示图标   | boolean  |  —   |   false   |

### Events

| 事件名      | 说明    | 返回值      |
|---------- |-------- |---------- |
| close     | 关闭时触发   | event  |

### Slot

| 名称      | 说明    |
|---------- |-------- |
| default     | 警告提示内容   |
| desc     | 警告提示辅助性文字介绍   |
| icon     | 自定义图标内容   |
| close     | 自定义关闭内容   |
