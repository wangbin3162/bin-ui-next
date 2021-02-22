import { App } from 'vue'
import type { SFCWithInstall } from '../../utils/types'
import Tree from './tree.vue'

Tree.install = (app: App): void => {
  app.component(Tree.name, Tree)
}
// @ts-ignore
const _Tree: SFCWithInstall<typeof Tree> = Tree

export default _Tree
