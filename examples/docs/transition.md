## 内置过渡动画

### 淡入淡出

提供 2种 淡入淡出效果`fade-in-linear` 和 `fade-in`

::: demo

```html

<template>
  <div class="demo-transition">
    <b-button @click="show1= !show1">查看效果</b-button>
    <div style="display: flex; margin-top: 20px; height: 100px;">
      <transition name="fade-in-linear">
        <div v-show="show1" class="transition-box">fade-in-linear</div>
      </transition>
      <transition name="fade-in">
        <div v-show="show1" class="transition-box">fade-in</div>
      </transition>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show1: true
      }
    }
  }
</script>
```

:::

### 左右平移

::: demo

```html

<template>
  <div class="demo-transition">
    <b-button @click="show1= !show1">查看效果</b-button>
    <div style="display: flex; justify-content:center;margin-top: 20px; height: 100px;">
      <transition name="move-left">
        <div v-show="show1" class="transition-box">move-left</div>
      </transition>
      <transition name="move-right">
        <div v-show="show1" class="transition-box">move-right</div>
      </transition>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show1: true
      }
    }
  }
</script>
```

:::

### 缩放

提供 4种 缩放效果 `zoom-in-center`，`zoom-in-top` ，`zoom-in` 和 `zoom-in-bottom`

::: demo

```html

<template>
  <div class="demo-transition">
    <b-button @click="show2= !show2">查看效果</b-button>
    <div style="display: flex; margin-top: 20px; height: 100px;">
      <transition name="zoom-in-center">
        <div v-show="show2" class="transition-box">zoom-in-center</div>
      </transition>
      <transition name="zoom-in-top">
        <div v-show="show2" class="transition-box">zoom-in-top</div>
      </transition>
      <transition name="zoom-in">
        <div v-show="show2" class="transition-box">zoom-in</div>
      </transition>
      <transition name="zoom-in-bottom">
        <div v-show="show2" class="transition-box">zoom-in-bottom</div>
      </transition>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        show2: true
      }
    }
  }
</script>
```

:::

### 移动渐变

提供 3种 特殊的移动渐变 `fade-transverse` ,`fade-scale` ,`fade-scale-move`

::: demo

```html

<template>
  <div class="demo-transition">
    <b-button @click="show3= !show3">查看效果</b-button>
    <div style="display: flex; margin-top: 20px; height: 100px;">
      <transition name="fade-transverse">
        <div v-show="show3" class="transition-box">fade-transverse</div>
      </transition>
      <transition name="fade-scale">
        <div v-show="show3" class="transition-box">fade-scale</div>
      </transition>
      <transition name="fade-scale-move">
        <div v-show="show3" class="transition-box">fade-scale-move</div>
      </transition>
      <transition name="fade-down">
        <div v-show="show3" class="transition-box">fade-down</div>
      </transition>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        show3: true
      }
    }
  }
</script>
```

:::

### 移动变换

同等位置的移动变化，会存在位置错位情况，这个动画内置了绝对定位的覆盖，可同时切换一组内容的动画类型

::: demo 默认执行动画名称fade-transverse，可自定义

```html
<template>
  <b-tabs v-model="activeTab" :data="tabs"></b-tabs>
  <div style="position:relative; overflow:hidden;margin:10px 0; width: 200px;height: 100px;">
    <b-move-transition>
      <div class="transition-box" v-if="activeTab==='tab1'">tab1</div>
      <div class="transition-box" v-else-if="activeTab==='tab2'">tab2</div>
      <div class="transition-box" v-else-if="activeTab==='tab3'">tab3</div>
      <div class="transition-box" v-else-if="activeTab==='tab4'">tab4</div>
    </b-move-transition>
  </div>
</template>
<script>
  import { ref } from 'vue'

  export default {
    setup() {
      const tabs = ref([
        { key: 'tab1', title: 'tab1'},
        { key: 'tab2', title: 'tab2' },
        { key: 'tab3', title: 'tab3' },
        { key: 'tab4', title: 'tab4' },
      ])
      const activeTab = ref('tab1')

      return {
        tabs,
        activeTab,
      }
    },
  }
</script>
```

:::

### 展开折叠

展开折叠也作为内部组件实现，因组件较为简单，只有默认插槽，因此不再专门编写文档说明

::: demo

```html

<template>
  <div class="demo-transition">
    <b-button @click="show4= !show4">查看效果</b-button>
    <div style="margin-top: 20px; height: 200px;">
      <b-collapse-transition>
        <div v-show="show4">
          <div class="transition-box">collapse-transition</div>
          <div class="transition-box">collapse-transition</div>
        </div>
      </b-collapse-transition>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        show4: true
      }
    }
  }
</script>
```

:::

