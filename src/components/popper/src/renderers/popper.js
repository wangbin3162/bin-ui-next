import { withDirectives, Transition, vShow, withCtx, createVNode } from 'vue'
import { NOOP } from '@vue/shared'
import { PatchFlags } from '../../../../utils/vnode'
import { stop } from '../../../../utils/dom'

export default function renderPopper(props, children) {
  const {
    theme,
    name,
    stopPopperMouseEvent,
    popperClass,
    popperStyle,
    popperRef,
    pure,
    popperId,
    visibility,
    onMouseEnter,
    onMouseLeave,
    onAfterEnter,
    onAfterLeave,
    onBeforeEnter,
    onBeforeLeave,
  } = props

  const kls = [
    popperClass,
    'bin-popper',
    'is-' + theme,
    pure ? 'is-pure' : '',
  ]
  /**
   * Equivalent to
   * <transition :name="name">
   *  <div v-show="visibility" :aria-hidden="!visibility" :class="kls" ref="popperRef" role="tooltip" @mouseenter="" @mouseleave="" @click="">
   *    <slot />
   *  </div>
   * </transition>
   */

  const mouseUpAndDown = stopPopperMouseEvent ? stop : NOOP
  return createVNode(
    Transition,
    {
      name,
      'onAfterEnter': onAfterEnter,
      'onAfterLeave': onAfterLeave,
      'onBeforeEnter': onBeforeEnter,
      'onBeforeLeave': onBeforeLeave,
    },
    {
      default: withCtx(() => [withDirectives(
        createVNode(
          'div',
          {
            'aria-hidden': String(!visibility),
            class: kls,
            style: popperStyle ?? {},
            id: popperId,
            ref: popperRef ?? 'popperRef',
            role: 'tooltip',
            onMouseEnter,
            onMouseLeave,
            onClick: stop,
            onMouseDown: mouseUpAndDown,
            onMouseUp: mouseUpAndDown,
          },
          children,
          PatchFlags.CLASS | PatchFlags.STYLE | PatchFlags.PROPS | PatchFlags.HYDRATE_EVENTS,
          [
            'aria-hidden',
            'onMouseenter',
            'onMouseleave',
            'onMouseDown',
            'onMouseUp',
            'onClick',
            'id',
          ],
        ),
        [[vShow, visibility]],
      )]),
    },
    PatchFlags.PROPS, ['name', 'onAfterEnter', 'onAfterLeave', 'onBeforeEnter', 'onBeforeLeave'],
  )
}
