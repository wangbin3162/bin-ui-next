import Tree from './tree.vue'

Tree.install = (app) => {
  app.component(Tree.name, Tree)
}

export default Tree
