(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./build/md-loader!./examples/docs/backtop.md?vue&type=template&id=52ac90a0

var backtopvue_type_template_id_52ac90a0_hoisted_1 = {
  class: "content element-doc"
};

var backtopvue_type_template_id_52ac90a0_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h2", {
  id: "backtop-fan-hui-ding-bu"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#backtop-fan-hui-ding-bu"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" BackTop 返回顶部")], -1);

var backtopvue_type_template_id_52ac90a0_hoisted_3 = {
  class: "global-anchor"
};

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("p", null, "当页面内容比较长滚动后需要快捷返回顶部时使用，一般放置在页面右下角位置。", -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])("注意：如嵌套在自定义滚动组件中使用则需要将 "), /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", null, "BackTop"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" 组件放置于 "), /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", null, "Scrollbar"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" 组件内部")], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h3", {
  id: "ji-chu-yong-fa"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-chu-yong-fa"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" 基础用法")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("p", null, "默认监听window的滚动位置，如果设置了target则会监听target的滚动高度", -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", {
  class: "html"
}, "\n<template>\n  <div style=\"height:500px;overflow: auto;border:1px solid #eee;\" class=\"scroll-box\">\n    <div style=\"padding: 20px;\">\n      <div v-for=\"item in 80\" :key=\"item\" ref=\"item\">{{item}}:这是用来撑开内容的行...</div>\n    </div>\n    <b-back-top target=\".scroll-box\" :visible-height=\"200\" :bottom=\"100\">\n      <b-button type=\"success\">返回顶端</b-button>\n    </b-back-top>\n  </div>\n</template>\n")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h3", {
  id: "scrollbaryong-fa"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#scrollbaryong-fa"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" scrollbar用法")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("p", null, "如果结合scrollbar使用则不需要配置其他项", -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", {
  class: "html"
}, "\n<template>\n  <div style=\"height:500px;overflow: auto;border:1px solid #eee;\">\n    <b-scrollbar style=\"height:100%;\" wrap-class=\"scrollbar-box\">\n      <div style=\"padding: 20px;\">\n        <div v-for=\"item in 80\" :key=\"item\" ref=\"item\">{{item}}:这是用来撑开内容的行...</div>\n      </div>\n      <b-back-top target=\".scrollbar-box\" :visible-height=\"200\" :bottom=\"100\">\n        <b-button type=\"info\" size=\"large\" icon=\"up\"></b-button>\n      </b-back-top>\n    </b-scrollbar>\n  </div>\n</template>\n")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["g" /* createStaticVNode */])("<h3 id=\"zi-ding-yi-yang-shi\"><a class=\"header-anchor\" href=\"#zi-ding-yi-yang-shi\">¶</a> 自定义样式</h3><p>自定义了位置在页面底部 200px,滚动至距顶端 200px 时显示。</p><pre><code class=\"hljs language-html\">\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">&quot;page-container&quot;</span> <span class=\"hljs-attr\">flex-box</span>=<span class=\"hljs-string\">&quot;1&quot;</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">b-scrollbar</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">&quot;height:100%;&quot;</span> <span class=\"hljs-attr\">ref</span>=<span class=\"hljs-string\">&quot;componentScrollBar&quot;</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">router-view</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">router-view</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">main-footer</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">main-footer</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">b-back-top</span> <span class=\"hljs-attr\">:height</span>=<span class=\"hljs-string\">&quot;200&quot;</span> <span class=\"hljs-attr\">:bottom</span>=<span class=\"hljs-string\">&quot;200&quot;</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">b-button</span> <span class=\"hljs-attr\">size</span>=<span class=\"hljs-string\">&quot;mini&quot;</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">&quot;success&quot;</span>&gt;</span>返回顶端<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">b-button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">b-back-top</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">b-scrollbar</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n</code></pre><h3 id=\"props\"><a class=\"header-anchor\" href=\"#props\">¶</a> Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>visible-height</td><td>页面滚动高度达到该值时才显示BackTop</td><td>Number</td><td>—</td><td>400</td></tr><tr><td>target</td><td>目标容器标识，可设置目标的class、id标识来制定滚动监听的内容</td><td>String</td><td>—</td><td>—</td></tr><tr><td>bottom</td><td>组件距离底部的距离</td><td>Number</td><td>—</td><td>50</td></tr><tr><td>right</td><td>组件距离右部的距离</td><td>Number</td><td>—</td><td>50</td></tr><tr><td>duration</td><td>滚动动画持续时间，单位 毫秒</td><td>Number</td><td>—</td><td>1000</td></tr></tbody></table><h3 id=\"events\"><a class=\"header-anchor\" href=\"#events\">¶</a> Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>返回值</th></tr></thead><tbody><tr><td>click</td><td>点击按钮时触发</td><td>无</td></tr></tbody></table>", 7);

function backtopvue_type_template_id_52ac90a0_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_b_anchor_link = Object(vue_esm_browser["D" /* resolveComponent */])("b-anchor-link");

  var _component_b_anchor = Object(vue_esm_browser["D" /* resolveComponent */])("b-anchor");

  var _component_element_demo0 = Object(vue_esm_browser["D" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["D" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["D" /* resolveComponent */])("element-demo1");

  return Object(vue_esm_browser["u" /* openBlock */])(), Object(vue_esm_browser["e" /* createBlock */])("section", backtopvue_type_template_id_52ac90a0_hoisted_1, [backtopvue_type_template_id_52ac90a0_hoisted_2, Object(vue_esm_browser["i" /* createVNode */])("div", backtopvue_type_template_id_52ac90a0_hoisted_3, [Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor, {
    "scroll-offset": 100
  }, {
    default: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#scrollbar-yong-fa",
        title: "scrollbar用法"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#zi-ding-yi-yang-shi",
        title: "自定义样式"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#props",
        title: "Props"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#events",
        title: "Events"
      })];
    }),
    _: 1
  })]), _hoisted_4, _hoisted_5, _hoisted_6, _hoisted_7, Object(vue_esm_browser["i" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["i" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [_hoisted_8];
    }),
    _: 1
  }), _hoisted_9, _hoisted_10, Object(vue_esm_browser["i" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["i" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [_hoisted_11];
    }),
    _: 1
  }), _hoisted_12]);
}
// CONCATENATED MODULE: ./examples/docs/backtop.md?vue&type=template&id=52ac90a0

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./build/md-loader!./examples/docs/backtop.md?vue&type=script&lang=ts
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


/* harmony default export */ var backtopvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _renderList = vue_esm_browser["B" /* renderList */],
          _Fragment = vue_esm_browser["a" /* Fragment */],
          _openBlock = vue_esm_browser["u" /* openBlock */],
          _createBlock = vue_esm_browser["e" /* createBlock */],
          _toDisplayString = vue_esm_browser["H" /* toDisplayString */],
          _createVNode = vue_esm_browser["i" /* createVNode */],
          _createTextVNode = vue_esm_browser["h" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _withCtx = vue_esm_browser["N" /* withCtx */];
      var _hoisted_1 = {
        style: {
          "height": "500px",
          "overflow": "auto",
          "border": "1px solid #eee"
        },
        class: "scroll-box"
      };
      var _hoisted_2 = {
        style: {
          "padding": "20px"
        }
      };

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("返回顶端");

      function render(_ctx, _cache) {
        var _component_b_button = _resolveComponent("b-button");

        var _component_b_back_top = _resolveComponent("b-back-top");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode("div", _hoisted_2, [(_openBlock(), _createBlock(_Fragment, null, _renderList(80, function (item) {
          return _createVNode("div", {
            key: item,
            ref: "item"
          }, _toDisplayString(item) + ":这是用来撑开内容的行...", 513);
        }), 64))]), _createVNode(_component_b_back_top, {
          target: ".scroll-box",
          "visible-height": 200,
          bottom: 100
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_b_button, {
              type: "success"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            })];
          }),
          _: 1
        })])]);
      }

      var democomponentExport = {};
      return _extends({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _renderList = vue_esm_browser["B" /* renderList */],
          _Fragment = vue_esm_browser["a" /* Fragment */],
          _openBlock = vue_esm_browser["u" /* openBlock */],
          _createBlock = vue_esm_browser["e" /* createBlock */],
          _toDisplayString = vue_esm_browser["H" /* toDisplayString */],
          _createVNode = vue_esm_browser["i" /* createVNode */],
          _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _withCtx = vue_esm_browser["N" /* withCtx */];
      var _hoisted_1 = {
        style: {
          "height": "500px",
          "overflow": "auto",
          "border": "1px solid #eee"
        }
      };
      var _hoisted_2 = {
        style: {
          "padding": "20px"
        }
      };

      function render(_ctx, _cache) {
        var _component_b_button = _resolveComponent("b-button");

        var _component_b_back_top = _resolveComponent("b-back-top");

        var _component_b_scrollbar = _resolveComponent("b-scrollbar");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode(_component_b_scrollbar, {
          style: {
            "height": "100%"
          },
          "wrap-class": "scrollbar-box"
        }, {
          default: _withCtx(function () {
            return [_createVNode("div", _hoisted_2, [(_openBlock(), _createBlock(_Fragment, null, _renderList(80, function (item) {
              return _createVNode("div", {
                key: item,
                ref: "item"
              }, _toDisplayString(item) + ":这是用来撑开内容的行...", 513);
            }), 64))]), _createVNode(_component_b_back_top, {
              target: ".scrollbar-box",
              "visible-height": 200,
              bottom: 100
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_b_button, {
                  type: "info",
                  size: "large",
                  icon: "up"
                })];
              }),
              _: 1
            })];
          }),
          _: 1
        })])]);
      }

      var democomponentExport = {};
      return _extends({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./examples/docs/backtop.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./examples/docs/backtop.md



backtopvue_type_script_lang_ts.render = backtopvue_type_template_id_52ac90a0_render

/* harmony default export */ var backtop = __webpack_exports__["default"] = (backtopvue_type_script_lang_ts);

/***/ })

}]);