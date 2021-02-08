## Menu 导航菜单

为网站提供导航功能的菜单。

### 顶栏

导航菜单默认为垂直模式，通过`mode`属性可以使导航菜单变更为水平模式。另外，在菜单中通过`submenu`组件可以生成二级菜单。Menu 还提供了`background-color`、`text-color`
和`active-text-color`，分别用于设置菜单的背景色、菜单的文字颜色和当前激活菜单的文字颜色

:::demo

```html

<b-menu
  :default-active="activeIndex"
  class="b-menu-demo"
  mode="horizontal"
  @select="handleSelect"
>
  <b-menu-item index="1">处理中心</b-menu-item>
  <b-submenu index="2">
    <template #title>我的工作台</template>
    <b-menu-item index="2-1">选项1</b-menu-item>
    <b-menu-item index="2-2">选项2</b-menu-item>
    <b-menu-item index="2-3">选项3</b-menu-item>
    <b-submenu index="2-4">
      <template #title>选项4</template>
      <b-menu-item index="2-4-1">选项1</b-menu-item>
      <b-menu-item index="2-4-2">选项2</b-menu-item>
      <b-menu-item index="2-4-3">选项3</b-menu-item>
    </b-submenu>
  </b-submenu>
  <b-menu-item index="3" disabled>消息中心</b-menu-item>
  <b-menu-item index="4">
    <a href="https://wangbin3162.gitee.io/bin-ui-next/" target="_blank">文档外链</a>
  </b-menu-item>
</b-menu>
<b-divider />
<b-menu
  :default-active="activeIndex2"
  class="b-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#001529"
  text-color="#fff"
  active-text-color="#ffd04b"
>
  <b-menu-item index="1">处理中心</b-menu-item>
  <b-submenu index="2">
    <template #title>我的工作台</template>
    <b-menu-item index="2-1">选项1</b-menu-item>
    <b-menu-item index="2-2">选项2</b-menu-item>
    <b-menu-item index="2-3">选项3</b-menu-item>
    <b-submenu index="2-4">
      <template #title>选项4</template>
      <b-menu-item index="2-4-1">选项1</b-menu-item>
      <b-menu-item index="2-4-2">选项2</b-menu-item>
      <b-menu-item index="2-4-3">选项3</b-menu-item>
    </b-submenu>
  </b-submenu>
  <b-menu-item index="3" disabled>消息中心</b-menu-item>
  <b-menu-item index="4">
    <a href="https://wangbin3162.gitee.io/bin-ui-next/" target="_blank">文档外链</a>
  </b-menu-item>
</b-menu>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath)
      },
    },
  }
</script>
```

:::

### 侧栏

垂直菜单，可内嵌子菜单。

:::demo 通过`b-menu-item-group`组件可以实现菜单进行分组，分组名可以通过`title`属性直接设定，也可以通过具名 slot 来设定。

```html

<b-row class="tac">
  <b-col :span="12">
    <h5 style="margin-bottom: 10px;">默认颜色</h5>
    <b-menu
      default-active="2"
      class="b-menu-vertical-demo border"
      @open="handleOpen"
      @close="handleClose">
      <b-submenu index="1">
        <template #title>
          <b-icon name="location-fill"></b-icon>
          <span>导航一</span>
        </template>
        <b-menu-item-group>
          <template #title>分组一</template>
          <b-menu-item index="1-1">选项1</b-menu-item>
          <b-menu-item index="1-2">选项2</b-menu-item>
        </b-menu-item-group>
        <b-menu-item-group title="分组2">
          <b-menu-item index="1-3">选项3</b-menu-item>
        </b-menu-item-group>
        <b-submenu index="1-4">
          <template #title>选项4</template>
          <b-menu-item index="1-4-1">选项1</b-menu-item>
        </b-submenu>
      </b-submenu>
      <b-menu-item index="2">
        <b-icon name="appstore-fill"></b-icon>
        <template #title>导航二</template>
      </b-menu-item>
      <b-menu-item index="3" disabled>
        <b-icon name="file-text"></b-icon>
        <template #title>导航三</template>
      </b-menu-item>
      <b-menu-item index="4">
        <b-icon name="setting-fill"></b-icon>
        <template #title>导航四</template>
      </b-menu-item>
    </b-menu>
  </b-col>
  <b-col :span="12">
    <h5 style="margin-bottom: 10px;">自定义颜色</h5>
    <b-menu
      :uniqueOpened="true"
      default-active="2"
      class="b-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#495662"
      text-color="#fff"
      active-text-color="#ffd04b">
      <b-submenu index="1">
        <template #title>
          <b-icon name="location-fill"></b-icon>
          <span>导航一</span>
        </template>
        <b-menu-item-group>
          <template #title>分组一</template>
          <b-menu-item index="1-1">选项1</b-menu-item>
          <b-menu-item index="1-2">选项2</b-menu-item>
        </b-menu-item-group>
        <b-menu-item-group title="分组2">
          <b-menu-item index="1-3">选项3</b-menu-item>
        </b-menu-item-group>
        <b-submenu index="1-4">
          <template #title>选项4</template>
          <b-menu-item index="1-4-1">选项1</b-menu-item>
        </b-submenu>
      </b-submenu>
      <b-menu-item index="2">
        <b-icon name="appstore-fill"></b-icon>
        <template #title>导航二</template>
      </b-menu-item>
      <b-menu-item index="3" disabled>
        <b-icon name="file-text"></b-icon>
        <template #title>导航三</template>
      </b-menu-item>
      <b-menu-item index="4">
        <b-icon name="setting-fill"></b-icon>
        <template #title>导航四</template>
      </b-menu-item>
    </b-menu>
  </b-col>
</b-row>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
```

:::

### 折叠

:::demo

```html

<b-button-group v-model="isCollapse" style="margin-bottom: 20px;">
  <b-button :type="isCollapse?'default':'primary'" @click="isCollapse = false">展开</b-button>
  <b-button :type="isCollapse?'primary':'default'" @click="isCollapse = true">收起</b-button>
</b-button-group>
<b-menu default-active="1-4-1" class="b-menu-vertical-demo border"
        @open="handleOpen" @close="handleClose"
        :collapse="isCollapse">
  <b-submenu index="1">
    <template #title>
      <b-icon name="location-fill"></b-icon>
      <span>导航一</span>
    </template>
    <b-menu-item-group>
      <template #title>分组一</template>
      <b-menu-item index="1-1">选项1</b-menu-item>
      <b-menu-item index="1-2">选项2</b-menu-item>
    </b-menu-item-group>
    <b-menu-item-group title="分组2">
      <b-menu-item index="1-3">选项3</b-menu-item>
    </b-menu-item-group>
    <b-submenu index="1-4">
      <template #title>选项4</template>
      <b-menu-item index="1-4-1">选项1</b-menu-item>
    </b-submenu>
  </b-submenu>
  <b-menu-item index="2">
    <b-icon name="appstore-fill"></b-icon>
    <template #title>导航二</template>
  </b-menu-item>
  <b-menu-item index="3" disabled>
    <b-icon name="file-text"></b-icon>
    <template #title>导航三</template>
  </b-menu-item>
  <b-menu-item index="4">
    <b-icon name="setting-fill"></b-icon>
    <template #title>导航四</template>
  </b-menu-item>
</b-menu>

<script>
  export default {
    data() {
      return {
        isCollapse: true
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
```

:::

### Menu Props

| 参数                | 说明                           | 类型    | 可选值                | 默认值   |
| ------------------- | -------------------------- | ------- | --------------------- | -------- |
| mode                | 模式           | string  | horizontal / vertical | vertical |
| collapse            | 是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）  | boolean | —  | false    |
| background-color    | 菜单的背景色（仅支持 hex 格式）     | string  | —     | #ffffff  |
| text-color          | 菜单的文字颜色（仅支持 hex 格式）     | string  | —   | rgba(0,0,0,.65)  |
| active-text-color   | 当前激活菜单的文字颜色（仅支持 hex 格式）     | string  | —   | #1089ff  |
| default-active      | 当前激活菜单的 index          | string  | —      | —        |
| default-openeds     | 当前打开的 sub-menu 的 index 的数组       | Array   | —    | —        |
| unique-opened       | 是否只保持一个子菜单的展开      | boolean | —      | false    |
| menu-trigger        | 子菜单打开的触发方式(只在 mode 为 horizontal 时有效)    | string  | hover / click     | hover    |
| router              | 是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转 | boolean | —                     | false    |
| collapse-transition | 是否开启折叠动画        | boolean | —     | true     |

### Menu Methods

| 方法名称 | 说明                | 参数                                |
| -------- | ------------------- | ----------------------------------- |
| open     | 展开指定的 sub-menu | index: 需要打开的 sub-menu 的 index |
| close    | 收起指定的 sub-menu | index: 需要收起的 sub-menu 的 index |

### Menu Events

| 事件名称 | 说明                | 回调参数                                                                   |
| -------- | ------------------- | -------------------------------------------------------------------------- |
| select   | 菜单激活回调        | index: 选中菜单项的 index, indexPath: 选中菜单项的 index path              |
| open     | sub-menu 展开的回调 | index: 打开的 sub-menu 的 index， indexPath: 打开的 sub-menu 的 index path |
| close    | sub-menu 收起的回调 | index: 收起的 sub-menu 的 index， indexPath: 收起的 sub-menu 的 index path |

### SubMenu Props

| 参数                  | 说明                                                                     | 类型        | 可选值 | 默认值                                 |
| --------------------- | ------------------------------------------------------------------------ | ----------- | ------ | -------------------------------------- |
| index                 | 唯一标志                                                                 | string/null | —      | null                                   |
| popper-class          | 弹出菜单的自定义类名                                                     | string      | —      | —                                      |
| show-timeout          | 展开 sub-menu 的延时                                                     | number      | —      | 300                                    |
| hide-timeout          | 收起 sub-menu 的延时                                                     | number      | —      | 300                                    |
| disabled              | 是否禁用                                                                 | boolean     | —      | false                                  |
| popper-append-to-body | 是否将弹出菜单插入至 body 元素。在菜单的定位出现问题时，可尝试修改该属性 | boolean     | —      | 一级子菜单：true / 非一级子菜单：false |

### Menu-Item Props

| 参数     | 说明                | 类型    | 可选值 | 默认值 |
| -------- | ------------------- | ------- | ------ | ------ |
| index    | 唯一标志            | string  | —      | —      |
| route    | Vue Router 路径对象 | Object  | —      | —      |
| disabled | 是否禁用            | boolean | —      | false  |

### Menu-Group Props

| 参数  | 说明     | 类型   | 可选值 | 默认值 |
| ----- | -------- | ------ | ------ | ------ |
| title | 分组标题 | string | —      | —      |

