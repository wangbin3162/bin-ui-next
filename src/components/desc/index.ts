import { App } from 'vue'
import type { SFCWithInstall } from '../../utils/types'
import Desc from './desc.vue'

Desc.install = (app: App): void => {
  app.component(Desc.name, Desc)
}
// @ts-ignore
const _Desc: SFCWithInstall<typeof Desc> = Desc

export default _Desc
