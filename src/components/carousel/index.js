import Carousel from './carousel.vue'

Carousel.install = (app) => {
  app.component(Carousel.name, Carousel)
}

export default Carousel
