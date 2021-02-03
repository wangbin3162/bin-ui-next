## Modal 模态框

对话框/弹窗，在浮层中显示，引导用户进行相关操作。

### 基础用法

最简单的使用方法。
::: demo 考虑到几乎所有的弹窗都会自定义footer来控制，因此不再在内部插入取消和确定

```html

<template>
  <b-button type="primary" @click="visible = true">显示弹窗</b-button>
  <b-modal v-model="visible" title="普通的模态框标题">
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
</template>

<script>
  export default {
    data() {
      return {
        visible: false
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
  <b-modal v-model="modal1">
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
</template>
<script>
  export default {
    data() {
      return {
        modal1: false,
        modal2: false,
        modal3: false,
        modal4: false
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
