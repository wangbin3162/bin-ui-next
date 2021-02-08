import { App } from 'vue'
import type { SFCWithInstall } from '../../utils/types'
import Submenu from '../menu/submenu.vue'

Submenu.install = (app: App): void => {
  app.component(Submenu.name, Submenu)
}

const _Submenu: SFCWithInstall<typeof Submenu> = Submenu

export default _Submenu
