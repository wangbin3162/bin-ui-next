import { App } from 'vue'
import type { SFCWithInstall } from '../../utils/types'
import Cascader from './cascader.vue'

Cascader.install = (app: App): void => {
  app.component(Cascader.name, Cascader)
}

// @ts-ignore
const _Cascader: SFCWithInstall<typeof Cascader> = Cascader

export default _Cascader
