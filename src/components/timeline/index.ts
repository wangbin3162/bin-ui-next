import { App } from 'vue'
import type { SFCWithInstall } from '../../utils/types'
import Timeline from './timeline.vue'

Timeline.install = (app: App): void => {
  app.component(Timeline.name, Timeline)
}
// @ts-ignore
const _Timeline: SFCWithInstall<typeof Timeline> = Timeline

export default _Timeline
