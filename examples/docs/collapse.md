## Collapse 折叠面板

<div class="global-anchor">
  <b-anchor :scroll-offset="100">
    <b-anchor-link href="#ji-chu-yong-fa" title="基础用法"></b-anchor-link>
    <b-anchor-link href="#shou-feng-qin-mo-shi" title="手风琴模式"></b-anchor-link>
    <b-anchor-link href="#jian-dan-mo-shi-he-zi-ding-yi-tou" title="简单模式和自定义头"></b-anchor-link>
    <b-anchor-link href="#rong-qi-zu-jian" title="容器组件"></b-anchor-link>
    <b-anchor-link href="#props" title="Props"></b-anchor-link>
    <b-anchor-link href="#events" title="Events"></b-anchor-link>
    <b-anchor-link href="#slot" title="Slot"></b-anchor-link>
  </b-anchor>
</div>

需要进行分段显示时使用折叠面板

### 基础用法

默认可以同时展开多个面板，可以设置默认展开第几个。

:::demo

```html

<template>
  <div style="width:500px;">
    <b-collapse v-model="value1">
      <b-collapse-panel title="面板一标题" name="1">
        <p v-for="i in 3" :key="i">我是内容我是内容...</p>
      </b-collapse-panel>
      <b-collapse-panel title="面板二标题" name="2">
        <p v-for="i in 3" :key="i">我是内容我是内容...</p>
      </b-collapse-panel>
      <b-collapse-panel title="面板三标题" name="3">
        <p v-for="i in 3" :key="i">我是内容我是内容...</p>
      </b-collapse-panel>
    </b-collapse>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value1: '1'
      }
    }
  }
</script>
```

:::

### 手风琴模式

手风琴模式默认只能开启一个

:::demo

```html

<template>
  <div style="width:500px;">
    <b-collapse v-model="value2" accordion>
      <b-collapse-panel title="面板一标题" name="1">
        <p v-for="i in 3" :key="i">我是内容我是内容...</p>
      </b-collapse-panel>
      <b-collapse-panel title="面板二标题" name="2">
        <p v-for="i in 3" :key="i">我是内容我是内容...</p>
      </b-collapse-panel>
      <b-collapse-panel title="面板三标题" name="3">
        <p v-for="i in 3" :key="i">我是内容我是内容...</p>
      </b-collapse-panel>
    </b-collapse>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value2: '1'
      }
    }
  }
</script>
```

:::

### 简单模式和自定义头

simple 设置简单模式

:::demo

```html

<template>
  <div style="width:500px;">
    <b-collapse v-model="value3" simple>
      <b-collapse-panel name="1">
        <template #title>
          面板一标题
          <b-icon name="smile" size="18"></b-icon>
        </template>
        <p v-for="i in 3" :key="i">我是内容我是内容...</p>
      </b-collapse-panel>
      <b-collapse-panel title="面板二标题" name="2">
        <p v-for="i in 3" :key="i">我是内容我是内容...</p>
      </b-collapse-panel>
      <b-collapse-panel title="面板三标题" name="3">
        <p v-for="i in 3" :key="i">我是内容我是内容...</p>
      </b-collapse-panel>
    </b-collapse>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value3: '1'
      }
    }
  }
</script>
```

:::

### 容器组件

使用`b-collapse-wrap`组件可以单独使用独立的折叠面板

:::demo

```html

<template>
  <div>
    <b-collapse-wrap title="标题栏" collapse>
      <p v-for="i in 3" :key="i">我是内容我是内容...</p>
    </b-collapse-wrap>
    <b-collapse-wrap title="收起附加右侧操作" collapse>
      <template #right>
        <b-button type="primary" plain size="small">编辑</b-button>
      </template>
      <p v-for="i in 3" :key="i">我是内容我是内容...</p>
    </b-collapse-wrap>
    <b-collapse-wrap v-model="value4">
      <template #title>
        <div style="font-size: 16px;padding: 10px;">自定义开关和标题</div>
      </template>
      <template #right>
        <b-button type="text" @click="value4=!value4">{{ value4?'收起':'展开' }}</b-button>
      </template>
      <p v-for="i in 3" :key="i">我是内容我是内容...</p>
    </b-collapse-wrap>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value4: false
      }
    }
  }
</script>
```

:::

### Props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| modelValue     | 当前激活的面板的 name，可以使用 v-model 双向绑定   | Array/String  |    —       |    —    |
| accordion     | 是否开启手风琴模式，开启后每次至多展开一个面板   | Boolean  |    —       |    false    |
| simple     | 是否开启简洁模式   | Boolean  |    —       |    false    |

### Events

| 事件名      | 说明    | 返回值      |
|---------- |-------- |---------- |
| change     | 切换面板时触发，返回当前已展开的面板的 key，格式为数组   | Array[]  |

### Slot

| 名称      | 说明    |
|---------- |-------- |
| title     | 面板头内容   |

### collapse-wrap Props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value     | 是否展开   | Boolean  |    —       |   true    |
| title     | 标题   | String  |    —       |   —     |
| collapse  | 是否可以展开收起   | Boolean  |    —       |    false    |

### collapse-wrap Slot

| 名称      | 说明    |
|---------- |-------- |
| title     | 面板头内容   |
| right     | 右侧插入内容区域   |

