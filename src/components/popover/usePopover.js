import { computed, watch } from 'vue'
import { isString } from '@vue/shared'
import { usePopper } from '../popper'
import { transferIncrease } from '../../utils/config'

export const SHOW_EVENT = 'show'
export const HIDE_EVENT = 'hide'

export default function usePopover(props, ctx) {
  const popperStyle = computed(() => {

    let _width

    if (isString(props.width)) {
      _width = props.width
    } else {
      _width = props.width + 'px'
    }

    return {
      width: _width,
      zIndex: transferIncrease(),
    }
  })

  const popperProps = usePopper(props, ctx)

  watch(popperProps.visibility, val => {
    ctx.emit(val ? SHOW_EVENT : HIDE_EVENT)
  })

  return {
    ...popperProps,
    popperStyle,
  }
}
