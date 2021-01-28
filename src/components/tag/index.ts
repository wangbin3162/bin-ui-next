import { App } from 'vue'
import type { SFCWithInstall } from '../../utils/types'
import Tag from './tag.vue'

Tag.install = (app: App): void => {
  app.component(Tag.name, Tag)
}
// @ts-ignore
const _Tag: SFCWithInstall<typeof Tag> = Tag

export default _Tag
