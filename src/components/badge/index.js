import Badge from './badge.vue'

Badge.install = (app) => {
  app.component(Badge.name, Badge)
}

export default Badge
