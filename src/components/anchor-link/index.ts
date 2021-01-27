import { App } from 'vue'
import type { SFCWithInstall } from '../../utils/types'
import AnchorLink from '../anchor/anchor-link.vue'

AnchorLink.install = (app: App): void => {
  app.component(AnchorLink.name, AnchorLink)
}
// @ts-ignore
const _AnchorLink: SFCWithInstall<typeof AnchorLink> = AnchorLink

export default _AnchorLink
