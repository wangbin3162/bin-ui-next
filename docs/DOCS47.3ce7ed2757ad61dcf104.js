(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[42],{

/***/ 592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./build/md-loader!./examples/docs/start.md?vue&type=template&id=0c0631eb

var _hoisted_1 = {
  class: "content element-doc"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h2", {
  id: "kuai-su-shang-shou"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#kuai-su-shang-shou"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" 快速上手")], -1);

var _hoisted_3 = {
  class: "global-anchor"
};

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["g" /* createStaticVNode */])("<p>本章节介绍如何在项目中使用vue3版本的bin-ui-next</p><h3 id=\"yin-ru\"><a class=\"header-anchor\" href=\"#yin-ru\">¶</a> 引入</h3><p>你可以引入整个 bin-ui-next，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 bin-ui。</p><h4 id=\"wan-zheng-yin-ru\"><a class=\"header-anchor\" href=\"#wan-zheng-yin-ru\">¶</a> 完整引入</h4><p>在 main.js 中写入以下内容：</p><pre><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> BinUI <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;bin-ui-next&#39;</span>\n<span class=\"hljs-keyword\">import</span> App <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;./App.vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;bin-ui-next/lib/styles/index.css&#39;</span>\n\n<span class=\"hljs-keyword\">const</span> app = createApp(App)\napp.use(BinUI)\napp.mount(<span class=\"hljs-string\">&#39;#app&#39;</span>)\n</code></pre><p>以上代码便完成了 bin-ui-next 的引入。需要注意的是，样式文件需要单独引入。</p><h4 id=\"an-xu-yin-ru\"><a class=\"header-anchor\" href=\"#an-xu-yin-ru\">¶</a> 按需引入</h4><p>借助插件 <a href=\"https://github.com/ant-design/babel-plugin-import\">babel-plugin-import</a>我们可以只引入需要的组件，以达到减小项目体积的目的</p><pre><code class=\"hljs language-shell\">npm install babel-plugin-import --save-dev\n</code></pre><p>然后，将 .babelrc 或 babel.config.js修改为：</p><pre><code class=\"hljs language-javascript\"><span class=\"hljs-built_in\">module</span>.exports = {\n  <span class=\"hljs-attr\">presets</span>: [\n    [<span class=\"hljs-string\">&#39;@vue/app&#39;</span>, {\n      <span class=\"hljs-attr\">useBuiltIns</span>: <span class=\"hljs-string\">&#39;entry&#39;</span>\n    }]\n  ],\n  <span class=\"hljs-attr\">plugins</span>: [\n    [<span class=\"hljs-string\">&quot;import&quot;</span>, {\n      <span class=\"hljs-string\">&quot;libraryName&quot;</span>: <span class=\"hljs-string\">&quot;bin-ui-next&quot;</span>,\n      <span class=\"hljs-string\">&quot;libraryDirectory&quot;</span>: <span class=\"hljs-string\">&quot;src/components&quot;</span>\n    }]\n  ]\n}\n</code></pre><p>如果你只希望引入部分组件，比如 Button 和 Icon，那么需要在 main.js 中写入以下内容</p><pre><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> { BButton } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;bin-ui-next&#39;</span>\n<span class=\"hljs-keyword\">import</span> App <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;./App.vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;bin-ui-next/lib/styles/components/button.css&#39;</span>\n\n<span class=\"hljs-keyword\">const</span> app = createApp(App)\napp.use(BButton)\napp.mount(<span class=\"hljs-string\">&#39;#app&#39;</span>)\n</code></pre><p><strong>特别提醒:按需引用仍然需要导入样式，即在 main.js 或根组件 import &#39;bin-ui-next/lib/styles/index.css&#39;;</strong></p><p>完整组件列表参考源代码</p>", 16);

function render(_ctx, _cache) {
  var _component_b_anchor_link = Object(vue_esm_browser["D" /* resolveComponent */])("b-anchor-link");

  var _component_b_anchor = Object(vue_esm_browser["D" /* resolveComponent */])("b-anchor");

  return Object(vue_esm_browser["u" /* openBlock */])(), Object(vue_esm_browser["e" /* createBlock */])("section", _hoisted_1, [_hoisted_2, Object(vue_esm_browser["i" /* createVNode */])("div", _hoisted_3, [Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor, {
    "scroll-offset": 100
  }, {
    default: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#yin-ru",
        title: "引入"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#wan-zheng-yin-ru",
        title: "完整引入"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#an-xu-yin-ru",
        title: "按需引入"
      })];
    }),
    _: 1
  })]), _hoisted_4]);
}
// CONCATENATED MODULE: ./examples/docs/start.md?vue&type=template&id=0c0631eb

// CONCATENATED MODULE: ./examples/docs/start.md

const script = {}
script.render = render

/* harmony default export */ var start = __webpack_exports__["default"] = (script);

/***/ })

}]);