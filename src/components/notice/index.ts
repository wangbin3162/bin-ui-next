import { App } from 'vue'
import Notice from './instance'

(Notice as any).install = (app: App): void => {
  app.config.globalProperties.$notice = Notice
}

export default Notice
