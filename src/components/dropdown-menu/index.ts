import { App } from 'vue'
import type { SFCWithInstall } from '../../utils/types'
import DropdownMenu from '../dropdown/dropdown-menu.vue'

DropdownMenu.install = (app: App): void => {
  app.component(DropdownMenu.name, DropdownMenu)
}

// @ts-ignore
const _DropdownMenu: SFCWithInstall<typeof DropdownMenu> = DropdownMenu

export default _DropdownMenu
