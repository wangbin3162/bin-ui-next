import { on, once } from '../../utils/dom'

export default {
  beforeMount(el, binding) {
    let interval = null
    let startTime = 0
    const handler = () => binding.value && binding.value()
    const clear = () => {
      if (Date.now() - startTime < 100) {
        handler()
      }
      clearInterval(interval)
      interval = null
    }

    on(el, 'mousedown', (e) => {
      if (e.button !== 0) return
      startTime = Date.now()
      once(document, 'mouseup', clear)
      clearInterval(interval)
      interval = setInterval(handler, 100)
    })
  },
}
