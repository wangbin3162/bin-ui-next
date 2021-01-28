import { App } from 'vue'
import type { SFCWithInstall } from '../../utils/types'
import CollapsePanel from '../collapse/panel.vue'

CollapsePanel.install = (app: App): void => {
  app.component(CollapsePanel.name, CollapsePanel)
}

// @ts-ignore
const _CollapsePanel: SFCWithInstall<typeof CollapsePanel> = CollapsePanel

export default _CollapsePanel
