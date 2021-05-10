import Tooltip from './tooltip'

Tooltip.install = (app) => {
  app.component(Tooltip.name, Tooltip)
}

export default Tooltip
