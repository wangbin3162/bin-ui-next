import { App } from 'vue'
import type { SFCWithInstall } from '../../utils/types'
import OptionGroup from '../select/option-group.vue'

OptionGroup.install = (app: App): void => {
  app.component(OptionGroup.name, OptionGroup)
}
// @ts-ignore
const _OptionGroup: SFCWithInstall<typeof OptionGroup> = OptionGroup

export default _OptionGroup