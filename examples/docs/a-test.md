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

