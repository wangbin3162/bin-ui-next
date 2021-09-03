import { cloneVNode } from 'vue'
import { getFirstValidNode } from '../../../../utils/vnode'
import { throwError } from '../../../../utils/log'

export default function renderTrigger(trigger, extraProps) {
  const firstElement = getFirstValidNode(trigger, 1)
  if (!firstElement) {
    throwError('renderTrigger', 'trigger expects single rooted node')
  }
  return cloneVNode(firstElement, extraProps, true)
}
