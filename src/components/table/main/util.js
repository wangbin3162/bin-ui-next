import { deepCopy } from '../../../utils/util'

const convertColumnOrder = (columns, fixedType) => {
  let list = []
  let other = []
  columns.forEach((col) => {
    if (col.fixed && col.fixed === fixedType) {
      list.push(col)
    } else {
      other.push(col)
    }
  })
  return list.concat(other)
}

export { convertColumnOrder }

// 转换时将tablehead设置为true，正常情况下为false，如table.vue
const getAllColumns = (cols, forTableHead = false) => {
  const columns = deepCopy(cols)
  const result = []
  columns.forEach((column) => {
    if (column.children) {
      if (forTableHead) result.push(column)
      result.push.apply(result, getAllColumns(column.children, forTableHead))
    } else {
      result.push(column)
    }
  })
  return result
}

export { getAllColumns }

const convertToRows = (columns, fixedType = false) => {
  const originColumns = fixedType ? fixedType === 'left' ? deepCopy(convertColumnOrder(columns, 'left')) : deepCopy(convertColumnOrder(columns, 'right')) : deepCopy(columns)
  let maxLevel = 1
  const traverse = (column, parent) => {
    if (parent) {
      column.level = parent.level + 1
      if (maxLevel < column.level) {
        maxLevel = column.level
      }
    }
    if (column.children) {
      let colSpan = 0
      column.children.forEach((subColumn) => {
        traverse(subColumn, column)
        colSpan += subColumn.colSpan
      })
      column.colSpan = colSpan
    } else {
      column.colSpan = 1
    }
  }

  originColumns.forEach((column) => {
    column.level = 1
    traverse(column)
  })

  const rows = []
  for (let i = 0; i < maxLevel; i++) {
    rows.push([])
  }

  const allColumns = getAllColumns(originColumns, true)

  allColumns.forEach((column) => {
    if (!column.children) {
      column.rowSpan = maxLevel - column.level + 1
    } else {
      column.rowSpan = 1
    }
    rows[column.level - 1].push(column)
  })

  return rows
}

export { convertToRows }

const getRandomStr = function(len = 32) {
  const $chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
  const maxPos = $chars.length
  let str = ''
  for (let i = 0; i < len; i++) {
    str += $chars.charAt(Math.floor(Math.random() * maxPos))
  }
  return str
}

export { getRandomStr }
