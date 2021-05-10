import CarouselItem from '../carousel/carousel-item.vue'

CarouselItem.install = (app) => {
  app.component(CarouselItem.name, CarouselItem)
}

export default CarouselItem
