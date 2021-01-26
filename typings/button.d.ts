import { BinUIComponent, BinUIComponentSize } from './component'

/** Button type */
export type ButtonType =
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'text'
  | 'dashed'
  | 'default'

/** Same as native button's type */
export type ButtonNativeType = 'button' | 'submit' | 'reset'

export type ButtonAnimatieType = 'click' | 'waves'

interface _Button extends BinUIComponent {
  /** Button type */
  type: ButtonType

  /** Button size */
  size: BinUIComponentSize

  /** Button icon, accepts an icon name of Element icon component */
  icon: string

  /** Button iconStyle, accepts an icon name of Element icon component */
  iconStyle: object

  /** Determine whether it's loading */
  loading: boolean

  /** Determine loading icon */
  loadingIcon: string

  /** Determine whether it's a plain button */
  plain: boolean

  /** Determine whether it's a round button */
  round: boolean

  /** Disable the button */
  disabled: boolean

  /** dashed border button */
  dashed: boolean

  /** transparent button */
  transparent: boolean

  /** button click animation type */
  animationType: ButtonAnimatieType

  /** type === 'text' set color */
  textColor: string

  /** Same as native button's type */
  nativeType: ButtonNativeType
}

export const BButton: _Button
