import Button from './button.vue'

Button.install = (app) => {
  app.component(Button.name, Button)
}

export default Button
