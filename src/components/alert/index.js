import Alert from './alert.vue'

Alert.install = (app) => {
  app.component(Alert.name, Alert)
}

export default Alert
