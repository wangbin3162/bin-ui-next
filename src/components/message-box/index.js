import MessageBox from './instance'

MessageBox.install = (app) => {
  app.config.globalProperties.$messageBox = MessageBox
  app.config.globalProperties.$alert = MessageBox.alert
  app.config.globalProperties.$confirm = MessageBox.confirm
}

export default MessageBox
