import { App } from 'vue'
import type { SFCWithInstall } from '../../utils/types'
import Select from './select.vue'

Select.install = (app: App): void => {
  app.component(Select.name, Select)
}
// @ts-ignore
const _Select: SFCWithInstall<typeof Select> = Select

export default _Select