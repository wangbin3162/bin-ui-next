import { App } from 'vue'
import type { SFCWithInstall } from '../../utils/types'
import MenuItem from '../menu/menu-item.vue'

MenuItem.install = (app: App): void => {
  app.component(MenuItem.name, MenuItem)
}

const _MenuItem: SFCWithInstall<typeof MenuItem> = MenuItem

export default _MenuItem

