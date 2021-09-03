import { computed } from 'vue'
import buildModifiers from './build-modifiers'

export default function usePopperOptions(props, state) {
  return computed(() => {
    return {
      placement: props.placement,
      ...props.popperOptions,
      // Avoiding overriding modifiers.
      modifiers: buildModifiers({
        arrow: state.arrow.value,
        arrowOffset: props.arrowOffset,
        offset: props.offset,
        gpuAcceleration: props.gpuAcceleration,
        fallbackPlacements: props.fallbackPlacements,
      }, props.popperOptions?.modifiers),
    }
  })
}
