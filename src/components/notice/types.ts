/* eslint-disable no-unused-vars */
import type { VNode } from 'vue'

export interface INoticeHandle {
  close: () => void
}

export type MessageType = 'success' | 'warning' | 'info' | 'error' | ''
export type TypedNoticeParams<T extends MessageType> = { type: T; } | Omit<INoticeOptions, 'type'> | string
export type NoticeParams = INoticeOptions

export interface INotice {
  (options?: INoticeOptions): INoticeHandle

  success: (options?: TypedNoticeParams<'success'>) => INoticeHandle
  warning: (options?: TypedNoticeParams<'warning'>) => INoticeHandle
  info: (options?: TypedNoticeParams<'info'>) => INoticeHandle
  error: (options?: TypedNoticeParams<'error'>) => INoticeHandle

  closeAll(): void
}

export type INoticeOptions = {
  customClass?: string
  useHTML?: boolean // default false
  duration?: number // default 4500
  iconClass?: string
  id?: string
  message?: string | VNode
  zIndex?: number
  onClose?: () => void
  onClick?: () => void
  offset?: number // defaults 0
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' // default top-right
  showClose?: boolean
  type?: 'success' | 'warning' | 'info' | 'error' | ''
  title?: string
}

export type NoticeVM = VNode

type NoticeQueueItem = {
  vm: NoticeVM
  $el: HTMLElement
}
declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    /** Displays a global notification message at the upper right corner of the page */
    $notice: INotice
  }
}
export type NoticeQueue = Array<NoticeQueueItem>
