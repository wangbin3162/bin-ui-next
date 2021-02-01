import { App } from 'vue'
import type { SFCWithInstall } from '../../utils/types'
import Tooltip from './tooltip'

Tooltip.install = (app: App): void => {
  app.component(Tooltip.name, Tooltip)
}
// @ts-ignore
const _Tooltip: SFCWithInstall<typeof Tooltip> = Tooltip

export default _Tooltip
