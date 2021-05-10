import { watch, isRef } from 'vue'
import { throwError } from '../utils/log'

import {
  addClass,
  removeClass,
  hasClass,
  getStyle,
  getScrollBarWidth,
} from '../utils/dom'

/**
 * Hook that monitoring the ref value to lock or unlock the screen.
 * When the trigger became true, it assumes modal is now opened and vice versa.
 * @param trigger {boolean}
 */
export default (trigger) => {
  if (!isRef(trigger)) {
    throwError('useLockScreen', 'You need to pass a ref param to this function')
  }
  let scrollBarWidth = 0
  let withoutHiddenClass = false
  let bodyPaddingRight = '0'
  let computedBodyPaddingRight = 0
  let timer = null
  watch(trigger, val => {
    if (val) {
      if (timer) clearTimeout(timer)
      withoutHiddenClass = !hasClass(document.body, 'bin-popup-parent--hidden')
      if (withoutHiddenClass) {
        bodyPaddingRight = document.body.style.paddingRight
        computedBodyPaddingRight = parseInt(
          getStyle(document.body, 'paddingRight'),
          10,
        )
      }
      scrollBarWidth = getScrollBarWidth()
      const bodyHasOverflow =
        document.documentElement.clientHeight < document.body.scrollHeight
      const bodyOverflowY = getStyle(document.body, 'overflowY')
      if (
        scrollBarWidth > 0 &&
        (bodyHasOverflow || bodyOverflowY === 'scroll') &&
        withoutHiddenClass
      ) {
        document.body.style.paddingRight =
          computedBodyPaddingRight + scrollBarWidth + 'px'
      }
      addClass(document.body, 'bin-popup-parent--hidden')
    } else {
      timer = setTimeout(() => {
        if (withoutHiddenClass) {
          document.body.style.paddingRight = bodyPaddingRight
          removeClass(document.body, 'bin-popup-parent--hidden')
        }
        withoutHiddenClass = true
      }, 300)
    }
  })
}
