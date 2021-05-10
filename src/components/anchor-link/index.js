import AnchorLink from '../anchor/anchor-link.vue'

AnchorLink.install = (app) => {
  app.component(AnchorLink.name, AnchorLink)
}

export default AnchorLink
