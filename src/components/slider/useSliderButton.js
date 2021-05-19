import { UPDATE_MODEL_EVENT } from '../../utils/constants'
import { off, on } from '../../utils/dom'
import { computed, inject, nextTick, ref, watch } from 'vue'


const useTooltip = (props, formatTooltip, showTooltip) => {
  const tooltip = ref(null)
  const tooltipVisible = ref(false)
  const enableFormat = computed(() => formatTooltip.value instanceof Function)

  const formatValue = computed(() => enableFormat.value && formatTooltip.value(props.modelValue) || props.modelValue)

  const displayTooltip = () => showTooltip.value && (tooltipVisible.value = true)

  const hideTooltip = () => showTooltip.value && (tooltipVisible.value = false)

  return {
    tooltip,
    tooltipVisible,
    formatValue,
    displayTooltip,
    hideTooltip,
  }
}


export const useSliderButton = (props, initData, emit) => {
  const {
    disabled,
    min,
    max,
    step,
    showTooltip,
    precision,
    sliderSize,
    formatTooltip,
    emitChange,
    resetSize,
    updateDragging,
  } = inject('SliderProvider')

  const {
    tooltip,
    tooltipVisible,
    formatValue,
    displayTooltip,
    hideTooltip,
  } = useTooltip(props, formatTooltip, showTooltip)

  const currentPosition = computed(() => {
    return `${(props.modelValue - min.value) / (max.value - min.value) * 100}%`
  })

  const wrapperStyle = computed(() => {
    return (props.vertical ? { bottom: currentPosition.value } : { left: currentPosition.value })
  })


  const handleMouseEnter = () => {
    initData.hovering = true
    displayTooltip()
  }

  const handleMouseLeave = () => {
    initData.hovering = false
    hideTooltip()
  }

  const onButtonDown = (event) => {
    if (disabled.value) return
    event.preventDefault()
    onDragStart(event)
    on(window, 'mousemove', onDragging)
    on(window, 'touchmove', onDragging)
    on(window, 'mouseup', onDragEnd)
    on(window, 'touchend', onDragEnd)
    on(window, 'contextmenu', onDragEnd)
  }

  const onLeftKeyDown = () => {
    if (disabled.value) return
    initData.newPosition = parseFloat(currentPosition.value) - step.value / (max.value - min.value) * 100
    setPosition(initData.newPosition)
    emitChange()
  }

  const onRightKeyDown = () => {
    if (disabled.value) return
    initData.newPosition = parseFloat(currentPosition.value) + step.value / (max.value - min.value) * 100
    setPosition(initData.newPosition)
    emitChange()
  }

  const getClientXY = (event) => {
    let clientX
    let clientY
    if (event.type.startsWith('touch')) {
      clientY = event.touches[0].clientY
      clientX = event.touches[0].clientX
    } else {
      clientY = event.clientY
      clientX = event.clientX
    }
    return {
      clientX,
      clientY,
    }
  }

  const onDragStart = (event) => {
    initData.dragging = true
    initData.isClick = true
    const {
      clientX,
      clientY,
    } = getClientXY(event)
    if (props.vertical) {
      initData.startY = clientY
    } else {
      initData.startX = clientX
    }
    initData.startPosition = parseFloat(currentPosition.value)
    initData.newPosition = initData.startPosition
  }

  const onDragging = (event) => {
    if (initData.dragging) {
      initData.isClick = false
      displayTooltip()
      resetSize()
      let diff
      const { clientX, clientY } = getClientXY(event)
      if (props.vertical) {
        initData.currentY = clientY
        diff = (initData.startY - initData.currentY) / sliderSize.value * 100
      } else {
        initData.currentX = clientX
        diff = (initData.currentX - initData.startX) / sliderSize.value * 100
      }
      initData.newPosition = initData.startPosition + diff
      setPosition(initData.newPosition)
    }
  }

  const onDragEnd = () => {
    if (initData.dragging) {
      /*
         * 防止在 mouseup 后立即触发 click，导致滑块有几率产生一小段位移
         * 不使用 preventDefault 是因为 mouseup 和 click 没有注册在同一个 DOM 上
         */
      setTimeout(() => {
        initData.dragging = false
        hideTooltip()
        if (!initData.isClick) {
          setPosition(initData.newPosition)
          emitChange()
        }
      }, 0)
      off(window, 'mousemove', onDragging)
      off(window, 'touchmove', onDragging)
      off(window, 'mouseup', onDragEnd)
      off(window, 'touchend', onDragEnd)
      off(window, 'contextmenu', onDragEnd)
    }
  }

  const setPosition = async (newPosition) => {
    if (newPosition === null || isNaN(newPosition)) return
    if (newPosition < 0) {
      newPosition = 0
    } else if (newPosition > 100) {
      newPosition = 100
    }
    const lengthPerStep = 100 / ((max.value - min.value) / step.value)
    const steps = Math.round(newPosition / lengthPerStep)
    let value = steps * lengthPerStep * (max.value - min.value) * 0.01 + min.value
    value = parseFloat(value.toFixed(precision.value))
    emit(UPDATE_MODEL_EVENT, value)

    if (!initData.dragging && props.modelValue !== initData.oldValue) {
      initData.oldValue = props.modelValue
    }

    await nextTick()
    initData.dragging && displayTooltip()
    tooltip.value.updatePopper()
  }

  watch(() => initData.dragging, val => {
    updateDragging(val)
  })

  return {
    tooltip,
    tooltipVisible,
    showTooltip,
    wrapperStyle,
    formatValue,
    handleMouseEnter,
    handleMouseLeave,
    onButtonDown,
    onLeftKeyDown,
    onRightKeyDown,
    setPosition,
  }
}
