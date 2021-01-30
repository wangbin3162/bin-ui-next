import { createVNode, render, nextTick, isVNode } from 'vue'
import NoticeConstructor from './notice.vue'
import type { INoticeOptions, INotice, NoticeQueue, NoticeVM } from './types'
import { transferIncrease } from '../../utils/transfer-quenue'

const isServer = typeof window === 'undefined'

let vm: NoticeVM
const notifications: NoticeQueue = []
let seed = 1

const Notice: INotice = function(options = {}) {
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
    useHTML: false,
    duration: 4500,
    position: 'top-right',
    showClose: true,
    // default options end
    ...options,
    onClose: () => {
      close(id, userOnClose)
    },
    offset: verticalOffset,
    id,
    zIndex: transferIncrease(),
  }

  const container = document.createElement('div')

  container.className = `container_${id}`
  container.style.zIndex = String()

  vm = createVNode(
    NoticeConstructor,
    options,
    isVNode(options.message)
      ? {
        default: () => options.message,
      }
      : null,
  )
  render(vm, container)
  notifications.push({ vm, $el: container })
  document.body.appendChild(container)

  return {
    close: options.onClose,
  }
};

(['success', 'warning', 'info', 'error'] as const).forEach(type => {
  Object.assign(Notice, {
    [type]: (options: NoticeVM | INoticeOptions | string = {}) => {
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
console.log(Notice)

export function close(
  id: string,
  // eslint-disable-next-line no-unused-vars
  userOnClose?: (vm: NoticeVM) => void,
): void {
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

  notifications.splice(idx, 1)
  const len = notifications.length
  nextTick(() => {
    document.body.removeChild($el)
  })
  if (len < 1) return
  const position = vm.props.position
  for (let i = idx; i < len; i++) {
    if (notifications[i].vm.component.props.position === position) {
      const verticalPos = vm.props.position.split('-')[0]
      const pos = parseInt(
        notifications[i].vm.el.style[verticalPos],
        10,
        ) -
        removedHeight -
        16

      notifications[i].vm.component.props.offset = pos
      requestAnimationFrame(() => {
        render(notifications[i].vm, notifications[i].$el)
      })
      // .vm.el.style[verticalPos] = pos
    }
  }
}

export function closeAll(): void {
  for (let i = notifications.length - 1; i >= 0; i--) {
    (notifications[i].vm.component.props as INoticeOptions).onClose()
  }
}

export default Notice
