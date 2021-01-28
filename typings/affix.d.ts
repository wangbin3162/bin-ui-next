import { BinUIComponent } from './component'

type Position = 'top' | 'bottom'

interface _Affix extends BinUIComponent {
  zIndex: number
  target: string
  offset: number
  position: Position
}

export const BAffix: _Affix
