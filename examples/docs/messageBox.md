## MessageBox 弹框

<div class="global-anchor">
  <b-anchor :scroll-offset="100">
    <b-anchor-link href="#mo-ni-alert" title="模拟alert"></b-anchor-link>
    <b-anchor-link href="#mo-ni-confirm" title="模拟confirm"></b-anchor-link>
    <b-anchor-link href="#zi-ding-yi" title="自定义"></b-anchor-link>
    <b-anchor-link href="#api" title="API"></b-anchor-link>
    <b-anchor-link href="#options" title="Options"></b-anchor-link>
  </b-anchor>
</div>

弹窗是为了模拟快速创建模态框准备的，基于Modal框生成的窗口实例。

### 模拟alert

只有确定按钮，可以直接使用 `$alert` 也可以个设置type或者直接使用快捷方法

::: demo

```html

<template>
  <b-button type="primary"
            @click="$alert({type:'info',title: '标题',message: '我是弹窗内容',width:'500px'})">Info
  </b-button>
  <b-button type="success"
            @click="$alert({type:'success',title: '标题',message: '我是弹窗内容'})">Success
  </b-button>
  <b-button type="warning"
            @click="$alert({type:'warning',title: '标题',message: '我是弹窗内容'})">Warning
  </b-button>
  <b-button type="danger" @click="showAlert">Error</b-button>
</template>
<script>
  export default {
    methods: {
      showAlert() {
        this.$alert({
          type: 'error', title: '标题', message: '我是弹窗内容',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${action}`
            });
          }
        })
      }
    }
  }
</script>
```

:::

### 模拟confirm

模拟confirm提交选择

::: demo

```html

<template>
  <b-button type="default" @click="open">打开confirm</b-button>
</template>
<script>
  export default {
    methods: {
      open() {
        this.$confirm({
          type: 'warning',
          title: '提示',
          message: '<p>此操作将永久<span style="color:red;">删除</span>该文件, 是否继续?</p>',
          useHTML: true,
        }).then(() => {
          this.$message({ type: 'success', message: '删除成功!' });
        }).catch(() => {
          this.$message({ type: 'info', message: '已取消删除' });
        });
      }
    }
  }
</script>
```

:::

### 自定义

可以自定义内容

::: demo

```html

<template>
  <b-button type="default" @click="open">打开MessageBox</b-button>
</template>
<script>
  import { h } from 'vue';

  export default {
    methods: {
      open() {
        this.$messageBox({
          title: '消息',
          message: h('p', null, [
            h('span', null, '内容可以是 '),
            h('i', { style: 'color: teal' }, 'VNode')
          ]),
          showCancelButton: true,
          confirmText: 'OK',
          cancelText: 'Cancel',
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true;
              instance.confirmText = '执行中...';
              setTimeout(() => {
                done();
                setTimeout(() => {
                  instance.confirmButtonLoading = false;
                }, 300);
              }, 3000);
            } else {
              done();
            }
          }
        }).then(action => {
          this.$message({
            type: 'info',
            message: 'action: ' + action
          });
        }).catch(() => {
          this.$message({ type: 'info', message: 'Cancel' });
        });
      }
    }
  }
</script>
```

:::

### API

通过直接调用以下方法来使用组件：

如果你完整引入了BinUI，它会为 app.config.globalProperties 添加如下全局方法：$messageBox, $alert, $confirm 因此在 Vue instance 中可以采用本页面中的方式调用
MessageBox。调用参数为：

- $messageBox(options)
- $alert(options) 或 $alert(message, options)
- $confirm(options) 或 $confirm(message, options)

如果单独引入 MessageBox：

    import { MessageBox } from 'bin-ui-next';

### Options

| 函数      | 说明    |  类型      | 默认值      |
|---------- |-------- |---------- |---------|
| title     |  标题   | String  | —  |
| message  |  内容   | String /Element String  | —  |
| type  |  类别，用于显示图标,info,success,warning,error   | String   | —  |
| useHTML  |  是否使用html插入   | Boolean  | false  |
| iconClass  |  替换图表名称（不带前缀）   |  String  |  —   |
| callback  |  回调函数，不实用promise，可以用参数指定，参数为action，值为'confirm','cancel'   | Function  | —  |
| beforeClose  |  闭前的回调，会暂停实例的关闭(action, instance, done)，action 的值为'confirm', 'cancel'   | String  |取消  |
| showCancelButton  | 是否显示取消按钮   | Boolean  | false  |
| scrollable  |  页面是否可以滚动   | Boolean  | false  |
| showConfirmButton  |  是否显示确定按钮   |Boolean  | true  |
| cancelText  |  取消按钮文字 |String  | 取消  |
| confirmText  |  确定按钮文字 |String  | 确定  |
| maskClosable  |  是否可以点击遮罩关闭   |Boolean  | true ,alert时为false |
| escClosable  |  esc按钮关闭   |Boolean  | true ,alert时为false |
