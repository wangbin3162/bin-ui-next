import { App } from 'vue'
import type { SFCWithInstall } from '../../utils/types'
import Alert from './alert.vue'

Alert.install = (app: App): void => {
  app.component(Alert.name, Alert)
}
// @ts-ignore
const _Alert: SFCWithInstall<typeof Alert> = Alert

export default _Alert
