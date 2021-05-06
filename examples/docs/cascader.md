## Cascade 级联选择

<template>
    <div class="global-anchor">
      <b-anchor :scroll-offset="100">
        <b-anchor-link href="#ji-chu-yong-fa" title="基础用法"></b-anchor-link>
        <b-anchor-link href="#she-zhi-mo-ren-zhi" title="设置默认值"></b-anchor-link>
        <b-anchor-link href="#xuan-ting-zhan-kai" title="悬停展开"></b-anchor-link>
        <b-anchor-link href="#zi-ding-yi-xian-shi" title="自定义显示"></b-anchor-link>
        <b-anchor-link href="#jin-yong-he-jin-yong-xiang" title="启用和禁用项"></b-anchor-link>
        <b-anchor-link href="#ji-ke-xiang-ying" title="即刻响应"></b-anchor-link>
        <b-anchor-link href="#zi-ding-yi-xian-shi-xuan-xiang" title="自定义显示选项"></b-anchor-link>
        <b-anchor-link href="#chi-cun" title="尺寸"></b-anchor-link>
        <b-anchor-link href="#dong-tai-jia-zai-xuan-xiang" title="动态加载选项"></b-anchor-link>
        <b-anchor-link href="#ke-yi-sou-suo" title="可以搜索"></b-anchor-link>
        <b-anchor-link href="#attributes" title="Attributes"></b-anchor-link>
        <b-anchor-link href="#events" title="Events"></b-anchor-link>
        <b-anchor-link href="#slot" title="Slot"></b-anchor-link>
      </b-anchor>
    </div>
</template>

从一组相关联的数据集合中进行选择，常用于省市区、公司级层、事务分类等。

### 基础用法

级联选择对数据有较严格要求，请参照示例的格式使用data，每项数据至少包含 value、label 两项，下一级使用 children

value 为当前选择的数据的 value 值的数组，比如 ['xuzhou', 'tongshan'] ，按照级联顺序依次排序，使用 v-model 进行双向绑定。
::: demo

```html

<template>
  <b-row :gutter="20" type="flex" align="middle">
    <b-col span="6">
      <b-cascader :data="data" v-model="value1"></b-cascader>
    </b-col>
    <b-col span="6">
      <span>{{value1}}</span>
    </b-col>
  </b-row>
</template>
<script>
  export default {
    data() {
      return {
        value1: [],
        data: [
          {
            value: 'nanjing',
            label: '南京',
            children: [
              {
                value: 'xuanwu',
                label: '玄武区'
              },
              {
                value: 'gulou',
                label: '鼓楼区'
              },
              {
                value: 'jianye',
                label: '建邺区'
              }
            ]
          },
          {
            value: 'xuzhou',
            label: '徐州',
            children: [
              {
                value: 'tongshan',
                label: '铜山区'
              },
              {
                value: 'gulou',
                label: '鼓楼区'
              },
              {
                value: 'yunlong',
                label: '云龙区'
              },
              {
                value: 'jiawang',
                label: '贾汪区'
              }
            ]
          }
        ]
      }
    }
  }
</script>
```

:::
