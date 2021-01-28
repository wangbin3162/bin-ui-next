import { App } from 'vue'
import type { SFCWithInstall } from '../../utils/types'
import Split from './split.vue'

Split.install = (app: App): void => {
  app.component(Split.name, Split)
}
// @ts-ignore
const _Split: SFCWithInstall<typeof Split> = Split

export default _Split
