(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./build/md-loader!./examples/docs/alert.md?vue&type=template&id=01c273ee

var alertvue_type_template_id_01c273ee_hoisted_1 = {
  class: "content element-doc"
};

var alertvue_type_template_id_01c273ee_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h2", {
  id: "alert-jing-gao-ti-shi"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#alert-jing-gao-ti-shi"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" Alert 警告提示")], -1);

var alertvue_type_template_id_01c273ee_hoisted_3 = {
  class: "global-anchor"
};

var alertvue_type_template_id_01c273ee_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("p", null, "静态的展示一些区块，提示或者警告，可以动态的去删除", -1);

var alertvue_type_template_id_01c273ee_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h3", {
  id: "ji-chu-yong-fa"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-chu-yong-fa"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" 基础用法")], -1);

var alertvue_type_template_id_01c273ee_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("p", null, "基础的按钮用法", -1);

var alertvue_type_template_id_01c273ee_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", {
  class: "html"
}, "\n<template>\n  <b-alert>info alert</b-alert>\n  <b-alert type=\"success\">success alert</b-alert>\n  <b-alert type=\"warning\">warning alert</b-alert>\n  <b-alert type=\"error\">error alert</b-alert>\n</template>\n")], -1);

var alertvue_type_template_id_01c273ee_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h3", {
  id: "bao-han-miao-shu-xin-xi"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#bao-han-miao-shu-xin-xi"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" 包含描述信息")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])("自定义"), /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", null, "#desc"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])("插入描述内容。")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", {
  class: "html"
}, "\n<template>\n  <b-alert>info alert\n    <template #desc>我是描述信息...</template>\n  </b-alert>\n  <b-alert type=\"success\">success alert\n    <template #desc>我是描述信息...</template>\n  </b-alert>\n  <b-alert type=\"warning\">warning alert\n    <template #desc>我是描述信息...</template>\n  </b-alert>\n  <b-alert type=\"error\">error alert\n    <template #desc>我是描述信息...</template>\n  </b-alert>\n</template>\n")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h3", {
  id: "tu-biao"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#tu-biao"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" 图标")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])("根据 "), /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" 属性自动添加不同图标，或者自定义图标 "), /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", null, "slot"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" 。")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", {
  class: "html"
}, "\n<template>\n  <b-alert show-icon>info alert</b-alert>\n  <b-alert type=\"success\" show-icon>success alert</b-alert>\n  <b-alert type=\"warning\" show-icon>warning alert</b-alert>\n  <b-alert type=\"error\" show-icon>error alert\n    <template #desc> Custom error description copywriting.</template>\n  </b-alert>\n  <b-alert show-icon>\n    自定义icon\n    <template #icon>\n      <b-icon name=\"smile\"></b-icon>\n    </template>\n    <template #desc>自定义icon描述</template>\n  </b-alert>\n</template>\n")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h3", {
  id: "ke-yi-guan-bi"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ke-yi-guan-bi"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" 可以关闭")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])("设置属性 "), /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", null, "banner"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" 可以应用顶部公告的样式。")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", {
  class: "html"
}, "\n<template>\n  <b-alert closable>An info prompt</b-alert>\n  <b-alert type=\"success\" show-icon closable>\n    A success prompt\n    <template #desc>Content of prompt. Content of prompt. Content of prompt. Content of prompt. </template>\n  </b-alert>\n  <b-alert type=\"warning\" closable>\n    Custom closing content\n    <template #close>No longer prompt</template>\n  </b-alert>\n</template>\n")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h3", {
  id: "ding-bu-gong-gao-yang-shi"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ding-bu-gong-gao-yang-shi"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" 顶部公告样式")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])("设置属性 "), /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", null, "banner"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" 可以应用顶部公告的样式。")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", {
  class: "html"
}, "\n<template>\n  <b-alert banner>公告样式...</b-alert>\n  <b-alert banner closable type=\"warning\">公告样式...</b-alert>\n</template>\n")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["g" /* createStaticVNode */])("<h3 id=\"props\"><a class=\"header-anchor\" href=\"#props\">¶</a> Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>警告提示样式</td><td>string</td><td>info、success、warning、error</td><td>info</td></tr><tr><td>closable</td><td>是否可关闭</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>show-icon</td><td>是否显示图标</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table><h3 id=\"events\"><a class=\"header-anchor\" href=\"#events\">¶</a> Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>返回值</th></tr></thead><tbody><tr><td>close</td><td>关闭时触发</td><td>event</td></tr></tbody></table><h3 id=\"slot\"><a class=\"header-anchor\" href=\"#slot\">¶</a> Slot</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>警告提示内容</td></tr><tr><td>desc</td><td>警告提示辅助性文字介绍</td></tr><tr><td>icon</td><td>自定义图标内容</td></tr><tr><td>close</td><td>自定义关闭内容</td></tr></tbody></table>", 6);

function alertvue_type_template_id_01c273ee_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_b_anchor_link = Object(vue_esm_browser["D" /* resolveComponent */])("b-anchor-link");

  var _component_b_anchor = Object(vue_esm_browser["D" /* resolveComponent */])("b-anchor");

  var _component_element_demo0 = Object(vue_esm_browser["D" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["D" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["D" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["D" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["D" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser["D" /* resolveComponent */])("element-demo4");

  return Object(vue_esm_browser["u" /* openBlock */])(), Object(vue_esm_browser["e" /* createBlock */])("section", alertvue_type_template_id_01c273ee_hoisted_1, [alertvue_type_template_id_01c273ee_hoisted_2, Object(vue_esm_browser["i" /* createVNode */])("div", alertvue_type_template_id_01c273ee_hoisted_3, [Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor, {
    "scroll-offset": 100
  }, {
    default: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#ji-chu-yong-fa",
        title: "基础用法"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#bao-han-miao-shu-xin-xi",
        title: "包含描述信息"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#tu-biao",
        title: "图标"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#ke-yi-guan-bi",
        title: "可以关闭"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#ding-bu-gong-gao-yang-shi",
        title: "顶部公告样式"
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
  })]), alertvue_type_template_id_01c273ee_hoisted_4, alertvue_type_template_id_01c273ee_hoisted_5, alertvue_type_template_id_01c273ee_hoisted_6, Object(vue_esm_browser["i" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["i" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [alertvue_type_template_id_01c273ee_hoisted_7];
    }),
    _: 1
  }), alertvue_type_template_id_01c273ee_hoisted_8, _hoisted_9, Object(vue_esm_browser["i" /* createVNode */])(_component_demo_block, null, {
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
  }), _hoisted_14, _hoisted_15, Object(vue_esm_browser["i" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["i" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [_hoisted_16];
    }),
    _: 1
  }), _hoisted_17, _hoisted_18, Object(vue_esm_browser["i" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["i" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [_hoisted_19];
    }),
    _: 1
  }), _hoisted_20]);
}
// CONCATENATED MODULE: ./examples/docs/alert.md?vue&type=template&id=01c273ee

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./build/md-loader!./examples/docs/alert.md?vue&type=script&lang=ts
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


/* harmony default export */ var alertvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createTextVNode = vue_esm_browser["h" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _withCtx = vue_esm_browser["N" /* withCtx */],
          _createVNode = vue_esm_browser["i" /* createVNode */],
          _openBlock = vue_esm_browser["u" /* openBlock */],
          _createBlock = vue_esm_browser["e" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("info alert");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("success alert");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("warning alert");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("error alert");

      function render(_ctx, _cache) {
        var _component_b_alert = _resolveComponent("b-alert");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_b_alert, null, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }), _createVNode(_component_b_alert, {
          type: "success"
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }), _createVNode(_component_b_alert, {
          type: "warning"
        }, {
          default: _withCtx(function () {
            return [_hoisted_3];
          }),
          _: 1
        }), _createVNode(_component_b_alert, {
          type: "error"
        }, {
          default: _withCtx(function () {
            return [_hoisted_4];
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("info alert ");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("我是描述信息...");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("success alert ");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("我是描述信息...");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("warning alert ");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("我是描述信息...");

      var _hoisted_7 = /*#__PURE__*/_createTextVNode("error alert ");

      var _hoisted_8 = /*#__PURE__*/_createTextVNode("我是描述信息...");

      function render(_ctx, _cache) {
        var _component_b_alert = _resolveComponent("b-alert");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_b_alert, null, {
          desc: _withCtx(function () {
            return [_hoisted_2];
          }),
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }), _createVNode(_component_b_alert, {
          type: "success"
        }, {
          desc: _withCtx(function () {
            return [_hoisted_4];
          }),
          default: _withCtx(function () {
            return [_hoisted_3];
          }),
          _: 1
        }), _createVNode(_component_b_alert, {
          type: "warning"
        }, {
          desc: _withCtx(function () {
            return [_hoisted_6];
          }),
          default: _withCtx(function () {
            return [_hoisted_5];
          }),
          _: 1
        }), _createVNode(_component_b_alert, {
          type: "error"
        }, {
          desc: _withCtx(function () {
            return [_hoisted_8];
          }),
          default: _withCtx(function () {
            return [_hoisted_7];
          }),
          _: 1
        })]);
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("info alert");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("success alert");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("warning alert");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("error alert ");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode(" Custom error description copywriting.");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode(" 自定义icon ");

      var _hoisted_7 = /*#__PURE__*/_createTextVNode("自定义icon描述");

      function render(_ctx, _cache) {
        var _component_b_alert = _resolveComponent("b-alert");

        var _component_b_icon = _resolveComponent("b-icon");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_b_alert, {
          "show-icon": ""
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }), _createVNode(_component_b_alert, {
          type: "success",
          "show-icon": ""
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }), _createVNode(_component_b_alert, {
          type: "warning",
          "show-icon": ""
        }, {
          default: _withCtx(function () {
            return [_hoisted_3];
          }),
          _: 1
        }), _createVNode(_component_b_alert, {
          type: "error",
          "show-icon": ""
        }, {
          desc: _withCtx(function () {
            return [_hoisted_5];
          }),
          default: _withCtx(function () {
            return [_hoisted_4];
          }),
          _: 1
        }), _createVNode(_component_b_alert, {
          "show-icon": ""
        }, {
          icon: _withCtx(function () {
            return [_createVNode(_component_b_icon, {
              name: "smile"
            })];
          }),
          desc: _withCtx(function () {
            return [_hoisted_7];
          }),
          default: _withCtx(function () {
            return [_hoisted_6];
          }),
          _: 1
        })]);
      }

      var democomponentExport = {};
      return _extends({
        render: render
      }, democomponentExport);
    }(),
    "element-demo3": function () {
      var _createTextVNode = vue_esm_browser["h" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _withCtx = vue_esm_browser["N" /* withCtx */],
          _createVNode = vue_esm_browser["i" /* createVNode */],
          _openBlock = vue_esm_browser["u" /* openBlock */],
          _createBlock = vue_esm_browser["e" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("An info prompt");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode(" A success prompt ");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Content of prompt. Content of prompt. Content of prompt. Content of prompt. ");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode(" Custom closing content ");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("No longer prompt");

      function render(_ctx, _cache) {
        var _component_b_alert = _resolveComponent("b-alert");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_b_alert, {
          closable: ""
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }), _createVNode(_component_b_alert, {
          type: "success",
          "show-icon": "",
          closable: ""
        }, {
          desc: _withCtx(function () {
            return [_hoisted_3];
          }),
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }), _createVNode(_component_b_alert, {
          type: "warning",
          closable: ""
        }, {
          close: _withCtx(function () {
            return [_hoisted_5];
          }),
          default: _withCtx(function () {
            return [_hoisted_4];
          }),
          _: 1
        })]);
      }

      var democomponentExport = {};
      return _extends({
        render: render
      }, democomponentExport);
    }(),
    "element-demo4": function () {
      var _createTextVNode = vue_esm_browser["h" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _withCtx = vue_esm_browser["N" /* withCtx */],
          _createVNode = vue_esm_browser["i" /* createVNode */],
          _openBlock = vue_esm_browser["u" /* openBlock */],
          _createBlock = vue_esm_browser["e" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("公告样式...");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("公告样式...");

      function render(_ctx, _cache) {
        var _component_b_alert = _resolveComponent("b-alert");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_b_alert, {
          banner: ""
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }), _createVNode(_component_b_alert, {
          banner: "",
          closable: "",
          type: "warning"
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
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
// CONCATENATED MODULE: ./examples/docs/alert.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./examples/docs/alert.md



alertvue_type_script_lang_ts.render = alertvue_type_template_id_01c273ee_render

/* harmony default export */ var docs_alert = __webpack_exports__["default"] = (alertvue_type_script_lang_ts);

/***/ })

}]);