import MenuItem from './menu-item'
import { RendererNode } from 'vue'

class Menu {
  // eslint-disable-next-line no-unused-vars
  constructor(public domNode: RendererNode) {
    this.init()
  }
  init(): void {
    const menuChildren = this.domNode.childNodes
    ;[].filter
      .call(menuChildren, (child: Node) => child.nodeType === 1)
      .forEach((child: Node) => {
        new MenuItem(child as HTMLElement)
      })
  }
}
export default Menu
