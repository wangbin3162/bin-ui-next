import { App } from 'vue'
import type { SFCWithInstall } from '../../utils/types'
import CarouselItem from '../carousel/carousel-item.vue'

CarouselItem.install = (app: App): void => {
  app.component(CarouselItem.name, CarouselItem)
}
// @ts-ignore
const _CarouselItem: SFCWithInstall<typeof CarouselItem> = CarouselItem

export default _CarouselItem
