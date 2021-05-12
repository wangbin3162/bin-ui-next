import CascaderPanel from './index.vue'


CascaderPanel.install = (app) => {
  app.component(CascaderPanel.name, CascaderPanel)
}

export default CascaderPanel
export * from './config'
