import Submenu from '../menu/submenu.vue'

Submenu.install = (app) => {
  app.component(Submenu.name, Submenu)
}

export default Submenu
