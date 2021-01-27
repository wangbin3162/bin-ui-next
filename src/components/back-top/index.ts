import { App } from 'vue'
import type { SFCWithInstall } from '../../utils/types'
import BackTop from './back-top.vue'

BackTop.install = (app: App): void => {
  app.component(BackTop.name, BackTop)
}
// @ts-ignore
const _BackTop: SFCWithInstall<typeof BackTop> = BackTop

export default _BackTop
