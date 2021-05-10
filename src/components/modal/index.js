import Modal from './modal.vue'

Modal.install = (app) => {
  app.component(Modal.name, Modal)
}

export default Modal
export { default as useModal } from './useModal'
