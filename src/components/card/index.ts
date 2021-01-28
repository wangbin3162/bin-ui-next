import { App } from 'vue'
import type { SFCWithInstall } from '../../utils/types'
import Card from './card.vue'

Card.install = (app: App): void => {
  app.component(Card.name, Card)
}
// @ts-ignore
const _Card: SFCWithInstall<typeof Card> = Card

export default _Card
