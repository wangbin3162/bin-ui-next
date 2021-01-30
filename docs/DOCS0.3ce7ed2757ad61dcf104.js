(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./build/md-loader!./examples/docs/affix.md?vue&type=template&id=df137d5c

var affixvue_type_template_id_df137d5c_hoisted_1 = {
  class: "content element-doc"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h2", {
  id: "affix-tu-ding"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#affix-tu-ding"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" Affix 图钉")], -1);

var _hoisted_3 = {
  class: "global-anchor"
};

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h3", {
  id: "ji-chu-yong-fa"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-chu-yong-fa"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" 基础用法")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("p", null, "原生滚动相对于window窗口固定，也可以结合scrollbar进行配置", -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", {
  class: "html"
}, "\n<template>\n  <b-affix :offset=\"80\">\n    <b-button type=\"primary\">固定在顶部80的位置</b-button>\n  </b-affix>\n</template>\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h3", {
  id: "gu-ding-wei-zhi"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#gu-ding-wei-zhi"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" 固定位置")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("p", null, "可以设置固定距离底部的位置", -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", {
  class: "html"
}, "\n<template>\n  <b-affix :offset=\"20\" position=\"bottom\">\n    <b-button type=\"primary\">固定在底部20的位置</b-button>\n  </b-affix>\n</template>\n")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["g" /* createStaticVNode */])("<h3 id=\"props\"><a class=\"header-anchor\" href=\"#props\">¶</a> Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>offset</td><td>距离窗口位置触发</td><td>Number</td><td>—</td><td>0</td></tr><tr><td>position</td><td>可设置距离顶部或底部</td><td>String</td><td>top、bottom</td><td>top</td></tr><tr><td>z-index</td><td>层级</td><td>Number</td><td>—</td><td>10</td></tr></tbody></table><h3 id=\"events\"><a class=\"header-anchor\" href=\"#events\">¶</a> Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>返回值</th></tr></thead><tbody><tr><td>change</td><td>在固定状态发生改变时触发</td><td>true/false</td></tr><tr><td>scroll</td><td>滚动响应事件</td><td>Object{scrollTop,fixed}</td></tr></tbody></table><h3 id=\"slot\"><a class=\"header-anchor\" href=\"#slot\">¶</a> Slot</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>警告提示内容</td></tr></tbody></table>", 6);

function affixvue_type_template_id_df137d5c_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_b_anchor_link = Object(vue_esm_browser["D" /* resolveComponent */])("b-anchor-link");

  var _component_b_anchor = Object(vue_esm_browser["D" /* resolveComponent */])("b-anchor");

  var _component_element_demo0 = Object(vue_esm_browser["D" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["D" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["D" /* resolveComponent */])("element-demo1");

  return Object(vue_esm_browser["u" /* openBlock */])(), Object(vue_esm_browser["e" /* createBlock */])("section", affixvue_type_template_id_df137d5c_hoisted_1, [_hoisted_2, Object(vue_esm_browser["i" /* createVNode */])("div", _hoisted_3, [Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor, {
    "scroll-offset": 100
  }, {
    default: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#ji-chu-yong-fa",
        title: "基础用法"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#gu-ding-wei-zhi",
        title: "固定位置"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#props",
        title: "Props"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#events",
        title: "Events"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#slot",
        title: "Slot"
      })];
    }),
    _: 1
  })]), _hoisted_4, _hoisted_5, Object(vue_esm_browser["i" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["i" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    _: 1
  }), _hoisted_7, _hoisted_8, Object(vue_esm_browser["i" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["i" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [_hoisted_9];
    }),
    _: 1
  }), _hoisted_10]);
}
// CONCATENATED MODULE: ./examples/docs/affix.md?vue&type=template&id=df137d5c

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./build/md-loader!./examples/docs/affix.md?vue&type=script&lang=ts
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


/* harmony default export */ var affixvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createTextVNode = vue_esm_browser["h" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _withCtx = vue_esm_browser["N" /* withCtx */],
          _createVNode = vue_esm_browser["i" /* createVNode */],
          _openBlock = vue_esm_browser["u" /* openBlock */],
          _createBlock = vue_esm_browser["e" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("固定在顶部80的位置");

      function render(_ctx, _cache) {
        var _component_b_button = _resolveComponent("b-button");

        var _component_b_affix = _resolveComponent("b-affix");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_b_affix, {
          offset: 80
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_b_button, {
              type: "primary"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            })];
          }),
          _: 1
        })]);
      }

      var democomponentExport = {};
      return _extends({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _createTextVNode = vue_esm_browser["h" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _withCtx = vue_esm_browser["N" /* withCtx */],
          _createVNode = vue_esm_browser["i" /* createVNode */],
          _openBlock = vue_esm_browser["u" /* openBlock */],
          _createBlock = vue_esm_browser["e" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("固定在底部20的位置");

      function render(_ctx, _cache) {
        var _component_b_button = _resolveComponent("b-button");

        var _component_b_affix = _resolveComponent("b-affix");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_b_affix, {
          offset: 20,
          position: "bottom"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_b_button, {
              type: "primary"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            })];
          }),
          _: 1
        })]);
      }

      var democomponentExport = {};
      return _extends({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./examples/docs/affix.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./examples/docs/affix.md



affixvue_type_script_lang_ts.render = affixvue_type_template_id_df137d5c_render

/* harmony default export */ var affix = __webpack_exports__["default"] = (affixvue_type_script_lang_ts);

/***/ })

}]);