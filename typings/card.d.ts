import { BinUIComponent } from './component'

interface _Card extends BinUIComponent {
  header: object
  bodyStyle: object
  shadow: string
  bordered: boolean
  width: string
  radius: string
  bgColor: string
  divider: string
  headTip: boolean
}

export const BCard: _Card
