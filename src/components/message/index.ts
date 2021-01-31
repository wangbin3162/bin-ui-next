import { App } from 'vue'
import Message from './instance'
x
(Message as any).install = (app: App): void => {
  app.config.globalProperties.$message = Message
}

export default Message
