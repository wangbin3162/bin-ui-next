/* eslint-disable no-unused-vars */
import { App } from 'vue'
import { BinUIComponent, BinUIComponentSize } from './component'
import { _CollapseWrap } from './collapse-wrap'

export { BAffix } from './affix'
export { BAlert } from './alert'
export { BAnchor } from './anchor'
export { BAnchorLink } from './anchor-link'
export { BBackTop } from './back-top'
export { BBadge } from './badge'
export { BButton } from './button'
export { BButtonGroup } from './button-group'
export { BCard } from './card'
export { BCircle } from './circle'
export { BCol } from './col'
export { BCollapse } from './collapse'
export { BCollapsePanel } from './collapse-panel'
export { BCollapseWrap } from './collapse-wrap'
export { BDivider } from './divider'
export { BIcon } from './icon'
export { BLoading } from './loading'
export { BProgress } from './progress'
export { BRow } from './row'
export { BScrollbar } from './scrollbar'
export { BSplit } from './split'
export { BTag } from './tag'
export { BTimeline } from './timeline'
export { BTimelineItem } from './timeline-item'

export const version: string

export function install(app: App, ...options: any[]): any

/** component common definition */
export type Component = BinUIComponent

/** Component size definition for button, input, etc */
export type ComponentSize = BinUIComponentSize
