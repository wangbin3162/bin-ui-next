import Select from './select.vue'
import Option from './option.vue'

Select.install = (app) => {
  app.component(Select.name, Select)
}

export { Option }
export default Select
