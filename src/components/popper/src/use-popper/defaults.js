export const Theme = {
  DARK: 'dark',
  LIGHT: 'light',
}

export const DEFAULT_TRIGGER = 'hover'

export default {
  // the arrow size is an equailateral triangle with 10px side length, the 3rd side length ~ 14.1px
  // adding a offset to the ceil of 4.1 should be 5 this resolves the problem of arrow overflowing out of popper.
  arrowOffset: {
    type: Number,
    default: 4,
  },
  appendToBody: {
    type: Boolean,
    default: true,
  },
  boundariesPadding: {
    type: Number,
    default: 0,
  },
  content: {
    type: String,
    default: '',
  },
  class: {
    type: String,
    default: '',
  },
  style: Object,
  closeDelay: {
    type: Number,
    default: 200,
  },
  cutoff: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  theme: {
    type: String,
    default: Theme.DARK,
  },
  enterable: {
    type: Boolean,
    default: true,
  },
  hideAfter: {
    type: Number,
    default: 0,
  },
  manualMode: {
    type: Boolean,
    default: false,
  },
  showAfter: {
    type: Number,
    default: 0,
  },
  offset: {
    type: Number,
    default: 12,
  },
  placement: {
    type: String,
    default: 'top',
  },
  popperClass: {
    type: String,
    default: '',
  },
  pure: {
    type: Boolean,
    default: false,
  },
  // Once this option were given, the entire popper is under the users' control, top priority
  popperOptions: {
    type: Object,
    default: () => null,
  },
  showArrow: {
    type: Boolean,
    default: true,
  },
  strategy: {
    type: String,
    default: 'fixed',
  },
  transition: {
    type: String,
    default: 'fade-in-linear',
  },
  trigger: {
    type: [String, Array],
    default: DEFAULT_TRIGGER,
  },
  visible: {
    type: Boolean,
    default: undefined,
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: true,
  },
  gpuAcceleration: {
    type: Boolean,
    default: true,
  },
}
