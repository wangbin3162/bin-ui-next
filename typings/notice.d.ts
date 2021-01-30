import { BinUIComponent } from './component'
import { NoticeVM } from '../src/components/notice/types'

interface _Notice extends BinUIComponent {
  customClass: string
  useHTML: boolean
  duration: number
  iconClass: string
  id: string
  message: string | NoticeVM
  offset: number
  onClick: () => void
  onClose: () => void
  position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
  showClose: boolean
  title: string
  type: string
  zIndex: number
}

export const Notice: _Notice
