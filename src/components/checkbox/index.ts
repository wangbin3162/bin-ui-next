import { App } from 'vue'
import type { SFCWithInstall } from '../../utils/types'
import Checkbox from './checkbox.vue'

Checkbox.install = (app: App): void => {
  app.component(Checkbox.name, Checkbox)
}

// @ts-ignore
const _Checkbox: SFCWithInstall<typeof Checkbox> = Checkbox

export default _Checkbox
