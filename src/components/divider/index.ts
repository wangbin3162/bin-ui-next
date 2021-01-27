import { App } from 'vue'
import type { SFCWithInstall } from '../../utils/types'
import Divider from './divider.vue'

Divider.install = (app: App): void => {
  app.component(Divider.name, Divider)
}
// @ts-ignore
const _Divider: SFCWithInstall<typeof Divider> = Divider

export default _Divider
