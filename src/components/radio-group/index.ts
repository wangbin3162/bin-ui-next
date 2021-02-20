import { App } from 'vue'
import type { SFCWithInstall } from '../../utils/types'
import RadioGroup from '../radio/radio-group.vue'

RadioGroup.install = (app: App): void => {
  app.component(RadioGroup.name, RadioGroup)
}

// @ts-ignore
const _RadioGroup: SFCWithInstall<typeof RadioGroup> = RadioGroup

export default _RadioGroup
