import type { App } from 'vue'
import BAffix from './components/affix'
import BAlert from './components/alert'
import BAnchor from './components/anchor'
import BAnchorLink from './components/anchor-link'
import BBackTop from './components/back-top'
import BBadge from './components/badge'
import BBreadcrumb from './components/breadcrumb'
import BBreadcrumbItem from './components/breadcrumb-item'
import BButton from './components/button'
import BButtonGroup from './components/button-group'
import BCard from './components/card'
import BCircle from './components/circle'
import BCol from './components/col'
import BCollapse from './components/collapse'
import BCollapsePanel from './components/collapse-panel'
import BCollapseWrap from './components/collapse-wrap'
import BCollapseTransition from './components/collapse-transition'
import BDivider from './components/divider'
import BEmpty from './components/empty'
import BIcon from './components/icon'
import BLoading from './components/loading'
import BProgress from './components/progress'
import BRow from './components/row'
import BScrollbar from './components/scrollbar'
import BSplit from './components/split'
import BSteps from './components/steps'
import BStep from './components/step'
import BTag from './components/tag'
import BTimeline from './components/timeline'
import BTimelineItem from './components/timeline-item'
import Message from './components/message'
import Notice from './components/notice'

import * as util from './utils/util'
import log from './utils/log'
import { scrollTop } from './utils/dom'

import { ClickAnimation, ClickOutside, Waves } from './directives'
// @ts-ignore
import config from '../package.json'

const components = [
  BAffix,
  BAlert,
  BAnchor,
  BAnchorLink,
  BBackTop,
  BBadge,
  BBreadcrumb,
  BBreadcrumbItem,
  BButton,
  BButtonGroup,
  BCard,
  BCircle,
  BCol,
  BCollapse,
  BCollapsePanel,
  BCollapseWrap,
  BCollapseTransition,
  BDivider,
  BEmpty,
  BIcon,
  BLoading,
  BProgress,
  BRow,
  BScrollbar,
  BSplit,
  BSteps,
  BStep,
  BTag,
  BTimeline,
  BTimelineItem,
]
const plugins = [
  Message,
  Notice,
]

const install = function(app: App) {
  components.forEach(component => {
    app.use(component)
  })

  plugins.forEach(plugin => {
    app.use(plugin as any)
  })
  // 注册全局指令
  app.directive('Waves', Waves)
  app.directive('ClickAnimation', ClickAnimation)
  app.directive('ClickOutSide', ClickOutside)
  // 注册全局函数和属性
  app.config.globalProperties.$global = { zIndex: 2000 }
  app.config.globalProperties.$title = util.title
  app.config.globalProperties.$open = util.open
  app.config.globalProperties.$copy = util.copy
  app.config.globalProperties.$parseTime = util.parseTime
  app.config.globalProperties.$rangeTime = util.rangeTime
  app.config.globalProperties.$typeOf = util.typeOf
  app.config.globalProperties.$deepCopy = util.deepCopy
  app.config.globalProperties.$getRandomInt = util.getRandomInt
  app.config.globalProperties.$debounce = util.debounce
  app.config.globalProperties.$scrollTop = scrollTop
  app.config.globalProperties.$log = log
  log.pretty(`[${config.name}] ${config.version}`, config.homepage)
  return app
}

export default {
  install,
  BAffix,
  BAlert,
  BAnchor,
  BAnchorLink,
  BBackTop,
  BBadge,
  BBreadcrumb,
  BBreadcrumbItem,
  BButton,
  BButtonGroup,
  BCard,
  BCircle,
  BCol,
  BCollapse,
  BCollapsePanel,
  BCollapseWrap,
  BCollapseTransition,
  BDivider,
  BEmpty,
  BIcon,
  BLoading,
  BProgress,
  BRow,
  BScrollbar,
  BSplit,
  BSteps,
  BStep,
  BTag,
  BTimeline,
  BTimelineItem,
  Message,
  Notice,
}
