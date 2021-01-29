import { App } from 'vue'
import type { SFCWithInstall } from '../../utils/types'
import Progress from './progress.vue'

Progress.install = (app: App): void => {
  app.component(Progress.name, Progress)
}
// @ts-ignore
const _Progress: SFCWithInstall<typeof Progress> = Progress

export default _Progress
