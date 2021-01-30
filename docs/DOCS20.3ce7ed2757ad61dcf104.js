(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./build/md-loader!./examples/docs/divider.md?vue&type=template&id=2c77d0b4

var dividervue_type_template_id_2c77d0b4_hoisted_1 = {
  class: "content element-doc"
};

var dividervue_type_template_id_2c77d0b4_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h2", {
  id: "divider-fen-ge-xian"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#divider-fen-ge-xian"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" Divider 分割线")], -1);

var dividervue_type_template_id_2c77d0b4_hoisted_3 = {
  class: "global-anchor"
};

var dividervue_type_template_id_2c77d0b4_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("p", null, "区隔内容的分割线。可以对对不同文本段落进行分割。可以对行内文字/链接进行分割，例如表格的操作列。", -1);

var dividervue_type_template_id_2c77d0b4_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h3", {
  id: "shui-ping-fen-ge-xian"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#shui-ping-fen-ge-xian"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" 水平分割线")], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("p", null, "默认为水平分割线，可在中间加入文字。 可以是虚线", -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", {
  class: "html"
}, "\n<template>\n  <p>这是一段文字...这是一段文字...这是一段文字...这是一段文字...这是一段文字...</p>\n  <b-divider></b-divider>\n  <p>这是一段文字...这是一段文字...这是一段文字...这是一段文字...这是一段文字...</p>\n  <b-divider>With Text</b-divider>\n  <p>这是一段文字...这是一段文字...这是一段文字...这是一段文字...这是一段文字...</p>\n  <b-divider dashed></b-divider>\n  <p>这是一段文字...这是一段文字...这是一段文字...这是一段文字...这是一段文字...</p>\n</template>\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h3", {
  id: "chui-zhi-fen-ge-xian"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#chui-zhi-fen-ge-xian"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" 垂直分割线")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("p", null, "使用 type=\"vertical\" 设置为行内的垂直分割线。", -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", {
  class: "html"
}, "\n<template>\n  Text\n  <b-divider type=\"vertical\"></b-divider>\n  <a href=\"#\">Link</a>\n  <b-divider type=\"vertical\"></b-divider>\n  <a href=\"#\">Link</a>\n</template>\n")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h3", {
  id: "xiu-gai-biao-ti-de-wei-zhi"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#xiu-gai-biao-ti-de-wei-zhi"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" 修改标题的位置")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("p", null, "align属性可以设置标题位置 使用 align=\"left\" 设置为行内的垂直分割线。", -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", {
  class: "html"
}, "\n<template>\n  <b-divider align=\"left\">左对齐</b-divider>\n  <b-divider align=\"center\">居中对齐</b-divider>\n  <b-divider align=\"right\">右对齐</b-divider>\n</template>\n")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["g" /* createStaticVNode */])("<h3 id=\"props\"><a class=\"header-anchor\" href=\"#props\">¶</a> Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>水平还是垂直类型</td><td>string</td><td>horizontal / vertical</td><td>horizontal</td></tr><tr><td>align</td><td>分割线标题的位置</td><td>string</td><td>left / right / center</td><td>center</td></tr><tr><td>dashed</td><td>是否虚线</td><td>Boolean</td><td>false / true</td><td>false</td></tr></tbody></table>", 2);

function dividervue_type_template_id_2c77d0b4_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_b_anchor_link = Object(vue_esm_browser["D" /* resolveComponent */])("b-anchor-link");

  var _component_b_anchor = Object(vue_esm_browser["D" /* resolveComponent */])("b-anchor");

  var _component_element_demo0 = Object(vue_esm_browser["D" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["D" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["D" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["D" /* resolveComponent */])("element-demo2");

  return Object(vue_esm_browser["u" /* openBlock */])(), Object(vue_esm_browser["e" /* createBlock */])("section", dividervue_type_template_id_2c77d0b4_hoisted_1, [dividervue_type_template_id_2c77d0b4_hoisted_2, Object(vue_esm_browser["i" /* createVNode */])("div", dividervue_type_template_id_2c77d0b4_hoisted_3, [Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor, {
    "scroll-offset": 100
  }, {
    default: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#shui-ping-fen-ge-xian",
        title: "水平分割线"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#chui-zhi-fen-ge-xian",
        title: "垂直分割线"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#xiu-gai-biao-ti-de-wei-zhi",
        title: "修改标题的位置"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#props",
        title: "Props"
      })];
    }),
    _: 1
  })]), dividervue_type_template_id_2c77d0b4_hoisted_4, dividervue_type_template_id_2c77d0b4_hoisted_5, _hoisted_6, Object(vue_esm_browser["i" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["i" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [_hoisted_7];
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
  }), _hoisted_11, _hoisted_12, Object(vue_esm_browser["i" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["i" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [_hoisted_13];
    }),
    _: 1
  }), _hoisted_14]);
}
// CONCATENATED MODULE: ./examples/docs/divider.md?vue&type=template&id=2c77d0b4

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./build/md-loader!./examples/docs/divider.md?vue&type=script&lang=ts
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


/* harmony default export */ var dividervue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createVNode = vue_esm_browser["i" /* createVNode */],
          _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _createTextVNode = vue_esm_browser["h" /* createTextVNode */],
          _withCtx = vue_esm_browser["N" /* withCtx */],
          _openBlock = vue_esm_browser["u" /* openBlock */],
          _createBlock = vue_esm_browser["e" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("p", null, "这是一段文字...这是一段文字...这是一段文字...这是一段文字...这是一段文字...", -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("p", null, "这是一段文字...这是一段文字...这是一段文字...这是一段文字...这是一段文字...", -1);

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("With Text");

      var _hoisted_4 = /*#__PURE__*/_createVNode("p", null, "这是一段文字...这是一段文字...这是一段文字...这是一段文字...这是一段文字...", -1);

      var _hoisted_5 = /*#__PURE__*/_createVNode("p", null, "这是一段文字...这是一段文字...这是一段文字...这是一段文字...这是一段文字...", -1);

      function render(_ctx, _cache) {
        var _component_b_divider = _resolveComponent("b-divider");

        return _openBlock(), _createBlock("div", null, [_hoisted_1, _createVNode(_component_b_divider), _hoisted_2, _createVNode(_component_b_divider, null, {
          default: _withCtx(function () {
            return [_hoisted_3];
          }),
          _: 1
        }), _hoisted_4, _createVNode(_component_b_divider, {
          dashed: ""
        }), _hoisted_5]);
      }

      var democomponentExport = {};
      return _extends({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _createVNode = vue_esm_browser["i" /* createVNode */],
          _createTextVNode = vue_esm_browser["h" /* createTextVNode */],
          _openBlock = vue_esm_browser["u" /* openBlock */],
          _createBlock = vue_esm_browser["e" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode(" Text ");

      var _hoisted_2 = /*#__PURE__*/_createVNode("a", {
        href: "#"
      }, "Link", -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("a", {
        href: "#"
      }, "Link", -1);

      function render(_ctx, _cache) {
        var _component_b_divider = _resolveComponent("b-divider");

        return _openBlock(), _createBlock("div", null, [_hoisted_1, _createVNode(_component_b_divider, {
          type: "vertical"
        }), _hoisted_2, _createVNode(_component_b_divider, {
          type: "vertical"
        }), _hoisted_3]);
      }

      var democomponentExport = {};
      return _extends({
        render: render
      }, democomponentExport);
    }(),
    "element-demo2": function () {
      var _createTextVNode = vue_esm_browser["h" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _withCtx = vue_esm_browser["N" /* withCtx */],
          _createVNode = vue_esm_browser["i" /* createVNode */],
          _openBlock = vue_esm_browser["u" /* openBlock */],
          _createBlock = vue_esm_browser["e" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("左对齐");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("居中对齐");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("右对齐");

      function render(_ctx, _cache) {
        var _component_b_divider = _resolveComponent("b-divider");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_b_divider, {
          align: "left"
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }), _createVNode(_component_b_divider, {
          align: "center"
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }), _createVNode(_component_b_divider, {
          align: "right"
        }, {
          default: _withCtx(function () {
            return [_hoisted_3];
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
// CONCATENATED MODULE: ./examples/docs/divider.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./examples/docs/divider.md



dividervue_type_script_lang_ts.render = dividervue_type_template_id_2c77d0b4_render

/* harmony default export */ var divider = __webpack_exports__["default"] = (dividervue_type_script_lang_ts);

/***/ })

}]);