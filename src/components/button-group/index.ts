import { App } from 'vue'
import type { SFCWithInstall } from '../../utils/types'
import ButtonGroup from '../button/button-group.vue'

ButtonGroup.install = (app: App): void => {
  app.component(ButtonGroup.name, ButtonGroup)
}
// @ts-ignore
const _ButtonGroup: SFCWithInstall<typeof ButtonGroup> = ButtonGroup

export default _ButtonGroup
