/* eslint-disable no-unused-vars */

import type { VNode } from 'vue'

export interface IMessageHandle {
  close: () => void
}

export type IMessageOptions = {
  customClass?: string
  useHTML?: boolean // default false
  duration?: number // default 3000
  iconClass?: string
  id?: string
  message?: string | VNode
  offset?: number // defaults 20
  onClose?: () => void
  showClose?: boolean // default false
  type?: 'success' | 'warning' | 'info' | 'error' | ''
  zIndex?: number
}

export type MessageType = 'success' | 'warning' | 'info' | 'error' | ''

export type IMessageDispatcher = (options?: IMessageOptions | string) => IMessageHandle
export type MessageParams = IMessageOptions | string
export type TypedMessageParams<T extends MessageType> = { type: T; } & Omit<IMessageOptions, 'type'> | string

export interface IMessage {
  (options?: MessageParams): IMessageHandle

  success: (options?: TypedMessageParams<'success'>) => IMessageHandle
  warning: (options?: TypedMessageParams<'warning'>) => IMessageHandle
  info: (options?: TypedMessageParams<'info'>) => IMessageHandle
  error: (options?: TypedMessageParams<'error'>) => IMessageHandle

  closeAll(): void
}

export type MessageVM = VNode

type MessageQueueItem = {
  vm: MessageVM
  $el: HTMLElement
}

export type MessageQueue = Array<MessageQueueItem>

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    /** Used to show feedback after an activity. The difference with Notification is that the latter is often used to show a system level passive notification. */
    $message: IMessage
  }
}
