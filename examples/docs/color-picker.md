## Color Picker 颜色选择器

### 基础用法

用于选择颜色色值

:::demo

```html

<template>
  <div flex>
    <div class="block" style="width: 200px;margin-right: 20px;">
      <div class="demonstration mb-5">有默认值</div>
      <b-color-picker v-model="color1"></b-color-picker>
    </div>
    <div class="block" style="width: 200px;margin-right: 20px;">
      <div class="demonstration mb-5">无默认值</div>
      <b-color-picker v-model="color2"></b-color-picker>
    </div>
    <div class="block" style="width: 200px;margin-right: 20px;">
      <div class="demonstration mb-5">显示label文字</div>
      <b-color-picker v-model="color3" show-label></b-color-picker>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        color1: '#409EFF',
        color2: null,
        color3: '#1089ff'
      }
    }
  };
</script>
```

:::

### 带透明度

可以选择透明度

:::demo

```html

<template>
  <div flex>
    <div class="block" style="width: 200px;margin-right: 20px;">
      <div class="demonstration mb-5">带透明度</div>
      <b-color-picker v-model="color" show-alpha></b-color-picker>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        color: 'rgba(45,140,240,0.45)'
      }
    }
  };
</script>
```

:::

### 带有预设色卡

可以提供预设的色卡

:::demo

```html

<template>
  <div flex>
    <div class="block" style="width: 200px;margin-right: 20px;">
      <b-color-picker v-model="color1" show-alpha :colors="colors1"></b-color-picker>
    </div>
    <div class="block" style="width: 200px;margin-right: 20px;">
      <b-color-picker v-model="color2" show-alpha :colors="colors2"></b-color-picker>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        color1: '#2d8cf0',
        color2: '#2d8cf0',
        colors1: [
          '#1089ff',
          '#52c41a',
          '#fea638',
          '#ff4d4f',
          '#2f54eb',
          '#faad14',
          '#722ed1',
          '#eb2f96',
          '#13c2c2',
          '#fadb14',
          '#a0d911',
          '#fa541c',
          '#eaff8f',
          '#bae7ff',
          '#efdbff',
          '#ffd6e7',
          '#ff1885',
          '#fff506',
          '#00bcd4',
          '#f06292',
          '#cb6c00',
          '#607d8b',
          '#000000',
          '#ffffff'
        ],
        colors2: [
          '#311B92',
          '#512DA8',
          '#673AB7',
          '#9575CD',
          '#D1C4E9',
          'rgba(255, 69, 0, 0.68)',
          'rgb(255, 120, 0)',
          'hsv(51, 100, 98)',
          'hsva(120, 40, 94, 0.5)',
          'hsl(181, 100%, 37%)',
          'hsla(209, 100%, 56%, 0.73)',
        ]
      }
    }
  };
</script>
```

:::

### 禁用状态

可设置禁用状态

:::demo

```html

<template>
  <div flex>
    <b-color-picker v-model="color" disabled></b-color-picker>&nbsp;&nbsp;
    <b-color-picker v-model="color" show-label disabled></b-color-picker>&nbsp;&nbsp;
  </div>
</template>
<script>
  export default {
    data() {
      return {
        color: '#2d8cf0'
      }
    }
  };
</script>
```

:::

### 不同的大小

四个不同大小

:::demo

```html

<template>
  <div flex="cross:center">
    <b-color-picker v-model="color" size="large"></b-color-picker>&nbsp;&nbsp;
    <b-color-picker v-model="color"></b-color-picker>&nbsp;&nbsp;
    <b-color-picker v-model="color" size="small"></b-color-picker>&nbsp;&nbsp;
    <b-color-picker v-model="color" size="mini"></b-color-picker>&nbsp;&nbsp;
    <b-color-picker v-model="color" size="large" show-label></b-color-picker>&nbsp;&nbsp;
    <b-color-picker v-model="color" show-label></b-color-picker>&nbsp;&nbsp;
    <b-color-picker v-model="color" size="small" show-label></b-color-picker>&nbsp;&nbsp;
    <b-color-picker v-model="color" size="mini" show-label></b-color-picker>&nbsp;&nbsp;
  </div>
</template>
<script>
  export default {
    data() {
      return {
        color: '#2d8cf0'
      }
    }
  };
</script>
```

:::


### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model | 绑定值 | string | — | — |
| disabled | 是否禁用 | boolean | — | false |
| size | 尺寸 | string | — | medium / small / mini |
| show-alpha | 是否支持透明度选择 | boolean | — | false |
| color-format | 写入 v-model 的颜色的格式 | string | hsl / hsv / hex / rgb | hex（show-alpha 为 false）/ rgb（show-alpha 为 true） |
| popper-class | ColorPicker 下拉框的类名 | string | — | — |
| colors | 预定义颜色 | array | — | — |
| show-label | 显示label文字 | boolean | — | false |

### Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change | 当绑定值变化时触发 | 当前值 |
| active-change | 面板中当前显示的颜色发生改变时触发 | 当前显示的颜色值 |
