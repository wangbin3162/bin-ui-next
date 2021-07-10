## Tree 树结构

### 基础用法

::: demo `lockSelect` 设置可以锁定树的选中事件，这个可以用来控制树菜单在不同情况下的操作

```html

<template>
  <div flex>
    <div style="width: 200px">
      <b-tree :data="data" @select-change="handleSelect" :lock-select="lockSelect"></b-tree>
    </div>
    <div style="width: 80px">
      <b-switch v-model="lockSelect" size="large">
        <template #open>锁定</template>
        <template #close>解锁</template>
      </b-switch>
    </div>
  </div>
  <div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        data: [
          {
            title: '一级 1',
            expand: true,
            children: [
              {
                title: '二级 1-1',
                expand: true,
                children: [
                  { title: '三级 1-1-1', },
                  { title: '三级 1-1-2' }
                ]
              },
              {
                title: '二级 1-2',
                expand: true,
                children: [
                  { title: '三级 1-2-1' },
                  { title: '三级 1-2-2' }
                ]
              }
            ]
          }
        ],
        lockSelect: false
      }
    },
    methods: {
      handleSelect(selected, node) {
        console.log(node)
      }
    }
  }
</script>
```

:::

### 额外参数配置

可以配置额外参数设置，比如附加id，code等业务参数，也可以指定title显示的字段名称，默认为`title`

::: demo

```html

<template>
  <b-button @click="initData">初始化数据并默认选中前端组</b-button>
  <div flex class="mt-10">
    <div style="width: 200px">
      <b-tree :data="data" ref="tree" @select-change="handleSelect" titleKey="text"></b-tree>
    </div>
  </div>
  <div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        data: [],
        defaultId: '00102'
      }
    },
    methods: {
      initData() {
        // 初始化数据后
        this.data = [
          {
            id: '001',
            text: '研发部',
            deptCode: 'yfb',
            status: '1',
            desc: '研发中心',
            parentId: null,
            children: [
              {
                id: '00101',
                text: '后端组',
                deptCode: 'hd',
                status: '1',
                desc: '后端研发中心',
                parentId: '001'
              },
              {
                id: '00102',
                text: '前端组',
                deptCode: 'qd',
                status: '1',
                desc: '前端研发中心',
                parentId: '001'
              },
              {
                id: '00103',
                text: 'UI设计',
                deptCode: 'sj',
                status: '1',
                desc: '交互、ui设计中心',
                parentId: '001'
              },
              {
                id: '00104',
                text: '测试组',
                deptCode: 'cs',
                status: '1',
                desc: '测试组',
                parentId: '001'
              },
              {
                id: '00105',
                text: '运维组',
                deptCode: 'yw',
                status: '1',
                desc: '运维、服务、巡检',
                parentId: '001'
              }
            ]
          },
          {
            id: '002',
            text: '项目部',
            deptCode: 'xmb',
            status: '1',
            desc: '项目服务部',
            parentId: null,
            children: [
              {
                id: '00201',
                text: '开发组',
                deptCode: 'kf',
                status: '1',
                desc: '后端项目开发',
                parentId: '002'
              },
              {
                id: '00202',
                text: '交付服务组',
                deptCode: 'jf',
                status: '1',
                desc: '交付项目，技术服务支持',
                parentId: '002'
              }
            ]
          }
        ]
        this.$nextTick(() => {
          // 获取树结构的拍平数据，查找当前需要选中的节点值
          const flatState = this.$refs.tree.getFlatState()
          const current = flatState.find(node => node.node.id === this.defaultId)
          if (current && current) {
            this.$refs.tree.setSelected([current.nodeKey])
          }
        })
      },
      handleSelect(selected, node) {
        console.log(node)
        this.$message(`选中节点${ node.text }`)
      }
    }
  }
</script>
```

:::

### 其他属性

可以设置show-checkbox开启勾选，并可以设置数据格式中的默认选中

expand、selected、checked 和 disabled 可以设置展开，选中，勾选和禁用。multiple 开启多选

::: demo

```html

<template>
  <div>
    <b-tree :data="data" show-checkbox multiple @select-change="handleSelect" @check-change="handleChecked"></b-tree>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        data: [
          {
            title: '一级 1',
            expand: true,
            children: [
              {
                title: '二级 1-1',
                expand: true,
                disabled: true,
                children: [
                  { title: '三级 1-1-1', },
                  { title: '三级 1-1-2' }
                ]
              },
              {
                title: '二级 1-2',
                expand: true,
                children: [
                  { title: '三级 1-2-1' },
                  { title: '三级 1-2-2' }
                ]
              }
            ]
          }
        ]
      }
    },
    methods: {
      handleSelect(selected, node) {
        console.log(selected)
        console.log(node)
      },
      handleChecked(checked, node) {
        console.log(checked)
        console.log(node)
      }
    }
  }
</script>
```

:::

### 树节点的操作

树结构默认拍平了所有节点数组，并塞入了唯一的nodeKey值用于索引节点，这样可以方便快捷的获取和设置树的状态

::: demo

```html

<template>
  <div class="mb-16">
    <b-button @click="expandAll" size="small">展开全部</b-button>
    <b-button @click="collapseAll" size="small">收起全部</b-button>
    <b-button @click="setExpand" size="small">展开三级</b-button>
    <b-button @click="checkAll" size="small">选择全部</b-button>
    <b-button @click="uncheckAll" size="small">取消全选</b-button>
    <b-button @click="setChecked" size="small">设置选中1-2及以下</b-button>
    <b-button @click="setSelected" size="small">单选 1-2-1</b-button>
    <b-button @click="clear" size="small">清空单选和多选</b-button>
  </div>
  <div style="width: 300px;">
    <b-tree :data="data" show-checkbox ref="tree"></b-tree>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        data: [
          {
            title: '一级 1',
            children: [
              {
                title: '二级 1-1',
                children: [
                  { title: '三级 1-1-1', },
                  { title: '三级 1-1-2' }
                ]
              },
              {
                title: '二级 1-2',
                children: [
                  { title: '三级 1-2-1' },
                  { title: '三级 1-2-2' }
                ]
              }
            ]
          },
          {
            title: '一级 2',
            children: [
              {
                title: '二级 2-1',
              },
              {
                title: '二级 2-2',
              }
            ]
          }
        ],
      }
    },
    methods: {
      expandAll() {
        this.$refs.tree.expandAll()
      },
      collapseAll() {
        this.$refs.tree.collapseAll()
      },
      checkAll() {
        this.$refs.tree.checkAll()
      },
      uncheckAll() {
        this.$refs.tree.uncheckAll()
      },
      setChecked() {
        // 默认是获取了nodeKey索引，如有特殊判断，如id，则可以自行根据flatState.find所有nodeKey值
        this.$refs.tree.setChecked([5, 6])
      },
      setSelected() {
        this.$refs.tree.setSelected([5])
      },
      clear() {
        this.$refs.tree.uncheckAll()
        this.$refs.tree.unselectAll()
      },
      setExpand() {
        this.$refs.tree.setExpand([0, 4])
      }
    }
  }
</script>
```

:::

### 异步加载子节点

::: demo

```html

<template>
  <b-tree :data="data3" show-checkbox :load-data="loadData"></b-tree>
</template>
<script>
  export default {
    data() {
      return {
        data3: [
          {
            title: 'root',
            children: []
          },
          {
            title: 'leaf',
            isLeaf: true,
            children: []
          }
        ]
      }
    },
    methods: {
      loadData(item, callback) {
        console.log(item)
        setTimeout(() => {
          let data = [
            {
              title: 'have-child',
              loading: false,
              children: []
            },
            {
              title: 'no-child',
              loading: false,
              children: []
            }
          ]
          // 模拟请求数据有子项的时候
          if (item.title === 'have-child') {
            data = [
              {
                title: 'child1',
                loading: false,
                isLeaf: false,
                children: [],
                visible: true
              },
              {
                title: 'leaf node',
                isLeaf: true,
                children: []
              }
            ]
          } else if (item.title === 'no-child') {
            // 按需自行设置是否是叶子节点或者不设置
            item['isLeaf'] = true
            // 不设置会保留箭头可以再次点击
            // data = []
          }

          callback(data);
        }, 1000);
      }
    }
  }
</script>
```

:::

### 可以筛选

如果树结构层级较多，可配合过滤函数进行过滤筛选

::: demo

```html

<template>
  <div>
    <b-input v-model="query" search placeholder="输入过滤条件后回车筛选" @search="handleFilter" style="width: 230px;"></b-input>
    <b-divider style="margin: 14px 0;"></b-divider>
    <b-tree :data="data" ref="treeRef" :filter-node-method="filterNode"></b-tree>
  </div>
</template>
<script>
  import { reactive, toRefs, ref } from 'vue'

  export default {
    setup() {
      const states = reactive({
        query: '',
        data: [
          {
            id: '1',
            title: '江苏省',
            children: [
              {
                id: '1-1',
                title: '南京市',
                children: [
                  { id: '1-1-1', title: '玄武区' },
                  { id: '1-1-2', title: '鼓楼区' },
                  { id: '1-1-3', title: '建邺区' },
                  { id: '1-1-4', title: '秦淮区' }
                ]
              },
              {
                id: '1-2',
                title: '无锡市',
                children: [
                  { id: '1-2-1', title: '锡山区' },
                  { id: '1-2-2', title: '惠山区' },
                  { id: '1-2-3', title: '滨湖区' },
                  { id: '1-2-4', title: '梁溪区' }
                ]
              },
              {
                id: '1-3',
                title: '徐州市',
                children: [
                  { id: '1-3-1', title: '鼓楼区' },
                  { id: '1-3-2', title: '云龙区' },
                  { id: '1-3-3', title: '泉山区' },
                  { id: '1-3-4', title: '铜山区' },
                  { id: '1-3-5', title: '贾汪区' },
                  { id: '1-3-6', title: '沛县' },
                  { id: '1-3-7', title: '丰县' },
                  { id: '1-3-8', title: '睢宁县' },
                  { id: '1-3-9', title: '新沂市' },
                  { id: '1-3-10', title: '邳州市' }
                ]
              }
            ]
          },
          {
            id: '2',
            title: '河北省',
            children: [
              {
                id: '2-1',
                title: '石家庄',
                children: [
                  { id: '2-1-1', title: '长安区' },
                  { id: '2-1-2', title: '新华区' },
                  { id: '2-1-3', title: '鼓楼区' }
                ]
              }
            ]
          }
        ]
      })
      const treeRef = ref(null)
      const handleFilter = (value) => {
        treeRef.value.filter(value)
      }
      const filterNode = (value, node) => {
        if (!value) return true;
        // return node.title===value.trim()
        return node.title.indexOf(value) !== -1;
      }
      return {
        ...toRefs(states),
        treeRef,
        handleFilter,
        filterNode
      }
    }
  }
</script>
```

:::

### render函数

使用render函数可以设置更多自定义的效果

::: demo

```html

<template>
  <div style="width: 300px;">
    <b-tree :data="data" :render="renderContent" ref="tree"></b-tree>
  </div>
</template>
<script>
  import { h } from 'vue'

  export default {
    data() {
      return {
        data: [
          {
            title: 'parent 1',
            expand: true,
            render: ({ root, node, data }) => {
              return h('span', {
                style: { display: 'inline-flex', justifyContent: 'space-between', width: '100%', }
              }, [
                h('span', data.title),
                h('i', {
                  'class': ['b-iconfont', 'b-icon-plus-square'],
                  style: { fontSize: '16px', color: '#1089ff' },
                  onClick: () => {
                    this.append(data)
                  }
                })
              ]);
            },
            children: [
              { title: 'child 1-1', },
              { title: 'child 1-2', }
            ]
          }
        ],
        id: 0,
      }
    },
    methods: {
      renderContent({ root, node, data }) {
        return h('span', {
          style: { display: 'inline-flex', justifyContent: 'space-between', width: '100%', }
        }, [
          h('span', data.title),
          h('span', { style: { display: 'inline-block', } }, [
            h('i', {
              'class': ['b-iconfont', 'b-icon-plus-circle'],
              style: { fontSize: '16px', color: '#5d6d7e' },
              onClick: (e) => {
                e.stopPropagation()
                this.append(data)
              }
            }),
            h('i', {
              'class': ['b-iconfont', 'b-icon-minus-circle'],
              style: { fontSize: '16px', color: '#f5222d' },
              onClick: (e) => {
                e.stopPropagation()
                this.remove(root, node, data)
              }
            })
          ])
        ]);
      },
      append(data) {
        const children = data.children || [];
        data.expand = true
        children.push({ title: 'new node' });
        data.children = children
        this.data = [...this.data]
      },
      remove(root, node, data) {
        console.log(root, node, data)
        const parentKey = root.find(el => el === node).parent;
        const parent = root.find(el => el.nodeKey === parentKey).node;
        const index = parent.children.indexOf(data);
        parent.children.splice(index, 1);
      }
    }
  }
</script>
```

:::

### 树选择

由于书选择场景较多，这里也额外封装了一个树形选择器以供表单进行节点选择

::: demo

```html

<template>
  <div flex>
    <div flex>
      <b-tree-select
          style="width: 200px;"
          :data="data"
          v-model="currentId"
          titleKey="text"
          @change="handleChange"
      ></b-tree-select>
      <b-button @click="defaultSelect">设置默认选中前端组</b-button>
    </div>
    <div flex class="ml-16">
      <b-tree-select
          style="width: 200px;"
          :data="data"
          v-model="currentId"
          v-model:checked="checked"
          titleKey="text"
          show-checkbox
          @change="handleChange"
      ></b-tree-select>
      <b-button @click="setChecked">设置默认勾选项目部</b-button>
    </div>
  </div>
  <div>{{ currentId }}</div>
  <div>{{ currentNode }}</div>
  <div>{{ checked }}</div>
</template>
<script>
  export default {
    data() {
      return {
        data: [
          {
            id: '001',
            text: '研发部',
            deptCode: 'yfb',
            status: '1',
            desc: '研发中心',
            parentId: null,
            children: [
              {
                id: '00101',
                text: '后端组',
                deptCode: 'hd',
                status: '1',
                desc: '后端研发中心',
                parentId: '001'
              },
              {
                id: '00102',
                text: '前端组',
                deptCode: 'qd',
                status: '1',
                desc: '前端研发中心',
                parentId: '001'
              },
              {
                id: '00103',
                text: 'UI设计',
                deptCode: 'sj',
                status: '1',
                desc: '交互、ui设计中心',
                parentId: '001'
              },
              {
                id: '00104',
                text: '测试组',
                deptCode: 'cs',
                status: '1',
                desc: '测试组',
                parentId: '001'
              },
              {
                id: '00105',
                text: '运维组',
                deptCode: 'yw',
                status: '1',
                desc: '运维、服务、巡检',
                parentId: '001'
              }
            ]
          },
          {
            id: '002',
            text: '项目部',
            deptCode: 'xmb',
            status: '1',
            desc: '项目服务部',
            parentId: null,
            children: [
              {
                id: '00201',
                text: '开发组',
                deptCode: 'kf',
                status: '1',
                desc: '后端项目开发',
                parentId: '002'
              },
              {
                id: '00202',
                text: '交付服务组',
                deptCode: 'jf',
                status: '1',
                desc: '交付项目，技术服务支持',
                parentId: '002'
              }
            ]
          }
        ],
        currentId: '',
        currentNode: {},
        checked: []
      }
    },
    methods: {
      defaultSelect() {
        this.currentId = '00102'
      },
      handleChange(val, node) {
        console.log(val, node)
        this.currentNode = node ? { id: node.id, text: node.text } : {}
      },
      setChecked() {
        this.checked = ["002", "00201", "00202"]
      }
    }
  }
</script>
```

:::

### Big-Tree 超大数据量的树结构

如果需要渲染超大数据量的属性结构，需要使用扩展组件`<b-big-tree>`,组件内部api基本复用树结构所有属性，对树形结构进行优化，利用可视区域位置来进行过滤筛选节点并进行操作，
但为了性能的提示必然要牺牲部分体验，因此大数据量的树结构不提供动画展开缩放效果

默认节点高度为`28px`，可通过`visible-count`指定树可是区域显示的节点个数，默认为15个 即`420px`因为是针对可视区域的滚动优化，因此必须指定容器高度

::: demo

```html

<template>
  <div>
    <div style="margin-bottom: 8px;">
      数据条数：
      <b-input-number v-model="number"></b-input-number>
      <b-button @click="init">渲染</b-button>
    </div>
    <div flex="main:justify">
      <b-input v-model="query" search placeholder="输入过滤条件后回车筛选" @search="handleFilter" style="width: 230px;"></b-input>
      <b-button-group>
        <b-button @click="expandAll">展开所有</b-button>
        <b-button @click="collapseAll">收起所有</b-button>
      </b-button-group>
    </div>
    <b-divider style="margin: 14px 0;"></b-divider>
    <b-big-tree ref="tree" :data="data" :visible-count="10"
                @select-change="handleSelected" :filter-node-method="filterNode"></b-big-tree>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        number: 5000,
        query: '',
        data: []
      }
    },
    methods: {
      init() {
        this.data = this.$generateTree(this.number)
      },
      handleSelected(allSelected, node) {
        console.log(allSelected, node)
      },
      expandAll() {
        this.$refs.tree.expandAll()
      },
      collapseAll() {
        this.$refs.tree.collapseAll()
      },
      handleFilter(value) {
        this.$refs.tree.filter(value)
      },
      filterNode(value, node) {
        if (!value) return true;
        // return node.title===value.trim()
        return node.title.indexOf(value) !== -1;
      }
    }
  }
</script>
```

:::

### Props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| data     | 可嵌套的节点属性的数组，生成 tree 的数据   | Array  |  —   |  []   |
| multiple     | 是否支持多选   | Boolean  |  —   |  false  |
| show-checkbox     | 是否显示多选框   | Boolean  |  —   |  false  |
| empty-text     | 没有数据时的提示  | String      |  —   |  暂无数据  |
| load-data    | 异步加载数据的方法，见示例 | Function      |  —   |   —    |
| title-key | 定义title键,默认title  | String      |  —   |   title   |
| children-key   | 定义子节点键,默认children为子节点key | String      |  —   |   children   |
| check-strictly   | 复选框的情况下，是否严格的遵循父子不互相关联的做法 | Boolean          |  —   |   false   |
| check-directly   | 开启后，在 show-checkbox 模式下，select 的交互也将转为 check | Boolean          |  —   |   false   |
| lock-select    | 锁定树选择，再部分业务中常用，比如开启弹窗后禁用树的选中操作   | Boolean  |  —   |  false  |
| filter-node-method   | 筛选过滤树节点函数   | Function  |  —   |   —   |
| timeout  | 刷新频率（`<b-big-tree>`扩展组件可用）   | Number  |  —   |  17   |
| itemHeight  | 节点高度 （`<b-big-tree>`扩展组件可用）  | Number  |  —   |  28   |
| visibleCount  | 显示区域个数（`<b-big-tree>`扩展组件可用）   | Number  |  —   |  15   |

### Events

| 事件名      | 说明    | 返回值      |
|---------- |-------- |---------- |
| select-change    | 点击树节点时触发   | 当前已选中的节点数组、当前项、flatState  |
| check-change     | 点击复选框时触发   | 当前已勾选节点的数组、当前项、包含半选的节点数组、flatState  |
| toggle-expand    | 展开和收起子列表时触发   | 当前节点的数据  |

### Methods

| 事件名      | 说明    | 返回值      |
|---------- |-------- |---------- |
| getFlatState | 拍平的数组buffer，包含层级关系及索引 无 |
| getCheckedNodes     | 获取被勾选的节点   | 无 |
| getSelectedNodes     | 获取被选中的节点   | 无  |
| getCheckedAndIndeterminateNodes     | 获取选中及半选节点   | 无  |
| filter     | 树节点过滤函数，必须设置filter-node-method 过滤匹配函数   | 无  |
| setChecked     | 设置node勾选 ，参数为 keys：nodeKey数组, flag：勾选状态，默认true | 无  |
| setSelected     | 设置node单选 ，参数为 keys：nodeKey数组, flag：勾选状态，默认true，expandParent：是否展开祖先节点，默认true | 无  |
| setExpand     | 设置node展开 ，参数为 keys：nodeKey数组, flag：勾选状态，默认true | 无  |
| expandAll     | 展开所有 | 无  |
| collapseAll   | 收起所有 | 无  |
| checkAll     | 勾选所有 | 无  |
| unselectAll     | 取消所有单选 | 无  |
| uncheckAll     | 取消全部勾选 | 无  |

### Children

| 属性      | 说明    | 类型      | 默认值   |
|---------- |-------- |---------- |-------------  |
| title     | 节点显示标题   | String |  —   |
| expand     | 是否展开直子节点   | Boolean  | false  |
| disabled   | 禁用   | Boolean  | false  |
| disableCheckbox    | 禁用单选框   | Boolean  | false  |
| selected     | 是否选中子节点   | Boolean  | false  |
| checked     | 是否勾选(如果勾选，子节点也会全部勾选)   | Boolean  | false  |
| visible     | 是否显示节点(可通过操作节点visible属性隐藏节点)   | Boolean  | false  |
| children     | 子节点属性数组，可以设置tree 组件children-key属性来自定义  | Array  |  —    |
| loading     | 可设置为异步加载节点，需配合loadData设置加载函数  | Boolean  |  —    |
| isLeaf     | 是否为叶子节点，可控制是否显示箭头，可配合异步加载实现  | Boolean  |  —    |
