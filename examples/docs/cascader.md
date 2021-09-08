## Cascader 级联选择

### 基础用法

通用的级联选择器

:::demo

```html

<template>
  <div flex>
    <div class="block" style="width: 220px;margin-right: 20px;">
      <span class="demonstration">默认 click 触发子菜单</span>
      <b-cascader
          v-model="selected"
          :options="options"
          @change="handleChange"></b-cascader>
    </div>
    <div class="block" style="width: 220px;margin-right: 20px;">
      <span class="demonstration">hover 触发子菜单</span>
      <b-cascader
          v-model="selected"
          :options="options"
          :props="{ expandTrigger: 'hover' }"
          @change="handleChange"></b-cascader>
    </div>
    <div class="block" style="width: 220px;margin-right: 20px;">
      <span class="demonstration">选项值</span>
      <div class="mt-5">{{selected}}</div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        options: [
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
                label: '云龙区',
                children: [
                  { value: 'dalonghu', label: '大龙湖街道' },
                  { value: 'guozhuanglu', label: '郭庄路街道' },
                  { value: 'lvdi', label: '绿地商务城' },
                  { value: 'jinlonghu', label: '金龙湖街道' }
                ]
              },
              {
                value: 'jiawang',
                label: '贾汪区'
              },
              { value: 'peixian', label: '沛县' },
              { value: 'fengxian', label: '丰县' },
              { value: 'pizhou', label: '邳州市' },
              { value: 'xinyi', label: '新沂市' }
            ]
          }
        ],
        selected: []
      }
    },
    methods: {
      handleChange(value) {
        console.log(value)
      }
    }
  }
</script>
```

:::

### 禁用状态

设置disabled来控制禁用

:::demo

```html

<template>
  <div flex>
    <div class="block" style="width: 220px;margin-right: 20px;">
      <span class="demonstration">禁用项</span>
      <b-cascader
          v-model="selected"
          :options="options"
          @change="handleChange"></b-cascader>
    </div>
    <div class="block" style="width: 220px;margin-right: 20px;">
      <span class="demonstration">全部禁用</span>
      <b-cascader
          v-model="selected"
          :options="options"
          disabled
          @change="handleChange"></b-cascader>
    </div>
    <div class="block" style="width: 220px;margin-right: 20px;">
      <span class="demonstration">选项值</span>
      <div class="mt-5">{{selected}}</div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        options: [
          {
            value: 'nanjing',
            label: '南京',
            disabled: true,
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
                label: '云龙区',
                children: [
                  { value: 'dalonghu', label: '大龙湖街道' },
                  { value: 'guozhuanglu', label: '郭庄路街道' },
                  { value: 'lvdi', label: '绿地商务城' },
                  { value: 'jinlonghu', label: '金龙湖街道' }
                ]
              },
              {
                value: 'jiawang',
                label: '贾汪区'
              },
              { value: 'peixian', label: '沛县' },
              { value: 'fengxian', label: '丰县' },
              { value: 'pizhou', label: '邳州市' },
              { value: 'xinyi', label: '新沂市' }
            ]
          }
        ],
        selected: []
      }
    },
    methods: {
      handleChange(value) {
        console.log(value)
      }
    }
  }
</script>
```

:::

### 可以清空

可以清空选择

:::demo

```html

<template>
  <div flex>
    <div class="block" style="width: 220px;margin-right: 20px;">
      <b-cascader
          v-model="selected"
          :options="options"
          clearable
          @change="handleChange"></b-cascader>
    </div>
    <div class="block" style="width: 220px;margin-right: 20px;">
      <div class="mt-5">{{selected}}</div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        options: [
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
                label: '云龙区',
                children: [
                  { value: 'dalonghu', label: '大龙湖街道' },
                  { value: 'guozhuanglu', label: '郭庄路街道' },
                  { value: 'lvdi', label: '绿地商务城' },
                  { value: 'jinlonghu', label: '金龙湖街道' }
                ]
              },
              {
                value: 'jiawang',
                label: '贾汪区'
              },
              { value: 'peixian', label: '沛县' },
              { value: 'fengxian', label: '丰县' },
              { value: 'pizhou', label: '邳州市' },
              { value: 'xinyi', label: '新沂市' }
            ]
          }
        ],
        selected: []
      }
    },
    methods: {
      handleChange(value) {
        console.log(value)
      }
    }
  }
</script>
```

:::

### 显示最后一级

输入框可设置只显示最后一级标签

:::demo

```html

<template>
  <div flex>
    <div class="block" style="width: 220px;margin-right: 20px;">
      <b-cascader
          v-model="selected"
          :options="options"
          clearable
          :show-all-levels="false"
          @change="handleChange"></b-cascader>
    </div>
    <div class="block" style="width: 220px;margin-right: 20px;">
      <div class="mt-5">{{selected}}</div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        options: [
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
                label: '云龙区',
                children: [
                  { value: 'dalonghu', label: '大龙湖街道' },
                  { value: 'guozhuanglu', label: '郭庄路街道' },
                  { value: 'lvdi', label: '绿地商务城' },
                  { value: 'jinlonghu', label: '金龙湖街道' }
                ]
              },
              {
                value: 'jiawang',
                label: '贾汪区'
              },
              { value: 'peixian', label: '沛县' },
              { value: 'fengxian', label: '丰县' },
              { value: 'pizhou', label: '邳州市' },
              { value: 'xinyi', label: '新沂市' }
            ]
          }
        ],
        selected: []
      }
    },
    methods: {
      handleChange(value) {
        console.log(value)
      }
    }
  }
</script>
```

:::

### 多选模式

可以设置props.multiple来开启多选

:::demo

```html

<template>
  <div flex>
    <div class="block" style="width: 220px;margin-right: 20px;">
      <span class="demonstration">默认 显示所有tag</span>
      <b-cascader
          v-model="selected"
          :options="options"
          :props="{ multiple: true }"
          @change="handleChange"></b-cascader>
    </div>
    <div class="block" style="width: 220px;margin-right: 20px;">
      <span class="demonstration">折叠显示tag</span>
      <b-cascader
          v-model="selected"
          :options="options"
          :props="{ multiple: true }"
          collapse-tags
          @change="handleChange"></b-cascader>
    </div>
    <div class="block" style="width: calc(100% - 500px);margin-right: 20px;">
      <span class="demonstration">选项值</span>
      <div class="mt-5">{{selected}}</div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        options: [
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
                label: '云龙区',
                children: [
                  { value: 'dalonghu', label: '大龙湖街道' },
                  { value: 'guozhuanglu', label: '郭庄路街道' },
                  { value: 'lvdi', label: '绿地商务城' },
                  { value: 'jinlonghu', label: '金龙湖街道' }
                ]
              },
              {
                value: 'jiawang',
                label: '贾汪区'
              },
              { value: 'peixian', label: '沛县' },
              { value: 'fengxian', label: '丰县' },
              { value: 'pizhou', label: '邳州市' },
              { value: 'xinyi', label: '新沂市' }
            ]
          }
        ],
        selected: []
      }
    },
    methods: {
      handleChange(value) {
        console.log(value)
      }
    }
  }
</script>
```

:::

### 选择任意一级选项

在单选模式下，你只能选择叶子节点；而在多选模式下，勾选父节点真正选中的都是叶子节点。启用该功能后，可让父子节点取消关联，选择任意一级选项

:::demo 可通过 props.checkStrictly = true 来设置父子节点取消选中关联，从而达到选择任意一级选项的目的。

```html

<template>
  <div flex>
    <div class="block" style="width: 220px;margin-right: 20px;">
      <span class="demonstration">单选选择任意一级选项</span>
      <b-cascader
          v-model="selected1"
          :options="options"
          :props="{ checkStrictly: true }"
          @change="handleChange"></b-cascader>
      <div class="mt-5">{{selected1}}</div>
    </div>
    <div class="block" style="width: 220px;margin-right: 20px;">
      <span class="demonstration">多选选择任意一级选项</span>
      <b-cascader
          v-model="selected2"
          :options="options"
          :props="{ multiple: true, checkStrictly: true  }"
          collapse-tags
          @change="handleChange"></b-cascader>
      <div class="mt-5">{{selected2}}</div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        options: [
          {
            value: 'nanjing',
            label: '南京',
            disabled: true,
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
                label: '云龙区',
                children: [
                  { value: 'dalonghu', label: '大龙湖街道' },
                  { value: 'guozhuanglu', label: '郭庄路街道' },
                  { value: 'lvdi', label: '绿地商务城' },
                  { value: 'jinlonghu', label: '金龙湖街道' }
                ]
              },
              {
                value: 'jiawang',
                label: '贾汪区'
              },
              { value: 'peixian', label: '沛县' },
              { value: 'fengxian', label: '丰县' },
              { value: 'pizhou', label: '邳州市' },
              { value: 'xinyi', label: '新沂市' }
            ]
          }
        ],
        selected1: [],
        selected2: []
      }
    },
    methods: {
      handleChange(value) {
        console.log(value)
      }
    }
  }
</script>
```

:::

### 动态加载

选中某一级时，动态加载之下的选项, 通过lazy开启动态加载，并通过lazyload来设置加载数据源的方法

lazyload方法有两个参数，第一个参数node为当前点击的节点，第二个resolve为数据加载完成的回调(必须调用)。为了更准确的显示节点的状态，还可以对节点数据添加是否为叶子节点的标志位 (
默认字段为leaf，可通过props.leaf修改)，否则会简单的以有无子节点来判断是否为叶子节点。

:::demo

```html

<template>
  <div flex>
    <div class="block" style="width: 220px;margin-right: 20px;">
      <b-cascader
          v-model="selected"
          :props="props"></b-cascader>
    </div>
    <div class="block" style="width: 220px;margin-right: 20px;">
      <div class="mt-5">{{selected}}</div>
    </div>
  </div>
</template>
<script>
  let id = 0;
  export default {
    data() {
      return {
        options: [
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
                label: '云龙区',
                children: [
                  { value: 'dalonghu', label: '大龙湖街道' },
                  { value: 'guozhuanglu', label: '郭庄路街道' },
                  { value: 'lvdi', label: '绿地商务城' },
                  { value: 'jinlonghu', label: '金龙湖街道' }
                ]
              },
              {
                value: 'jiawang',
                label: '贾汪区'
              },
              { value: 'peixian', label: '沛县' },
              { value: 'fengxian', label: '丰县' },
              { value: 'pizhou', label: '邳州市' },
              { value: 'xinyi', label: '新沂市' }
            ]
          }
        ],
        props: {
          lazy: true,
          lazyLoad(node, resolve) {
            const { level } = node;
            setTimeout(() => {
              const nodes = Array.from({ length: level + 1 })
                  .map(item => ({
                    value: ++id,
                    label: `选项${id}`,
                    leaf: level >= 2
                  }));
              // 通过调用resolve将子节点数据返回，通知组件数据加载完成
              resolve(nodes);
            }, 1000);
          }
        },
        selected: []
      }
    },
    methods: {
      handleChange(value) {
        console.log(value)
      }
    }
  }
</script>
```

:::

### 可搜索

可以快捷地搜索选项并选择,将filterable赋值为true即可打开搜索功能，默认会匹配节点的label或所有父节点的label(由show-all-levels决定)中包含输入值的选项。

你也可以用filter-method自定义搜索逻辑，接受一个函数，第一个参数是节点node，第二个参数是搜索关键词keyword，通过返回布尔值表示是否匹配

:::demo

```html

<template>
  <div flex>
    <div class="block" style="width: 220px;margin-right: 20px;">
      <span class="demonstration">单选可搜索</span>
      <b-cascader
          v-model="selected1"
          placeholder="试试搜索：鼓楼"
          :options="options"
          filterable></b-cascader>
      <div class="mt-5">{{selected1}}</div>
    </div>
    <div class="block" style="width: 220px;margin-right: 20px;">
      <span class="demonstration">多选可搜索</span>
      <b-cascader
          v-model="selected2"
          placeholder="试试搜索：鼓楼"
          :options="options"
          :props="{ multiple: true }"
          collapse-tags
          filterable
          :filter-method="filterMethod"
      ></b-cascader>
      <div class="mt-5">{{selected2}}</div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        options: [
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
                label: '云龙区',
                children: [
                  { value: 'dalonghu', label: '大龙湖街道' },
                  { value: 'guozhuanglu', label: '郭庄路街道' },
                  { value: 'lvdi', label: '绿地商务城' },
                  { value: 'jinlonghu', label: '金龙湖街道' }
                ]
              },
              {
                value: 'jiawang',
                label: '贾汪区'
              },
              { value: 'peixian', label: '沛县' },
              { value: 'fengxian', label: '丰县' },
              { value: 'pizhou', label: '邳州市' },
              { value: 'xinyi', label: '新沂市' }
            ]
          }
        ],
        selected1: [],
        selected2: []
      }
    },
    methods: {
      filterMethod(node, keyword) {
        return node.label.includes(keyword) && (node.parent && node.parent.label === '徐州')
      }
    }
  }
</script>
```

:::

### 自定义选项

可以自定义选项的内容

:::demo scoped slot会传入两个字段 node 和 data，分别表示当前节点的 Node 对象和数据。

```html

<template>
  <div flex>
    <div class="block" style="width: 220px;margin-right: 20px;">
      <b-cascader :options="options">
        <template #default="{ node, data }">
          <span>{{ data.label }}</span>
          <span v-if="!node.isLeaf"> ({{ data.children.length }}) </span>
        </template>
      </b-cascader>
    </div>
    <div class="block" style="width: 220px;margin-right: 20px;">
      <div class="mt-5">{{selected}}</div>
    </div>
  </div>
</template>
<script>
  let id = 0;
  export default {
    data() {
      return {
        options: [
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
                label: '云龙区',
                children: [
                  { value: 'dalonghu', label: '大龙湖街道' },
                  { value: 'guozhuanglu', label: '郭庄路街道' },
                  { value: 'lvdi', label: '绿地商务城' },
                  { value: 'jinlonghu', label: '金龙湖街道' }
                ]
              },
              {
                value: 'jiawang',
                label: '贾汪区'
              },
              { value: 'peixian', label: '沛县' },
              { value: 'fengxian', label: '丰县' },
              { value: 'pizhou', label: '邳州市' },
              { value: 'xinyi', label: '新沂市' }
            ]
          }
        ],
        selected: []
      }
    },
    methods: {
      handleChange(value) {
        console.log(value)
      }
    }
  }
</script>
```

:::

### 不同尺寸

不同尺寸

:::demo

```html

<template>
  <div flex>
    <div class="block" style="width: 220px;margin-right: 20px;">
      <b-cascader :options="options" size="large"></b-cascader>
    </div>
    <div class="block" style="width: 220px;margin-right: 20px;">
      <b-cascader :options="options"></b-cascader>
    </div>
    <div class="block" style="width: 220px;margin-right: 20px;">
      <b-cascader :options="options" size="small"></b-cascader>
    </div>
    <div class="block" style="width: 220px;margin-right: 20px;">
      <b-cascader :options="options" size="mini"></b-cascader>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        options: [
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
                label: '云龙区',
                children: [
                  { value: 'dalonghu', label: '大龙湖街道' },
                  { value: 'guozhuanglu', label: '郭庄路街道' },
                  { value: 'lvdi', label: '绿地商务城' },
                  { value: 'jinlonghu', label: '金龙湖街道' }
                ]
              },
              {
                value: 'jiawang',
                label: '贾汪区'
              },
              { value: 'peixian', label: '沛县' },
              { value: 'fengxian', label: '丰县' },
              { value: 'pizhou', label: '邳州市' },
              { value: 'xinyi', label: '新沂市' }
            ]
          }
        ],
        selected: []
      }
    },
    methods: {
      handleChange(value) {
        console.log(value)
      }
    }
  }
</script>
```

:::

### 级联面板

可以不采用popper弹窗的面板显示。与级联选择器一样使用

:::demo

```html

<template>
  <div flex>
    <div class="block" style="margin-right: 20px;">
      <b-cascader-panel v-model="selected" :options="options"></b-cascader-panel>
    </div>
    <div class="block" style="width: 220px;margin-right: 20px;">
      <div class="mt-5">{{selected}}</div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        options: [
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
                label: '云龙区',
                children: [
                  { value: 'dalonghu', label: '大龙湖街道' },
                  { value: 'guozhuanglu', label: '郭庄路街道' },
                  { value: 'lvdi', label: '绿地商务城' },
                  { value: 'jinlonghu', label: '金龙湖街道' }
                ]
              },
              {
                value: 'jiawang',
                label: '贾汪区'
              },
              { value: 'peixian', label: '沛县' },
              { value: 'fengxian', label: '丰县' },
              { value: 'pizhou', label: '邳州市' },
              { value: 'xinyi', label: '新沂市' }
            ]
          }
        ],
        selected: []
      }
    }
  }
</script>
```

:::

### Cascader Props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model | 选中项绑定值 | - | — | — |
| options | 可选项数据源，键名可通过 `Props` 属性配置 | array | — | — |
| props | 配置选项，具体见下表 | object | — | — |
| size | 尺寸 | string | medium / small / mini | — |
| placeholder | 输入框占位文本 | string | — | 请选择 |
| disabled | 是否禁用 | boolean | — | false |
| clearable | 是否支持清空选项 | boolean | — | false |
| show-all-levels | 输入框中是否显示选中值的完整路径 | boolean | — | true |
| collapse-tags | 多选模式下是否折叠Tag | boolean | - | false |
| separator | 选项分隔符 | string | — | 斜杠' / ' |
| filterable | 是否可搜索选项 | boolean | — | — |
| filter-method | 自定义搜索逻辑，第一个参数是节点`node`，第二个参数是搜索关键词`keyword`，通过返回布尔值表示是否命中 | function(node, keyword) | - | - |
| debounce | 搜索关键词输入的去抖延迟，毫秒 | number | — | 300 |
| before-filter | 筛选之前的钩子，参数为输入的值，若返回 false 或者返回 Promise 且被 reject，则停止筛选 | function(value) | — | — |
| popper-class | 自定义浮层类名   | string | —  | — |

### Cascader Events

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change | 当选中节点变化时触发 | 选中节点的值 |
| expand-change | 当展开节点发生变化时触发 | 各父级选项值组成的数组 |
| blur | 当失去焦点时触发 | (event: Event) |
| focus | 当获得焦点时触发 | (event: Event) |
| visible-change | 下拉框出现/隐藏时触发 | 出现则为 true，隐藏则为 false |
| remove-tag | 在多选模式下，移除Tag时触发 | 移除的Tag对应的节点的值 |

### Cascader Methods

| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| getCheckedNodes | 获取选中的节点 | (leafOnly) 是否只是叶子节点，默认值为 `false` |

### Cascader Slots

| 名称     | 说明 |
|---------|-------------|
| - | 自定义备选项的节点内容，参数为 { node, data }，分别为当前节点的 Node 对象和数据 |
| empty  | 无匹配选项时的内容 |

### CascaderPanel Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model | 选中项绑定值 | - | — | — |
| options | 可选项数据源，键名可通过 `Props` 属性配置 | array | — | — |
| props | 配置选项，具体见下表 | object | — | — |

### CascaderPanel Events

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change | 当选中节点变化时触发 | 选中节点的值 |
| expand-change | 当展开节点发生变化时触发 | 各父级选项值组成的数组 |

### CascaderPanel Methods

| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| getCheckedNodes | 获取选中的节点数组 | (leafOnly) 是否只是叶子节点，默认值为 `false` |
| clearCheckedNodes | 清空选中的节点 | - |

### CascaderPanel Slots

| 名称     | 说明 |
|---------|-------------|
| - | 自定义备选项的节点内容，参数为 { node, data }，分别为当前节点的 Node 对象和数据 |

### Props

| 参数     | 说明              | 类型   | 可选值 | 默认值 |
| -------- | ----------------- | ------ | ------ | ------ |
| expandTrigger | 次级菜单的展开方式 | string | click / hover | 'click' |
| multiple | 是否多选 | boolean | - | false |
| checkStrictly | 是否严格的遵守父子节点不互相关联 | boolean | - | false |
| emitPath | 在选中节点改变时，是否返回由该节点所在的各级菜单的值所组成的数组，若设置 false，则只返回该节点的值 | boolean | - | true |
| lazy | 是否动态加载子节点，需与 lazyLoad 方法结合使用 | boolean | - | false |
| lazyLoad | 加载动态数据的方法，仅在 lazy 为 true 时有效 | function(node, resolve)，`node`为当前点击的节点，`resolve`为数据加载完成的回调(必须调用) | - | - |
| value    | 指定选项的值为选项对象的某个属性值 | string | — | 'value' |
| label    | 指定选项标签为选项对象的某个属性值 | string | — | 'label' |
| children | 指定选项的子选项为选项对象的某个属性值 | string | — | 'children' |
| disabled | 指定选项的禁用为选项对象的某个属性值 | string | — | 'disabled' |
| leaf     | 指定选项的叶子节点的标志位为选项对象的某个属性值 | string | — | 'leaf' |

