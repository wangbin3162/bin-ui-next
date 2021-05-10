import Popper from './src/index.vue'

Popper.install = (app) => {
  app.component(Popper.name, Popper)
}

export default Popper

export { default as defaultProps, Theme } from './src/use-popper/defaults'
export { default as usePopper } from './src/use-popper'
export * from './src/renderers'
