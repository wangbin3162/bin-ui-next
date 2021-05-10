import { createVNode, isVNode, nextTick, render } from 'vue'
import NoticeConstructor from './notice.vue'
import { transferIncrease } from '../../utils/config'
import isServer from '../../utils/isServer'

let vm
const notifications = []
let seed = 1

const Notice = function(options) {
  if (isServer) return
  const position = options.position || 'top-right'

  let verticalOffset = options.offset || 0
  notifications
    .filter(({ vm }) => vm.component.props.position === position)
    .forEach(({ vm }) => {
      verticalOffset += (vm.el.offsetHeight || 0) + 16
    })
  verticalOffset += 16

  const id = 'notification_' + seed++
  const userOnClose = options.onClose
  options = {
    offset: verticalOffset,
    id,
    useHTML: false,
    duration: 4.5,
    position: 'top-right',
    showClose: true,
    zIndex: transferIncrease(),
    // default options end
    ...options,
    onClose: () => {
      close(id, userOnClose)
    },
  }

  const container = document.createElement('div')

  container.className = `container_${id}`
  container.style.zIndex = String()

  const message = options.message
  vm = createVNode(
    NoticeConstructor,
    options,
    isVNode(options.message) ? { default: () => message } : null,
  )
  render(vm, container)
  notifications.push({ vm, $el: container })
  document.body.appendChild(container)

  return {
    close: options.onClose,
  }
}

export function close(id, userOnClose) {
  const idx = notifications.findIndex(({ vm }) => {
    const { id: _id } = vm.component.props
    return id === _id
  })
  if (idx === -1) {
    return
  }

  const { vm, $el } = notifications[idx]
  if (!vm) return
  userOnClose?.(vm)

  const removedHeight = vm.el.offsetHeight
  render(null, $el)
  nextTick(() => {
    document.body.removeChild($el)
  })
  notifications.splice(idx, 1)
  const len = notifications.length
  if (len < 1) return
  const position = vm.props.position
  for (let i = idx; i < len; i++) {
    if (notifications[i].vm.component.props.position === position) {
      const verticalPos = vm.props.position.split('-')[0]

      const pos = parseInt(notifications[i].vm.el.style[verticalPos], 10) - removedHeight - 16
      notifications[i].vm.component.props.offset = pos
      notifications[i].vm.el.style[verticalPos] = pos
      // requestAnimationFrame(() => {
      //   render(notifications[i].vm, notifications[i].$el)
      // })
    }
  }
}

export function closeAll() {
  for (let i = notifications.length - 1; i >= 0; i--) {
    notifications[i].vm.component.props.onClose()
  }
}

['success', 'warning', 'info', 'error'].forEach(type => {
  Object.assign(Notice, {
    [type]: (options) => {
      if (typeof options === 'string' || isVNode(options)) {
        options = {
          message: options,
        }
      }
      options.type = type
      return Notice(options)
    },
  })
})

export default Notice
