import { App } from 'vue'
import type { SFCWithInstall } from '../../utils/types'
import Modal from './modal.vue'

Modal.install = (app: App): void => {
  app.component(Modal.name, Modal)
}

const _Modal: SFCWithInstall<typeof Modal> = Modal

export default _Modal
export { default as useModal } from './useModal'
