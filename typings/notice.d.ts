/* eslint-disable no-unused-vars */
import { VNode } from 'vue'
import { BMessageOptions, IMessage, MessageType } from './message'

export type NoticePosition =
  | 'top-right'
  | 'top-left'
  | 'bottom-right'
  | 'bottom-left'

/** Notice Component */
interface INoticeComponent {
  /** Close the Notice instance */
  close(): void
}

export interface BNoticeOptions {
  /** Title */
  title: string

  /** Description text */
  message: string | VNode

  /** Notice type */
  type?: MessageType

  /** Custom icon's class. It will be overridden by type */
  iconClass?: string

  /** Custom class name for Notice */
  customClass?: string

  /** Duration before close. It will not automatically close if set 0 */
  duration?: number

  /** Whether to show a close button */
  showClose?: boolean

  /** Whether message is treated as HTML string */
  dangerouslyUseHTMLString?: boolean

  /** Callback function when closed */
  onClose?: () => void

  /** Callback function when notification clicked */
  onClick?: () => void

  /** Offset from the top edge of the screen. Every Notice instance of the same moment should have the same offset */
  offset?: number

  /** custom position */
  position?: NoticePosition
}

export interface BNotice {
  /** Show a notification */
  (options: BNoticeOptions): INoticeComponent

  /** Show a success notification */
  success(message: string | VNode): INoticeComponent

  /** Show a success notification */
  success(options: BNoticeOptions): INoticeComponent

  /** Show a warning notification */
  warning(message: string | VNode): INoticeComponent

  /** Show a warning notification */
  warning(options: BNoticeOptions): INoticeComponent

  /** Show an info notification */
  info(message: string | VNode): INoticeComponent

  /** Show an info notification */
  info(options: BNoticeOptions): INoticeComponent

  /** Show an error notification */
  error(message: string | VNode): INoticeComponent

  /** Show an error notification */
  error(options: BNoticeOptions): INoticeComponent
}

export const Notice: (options: BNoticeOptions) => INoticeComponent

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    /** Displays a global notification message at the upper right corner of the page */
    $notify: BNotice
  }
}
