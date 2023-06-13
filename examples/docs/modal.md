## Modal 模态框

对话框/弹窗，在浮层中显示，引导用户进行相关操作。

### 基础用法

最简单的使用方法。
::: demo 考虑到几乎所有的弹窗都会自定义footer来控制，因此不再在内部插入取消和确定

```html

<template>
  <b-button type="primary" @click="visible = true">Open</b-button>
  <b-button type="primary" @click="confirm = true">Confirm</b-button>
  <b-modal v-model="visible" title="普通的模态框标题" :z-index="1000">
    <p>我是弹窗内容...</p>
    <p>我是弹窗内容...</p>
    <p>我是弹窗内容...</p>
    <template #footer>
      <span>
        <b-button @click="onClose">取 消</b-button>
        <b-button type="primary" @click="onOk">确 定</b-button>
      </span>
    </template>
  </b-modal>
  <b-modal v-model="confirm" width="420px" :show-close="false">
    <div class="p8">
      <div class="f-s-18" flex="cross:center">
        <b-icon name="info-circle" size="24" color="#fa8c16"></b-icon>
        <span class="ml-8">提示</span>
      </div>
      <div style="padding: 8px 0 8px 32px;">确认注销登录吗？</div>
      <div class="t-right">
        <b-button @click="confirm = false">取消</b-button>
        <b-button type="primary" @click="confirm = false">确定</b-button>
      </div>
    </div>
  </b-modal>
</template>

<script>
  export default {
    data() {
      return {
        visible: false,
        confirm: false
      }
    },
    methods: {
      onOk() {
        this.visible = false
        this.$message('点击确定')
      },
      onClose() {
        this.visible = false
        this.$message('点击取消')
      }
    }
  }
</script>
```

:::

### 自定义样式

Modal 组件提供了灵活的自定义样式 API 和 Slot，可以自由控制整个 Modal 的各个组成部分，比如页头、页脚、关闭按钮。

::: demo 注：参数内容都包含在第一个示例中

```html

<template>
  <b-button @click="modal1 = true">自定义页头页脚</b-button>
  <b-button @click="modal2 = true">不带标题栏和页脚</b-button>
  <b-button @click="modal3 = true">设置宽</b-button>
  <b-button @click="modal4 = true">距离顶部200px</b-button>
  <b-button @click="modal5 = true">body-style</b-button>
  <b-modal v-model="modal1" >
    <template #title>
      <p style="color:#f60;text-align:center">
        <span>自定义页头</span>
      </p>
    </template>
    <p>我是弹窗内容...</p>
    <p>我是弹窗内容...</p>
    <p>我是弹窗内容...</p>
    <template #footer>
      <b-button type="danger" @click="$log.print('delete click','danger')">Delete</b-button>
    </template>
  </b-modal>

  <b-modal v-model="modal2">
    <p>我是弹窗内容...</p>
    <p>我是弹窗内容...</p>
    <p>我是弹窗内容...</p>
  </b-modal>

  <b-modal v-model="modal3"
           title="自定义宽度"
           width="300px">
    <p> 自定义宽度，单位 px，默认 520px。
      对话框的宽度是响应式的，当屏幕尺寸小于 768px 时，宽度会变为自动auto。</p>
  </b-modal>

  <b-modal v-model="modal4" title="距离顶部" top="200px">
    <p>距离顶部200px</p>
  </b-modal>
  
  <b-modal v-model="modal5" title="body-style" :body-styles="{padding: 0}">
    <p>我是弹窗内容...</p>
    <p>我是弹窗内容...</p>
    <p>我是弹窗内容...</p>
  </b-modal>
</template>
<script>
  export default {
    data() {
      return {
        modal1: false,
        modal2: false,
        modal3: false,
        modal4: false,
        modal5: false
      }
    }
  }
</script>
```

:::

### 自定义弹出动画

弹窗动画可以通过transition-name自定义，默认从点击位置弹出

::: demo 注：

```html

<template>
  <b-space>
    <b-select v-model="transitionName">
      <b-option label="dialog-fade" value="dialog-fade"></b-option>
      <b-option label="fade-in" value="fade-in"></b-option>
      <b-option label="move-right" value="move-right"></b-option>
      <b-option label="zoom-in-top" value="zoom-in-top"></b-option>
      <b-option label="zoom-in" value="zoom-in"></b-option>
      <b-option label="fade-scale-move" value="fade-scale-move"></b-option>
      <b-option label="fade-down" value="fade-down"></b-option>
    </b-select>
    <b-button @click="modal1 = true">弹出</b-button>
  </b-space>
  <b-modal v-model="modal1" :title="`自定义动画${transitionName}`" :transition-name="transitionName">
    <p>我是弹窗内容...</p>
    <p>我是弹窗内容...</p>
    <p>我是弹窗内容...</p>
    <template #footer>
      <span>
        <b-button @click="modal1 = false">关闭</b-button>
      </span>
    </template>
  </b-modal>
</template>
<script>
  export default {
    data() {
      return {
        modal1: false,
        transitionName: 'dialog-fade'
      }
    }
  }
</script>
```

:::

### 禁用关闭

可以禁用关闭和遮罩层关闭。

::: demo

```html

<template>
  <b-button @click="modal1 = true">禁用右上角关闭</b-button>
  <b-button @click="modal2 = true">禁用mask关闭</b-button>
  <b-modal v-model="modal1" title="普通的模态框标题" :show-close="false">
    <p>禁用右上角关闭</p>
  </b-modal>
  <b-modal v-model="modal2" title="普通的模态框标题" :mask-closable="false">
    <p>禁用mask关闭</p>
  </b-modal>
</template>
<script>
  export default {
    data() {
      return {
        modal1: false,
        modal2: false
      }
    }
  }
</script>
```

:::

### 嵌套

弹窗嵌套一般情况下不推荐嵌套，但也可以这么使用

::: demo

```html

<template>
  <div>
    <b-button @click="modal1 = true">显示弹窗一</b-button>

    <b-modal v-model="modal1" title="弹窗一" width="600px">
      <p>我是弹窗内容...</p>
      <p>我是弹窗内容...</p>
      <p>我是弹窗内容...</p>
      <b-button type="primary" @click="modal2 = true">打开嵌套弹窗</b-button>
      <b-modal v-model="modal2" title="嵌套弹窗">
        <p>我是弹窗内容...</p>
        <p>我是弹窗内容...</p>
        <p>我是弹窗内容...</p>
      </b-modal>
    </b-modal>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        modal1: false,
        modal2: false,
      }
    }
  }
</script>
```

:::

### 全屏

设置属性 `fullscreen` 可以全屏显示。并且可以设置不同的控制器来自定义控制

::: demo

```html

<template>
  <b-button @click="modal = true">显示全屏对话框</b-button>
  <b-modal v-model="modal" title="全屏标题" :fullscreen="fullscreen">
    <template #ctrl>
      <i :class="fullscreenIcon" @click="fullscreen = !fullscreen"></i>
    </template>
    <p v-for="i in 50" :key="i">我是全屏的内容{{i}}...</p>
    <template #footer>
      <span>
        <b-button @click="modal = false">取 消</b-button>
        <b-button type="primary" @click="modal = false">确 定</b-button>
      </span>
    </template>
  </b-modal>
</template>
<script>
  export default {
    data() {
      return {
        modal: false,
        fullscreen: true
      }
    },
    computed: {
      fullscreenIcon() {
        return `b-iconfont b-icon-fullscreen${this.fullscreen ? '-exit' : ''}`
      }
    }
  }
</script>
```

:::

### 可拖拽

设置属性 `draggable` 对话框可以进行拖拽移动。

::: demo

```html

<template>
  <b-button @click="modal11 = true">打开弹窗1</b-button>
  <b-button @click="modal12 = true">打开弹窗2</b-button>
  <b-modal v-model="modal11" title="弹窗1" draggable>
    <p>弹窗1内容</p>
  </b-modal>
  <b-modal v-model="modal12" title="弹窗2" draggable :mask="false">
    <p>弹窗2内容</p>
  </b-modal>
</template>
<script>
  export default {
    data() {
      return {
        modal11: false,
        modal12: false
      }
    }
  }
</script>
```

:::

### Props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| v-model   | 是否显示   | Boolean  |    —       |    false    |
| title     | 标题，如果使用 slot 自定义了页头，则 title 无效   | String  |    —    |     —     |
| width     | 对话框宽度 |  String  |      —      | 520px |
| top     | 对话框距离顶部高度 |  String  |      —      | 100px |
| show-close | 右上角的关闭按钮 | Boolean  |      —      | true |
| mask-closable     | 是否允许点击遮罩层关闭 | Boolean  |      —      | true |
| esc-closable     | 是否允许esc键盘关闭 | Boolean  |      —      | true |
| fullscreen     | 是否全屏显示 | Boolean  |      —      | false |
| draggable     | 是否可以拖拽移动 | Boolean  |      —      | false |
| mask     | 是否显示遮罩层 | Boolean  |      —      | true |
| custom-class    | 自定义类名 | String  |      —      |  —  |
| body-style    | 自定body的样式style | Object  |      —      |  —  |
| z-index    | 层级 | Number，默认为2000，弹窗会自增，如设置了此值，则会从当前设置的值进行自增  |      —      |  0  |
| append-to-body    | 是否将对话框放置于 body 内 | Boolean  |      —      |  false  |
| lock-scroll | 出现modal时锁定滚动 | Boolean  |      —      |  true  |
| transition-name   |弹窗动画 | String  |      —      | 'dialog-fade' |
| open-delay    | 打开延时（毫秒） | Number  |      —      | 0 |
| close-delay    | 关闭延时（毫秒） | Number  |      —      | 0 |
| before-close     | 关闭前回调，会暂停关闭 | Function(done) done用于关闭  |      —      |   —     |
| destroy-on-close    | 关闭时销毁内部元素，多用于内部元素需要初始化 | Boolean  |      —      | false |

### Events

| 事件名      | 说明    | 返回值      |
|---------- |-------- |---------- |
| open    | modal打开回调   | 无  |
| opened  | 打开动画完成回调   | 无  |
| close   | modal关闭回调    | 无  |
| closed  | 关闭动画结束回调    | 无  |

### Slot

| 名称      | 说明    |
|---------- |-------- |
| title     | 自定义标题   |
| ctrl     | 关闭按钮左侧控制槽   |
| footer     | 自定义页脚内容   |
