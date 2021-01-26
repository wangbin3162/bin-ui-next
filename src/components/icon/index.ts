import { App } from 'vue'
import type { SFCWithInstall } from '../../utils/types'
import Icon from './icon.vue'

Icon.install = (app: App): void => {
  app.component(Icon.name, Icon)
}
// @ts-ignore
const _Icon: SFCWithInstall<typeof Icon> = Icon

export default _Icon
