import { App } from 'vue'
import type { SFCWithInstall } from '../../utils/types'
import Row from './row.vue'

Row.install = (app: App): void => {
  app.component(Row.name, Row)
}
// @ts-ignore
const _Row: SFCWithInstall<typeof Row> = Row

export default _Row
