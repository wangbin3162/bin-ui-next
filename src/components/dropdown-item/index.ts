import { App } from 'vue'
import type { SFCWithInstall } from '../../utils/types'
import DropdownItem from '../dropdown/dropdown-item.vue'

DropdownItem.install = (app: App): void => {
  app.component(DropdownItem.name, DropdownItem)
}

// @ts-ignore
const _DropdownItem: SFCWithInstall<typeof DropdownItem> = DropdownItem

export default _DropdownItem
