import { App } from 'vue'
import type { SFCWithInstall } from '../../utils/types'
import Scrollbar from './scrollbar.vue'

Scrollbar.install = (app: App): void => {
  app.component(Scrollbar.name, Scrollbar)
}
// @ts-ignore
const _Scrollbar: SFCWithInstall<typeof Scrollbar> = Scrollbar

export default _Scrollbar
