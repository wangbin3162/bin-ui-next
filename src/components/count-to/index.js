import CountTo from './count-to'

CountTo.install = app => {
  app.component(CountTo.name, CountTo)
}

export default CountTo
