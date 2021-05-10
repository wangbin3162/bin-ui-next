import { watch } from 'vue'
import { on } from '../utils/dom'
import { EVENT_CODE } from '../utils/aria'
import isServer from '../utils/isServer'

const modalStack = []

const closeModal = (e) => {
  if (modalStack.length === 0) return
  if (e.code === EVENT_CODE.esc) {
    e.stopPropagation()
    const topModal = modalStack[modalStack.length - 1]
    topModal.handleClose()
  }
}

export default (instance, visibleRef) => {
  watch(
    () => visibleRef.value,
    val => {
      if (val) {
        modalStack.push(instance)
      } else {
        modalStack.splice(
          modalStack.findIndex(modal => modal === instance),
          1,
        )
      }
    },
  )
}

if (!isServer) {
  on(document, 'keydown', closeModal)
}
