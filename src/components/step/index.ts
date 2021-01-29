import { App } from 'vue'
import type { SFCWithInstall } from '../../utils/types'
import Step from '../steps/step.vue'

Step.install = (app: App): void => {
  app.component(Step.name, Step)
}
// @ts-ignore
const _Step: SFCWithInstall<typeof Step> = Step

export default _Step
