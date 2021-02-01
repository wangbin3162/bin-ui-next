import { PropType } from 'vue'
import { placementType } from './types'

export default {
  placement: {
    type: String as PropType<placementType>,
    default: 'top',
  },
  boundariesPadding: {
    type: Number,
    default: 5,
  },
  reference: Object,
  popper: Object,
  offset: {
    default: 0,
  },
  visible: {
    type: Boolean,
    default: false,
  },
  transition: String,
  options: {
    type: Object,
    default() {
      return {
        modifiers: {
          computeStyle: {
            gpuAcceleration: false,
          },
          preventOverflow: {
            boundariesElement: 'window',
          },
        },
      }
    },
  },
}
