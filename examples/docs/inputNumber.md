## InputNumber 数字输入

用于输入数字

### 基础用法

::: demo

```html

<template>
  <b-row :gutter="16">
    <b-col span="6">
      <b-input-number :max="10" :min="1" v-model="value1" arrow-up-icon="plus" arrow-down-icon="minus"></b-input-number>
    </b-col>
    <b-col span="6">
      <b-input-number :max="10" :min="1" v-model="value1" always></b-input-number>
    </b-col>
  </b-row>
</template>
<script>
  export default {
    data() {
      return {
        value1: 1,
      }
    }
  }
</script>
```

:::


### 初始化值

默认控件初始化值为null，这时如果绑定的属性值为undefined，则会改变默认值为null（因为undefined转换为数字之后为NaN），
如果默认传输为字符串，则也会进行一次值的转换，如能转换为数字，则会根据最大最小值进行数字转换。否则也会置空。

::: demo

```html

<template>
  <b-row :gutter="16">
    <b-col span="6">
      <b-input-number v-model="obj.num1"></b-input-number>
      初始化值为null(绑定属性存在）
    </b-col>
    <b-col span="6">
      <b-input-number :min="1" :max="10" v-model="obj.num2"></b-input-number>
       初始化值为字符串
    </b-col>
    <b-col span="6">
      <b-input-number v-model="obj.num3"></b-input-number>
       初始化值为undefined(绑定属性不存在）
    </b-col>
  </b-row>
  <p>{{obj}}</p>
</template>
<script>
  export default {
    data() {
      return {
        obj: {
          num1: null,
          num2: '0'
        }
      }
    }
  }
</script>
```

:::

### 小数

::: demo

```html

<template>
  <b-row :gutter="16">
    <b-col span="6">
      <b-input-number :max="10" :min="1" v-model="value2" :step="0.2"></b-input-number>
      小数步长
    </b-col>
    <b-col span="6">
      <b-input-number v-model="value3" :precision="2"></b-input-number>
      精度范围：
    </b-col>
  </b-row>
</template>
<script>
  export default {
    data() {
      return {
        value2: 1,
        value3: null
      }
    }
  }
</script>
```

:::

### 可以格式化

::: demo

```html

<template>
  <b-row :gutter="16">
    <b-col span="6">
      <b-input-number
        :max="10000"
        v-model="value3"
        :formatter="value => `$ ${value}`.replace(/B(?=(d{3})+(?!d))/g, ',')"
        :parser="value => value.replace(/$s?|(,*)/g, '')">
      </b-input-number>
    </b-col>
    <b-col span="6">
    <b-input-number
      :max="100"
      v-model="value4"
      :formatter="value => `${value}%`"
      :parser="value => value.replace('%', '')">
    </b-input-number>
    </b-col>
  </b-row>
</template>
<script>
  export default {
    data() {
      return {
        value3: 1,
        value4: 1
      }
    }
  }
</script>
```

:::

### 不同尺寸

提供三种额外不同尺寸

::: demo

```html

<template>
  <b-row :gutter="16">
    <b-col span="6">
      <b-input-number v-model="value5" size="mini"></b-input-number>
    </b-col>
    <b-col span="6">
      <b-input-number v-model="value5" size="small"></b-input-number>
    </b-col>
    <b-col span="6">
      <b-input-number v-model="value5"></b-input-number>
    </b-col>
    <b-col span="6">
      <b-input-number v-model="value5" size="large"></b-input-number>
    </b-col>
  </b-row>
</template>
<script>
  export default {
    data() {
      return {
        value5: 1
      }
    }
  }
</script>
```

:::

### 多种状态

禁用，只读和不可编辑三种状态

::: demo

```html

<template>
  <b-row :gutter="16">
    <b-col span="6">
      <b-input-number v-model="value6" disabled></b-input-number>
    </b-col>
    <b-col span="6">
      <b-input-number v-model="value6" readonly></b-input-number>
    </b-col>
    <b-col span="6">
      <b-input-number v-model="value6" :editable="false"></b-input-number>
    </b-col>
  </b-row>
  <br/>
  <b-row :gutter="16">
    <b-col span="6">
      <b-input-number v-model="value6" disabled always></b-input-number>
    </b-col>
    <b-col span="6">
      <b-input-number v-model="value6" readonly always></b-input-number>
    </b-col>
    <b-col span="6">
      <b-input-number v-model="value6" :editable="false" always></b-input-number>
    </b-col>
  </b-row>
</template>
<script>
  export default {
    data() {
      return {
        value6: 1
      }
    }
  }
</script>
```

:::

### Props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
|max|    最大值    |Number    |-  |Infinity|
|min    |最小值|    Number|    - |Infinity|
|modelValue|    当前值，可以使用 v-model 双向绑定数据|    Number| - |    1|
|step|    每次改变的步伐，可以是小数|    Number| - |    1|
|size    |输入框尺寸|String| large、small、default或者不填|    - |
|disabled|    设置禁用状态    |Boolean| - |    false|
|placeholder|    占位文本|    String| -|    - |
|formatter    |指定输入框展示值的格式|    Function| -|    -|
|parser    |指定从 formatter 里转换回数字的方式，和 formatter 搭配使用|    Function| - |    -|
|readonly    |是否设置为只读|    Boolean|-|    false|
|editable    |是否可编辑|    Boolean| |    true|
|precision    |数值精度|    Number| |    -|
|active-change |    是否实时响应数据|    Boolean| |    true|
| arrow-up-icon | 普通模式下箭头图标|    String| |    up |
| arrow-down-icon | 普通模式下箭头图标|    String| |    down |
| always |    是否始终显示控制器 |    Boolean| true |    - |

### Events

| 事件名      | 说明    | 返回值      |
|---------- |-------- |---------- |
| change |    数值改变时的回调|返回当前值 当前值|
| focus |    聚焦时触发|    event|
| blur |    失焦时触发|    -|
