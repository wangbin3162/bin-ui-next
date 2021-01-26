import { App } from 'vue'
import type { SFCWithInstall } from '../../utils/types'
import Col from './col.vue'

Col.install = (app: App): void => {
  app.component(Col.name, Col)
}
// @ts-ignore
const _Col: SFCWithInstall<typeof Col> = Col

export default _Col
