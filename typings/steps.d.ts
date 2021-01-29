import { BinUIComponent } from './component'

interface _Steps extends BinUIComponent {
  current: number
  status: 'wait' | 'process' | 'finish' | 'error' | 'success'
  size: 'small' | null
  direction: 'horizontal' | 'vertical'
}

export const BSteps: _Steps
