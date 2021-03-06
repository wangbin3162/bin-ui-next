## Split 分割面板

### 基础用法

`default-percent` 用于设置左侧默认宽度百分比

::: demo

```html

<template>
  <div style="width: 100%;height: 300px;border:1px solid #ddd;">
    <b-split :default-percent="50">
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
    <b-split split="horizontal">
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
        <b-split split="horizontal">
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

### Props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| split    | 分割类型   | String  | 'vertical', 'horizontal'   |  vertical  |
| min-percent   | 最小百分比   | Number  |  —   |   10  |
| default-percent  | 默认百分比   | Number  |  —   |   20  |

### Events

| 事件名      | 说明    | 返回值      |
|---------- |-------- |---------- |
| resize   | 重置大小   | percent  |

### Slot

| 名称      | 说明    |
|---------- |-------- |
| left     | split 为 vertical 时左边面板 horizontal 时为上边面板  |
| right    | split 为 vertical 时右边面板 horizontal 时为下边面板  |
