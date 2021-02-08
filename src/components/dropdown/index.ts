import { App } from 'vue'
import type { SFCWithInstall } from '../../utils/types'
import Dropdown from './dropdown.vue'

Dropdown.install = (app: App): void => {
  app.component(Dropdown.name, Dropdown)
}

// @ts-ignore
const _Dropdown: SFCWithInstall<typeof Dropdown> = Dropdown

export default _Dropdown
