import { App } from 'vue'
import type { SFCWithInstall } from '../../utils/types'
import InputNumber from './input-number.vue'

InputNumber.install = (app: App): void => {
  app.component(InputNumber.name, InputNumber)
}
// @ts-ignore
const _InputNumber: SFCWithInstall<typeof InputNumber> = InputNumber

export default _InputNumber
