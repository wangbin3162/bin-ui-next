import { App } from 'vue'
import type { SFCWithInstall } from '../../utils/types'
import TimelineItem from '../timeline/timeline-item.vue'

TimelineItem.install = (app: App): void => {
  app.component(TimelineItem.name, TimelineItem)
}
// @ts-ignore
const _TimelineItem: SFCWithInstall<typeof TimelineItem> = TimelineItem

export default _TimelineItem
