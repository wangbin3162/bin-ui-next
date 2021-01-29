import { App } from 'vue'
import type { SFCWithInstall } from '../../utils/types'
import Steps from './steps.vue'

Steps.install = (app: App): void => {
  app.component(Steps.name, Steps)
}
// @ts-ignore
const _Steps: SFCWithInstall<typeof Steps> = Steps

export default _Steps
