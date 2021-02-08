import { App } from 'vue'
import type { SFCWithInstall } from '../../utils/types'
import Switch from './switch.vue'

Switch.install = (app: App): void => {
  app.component(Switch.name, Switch)
}
// @ts-ignore
const _Switch: SFCWithInstall<typeof Switch> = Switch

export default _Switch
