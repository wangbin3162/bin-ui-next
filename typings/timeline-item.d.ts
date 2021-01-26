import { BinUIComponent } from './component'

/** TimelineItem Component */
interface _TimelineItem extends BinUIComponent {
  /** color */
  color: string

  /** top offset */
  dotTop: string
}

export const BTimelineItem: _TimelineItem
