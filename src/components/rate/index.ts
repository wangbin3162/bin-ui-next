import { App } from 'vue'
import type { SFCWithInstall } from '../../utils/types'
import Rate from './rate.vue'

Rate.install = (app: App): void => {
  app.component(Rate.name, Rate)
}
// @ts-ignore
const _Rate: SFCWithInstall<typeof Rate> = Rate

export default _Rate
