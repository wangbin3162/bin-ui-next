import { App } from 'vue'
import type { SFCWithInstall } from '../../utils/types'
import DescItem from '../desc/description-item'

DescItem.install = (app: App): void => {
  app.component(DescItem.name, DescItem)
}

// @ts-ignore
const _DescItem: SFCWithInstall<typeof DescItem> = DescItem

export default _DescItem
