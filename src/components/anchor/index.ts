import { App } from 'vue'
import type { SFCWithInstall } from '../../utils/types'
import Anchor from './anchor.vue'

Anchor.install = (app: App): void => {
  app.component(Anchor.name, Anchor)
}
// @ts-ignore
const _Anchor: SFCWithInstall<typeof Anchor> = Anchor

export default _Anchor
