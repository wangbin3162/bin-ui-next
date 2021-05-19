import { ref, computed, watch, isVNode } from 'vue'
import { validSize } from '../../utils/validator-size'
import { isNumber, isArray, isString } from '../../utils/util-helper'

const SizeMap = {
  mini: 4,
  small: 8,
  default: 16,
  large: 24,
}

export const defaultProps = {
  direction: {
    type: String,
    default: 'horizontal',
  },
  class: {
    type: [String, Object, Array],
    default: '',
  },
  style: {
    type: [String, Array, Object],
  },
  alignment: {
    type: String,
    default: 'center',
  },
  prefixCls: {
    type: String,
  },
  spacer: {
    type: [Object, String, Number],
    default: null,
    validator: (val) => {
      return isVNode(val) || isNumber(val) || isString(val)
    },
  },
  wrap: {
    type: Boolean,
    default: false,
  },
  size: {
    type: [String, Array, Number],
    validator: (val) => {
      return (
        validSize(val) || isNumber(val) || isArray(val)
      )
    },
  },
}

export function useSpace(props) {
  const classes = computed(() => [
    'bin-space',
    `bin-space--${props.direction}`,
    props.class,
  ])

  const horizontalSize = ref(0)
  const verticalSize = ref(0)

  watch(
    () => [props.size, props.wrap, props.direction],
    ([size = 'small', wrap, dir]) => {
      // when the specified size have been given
      if (isArray(size)) {
        const [h = 0, v = 0] = size
        horizontalSize.value = h
        verticalSize.value = v
      } else {
        let val
        if (isNumber(size)) {
          val = size
        } else {
          val = SizeMap[size] || SizeMap.small
        }

        if (wrap && dir === 'horizontal') {
          horizontalSize.value = verticalSize.value = val
        } else {
          if (dir === 'horizontal') {
            horizontalSize.value = val
            verticalSize.value = 0
          } else {
            verticalSize.value = val
            horizontalSize.value = 0
          }
        }
      }
    },
    { immediate: true },
  )

  const containerStyle = computed(() => {
    const wrapKls = props.wrap
      ? { flexWrap: 'wrap', marginBottom: `-${verticalSize.value}px` }
      : null
    const alignment = {
      alignItems: props.alignment,
    }
    return [wrapKls, alignment, props.style]
  })

  const itemStyle = computed(() => {
    return {
      paddingBottom: `${verticalSize.value}px`,
      marginRight: `${horizontalSize.value}px`,
    }
  })

  return {
    classes,
    containerStyle,
    itemStyle,
  }
}
