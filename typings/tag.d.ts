import { BinUIComponent } from './component'

interface _Tag extends BinUIComponent {
  name: string
  closable: boolean
  type: string
  dot: boolean
  noBorder: boolean
  color: string
  tagStyle: object
  size: 'default' | 'small' | 'mini'
  fontSize: string
  dark: boolean
  checkable: boolean
  modelValue: boolean
}

export const BTag: _Tag
