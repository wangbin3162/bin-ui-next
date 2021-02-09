import { App } from 'vue'
import type { SFCWithInstall } from '../../utils/types'
import Input from './input.vue'

Input.install = (app: App): void => {
  app.component(Input.name, Input)
}

// @ts-ignore
const _Input: SFCWithInstall<typeof Input> = Input

export default _Input
