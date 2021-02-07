import { App } from 'vue'
import type { SFCWithInstall } from '../../utils/types'
import Drawer from './drawer.vue'

Drawer.install = (app: App): void => {
  app.component(Drawer.name, Drawer)
}
// @ts-ignore
const _Drawer: SFCWithInstall<typeof Drawer> = Drawer

export default _Drawer
