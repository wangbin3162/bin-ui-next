## Popper 弹层

popper借助了第三方插件<a href="https://popper.js.org/" target="_blank">popper.js</a>，可参考文档进行配置，组件内部弹层都借助此基础组件实现，你也可以自行编写扩展。

### 基础用法

::: demo

```html

<template>
  <div flex>
    <div style="width: 200px;">
      <b-popper trigger="click" theme="light" :z-index="1000">
        <template #default>
          这是一段内容这是一段内容这是一段内容
        </template>
        <template #trigger>
          <b-button>触发popper</b-button>
        </template>
      </b-popper>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        visible: false
      }
    }
  }
</script>
```

:::

### 其他配置

可以实现多种不同的业务需求，如筛选列

::: demo

```html

<template>
  <div flex>
    <div style="width: 200px;">
      <b-popper
          trigger="click"
          theme="light"
          :show-arrow="false"
          :offset="4"
          placement="bottom-start"
          transition="zoom-in-top"
          popper-class="bin-select__popper"
          :gpu-acceleration="false"
      >
        <template #default>
          <div style="width: 120px;">
            <div style="padding:8px 10px 10px;border-bottom: 1px solid #eee;">选择列</div>
            <div v-for="(item,index) in list" :key="index" style="padding: 4px 8px;">
              <b-checkbox v-model="item.checked">{{item.name}}</b-checkbox>
            </div>
          </div>
        </template>
        <template #trigger>
          <b-button>选择列</b-button>
        </template>
      </b-popper>
    </div>
  </div>
  <p>{{list}}</p>
</template>
<script>
  export default {
    data() {
      return {
        list: [
          { name: '姓名', checked: false },
          { name: '年龄', checked: false },
          { name: '电话', checked: false },
          { name: '性别', checked: false },
          { name: '地址', checked: false },
          { name: '备注', checked: false }
        ]
      }
    }
  }
</script>
```

:::

### 图标选择器

可以参考图标选择器，来实现类似的业务功能，并可以扩展实现表单的校验逻辑，
<a href="https://github.com/wangbin3162/bin-ui-next/blob/master/src/components/icon-select/icon-select.vue" target="_blank">
icon-select
</a>

::: demo

```html

<template>
  <div flex>
    <div style="width: 200px;">
      <b-icon-select v-model="icon"></b-icon-select>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        icon: ''
      }
    }
  }
</script>
```

:::

### Props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| v-model:visible     | 状态是否可见   | Boolean  |  —   |  false   |
| trigger     | 触发方式   | string  | hover（悬停）click（点击）focus（聚焦） |  click  |
| appendToBody    | 是否将弹层放置于 body 内   | Boolean  |  —   |   false   |
| placement     | 提示框出现的位置   | string  |  top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end   |   —   |
| disabled     | 是否禁用提示框   | Boolean  |  —   |   false   |
| transition | 自定义渐变动画，自定义动画后需要关闭硬件加速，否则不生效   |  string     |  —   |   fade-in-linear   |
| gpu-acceleration | gpu加速，默认动画，   |  Boolean     |  —   |   true  |
| stop-popper-mouse-event | 是否阻止popper的mouse事件 |  Boolean     |  —   |   true  |
| show-arrow     | 是否显示箭头  |  Boolean  |  —   |   true   |
| manual-mode     | 是否是手动控制，手动控制后需要设置:visible  |  Boolean  |  —   |   true   |
| theme     | 主题   |  string  |  dark 或 light   |   dark   |
| show-after     | 延迟出现，单位毫秒   | number  | — |   0    |
| close-delay     | 延迟消失，单位毫秒   | number  | — |   0    |
| offset    | 出现位置的偏移量   |  Number |  — |    12     |
| arrow-offset    | 箭头偏移   |  Number |  — |    5     |
| class   | 触发器class   |  string |  — |     —     |
| popper-class   | 弹层的额外class   |  string |  — |     —     |
| popper-options   | 弹层的额外options，可参考官网，一般不需要额外设置  |  Object |  — |     —     |
| z-index    | 层级 | Number，默认为2000，弹窗会自增，如设置了此值，则会追加当前值后进行自增进行自增  |      —      |  0  |
| style   | 弹层的style  |  Object |  — |     —     |

### Slot

| 名称      | 说明    |
|---------- |-------- |
| default     | 弹层内容插槽，必须，可扩展很多业务实现   |
| trigger     | 触发插槽，必须，切必须使用一个dom 或者 component组件插入，因为要监听事件   |
