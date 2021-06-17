(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[55],{

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm-bundler.js + 3 modules\nvar vue_runtime_esm_bundler = __webpack_require__(0);\n\n// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./build/md-loader!./examples/docs/theme.md?vue&type=template&id=2a8b5f18\n\nvar _hoisted_1 = {\n  class: \"content element-doc\"\n};\n\nvar _hoisted_2 = /*#__PURE__*/Object(vue_runtime_esm_bundler[\"l\" /* createStaticVNode */])(\"<h2 id=\\\"ding-zhi-zhu-ti\\\"><a class=\\\"header-anchor\\\" href=\\\"#ding-zhi-zhu-ti\\\">¶</a> 定制主题</h2><p>Bin UI Next 默认提供了一套UI主题，并在一定程度上可以定制，已满足业务和项目上的多样化视觉需求。</p><p>默认是使用stylus进行开发的，默认前缀为.bin-为命名空间，并且大多数都是基于变量进行开发的，定义主题其实就是改变变量列表</p><h4 id=\\\"wo-men-zhi-tui-jian-jin-xing-bian-liang-fu-gai-de-fang-shi-ding-zhi\\\"><a class=\\\"header-anchor\\\" href=\\\"#wo-men-zhi-tui-jian-jin-xing-bian-liang-fu-gai-de-fang-shi-ding-zhi\\\">¶</a> 我们只推荐进行变量覆盖的方式定制</h4><p>在webpack工程化，我们只推荐通过变量覆盖来进行主题定制，因为其他方式如安装工具自行编译等等过于复杂，对于及其特殊的组件，也推荐二次封装和精确的样式覆盖 所以只提供一种方式来实现定制</p><p>在项目中新建一个theme.styl样式文件，并把原有main.js引入样式的地方改为引入此自定义样式</p><pre><code class=\\\"hljs language-javascript\\\"><span class=\\\"hljs-keyword\\\">import</span> { createApp } <span class=\\\"hljs-keyword\\\">from</span> <span class=\\\"hljs-string\\\">&#39;vue&#39;</span>\\n<span class=\\\"hljs-keyword\\\">import</span> BinUI <span class=\\\"hljs-keyword\\\">from</span> <span class=\\\"hljs-string\\\">&#39;bin-ui-next&#39;</span>\\n<span class=\\\"hljs-keyword\\\">import</span> App <span class=\\\"hljs-keyword\\\">from</span> <span class=\\\"hljs-string\\\">&#39;./App.vue&#39;</span>\\n<span class=\\\"hljs-comment\\\">// import &#39;bin-ui-next/lib/styles/index.css&#39;</span>\\n<span class=\\\"hljs-keyword\\\">import</span> <span class=\\\"hljs-string\\\">&#39;./theme.styl&#39;</span>\\n\\n<span class=\\\"hljs-keyword\\\">const</span> app = createApp(App)\\napp.use(BinUI)\\napp.mount(<span class=\\\"hljs-string\\\">&#39;#app&#39;</span>)\\n</code></pre><p>theme.styl</p><pre><code class=\\\"hljs language-stylus\\\"><span class=\\\"hljs-comment\\\">/* 改变 icon 字体路径变量，必需 */</span>\\n<span class=\\\"hljs-variable\\\">$font</span>-path = <span class=\\\"hljs-string\\\">&#39;~bin-ui-next/src/styles/fonts/&#39;</span>;\\n<span class=\\\"hljs-comment\\\">/* 改变主题色变量 */</span>\\n<span class=\\\"hljs-variable\\\">$color</span>-primary = <span class=\\\"hljs-number\\\">#722ed1</span>;\\n<span class=\\\"hljs-variable\\\">$color</span>-success = <span class=\\\"hljs-number\\\">#7cb305</span>;\\n<span class=\\\"hljs-variable\\\">$color</span>-warning = <span class=\\\"hljs-number\\\">#faad14</span>;\\n<span class=\\\"hljs-variable\\\">$color</span>-danger = <span class=\\\"hljs-number\\\">#eb2f96</span>;\\n\\n<span class=\\\"hljs-variable\\\">$border</span>-base-radius = <span class=\\\"hljs-number\\\">4px</span>;\\n\\n<span class=\\\"hljs-comment\\\">/* 全部样式引入，可以按需引入 */</span>\\n@import <span class=\\\"hljs-string\\\">&#39;~bin-ui-next/src/styles/index.styl&#39;</span>\\n\\n<span class=\\\"hljs-comment\\\">/* 按需引入需要引入variables和base，icon */</span>\\n@import <span class=\\\"hljs-string\\\">&#39;~bin-ui-next/src/styles/common/variables.styl&#39;</span>;\\n@import <span class=\\\"hljs-string\\\">&#39;~bin-ui-next/src/styles/base.styl&#39;</span>\\n@import <span class=\\\"hljs-string\\\">&#39;~bin-ui-next/src/styles/icon.styl&#39;</span>\\n@import <span class=\\\"hljs-string\\\">&#39;~bin-ui-next/src/styles/components/button.styl&#39;</span>\\n@import <span class=\\\"hljs-string\\\">&#39;~bin-ui-next/src/styles/components/input.styl&#39;</span>\\n<span class=\\\"hljs-comment\\\">/* 其他组件...  按需引入样式，有些样式需要依赖其他组件，因此，引入时需要注意 */</span>\\n</code></pre><p>完整的变量列表，可直接参考<code>bin-ui-next/src/styles/common/variables.styl</code>进行具体配置</p>\", 10);\n\nfunction render(_ctx, _cache) {\n  return Object(vue_runtime_esm_bundler[\"E\" /* openBlock */])(), Object(vue_runtime_esm_bundler[\"i\" /* createBlock */])(\"section\", _hoisted_1, [_hoisted_2]);\n}\n// CONCATENATED MODULE: ./examples/docs/theme.md?vue&type=template&id=2a8b5f18\n\n// CONCATENATED MODULE: ./examples/docs/theme.md\n\nconst script = {}\nscript.render = render\n\n/* harmony default export */ var theme = __webpack_exports__[\"default\"] = (script);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9kb2NzL3RoZW1lLm1kPzc0ZDQiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvZG9jcy90aGVtZS5tZD9hNGVhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVhLE9BQUssRUFBQzs7Ozs7O2lFQUFmLHVEQTBDVSxTQTFDVixjQTBDVSxDQXpDUixVQXlDUSxDQTFDVixDOzs7OztBQ0Y2RDtBQUNqRTtBQUNBLGdCQUFnQixNQUFNOztBQUVQLGlGIiwiZmlsZSI6IjY5NS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICA8dGVtcGxhdGU+XG4gICAgPHNlY3Rpb24gY2xhc3M9XCJjb250ZW50IGVsZW1lbnQtZG9jXCI+XG4gICAgICA8aDIgaWQ9XCJkaW5nLXpoaS16aHUtdGlcIj48YSBjbGFzcz1cImhlYWRlci1hbmNob3JcIiBocmVmPVwiI2RpbmctemhpLXpodS10aVwiPsK2PC9hPiDlrprliLbkuLvpopg8L2gyPlxuPHA+QmluIFVJIE5leHQg6buY6K6k5o+Q5L6b5LqG5LiA5aWXVUnkuLvpopjvvIzlubblnKjkuIDlrprnqIvluqbkuIrlj6/ku6XlrprliLbvvIzlt7Lmu6HotrPkuJrliqHlkozpobnnm67kuIrnmoTlpJrmoLfljJbop4bop4npnIDmsYLjgII8L3A+XG48cD7pu5jorqTmmK/kvb/nlKhzdHlsdXPov5vooYzlvIDlj5HnmoTvvIzpu5jorqTliY3nvIDkuLouYmluLeS4uuWRveWQjeepuumXtO+8jOW5tuS4lOWkp+WkmuaVsOmDveaYr+WfuuS6juWPmOmHj+i/m+ihjOW8gOWPkeeahO+8jOWumuS5ieS4u+mimOWFtuWunuWwseaYr+aUueWPmOWPmOmHj+WIl+ihqDwvcD5cbjxoNCBpZD1cIndvLW1lbi16aGktdHVpLWppYW4tamluLXhpbmctYmlhbi1saWFuZy1mdS1nYWktZGUtZmFuZy1zaGktZGluZy16aGlcIj48YSBjbGFzcz1cImhlYWRlci1hbmNob3JcIiBocmVmPVwiI3dvLW1lbi16aGktdHVpLWppYW4tamluLXhpbmctYmlhbi1saWFuZy1mdS1nYWktZGUtZmFuZy1zaGktZGluZy16aGlcIj7CtjwvYT4g5oiR5Lus5Y+q5o6o6I2Q6L+b6KGM5Y+Y6YeP6KaG55uW55qE5pa55byP5a6a5Yi2PC9oND5cbjxwPuWcqHdlYnBhY2vlt6XnqIvljJbvvIzmiJHku6zlj6rmjqjojZDpgJrov4flj5jph4/opobnm5bmnaXov5vooYzkuLvpopjlrprliLbvvIzlm6DkuLrlhbbku5bmlrnlvI/lpoLlronoo4Xlt6Xlhbfoh6rooYznvJbor5HnrYnnrYnov4fkuo7lpI3mnYLvvIzlr7nkuo7lj4rlhbbnibnmrornmoTnu4Tku7bvvIzkuZ/mjqjojZDkuozmrKHlsIHoo4Xlkoznsr7noa7nmoTmoLflvI/opobnm5ZcbuaJgOS7peWPquaPkOS+m+S4gOenjeaWueW8j+adpeWunueOsOWumuWItjwvcD5cbjxwPuWcqOmhueebruS4reaWsOW7uuS4gOS4qnRoZW1lLnN0eWzmoLflvI/mlofku7bvvIzlubbmiorljp/mnIltYWluLmpz5byV5YWl5qC35byP55qE5Zyw5pa55pS55Li65byV5YWl5q2k6Ieq5a6a5LmJ5qC35byPPC9wPlxuPHByZT48Y29kZSBjbGFzcz1cImhsanMgbGFuZ3VhZ2UtamF2YXNjcmlwdFwiPjxzcGFuIGNsYXNzPVwiaGxqcy1rZXl3b3JkXCI+aW1wb3J0PC9zcGFuPiB7IGNyZWF0ZUFwcCB9IDxzcGFuIGNsYXNzPVwiaGxqcy1rZXl3b3JkXCI+ZnJvbTwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJobGpzLXN0cmluZ1wiPiYjeDI3O3Z1ZSYjeDI3Ozwvc3Bhbj5cbjxzcGFuIGNsYXNzPVwiaGxqcy1rZXl3b3JkXCI+aW1wb3J0PC9zcGFuPiBCaW5VSSA8c3BhbiBjbGFzcz1cImhsanMta2V5d29yZFwiPmZyb208L3NwYW4+IDxzcGFuIGNsYXNzPVwiaGxqcy1zdHJpbmdcIj4mI3gyNztiaW4tdWktbmV4dCYjeDI3Ozwvc3Bhbj5cbjxzcGFuIGNsYXNzPVwiaGxqcy1rZXl3b3JkXCI+aW1wb3J0PC9zcGFuPiBBcHAgPHNwYW4gY2xhc3M9XCJobGpzLWtleXdvcmRcIj5mcm9tPC9zcGFuPiA8c3BhbiBjbGFzcz1cImhsanMtc3RyaW5nXCI+JiN4Mjc7Li9BcHAudnVlJiN4Mjc7PC9zcGFuPlxuPHNwYW4gY2xhc3M9XCJobGpzLWNvbW1lbnRcIj4vLyBpbXBvcnQgJiN4Mjc7YmluLXVpLW5leHQvbGliL3N0eWxlcy9pbmRleC5jc3MmI3gyNzs8L3NwYW4+XG48c3BhbiBjbGFzcz1cImhsanMta2V5d29yZFwiPmltcG9ydDwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJobGpzLXN0cmluZ1wiPiYjeDI3Oy4vdGhlbWUuc3R5bCYjeDI3Ozwvc3Bhbj5cblxuPHNwYW4gY2xhc3M9XCJobGpzLWtleXdvcmRcIj5jb25zdDwvc3Bhbj4gYXBwID0gY3JlYXRlQXBwKEFwcClcbmFwcC51c2UoQmluVUkpXG5hcHAubW91bnQoPHNwYW4gY2xhc3M9XCJobGpzLXN0cmluZ1wiPiYjeDI3OyNhcHAmI3gyNzs8L3NwYW4+KVxuPC9jb2RlPjwvcHJlPlxuPHA+dGhlbWUuc3R5bDwvcD5cbjxwcmU+PGNvZGUgY2xhc3M9XCJobGpzIGxhbmd1YWdlLXN0eWx1c1wiPjxzcGFuIGNsYXNzPVwiaGxqcy1jb21tZW50XCI+Lyog5pS55Y+YIGljb24g5a2X5L2T6Lev5b6E5Y+Y6YeP77yM5b+F6ZyAICovPC9zcGFuPlxuPHNwYW4gY2xhc3M9XCJobGpzLXZhcmlhYmxlXCI+JGZvbnQ8L3NwYW4+LXBhdGggPSA8c3BhbiBjbGFzcz1cImhsanMtc3RyaW5nXCI+JiN4Mjc7fmJpbi11aS1uZXh0L3NyYy9zdHlsZXMvZm9udHMvJiN4Mjc7PC9zcGFuPjtcbjxzcGFuIGNsYXNzPVwiaGxqcy1jb21tZW50XCI+Lyog5pS55Y+Y5Li76aKY6Imy5Y+Y6YePICovPC9zcGFuPlxuPHNwYW4gY2xhc3M9XCJobGpzLXZhcmlhYmxlXCI+JGNvbG9yPC9zcGFuPi1wcmltYXJ5ID0gPHNwYW4gY2xhc3M9XCJobGpzLW51bWJlclwiPiM3MjJlZDE8L3NwYW4+O1xuPHNwYW4gY2xhc3M9XCJobGpzLXZhcmlhYmxlXCI+JGNvbG9yPC9zcGFuPi1zdWNjZXNzID0gPHNwYW4gY2xhc3M9XCJobGpzLW51bWJlclwiPiM3Y2IzMDU8L3NwYW4+O1xuPHNwYW4gY2xhc3M9XCJobGpzLXZhcmlhYmxlXCI+JGNvbG9yPC9zcGFuPi13YXJuaW5nID0gPHNwYW4gY2xhc3M9XCJobGpzLW51bWJlclwiPiNmYWFkMTQ8L3NwYW4+O1xuPHNwYW4gY2xhc3M9XCJobGpzLXZhcmlhYmxlXCI+JGNvbG9yPC9zcGFuPi1kYW5nZXIgPSA8c3BhbiBjbGFzcz1cImhsanMtbnVtYmVyXCI+I2ViMmY5Njwvc3Bhbj47XG5cbjxzcGFuIGNsYXNzPVwiaGxqcy12YXJpYWJsZVwiPiRib3JkZXI8L3NwYW4+LWJhc2UtcmFkaXVzID0gPHNwYW4gY2xhc3M9XCJobGpzLW51bWJlclwiPjRweDwvc3Bhbj47XG5cbjxzcGFuIGNsYXNzPVwiaGxqcy1jb21tZW50XCI+Lyog5YWo6YOo5qC35byP5byV5YWl77yM5Y+v5Lul5oyJ6ZyA5byV5YWlICovPC9zcGFuPlxuQGltcG9ydCA8c3BhbiBjbGFzcz1cImhsanMtc3RyaW5nXCI+JiN4Mjc7fmJpbi11aS1uZXh0L3NyYy9zdHlsZXMvaW5kZXguc3R5bCYjeDI3Ozwvc3Bhbj5cblxuPHNwYW4gY2xhc3M9XCJobGpzLWNvbW1lbnRcIj4vKiDmjInpnIDlvJXlhaXpnIDopoHlvJXlhaV2YXJpYWJsZXPlkoxiYXNl77yMaWNvbiAqLzwvc3Bhbj5cbkBpbXBvcnQgPHNwYW4gY2xhc3M9XCJobGpzLXN0cmluZ1wiPiYjeDI3O35iaW4tdWktbmV4dC9zcmMvc3R5bGVzL2NvbW1vbi92YXJpYWJsZXMuc3R5bCYjeDI3Ozwvc3Bhbj47XG5AaW1wb3J0IDxzcGFuIGNsYXNzPVwiaGxqcy1zdHJpbmdcIj4mI3gyNzt+YmluLXVpLW5leHQvc3JjL3N0eWxlcy9iYXNlLnN0eWwmI3gyNzs8L3NwYW4+XG5AaW1wb3J0IDxzcGFuIGNsYXNzPVwiaGxqcy1zdHJpbmdcIj4mI3gyNzt+YmluLXVpLW5leHQvc3JjL3N0eWxlcy9pY29uLnN0eWwmI3gyNzs8L3NwYW4+XG5AaW1wb3J0IDxzcGFuIGNsYXNzPVwiaGxqcy1zdHJpbmdcIj4mI3gyNzt+YmluLXVpLW5leHQvc3JjL3N0eWxlcy9jb21wb25lbnRzL2J1dHRvbi5zdHlsJiN4Mjc7PC9zcGFuPlxuQGltcG9ydCA8c3BhbiBjbGFzcz1cImhsanMtc3RyaW5nXCI+JiN4Mjc7fmJpbi11aS1uZXh0L3NyYy9zdHlsZXMvY29tcG9uZW50cy9pbnB1dC5zdHlsJiN4Mjc7PC9zcGFuPlxuPHNwYW4gY2xhc3M9XCJobGpzLWNvbW1lbnRcIj4vKiDlhbbku5bnu4Tku7YuLi4gIOaMiemcgOW8leWFpeagt+W8j++8jOacieS6m+agt+W8j+mcgOimgeS+nei1luWFtuS7lue7hOS7tu+8jOWboOatpO+8jOW8leWFpeaXtumcgOimgeazqOaEjyAqLzwvc3Bhbj5cbjwvY29kZT48L3ByZT5cbjxwPuWujOaVtOeahOWPmOmHj+WIl+ihqO+8jOWPr+ebtOaOpeWPguiAgzxjb2RlPmJpbi11aS1uZXh0L3NyYy9zdHlsZXMvY29tbW9uL3ZhcmlhYmxlcy5zdHlsPC9jb2RlPui/m+ihjOWFt+S9k+mFjee9rjwvcD5cblxuICAgIDwvc2VjdGlvbj5cbiAgPC90ZW1wbGF0ZT5cbiAgXG4gICIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL3RoZW1lLm1kP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJhOGI1ZjE4XCJcbmNvbnN0IHNjcmlwdCA9IHt9XG5zY3JpcHQucmVuZGVyID0gcmVuZGVyXG5cbmV4cG9ydCBkZWZhdWx0IHNjcmlwdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///695\n");

/***/ })

}]);