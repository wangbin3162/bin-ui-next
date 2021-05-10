import BAnchor from './components/anchor'
import BAnchorLink from './components/anchor-link'
import BIcon from './components/icon'
import BButton from './components/button'
import BButtonGroup from './components/button-group'
import BScrollbar from './components/scrollbar'
import BBackTop from './components/back-top'
import BEmpty from './components/empty'
import BLoading from './components/loading'
import BRow from './components/row'
import BCol from './components/col'
import BCollapseTransition from './components/collapse-transition'
import BDivider from './components/divider'
import BPopover from './components/popover'
import BTooltip from './components/tooltip'
import BMenu from './components/menu'
import BMenuItem from './components/menu-item'
import BSubmenu from './components/submenu'
import BMenuItemGroup from './components/menu-item-group'
import BAffix from './components/affix'
import BBreadcrumb from './components/breadcrumb'
import BBreadcrumbItem from './components/breadcrumb-item'
import BTabs from './components/tabs'
import BSteps from './components/steps'
import BStep from './components/step'
import BDropdown from './components/dropdown'
import BDropdownItem from './components/dropdown-item'
import BDropdownMenu from './components/dropdown-menu'
import BTimeline from './components/timeline'
import BTimelineItem from './components/timeline-item'
import BCarousel from './components/carousel'
import BCarouselItem from './components/carousel-item'
import BCalendar from './components/calendar'
import BAlert from './components/alert'
import BDrawer from './components/drawer'
import BModal from './components/modal'
import BCard from './components/card'
import BBadge from './components/badge'
import BCollapse from './components/collapse'
import BCollapsePanel from './components/collapse-panel'
import BCollapseWrap from './components/collapse-wrap'
import BSplit from './components/split'
import BTag from './components/tag'
import BCircle from './components/circle'
import BProgress from './components/progress'
import BInput from './components/input'
import BInputNumber from './components/input-number'
import BSwitch from './components/switch'
import BCheckbox from './components/checkbox'
import BCheckboxGroup from './components/checkbox-group'
import BRadio from './components/radio'
import BRadioGroup from './components/radio-group'
import BTree from './components/tree'
import BBigTree from './components/tree-big'
import BDesc from './components/desc'
import BDescItem from './components/desc-item'
import BRate from './components/rate'
import BSelect from './components/select'
import BOption from './components/option'
import BOptionGroup from './components/option-group'
import BPage from './components/page'
import Message from './components/message'
import MessageBox from './components/message-box'
import Notice from './components/notice'

import * as util from './utils/util'
import { setConfig } from './utils/config'
import log from './utils/log'
import { scrollTop } from './utils/dom'

import { ClickAnimation, ClickOutside, NoData, Loading, Waves } from './directives'

import config from '../package.json'

const components = [
  BAnchor,
  BAnchorLink,
  BIcon,
  BButton,
  BButtonGroup,
  BBackTop,
  BScrollbar,
  BEmpty,
  BRow,
  BCol,
  BLoading,
  BCollapseTransition,
  BDivider,
  BPopover,
  BTooltip,
  BMenu,
  BMenuItem,
  BSubmenu,
  BMenuItemGroup,
  BAffix,
  BBreadcrumb,
  BBreadcrumbItem,
  BTabs,
  BSteps,
  BStep,
  BDropdown,
  BDropdownItem,
  BDropdownMenu,
  BTimeline,
  BTimelineItem,
  BCarousel,
  BCarouselItem,
  BCalendar,
  BAlert,
  BDrawer,
  BModal,
  BCard,
  BBadge,
  BCollapse,
  BCollapsePanel,
  BCollapseWrap,
  BSplit,
  BTag,
  BCircle,
  BProgress,
  BInput,
  BInputNumber,
  BSwitch,
  BRadio,
  BRadioGroup,
  BCheckbox,
  BCheckboxGroup,
  BTree,
  BBigTree,
  BDesc,
  BDescItem,
  BRate,
  BSelect,
  BOption,
  BOptionGroup,
  BPage,
]
const plugins = [
  Message,
  MessageBox,
  Notice,
]
const defaultInstallOpt = {
  zIndex: 2000,
}
const install = function(app) {
  components.forEach(component => {
    app.use(component)
  })
  plugins.forEach(plugin => {
    app.use(plugin)
  })
  // 注册全局指令
  app.directive('Waves', Waves)
  app.directive('ClickAnimation', ClickAnimation)
  app.directive('ClickOutside', ClickOutside)
  app.directive('NoData', NoData)
  app.directive('Loading', Loading)
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
  app.config.globalProperties.$throttle = util.throttle
  app.config.globalProperties.$debounce = util.debounce
  app.config.globalProperties.$scrollTop = scrollTop
  app.config.globalProperties.$log = log
  log.pretty(`[${config.name}] ${config.version}`, config.homepage)
  return app
}

export {
  BAnchor,
  BAnchorLink,
  BIcon,
  BButton,
  BButtonGroup,
  BBackTop,
  BScrollbar,
  BEmpty,
  BRow,
  BCol,
  BLoading,
  BCollapseTransition,
  BDivider,
  BPopover,
  BTooltip,
  BMenu,
  BMenuItem,
  BSubmenu,
  BMenuItemGroup,
  BAffix,
  BBreadcrumb,
  BBreadcrumbItem,
  BTabs,
  BSteps,
  BStep,
  BDropdown,
  BDropdownItem,
  BDropdownMenu,
  BTimeline,
  BTimelineItem,
  BCarousel,
  BCarouselItem,
  BCalendar,
  BAlert,
  BDrawer,
  BModal,
  BCard,
  BBadge,
  BCollapse,
  BCollapsePanel,
  BCollapseWrap,
  BSplit,
  BTag,
  BCircle,
  BProgress,
  BInput,
  BInputNumber,
  BSwitch,
  BRadio,
  BRadioGroup,
  BCheckbox,
  BCheckboxGroup,
  BTree,
  BBigTree,
  BDesc,
  BDescItem,
  BRate,
  BSelect,
  BOption,
  BOptionGroup,
  BPage,
  Message,
  MessageBox,
  Notice,
}

export default {
  install,
}
