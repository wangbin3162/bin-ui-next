import { BinUIComponent } from './component'

interface _Circle extends BinUIComponent {
  percent: number
  size: number
  strokeWidth: number
  strokeColor: string
  strokeLinecap: 'square' | 'round'
  trailWidth: number
  trailColor: string
  dashboard: boolean
}

export const BCircle: _Circle
