import { BinUIComponent } from './component'

/** BBadge Component */
interface _Badge extends BinUIComponent {
  value: object
  max: number
  isDot: boolean
  hidden: boolean
  type: 'primary' | 'success' | 'warning' | 'info' | 'danger'
}

export const BBadge: _Badge
