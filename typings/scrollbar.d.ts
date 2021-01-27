import { BinUIComponent } from './component'

/** Scrollbar Component */
interface _Scrollbar extends BinUIComponent {
  native: boolean
  wrapStyle: string | string[]
  wrapClass: string | string[]
  viewClass: string | string[]
  viewStyle: string | string[]
  noresize: boolean,
  tag: string
}

export const BScrollbar: _Scrollbar
