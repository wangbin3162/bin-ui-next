import { BinUIComponent } from './component'

interface _Progress extends BinUIComponent {
  percent:number
  status: 'text'| 'success'| 'exception'
  strokeWidth: number
  textInside: boolean
  showText: boolean
  bgColor: string
  color: string
  radius: string
  active: boolean
}

export const BProgress: _Progress
