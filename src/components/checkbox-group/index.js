import CheckboxGroup from '../checkbox/checkbox-group.vue'

CheckboxGroup.install = (app) => {
  app.component(CheckboxGroup.name, CheckboxGroup)
}

export default CheckboxGroup
