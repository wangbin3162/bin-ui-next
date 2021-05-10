import CollapseWrapper from './wrapper.vue'

CollapseWrapper.install = (app) => {
  app.component(CollapseWrapper.name, CollapseWrapper)
}

export default CollapseWrapper
