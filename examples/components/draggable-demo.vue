<template>
  <div class="draggable-wrap">
    <div flex="box:mean">
      <div style="margin-right: 20px; width: 50%">
        normal
        <div ref="list1Ref" class="list-group col">
          <div v-for="(item, index) in list1" :key="index" class="list-group-item">
            {{ item.name }}
          </div>
        </div>
      </div>
      <div style="margin-right: 20px; width: 50%">
        handle
        <div ref="list2Ref" class="list-group col">
          <div v-for="(item, index) in list2" :key="index" class="list-group-item">
            <i class="b-iconfont b-icon-drag drag"></i>
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
    <p>list1: {{ list1.map(i => i.id) }}</p>
    <p>list2: {{ list2.map(i => i.id) }}</p>
    <br />
    <div>
      <a
        href="https://github.com/wangbin3162/bin-ui/blob/master/examples/components/draggable-demo.vue"
        target="_blank"
      >
        示例代码
      </a>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { useSortable } from '../../src/hooks'

export default {
  name: 'draggable-demo',
  setup() {
    const list1 = ref([
      { name: 'Item 1', id: 1 },
      { name: 'Item 2', id: 2 },
      { name: 'Item 3', id: 3 },
      { name: 'Item 4', id: 4 },
      { name: 'Item 5', id: 5 },
      { name: 'Item 6', id: 6 },
    ])
    const list2 = ref([
      { name: 'Item 1', id: 1 },
      { name: 'Item 2', id: 2 },
      { name: 'Item 3', id: 3 },
      { name: 'Item 4', id: 4 },
      { name: 'Item 5', id: 5 },
      { name: 'Item 6', id: 6 },
    ])
    const { listRef: list1Ref } = useSortable(list1, null, { handle: '.list-group-item' })
    const { listRef: list2Ref } = useSortable(list2)

    return {
      list1,
      list2,
      list1Ref,
      list2Ref,
    }
  },
}
</script>

<style scoped lang="stylus">
.draggable-wrap {
  border: 1px solid #eeeeee;
  padding: 24px;
  margin-top: 24px;
}

.list-group {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  &.col {
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -ms-flex-positive: 1;
    flex-grow: 1;
    max-width: 100%;
  }
}
.list-group-item {
  position: relative;
  display: block;
  padding: 0 1.25rem;
  line-height: 45px;
  height: 45px;
  margin-bottom: -1px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, .125);
  .drag {
    cursor: grabbing;
    margin-right: 20px;
    font-size: 18px;
  }
}
.blue-background-class {
  background: #86c2ff;
}
.ghost {
  opacity: 0.5;
  background: #a7e3f3;
}
</style>
