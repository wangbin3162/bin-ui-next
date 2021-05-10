import { EVENT_CODE, triggerEvent } from '../../../utils/aria'

class SubMenu {
  constructor(parent, domNode) {
    this.subIndex = 0
    this.parent = parent
    this.domNode = domNode
    this.subMenuItems = []
    this.init()
  }

  init() {
    this.subMenuItems = this.domNode.querySelectorAll('li')
    this.addListeners()
  }

  gotoSubIndex(idx) {
    if (idx === this.subMenuItems.length) {
      idx = 0
    } else if (idx < 0) {
      idx = this.subMenuItems.length - 1
    }
    this.subMenuItems[idx].focus()
    this.subIndex = idx
  }

  addListeners() {
    const parentNode = this.parent.domNode
    Array.prototype.forEach.call(this.subMenuItems, (el) => {
      el.addEventListener('keydown', (event) => {
        let prevDef = false
        switch (event.code) {
          case EVENT_CODE.down: {
            this.gotoSubIndex(this.subIndex + 1)
            prevDef = true
            break
          }
          case EVENT_CODE.up: {
            this.gotoSubIndex(this.subIndex - 1)
            prevDef = true
            break
          }
          case EVENT_CODE.tab: {
            triggerEvent(parentNode, 'mouseleave')
            break
          }
          case EVENT_CODE.enter:
          case EVENT_CODE.space: {
            prevDef = true
            event.currentTarget.click()
            break
          }
        }
        if (prevDef) {
          event.preventDefault()
          event.stopPropagation()
        }
        return false
      })
    })
  }
}

export default SubMenu
