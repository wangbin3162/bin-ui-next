## Drawer 抽屉

简易的抽屉用于展示或者快速弹出,可以根据是信息展示还是创建动态插入

### 基础用法

最简单的使用方法，通过控制属性value来显示 / 隐藏对话框。

::: demo

```html

<template>
  <b-button type="primary" @click="value1 = true">open</b-button>
  <b-drawer v-model="value1" title="抽屉标题">
    <p>我是抽屉内容</p>
  </b-drawer>
</template>
<script>
  export default {
    data() {
      return {
        value1: false
      }
    }
  }
</script>
```

:::

### 左侧打开

设置 `placement="left"`为左侧打开

::: demo

```html

<template>
  <b-button type="primary" @click="value2 = true">左侧打开</b-button>
  <b-drawer v-model="value2" title="抽屉标题" placement="left" width="500px">
    <p>我是左侧的抽屉</p>
  </b-drawer>
</template>
<script>
  export default {
    data() {
      return {
        value2: false
      }
    }
  }
</script>
```

:::

### inner 模式

可以设置inner模式在某个容器内打开

::: demo

```html

<template>
  <div style="position:relative;height:400px;background: #eee;border:1px solid #eee;z-index: 2;">
    <b-button type="primary" @click="valueInner = true">内部抽屉</b-button>
    <b-drawer v-model="valueInner" title="内部抽屉" :lock-scroll="false" inner :z-index="10">
      <p>我是内部的抽屉</p>
    </b-drawer>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        valueInner: false
      }
    }
  }
</script>
```

:::

### 信息预览框

::: demo

```html

<template>
  <b-button type="primary" @click="value3 = true">信息预览</b-button>
  <b-drawer v-model="value3" :show-close="false" width="640">
    <p :style="pStyle">用户信息</p>
    <p :style="pStyle">个人信息</p>
    <div class="demo-drawer-profile">
      <p flex="box:mean" class="mb-10">
        <span>名称: wangbin</span><span>手机号: +86 1762516xxxx</span>
      </p>
      <p flex="box:mean" class="mb-10">
        <span>城市: 徐州市</span><span>区: 鼓楼区</span>
      </p>
      <p flex="box:mean" class="mb-10">
        <span>出生年月: 1990-04</span><span>职业: web前端</span>
      </p>
      <p flex="box:mean" class="mb-10">
        个人主页:
        <a href="https://wangbin3162.github.io/web-doc/guide/" target="_blank">https://wangbin3162.github.io/web-doc/guide/</a>
      </p>
    </div>
    <b-divider></b-divider>
    <p :style="pStyle">公司</p>
    <div class="demo-drawer-profile">
      <p flex="box:mean" class="mb-10">
        <span>名称: xxxx有限公司</span><span>手机号: +86 1762516xxxx</span>
      </p>
      <p flex="box:mean" class="mb-10">
        <span>地址: 徐州市xx区xx街道88号</span><span>电话: +86 1762516xxxx</span>
      </p>
    </div>
    <b-divider></b-divider>
    <p :style="pStyle">联系我们</p>
    <div class="demo-drawer-profile">
      <p flex="box:mean" class="mb-10">
        <span>Email: 316281400@qq.com</span><span>手机号: +86 1762516xxxx</span>
      </p>
      <p class="mb-10">
        GitHub: <a href="https://github.com/wangbin3162/bin-ui"
                   target="_blank">https://github.com/wangbin3162/bin-ui-next</a>
      </p>
    </div>
  </b-drawer>
</template>
<script>
  export default {
    data() {
      return {
        value3: false,
        pStyle: {
          fontSize: '16px',
          color: 'rgba(0,0,0,0.85)',
          lineHeight: '24px',
          marginBottom: '16px'
        }
      }
    }
  }
</script>
```

:::

### 嵌套抽屉

抽屉可以互相嵌套，但一般不推荐这么使用避免层级过多影响用户交互

::: demo

```html

<template>
  <b-button type="primary" @click="value5 = true">打开抽屉</b-button>
  <b-drawer title="一级抽屉" width="512" :show-close="false" v-model="value5">
    <b-button @click="value6 = true" type="primary">打开二层抽屉</b-button>
  </b-drawer>
  <b-drawer title="二级抽屉" :show-close="false" v-model="value6">
    这是第二层抽屉
  </b-drawer>
</template>
<script>
  export default {
    data() {
      return {
        value5: false,
        value6: false
      }
    }
  }
</script>
```

:::

### 可拖拽宽度

可以设置拖拽抽屉

::: demo

```html

<template>
  <b-button type="primary" @click="value7 = true">open</b-button>
  <b-drawer v-model="value7" title="抽屉标题" draggable>
    <p>我是抽屉内容</p>
  </b-drawer>
</template>
<script>
  export default {
    data() {
      return {
        value7: false
      }
    }
  }
</script>
```

:::

### Props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| modelValue     | 是否显示，可使用 v-model 双向绑定数据。   | Boolean  |    —       |    false    |
| title     | 标题，如果使用 slot 自定义了页头，则 title 无效   | String  |     —       |     —     |
| placement | 方向   | String  |    left/right      |     right    |
| append-to-body    | 是否将对话框放置于 body 内 | Boolean  |      —      |  false  |
| width     | 抽屉宽度 | Number  |      —      | 300 |
| min-width     | 抽屉最小宽度 | Number  |      —      | 300 |
| show-close     | 是否显示关闭按钮 | Boolean  |      —      | true |
| mask-closable    | 是否允许点击遮罩层关闭 | Boolean  |      —      | true |
| mask  | 是否有mask遮罩 | Boolean  |      —      | true |
| styles  | 抽屉中间层的样式 | Object  |      —      |  — |
| inner  | 是否设置抽屉在某个元素内打开，开启此属性时，应当关闭 append-to-body 属性 | Boolean  |      —      | false |
| draggable  | 是否开启拖拽调整宽度 | Boolean  |      —      |  false |
| before-close  | 关闭前事件,返回 Promise 可以阻止关闭 | Function  |
| lock-scroll  | 是否锁定滚动 | Boolean  |      —      |  true |

### Events

| 事件名      | 说明    | 返回值      |
|---------- |-------- |---------- |
| close     | 关闭抽屉触发   | 无  |
| resize-width   | 调整宽度   | 无  |

### Slot

| 名称      | 说明    |
|---------- |-------- |
| header    | 自定义页头 |
| close     | 关闭按钮   |
| default     | 抽屉主体内容   |
