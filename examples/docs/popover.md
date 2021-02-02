## Popover 气泡弹窗

<div class="global-anchor">
  <b-anchor :scroll-offset="100">
    <b-anchor-link href="#ji-chu-yong-fa" title="基础用法"></b-anchor-link>
    <b-anchor-link href="#duo-zhong-xuan-ting-wei-zhi" title="多种悬停位置"></b-anchor-link>
    <b-anchor-link href="#fu-ceng-nei-guan-bi" title="浮层内关闭"></b-anchor-link>
    <b-anchor-link href="#geng-duo-nei-rong" title="更多内容"></b-anchor-link>
    <b-anchor-link href="#que-ren-qi-pao-kuang" title="确认气泡框"></b-anchor-link>
    <b-anchor-link href="#props" title="Props"></b-anchor-link>
    <b-anchor-link href="#slot" title="Slot"></b-anchor-link>
  </b-anchor>
</div>

气泡类型的弹窗,用于放置更多信息或询问流程等

### 基础用法

::: demo

```html

<template>
  <div>
    <b-popover trigger="hover" title="Title" content="这是一段内容这是一段内容这是一段内容">
      <b-button>Hover</b-button>
    </b-popover>
    <b-popover trigger="click" title="Title" content="这是一段内容这是一段内容这是一段内容">
      <b-button>Click</b-button>
    </b-popover>
    <b-popover trigger="focus" title="Title" content="这是一段内容这是一段内容这是一段内容">
      <b-button>Focus</b-button>
    </b-popover>
  </div>
</template>
```

:::

### 多种悬停位置

::: demo

```html

<template>
  <div class="top">
    <b-popover title="Title" content="Top Left text" placement="top-start">
      <b-button>上左</b-button>&nbsp;&nbsp;
    </b-popover>
    <b-popover title="Title" content="Top Center text" placement="top">
      <b-button>上边</b-button>&nbsp;&nbsp;
    </b-popover>
    <b-popover title="Title" content="Top Right text" placement="top-end">
      <b-button>上右</b-button>
    </b-popover>
  </div>
  <div class="center">
    <div class="center-left">
      <b-popover title="Title" content="Left Top text" placement="left-start">
        <b-button>左上</b-button>
      </b-popover>
      <br><br>
      <b-popover title="Title" content="Left Center text" placement="left">
        <b-button>左边</b-button>
      </b-popover>
      <br><br>
      <b-popover title="Title" content="Left Bottom text" placement="left-end">
        <b-button>左下</b-button>
      </b-popover>
    </div>
    <div class="center-right">
      <b-popover title="Title" content="Right Top text" placement="right-start">
        <b-button>右上</b-button>
      </b-popover>
      <br><br>
      <b-popover title="Title" content="Right Center text" placement="right">
        <b-button>右边</b-button>
      </b-popover>
      <br><br>
      <b-popover title="Title" content="Right Bottom text" placement="right-end">
        <b-button>右下</b-button>
      </b-popover>
    </div>
  </div>
  <div class="bottom">
    <b-popover title="Title" content="Bottom Left text" placement="bottom-start">
      <b-button>下左</b-button>&nbsp;&nbsp;
    </b-popover>
    <b-popover title="Title" content="Bottom Center text" placement="bottom">
      <b-button>下边</b-button>&nbsp;&nbsp;
    </b-popover>
    <b-popover title="Title" content="Bottom Right text" placement="bottom-end">
      <b-button>下右</b-button>
    </b-popover>
  </div>
</template>
```

:::

### 浮层内关闭

::: demo

```html

<template>
  <b-popover v-model:visible="visible">
    <b-button type="text" @click="close">点我打开浮层</b-button>
    <a style="margin-left: 30px;">Click</a>
    <template #content>
      <b-button type="text" @click="close">关闭</b-button>
    </template>
  </b-popover>
</template>
<script>
  export default {
    data() {
      return {
        visible: false
      }
    },
    methods: {
      close() {
        this.visible = false;
      }
    }
  }
</script>
```

:::

### 更多内容

::: demo

```html

<template>
  <div>
    <b-popover placement="top" width="200px">
      <b-button>长文本</b-button>
      <template #content>
        <div>这是一段很长很长很长很长很长很长很长很长很长很长很长很长很长很长的描述</div>
      </template>
    </b-popover>
    <b-popover placement="right" width="300px">
      <b-button>更多内容</b-button>
      <template #content>
        <div>这是自定义内容~这是自定义内容~这是自定义内容~这是自定义内容~</div>
        <div>这是自定义内容~这是自定义内容~这是自定义内容~这是自定义内容~</div>
      </template>
    </b-popover>
  </div>
</template>
```

:::

### 确认气泡框

通过设置属性confirm开启确认框模式。确认框只会以 click 的形式激活，并且只会显示 title 的内容，忽略 content。

::: demo

```html

<template>
  <div>
    <b-popover v-model:visible="visible" :width="240">
      <b-button type="danger" plain>确认气泡框</b-button>
      <template #content>
        <p>
          <b-icon name="question-circle" color="#f5222d"></b-icon>
          Are you sure delete this item?
        </p>
        <div style="text-align: right; margin: 0">
          <b-button size="mini" type="text" @click="cancel">取消</b-button>
          <b-button type="primary" size="mini" @click="ok">确定</b-button>
        </div>
      </template>
    </b-popover>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        visible: false
      }
    },
    methods: {
      ok() {
        this.$message('点击了确定');
        this.visible = false
      },
      cancel() {
        this.$message('点击了取消');
        this.visible = false
      }
    }
  }
</script>
```

:::

### Props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| trigger     | 触发方式   | string  | hover（悬停）click（点击）focus（聚焦） |  click  |
| title     | 标题   | string  |  —   |   —   |
| content     | 显示的内容   | string  |  —   |   —   |
| width         | 宽度  |  string/number  | — |   —    |
| placement     | 提示框出现的位置   | string  |  top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end   |   —   |
| disabled     | 是否禁用提示框   | Boolean  |  —   |   false   |
| confirm    | 是否开启对话框模式   |  Boolean |  — |    false     |
| v-model:visible     | 状态是否可见   | Boolean  |  —   |  false   |
| placement     | 提示框出现的位置   | string  |  top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end   |   —   |
| disabled     | 是否禁用提示框   | Boolean  |  —   |   false   |
| transition | 自定义渐变动画   |  string     |  —   |   fade-in-linear   |
| visible-arrow     | 是否显示箭头  |  Boolean  |  —   |   true   |
| popper-options  | popper.js 参数   |  Object  |   —    |   { boundariesElement: 'body', gpuAcceleration: false }   |
| show-after     | 延迟出现，单位毫秒   | number  | — |   0    |
| hide-after     | 延迟消失，单位毫秒   | number  | — |   0    |
| auto-close     | tooltip出现后自动隐藏演示，单位毫秒，为0时不隐藏  | number  | — |   0    |
| manual    | 手动控制模式，true时鼠标进入移出事件不生效   | Boolean  |  —   |   false   |
| offset    | 出现位置的偏移量   |  Number |  — |    0     |
| appendToBody    | 是否将弹层放置于 body 内   | Boolean  |  —   |   false   |
| options    | 自定义 popper.js 的配置项具体参考popper.js   | Object  |  —   |   —    |

### Slot

| 名称      | 说明    |
|---------- |-------- |
| content     | 提示框的内容，定义此 slot 时，会覆盖 props content。   |
