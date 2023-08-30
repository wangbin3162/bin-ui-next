## ConfigProvider 全局配置

### 基础用法

可以借助全局配置组件，来进行样式覆盖

::: demo

```html

<template>
  <b-config-provider :theme="{binColorPrimary:'#165dff',binColorSuccess:'#00c181'}">
    <b-button type="primary">修改primary颜色</b-button>
    <b-button type="success">修改success颜色</b-button>
  </b-config-provider>
</template>
```

:::

### 抽象容器

可以使用抽象标签来注入，这里会默认注入到html ，进行全局覆盖(慎用)

::: demo

```html

<template>
  <b-config-provider abstract :theme="config">
    <b-button type="primary" @click="setGlobal">点击应用</b-button>
  </b-config-provider>
</template>

<script>
import { ref } from 'vue'

export default {
  setup(){
    const config = ref({})

    function setGlobal(){
      config.value = { binColorPrimary:'#165dff', binColorSuccess:'#00c181' }
    }
    return {
      config,
      setGlobal
    }
  }
}

</script>
```

:::


### Props


| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| abstract   | 抽象的，没有实体dom，参数会注入到ducument   | boolean  |  —   |   —   |
| tag   | 渲染dom   | string  |   —  |  'div'  |
| locale    | 语言包 | string  |  —   |   zh-CN  |
| themeName    | 主题名称 | string  |  'dark' |  —  |
| theme    | 主题样式对象,这里可以存储js变量 使用首字母小写，连字符号后字母大写，如binColorPrimary | Object  |   — |  —  |