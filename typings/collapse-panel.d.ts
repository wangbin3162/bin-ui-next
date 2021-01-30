import { BinUIComponent } from './component'

interface _CollapsePanel extends BinUIComponent {
  title: string
  name: string
  hideArrow: boolean
  disabled: boolean
}

export const BCollapsePanel: _CollapsePanel
