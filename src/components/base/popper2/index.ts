import {
  computed,
  ref,
  reactive,
  watch,
  SetupContext,
  onBeforeUnmount,
  toRefs,
  Ref,
  ComponentPublicInstance,
} from 'vue'
import { createPopper, Instance } from '@popperjs/core'
import { IPopperProps } from './types'
import { isHTMLElement } from '@popperjs/core/lib/dom-utils/instanceOf'

type Nullable<T> = T | null;

type EmitType = 'update:visible' | 'popper-show' | 'popper-hide'

export default function(props: IPopperProps, { emit }: SetupContext<EmitType[]>) {
  // 创建状态
  const state = reactive({
    visible: !!props.visible,
  })
  const referenceRef = ref(null) as Ref<ComponentPublicInstance | HTMLElement>
  const popperRef = ref<HTMLElement | null>(null)
  let popperInstance: Nullable<Instance> = null

  const popperOptions = computed(() => {
    return {
      placement: props.placement,
      // Avoiding overriding modifiers.
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: props.offset,
          },
        },
        {
          name: 'computeStyle',
          options: {
            gpuAcceleration: false,
          },
        },
        {
          name: 'preventOverflow',
          options: {
            boundariesElement: 'window',
          },
        },
      ],
    }
  })
  const initPopper = () => {
    console.log(props.placement)
    if (!/^(top|bottom|left|right)(-start|-end)?$/g.test(props.placement)) {
      return
    }
    const popper = props.popper || popperRef.value
    const reference = props.reference || referenceRef.value
    if (!popper || !reference) return

    const unwrappedTrigger = referenceRef.value
    const _trigger = isHTMLElement(unwrappedTrigger)
      ? unwrappedTrigger
      : (unwrappedTrigger as ComponentPublicInstance).$el

    popperInstance = createPopper(_trigger, popper, popperOptions.value)
    console.log(popperInstance)

    popperInstance.update()
  }

  const updatePopper = () => {
    if (!state.visible) {
      return
    }
    if (popperInstance) {
      popperInstance.update()
    } else {
      initPopper()
    }
  }
  const doDestroy = (forceDestroy?: boolean) => {
    console.log('doDestroy')
    if (!popperInstance || (state.visible && !forceDestroy)) return
    popperInstance?.destroy?.()
    popperInstance = null
  }

  watch(() => props.visible, (val) => {
    console.log('props.visible===>', val)
    state.visible = val
  })
  watch(() => state.visible, (val) => {
    if (val) {
      updatePopper()
      emit('popper-show')
    } else {
      emit('popper-hide')
    }
    emit('update:visible', val)
  })
  onBeforeUnmount(() => {
    if (popperInstance) {
      popperInstance.destroy()
      popperInstance = null
    }
  })
  return {
    ...toRefs(state),
    popperOptions,
    popperInstance,
    popperRef,
    referenceRef,
    initPopper,
    updatePopper,
    doDestroy,
  }
}
