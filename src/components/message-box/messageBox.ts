/* eslint-disable no-unused-vars */

import { h, render, isVNode } from 'vue'
import MessageBoxConstructor from './message-box.vue'
import isServer from '../../utils/isServer'
import { isString } from '@vue/shared'

import type { ComponentPublicInstance, VNode } from 'vue'
import type {
  Action,
  Callback,
  MessageBoxState,
  BMessageBox,
  BMessageBoxOptions,
  MessageBoxData,
} from './message-box.type'

// component default merge props & data

const messageInstance = new Map<ComponentPublicInstance<{ doClose: () => void; }>, // marking doClose as function
  {
    options: any
    callback: Callback
    resolve: (res: any) => void
    reject: (reason?: any) => void
  }>()


const initInstance = (props: any, container: HTMLElement) => {
  const vnode = h(MessageBoxConstructor, props)
  render(vnode, container)
  document.body.appendChild(container.firstElementChild)
  return vnode.component
}

const genContainer = () => {
  return document.createElement('div')
}

const showMessage = (options: any) => {
  const container = genContainer()
  // Adding destruct method.
  // when transition leaves emitting `vanish` evt. so that we can do the clean job.
  options.onVanish = () => {
    // not sure if this causes mem leak, need proof to verify that.
    // maybe calling out like 1000 msg-box then close them all.
    render(null, container)
    messageInstance.delete(vm) // Remove vm to avoid mem leak.
    // here we were suppose to call document.body.removeChild(container.firstElementChild)
    // but render(null, container) did that job for us. so that we do not call that directly
  }

  options.onAction = (action: Action) => {

    const currentMsg = messageInstance.get(vm)
    let resolve: Action | { value: string; action: Action; }
    resolve = action
    if (options.callback) {
      options.callback(resolve, instance.proxy)
    } else {
      if (action === 'cancel') {
        currentMsg.reject('cancel')
      } else {
        currentMsg.resolve(resolve)
      }
    }
  }

  const instance = initInstance(options, container)

  // This is how we use message box programmably.
  // Maybe consider releasing a template version?
  // get component instance like v2.
  const vm = instance.proxy as ComponentPublicInstance<{
    visible: boolean
    state: MessageBoxState
    doClose: () => void
  }>

  if (isVNode(options.message)) {
    // Override slots since message is vnode type.
    instance.slots.default = () => [options.message]
  }
  // change visibility after everything is settled
  vm.visible = true
  return vm
}

async function MessageBox(options: BMessageBoxOptions): Promise<MessageBoxData>
// eslint-disable-next-line no-redeclare
function MessageBox(
  options: BMessageBoxOptions,
): Promise<{ value: string; action: Action; } | Action> {
  if (isServer) return
  let callback = options.callback

  return new Promise((resolve, reject) => {
    const vm = showMessage(options)
    // collect this vm in order to handle upcoming events.
    messageInstance.set(vm, {
      options,
      callback,
      resolve,
      reject,
    })
  })
}

MessageBox.alert = (
  options?: BMessageBoxOptions,
) => {
  return MessageBox(
    Object.assign(
      {
        type: 'alert',
        escClosable: false,
        maskClosable: false,
      },
      options,
    ),
  )
}

MessageBox.confirm = (
  options?: BMessageBoxOptions,
) => {
  return MessageBox(
    Object.assign(
      {
        type: 'confirm',
        showCancelButton: true,
      },
      options,
    ),
  )
}

MessageBox.close = () => {
  // instance.setupInstall.doClose()
  // instance.setupInstall.state.visible = false

  messageInstance.forEach((_, vm) => {
    vm.doClose()
  })

  messageInstance.clear()
}

export default MessageBox as BMessageBox
