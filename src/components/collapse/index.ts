import { App } from 'vue'
import type { SFCWithInstall } from '../../utils/types'
import Collapse from './collapse.vue'

Collapse.install = (app: App): void => {
  app.component(Collapse.name, Collapse)
}

// @ts-ignore
const _Collapse: SFCWithInstall<typeof Collapse> = Collapse

export default _Collapse
