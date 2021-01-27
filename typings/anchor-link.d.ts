import { BinUIComponent } from './component'

interface _AnchorLink extends BinUIComponent {
  href: string
  title: string
  scrollOffset: number
}

export const BAnchorLink: _AnchorLink
