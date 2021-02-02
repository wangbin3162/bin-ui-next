import { App } from 'vue'
import type { SFCWithInstall } from '../../utils/types'
import Popover from './src/index.vue'

Popover.install = (app: App): void => {
  app.component(Popover.name, Popover)
}

// @ts-ignore
const _Popover: SFCWithInstall<typeof Popover> = Popover

export default _Popover
