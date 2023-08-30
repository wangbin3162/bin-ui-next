import ConfigProvider from './src/ConfigProvider'

ConfigProvider.install = app => {
  app.component(ConfigProvider.name, ConfigProvider)
}

export default ConfigProvider
