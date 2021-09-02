<script>
import {
  Fragment,
  Teleport,
  onBeforeUnmount,
  onDeactivated,
  onActivated,
  onMounted,
  renderSlot,
  toDisplayString,
  withDirectives,
  h,
} from 'vue'

import usePopper from './use-popper'
import defaultProps from './use-popper/defaults'

import { renderPopper, renderTrigger, renderArrow } from './renderers'
import { ClickOutside } from '../../../directives'
import { throwError } from '../../../utils/log'

const UPDATE_VISIBLE_EVENT = 'update:visible'

export default {
  name: 'BPopper',
  props: defaultProps,
  emits: [UPDATE_VISIBLE_EVENT, 'after-enter', 'after-leave', 'before-enter', 'before-leave'],
  setup(props, ctx) {
    if (!ctx.slots.trigger) {
      throwError('BPopper', 'Trigger must be provided')
    }
    // this is a reference that we need to pass down to child component
    // to obtain the child instance

    // return usePopper(props as IPopperOptions, ctx as SetupContext)
    const popperStates = usePopper(props, ctx)

    const forceDestroy = () => popperStates.doDestroy(true)
    onMounted(popperStates.initializePopper)
    onBeforeUnmount(forceDestroy)
    onActivated(popperStates.initializePopper)
    onDeactivated(forceDestroy)

    return popperStates
  },

  render() {
    const {
      $slots,
      appendToBody,
      class: kls,
      style,
      theme,
      hide,
      onPopperMouseEnter,
      onPopperMouseLeave,
      onAfterEnter,
      onAfterLeave,
      onBeforeEnter,
      onBeforeLeave,
      popperClass,
      popperId,
      popperStyle,
      pure,
      showArrow,
      transition,
      visibility,
      stopPopperMouseEvent,
    } = this

    const isManual = this.isManualMode()
    const arrow = renderArrow(showArrow)
    const popper = renderPopper(
      {
        theme,
        name: transition,
        popperClass,
        popperId,
        popperStyle,
        pure,
        stopPopperMouseEvent,
        onMouseEnter: onPopperMouseEnter,
        onMouseLeave: onPopperMouseLeave,
        onAfterEnter,
        onAfterLeave,
        onBeforeEnter,
        onBeforeLeave,
        visibility,
      },
      [
        renderSlot($slots, 'default', {}, () => {
          return [toDisplayString(this.content)]
        }),
        arrow,
      ],
    )

    const _t = $slots.trigger?.()

    const triggerProps = {
      'aria-describedby': popperId,
      class: kls,
      style,
      ref: 'triggerRef',
      ...this.events,
    }

    const trigger = isManual
      ? renderTrigger(_t, triggerProps)
      : withDirectives(renderTrigger(_t, triggerProps), [[ClickOutside, hide]])

    return h(Fragment, null, [
      trigger,
      h(
        Teleport, // Vue did not support createVNode for Teleport
        {
          to: 'body',
          disabled: !appendToBody,
        },
        [popper],
      ),
    ])
  },
}
</script>
