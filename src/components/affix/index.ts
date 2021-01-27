import { App } from 'vue'
import type { SFCWithInstall } from '../../utils/types'
import Affix from './affix.vue'

Affix.install = (app: App): void => {
  app.component(Affix.name, Affix)
}
// @ts-ignore
const _Affix: SFCWithInstall<typeof Affix> = Affix

export default _Affix
