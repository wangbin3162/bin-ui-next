import type { VNode } from 'vue'
import Notice from './instance'

export interface INoticeHandle {
  close: () => void
}

// eslint-disable-next-line no-unused-vars
export type INotice = (options?: INoticeOptions) => INoticeHandle

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
    $notify: INotice
  }
}
export type NoticeQueue = Array<NoticeQueueItem>
