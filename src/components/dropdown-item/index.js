import DropdownItem from '../dropdown/dropdown-item.vue'

DropdownItem.install = (app) => {
  app.component(DropdownItem.name, DropdownItem)
}

export default DropdownItem
