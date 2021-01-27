import { BinUIComponent } from './component'

/** BBackTop Component */
interface _BackTop extends BinUIComponent {
  visibilityHeight: number
  target: string
  right: number
  bottom: number
  duration: number
}

export const BBackTop: _BackTop
