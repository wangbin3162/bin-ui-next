import DatePicker from './date-picker'

DatePicker.install = app => {
  app.component(DatePicker.name, DatePicker)
}

export default DatePicker
