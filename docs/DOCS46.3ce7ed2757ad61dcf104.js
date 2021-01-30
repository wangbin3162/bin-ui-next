(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[41],{

/***/ 562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./build/md-loader!./examples/docs/split.md?vue&type=template&id=12a8f6d4

var splitvue_type_template_id_12a8f6d4_hoisted_1 = {
  class: "content element-doc"
};

var splitvue_type_template_id_12a8f6d4_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h2", {
  id: "split-fen-ge-mian-ban"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#split-fen-ge-mian-ban"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" Split 分割面板")], -1);

var splitvue_type_template_id_12a8f6d4_hoisted_3 = {
  class: "global-anchor"
};

var splitvue_type_template_id_12a8f6d4_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h3", {
  id: "ji-chu-yong-fa"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-chu-yong-fa"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" 基础用法")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", null, "default-percent"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" 用于设置左侧默认宽度百分比")], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", {
  class: "html"
}, "\n<template>\n  <div style=\"width: 100%;height: 300px;border:1px solid #ddd;\">\n    <b-split :default-percent=\"50\">\n      <template #left>\n        <div class=\"left-container\">左侧容器</div>\n      </template>\n      <template #right>\n        <div class=\"right-container\">右侧容器</div>\n      </template>\n    </b-split>\n  </div>\n</template>\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h3", {
  id: "shang-xia-fen-ge"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#shang-xia-fen-ge"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" 上下分割")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", {
  class: "html"
}, "\n<template>\n  <div style=\"width: 100%;height: 300px;border:1px solid #ddd;\">\n    <b-split split=\"horizontal\">\n      <template #left>\n        <div class=\"left-container\">上边容器</div>\n      </template>\n      <template #right>\n        <div class=\"right-container\">下面容器</div>\n      </template>\n    </b-split>\n  </div>\n</template>\n")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h3", {
  id: "qian-tao-shi-yong"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#qian-tao-shi-yong"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" 嵌套使用")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", {
  class: "html"
}, "\n<template>\n  <div style=\"width: 100%;height: 300px;border:1px solid #ddd;\">\n    <b-split>\n      <template #left>\n        <div class=\"left-container\">左侧容器</div>\n      </template>\n      <template #right>\n        <b-split split=\"horizontal\">\n          <template #left>\n            <div class=\"top-container\">上部容器</div>\n          </template>\n          <template #right>\n            <div class=\"bottom-container\">下部容器</div>\n          </template>\n        </b-split>\n      </template>\n    </b-split>\n  </div>\n</template>\n")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["g" /* createStaticVNode */])("<h3 id=\"props\"><a class=\"header-anchor\" href=\"#props\">¶</a> Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>split</td><td>分割类型</td><td>String</td><td>&#39;vertical&#39;, &#39;horizontal&#39;</td><td>vertical</td></tr><tr><td>min-percent</td><td>最小百分比</td><td>Number</td><td>—</td><td>10</td></tr><tr><td>default-percent</td><td>默认百分比</td><td>Number</td><td>—</td><td>20</td></tr></tbody></table><h3 id=\"events\"><a class=\"header-anchor\" href=\"#events\">¶</a> Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>返回值</th></tr></thead><tbody><tr><td>resize</td><td>重置大小</td><td>percent</td></tr></tbody></table><h3 id=\"slot\"><a class=\"header-anchor\" href=\"#slot\">¶</a> Slot</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>left</td><td>split 为 vertical 时左边面板 horizontal 时为上边面板</td></tr><tr><td>right</td><td>split 为 vertical 时右边面板 horizontal 时为下边面板</td></tr></tbody></table>", 6);

function splitvue_type_template_id_12a8f6d4_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_b_anchor_link = Object(vue_esm_browser["D" /* resolveComponent */])("b-anchor-link");

  var _component_b_anchor = Object(vue_esm_browser["D" /* resolveComponent */])("b-anchor");

  var _component_element_demo0 = Object(vue_esm_browser["D" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["D" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["D" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["D" /* resolveComponent */])("element-demo2");

  return Object(vue_esm_browser["u" /* openBlock */])(), Object(vue_esm_browser["e" /* createBlock */])("section", splitvue_type_template_id_12a8f6d4_hoisted_1, [splitvue_type_template_id_12a8f6d4_hoisted_2, Object(vue_esm_browser["i" /* createVNode */])("div", splitvue_type_template_id_12a8f6d4_hoisted_3, [Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor, {
    "scroll-offset": 100
  }, {
    default: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#ji-chu-yong-fa",
        title: "基础用法"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#props",
        title: "Props"
      })];
    }),
    _: 1
  })]), splitvue_type_template_id_12a8f6d4_hoisted_4, _hoisted_5, Object(vue_esm_browser["i" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["i" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    _: 1
  }), _hoisted_7, Object(vue_esm_browser["i" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["i" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [_hoisted_8];
    }),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser["i" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["i" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [_hoisted_10];
    }),
    _: 1
  }), _hoisted_11]);
}
// CONCATENATED MODULE: ./examples/docs/split.md?vue&type=template&id=12a8f6d4

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./build/md-loader!./examples/docs/split.md?vue&type=script&lang=ts
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


/* harmony default export */ var splitvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createVNode = vue_esm_browser["i" /* createVNode */],
          _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _withCtx = vue_esm_browser["N" /* withCtx */],
          _openBlock = vue_esm_browser["u" /* openBlock */],
          _createBlock = vue_esm_browser["e" /* createBlock */];
      var _hoisted_1 = {
        style: {
          "width": "100%",
          "height": "300px",
          "border": "1px solid #ddd"
        }
      };

      var _hoisted_2 = /*#__PURE__*/_createVNode("div", {
        class: "left-container"
      }, "左侧容器", -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("div", {
        class: "right-container"
      }, "右侧容器", -1);

      function render(_ctx, _cache) {
        var _component_b_split = _resolveComponent("b-split");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode(_component_b_split, {
          "default-percent": 50
        }, {
          left: _withCtx(function () {
            return [_hoisted_2];
          }),
          right: _withCtx(function () {
            return [_hoisted_3];
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
      var _createVNode = vue_esm_browser["i" /* createVNode */],
          _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _withCtx = vue_esm_browser["N" /* withCtx */],
          _openBlock = vue_esm_browser["u" /* openBlock */],
          _createBlock = vue_esm_browser["e" /* createBlock */];
      var _hoisted_1 = {
        style: {
          "width": "100%",
          "height": "300px",
          "border": "1px solid #ddd"
        }
      };

      var _hoisted_2 = /*#__PURE__*/_createVNode("div", {
        class: "left-container"
      }, "上边容器", -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("div", {
        class: "right-container"
      }, "下面容器", -1);

      function render(_ctx, _cache) {
        var _component_b_split = _resolveComponent("b-split");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode(_component_b_split, {
          split: "horizontal"
        }, {
          left: _withCtx(function () {
            return [_hoisted_2];
          }),
          right: _withCtx(function () {
            return [_hoisted_3];
          }),
          _: 1
        })])]);
      }

      var democomponentExport = {};
      return _extends({
        render: render
      }, democomponentExport);
    }(),
    "element-demo2": function () {
      var _createVNode = vue_esm_browser["i" /* createVNode */],
          _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _withCtx = vue_esm_browser["N" /* withCtx */],
          _openBlock = vue_esm_browser["u" /* openBlock */],
          _createBlock = vue_esm_browser["e" /* createBlock */];
      var _hoisted_1 = {
        style: {
          "width": "100%",
          "height": "300px",
          "border": "1px solid #ddd"
        }
      };

      var _hoisted_2 = /*#__PURE__*/_createVNode("div", {
        class: "left-container"
      }, "左侧容器", -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("div", {
        class: "top-container"
      }, "上部容器", -1);

      var _hoisted_4 = /*#__PURE__*/_createVNode("div", {
        class: "bottom-container"
      }, "下部容器", -1);

      function render(_ctx, _cache) {
        var _component_b_split = _resolveComponent("b-split");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode(_component_b_split, null, {
          left: _withCtx(function () {
            return [_hoisted_2];
          }),
          right: _withCtx(function () {
            return [_createVNode(_component_b_split, {
              split: "horizontal"
            }, {
              left: _withCtx(function () {
                return [_hoisted_3];
              }),
              right: _withCtx(function () {
                return [_hoisted_4];
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
// CONCATENATED MODULE: ./examples/docs/split.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./examples/docs/split.md



splitvue_type_script_lang_ts.render = splitvue_type_template_id_12a8f6d4_render

/* harmony default export */ var split = __webpack_exports__["default"] = (splitvue_type_script_lang_ts);

/***/ })

}]);