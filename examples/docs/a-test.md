::: demo

```html

<template>
  <div flex>
    <div style="width: 200px;">
      <b-icon-select v-model="icon"></b-icon-select>
    </div>
    {{icon}}
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

### 确认气泡框

可以借助内置组件轻松实现Popper弹出，可以自行实现多种类似组件

::: demo

```html

<template>
  <div flex>
    <div style="width: 200px;">
      <b-popper trigger="click" theme="light">
        <template #default>
          这是一段内容这是一段内容这是一段内容
        </template>
        <template #trigger>
          <b-button>触发popper</b-button>
        </template>
      </b-popper>
    </div>
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
        visible: false,
        list: [
          { name: '姓名', checked: false },
          { name: '年龄', checked: false },
          { name: '电话', checked: false },
          { name: '性别', checked: false },
          { name: '地址', checked: false },
          { name: '备注', checked: false }
        ]
      }
    },
    methods: {
      ok() {
        this.$message('点击了确定');
      },
      cancel() {
        this.$message('点击了取消');
      }
    }
  }
</script>
```

:::
