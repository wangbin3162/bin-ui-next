import Notice from './instance'

Notice.install = (app) => {
  app.config.globalProperties.$notice = Notice
}

export default Notice
