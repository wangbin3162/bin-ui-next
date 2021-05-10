import MenuItemGroup from '../menu/menu-item-group.vue'

MenuItemGroup.install = (app) => {
  app.component(MenuItemGroup.name, MenuItemGroup)
}

export default MenuItemGroup

