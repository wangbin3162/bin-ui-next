import { BinUIComponent } from './component'

/** Timeline Component */
interface _Timeline extends BinUIComponent {
  /** is last node */
  pending: boolean
}

export const BTimeline: _Timeline
