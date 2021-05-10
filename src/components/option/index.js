import { Option } from '../select'

Option.install = app => {
  app.component(Option.name, Option)
}

export default Option
