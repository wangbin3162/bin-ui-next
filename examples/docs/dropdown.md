## Dropdown 下拉菜单

<div class="global-anchor">
  <b-anchor :scroll-offset="100">
    <b-anchor-link href="#ji-chu-yong-fa" title="基础用法"></b-anchor-link>
    <b-anchor-link href="#chu-fa-fang-shi" title="触发方式"></b-anchor-link>
    <b-anchor-link href="#zhi-ling-shi-jian" title="指令事件"></b-anchor-link>
    <b-anchor-link href="#qian-tao-yong-fa-ji-pi-fu" title="嵌套用法及皮肤"></b-anchor-link>
    <b-anchor-link href="#dropdown-props" title="Dropdown props"></b-anchor-link>
    <b-anchor-link href="#dropdown-events" title="Dropdown events"></b-anchor-link>
    <b-anchor-link href="#dropdown-slot" title="Dropdown slot"></b-anchor-link>
    <b-anchor-link href="#dropdown-item-props" title="Dropdown Item props"></b-anchor-link>
  </b-anchor>
</div>

### 基础用法

::: demo

```html

<template>
  <div>
    <b-dropdown>
      <a href="javascript:void(0)">
        下拉菜单
        <b-icon name="down"></b-icon>
      </a>
      <template #dropdown>
        <b-dropdown-menu>
          <b-dropdown-item selected>驴肉火烧</b-dropdown-item>
          <b-dropdown-item disabled>炸酱面</b-dropdown-item>
          <b-dropdown-item>牛肉板面</b-dropdown-item>
          <b-dropdown-item divided>地锅鸡</b-dropdown-item>
          <b-dropdown-item>街边烧烤</b-dropdown-item>
        </b-dropdown-menu>
      </template>
    </b-dropdown>

    <b-dropdown style="margin-left: 20px;">
      <b-button type="primary">
        下拉菜单
        <b-icon name="down"></b-icon>
      </b-button>
      <template #dropdown>
        <b-dropdown-menu>
          <b-dropdown-item>驴肉火烧</b-dropdown-item>
          <b-dropdown-item disabled>炸酱面</b-dropdown-item>
          <b-dropdown-item>牛肉板面</b-dropdown-item>
          <b-dropdown-item divided>地锅鸡</b-dropdown-item>
          <b-dropdown-item>街边烧烤</b-dropdown-item>
        </b-dropdown-menu>
      </template>
    </b-dropdown>
  </div>
</template>
```

:::

### 触发方式

::: demo

```html

<template>
  <div>
    <b-dropdown>
      <a href="javascript:void(0)">
        hover 触发
        <b-icon name="down"></b-icon>
      </a>
      <template #dropdown>
        <b-dropdown-menu>
          <b-dropdown-item name="驴肉火烧" selected>驴肉火烧</b-dropdown-item>
          <b-dropdown-item name="炸酱面" disabled>炸酱面</b-dropdown-item>
          <b-dropdown-item name="牛肉板面">牛肉板面</b-dropdown-item>
          <b-dropdown-item name="地锅鸡" divided>地锅鸡</b-dropdown-item>
          <b-dropdown-item name="街边烧烤">街边烧烤</b-dropdown-item>
        </b-dropdown-menu>
      </template>
    </b-dropdown>
    <b-dropdown trigger="click" style="margin-left: 20px;">
      <a href="javascript:void(0)">
        click 触发
        <b-icon name="down"></b-icon>
      </a>
      <template #dropdown>
        <b-dropdown-menu>
          <b-dropdown-item selected>驴肉火烧</b-dropdown-item>
          <b-dropdown-item disabled>炸酱面</b-dropdown-item>
          <b-dropdown-item>牛肉板面</b-dropdown-item>
          <b-dropdown-item divided>地锅鸡</b-dropdown-item>
          <b-dropdown-item>街边烧烤</b-dropdown-item>
        </b-dropdown-menu>
      </template>
    </b-dropdown>
    <b-dropdown trigger="contextmenu" style="margin-left: 20px;">
      <a href="javascript:void(0)">
        右键 触发
        <b-icon name="down"></b-icon>
      </a>
      <template #dropdown>
        <b-dropdown-menu>
          <b-dropdown-item>返回</b-dropdown-item>
          <b-dropdown-item style="color: #ed4014;">删除</b-dropdown-item>
        </b-dropdown-menu>
      </template>
    </b-dropdown>
  </div>
</template>
```

:::

### 指令事件

::: demo

```html

<template>
  <div>
    <b-dropdown @command="handleClick">
      <a href="javascript:void(0)">
        下拉菜单
        <b-icon name="down"></b-icon>
      </a>
      <template #dropdown>
        <b-dropdown-menu>
          <b-dropdown-item name="驴肉火烧" selected>驴肉火烧</b-dropdown-item>
          <b-dropdown-item name="炸酱面" disabled>炸酱面</b-dropdown-item>
          <b-dropdown-item name="牛肉板面">牛肉板面</b-dropdown-item>
          <b-dropdown-item :name="['徐州美食','地锅鸡']" divided>地锅鸡</b-dropdown-item>
          <b-dropdown-item :name="{type:'info',name:'街边烧烤'}">街边烧烤</b-dropdown-item>
        </b-dropdown-menu>
      </template>
    </b-dropdown>
  </div>
</template>
<script>
  export default {
    methods: {
      handleClick(name) {
        this.$message('click on item: ' + JSON.stringify(name))
      }
    }
  }
</script>
```

:::

### 嵌套用法

可嵌套实现级联效果，注意嵌套时候的展开方向

::: demo

```html

<template>
  <div>
    <b-dropdown>
      <a href="javascript:void(0)">
        徐州小吃
        <b-icon name="down"></b-icon>
      </a>
      <template #dropdown>
        <b-dropdown-menu>
          <b-dropdown-item>驴肉火烧</b-dropdown-item>
          <b-dropdown-item>牛肉板面</b-dropdown-item>
          <b-dropdown placement="right-start">
            <b-dropdown-item>
              特色菜系
              <b-icon name="right"></b-icon>
            </b-dropdown-item>
            <template #dropdown>
              <b-dropdown-menu>
                <b-dropdown-item>地锅鸡</b-dropdown-item>
                <b-dropdown-item>狗肉</b-dropdown-item>
                <b-dropdown-item>把子肉</b-dropdown-item>
              </b-dropdown-menu>
            </template>
          </b-dropdown>
          <b-dropdown-item>过桥米线</b-dropdown-item>
        </b-dropdown-menu>
      </template>
    </b-dropdown>
  </div>
</template>
```

:::

### Dropdown props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| trigger     | 触发方式   | string  |  hover（悬停）click（点击）contextMenu（右键） |  hover   |
| placement     | 下拉菜单出现的位置   |  String      |  top top-start top-end bottom bottom-start bottom-end left left-start left-end right right-start right-end |  bottom   |
| appendToBody     | 是否放置于 body 内, 在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果   |  Boolean          |   |  false   |
| hide-on-click     | 是否在点击菜单项后隐藏菜单 |  Boolean          | -  |  true   |
| show-timeout     | 展开下拉菜单的延时（仅在 trigger 为 hover 时有效） |  Number          | -  |  150   |
| hide-timeout     | 是否在点击菜单项后隐藏菜单 |  Number          | -  |  150   |
| tabindex     | Dropdown 组件的 tabindex |  Number          | -  |  0   |

### Dropdown events

| 事件名      | 说明    | 返回值      |
|---------- |-------- |---------- |
| command     | 点击菜单项时触发   | DropdownItem 的 name 值,需要设置name才可以统一监听  |
| visible-change    | 菜单显示状态改变时调用   | visible  |

### Dropdown Slot

| 名称      | 说明    |
|---------- |-------- |
| default     | 主体内容   |
| dropdown     | 列表内容，一般由 b-dropdown-menu 填充   |

### Dropdown Item props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| name     | 用来标识这一项   | Object, String, Number      |  -  |  -   |
| disabled     | 禁用该项   | Boolean  |  - |  false   |
| divided     | 显示分割线   | Boolean  |  - |  false   |
| selected     | 标记该项为选中状态   | Boolean  |  - |  false   |
| icon     | 图标   | String  |  - |  -   |
