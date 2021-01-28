import { BinUIComponent } from './component'

interface _Alert extends BinUIComponent {
  type: 'success' | 'info' | 'warning' | 'error'
  closable: boolean
  showIcon: boolean
  banner: boolean
}

export const BAlert: _Alert
