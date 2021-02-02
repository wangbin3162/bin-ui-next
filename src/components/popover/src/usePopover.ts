import { computed, watch } from 'vue'
import { isString } from '@vue/shared'
import { usePopper } from '../../popper'
import type { IPopperOptions } from '../../popper'
import { transferIncrease } from '../../../utils/config'

export interface IUsePopover extends IPopperOptions {
  width: number | string
}

export const SHOW_EVENT = 'show'
export const HIDE_EVENT = 'hide'

export default function usePopover(props: IUsePopover, ctx) {
  const popperStyle = computed(() => {

    let _width: string

    if (isString(props.width)) {
      _width = props.width as string
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
