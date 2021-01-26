import { BinUIComponent } from './component'

/** Icon Component */
interface _Icon extends BinUIComponent {
  /** Icon name */
  name: string
  /** Icon size */
  size: number | string
  /** Icon color */
  color: string
}

export const BIcon: _Icon
