import { BinUIComponent } from './component'

/** Responsive column props */
export interface ResponsiveColumnProperties {
  /** Number of column the grid spans */
  span: number

  /** Number of spacing on the left side of the grid */
  offset: number
}

/** Responsive column property */
export type ResponsiveColumn = number | ResponsiveColumnProperties

interface _Col extends BinUIComponent {
  /** Number of column the grid spans */
  span: number | string

  /** Number of spacing on the left side of the grid */
  offset: number | string

  /** Number of order */
  order: number | string

  /** Number of columns that grid moves to the right */
  push: number | string

  /** Number of columns that grid moves to the left */
  pull: number | string

  /** <768px Responsive columns or column props object */
  xs: ResponsiveColumn

  /** ≥768px Responsive columns or column props object */
  sm: ResponsiveColumn

  /** ≥992px Responsive columns or column props object */
  md: ResponsiveColumn

  /** ≥1200px Responsive columns or column props object */
  lg: ResponsiveColumn

  /** ≥1920px Responsive columns or column props object */
  xl: ResponsiveColumn

  /** className */
  className: string
}

export const BCol: _Col
