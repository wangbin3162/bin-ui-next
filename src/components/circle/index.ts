import { App } from 'vue'
import type { SFCWithInstall } from '../../utils/types'
import Circle from './circle.vue'

Circle.install = (app: App): void => {
  app.component(Circle.name, Circle)
}
// @ts-ignore
const _Circle: SFCWithInstall<typeof Circle> = Circle

export default _Circle
