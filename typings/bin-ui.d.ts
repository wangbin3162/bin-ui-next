/* eslint-disable no-unused-vars */
import { App } from 'vue'
import { BinUIComponent, BinUIComponentSize } from './component'

export { BIcon } from './icon'
export { BButton } from './button'
export { BButtonGroup } from './button-group'
export { BRow } from './row'
export { BCol } from './col'
export { BTimeline } from './timeline'
export { BTimelineItem } from './timeline-item'

export const version: string

export function install(app: App, ...options: any[]): any

/** component common definition */
export type Component = BinUIComponent

/** Component size definition for button, input, etc */
export type ComponentSize = BinUIComponentSize
