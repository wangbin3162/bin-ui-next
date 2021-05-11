import Form from './form.vue'

Form.install = (app) => {
  app.component(Form.name, Form)
}

export default Form

export * from './token'
