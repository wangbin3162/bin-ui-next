import { h, ref } from 'vue'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { DEFAULT_FORMATS_TIME } from './common/constant'
import Picker from './common/picker.vue'
import TimePickPanel from './time-picker-com/panel-time-pick.vue'
import TimeRangePanel from './time-picker-com/panel-time-range.vue'
import { defaultProps } from './common/props'

dayjs.extend(customParseFormat)

export default {
  name: 'BTimePicker',
  install: null,
  props: {
    ...defaultProps,
    isRange: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue'],
  setup(props, ctx) {
    const commonPicker = ref(null)
    const type = props.isRange ? 'timerange' : 'time'
    const panel = props.isRange ? TimeRangePanel : TimePickPanel
    const refProps = {
      ...props,
      focus: () => {
        commonPicker.value?.handleFocus()
      },
    }
    ctx.expose(refProps)
    return () => h(Picker, {
        format: DEFAULT_FORMATS_TIME,
        ...props, // allow format to be overwrite
        type,
        ref: commonPicker,
        'onUpdate:modelValue': value => ctx.emit('update:modelValue', value),
      },
      {
        default: scopedProps => h(panel, scopedProps),
      })
  },
}
