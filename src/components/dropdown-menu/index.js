import DropdownMenu from '../dropdown/dropdown-menu.vue'

DropdownMenu.install = (app) => {
  app.component(DropdownMenu.name, DropdownMenu)
}

export default DropdownMenu
