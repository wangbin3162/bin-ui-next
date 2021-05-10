import Circle from './circle.vue'

Circle.install = (app) => {
  app.component(Circle.name, Circle)
}

export default Circle
