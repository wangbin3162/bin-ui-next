import { BinUIComponent } from './component'

/** Divider Component */
interface _Divider extends BinUIComponent {
  type: 'horizontal' | 'vertical'

  align: 'left' | 'center' | 'right'

  dashed: boolean
}

export const BDivider: _Divider
