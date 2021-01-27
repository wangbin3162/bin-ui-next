import { BinUIComponent } from './component'

interface _Anchor extends BinUIComponent {
  icon: string
  iconSize: number
  activeColor: string
  offsetTop: number
  bounds: number
  showInk: boolean
  scrollOffset: number
  target: string
}

export const BAnchor: _Anchor
