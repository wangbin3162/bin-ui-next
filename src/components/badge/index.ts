import { App } from 'vue'
import type { SFCWithInstall } from '../../utils/types'
import Badge from './badge.vue'

Badge.install = (app: App): void => {
  app.component(Badge.name, Badge)
}
// @ts-ignore
const _Badge: SFCWithInstall<typeof Badge> = Badge

export default _Badge
