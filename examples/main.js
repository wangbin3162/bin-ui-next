import '@babel/polyfill'
import { createApp } from 'vue'
import router from './route'
import App from './App.vue'

import DemoBlock from './components/demo-block.vue'
import MainFooter from './components/footer.vue'
import MainHeader from './components/header.vue'
import SideNav from './components/side-nav.vue'
import ColorBase from './components/color-base.vue'
import IconPane from './components/icon-pane.vue'
import DraggableDemo from './components/draggable-demo'
import './assets/styles/color-brewer.css'
import './assets/styles/index.styl'

import BinUI from 'bin-ui-next'
import '../src/styles/index.styl'

import icon from '../src/components/icon/iconfont.json'
import generate from './generateTreeData'

const icons = icon.glyphs.map(i => i.font_class)

const app = createApp(App)
app.config.productionTip = false
app.config.globalProperties.$icon = icons

app.config.globalProperties.$generateTree = generate // Icon 列表页用
app.component('DemoBlock', DemoBlock)
app.component('MainHeader', MainHeader)
app.component('MainFooter', MainFooter)
app.component('SideNav', SideNav)
app.component('ColorBase', ColorBase)
app.component('DraggableDemo', DraggableDemo)
app.component('IconPane', IconPane)
app.use(BinUI)
app.use(router)
// Mount when the route is ready
router.isReady().then(() => {
  app.mount('#app', true)
})
