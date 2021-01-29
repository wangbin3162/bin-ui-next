import { App } from 'vue'
import type { SFCWithInstall } from '../../utils/types'
import Loading from './loading.vue'

Loading.install = (app: App): void => {
    app.component(Loading.name, Loading)
}
// @ts-ignore
const _Loading: SFCWithInstall<typeof Loading> = Loading

export default _Loading
