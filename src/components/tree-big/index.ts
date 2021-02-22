import { App } from 'vue'
import type { SFCWithInstall } from '../../utils/types'
import BigTree from '../tree/big-tree.vue'

BigTree.install = (app: App): void => {
  app.component(BigTree.name, BigTree)
}
// @ts-ignore
const _BigTree: SFCWithInstall<typeof BigTree> = BigTree

export default _BigTree
