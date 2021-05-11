import {
  h,
  inject,
  ref,
  watch,
  onMounted,
  onUpdated,
  onBeforeUnmount,
  nextTick,
  Fragment,
} from 'vue'
import { FormKey, FormItemKey } from './token'
import { addResizeListener, removeResizeListener } from '../../utils/resize-event'

export default {
  name: 'BLabelWrap',
  props: {
    isAutoWidth: Boolean,
    updateAll: Boolean,
  },
  setup(props, { slots }) {
    const el = ref(null)
    const elForm = inject(FormKey)
    const elFormItem = inject(FormItemKey)

    const computedWidth = ref(0)
    watch(computedWidth, (val, oldVal) => {
      if (props.updateAll) {
        elForm.registerLabelWidth(val, oldVal)
        elFormItem.updateComputedLabelWidth(val)
      }
    })

    const getLabelWidth = () => {
      if (el.value?.firstElementChild) {
        const width = window.getComputedStyle(el.value.firstElementChild)
          .width
        return Math.ceil(parseFloat(width))
      } else {
        return 0
      }
    }
    const updateLabelWidth = (action = 'update') => {
      nextTick(() => {
        if (slots.default && props.isAutoWidth) {
          if (action === 'update') {
            computedWidth.value = getLabelWidth()
          } else if (action === 'remove') {
            elForm.deregisterLabelWidth(computedWidth.value)
          }
        }
      })
    }
    const updateLabelWidthFn = () => updateLabelWidth('update')

    onMounted(() => {
      addResizeListener(el.value.firstElementChild, updateLabelWidthFn)
      updateLabelWidthFn()
    })

    onUpdated(updateLabelWidthFn)

    onBeforeUnmount(() => {
      updateLabelWidth('remove')
      removeResizeListener(el.value.firstElementChild, updateLabelWidthFn)
    })

    function render() {
      if (!slots) return null
      if (props.isAutoWidth) {
        const autoLabelWidth = elForm.autoLabelWidth
        const style = {}
        if (autoLabelWidth && autoLabelWidth !== 'auto') {
          const marginLeft = parseInt(autoLabelWidth, 10) - computedWidth.value
          if (marginLeft) {
            style.marginLeft = marginLeft + 'px'
          }
        }
        return h(
          'div',
          {
            ref: el,
            class: ['bin-form-item__label-wrap'],
            style,
          },
          slots.default?.(),
        )
      } else {
        return h(Fragment, { ref: el }, slots.default?.())
      }
    }

    return render
  },
}
