# Table 表格

基础的表格组件，用于显示列表数据

### 基础用法

基本用法

::: demo

```html

<template>
  <b-table :columns="columns" :data="data"></b-table>
</template>

<script>
  export default {
    data() {
      return {
        columns: [
          {
            title: '姓名',
            key: 'name'
          },
          {
            title: '年龄',
            key: 'age'
          },
          {
            title: '出生日期',
            key: 'birthday'
          },
          {
            title: '地址',
            key: 'address'
          }
        ],
        data: [
          {
            name: '王小明',
            age: 18,
            birthday: '1990-04-22',
            address: '北京市朝阳区芍药居'
          },
          {
            name: '张小刚',
            age: 25,
            birthday: '1990-11-11',
            address: '北京市海淀区西二旗'
          },
          {
            name: '李小红',
            age: 30,
            birthday: '1985-02-05',
            address: '上海市浦东新区世纪大道'
          },
          {
            name: '周小伟',
            age: 26,
            birthday: '1993-07-11',
            address: '深圳市南山区深南大道'
          },
          {
            name: '张小发',
            age: 33,
            birthday: '1999-12-12',
            address: '南京市龙眠大道'
          }
        ]
      }
    }
  }
</script>
```

:::

### 斑马纹

通过设置`stripe`来设置斑马纹显示

::: demo

```html

<template>
  <b-table :columns="columns" :data="data" stripe></b-table>
</template>
<script>
  export default {
    data() {
      return {
        columns: [
          {
            title: '姓名',
            key: 'name'
          },
          {
            title: '年龄',
            key: 'age'
          },
          {
            title: '出生日期',
            key: 'birthday'
          },
          {
            title: '地址',
            key: 'address'
          }
        ],
        data: [
          {
            name: '王小明',
            age: 18,
            birthday: '1990-04-22',
            address: '北京市朝阳区芍药居'
          },
          {
            name: '张小刚',
            age: 25,
            birthday: '1990-11-11',
            address: '北京市海淀区西二旗'
          },
          {
            name: '李小红',
            age: 30,
            birthday: '1985-02-05',
            address: '上海市浦东新区世纪大道'
          },
          {
            name: '周小伟',
            age: 26,
            birthday: '1993-07-11',
            address: '深圳市南山区深南大道'
          },
          {
            name: '张小发',
            age: 33,
            birthday: '1999-12-12',
            address: '南京市龙眠大道'
          }
        ]
      }
    }
  }
</script>
```

:::

### 边框

通过设置`border`来设置斑马纹显示

::: demo

```html

<template>
  <b-table :columns="columns" :data="data" border></b-table>
</template>
<script>
  export default {
    data() {
      return {
        columns: [
          {
            title: '姓名',
            key: 'name'
          },
          {
            title: '年龄',
            key: 'age'
          },
          {
            title: '出生日期',
            key: 'birthday'
          },
          {
            title: '地址',
            key: 'address'
          }
        ],
        data: [
          {
            name: '王小明',
            age: 18,
            birthday: '1990-04-22',
            address: '北京市朝阳区芍药居'
          },
          {
            name: '张小刚',
            age: 25,
            birthday: '1990-11-11',
            address: '北京市海淀区西二旗'
          },
          {
            name: '李小红',
            age: 30,
            birthday: '1985-02-05',
            address: '上海市浦东新区世纪大道'
          },
          {
            name: '周小伟',
            age: 26,
            birthday: '1993-07-11',
            address: '深圳市南山区深南大道'
          },
          {
            name: '张小发',
            age: 33,
            birthday: '1999-12-12',
            address: '南京市龙眠大道'
          }
        ]
      }
    }
  }
</script>
```

:::

### 超出隐藏

可以通过给`columns`设置属性`tooltip`来设置超出隐藏并悬停显示, 如仅有一张表格则可以设置`tooltip`皮肤`tooltip-theme`来开启优化样式
（注意：因表格单元格存在超出隐藏样式所以必须将tooltip标签插入至body元素，会成多余标签，如有多个表格缓存则会插入过多标签造成性能问题，所以是否开启需要根据需求确定）

::: demo

```html

<template>
  <b-divider align="left">默认原生title</b-divider>
  <b-table :columns="columns" :data="data" border></b-table>
  <b-divider align="left">开启tooltip</b-divider>
  <b-table :columns="columns" :data="data" border tooltip-theme="dark"></b-table>
</template>
<script>
  export default {
    data() {
      return {
        columns: [
          { title: '姓名', key: 'name' },
          { title: '年龄', key: 'age' },
          { title: '出生日期', key: 'birthday' },
          { title: '地址', key: 'address' },
          { title: '备注', key: 'remark', tooltip: true }
        ],
        data: [
          {
            name: '王小明',
            age: 18,
            birthday: '1990-04-22',
            address: '北京市朝阳区芍药居',
            remark: '这是一段描述文字，文本长度会超出列宽，设置tooltip属性可以设置不换行显示并开启鼠标悬停显示所有文字。'
          },
          {
            name: '张小刚',
            age: 25,
            birthday: '1990-11-11',
            address: '北京市海淀区西二旗',
            remark: '这是一段描述文字，文本长度会超出列宽，设置tooltip属性可以设置不换行显示并开启鼠标悬停显示所有文字。'
          },
          {
            name: '李小红',
            age: 30,
            birthday: '1985-02-05',
            address: '上海市浦东新区世纪大道',
            remark: '这是一段描述文字，文本长度会超出列宽，设置tooltip属性可以设置不换行显示并开启鼠标悬停显示所有文字。'
          },
          {
            name: '周小伟',
            age: 26,
            birthday: '1993-07-11',
            address: '深圳市南山区深南大道',
            remark: '这是一段描述文字，文本长度会超出列宽，设置tooltip属性可以设置不换行显示并开启鼠标悬停显示所有文字。'
          },
          {
            name: '张小发',
            age: 33,
            birthday: '1999-12-12',
            address: '南京市龙眠大道',
            remark: '这是一段描述文字，文本长度会超出列宽，设置tooltip属性可以设置不换行显示并开启鼠标悬停显示所有文字。'
          }
        ]
      }
    }
  }
</script>
```

:::

### 固定表头

height 和 maxHeight 可以设置固定表头

::: demo

```html

<template>
  <b-table :columns="columns" :data="data" height="200" border></b-table>
</template>
<script>
  export default {
    data() {
      return {
        columns: [
          { title: '姓名', key: 'name' },
          { title: '年龄', key: 'age' },
          { title: '出生日期', key: 'birthday' },
          { title: '地址', key: 'address' }
        ],
        data: [
          {
            name: '王小明',
            age: 18,
            birthday: '1990-04-22',
            address: '北京市朝阳区芍药居'
          },
          {
            name: '张小刚',
            age: 25,
            birthday: '1990-11-11',
            address: '北京市海淀区西二旗'
          },
          {
            name: '李小红',
            age: 30,
            birthday: '1985-02-05',
            address: '上海市浦东新区世纪大道'
          },
          {
            name: '周小伟',
            age: 26,
            birthday: '1993-07-11',
            address: '深圳市南山区深南大道'
          },
          {
            name: '张小发',
            age: 33,
            birthday: '1999-12-12',
            address: '南京市龙眠大道'
          }
        ]
      }
    }
  }
</script>
```

:::

### 固定表头和列

可以同时固定表头和列

::: demo

```html

<template>
  <div style="width: 800px;">
    <b-table :columns="columns3" :data="data" height="200" border></b-table>
  </div>
</template>
<script>
  import { h } from 'vue'

  export default {
    data() {
      return {
        columns3: [
          {
            title: '姓名',
            fixed: 'left',
            key: 'name',
            width: 150
          },
          {
            title: '年龄',
            key: 'age',
            width: 150
          },
          {
            title: '出生日期',
            key: 'birthday',
            width: 150
          },
          {
            title: '地址',
            key: 'address',
            width: 350
          },
          {
            title: '操作',
            fixed: 'right',
            width: 100,
            render: (params) => {
              return h('a', { style: { cursor: 'pointer' } }, '编辑');
            }
          }
        ],
        data: [
          {
            name: '王小明',
            age: 18,
            birthday: '1990-04-22',
            address: '北京市朝阳区芍药居'
          },
          {
            name: '张小刚',
            age: 25,
            birthday: '1990-11-11',
            address: '北京市海淀区西二旗'
          },
          {
            name: '李小红',
            age: 30,
            birthday: '1985-02-05',
            address: '上海市浦东新区世纪大道'
          },
          {
            name: '周小伟',
            age: 26,
            birthday: '1993-07-11',
            address: '深圳市南山区深南大道'
          },
          {
            name: '张小发',
            age: 33,
            birthday: '1999-12-12',
            address: '南京市龙眠大道'
          }
        ]
      }
    }
  }
</script>
```

:::

### 流体高度

height 和 maxHeight 可以设置固定表头

::: demo

```html

<template>
  <b-table :columns="columns" :data="data" max-height="200" border></b-table>
  <b-button @click="add">增加一条数据</b-button>
</template>
<script>
  export default {
    data() {
      return {
        columns: [
          { title: '姓名', key: 'name' },
          { title: '年龄', key: 'age' },
          { title: '出生日期', key: 'birthday' },
          { title: '地址', key: 'address' }
        ],
        data: [
          {
            name: '王小明',
            age: 18,
            birthday: '1990-04-22',
            address: '北京市朝阳区芍药居'
          },
          {
            name: '张小刚',
            age: 25,
            birthday: '1990-11-11',
            address: '北京市海淀区西二旗'
          }
        ]
      }
    },
    methods: {
      add() {
        this.data.push({
          name: '张小发',
          age: 33,
          birthday: '1999-12-12',
          address: '南京市龙眠大道'
        })
      }
    }
  }
</script>
```

:::
