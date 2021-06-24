import CascaderPanel from './src/index.vue'

CascaderPanel.install = (app) => {
  app.component(CascaderPanel.name, CascaderPanel)
}

export default CascaderPanel
