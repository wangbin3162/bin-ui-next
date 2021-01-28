## 快速上手

<div class="global-anchor">
    <b-anchor :scroll-offset="100">
        <b-anchor-link href="#yin-ru" title="引入"></b-anchor-link>
        <b-anchor-link href="#wan-zheng-yin-ru" title="完整引入"></b-anchor-link>
        <b-anchor-link href="#an-xu-yin-ru" title="按需引入"></b-anchor-link>
    </b-anchor>
</div>

本章节介绍如何在项目中使用vue3版本的bin-ui-next

### 引入

你可以引入整个 bin-ui-next，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 bin-ui。

#### 完整引入

在 main.js 中写入以下内容：

```javascript
import { createApp } from 'vue'
import BinUI from 'bin-ui-next'
import App from './App.vue'
import 'bin-ui-next/lib/styles/index.css'

const app = createApp(App)
app.use(BinUI)
app.mount('#app')
```

以上代码便完成了 bin-ui-next 的引入。需要注意的是，样式文件需要单独引入。

#### 按需引入

借助插件 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)我们可以只引入需要的组件，以达到减小项目体积的目的

```shell script
npm install babel-plugin-import --save-dev
```

然后，将 .babelrc 或 babel.config.js修改为：

```javascript
module.exports = {
  presets: [
    ['@vue/app', {
      useBuiltIns: 'entry'
    }]
  ],
  plugins: [
    ["import", {
      "libraryName": "bin-ui-next",
      "libraryDirectory": "src/components"
    }]
  ]
}
```

如果你只希望引入部分组件，比如 Button 和 Icon，那么需要在 main.js 中写入以下内容

```javascript
import { createApp } from 'vue'
import { BButton } from 'bin-ui-next'
import App from './App.vue'
import 'bin-ui-next/lib/styles/components/button.css'

const app = createApp(App)
app.use(BButton)
app.mount('#app')
```

**特别提醒:按需引用仍然需要导入样式，即在 main.js 或根组件 import 'bin-ui-next/lib/styles/index.css';**

完整组件列表参考源代码
