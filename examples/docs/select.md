## Select 选择器

<div class="global-anchor">
  <b-anchor :scroll-offset="100">
    <b-anchor-link href="#ji-chu-yong-fa" title="基础用法"></b-anchor-link>
    <b-anchor-link href="#jin-yong-xuan-xiang-he-jin-yong-zhuang-tai" title="禁用选项和禁用状态"></b-anchor-link>
    <b-anchor-link href="#ke-yi-qing-kong-fen-zu-huo-zhe-zi-ding-yi-mo-ban" title="可以清空、分组或者自定义模板"></b-anchor-link>
    <b-anchor-link href="#sou-suo-mo-shi" title="搜索模式"></b-anchor-link>
    <b-anchor-link href="#duo-xuan-he-zhe-die" title="多选和折叠"></b-anchor-link>
    <b-anchor-link href="#qian-zhui-mo-shi" title="前缀模式"></b-anchor-link>
    <b-anchor-link href="#chuang-jian-xin-xiang" title="创建新项"></b-anchor-link>
    <b-anchor-link href="#bu-tong-da-xiao" title="不同大小"></b-anchor-link>
    <b-anchor-link href="#select-props" title="Select props"></b-anchor-link>
    <b-anchor-link href="#select-events" title="Select events"></b-anchor-link>
    <b-anchor-link href="#select-slot" title="Select slot"></b-anchor-link>
    <b-anchor-link href="#option-props" title="Option props"></b-anchor-link>
    <b-anchor-link href="#optiongroup-props" title="OptionGroup props"></b-anchor-link>
  </b-anchor>
</div>

### 基础用法

基本用法。可以使用 v-model 双向绑定数据。

单选时，value 只接受字符串和数字类型，多选时，只接受数组类型，组件会自动根据 Option 的 value 来返回选中的数据。

可以给 Select 添加 style 样式，比如宽度。

::: demo

```html

<template>
  <div>
    <b-select style="width:200px" v-model="select" clearable>
      <b-option v-for="item in cityList" :key="item.value" :label="item.label" :value="item.value"></b-option>
    </b-select>
    <span>{{ select }}</span>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        cityList: [
          { value: 'beijing', label: '北京', },
          { value: 'nanjing', label: '南京', },
          { value: 'shanghai', label: '上海', },
          { value: 'xuzhou', label: '徐州', },
          { value: 'guangzhou', label: '广州', },
          { value: 'shenzhen', label: '深圳', },
        ],
        select: '',
      }
    },
  }
</script>
```

:::

### 禁用选项和禁用状态

可以设置禁用状态和选项禁用

::: demo

```html

<template>
  <div>
    <b-select style="width:200px" v-model="select" clearable>
      <b-option
        v-for="item in cityList"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
      ></b-option>
    </b-select>
    &nbsp;
    <b-select style="width:200px" v-model="select" disabled>
      <b-option
        v-for="item in cityList"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      ></b-option>
    </b-select>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        cityList: [
          { value: 'beijing', label: '北京', },
          { value: 'nanjing', label: '南京', },
          { value: 'shanghai', label: '上海', disabled: true },
          { value: 'xuzhou', label: '徐州', },
          { value: 'guangzhou', label: '广州', },
          { value: 'shenzhen', label: '深圳', },
        ],
        select: '',
      }
    },
  }
</script>
```

:::

### 可以清空、分组或者自定义模板

可以清空，分组或者是自定义选项模板

::: demo

```html

<template>
  <div>
    <b-select style="width:200px" v-model="select" clearable>
      <b-option v-for="item in cityList" :key="item.value" :label="item.label" :value="item.value"></b-option>
    </b-select>
    <b-select style="width:200px;margin-left: 20px;" v-model="select">
      <b-option-group label="直辖市">
        <b-option value="beijing" label="北京"></b-option>
        <b-option value="shanghai" label="上海"></b-option>
      </b-option-group>
      <b-option-group label="热门城市">
        <b-option value="xuzhou" label="徐州"></b-option>
        <b-option value="nanjing" label="南京"></b-option>
        <b-option value="suzhou" label="广州"></b-option>
        <b-option value="shenzhen" label="深圳"></b-option>
      </b-option-group>
    </b-select>
    <b-select style="width:200px;margin-left: 20px;" v-model="select">
      <b-option value="beijing" label="北京">
        <span>北京</span>
        <span style="float:right;color:#ccc">beijing</span>
      </b-option>
      <b-option value="shanghai" label="上海">
        <span>上海</span>
        <span style="float:right;color:#ccc">shanghai</span>
      </b-option>
      <b-option value="xuzhou" label="徐州">
        <span>徐州</span>
        <span style="float:right;color:#ccc">xuzhou</span>
      </b-option>
    </b-select>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        cityList: [
          { value: 'beijing', label: '北京', },
          { value: 'nanjing', label: '南京', },
          { value: 'shanghai', label: '上海', },
          { value: 'xuzhou', label: '徐州', },
          { value: 'guangzhou', label: '广州', },
          { value: 'shenzhen', label: '深圳', },
        ],
        select: '',
      }
    },
  }
</script>
```

:::

### 搜索模式

可以进行搜索查询

::: demo

```html

<template>
  <div>
    <b-select style="width:200px" v-model="select" filterable>
      <b-option v-for="item in cityList" :key="item.value" :label="item.label" :value="item.value"></b-option>
    </b-select>
    <span>{{ select }}</span>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        cityList: [
          { value: 'beijing', label: '北京', },
          { value: 'nanjing', label: '南京', },
          { value: 'shanghai', label: '上海', },
          { value: 'xuzhou', label: '徐州', },
          { value: 'guangzhou', label: '广州', },
          { value: 'shenzhen', label: '深圳', },
        ],
        select: '',
      }
    },
  }
</script>
```

:::

### 多选和折叠

可以进行多选

::: demo

```html

<template>
  <div>
    <b-select style="width:300px" v-model="select" multiple>
      <b-option v-for="item in cityList" :key="item.value" :label="item.label" :value="item.value"></b-option>
    </b-select>
    <b-select style="width:300px;margin-left: 20px;" v-model="select" multiple collapse-tags>
      <b-option v-for="item in cityList" :key="item.value" :label="item.label" :value="item.value"></b-option>
    </b-select>
    <span>{{ select }}</span>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        cityList: [
          { value: 'beijing', label: '北京', },
          { value: 'nanjing', label: '南京', },
          { value: 'shanghai', label: '上海', },
          { value: 'xuzhou', label: '徐州', },
          { value: 'guangzhou', label: '广州', },
          { value: 'shenzhen', label: '深圳', },
        ],
        select: [],
      }
    },
  }
</script>
```

:::

### 前缀模式

可以设置下拉框前缀

::: demo

```html

<template>
  <div style="width:200px">
    <b-select v-model="selected">
      <template #prefix>
        <i class="b-iconfont b-icon-alert"></i>
      </template>
      <b-option value="beijing" label="北京"></b-option>
      <b-option value="shanghai" label="上海"></b-option>
      <b-option value="xuzhou" label="徐州"></b-option>
      <b-option value="nanjing" label="南京"></b-option>
    </b-select>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        selected: ''
      }
    },
  }
</script>
```

:::

### 创建新项

可以允许创建列表中不存在的条目，使用allow-create可以输入并创建，此时filterable必需为true，

::: demo

```html

<template>
  <b-row :gutter="20">
    <b-col :span="8">
      <b-select
        v-model="selected"
        multiple
        filterable
        allow-create
        default-first-option
        placeholder="请选择城市">
        <b-option v-for="item in cityList" :key="item.value" :label="item.label" :value="item.value"></b-option>
      </b-select>
    </b-col>
    <b-col :span="16">
      <div style="height: 32px;line-height: 32px;">{{selected}}</div>
    </b-col>
  </b-row>
</template>
<script>
  export default {
    data() {
      return {
        cityList: [
          { value: 'beijing', label: '北京', },
          { value: 'nanjing', label: '南京', },
          { value: 'shanghai', label: '上海', },
          { value: 'xuzhou', label: '徐州', },
          { value: 'guangzhou', label: '广州', },
          { value: 'shenzhen', label: '深圳', },
        ],
        selected: []
      }
    },
  }
</script>
```

:::

### 不同大小

四种默认大小

::: demo

```html

<template>
  <b-row :gutter="20">
    <b-col :span="6">
      <b-select v-model="select" clearable size="large">
        <b-option v-for="item in cityList" :key="item.value" :label="item.label" :value="item.value"></b-option>
      </b-select>
    </b-col>
    <b-col :span="6">
      <b-select v-model="select" clearable>
        <b-option v-for="item in cityList" :key="item.value" :label="item.label" :value="item.value"></b-option>
      </b-select>
    </b-col>
    <b-col :span="6">
      <b-select v-model="select" clearable size="small">
        <b-option v-for="item in cityList" :key="item.value" :label="item.label" :value="item.value"></b-option>
      </b-select>
    </b-col>
    <b-col :span="6">
      <b-select v-model="select" clearable size="mini">
        <b-option v-for="item in cityList" :key="item.value" :label="item.label" :value="item.value"></b-option>
      </b-select>
    </b-col>
  </b-row>
</template>
<script>
  export default {
    data() {
      return {
        cityList: [
          { value: 'beijing', label: '北京', },
          { value: 'nanjing', label: '南京', },
          { value: 'shanghai', label: '上海', },
          { value: 'xuzhou', label: '徐州', },
          { value: 'guangzhou', label: '广州', },
          { value: 'shenzhen', label: '深圳', },
        ],
        select: '',
      }
    },
  }
</script>
```

:::

### Select props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| v-model     | 指定选中项目的 modelValue 值，可以使用 v-model 双向绑定数据。   | String / Number / Boolean / Object |  —   |   无   |
| multiple | 多选|  Boolean |  —   |  false  |
| disabled | 是否禁用|  Boolean |  —   |  false  |
| clearable | 清空选项，只在单选时有效|  Boolean |  —   |  false  |
| filterable | 是否支持搜索 |  Boolean |  —   |  false  |
| size | 选择框大小 |  String  | large、small、default、mini  |  default  |
| placeholder | 选择框默认文字 |  String  |  —   |  请选择  |
| value-key | 作为 value 唯一标识的键名，绑定值为对象类型时必填|  string |  —   |  value  |
| no-match-text | 搜索条件无匹配时显示的文字，也可以使用#empty设置 |  String  |  —   |  暂无匹配数据  |
| no-data-tex | 选项为空时显示的文字 |  String  |  —   |  暂无数据  |
| allow-create | 是否允许创建没有的项，需配合 filterable 使用 |  Boolean  |  —   |  false  |
| filter-method | 自定义搜索方法 |  Function  |  —   |  —    |
| remote | 是否启用远程搜索 |  boolean  |  —   | false   |
| loading | 是否正在从远程获取数据 |  boolean  |  —   | false   |
| loading-text | 远程加载文字 |  boolean  |  —   | 加载中   |
| placement | 弹窗的展开方向 |  String  |  top、bottom、top-start、bottom-start、top-end、bottom-end  |  bottom-start  |
| append-to-body | 是否将弹层放置于 body 内 |  Boolean  |  —   |  false  |
| multiple-limit | 多选时最多允许选择几个|  Number  |  —   | —    |
| collapse-tags  | 多选时是否折叠标签 |  Boolean  |  —   | false   |
| popper-class  | 自定义弹出层类名 |  String  |  —   | —    |
| default-first-option  | 在输入框按下回车，选择第一个匹配项。需配合 filterable 或 remote 使用 |  Boolean  |  —   | false   |
| clear-icon  | 清空图标的类名 |  String  |  —   |  close-circle-fill  |

### Select events

| 事件名     | 说明    | 返回值      |
|---------- |-------- |---------- |
| change  | 选中的Option变化时触发，默认返回 value  | 当前选中项  |
| clear   | 点击清空按钮时触发  | 无  |
| visible-change   | 下拉框出现/隐藏时触发   | 出现则为 true，隐藏则为 false  |
| remove-tag  | 多选模式下移除tag时触发  | 移除的tag值 |
| blur  | 失去焦点触发 | (event: Event) |
| focus | 获取焦点触发  | (event: Event) |

### Select slot

| 名称      | 说明    |
|---------- |-------- |
| prefix      | 自定义 Select 内头部图标   |
| empty      | 无选项时的列表  |

### Option props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value     | 选项值，默认根据此属性值进行筛选，必填   | string/number  |  —   |   无   |
| label | 选项显示的内容，默认会读取 slot，无 slot 时，优先读取该 label 值，无 label 时，读取 value。|  String     |  —   |  —    |
| disabled | 是否禁用当前项|  Boolean     |  —   |  false    |

### OptionGroup props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| label | 分组组名|  String     |  —   |  —    |
| disabled | 该分组下所有选项置为禁用|  Boolean     |  —   |  false    |
