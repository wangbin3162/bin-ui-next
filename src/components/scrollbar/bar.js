import { h, computed, ref, getCurrentInstance, onUnmounted, inject } from 'vue'
import { on, off } from '../../utils/dom'
import { renderThumbStyle, BAR_MAP } from './util'

export default {
  name: 'Bar',
  props: {
    vertical: Boolean,
    size: String,
    move: Number,
  },
  setup(props) {
    const instance = getCurrentInstance()
    const thumb = ref(null)
    const wrap = inject('scroll-bar-wrap', {})
    const bar = computed(() => BAR_MAP[props.vertical ? 'vertical' : 'horizontal'])
    const barStore = ref({})
    const cursorDown = ref(null)
    const clickThumbHandler = e => {
      // prevent click event of right button
      if (e.ctrlKey || e.button === 2) {
        return
      }
      startDrag(e)
      barStore.value[bar.value.axis] = (e.currentTarget[bar.value.offset] - (e[bar.value.client] - e.currentTarget.getBoundingClientRect()[bar.value.direction]))
    }

    const clickTrackHandler = e => {
      const offset = Math.abs(e.target.getBoundingClientRect()[bar.value.direction] - e[bar.value.client])
      const thumbHalf = (thumb.value[bar.value.offset] / 2)
      const thumbPositionPercentage = ((offset - thumbHalf) * 100 / instance.vnode.el[bar.value.offset])

      wrap.value[bar.value.scroll] = (thumbPositionPercentage * wrap.value[bar.value.scrollSize] / 100)
    }
    const startDrag = e => {
      e.stopImmediatePropagation()
      cursorDown.value = true
      on(document, 'mousemove', mouseMoveDocumentHandler)
      on(document, 'mouseup', mouseUpDocumentHandler)
      document.onselectstart = () => false
    }

    const mouseMoveDocumentHandler = e => {
      if (cursorDown.value === false) return
      const prevPage = barStore.value[bar.value.axis]

      if (!prevPage) return

      const offset = ((instance.vnode.el.getBoundingClientRect()[bar.value.direction] - e[bar.value.client]) * -1)
      const thumbClickPosition = (thumb.value[bar.value.offset] - prevPage)
      const thumbPositionPercentage = ((offset - thumbClickPosition) * 100 / instance.vnode.el[bar.value.offset])
      wrap.value[bar.value.scroll] = (thumbPositionPercentage * wrap.value[bar.value.scrollSize] / 100)
    }

    function mouseUpDocumentHandler() {
      cursorDown.value = false
      barStore.value[bar.value.axis] = 0
      off(document, 'mousemove', mouseMoveDocumentHandler)
      document.onselectstart = null
    }

    onUnmounted(() => {
      off(document, 'mouseup', mouseUpDocumentHandler)
    })

    return () => h('div', {
        class: ['bin-scrollbar__bar', 'is-' + bar.value.key],
        onMousedown: clickTrackHandler,
      },
      h('div', {
        ref: thumb,
        class: 'bin-scrollbar__thumb',
        onMousedown: clickThumbHandler,
        style: renderThumbStyle({
          size: props.size,
          move: props.move,
          bar: bar.value,
        }),
      }),
    )
  },
}
