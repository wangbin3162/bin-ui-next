import { BinUIComponent } from './component'

interface _Split extends BinUIComponent {
  minPercent: number
  defaultPercent: number
  split: 'vertical' | 'horizontal'
  className: string
}

export const BSplit: _Split
