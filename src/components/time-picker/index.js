import TimePicker from './time-picker'
import CommonPicker from './common/picker.vue'
import TimePickPanel from './time-picker-com/panel-time-pick.vue'

export * from './common/date-utils'
export * from './common/constant'
export * from './common/props'

TimePicker.install = app => {
  app.component(TimePicker.name, TimePicker)
}

export { CommonPicker, TimePickPanel }
export default TimePicker
