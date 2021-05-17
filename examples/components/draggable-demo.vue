<template>
  <div class="draggable-wrap">
    <div flex="box:mean">
      <div style="margin-right: 20px; width: 50%;">normal
        <div id="example1" class="list-group col">
          <template v-for="item in rebuildData" :key="item._rowKey">
            <div :row-key="item._rowKey" class="list-group-item">
              {{ item.name }}
            </div>
          </template>
        </div>
      </div>
      <div style="margin-right: 20px; width: 50%;">handle
        <div id="example2" class="list-group col">
          <div class="list-group-item"><i class="b-iconfont b-icon-drag handle"></i>Item 1</div>
          <div class="list-group-item"><i class="b-iconfont b-icon-drag handle"></i>Item 2</div>
          <div class="list-group-item"><i class="b-iconfont b-icon-drag handle"></i>Item 3</div>
          <div class="list-group-item"><i class="b-iconfont b-icon-drag handle"></i>Item 4</div>
          <div class="list-group-item"><i class="b-iconfont b-icon-drag handle"></i>Item 5</div>
          <div class="list-group-item"><i class="b-iconfont b-icon-drag handle"></i>Item 6</div>
        </div>
      </div>
    </div>
    <p>{{ rebuildData.map(i => ({ name: i.name })) }}</p>
    <br />
    <div>
      <a href="https://gitee.com/wangbin3162/bin-ui/blob/master/examples/components/draggable-demo.vue"
         target="_blank">示例代码</a>
    </div>
  </div>
</template>

<script>
import Sortable from 'sortablejs'
import { nextTick } from 'vue'

let rowKey = 1
export default {
  name: 'draggable-demo',
  data() {
    return {
      enabled: true,
      list: [
        { name: 'Item 1', id: 1 },
        { name: 'Item 2', id: 2 },
        { name: 'Item 3', id: 3 },
        { name: 'Item 4', id: 4 },
        { name: 'Item 5', id: 5 },
        { name: 'Item 6', id: 6 },
      ],
      rebuildData: [],
      dragging: false,
    }
  },
  mounted() {
    // Sortable.mount(new Swap())
    Sortable.create(document.getElementById('example1'), {
      animation: 150,
      ghostClass: 'blue-background-class',
      onEnd: ({ newIndex, oldIndex }) => {
        let newData = this.$deepCopy(this.list)
        const targetRow = newData.splice(oldIndex, 1)[0]
        newData.splice(newIndex, 0, targetRow)
        nextTick(() => {
          this.list = newData
        })
      },
    })
    Sortable.create(document.getElementById('example2'), {
      animation: 150,
      handle: '.handle',
      ghostClass: 'blue-background-class',
    })
  },
  watch: {
    list: {
      handler(val) {
        this.rebuildData = this.makeData()
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    makeData() {
      let data = this.$deepCopy(this.list)
      data.forEach((row, index) => {
        row._index = index
        row._rowKey = rowKey++
      })
      return data
    },
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
  .handle {
    cursor: grabbing;
    margin-right: 20px;
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
