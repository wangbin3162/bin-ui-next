<template>
  <table cellspacing="0" cellpadding="0" border="0" :style="styleObject">
    <colgroup>
      <col
        v-for="(column, index) in columns"
        :width="setCellWidth(column)"
        :key="'group-' + index"
      />
    </colgroup>
    <tbody :class="[prefixCls + '-tbody']" v-if="!isExpandModel">
      <!--v-for的内容需要保持只有一个元素，这样拖拽的时候才会更新正确的dom-->
      <template v-for="(row, index) in data" :key="rowKey ? row._rowKey : row._index">
        <table-tr
          :draggable="draggable"
          :row="row"
          :prefix-cls="prefixCls"
          :row-key="row._rowKey"
          :class="rowExpanded(row._index) ? { [prefixCls + '-expanded-hidden']: fixed } : null"
          @mouseenter.stop="handleMouseIn(row._index)"
          @mouseleave.stop="handleMouseOut(row._index)"
          @click="clickCurrentRow(row._index)"
          @dblclick.stop="dblclickCurrentRow(row._index)"
        >
          <template v-for="(column, colIndex) in columns">
            <td
              :class="alignCls(column, row)"
              :key="column._columnKey"
              v-if="showWithSpan(row, column, index, colIndex)"
              v-bind="getSpan(row, column, index, colIndex)"
            >
              <table-cell
                :fixed="fixed"
                :prefix-cls="prefixCls"
                :row="row"
                :key="column._columnKey"
                :column="column"
                :natural-index="index"
                :index="row._index"
                :checked="rowChecked(row._index)"
                :disabled="rowDisabled(row._index)"
                :expanded="rowExpanded(row._index)"
              ></table-cell>
            </td>
          </template>
        </table-tr>
      </template>
    </tbody>
    <!--需要展开行的模式无法拖拽排序-->
    <tbody :class="[prefixCls + '-tbody']" v-else>
      <template v-for="(row, index) in data" :key="rowKey ? row._rowKey : row._index">
        <table-tr
          :row="row"
          :prefix-cls="prefixCls"
          @mouseenter.stop="handleMouseIn(row._index)"
          @mouseleave.stop="handleMouseOut(row._index)"
          @click="clickCurrentRow(row._index)"
          @dblclick.stop="dblclickCurrentRow(row._index)"
        >
          <template v-for="(column, colIndex) in columns">
            <td
              :class="alignCls(column, row)"
              :key="column._columnKey"
              v-if="showWithSpan(row, column, index, colIndex)"
              v-bind="getSpan(row, column, index, colIndex)"
            >
              <table-cell
                :fixed="fixed"
                :prefix-cls="prefixCls"
                :row="row"
                :key="column._columnKey"
                :column="column"
                :natural-index="index"
                :index="row._index"
                :checked="rowChecked(row._index)"
                :disabled="rowDisabled(row._index)"
                :expanded="rowExpanded(row._index)"
              ></table-cell>
            </td>
          </template>
        </table-tr>
        <tr
          v-if="rowExpanded(row._index)"
          :class="{ [prefixCls + '-expanded-hidden']: fixed }"
          :key="row._index"
        >
          <td :colspan="columns.length" :class="prefixCls + '-expanded-cell'">
            <expand
              :key="rowKey ? row._rowKey : index"
              :row="row"
              :render="expandRender"
              :index="row._index"
            ></expand>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<script>
import TableTr from './table-tr.vue'
import TableCell from './cell.vue'
import Expand from './main/expand.js'
import { useMixin } from './main/mixin'
import { computed, inject } from 'vue'

export default {
  name: 'TableBody',
  components: { TableCell, Expand, TableTr },
  props: {
    prefixCls: String,
    styleObject: Object,
    columns: Array,
    data: Array, // rebuildData
    objData: Object,
    columnsWidth: Object,
    fixed: {
      type: [Boolean, String],
      default: false,
    },
    draggable: {
      type: Boolean,
      default: false,
    },
    rowKey: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const parentRef = inject('BTable', {})
    const { alignCls, setCellWidth } = useMixin(props)

    const expandRender = computed(() => {
      let render = function () {
        return ''
      }
      const _column = props.columns
      for (let i = 0; i < _column.length; i++) {
        const column = _column[i]
        if (column.type && column.type === 'expand') {
          if (column.render) render = column.render
        }
      }
      return render
    })
    const isExpandModel = computed(() => props.columns.some(v => v.type === 'expand'))

    function getSpan(row, column, rowIndex, columnIndex) {
      const fn = parentRef.props.mergeMethod
      if (typeof fn === 'function') {
        const result = fn({ row, column, rowIndex, columnIndex })
        let rowspan = 1
        let colspan = 1
        if (Array.isArray(result)) {
          rowspan = result[0]
          colspan = result[1]
        } else if (typeof result === 'object') {
          rowspan = result.rowspan
          colspan = result.colspan
        }
        return {
          rowspan,
          colspan,
        }
      } else {
        return {}
      }
    }

    function showWithSpan(row, column, rowIndex, columnIndex) {
      const result = getSpan(row, column, rowIndex, columnIndex)
      return !(
        ('rowspan' in result && result.rowspan === 0) ||
        ('colspan' in result && result.colspan === 0)
      )
    }

    function rowChecked(_index) {
      const row = props.objData[_index]
      return row && row._isChecked
    }

    function rowDisabled(_index) {
      const row = props.objData[_index]
      return row && row._isDisabled
    }

    function rowExpanded(_index) {
      const row = props.objData[_index]
      return row && row._isExpanded
    }

    function handleMouseIn(_index) {
      parentRef.handleMouseIn(_index)
    }

    function handleMouseOut(_index) {
      parentRef.handleMouseOut(_index)
    }

    function clickCurrentRow(_index) {
      parentRef.clickCurrentRow(_index)
    }

    function dblclickCurrentRow(_index) {
      parentRef.dblclickCurrentRow(_index)
    }

    return {
      setCellWidth,
      alignCls,
      expandRender,
      isExpandModel,
      getSpan,
      showWithSpan,
      rowChecked,
      rowDisabled,
      rowExpanded,
      handleMouseIn,
      handleMouseOut,
      clickCurrentRow,
      dblclickCurrentRow,
    }
  },
}
</script>
