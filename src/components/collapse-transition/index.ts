import { App } from 'vue'
import type { SFCWithInstall } from '../../utils/types'
import CollapseTransition from './collapse-transition.vue'

CollapseTransition.install = (app: App): void => {
  app.component(CollapseTransition.name, CollapseTransition)
}

// @ts-ignore
const _CollapseTransition: SFCWithInstall<typeof CollapseTransition> = CollapseTransition

export default _CollapseTransition
