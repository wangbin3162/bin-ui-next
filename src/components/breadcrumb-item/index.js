import BreadcrumbItem from '../breadcrumb/breadcrumb-item.vue'

BreadcrumbItem.install = (app) => {
  app.component(BreadcrumbItem.name, BreadcrumbItem)
}

export default BreadcrumbItem
