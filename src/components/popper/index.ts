import type { App } from 'vue'
import type { SFCWithInstall } from '../../utils/types'
import Popper from './src/index.vue'

Popper.install = (app: App): void => {
  app.component(Popper.name, Popper)
}

// @ts-ignore
const _Popper: SFCWithInstall<typeof Popper> = Popper

export default _Popper

export { default as defaultProps, Theme } from './src/use-popper/defaults'
export type { Placement, Options } from '@popperjs/core'
export type { TriggerType, IPopperOptions, PopperInstance } from './src/use-popper/defaults'
export { default as usePopper } from './src/use-popper'
export * from './src/renderers'
