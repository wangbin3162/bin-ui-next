<template>
  <tr :class="rowClasses(row._index)">
    <slot></slot>
  </tr>
</template>
<script>
import { inject } from 'vue'

export default {
  props: {
    row: Object,
    prefixCls: String,
    draggable: Boolean,
  },
  setup(props) {
    const parentRef = inject('BTable', {})

    function rowClsName(_index) {
      return parentRef.props.rowClassName(parentRef.objData.value[_index], _index)
    }

    function rowClasses(_index) {
      const obj = parentRef.objData.value
      return [
        `${props.prefixCls}-row`,
        rowClsName(_index),
        {
          [`${props.prefixCls}-row-highlight`]: obj[_index] && obj[_index]._isHighlight,
          [`${props.prefixCls}-row-hover`]: obj[_index] && obj[_index]._isHover,
        },
      ]
    }

    return {
      rowClasses,
    }
  },
}
</script>
