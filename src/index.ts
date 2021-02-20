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
import BCalendar from './components/calendar'
import BCard from './components/card'
import BCarousel from './components/carousel'
import BCarouselItem from './components/carousel-item'
import BCheckbox from './components/checkbox'
import BCheckboxGroup from './components/checkbox-group'
import BCircle from './components/circle'
import BCol from './components/col'
import BCollapse from './components/collapse'
import BCollapsePanel from './components/collapse-panel'
import BCollapseWrap from './components/collapse-wrap'
import BCollapseTransition from './components/collapse-transition'
import BDivider from './components/divider'
import BDrawer from './components/drawer'
import BDropdown from './components/dropdown'
import BDropdownItem from './components/dropdown-item'
import BDropdownMenu from './components/dropdown-menu'
import BEmpty from './components/empty'
import BIcon from './components/icon'
import BInput from './components/input'
import BMenu from './components/menu'
import BMenuItem from './components/menu-item'
import BMenuItemGroup from './components/menu-item-group'
import BSubmenu from './components/submenu'
import BLoading from './components/loading'
import BModal from './components/modal'
import BPopover from './components/popover'
import BPopper from './components/popper'
import BProgress from './components/progress'
import BRadio from './components/radio'
import BRadioGroup from './components/radio-group'
import BRate from './components/rate'
import BRow from './components/row'
import BScrollbar from './components/scrollbar'
import BSelect from './components/select'
import BOption from './components/option'
import BOptionGroup from './components/option-group'
import BSplit from './components/split'
import BSteps from './components/steps'
import BStep from './components/step'
import BSwitch from './components/switch'
import BTabs from './components/tabs'
import BTag from './components/tag'
import BTimeline from './components/timeline'
import BTimelineItem from './components/timeline-item'
import BTooltip from './components/tooltip'
import Message from './components/message'
import MessageBox from './components/message-box'
import Notice from './components/notice'

import * as util from './utils/util'
import { setConfig } from './utils/config'
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
  BCalendar,
  BCard,
  BCarousel,
  BCarouselItem,
  BCheckbox,
  BCheckboxGroup,
  BCircle,
  BCol,
  BCollapse,
  BCollapsePanel,
  BCollapseWrap,
  BCollapseTransition,
  BDivider,
  BDrawer,
  BDropdown,
  BDropdownItem,
  BDropdownMenu,
  BEmpty,
  BIcon,
  BInput,
  BMenu,
  BMenuItem,
  BMenuItemGroup,
  BSubmenu,
  BLoading,
  BModal,
  BPopover,
  BPopper,
  BProgress,
  BRadio,
  BRadioGroup,
  BRate,
  BRow,
  BScrollbar,
  BSelect,
  BOption,
  BOptionGroup,
  BSplit,
  BSteps,
  BStep,
  BSwitch,
  BTabs,
  BTag,
  BTimeline,
  BTimelineItem,
  BTooltip,
]
const plugins = [
  Message,
  MessageBox,
  Notice,
]
const defaultInstallOpt = {
  zIndex: 2000,
}
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
  app.directive('ClickOutside', ClickOutside)
  // 注册全局函数和属性
  app.config.globalProperties.$global = defaultInstallOpt
  setConfig(defaultInstallOpt)
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

export {
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
  BCalendar,
  BCarousel,
  BCarouselItem,
  BCard,
  BCheckbox,
  BCheckboxGroup,
  BCircle,
  BCol,
  BCollapse,
  BCollapsePanel,
  BCollapseWrap,
  BCollapseTransition,
  BDivider,
  BDrawer,
  BDropdown,
  BDropdownItem,
  BDropdownMenu,
  BEmpty,
  BIcon,
  BInput,
  BMenu,
  BMenuItem,
  BMenuItemGroup,
  BSubmenu,
  BLoading,
  BModal,
  BPopover,
  BPopper,
  BProgress,
  BRadio,
  BRadioGroup,
  BRate,
  BRow,
  BScrollbar,
  BSelect,
  BOption,
  BOptionGroup,
  BSplit,
  BSteps,
  BStep,
  BSwitch,
  BTabs,
  BTag,
  BTimeline,
  BTimelineItem,
  BTooltip,
  Message,
  Notice,
  MessageBox,
}
export default {
  install,
}
