import { App } from 'vue'
import type { SFCWithInstall } from '../../utils/types'
import CheckboxGroup from '../checkbox/checkbox-group.vue'

CheckboxGroup.install = (app: App): void => {
  app.component(CheckboxGroup.name, CheckboxGroup)
}

// @ts-ignore
const _CheckboxGroup: SFCWithInstall<typeof CheckboxGroup> = CheckboxGroup

export default _CheckboxGroup
