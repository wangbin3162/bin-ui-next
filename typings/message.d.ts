import { BinUIComponent } from './component'
import { VNode } from 'vue'

interface _Message extends BinUIComponent {
  customClass?: string
  useHTML?: boolean // default false
  duration?: number // default 3000
  iconClass?: string
  id?: string
  message?: string | VNode
  offset?: number // defaults 20
  onClose?: () => void
  showClose?: boolean // default false
  type?: 'success' | 'warning' | 'info' | 'error' | ''
  zIndex?: number
}

export const Message: _Message
