import { App } from 'vue'
import type { SFCWithInstall } from '../../utils/types'
import Page from './page.vue'

Page.install = (app: App): void => {
  app.component(Page.name, Page)
}

// @ts-ignore
const _Page: SFCWithInstall<typeof Page> = Page

export default _Page
