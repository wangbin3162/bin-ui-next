/* eslint-disable no-unused-vars */
import { computed, ref, reactive, watch, CSSProperties } from 'vue'
import { createPopper } from '@popperjs/core'

import {
  generateId,
  isBool,
  isHTMLElement,
  isArray,
  isString,
  $,
} from '../../../../utils/util-helper'

import usePopperOptions from './popper-options'

import type { ComponentPublicInstance, SetupContext, Ref } from 'vue'

import type { IPopperOptions, TriggerType, PopperInstance, RefElement } from './defaults'
import { transferIncrease } from '../../../../utils/config'

type TimeoutHandle = ReturnType<typeof global.setTimeout>
type Nullable<T> = T | null;
type ElementType = ComponentPublicInstance | HTMLElement
export type EmitType =
  'update:visible'
  | 'after-enter'
  | 'after-leave'
  | 'before-enter'
  | 'before-leave'

export const DEFAULT_TRIGGER = ['hover']
export const UPDATE_VISIBLE_EVENT = 'update:visible'
export default function(props: IPopperOptions, ctx) {
  const arrowRef = ref<RefElement>(null)
  const triggerRef = ref(null) as Ref<ElementType>
  const popperRef = ref<RefElement>(null)

  const popperId = `bin-popper-${generateId()}`
  let popperInstance: Nullable<PopperInstance> = null
  let showTimer: Nullable<TimeoutHandle> = null
  let hideTimer: Nullable<TimeoutHandle> = null
  let triggerFocused = false

  const isManualMode = () => props.manualMode || props.trigger === 'manual'

  const popperStyle = ref<CSSProperties>({ zIndex: transferIncrease() })

  const popperOptions = usePopperOptions(props, {
    arrow: arrowRef,
  })

  const state = reactive({
    visible: !!props.visible,
  })
  // visible has been taken by props.visible, avoiding name collision
  // Either marking type here or setter parameter
  const visibility = computed<boolean>({
    get() {
      if (props.disabled) {
        return false
      } else {
        return isBool(props.visible) ? props.visible : state.visible
      }
    },
    set(val) {
      if (isManualMode()) return
      isBool(props.visible)
        ? ctx.emit(UPDATE_VISIBLE_EVENT, val)
        : (state.visible = val)
    },
  })

  function _show() {
    if (props.hideAfter > 0) {
      hideTimer = window.setTimeout(() => {
        _hide()
      }, props.hideAfter)
    }
    visibility.value = true
  }

  function _hide() {
    visibility.value = false
  }

  function clearTimers() {
    clearTimeout(showTimer)
    clearTimeout(hideTimer)
  }

  const show = () => {
    if (isManualMode() || props.disabled) return
    clearTimers()
    if (props.showAfter === 0) {
      _show()
    } else {
      showTimer = window.setTimeout(() => {
        _show()
      }, props.showAfter)
    }
  }

  const hide = () => {
    if (isManualMode()) return
    clearTimers()
    if (props.closeDelay > 0) {
      hideTimer = window.setTimeout(() => {
        close()
      }, props.closeDelay)
    } else {
      close()
    }
  }
  const close = () => {
    _hide()
    if (props.disabled) {
      doDestroy(true)
    }
  }

  function onPopperMouseEnter() {
    // if trigger is click, user won't be able to close popper when
    // user tries to move the mouse over popper contents
    if (props.enterable && props.trigger !== 'click') {
      clearTimeout(hideTimer)
    }
  }

  function onPopperMouseLeave() {
    const { trigger } = props
    const shouldPrevent =
      (isString(trigger) && (trigger === 'click' || trigger === 'focus')) ||
      // we'd like to test array type trigger here, but the only case we need to cover is trigger === 'click' or
      // trigger === 'focus', because that when trigger is string
      // trigger.length === 1 and trigger[0] === 5 chars string is mutually exclusive.
      // so there will be no need to test if trigger is array type.
      (trigger.length === 1 &&
        (trigger[0] === 'click' || trigger[0] === 'focus'))

    if (shouldPrevent) return

    hide()
  }

  function initializePopper() {
    if (!$(visibility)) {
      return
    }
    const unwrappedTrigger = $(triggerRef)
    const _trigger = isHTMLElement(unwrappedTrigger)
      ? unwrappedTrigger
      : (unwrappedTrigger as ComponentPublicInstance).$el
    popperInstance = createPopper(_trigger, $(popperRef), $(popperOptions))

    popperInstance.update()
  }

  function doDestroy(forceDestroy?: boolean) {
    /* istanbul ignore if */
    if (!popperInstance || ($(visibility) && !forceDestroy)) return
    detachPopper()
  }

  function detachPopper() {
    popperInstance?.destroy?.()
    popperInstance = null
  }

  const events = {} as {
    onClick?: (e: Event) => void
    onMouseEnter?: (e: Event) => void
    onMouseLeave?: (e: Event) => void
    onFocus?: (e: Event) => void
    onBlur?: (e: Event) => void
  }

  function update() {
    if (!$(visibility)) {
      return
    }
    if (popperInstance) {
      popperInstance.update()
    } else {
      initializePopper()
    }
  }

  function onVisibilityChange(toState: boolean) {
    if (toState) {
      popperStyle.value.zIndex = transferIncrease()
      initializePopper()
    }
  }

  if (!isManualMode()) {
    const toggleState = () => {
      if ($(visibility)) {
        hide()
      } else {
        show()
      }
    }

    const popperEventsHandler = (e: Event) => {
      e.stopPropagation()
      switch (e.type) {
        case 'click': {
          if (triggerFocused) {
            // reset previous focus event
            triggerFocused = false
          } else {
            toggleState()
          }
          break
        }
        case 'mouseenter': {
          show()
          break
        }
        case 'mouseleave': {
          hide()
          break
        }
        case 'focus': {
          triggerFocused = true
          show()
          break
        }
        case 'blur': {
          triggerFocused = false
          hide()
          break
        }
      }
    }

    const mapEvents = (t: TriggerType) => {
      switch (t) {
        case 'click': {
          events.onClick = popperEventsHandler
          break
        }
        case 'hover': {
          events.onMouseEnter = popperEventsHandler
          events.onMouseLeave = popperEventsHandler
          break
        }
        case 'focus': {
          events.onFocus = popperEventsHandler
          events.onBlur = popperEventsHandler
          break
        }
        default: {
          break
        }
      }
    }
    if (isArray(props.trigger)) {
      Object.values(props.trigger).map(mapEvents)
    } else {
      mapEvents(props.trigger as TriggerType)
    }
  }

  watch(popperOptions, val => {
    if (!popperInstance) return
    popperInstance.setOptions(val)
    popperInstance.update()
  })

  watch(visibility, onVisibilityChange)

  return {
    update,
    doDestroy,
    show,
    hide,
    onPopperMouseEnter,
    onPopperMouseLeave,
    onAfterEnter: () => {
      ctx.emit('after-enter')
    },
    onAfterLeave: () => {
      detachPopper()
      ctx.emit('after-leave')
    },
    onBeforeEnter: () => {
      ctx.emit('before-enter')
    },
    onBeforeLeave: () => {
      ctx.emit('before-leave')
    },
    initializePopper,
    isManualMode,
    arrowRef,
    events,
    popperId,
    popperInstance,
    popperRef,
    popperStyle,
    triggerRef,
    visibility,
  }
}

export * from './defaults'
