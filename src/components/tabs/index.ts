import { App } from 'vue'
import type { SFCWithInstall } from '../../utils/types'
import Tabs from './tabs.vue'

Tabs.install = (app: App): void => {
  app.component(Tabs.name, Tabs)
}
// @ts-ignore
const _Tabs: SFCWithInstall<typeof Tabs> = Tabs

export default _Tabs
