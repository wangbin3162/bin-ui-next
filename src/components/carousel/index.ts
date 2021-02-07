import { App } from 'vue'
import type { SFCWithInstall } from '../../utils/types'
import Carousel from './carousel.vue'

Carousel.install = (app: App): void => {
  app.component(Carousel.name, Carousel)
}
// @ts-ignore
const _Carousel: SFCWithInstall<typeof Carousel> = Carousel

export default _Carousel
