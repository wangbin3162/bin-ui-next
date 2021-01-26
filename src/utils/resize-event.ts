import ResizeObserver from 'resize-observer-polyfill'

const isServer = typeof window === 'undefined'

// eslint-disable-next-line no-undef
export type ResizableElement = CustomizedHTMLElement<{
  // eslint-disable-next-line no-unused-vars
  __resizeListeners__: Array<(...args: unknown[]) => unknown>
  __ro__: ResizeObserver
}>;

/* istanbul ignore next */
const resizeHandler = function(entries: ResizeObserverEntry[]) {
  for (const entry of entries) {
    const listeners =
      (entry.target as ResizableElement).__resizeListeners__ || []
    if (listeners.length) {
      listeners.forEach(fn => {
        fn()
      })
    }
  }
}

/* istanbul ignore next */
export const addResizeListener = function(
  element: ResizableElement,
  // eslint-disable-next-line no-unused-vars
  fn: (...args: unknown[]) => unknown,
): void {
  if (isServer || !element) return
  if (!element.__resizeListeners__) {
    element.__resizeListeners__ = []
    element.__ro__ = new ResizeObserver(resizeHandler)
    element.__ro__.observe(element)
  }
  element.__resizeListeners__.push(fn)
}

/* istanbul ignore next */
export const removeResizeListener = function(
  element: ResizableElement,
  // eslint-disable-next-line no-unused-vars
  fn: (...args: unknown[]) => unknown,
): void {
  if (!element || !element.__resizeListeners__) return
  element.__resizeListeners__.splice(
    element.__resizeListeners__.indexOf(fn),
    1,
  )
  if (!element.__resizeListeners__.length) {
    element.__ro__.disconnect()
  }
}
