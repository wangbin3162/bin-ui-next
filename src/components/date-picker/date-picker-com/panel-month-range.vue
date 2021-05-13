<template>
  <div
    class="bin-picker-panel bin-date-range-picker"
    :class="[{
      'has-sidebar': $slots.sidebar || hasShortcuts
    }]"
  >
    <div class="bin-picker-panel__body-wrapper">
      <slot name="sidebar" class="bin-picker-panel__sidebar"></slot>
      <div v-if="hasShortcuts" class="bin-picker-panel__sidebar">
        <button
          v-for="(shortcut, key) in shortcuts"
          :key="key"
          type="button"
          class="bin-picker-panel__shortcut"
          @click="handleShortcutClick(shortcut)"
        >
          {{ shortcut.text }}
        </button>
      </div>
      <div class="bin-picker-panel__body">
        <div class="bin-picker-panel__content bin-date-range-picker__content is-left">
          <div class="bin-date-range-picker__header">
            <button
              type="button"
              class="bin-picker-panel__icon-btn bin-date-picker__prev-btn"
              @click="leftPrevYear"
            >
              <i class="b-iconfont b-icon-doubleleft"></i>
            </button>
            <button
              v-if="unlinkPanels"
              type="button"
              :disabled="!enableYearArrow"
              :class="{ 'is-disabled': !enableYearArrow }"
              class="bin-picker-panel__icon-btn bin-date-picker__next-btn"
              @click="leftNextYear"
            >
              <i class="b-iconfont b-icon-doubleright"></i>
            </button>
            <div>{{ leftLabel }}</div>
          </div>
          <div class="bin-date-range-picker-table__content">
            <month-table
              selection-mode="range"
              :date="leftDate"
              :min-date="minDate"
              :max-date="maxDate"
              :range-state="rangeState"
              :disabled-date="disabledDate"
              @changerange="handleChangeRange"
              @pick="handleRangePick"
              @select="onSelect"
            />
          </div>
        </div>
        <div class="bin-picker-panel__content bin-date-range-picker__content is-right">
          <div class="bin-date-range-picker__header">
            <button
              v-if="unlinkPanels"
              type="button"
              :disabled="!enableYearArrow"
              :class="{ 'is-disabled': !enableYearArrow }"
              class="bin-picker-panel__icon-btn bin-date-picker__prev-btn"
              @click="rightPrevYear"
            >
              <i class="b-iconfont b-icon-doubleleft"></i>
            </button>
            <button
              type="button"
              class="bin-picker-panel__icon-btn bin-date-picker__next-btn"
              @click="rightNextYear"
            >
              <i class="b-iconfont b-icon-doubleright"></i>
            </button>
            <div>{{ rightLabel }}</div>
          </div>
          <div class="bin-date-range-picker-table__content">
            <month-table
              selection-mode="range"
              :date="rightDate"
              :min-date="minDate"
              :max-date="maxDate"
              :range-state="rangeState"
              :disabled-date="disabledDate"
              @changerange="handleChangeRange"
              @pick="handleRangePick"
              @select="onSelect"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MonthTable from './basic-month-table.vue'
import dayjs from 'dayjs'
import { computed, ref, watch, inject } from 'vue'

export default {
  components: { MonthTable },
  props: {
    unlinkPanels: Boolean,
    parsedValue: {
      type: Array,
    },
  },
  emits: ['pick', 'set-picker-option'],
  setup(props, ctx) {
    const leftDate = ref(dayjs())
    const rightDate = ref(dayjs().add(1, 'year'))

    const hasShortcuts = computed(() => !!shortcuts.length)

    const handleShortcutClick = shortcut => {
      if (shortcut.value) {
        ctx.emit('pick', [dayjs(shortcut.value[0]), dayjs(shortcut.value[1])])
        return
      }
      if (shortcut.onClick) {
        shortcut.onClick(ctx)
      }
    }

    const leftPrevYear = () => {
      leftDate.value = leftDate.value.subtract(1, 'year')
      if (!props.unlinkPanels) {
        rightDate.value = rightDate.value.subtract(1, 'year')
      }
    }

    const rightNextYear = () => {
      if (!props.unlinkPanels) {
        leftDate.value = leftDate.value.add(1, 'year')
      }
      rightDate.value = rightDate.value.add(1, 'year')
    }

    const leftNextYear = () => {
      leftDate.value = leftDate.value.add(1, 'year')
    }

    const rightPrevYear = () => {
      rightDate.value = rightDate.value.subtract(1, 'year')
    }
    const leftLabel = computed(() => {
      return `${leftDate.value.year()} 年`
    })

    const rightLabel = computed(() => {
      return `${rightDate.value.year()} 年`
    })

    const leftYear = computed(() => {
      return leftDate.value.year()
    })

    const rightYear = computed(() => {
      return rightDate.value.year() === leftDate.value.year() ? leftDate.value.year() + 1 : rightDate.value.year()
    })

    const enableYearArrow = computed(() => {
      return props.unlinkPanels && rightYear.value > leftYear.value + 1
    })

    const minDate = ref(null)
    const maxDate = ref(null)

    const rangeState = ref({
      endDate: null,
      selecting: false,
    })

    const handleChangeRange = val => {
      rangeState.value = val
    }

    const handleRangePick = (val, close = true) => {
      // const defaultTime = props.defaultTime || []
      // const minDate_ = modifyWithTimeString(val.minDate, defaultTime[0])
      // const maxDate_ = modifyWithTimeString(val.maxDate, defaultTime[1])
      // todo
      const minDate_ = val.minDate
      const maxDate_ = val.maxDate
      if (maxDate.value === maxDate_ && minDate.value === minDate_) {
        return
      }
      maxDate.value = maxDate_
      minDate.value = minDate_

      if (!close) return
      handleConfirm()
    }

    const isValidValue = value => {
      return Array.isArray(value) &&
        value && value[0] && value[1] &&
        value[0].valueOf() <= value[1].valueOf()
    }

    const handleConfirm = (visible = false) => {
      if (isValidValue([minDate.value, maxDate.value])) {
        ctx.emit('pick', [minDate.value, maxDate.value], visible)
      }
    }

    const onSelect = selecting => {
      rangeState.value.selecting = selecting
      if (!selecting) {
        rangeState.value.endDate = null
      }
    }

    const formatToString = value => {
      return value.map(_ => _.format(format))
    }

    const getDefaultValue = () => {
      let start
      if (Array.isArray(defaultValue)) {
        const left = dayjs(defaultValue[0])
        let right = dayjs(defaultValue[1])
        if (!props.unlinkPanels) {
          right = left.add(1, 'year')
        }
        return [left, right]
      } else if (defaultValue) {
        start = dayjs(defaultValue)
      } else {
        start = dayjs()
      }
      return [start, start.add(1, 'year')]
    }

    ctx.emit('set-picker-option', ['formatToString', formatToString])
    const pickerBase = inject('EP_PICKER_BASE', {})
    const { shortcuts, disabledDate, format, defaultValue } = pickerBase.props

    watch(() => props.parsedValue, newVal => {
      if (newVal && newVal.length === 2) {
        minDate.value = newVal[0]
        maxDate.value = newVal[1]
        leftDate.value = minDate.value
        if (props.unlinkPanels && maxDate.value) {
          const minDateYear = minDate.value.year()
          const maxDateYear = maxDate.value.year()
          rightDate.value = minDateYear === maxDateYear
            ? maxDate.value.add(1, 'year')
            : maxDate.value
        } else {
          rightDate.value = leftDate.value.add(1, 'year')
        }
      } else {
        const defaultArr = getDefaultValue()
        leftDate.value = defaultArr[0]
        rightDate.value = defaultArr[1]
      }
    }, { immediate: true })

    return {
      shortcuts,
      disabledDate,
      onSelect,
      handleRangePick,
      rangeState,
      handleChangeRange,
      minDate,
      maxDate,
      enableYearArrow,
      leftLabel,
      rightLabel,
      leftNextYear,
      leftPrevYear,
      rightNextYear,
      rightPrevYear,
      leftDate,
      rightDate,
      hasShortcuts,
      handleShortcutClick,
    }
  },
}
</script>
