interface PopperOptions {
  modifiers?: object
}

export type placementType =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end'
  | 'right'
  | 'right-start'
  | 'right-end'

export interface IPopperProps {
  placement?: placementType
  boundariesPadding?: number
  reference?: HTMLElement
  popper?: HTMLElement
  offset?: number
  visible?: boolean
  transition?: string
  options?: PopperOptions
}
