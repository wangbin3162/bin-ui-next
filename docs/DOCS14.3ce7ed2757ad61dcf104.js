(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./build/md-loader!./examples/docs/collapse.md?vue&type=template&id=052398ac

var collapsevue_type_template_id_052398ac_hoisted_1 = {
  class: "content element-doc"
};

var collapsevue_type_template_id_052398ac_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h2", {
  id: "collapse-zhe-die-mian-ban"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#collapse-zhe-die-mian-ban"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" Collapse 折叠面板")], -1);

var _hoisted_3 = {
  class: "global-anchor"
};

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("p", null, "需要进行分段显示时使用折叠面板", -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h3", {
  id: "ji-chu-yong-fa"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-chu-yong-fa"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" 基础用法")], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("p", null, "默认可以同时展开多个面板，可以设置默认展开第几个。", -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", {
  class: "html"
}, "\n<template>\n  <div style=\"width:500px;\">\n    <b-collapse v-model=\"value1\">\n      <b-collapse-panel title=\"面板一标题\" name=\"1\">\n        <p v-for=\"i in 3\" :key=\"i\">我是内容我是内容...</p>\n      </b-collapse-panel>\n      <b-collapse-panel title=\"面板二标题\" name=\"2\">\n        <p v-for=\"i in 3\" :key=\"i\">我是内容我是内容...</p>\n      </b-collapse-panel>\n      <b-collapse-panel title=\"面板三标题\" name=\"3\">\n        <p v-for=\"i in 3\" :key=\"i\">我是内容我是内容...</p>\n      </b-collapse-panel>\n    </b-collapse>\n  </div>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        value1: '1'\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h3", {
  id: "shou-feng-qin-mo-shi"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#shou-feng-qin-mo-shi"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" 手风琴模式")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("p", null, "手风琴模式默认只能开启一个", -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", {
  class: "html"
}, "\n<template>\n  <div style=\"width:500px;\">\n    <b-collapse v-model=\"value2\" accordion>\n      <b-collapse-panel title=\"面板一标题\" name=\"1\">\n        <p v-for=\"i in 3\" :key=\"i\">我是内容我是内容...</p>\n      </b-collapse-panel>\n      <b-collapse-panel title=\"面板二标题\" name=\"2\">\n        <p v-for=\"i in 3\" :key=\"i\">我是内容我是内容...</p>\n      </b-collapse-panel>\n      <b-collapse-panel title=\"面板三标题\" name=\"3\">\n        <p v-for=\"i in 3\" :key=\"i\">我是内容我是内容...</p>\n      </b-collapse-panel>\n    </b-collapse>\n  </div>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        value2: '1'\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h3", {
  id: "jian-dan-mo-shi-he-zi-ding-yi-tou"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#jian-dan-mo-shi-he-zi-ding-yi-tou"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" 简单模式和自定义头")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("p", null, "simple 设置简单模式", -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", {
  class: "html"
}, "\n<template>\n  <div style=\"width:500px;\">\n    <b-collapse v-model=\"value3\" simple>\n      <b-collapse-panel name=\"1\">\n        <template #title>\n          面板一标题\n          <b-icon name=\"smile\" size=\"18\"></b-icon>\n        </template>\n        <p v-for=\"i in 3\" :key=\"i\">我是内容我是内容...</p>\n      </b-collapse-panel>\n      <b-collapse-panel title=\"面板二标题\" name=\"2\">\n        <p v-for=\"i in 3\" :key=\"i\">我是内容我是内容...</p>\n      </b-collapse-panel>\n      <b-collapse-panel title=\"面板三标题\" name=\"3\">\n        <p v-for=\"i in 3\" :key=\"i\">我是内容我是内容...</p>\n      </b-collapse-panel>\n    </b-collapse>\n  </div>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        value3: '1'\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h3", {
  id: "rong-qi-zu-jian"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#rong-qi-zu-jian"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" 容器组件")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])("使用"), /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", null, "b-collapse-wrap"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])("组件可以单独使用独立的折叠面板")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", {
  class: "html"
}, "\n<template>\n  <div>\n    <b-collapse-wrap title=\"标题栏\" collapse>\n      <p v-for=\"i in 3\" :key=\"i\">我是内容我是内容...</p>\n    </b-collapse-wrap>\n    <b-collapse-wrap title=\"收起附加右侧操作\" collapse>\n      <template #right>\n        <b-button type=\"primary\" plain size=\"small\">编辑</b-button>\n      </template>\n      <p v-for=\"i in 3\" :key=\"i\">我是内容我是内容...</p>\n    </b-collapse-wrap>\n    <b-collapse-wrap v-model=\"value4\">\n      <template #title>\n        <div style=\"font-size: 16px;padding: 10px;\">自定义开关和标题</div>\n      </template>\n      <template #right>\n        <b-button type=\"text\" @click=\"value4=!value4\">{{ value4?'收起':'展开' }}</b-button>\n      </template>\n      <p v-for=\"i in 3\" :key=\"i\">我是内容我是内容...</p>\n    </b-collapse-wrap>\n  </div>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        value4: false\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["g" /* createStaticVNode */])("<h3 id=\"props\"><a class=\"header-anchor\" href=\"#props\">¶</a> Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>modelValue</td><td>当前激活的面板的 name，可以使用 v-model 双向绑定</td><td>Array/String</td><td>—</td><td>—</td></tr><tr><td>accordion</td><td>是否开启手风琴模式，开启后每次至多展开一个面板</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>simple</td><td>是否开启简洁模式</td><td>Boolean</td><td>—</td><td>false</td></tr></tbody></table><h3 id=\"events\"><a class=\"header-anchor\" href=\"#events\">¶</a> Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>返回值</th></tr></thead><tbody><tr><td>change</td><td>切换面板时触发，返回当前已展开的面板的 key，格式为数组</td><td>Array[]</td></tr></tbody></table><h3 id=\"slot\"><a class=\"header-anchor\" href=\"#slot\">¶</a> Slot</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>title</td><td>面板头内容</td></tr></tbody></table><h3 id=\"collapse-wrap-props\"><a class=\"header-anchor\" href=\"#collapse-wrap-props\">¶</a> collapse-wrap Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>value</td><td>是否展开</td><td>Boolean</td><td>—</td><td>true</td></tr><tr><td>title</td><td>标题</td><td>String</td><td>—</td><td>—</td></tr><tr><td>collapse</td><td>是否可以展开收起</td><td>Boolean</td><td>—</td><td>false</td></tr></tbody></table><h3 id=\"collapse-wrap-slot\"><a class=\"header-anchor\" href=\"#collapse-wrap-slot\">¶</a> collapse-wrap Slot</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>title</td><td>面板头内容</td></tr><tr><td>right</td><td>右侧插入内容区域</td></tr></tbody></table>", 10);

function collapsevue_type_template_id_052398ac_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_b_anchor_link = Object(vue_esm_browser["D" /* resolveComponent */])("b-anchor-link");

  var _component_b_anchor = Object(vue_esm_browser["D" /* resolveComponent */])("b-anchor");

  var _component_element_demo0 = Object(vue_esm_browser["D" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["D" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["D" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["D" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["D" /* resolveComponent */])("element-demo3");

  return Object(vue_esm_browser["u" /* openBlock */])(), Object(vue_esm_browser["e" /* createBlock */])("section", collapsevue_type_template_id_052398ac_hoisted_1, [collapsevue_type_template_id_052398ac_hoisted_2, Object(vue_esm_browser["i" /* createVNode */])("div", _hoisted_3, [Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor, {
    "scroll-offset": 100
  }, {
    default: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#ji-chu-yong-fa",
        title: "基础用法"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#shou-feng-qin-mo-shi",
        title: "手风琴模式"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#jian-dan-mo-shi-he-zi-ding-yi-tou",
        title: "简单模式和自定义头"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#rong-qi-zu-jian",
        title: "容器组件"
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
  })]), _hoisted_4, _hoisted_5, _hoisted_6, Object(vue_esm_browser["i" /* createVNode */])(_component_demo_block, null, {
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
  }), _hoisted_14, _hoisted_15, Object(vue_esm_browser["i" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["i" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [_hoisted_16];
    }),
    _: 1
  }), _hoisted_17]);
}
// CONCATENATED MODULE: ./examples/docs/collapse.md?vue&type=template&id=052398ac

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./build/md-loader!./examples/docs/collapse.md?vue&type=script&lang=ts
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


/* harmony default export */ var collapsevue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _renderList = vue_esm_browser["B" /* renderList */],
          _Fragment = vue_esm_browser["a" /* Fragment */],
          _openBlock = vue_esm_browser["u" /* openBlock */],
          _createBlock = vue_esm_browser["e" /* createBlock */],
          _createVNode = vue_esm_browser["i" /* createVNode */],
          _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _withCtx = vue_esm_browser["N" /* withCtx */];
      var _hoisted_1 = {
        style: {
          "width": "500px"
        }
      };

      function render(_ctx, _cache) {
        var _component_b_collapse_panel = _resolveComponent("b-collapse-panel");

        var _component_b_collapse = _resolveComponent("b-collapse");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode(_component_b_collapse, {
          modelValue: _ctx.value1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value1 = $event;
          })
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_b_collapse_panel, {
              title: "面板一标题",
              name: "1"
            }, {
              default: _withCtx(function () {
                return [(_openBlock(), _createBlock(_Fragment, null, _renderList(3, function (i) {
                  return _createVNode("p", {
                    key: i
                  }, "我是内容我是内容...");
                }), 64))];
              }),
              _: 1
            }), _createVNode(_component_b_collapse_panel, {
              title: "面板二标题",
              name: "2"
            }, {
              default: _withCtx(function () {
                return [(_openBlock(), _createBlock(_Fragment, null, _renderList(3, function (i) {
                  return _createVNode("p", {
                    key: i
                  }, "我是内容我是内容...");
                }), 64))];
              }),
              _: 1
            }), _createVNode(_component_b_collapse_panel, {
              title: "面板三标题",
              name: "3"
            }, {
              default: _withCtx(function () {
                return [(_openBlock(), _createBlock(_Fragment, null, _renderList(3, function (i) {
                  return _createVNode("p", {
                    key: i
                  }, "我是内容我是内容...");
                }), 64))];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["modelValue"])])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            value1: '1'
          };
        }
      };
      return _extends({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _renderList = vue_esm_browser["B" /* renderList */],
          _Fragment = vue_esm_browser["a" /* Fragment */],
          _openBlock = vue_esm_browser["u" /* openBlock */],
          _createBlock = vue_esm_browser["e" /* createBlock */],
          _createVNode = vue_esm_browser["i" /* createVNode */],
          _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _withCtx = vue_esm_browser["N" /* withCtx */];
      var _hoisted_1 = {
        style: {
          "width": "500px"
        }
      };

      function render(_ctx, _cache) {
        var _component_b_collapse_panel = _resolveComponent("b-collapse-panel");

        var _component_b_collapse = _resolveComponent("b-collapse");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode(_component_b_collapse, {
          modelValue: _ctx.value2,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value2 = $event;
          }),
          accordion: ""
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_b_collapse_panel, {
              title: "面板一标题",
              name: "1"
            }, {
              default: _withCtx(function () {
                return [(_openBlock(), _createBlock(_Fragment, null, _renderList(3, function (i) {
                  return _createVNode("p", {
                    key: i
                  }, "我是内容我是内容...");
                }), 64))];
              }),
              _: 1
            }), _createVNode(_component_b_collapse_panel, {
              title: "面板二标题",
              name: "2"
            }, {
              default: _withCtx(function () {
                return [(_openBlock(), _createBlock(_Fragment, null, _renderList(3, function (i) {
                  return _createVNode("p", {
                    key: i
                  }, "我是内容我是内容...");
                }), 64))];
              }),
              _: 1
            }), _createVNode(_component_b_collapse_panel, {
              title: "面板三标题",
              name: "3"
            }, {
              default: _withCtx(function () {
                return [(_openBlock(), _createBlock(_Fragment, null, _renderList(3, function (i) {
                  return _createVNode("p", {
                    key: i
                  }, "我是内容我是内容...");
                }), 64))];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["modelValue"])])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            value2: '1'
          };
        }
      };
      return _extends({
        render: render
      }, democomponentExport);
    }(),
    "element-demo2": function () {
      var _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _createVNode = vue_esm_browser["i" /* createVNode */],
          _createTextVNode = vue_esm_browser["h" /* createTextVNode */],
          _renderList = vue_esm_browser["B" /* renderList */],
          _Fragment = vue_esm_browser["a" /* Fragment */],
          _openBlock = vue_esm_browser["u" /* openBlock */],
          _createBlock = vue_esm_browser["e" /* createBlock */],
          _withCtx = vue_esm_browser["N" /* withCtx */];
      var _hoisted_1 = {
        style: {
          "width": "500px"
        }
      };

      var _hoisted_2 = /*#__PURE__*/_createTextVNode(" 面板一标题 ");

      function render(_ctx, _cache) {
        var _component_b_icon = _resolveComponent("b-icon");

        var _component_b_collapse_panel = _resolveComponent("b-collapse-panel");

        var _component_b_collapse = _resolveComponent("b-collapse");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode(_component_b_collapse, {
          modelValue: _ctx.value3,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value3 = $event;
          }),
          simple: ""
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_b_collapse_panel, {
              name: "1"
            }, {
              title: _withCtx(function () {
                return [_hoisted_2, _createVNode(_component_b_icon, {
                  name: "smile",
                  size: "18"
                })];
              }),
              default: _withCtx(function () {
                return [(_openBlock(), _createBlock(_Fragment, null, _renderList(3, function (i) {
                  return _createVNode("p", {
                    key: i
                  }, "我是内容我是内容...");
                }), 64))];
              }),
              _: 1
            }), _createVNode(_component_b_collapse_panel, {
              title: "面板二标题",
              name: "2"
            }, {
              default: _withCtx(function () {
                return [(_openBlock(), _createBlock(_Fragment, null, _renderList(3, function (i) {
                  return _createVNode("p", {
                    key: i
                  }, "我是内容我是内容...");
                }), 64))];
              }),
              _: 1
            }), _createVNode(_component_b_collapse_panel, {
              title: "面板三标题",
              name: "3"
            }, {
              default: _withCtx(function () {
                return [(_openBlock(), _createBlock(_Fragment, null, _renderList(3, function (i) {
                  return _createVNode("p", {
                    key: i
                  }, "我是内容我是内容...");
                }), 64))];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["modelValue"])])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            value3: '1'
          };
        }
      };
      return _extends({
        render: render
      }, democomponentExport);
    }(),
    "element-demo3": function () {
      var _renderList = vue_esm_browser["B" /* renderList */],
          _Fragment = vue_esm_browser["a" /* Fragment */],
          _openBlock = vue_esm_browser["u" /* openBlock */],
          _createBlock = vue_esm_browser["e" /* createBlock */],
          _createVNode = vue_esm_browser["i" /* createVNode */],
          _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _withCtx = vue_esm_browser["N" /* withCtx */],
          _createTextVNode = vue_esm_browser["h" /* createTextVNode */],
          _toDisplayString = vue_esm_browser["H" /* toDisplayString */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("编辑");

      var _hoisted_2 = /*#__PURE__*/_createVNode("div", {
        style: {
          "font-size": "16px",
          "padding": "10px"
        }
      }, "自定义开关和标题", -1);

      function render(_ctx, _cache) {
        var _component_b_collapse_wrap = _resolveComponent("b-collapse-wrap");

        var _component_b_button = _resolveComponent("b-button");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", null, [_createVNode(_component_b_collapse_wrap, {
          title: "标题栏",
          collapse: ""
        }, {
          default: _withCtx(function () {
            return [(_openBlock(), _createBlock(_Fragment, null, _renderList(3, function (i) {
              return _createVNode("p", {
                key: i
              }, "我是内容我是内容...");
            }), 64))];
          }),
          _: 1
        }), _createVNode(_component_b_collapse_wrap, {
          title: "收起附加右侧操作",
          collapse: ""
        }, {
          right: _withCtx(function () {
            return [_createVNode(_component_b_button, {
              type: "primary",
              plain: "",
              size: "small"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [(_openBlock(), _createBlock(_Fragment, null, _renderList(3, function (i) {
              return _createVNode("p", {
                key: i
              }, "我是内容我是内容...");
            }), 64))];
          }),
          _: 1
        }), _createVNode(_component_b_collapse_wrap, {
          modelValue: _ctx.value4,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.value4 = $event;
          })
        }, {
          title: _withCtx(function () {
            return [_hoisted_2];
          }),
          right: _withCtx(function () {
            return [_createVNode(_component_b_button, {
              type: "text",
              onClick: _cache[1] || (_cache[1] = function ($event) {
                return _ctx.value4 = !_ctx.value4;
              })
            }, {
              default: _withCtx(function () {
                return [_createTextVNode(_toDisplayString(_ctx.value4 ? '收起' : '展开'), 1)];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [(_openBlock(), _createBlock(_Fragment, null, _renderList(3, function (i) {
              return _createVNode("p", {
                key: i
              }, "我是内容我是内容...");
            }), 64))];
          }),
          _: 1
        }, 8, ["modelValue"])])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            value4: false
          };
        }
      };
      return _extends({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./examples/docs/collapse.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./examples/docs/collapse.md



collapsevue_type_script_lang_ts.render = collapsevue_type_template_id_052398ac_render

/* harmony default export */ var collapse = __webpack_exports__["default"] = (collapsevue_type_script_lang_ts);

/***/ })

}]);