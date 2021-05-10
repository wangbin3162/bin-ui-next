import { unref, watchEffect } from 'vue'
import { useTimeoutFn } from './useTimeout'

export default function(context) {
  const getStyle = (dom, attr) => {
    return getComputedStyle(dom)[attr]
  }
  const drag = (wrap) => {
    if (!wrap) return
    wrap.setAttribute('data-drag', unref(context.draggable))
    const dialogHeaderEl = wrap.querySelector('.bin-modal-header')
    const dragDom = wrap

    if (!dialogHeaderEl || !dragDom || !unref(context.draggable)) return

    dialogHeaderEl.style.cursor = 'move'

    dialogHeaderEl.onmousedown = (e) => {
      if (!e) return
      // 鼠标按下，计算当前元素距离可视区的距离
      const disX = e.clientX
      const disY = e.clientY
      const screenWidth = document.body.clientWidth // body当前宽度
      const screenHeight = document.documentElement.clientHeight // 可见区域高度(应为body高度，可某些环境下无法获取)

      const dragDomWidth = dragDom.offsetWidth // 对话框宽度
      const dragDomHeight = dragDom.offsetHeight // 对话框高度

      const minDragDomLeft = dragDom.offsetLeft

      const maxDragDomLeft = screenWidth - dragDom.offsetLeft - dragDomWidth
      const minDragDomTop = dragDom.offsetTop
      const maxDragDomTop = screenHeight - dragDom.offsetTop - dragDomHeight
      // 获取到的值带px 正则匹配替换
      const domLeft = getStyle(dragDom, 'left')
      const domTop = getStyle(dragDom, 'top')
      let styL = +domLeft
      let styT = +domTop

      // 注意在ie中 第一次获取到的值为组件自带50% 移动之后赋值为px
      if (domLeft.includes('%')) {
        styL = +document.body.clientWidth * (+domLeft.replace(/%/g, '') / 100)
        styT = +document.body.clientHeight * (+domTop.replace(/%/g, '') / 100)
      } else {
        styL = +domLeft.replace(/px/g, '')
        styT = +domTop.replace(/px/g, '')
      }

      document.onmousemove = function(e) {
        // 通过事件委托，计算移动的距离
        let left = e.clientX - disX
        let top = e.clientY - disY

        // 边界处理
        if (-left > minDragDomLeft) {
          left = -minDragDomLeft
        } else if (left > maxDragDomLeft) {
          left = maxDragDomLeft
        }

        if (-top > minDragDomTop) {
          top = -minDragDomTop
        } else if (top > maxDragDomTop) {
          top = maxDragDomTop
        }

        // 移动当前元素
        dragDom.style.cssText += `;left:${left + styL}px;top:${top + styT}px;`
      }

      document.onmouseup = () => {
        document.onmousemove = null
        document.onmouseup = null
      }
    }
  }

  const handleDrag = () => {
    const dragWraps = document.querySelectorAll('.bin-modal-wrap')
    for (const wrap of Array.from(dragWraps)) {
      if (!wrap) continue
      const display = getStyle(wrap.parentElement, 'display')
      const draggable = wrap.getAttribute('data-drag')
      if (display !== 'none') {
        // 拖拽位置
        if (draggable === null || unref(context.destroyOnClose)) {
          drag(wrap)
        }
      }
    }
  }

  watchEffect(() => {
    if (!unref(context.visible) || !unref(context.draggable)) {
      return
    }
    useTimeoutFn(() => {
      handleDrag()
    }, 30)
  })
}
