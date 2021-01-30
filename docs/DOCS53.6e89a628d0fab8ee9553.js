(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[49],{

/***/ 596:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./build/md-loader!./examples/docs/theme.md?vue&type=template&id=dc368a30

var _hoisted_1 = {
  class: "content element-doc"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["g" /* createStaticVNode */])("<h2 id=\"ding-zhi-zhu-ti\"><a class=\"header-anchor\" href=\"#ding-zhi-zhu-ti\">¶</a> 定制主题</h2><p>Bin UI Next 默认提供了一套UI主题，并在一定程度上可以定制，已满足业务和项目上的多样化视觉需求。</p><p>默认是使用stylus进行开发的，默认前缀为.bin-为命名空间，并且大多数都是基于变量进行开发的，定义主题其实就是改变变量列表</p><h4 id=\"wo-men-zhi-tui-jian-jin-xing-bian-liang-fu-gai-de-fang-shi-ding-zhi\"><a class=\"header-anchor\" href=\"#wo-men-zhi-tui-jian-jin-xing-bian-liang-fu-gai-de-fang-shi-ding-zhi\">¶</a> 我们只推荐进行变量覆盖的方式定制</h4><p>在webpack工程化，我们只推荐通过变量覆盖来进行主题定制，因为其他方式如安装工具自行编译等等过于复杂，对于及其特殊的组件，也推荐二次封装和精确的样式覆盖 所以只提供一种方式来实现定制</p><p>在项目中新建一个theme.styl样式文件，并把原有main.js引入样式的地方改为引入此自定义样式</p><pre><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> BinUI <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;bin-ui-next&#39;</span>\n<span class=\"hljs-keyword\">import</span> App <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;./App.vue&#39;</span>\n<span class=\"hljs-comment\">// import &#39;bin-ui-next/lib/styles/index.css&#39;</span>\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;./theme.styl&#39;</span>\n\n<span class=\"hljs-keyword\">const</span> app = createApp(App)\napp.use(BinUI)\napp.mount(<span class=\"hljs-string\">&#39;#app&#39;</span>)\n</code></pre><p>theme.styl</p><pre><code class=\"hljs language-stylus\"><span class=\"hljs-comment\">/* 改变 icon 字体路径变量，必需 */</span>\n<span class=\"hljs-variable\">$font</span>-path = <span class=\"hljs-string\">&#39;~bin-ui-next/src/styles/fonts/&#39;</span>;\n<span class=\"hljs-comment\">/* 改变主题色变量 */</span>\n<span class=\"hljs-variable\">$color</span>-primary = <span class=\"hljs-number\">#722ed1</span>;\n<span class=\"hljs-variable\">$color</span>-success = <span class=\"hljs-number\">#7cb305</span>;\n<span class=\"hljs-variable\">$color</span>-warning = <span class=\"hljs-number\">#faad14</span>;\n<span class=\"hljs-variable\">$color</span>-danger = <span class=\"hljs-number\">#eb2f96</span>;\n\n<span class=\"hljs-variable\">$border</span>-base-radius = <span class=\"hljs-number\">5px</span>;\n\n@import <span class=\"hljs-string\">&#39;~bin-ui-next/src/styles/index.styl&#39;</span>\n</code></pre><p>完整的变量列表，可直接参考<code>bin-ui-next/src/styles/common/variables.styl</code>进行具体配置</p>", 10);

function render(_ctx, _cache) {
  return Object(vue_esm_browser["u" /* openBlock */])(), Object(vue_esm_browser["e" /* createBlock */])("section", _hoisted_1, [_hoisted_2]);
}
// CONCATENATED MODULE: ./examples/docs/theme.md?vue&type=template&id=dc368a30

// CONCATENATED MODULE: ./examples/docs/theme.md

const script = {}
script.render = render

/* harmony default export */ var theme = __webpack_exports__["default"] = (script);

/***/ })

}]);