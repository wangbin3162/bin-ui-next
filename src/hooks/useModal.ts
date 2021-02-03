import { watch } from 'vue'
import { on } from '../utils/dom'
import { EVENT_CODE } from '../utils/aria'
import isServer from '../utils/isServer'

import type { Ref, ComputedRef } from 'vue'

type ModalInstance = {
  handleClose: () => void
};

const modalStack: ModalInstance[] = []

const closeModal = (e: KeyboardEvent) => {
  if (modalStack.length === 0) return
  if (e.code === EVENT_CODE.esc) {
    e.stopPropagation()
    const topModal = modalStack[modalStack.length - 1]
    topModal.handleClose()
  }
}

export default (
  instance: ModalInstance,
  visibleRef: Ref<boolean> | ComputedRef,
) => {
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
