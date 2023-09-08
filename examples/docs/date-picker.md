## Date Picker 日期选择器

可以选择日期的picker

### 基础用法

设置type 为 date 或 daterange 分别显示选择单日和选择范围类型。

设置属性 placement 可以更改选择器出现的方向

::: demo

```html

<template>
  <div flex="box:mean" style="width: 600px;">
    <div style="padding:0 10px;">
      <div class="demonstration">基础</div>
      <b-date-picker v-model="value1" type="date" placeholder="选择日期"></b-date-picker>
    </div>
    <div style="padding:0 10px;">
      <div class="demonstration">带快捷选项</div>
      <b-date-picker
        v-model="value2"
        type="date"
        placeholder="选择日期"
        :disabled-date="disabledDate"
        :shortcuts="shortcuts"
      >
      </b-date-picker>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        disabledDate(time) {
          return time.getTime() > Date.now()
        },
        shortcuts: [
          {
            text: '今日',
            value: new Date(),
          },
          {
            text: '昨天',
            value: (() => {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24)
              return date
            })(),
          },
          {
            text: '一周前',
            value: (() => {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
              return date
            })(),
          }],
        value1: '',
        value2: '',
      };
    }
  };
</script>
```

:::

### 不同选择

可以选择不同的格式选择

::: demo

```html

<template>
  <div flex="box:mean">
    <div style="padding:0 10px;">
      <div class="demonstration">年</div>
      <b-date-picker
        v-model="value1"
        type="year"
        placeholder="选择年">
      </b-date-picker>
    </div>
    <div style="padding:0 10px;">
      <div class="demonstration">周</div>
      <b-date-picker
        v-model="value2"
        type="week"
        format="gggg 第 ww 周"
        placeholder="选择周">
      </b-date-picker>
    </div>
    <div style="padding:0 10px;">
      <div class="demonstration">月</div>
      <b-date-picker
        v-model="value3"
        type="month"
        placeholder="选择月">
      </b-date-picker>
    </div>
    <div style="padding:0 10px;">
      <div class="demonstration">多个日期</div>
      <b-date-picker
        v-model="value4"
        type="dates"
        placeholder="选择一个或多个日期">
      </b-date-picker>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value1: '',
        value2: '',
        value3: '',
        value4: ''
      };
    }
  };
</script>
```

:::

### 日期范围

设置type 为 daterange 设置范围类型。

::: demo

```html

<template>
  <div flex="box:mean" style="width: 600px;">
    <div style="padding:0 10px;">
      <div class="demonstration">基础</div>
      <b-date-picker
        type="daterange"
        v-model="value1"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      ></b-date-picker>
    </div>
    <div style="padding:0 10px;">
      <div class="demonstration">带快捷选项</div>
      <b-date-picker
        v-model="value2"
        type="daterange"
        unlink-panels
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :shortcuts="shortcuts"
      >
      </b-date-picker>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        shortcuts: [{
          text: '最近一周',
          value: (() => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            return [start, end]
          })(),
        }, {
          text: '最近一个月',
          value: (() => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            return [start, end]
          })(),
        }, {
          text: '最近三个月',
          value: (() => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            return [start, end]
          })(),
        }],
        value1: '',
        value2: ''
      };
    }
  };
</script>
```

:::

### 月份范围

可在一个选择器中便捷地选择一个月份范围

::: demo

```html

<template>
  <div flex="box:mean" style="width: 600px;">
    <div style="padding:0 10px;">
      <div class="demonstration">基础</div>
      <b-date-picker
        v-model="value1"
        type="monthrange"
        range-separator="至"
        start-placeholder="开始月份"
        end-placeholder="结束月份"
      ></b-date-picker>
    </div>
    <div style="padding:0 10px;">
      <div class="demonstration">带快捷选项</div>
      <b-date-picker
        v-model="value2"
        type="monthrange"
        unlink-panels
        range-separator="至"
        start-placeholder="开始月份"
        end-placeholder="结束月份"
        :shortcuts="shortcuts"
      >
      </b-date-picker>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        shortcuts: [{
          text: '本月',
          value: [new Date(), new Date()],
        }, {
          text: '今年至今',
          value: (() => {
            const end = new Date()
            const start = new Date(new Date().getFullYear(), 0)
            return [start, end]
          })(),
        }, {
          text: '最近六个月',
          value: (() => {
            const end = new Date()
            const start = new Date()
            start.setMonth(start.getMonth() - 6)
            return [start, end]
          })(),
        }],
        value1: '',
        value2: ''
      };
    }
  };
</script>
```

:::

### 默认值

如果用户没有选择日期，那默认展示当前日的月份。你可以使用 default-value 来设置成其他的日期

::: demo

```html

<template>
  <div flex="box:mean" style="width: 600px;">
    <div style="padding:0 10px;">
      <div class="demonstration">date</div>
      <b-date-picker
        v-model="value1"
        type="date"
        placeholder="Pick a date"
        :default-value="new Date(2020, 4, 27)">
      </b-date-picker>
    </div>
    <div style="padding:0 10px;">
      <div class="demonstration">daterange</div>
      <b-date-picker
        v-model="value2"
        type="daterange"
        start-placeholder="Start Date"
        end-placeholder="End Date"
        :default-value="[new Date(2020, 1, 1), new Date(2020, 10, 1)]">
      </b-date-picker>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value1: '',
        value2: []
      };
    }
  };
</script>
```

:::


### 禁用状态


::: demo

```html

<template>
  <div flex="box:mean" style="width: 600px;">
    <div style="padding:0 10px;">
      <div class="demonstration">date</div>
      <b-date-picker
        v-model="value1"
        type="date"
        placeholder="Pick a date"
        disabled
        :default-value="new Date(2020, 4, 27)">
      </b-date-picker>
    </div>
    <div style="padding:0 10px;">
      <div class="demonstration">daterange</div>
      <b-date-picker
        v-model="value2"
        type="daterange"
        start-placeholder="Start Date"
        end-placeholder="End Date"
        disabled
        :default-value="[new Date(2020, 1, 1), new Date(2020, 10, 1)]">
      </b-date-picker>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value1: '',
        value2: []
      };
    }
  };
</script>
```

:::

### 日期格式

使用format指定输入框的格式。 默认情况下，组件接受并返回Date对象。可以参考dayjs支持的format参数

::: demo

```html

<template>
  <div flex="cross:center">
    <div style="padding:0 10px;width: 300px;">
      <b-date-picker
        v-model="value1"
        type="date"
        format="YYYY 年 MM 月 DD 日"
        placeholder="选择日期">
      </b-date-picker>
    </div>
    <div>值：{{value1}}</div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value1: ''
      };
    }
  };
</script>
```

:::

### 不同尺寸

和其他控件一样，拥有四种尺寸

::: demo

```html

<template>
  <div flex="cross:center box:mean">
    <div style="padding:0 10px;">
      <b-date-picker
        v-model="value1"
        type="date"
        size="large"
        placeholder="选择日期">
      </b-date-picker>
    </div>
    <div style="padding:0 10px;">
      <b-date-picker
        v-model="value1"
        type="date"
        placeholder="选择日期">
      </b-date-picker>
    </div>
    <div style="padding:0 10px;">
      <b-date-picker
        v-model="value1"
        size="small"
        type="date"
        placeholder="选择日期">
      </b-date-picker>
    </div>
    <div style="padding:0 10px;">
      <b-date-picker
        v-model="value1"
        size="mini"
        type="date"
        placeholder="选择日期">
      </b-date-picker>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value1: ''
      };
    }
  };
</script>
```

:::

### 日期时间
可以设置日期时间同时选择

::: demo

```html

<template>
  <div flex="cross:center box:mean">
    <div style="padding:0 10px;">
      <div class="demonstration">基础</div>
      <b-date-picker v-model="value1" type="datetime" placeholder="选择日期时间"></b-date-picker>
    </div>
    <div style="padding:0 10px;">
      <div class="demonstration">带快捷选项</div>
      <b-date-picker
        v-model="value2"
        type="datetime"
        placeholder="选择日期时间"
        :shortcuts="shortcuts"
      >
      </b-date-picker>
    </div>
    <div style="padding:0 10px;">
      <div class="demonstration">默认时间</div>
      <b-date-picker
        v-model="value3"
        type="datetime"
        placeholder="选择日期时间"
        :default-time="new Date(2000, 1, 1, 12, 0, 0)"
      >
      </b-date-picker>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        shortcuts: [
          {
            text: '今日',
            value: new Date(),
          },
          {
            text: '昨天',
            value: (() => {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24)
              return date
            })(),
          },
          {
            text: '一周前',
            value: (() => {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
              return date
            })(),
          }],
        value1: '',
        value2: '',
        value3: '',
      };
    }
  };
</script>
```

:::

### 日期时间范围

日期时间范围设置

::: demo

```html

<template>
  <div flex="cross:center box:mean" style="width: 800px;">
    <div style="padding:0 10px;">
      <div class="demonstration">基础</div>
      <b-date-picker
        v-model="value1"
        type="datetimerange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      ></b-date-picker>
    </div>
    <div style="padding:0 10px;">
      <div class="demonstration">带快捷选项</div>
      <b-date-picker
        v-model="value2"
        type="datetimerange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :shortcuts="shortcuts"
      ></b-date-picker>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        shortcuts: [{
          text: '最近一周',
          value: (() => {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            return [start, end]
          })()
        }, {
          text: '最近一个月',
          value: (() => {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            return [start, end]
          })()
        }, {
          text: '最近三个月',
          value: (() => {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            return [start, end]
          })()
        }],
        value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
        value2: ''
      };
    }
  };
</script>
```

:::

### 默认的起始结束时间

默认的起始结束时间

::: demo

```html

<template>
  <div flex="cross:center box:mean" style="width: 800px;">
    <div style="padding:0 10px;">
      <div class="demonstration">起始日期时刻为 12:00:00</div>
      <b-date-picker
        v-model="value1"
        type="datetimerange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :default-time="[new Date(2021, 1, 1, 12, 0, 0),]"
      ></b-date-picker>
    </div>
    <div style="padding:0 10px;">
      <div class="demonstration">起始日期时刻为 12:00:00，结束日期时刻为 08:00:00</div>
      <b-date-picker
        v-model="value2"
        type="datetimerange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :default-time="[new Date(2021, 1, 1, 12, 0, 0),new Date(2021, 2, 1, 8, 0, 0) ]"
      ></b-date-picker>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: '',
        value2: ''
      };
    }
  };
</script>
```

:::


### Props
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value / v-model | 绑定值 | date(DatePicker) / array(DateRangePicker) | — | — |
| readonly | 完全只读 | boolean | — | false |
| disabled | 禁用 | boolean | — | false |
| editable | 文本框可输入 | boolean | — | true |
| clearable | 是否显示清除按钮 | boolean | — | true |
| size   | 输入框尺寸     | string          | large/medium/small/mini  | large |
| placeholder | 非范围选择时的占位内容 | string | — | — |
| start-placeholder | 范围选择时开始日期的占位内容 | string | — | — |
| end-placeholder | 范围选择时结束日期的占位内容 | string | — | — |
| type | 显示类型 | string | year/month/date/dates/ week/datetime/datetimerange/ daterange/monthrange | date |
| format | 显示在输入框中的格式 | string | YYYY MM DD hh mm ss | YYYY-MM-DD |
| popper-class | DatePicker 下拉框的类名 | string | — | — |
| range-separator | 选择范围时的分隔符 | string | — | '-' |
| default-value | 可选，选择器打开时默认显示的时间 | Date | 可被`new Date()`解析 | — |
| default-time | 范围选择时选中日期所使用的当日内具体时刻 | Date[] | 数组，长度为 2，第一项指定开始日期的时刻，第二项指定结束日期的时刻，不指定会使用时刻 `00:00:00` | — |
| unlink-panels | 在范围选择器里取消两个日期面板之间的联动 | boolean | — | false |
| prefix-icon | 自定义头部图标的类名 | string | — | — |
| clear-icon | 自定义清空图标的类名 | string | — | — |
| validate-event | 输入时是否触发表单的校验 | boolean | - | true |
| shortcuts | 设置快捷选项，需要传入数组对象 | object[{ text: string, value: Date }] | — | — |
| disabledDate | 设置禁用状态，参数为当前日期，要求返回 Boolean | Function | — | — |

### Events
| 事件名称      | 说明    | 回调参数      |
|---------|--------|---------|
| change | 用户确认选定的值时触发 | 组件绑定值 |
| blur | 当 input 失去焦点时触发 | 组件实例 |
| focus | 当 input 获得焦点时触发 | 组件实例 |

### Methods
| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| focus | 使 input 获取焦点 | — |
