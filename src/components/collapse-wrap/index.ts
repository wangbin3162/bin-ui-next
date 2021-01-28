import { App } from 'vue'
import type { SFCWithInstall } from '../../utils/types'
import CollapseWrapper from '../collapse/wrapper.vue'

CollapseWrapper.install = (app: App): void => {
  app.component(CollapseWrapper.name, CollapseWrapper)
}

// @ts-ignore
const _CollapseWrapper: SFCWithInstall<typeof CollapseWrapper> = CollapseWrapper

export default _CollapseWrapper
