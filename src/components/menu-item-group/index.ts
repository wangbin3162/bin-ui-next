import { App } from 'vue'
import type { SFCWithInstall } from '../../utils/types'
import MenuItemGroup from '../menu/menu-item-group.vue'

MenuItemGroup.install = (app: App): void => {
  app.component(MenuItemGroup.name, MenuItemGroup)
}

const _MenuItemGroup: SFCWithInstall<typeof MenuItemGroup> = MenuItemGroup

export default _MenuItemGroup

