import { cloneVNode } from 'vue'
import { getFirstValidNode } from '../../../../utils/vnode'
import { throwError } from '../../../../utils/log'

import type { VNode, Ref, ComponentPublicInstance } from 'vue'
// eslint-disable-next-line no-unused-vars
type EventHandler = (e: Event) => any

interface IRenderTriggerProps extends Record<string, unknown> {
  ref: string | Ref<ComponentPublicInstance | HTMLElement>
  onClick?: EventHandler
  onMouseOver?: EventHandler
  onMouseLeave?: EventHandler
  onFocus?: EventHandler
}

export default function renderTrigger(trigger: VNode[], extraProps: IRenderTriggerProps) {
  const firstElement = getFirstValidNode(trigger, 1)
  if (!firstElement) {
    throwError('renderTrigger', 'trigger expects single rooted node')
  }
  return cloneVNode(firstElement, extraProps)
}
