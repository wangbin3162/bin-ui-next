export function useMixin(props) {
  function alignCls(column, row = {}) {
    let cellClassName = ''
    if (row.cellClassName && column.key && row.cellClassName[column.key]) {
      cellClassName = row.cellClassName[column.key]
    }
    return [
      {
        [`${cellClassName}`]: cellClassName, // cell className
        [`${column.className}`]: column.className, // column className
        [`${props.prefixCls}-column-${column.align}`]: column.align,
        [`${props.prefixCls}-hidden`]: (props.fixed === 'left' && column.fixed !== 'left') ||
        (props.fixed === 'right' && column.fixed !== 'right') ||
        (!props.fixed && column.fixed && (column.fixed === 'left' || column.fixed === 'right')),
      },
    ]
  }

  function isPopperShow(column) {
    return column.filters && ((!props.fixed && !column.fixed) || (props.fixed === 'left' && column.fixed === 'left') || (props.fixed === 'right' && column.fixed === 'right'))
  }

  function setCellWidth(column) {
    let width = ''
    if (column.width) {
      width = column.width
    } else if (props.columnsWidth[column._index]) {
      width = props.columnsWidth[column._index].width
    }
    if (width === '0') width = ''
    return width
  }

  return {
    alignCls,
    isPopperShow,
    setCellWidth
  }
}
