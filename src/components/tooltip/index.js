import Tooltip from './tooltip.vue'

Tooltip.install = (app) => {
  app.component(Tooltip.name, Tooltip)
}

export default Tooltip
