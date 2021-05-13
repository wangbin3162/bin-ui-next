<template>
  <table class="bin-year-table" @click="handleYearTableClick">
    <tbody>
    <tr>
      <td class="available" :class="getCellStyle(startYear + 0)">
        <a class="cell">{{ startYear }}</a>
      </td>
      <td class="available" :class="getCellStyle(startYear + 1)">
        <a class="cell">{{ startYear + 1 }}</a>
      </td>
      <td class="available" :class="getCellStyle(startYear + 2)">
        <a class="cell">{{ startYear + 2 }}</a>
      </td>
      <td class="available" :class="getCellStyle(startYear + 3)">
        <a class="cell">{{ startYear + 3 }}</a>
      </td>
    </tr>
    <tr>
      <td class="available" :class="getCellStyle(startYear + 4)">
        <a class="cell">{{ startYear + 4 }}</a>
      </td>
      <td class="available" :class="getCellStyle(startYear + 5)">
        <a class="cell">{{ startYear + 5 }}</a>
      </td>
      <td class="available" :class="getCellStyle(startYear + 6)">
        <a class="cell">{{ startYear + 6 }}</a>
      </td>
      <td class="available" :class="getCellStyle(startYear + 7)">
        <a class="cell">{{ startYear + 7 }}</a>
      </td>
    </tr>
    <tr>
      <td class="available" :class="getCellStyle(startYear + 8)">
        <a class="cell">{{ startYear + 8 }}</a>
      </td>
      <td class="available" :class="getCellStyle(startYear + 9)">
        <a class="cell">{{ startYear + 9 }}</a>
      </td>
      <td></td>
      <td></td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import { hasClass } from '../../../utils/dom'
import { rangeArr } from '../../time-picker'
import { coerceTruthyValueToArray } from '../../../utils/util-helper'
import { computed } from 'vue'
import dayjs from 'dayjs'

const datesInYear = year => {
  const firstDay = dayjs(String(year)).startOf('year')
  const lastDay = firstDay.endOf('year')
  const numOfDays = lastDay.dayOfYear()
  return rangeArr(numOfDays).map(n => firstDay.add(n, 'day').toDate())
}

export default {
  props: {
    disabledDate: {
      type: Function,
    },
    parsedValue: {
      type: Object,
    },
    date: {
      type: Object,
    },
  },
  emits: ['pick'],
  setup(props, ctx) {
    const startYear = computed(() => {
      return Math.floor(props.date.year() / 10) * 10
    })
    const getCellStyle = year => {
      const style = {}
      const today = dayjs()

      style.disabled = props.disabledDate
        ? datesInYear(year).every(props.disabledDate)
        : false

      style.current = coerceTruthyValueToArray(props.parsedValue).findIndex(_ => _.year() === year) >= 0

      style.today = today.year() === year

      return style
    }

    const handleYearTableClick = event => {
      const target = event.target
      if (target.tagName === 'A') {
        if (hasClass(target.parentNode, 'disabled')) return
        const year = target.textContent || target.innerText
        ctx.emit('pick', Number(year))
      }
    }
    return {
      startYear,
      getCellStyle,
      handleYearTableClick,
    }
  },
}
</script>
