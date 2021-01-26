import { ObjectDirective } from 'vue'

export default {
  beforeMount(el, binding) {
    function documentHandler(e) {
      if (el.contains(e.target)) {
        return false
      }
      if (binding.value) {
        binding.value(e)
      }
    }

    el.__vueClickOutside__ = documentHandler
    document.addEventListener('click', documentHandler)
  },
  unmounted(el) {
    document.removeEventListener('click', el.__vueClickOutside__)
    delete el.__vueClickOutside__
  },
} as ObjectDirective
