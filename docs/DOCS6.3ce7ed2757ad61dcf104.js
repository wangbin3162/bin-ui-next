(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[56],{

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./build/md-loader!./examples/docs/breadcrumb.md?vue&type=template&id=4fd308f3

var breadcrumbvue_type_template_id_4fd308f3_hoisted_1 = {
  class: "content element-doc"
};

var breadcrumbvue_type_template_id_4fd308f3_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h2", {
  id: "breadcrumb-mian-bao-xie"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#breadcrumb-mian-bao-xie"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" Breadcrumb 面包屑")], -1);

var breadcrumbvue_type_template_id_4fd308f3_hoisted_3 = {
  class: "global-anchor"
};

var breadcrumbvue_type_template_id_4fd308f3_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("p", null, "显示当前页面的路径，快速返回之前的任意页面或者跳转链接", -1);

var breadcrumbvue_type_template_id_4fd308f3_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h3", {
  id: "ji-chu-yong-fa"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-chu-yong-fa"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" 基础用法")], -1);

var breadcrumbvue_type_template_id_4fd308f3_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("p", null, "面包屑的用法，separator设置分隔符 :to表示当前为router a标签引用", -1);

var breadcrumbvue_type_template_id_4fd308f3_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", {
  class: "html"
}, "\n<template>\n  <b-breadcrumb separator=\"/\">\n    <b-breadcrumb-item :to=\"{ path: '/' }\">首页</b-breadcrumb-item>\n    <b-breadcrumb-item><a href=\"/\">组件</a></b-breadcrumb-item>\n    <b-breadcrumb-item>面包屑</b-breadcrumb-item>\n  </b-breadcrumb>\n</template>\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h3", {
  id: "fen-ge-fu"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#fen-ge-fu"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" 分隔符")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("p", null, "可以设置分隔符", -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", {
  class: "html"
}, "\n<template>\n  <b-breadcrumb separator-icon=\"right\">\n    <b-breadcrumb-item :to=\"{ path: '/' }\">首页</b-breadcrumb-item>\n    <b-breadcrumb-item><a href=\"/\">组件</a></b-breadcrumb-item>\n    <b-breadcrumb-item>面包屑</b-breadcrumb-item>\n  </b-breadcrumb>\n  <br>\n  <b-breadcrumb separator-icon=\"caret-right\">\n    <b-breadcrumb-item :to=\"{ path: '/' }\">首页</b-breadcrumb-item>\n    <b-breadcrumb-item><a href=\"/\">组件</a></b-breadcrumb-item>\n    <b-breadcrumb-item>面包屑</b-breadcrumb-item>\n  </b-breadcrumb>\n</template>\n")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["g" /* createStaticVNode */])("<h3 id=\"breadcrumb-props\"><a class=\"header-anchor\" href=\"#breadcrumb-props\">¶</a> Breadcrumb Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>separator</td><td>分隔</td><td>string</td><td>—</td><td>&#39;/&#39;</td></tr><tr><td>separator-icon</td><td>图标分隔符icon</td><td>string</td><td>—</td><td>—</td></tr></tbody></table><h3 id=\"breadcrumb-item-props\"><a class=\"header-anchor\" href=\"#breadcrumb-item-props\">¶</a> Breadcrumb Item Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>to</td><td>路由跳转对象，同 vue-router 的 to</td><td>string/object</td><td>—</td><td>—</td></tr><tr><td>replace</td><td>不向 history 添加新记录</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>", 4);

function breadcrumbvue_type_template_id_4fd308f3_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_b_anchor_link = Object(vue_esm_browser["D" /* resolveComponent */])("b-anchor-link");

  var _component_b_anchor = Object(vue_esm_browser["D" /* resolveComponent */])("b-anchor");

  var _component_element_demo0 = Object(vue_esm_browser["D" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["D" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["D" /* resolveComponent */])("element-demo1");

  return Object(vue_esm_browser["u" /* openBlock */])(), Object(vue_esm_browser["e" /* createBlock */])("section", breadcrumbvue_type_template_id_4fd308f3_hoisted_1, [breadcrumbvue_type_template_id_4fd308f3_hoisted_2, Object(vue_esm_browser["i" /* createVNode */])("div", breadcrumbvue_type_template_id_4fd308f3_hoisted_3, [Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor, {
    "scroll-offset": 100
  }, {
    default: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#ji-chu-yong-fa",
        title: "基础用法"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#fen-ge-fu",
        title: "分隔符"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#breadcrumb-props",
        title: "Breadcrumb Props"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#breadcrumb-item-props",
        title: "Breadcrumb Item Props"
      })];
    }),
    _: 1
  })]), breadcrumbvue_type_template_id_4fd308f3_hoisted_4, breadcrumbvue_type_template_id_4fd308f3_hoisted_5, breadcrumbvue_type_template_id_4fd308f3_hoisted_6, Object(vue_esm_browser["i" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["i" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [breadcrumbvue_type_template_id_4fd308f3_hoisted_7];
    }),
    _: 1
  }), _hoisted_8, _hoisted_9, Object(vue_esm_browser["i" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["i" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [_hoisted_10];
    }),
    _: 1
  }), _hoisted_11]);
}
// CONCATENATED MODULE: ./examples/docs/breadcrumb.md?vue&type=template&id=4fd308f3

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./build/md-loader!./examples/docs/breadcrumb.md?vue&type=script&lang=ts
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


/* harmony default export */ var breadcrumbvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createTextVNode = vue_esm_browser["h" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _withCtx = vue_esm_browser["N" /* withCtx */],
          _createVNode = vue_esm_browser["i" /* createVNode */],
          _openBlock = vue_esm_browser["u" /* openBlock */],
          _createBlock = vue_esm_browser["e" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("首页");

      var _hoisted_2 = /*#__PURE__*/_createVNode("a", {
        href: "/"
      }, "组件", -1);

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("面包屑");

      function render(_ctx, _cache) {
        var _component_b_breadcrumb_item = _resolveComponent("b-breadcrumb-item");

        var _component_b_breadcrumb = _resolveComponent("b-breadcrumb");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_b_breadcrumb, {
          separator: "/"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_b_breadcrumb_item, {
              to: {
                path: '/'
              }
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_b_breadcrumb_item, null, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_b_breadcrumb_item, null, {
              default: _withCtx(function () {
                return [_hoisted_3];
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("首页");

      var _hoisted_2 = /*#__PURE__*/_createVNode("a", {
        href: "/"
      }, "组件", -1);

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("面包屑");

      var _hoisted_4 = /*#__PURE__*/_createVNode("br", null, null, -1);

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("首页");

      var _hoisted_6 = /*#__PURE__*/_createVNode("a", {
        href: "/"
      }, "组件", -1);

      var _hoisted_7 = /*#__PURE__*/_createTextVNode("面包屑");

      function render(_ctx, _cache) {
        var _component_b_breadcrumb_item = _resolveComponent("b-breadcrumb-item");

        var _component_b_breadcrumb = _resolveComponent("b-breadcrumb");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_b_breadcrumb, {
          "separator-icon": "right"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_b_breadcrumb_item, {
              to: {
                path: '/'
              }
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_b_breadcrumb_item, null, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_b_breadcrumb_item, null, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _hoisted_4, _createVNode(_component_b_breadcrumb, {
          "separator-icon": "caret-right"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_b_breadcrumb_item, {
              to: {
                path: '/'
              }
            }, {
              default: _withCtx(function () {
                return [_hoisted_5];
              }),
              _: 1
            }), _createVNode(_component_b_breadcrumb_item, null, {
              default: _withCtx(function () {
                return [_hoisted_6];
              }),
              _: 1
            }), _createVNode(_component_b_breadcrumb_item, null, {
              default: _withCtx(function () {
                return [_hoisted_7];
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
// CONCATENATED MODULE: ./examples/docs/breadcrumb.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./examples/docs/breadcrumb.md



breadcrumbvue_type_script_lang_ts.render = breadcrumbvue_type_template_id_4fd308f3_render

/* harmony default export */ var breadcrumb = __webpack_exports__["default"] = (breadcrumbvue_type_script_lang_ts);

/***/ })

}]);