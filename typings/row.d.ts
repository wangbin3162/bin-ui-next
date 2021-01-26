import { BinUIComponent } from './component'

/** Horizontal alignment of flex layout */
export type HorizontalAlignment =
  | 'start'
  | 'end'
  | 'center'
  | 'space-around'
  | 'space-between'

/** vertical alignment of flex layout */
export type VerticalAlignment = 'top' | 'middle' | 'bottom'

/** Row Layout Component */
interface _Row extends BinUIComponent {
  /** Grid spacing */
  gutter: number

  /** Layout mode. You can use flex. Works in modern browsers */
  type: string

  /** Horizontal alignment of flex layout */
  justify: HorizontalAlignment

  /** Vertical alignment of flex layout */
  align: VerticalAlignment

  /** className */
  className: string
}

export const BRow: _Row
