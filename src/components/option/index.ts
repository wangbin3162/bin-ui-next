import { App } from 'vue'
import type { SFCWithInstall } from '../../utils/types'
import Option from '../select/option.vue'

Option.install = (app: App): void => {
  app.component(Option.name, Option)
}
// @ts-ignore
const _Option: SFCWithInstall<typeof Option> = Option

export default _Option