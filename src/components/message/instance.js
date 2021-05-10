import { createVNode, nextTick, render, isVNode } from 'vue'
import isServer from '../../utils/isServer'

import { transferIncrease } from '../../utils/config'
import MessageConstructor from './message.vue'


let vm
const instances = []
let seed = 1

const Message = function(opts) {
  if (isServer) return
  if (typeof opts === 'string') {
    opts = {
      message: opts,
    }
  }
  let options = opts

  let verticalOffset = opts.offset || 20
  instances.forEach(({ vm }) => {
    verticalOffset += (vm.el.offsetHeight || 0) + 16
  })
  verticalOffset += 16

  const id = 'message_' + seed++
  const userOnClose = options.onClose

  options = {
    offset: verticalOffset,
    id,
    zIndex: transferIncrease(),
    ...options,
    onClose: () => {
      close(id, userOnClose)
    },
  }

  const container = document.createElement('div')

  container.className = `container_${id}`

  const message = options.message
  vm = createVNode(
    MessageConstructor,
    options,
    isVNode(options.message) ? { default: () => message } : null,
  )

  render(vm, container)
  instances.push({ vm, $el: container })
  document.body.appendChild(container)

  return {
    close: options.onClose,
  }
}

export function close(id, userOnClose) {
  const idx = instances.findIndex(({ vm }) => {
    const { id: _id } = vm.component.props
    return id === _id
  })
  if (idx === -1) {
    return
  }

  const { vm, $el } = instances[idx]
  if (!vm) return
  userOnClose?.(vm)

  const removedHeight = vm.el.offsetHeight
  render(null, $el)
  nextTick(() => {
    document.body.removeChild($el)
  })

  instances.splice(idx, 1)

  // adjust other instances vertical offset
  const len = instances.length
  if (len < 1) return
  for (let i = idx; i < len; i++) {
    const pos =
      parseInt(instances[i].vm.el.style['top'], 10) - removedHeight - 16

    instances[i].vm.component.props.offset = pos
    instances[i].vm.component.props.vertOffset = pos
  }
}

export function closeAll() {
  for (let i = instances.length - 1; i >= 0; i--) {
    const instance = instances[i].vm.component
    instance.ctx.close()
  }
}

['success', 'warning', 'info', 'error'].forEach(type => {
  Message[type] = options => {
    if (typeof options === 'string') {
      options = {
        message: options,
        type,
      }
    } else {
      options.type = type
    }
    return Message(options)
  }
})

Message.closeAll = closeAll
export default Message
