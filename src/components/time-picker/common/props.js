import { validSize } from '../../../utils/validator-size'

export const defaultProps = {
  name: {
    type: [Array, String],
    default: '',
  },
  popperClass: {
    type: String,
    default: '',
  },
  format: {
    type: String,
  },
  type: {
    type: String,
    default: '',
  },
  clearable: {
    type: Boolean,
    default: true,
  },
  clearIcon: {
    type: String,
    default: 'close-circle-fill',
  },
  editable: {
    type: Boolean,
    default: true,
  },
  prefixIcon: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    validator: validSize,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
    default: '',
  },
  popperOptions: {
    type: Object,
    default: () => ({}),
  },
  modelValue: {
    type: [Date, Array, String],
    default: '',
  },
  rangeSeparator: {
    type: String,
    default: '-',
  },
  startPlaceholder: String,
  endPlaceholder: String,
  defaultValue: {
    type: [Date, Array],
  },
  defaultTime: {
    type: [Date, Array],
  },
  isRange: {
    type: Boolean,
    default: false,
  },
  disabledHours: {
    type: Function,
  },
  disabledMinutes: {
    type: Function,
  },
  disabledSeconds: {
    type: Function,
  },
  disabledDate: {
    type: Function,
  },
  cellClassName: {
    type: Function,
  },
  shortcuts: {
    type: Array,
    default: () => ([]),
  },
  arrowControl: {
    type: Boolean,
    default: false,
  },
  validateEvent: {
    type: Boolean,
    default: true,
  },
  unlinkPanels: Boolean,
}
