import LoadingBar from './loading-bar.vue'
import { createApp } from 'vue'

export default function getInstance(properties) {
  const _props = properties || {}
  const app = createApp(LoadingBar, _props)
  const loadingBar = app.mount(document.createElement('div'))
  document.body.appendChild(loadingBar.$el)
  return {
    update(options) {
      if ('percent' in options) {
        loadingBar.percent = options.percent
      }
      if (options.status) {
        loadingBar.status = options.status
      }
      if ('show' in options) {
        loadingBar.show = options.show
      }
      if ('icon' in options) {
        loadingBar.icon = options.icon
      }
    },
    component: loadingBar,
    destroy() {
      document.body.removeChild(document.getElementsByClassName('bin-loading-bar')[0])
    },
  }
}
