import isServer from '../../utils/isServer'
import { on, off } from '../../utils/dom'

let isDragging = false

export default function(element, options) {
  if (isServer) return

  const moveFn = function(event) {
    options.drag?.(event)
  }
  const upFn = function(event) {
    off(document, 'mousemove', moveFn)
    off(document, 'mouseup', upFn)
    document.onselectstart = null
    document.ondragstart = null

    isDragging = false

    options.end?.(event)
  }

  on(element, 'mousedown', function(event) {
    if (isDragging) return
    document.onselectstart = () => false
    document.ondragstart = () => false
    on(document, 'mousemove', moveFn)
    on(document, 'mouseup', upFn)

    isDragging = true

    options.start?.(event)
  })
}
