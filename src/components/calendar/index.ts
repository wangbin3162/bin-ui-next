import { App } from 'vue'
import type { SFCWithInstall } from '../../utils/types'
import Calendar from './calendar.vue'

Calendar.install = (app: App): void => {
  app.component(Calendar.name, Calendar)
}
// @ts-ignore
const _Calendar: SFCWithInstall<typeof Calendar> = Calendar

export default _Calendar
