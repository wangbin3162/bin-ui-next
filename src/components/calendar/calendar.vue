<template>
  <div class="bin-calendar" :class="{'card':mini}">
    <div class="bin-calendar-header">
      <template v-if="mini">
        <span>{{ headerTitle }}</span>
        <b-button-group>
          <b-button size="mini" @click="handlePrevMonth" icon="doubleleft"></b-button>
          <b-button size="mini" @click="handleToday">今天</b-button>
          <b-button size="mini" @click="handleNextMonth" icon="doubleright"></b-button>
        </b-button-group>
      </template>
      <template v-else>
        <div class="bin-calendar-header-title">
          {{ headerTitle }}
        </div>
        <b-button-group>
          <b-button size="mini" @click="handlePrevMonth">上个月</b-button>
          <b-button size="mini" @click="handleToday">今天</b-button>
          <b-button size="mini" @click="handleNextMonth">下个月</b-button>
        </b-button-group>
      </template>
    </div>
    <ul class="bin-calendar-week">
      <li v-for="(item, index) in ['一', '二', '三', '四', '五', '六', '日']" :key="index" class="bin-calendar-week-item">
        {{ item }}
      </li>
    </ul>
    <ul class="bin-calendar-body" :style="bodyStyle">
      <li v-for="(item, index) in visibleCalendar" :key="index"
          class="bin-calendar-date-view" :style="dateViewStyle"
          :class="[item.monthFlag,{'is-current-day': item.isCurrentDay},{'is-selected': item.selected}]"
          @click="handleSelectDay(item)">
          <span>
              {{ item.day }}
          </span>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue'
import BButton from '../button'
import BButtonGroup from '../button-group'

function getNewDate(date) {
  let year = date.getFullYear()
  let month = date.getMonth()
  let day = date.getDate()
  return { year, month, day }
}

// 根据年月日转换成日期类型
function getDate(year, month, day) {
  return new Date(year, month, day)
}

function isPrevOrNextMonth(date, time) {
  let newDate = getNewDate(getDate(time.year, time.month, 1))
  let currentYear = newDate.year
  let currentMonth = newDate.month
  let { year, month } = getNewDate(date)
  if (currentYear === year && currentMonth === month) return null
  if (currentMonth === 0 && month === 11) return 'prev'
  if (currentMonth === 11 && month === 0) return 'next'
  if (currentMonth > month) return 'prev'
  if (currentMonth < month) return 'next'
  return null
}

function isCurrent(date) {
  let newDate = getNewDate(new Date())
  let currentYear = newDate.year
  let currentMonth = newDate.month
  let currentDay = newDate.day
  let { year, month, day } = getNewDate(date)
  return currentYear === year && currentMonth === month && currentDay === day
}

export default {
  name: 'BCalendar',
  components: { BButton, BButtonGroup },
  props: {
    gridHeight: String,
    textAlign: String,
    mini: Boolean,
    bodyStyle: Object,
    dayStyle: Object,
  },
  emits: ['prev', 'next', 'today', 'selected', 'select-day'],
  setup(props, { emit }) {
    let { year, month, day } = getNewDate(new Date())
    let time = ref({ year, month, day })
    let visibleCalendar = ref([])


    const initVisibleCalendar = () => {
      let calendarArr = []
      let { year, month } = getNewDate(getDate(time.value.year, time.value.month, 1))
      let newDate = getNewDate(new Date())

      let currentYear = newDate.year
      let currentMonth = newDate.month
      // 获取当月的第一天
      let currentFirstDay = getDate(year, month, 1)
      // 获取第一天是星期几
      let weekDay = currentFirstDay.getDay()
      if (weekDay === 0) {
        weekDay = 7
      }
      let isCurrentMonth = currentYear === year && currentMonth === month
      let startTime = currentFirstDay.getTime() - (weekDay - 1) * 24 * 60 * 60 * 1000
      for (let i = 0; i < 42; i++) {
        const tempDate = new Date(startTime + i * 24 * 60 * 60 * 1000)
        let monthFlag = isPrevOrNextMonth(tempDate, time.value)
        let isCurrentDay = isCurrent(tempDate)
        let yearTemp = year
        let monthTemp = monthFlag === 'prev' ? month : (monthFlag === 'next') ? month + 2 : month + 1
        if (monthTemp === 0) {
          monthTemp = 12
          yearTemp -= 1
        }
        if (monthTemp === 13) {
          monthTemp = 1
          yearTemp += 1
        }
        const day = {
          date: tempDate,
          year: yearTemp,
          month: monthTemp,
          day: tempDate.getDate(),
          monthFlag: monthFlag,
          isCurrentDay: isCurrentDay,
          selected: isCurrentMonth ? isCurrentDay : i === weekDay - 1,
        }
        calendarArr.push(day)
        if (day.selected) {
          emit('select-day', day)
        }
      }
      visibleCalendar.value = calendarArr
    }

    // 上一个月
    const handlePrevMonth = () => {
      let prevMonth = getDate(time.value.year, time.value.month, 1)
      prevMonth.setMonth(prevMonth.getMonth() - 1)
      time.value = { ...getNewDate(prevMonth) }
      initVisibleCalendar()
      emit('prev')
    }
    // 下一个月
    const handleNextMonth = () => {
      let nextMonth = getDate(time.value.year, time.value.month, 1)
      nextMonth.setMonth(nextMonth.getMonth() + 1)
      time.value = { ...getNewDate(nextMonth) }
      initVisibleCalendar()
      emit('next')
    }
    // 点击回到今天
    const handleToday = () => {
      time.value = getNewDate(new Date())
      initVisibleCalendar()
      emit('today')
    }
    // 点击某一天
    const handleSelectDay = (item) => {
      if (!item.monthFlag) {
        setSelected(item)
        return
      }
      if (item.monthFlag === 'prev') {
        handlePrevMonth()
        // 获取新数组的当前天
        let select = visibleCalendar.value.find(day => {
          return day.year === item.year && day.month === item.month && day.day === item.day
        })
        select && setSelected(select)
      }
      if (item.monthFlag === 'next') {
        handleNextMonth()
        // 获取新数组的当前天
        let select = visibleCalendar.value.find(day => {
          return day.year === item.year && day.month === item.month && day.day === item.day
        })
        select && setSelected(select)
      }
    }
    const setSelected = (day) => {
      visibleCalendar.value.map(x => x.selected = false)
      day.selected = true
      emit('selected', day)
    }
    initVisibleCalendar()
    return {
      time,
      visibleCalendar,
      handleToday,
      handlePrevMonth,
      handleSelectDay,
      handleNextMonth,
    }
  },
  computed: {
    dateViewStyle() {
      if (this.dayStyle) {
        return this.dayStyle
      }
      return {
        height: this.gridHeight,
        textAlign: this.textAlign,
      }
    },
    headerTitle() {
      return this.time ? `${this.time.year} 年 ${this.time.month + 1} 月` : ''
    },
  },
}
</script>
