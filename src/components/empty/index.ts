import { App } from 'vue'
import type { SFCWithInstall } from '../../utils/types'
import Empty from './empty.vue'

Empty.install = (app: App): void => {
  app.component(Empty.name, Empty)
}
// @ts-ignore
const _Empty: SFCWithInstall<typeof Empty> = Empty

export default _Empty
