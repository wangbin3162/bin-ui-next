import { App } from 'vue'
import type { SFCWithInstall } from '../../utils/types'
import Breadcrumb from './breadcrumb.vue'

Breadcrumb.install = (app: App): void => {
  app.component(Breadcrumb.name, Breadcrumb)
}
// @ts-ignore
const _Breadcrumb: SFCWithInstall<typeof Breadcrumb> = Breadcrumb

export default _Breadcrumb
