import { App } from 'vue'
import type { SFCWithInstall } from '../../utils/types'
import Radio from './radio.vue'

Radio.install = (app: App): void => {
  app.component(Radio.name, Radio)
}

// @ts-ignore
const _Radio: SFCWithInstall<typeof Radio> = Radio

export default _Radio
