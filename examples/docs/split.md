## Split 分割面板

分割面板可自行拖放宽度/高度，双击分割线可重置默认设置的大小。

### 基础用法

`default-percent` 用于设置左侧默认宽度百分比

::: demo

```html

<template>
  <div style="width: 100%;height: 300px;border:1px solid #ddd;">
    <b-split>
      <template #left>
        <div class="left-container">左侧容器</div>
      </template>
      <template #right>
        <div class="right-container">右侧容器</div>
      </template>
    </b-split>
  </div>
</template>
```

:::

### 上下分割

::: demo

```html

<template>
  <div style="width: 100%;height: 300px;border:1px solid #ddd;">
    <b-split split="horizontal" :default="100">
      <template #left>
        <div class="left-container">上边容器</div>
      </template>
      <template #right>
        <div class="right-container">下面容器</div>
      </template>
    </b-split>
  </div>
</template>
```

:::

### 嵌套使用

::: demo

```html

<template>
  <div style="width: 100%;height: 300px;border:1px solid #ddd;">
    <b-split>
      <template #left>
        <div class="left-container">左侧容器</div>
      </template>
      <template #right>
        <b-split split="horizontal" :default="100">
          <template #left>
            <div class="top-container">上部容器</div>
          </template>
          <template #right>
            <div class="bottom-container">下部容器</div>
          </template>
        </b-split>
      </template>
    </b-split>
  </div>
</template>
```

:::

### 设置默认样式

::: demo

```html

<template>
  <div style="width: 100%;height: 300px;border:1px solid #ddd;">
    <b-split :default-wrap-style="['20%','80%']">
      <template #left>
        <div class="left-container">左侧容器</div>
      </template>
      <template #right>
        <b-split split="horizontal" :default="100" :default-wrap-style="['50%','50%']">
          <template #left>
            <div class="left-container">上边容器</div>
          </template>
          <template #right>
            <div class="right-container">下面容器</div>
          </template>
        </b-split>
      </template>
    </b-split>
  </div>
</template>
```

:::

### 隐藏分割线

::: demo

```html

<template>
  <div style="width: 100%;height: 300px;border:1px solid #ddd;">
    <b-split :default="240" hide-line>
      <template #left>
        <div class="left-container">左侧容器</div>
      </template>
      <template #right>
        <div class="right-container">下面容器</div>
      </template>
    </b-split>
  </div>
</template>
```

:::

### Props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| split    | 分割类型   | String  | 'vertical', 'horizontal'   |  vertical  |
| min   | 最小像素   | Number  |  —   |   60  |
| default  | 默认百分比   | Number  |  —   |   200  |
| default-wrap-style  | 默认容器样式 ,一个数组，可分别指定两个容器大小，可为像素或百分比，开始时生效  | Array[]  |  —   |   —   |
| hide-line  | 是否隐藏分割线  | Boolean  |  —   |   false  |
| resizer-color  | 自定义分割线颜色（自定义颜色后hide-line不生效）  | String  |  —   |   —   |
| class-name  | 自定义resizer样式名称 | String  |  —   |   —   |

### Events

| 事件名      | 说明    | 返回值      |
|---------- |-------- |---------- |
| resize   | 重置大小   | percent  |

### Slot

| 名称      | 说明    |
|---------- |-------- |
| left     | split 为 vertical 时左边面板 horizontal 时为上边面板  |
| right    | split 为 vertical 时右边面板 horizontal 时为下边面板  |
