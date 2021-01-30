import { BinUIComponent } from './component'

interface _Collapse extends BinUIComponent {
  accordion: boolean
  modelValue: string | string[]
  simple: boolean
}

export const BCollapse: _Collapse
