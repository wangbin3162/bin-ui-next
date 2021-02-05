/* eslint-disable no-unused-vars */
import type { VNode } from 'vue'

export type Action = 'confirm' | 'close' | 'cancel'
export type MessageType = 'success' | 'warning' | 'info' | 'error'
export type MessageBoxData = Action


export interface MessageBoxState {
  action: Action
  cancelButtonLoading: boolean
  cancelText: string
  confirmButtonLoading: boolean
  confirmButtonDisabled: boolean
  confirmText: string
  zIndex: number
}

export declare class BMessageBoxComponent {
  title: string
  message: string
  type: MessageType
  iconClass: string
  customClass: string
  showConfirmButton: boolean
  showCancelButton: boolean
  action: Action
  useHTML: boolean
  confirmText: string
  cancelText: string
  confirmButtonLoading: boolean
  cancelButtonLoading: boolean
  confirmButtonClass: string
  confirmButtonDisabled: boolean
  cancelButtonClass: string

  close(): any
}

export type Callback =
  | ((value: string, action: Action) => any)
  | ((action: Action) => any)

/** Options used in MessageBox */
export interface BMessageBoxOptions {

  /** Callback before MessageBox closes, and it will prevent MessageBox from closing */
  beforeClose?: (
    action: Action,
    instance: BMessageBoxComponent,
    done: () => void,
  ) => void

  /** Custom class name for MessageBox */
  customClass?: string

  /** MessageBox closing callback if you don't prefer Promise */
  callback?: Callback

  /** Text content of cancel button */
  cancelText?: string

  /** Text content of confirm button */
  confirmText?: string

  /** Custom class name of cancel button */
  cancelButtonClass?: string

  /** Custom class name of confirm button */
  confirmButtonClass?: string

  /** Whether to align the content in center */
  center?: boolean

  /** Content of the MessageBox */
  message?: string | VNode

  /** Title of the MessageBox */
  title?: string

  /** Message type, used for icon display */
  type?: MessageType

  /** Custom icon's class */
  iconClass?: string

  /** Whether message is treated as HTML string */
  useHTML?: boolean

  /** Whether to lock body scroll when MessageBox prompts */
  lockScroll?: boolean

  /** Whether to show a cancel button */
  showCancelButton?: boolean

  /** Whether to show a confirm button */
  showConfirmButton?: boolean

  /** Whether MessageBox can be closed by clicking the mask */
  maskClosable?: boolean

  /** Whether MessageBox can be closed by pressing the ESC */
  escClosable?: boolean

  /** Whether to close MessageBox when hash changes */
  closeOnHashChange?: boolean

}

export type BMessageBoxShortcutMethod =
  ((options?: BMessageBoxOptions) => Promise<MessageBoxData>)

export interface BMessageBox {
  /** Show a message box */

  // (message: string, title?: string, type?: string): Promise<MessageBoxData>

  /** Show a message box */
  (options: BMessageBoxOptions): Promise<MessageBoxData>

  /** Show an alert message box */
  alert: BMessageBoxShortcutMethod

  /** Show a confirm message box */
  confirm: BMessageBoxShortcutMethod

  /** Close current message box */
  close(): void
}
