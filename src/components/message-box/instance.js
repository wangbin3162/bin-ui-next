import { h, isVNode, render, watch } from 'vue'
import MessageBoxConstructor from './message-box.vue'
import isServer from '../../utils/isServer'
import { isString } from '../../utils/util-helper'

const messageInstance = new Map()

const initInstance = (props, container) => {
  const vnode = h(MessageBoxConstructor, props)
  render(vnode, container)
  document.body.appendChild(container.firstElementChild)
  return vnode.component
}

const genContainer = () => {
  return document.createElement('div')
}

const showMessage = (options) => {
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

  options.onAction = (action) => {

    const currentMsg = messageInstance.get(vm)
    let resolve = action
    if (options.callback) {
      options.callback(resolve, instance.proxy)
    } else {
      if (action === 'close') {
        currentMsg.reject('close')
      } else if (action === 'cancel') {
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
  const vm = instance.proxy

  watch(() => vm.message, (newVal, oldVal) => {
    if (isVNode(newVal)) {
      // Override slots since message is vnode type.
      instance.slots.default = () => [newVal]
    } else if (isVNode(oldVal) && !isVNode(newVal)) {
      delete instance.slots.default
    }
  }, {
    immediate: true,
  })
  // change visibility after everything is settled
  vm.visible = true
  return vm
}

function MessageBox(options) {
  if (isServer) return
  let callback
  if (isString(options) || isVNode(options)) {
    options = {
      message: options,
    }
  } else {
    callback = options.callback
  }
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

MessageBox.alert = (options) => {
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

MessageBox.confirm = (options) => {
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

export default MessageBox
