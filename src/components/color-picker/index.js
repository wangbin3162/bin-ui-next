import ColorPicker from './picker.vue'

ColorPicker.install = (app) => {
  app.component(ColorPicker.name, ColorPicker)
}

export default ColorPicker
