### 拖拽调整顺序

可以设置draggable开启拖拽排序，这里需要设置row-key强制更新视图

注意，设置拖拽排序后，row的悬停效果失效，切鼠标拖拽也覆盖了鼠标选中文字，此时可以额外设置也可以设置handle来指定拖拽某一个元素实现

::: demo

```html

<template>
  <div>
    <div>
      <p>默认拖拽</p>
      <b-table :columns="columns1" border :data="data1" row-key draggable @drag-drop="handleDragDrop" ref="table">
        <template #ctrl="{row,index}">
          <b-button @click="handleEdit(row,index)" type="text">编辑</b-button>
        </template>
      </b-table>
      <p flex>
        <span style="width:100px;color:red;">data: </span>{{ data1.map(item=>({id:item.id,name:item.name}) ) }}
      </p>
      <p flex>
        <span style="width:100px;color:red;">newData: </span>{{ newData.map(item=>({id:item.id,name:item.name}) ) }}
      </p>
      <p flex>
        <span style="width:100px;color:red;">sortData: </span>{{ sortData.map(item=>({id:item.id,name:item.name}) ) }}
      </p>
      <b-button @click="handleClick">打乱</b-button>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        columns1: [
          { title: 'ID', key: 'id', width: 60, align: 'center' },
          { title: '姓名', key: 'name' },
          { title: '年龄', key: 'age' },
          { title: '出生日期', key: 'birthday' },
          { title: '地址', key: 'address' },
          { title: '操作', slot: 'ctrl', width: 120 }
        ],
        columns2: [
          { slot: 'handle', width: 60, align: 'center' },
          { title: '姓名', key: 'name' },
          { title: '年龄', key: 'age' },
          { title: '出生日期', key: 'birthday' },
          { title: '地址', key: 'address' },
          { title: '操作', slot: 'ctrl', width: 120 }
        ],
        data1: [
          {
            id: 1,
            name: '王小明',
            age: 18,
            birthday: '1990-04-22',
            address: '北京市朝阳区芍药居'
          },
          {
            id: 2,
            name: '张小刚',
            age: 25,
            birthday: '1990-11-11',
            address: '北京市海淀区西二旗'
          },
          {
            id: 3,
            name: '李小红',
            age: 30,
            birthday: '1985-02-05',
            address: '上海市浦东新区世纪大道'
          },
          {
            id: 4,
            name: '周小伟',
            age: 26,
            birthday: '1993-07-11',
            address: '深圳市南山区深南大道'
          },
          {
            id: 5,
            name: '张小发',
            age: 33,
            birthday: '1999-12-12',
            address: '南京市龙眠大道'
          }
        ],
        data2: [
          {
            name: '王小明1',
            age: 18,
            birthday: '1990-04-22',
            address: '北京市朝阳区芍药居'
          },
          {
            name: '张小刚2',
            age: 25,
            birthday: '1990-11-11',
            address: '北京市海淀区西二旗'
          },
          {
            name: '李小红3',
            age: 30,
            birthday: '1985-02-05',
            address: '上海市浦东新区世纪大道'
          },
          {
            name: '周小伟4',
            age: 26,
            birthday: '1993-07-11',
            address: '深圳市南山区深南大道'
          },
          {
            name: '张小发5',
            age: 33,
            birthday: '1999-12-12',
            address: '南京市龙眠大道'
          }
        ],
        newData: [
          {
            id: 1,
            name: '王小明',
            age: 18,
            birthday: '1990-04-22',
            address: '北京市朝阳区芍药居'
          },
          {
            id: 5,
            name: '张小发',
            age: 33,
            birthday: '1999-12-12',
            address: '南京市龙眠大道'
          },
          {
            id: 2,
            name: '张小刚',
            age: 25,
            birthday: '1990-11-11',
            address: '北京市海淀区西二旗'
          },
          {
            id: 4,
            name: '周小伟',
            age: 26,
            birthday: '1993-07-11',
            address: '深圳市南山区深南大道'
          },
          {
            id: 3,
            name: '李小红',
            age: 30,
            birthday: '1985-02-05',
            address: '上海市浦东新区世纪大道'
          }
        ],
        sortData: []
      }
    },
    created() {
      this.sortData = this.$deepCopy(this.data1)
    },
    methods: {
      handleDragDrop(newIndex, oldIndex, newData) {
        this.data1 = this.$deepCopy(newData)
      },
      handleClick() {
        this.$shuffle(this.data1)
      },
      handleEdit(row, index) {
        console.log(row, index)
      }
    }
  }
</script>
```

:::
