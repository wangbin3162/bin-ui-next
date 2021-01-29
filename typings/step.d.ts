import { BinUIComponent } from './component'

interface _Step extends BinUIComponent {
  status: 'wait' | 'process' | 'finish' | 'error' | 'success'
  title: string
  content: string
  icon: string
}

export const BStep: _Step
