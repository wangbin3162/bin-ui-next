### 确认气泡框

通过设置属性confirm开启确认框模式。确认框会以click动形式激活，并且只会显示 content 的内容，忽略 title。

::: demo

```html

<template>
  <div>
    <b-popover trigger="hover" title="Title" content="这是一段内容这是一段内容这是一段内容">
      <b-button>Hover</b-button>
    </b-popover>
    <b-popover trigger="click" title="Title" content="这是一段内容这是一段内容这是一段内容">
      <b-button>Click</b-button>
    </b-popover>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        visible: false
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
