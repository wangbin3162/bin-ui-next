import { App } from 'vue'
import MessageBox from './messageBox'

(MessageBox as any).install = (app: App): void => {
  app.config.globalProperties.$messageBox = MessageBox
  app.config.globalProperties.$alert = MessageBox.alert
  app.config.globalProperties.$confirm = MessageBox.confirm
}

export default MessageBox
