import { App } from 'vue'
import type { SFCWithInstall } from '../../utils/types'
import BreadcrumbItem from '../breadcrumb/breadcrumb-item.vue'

BreadcrumbItem.install = (app: App): void => {
  app.component(BreadcrumbItem.name, BreadcrumbItem)
}
// @ts-ignore
const _BreadcrumbItem: SFCWithInstall<typeof BreadcrumbItem> = BreadcrumbItem

export default _BreadcrumbItem
