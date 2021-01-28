/* eslint-disable no-unused-vars */
import { App } from 'vue'
import { BinUIComponent, BinUIComponentSize } from './component'

export { BAffix } from './affix'
export { BAlert } from './alert'
export { BAnchor } from './anchor'
export { BAnchorLink } from './anchor-link'
export { BBackTop } from './back-top'
export { BButton } from './button'
export { BButtonGroup } from './button-group'
export { BCard } from './card'
export { BCol } from './col'
export { BDivider } from './divider'
export { BIcon } from './icon'
export { BRow } from './row'
export { BScrollbar } from './scrollbar'
export { BTimeline } from './timeline'
export { BTimelineItem } from './timeline-item'

export const version: string

export function install(app: App, ...options: any[]): any

/** component common definition */
export type Component = BinUIComponent

/** Component size definition for button, input, etc */
export type ComponentSize = BinUIComponentSize
