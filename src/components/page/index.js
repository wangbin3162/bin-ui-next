import Page from './page.vue'

Page.install = (app) => {
  app.component(Page.name, Page)
}

export default Page
