(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[43],{

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./build/md-loader!./examples/docs/steps.md?vue&type=template&id=5a0a75c2

var stepsvue_type_template_id_5a0a75c2_hoisted_1 = {
  class: "content element-doc"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h2", {
  id: "b-step-bu-zou-tiao"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#b-step-bu-zou-tiao"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" b-step 步骤条")], -1);

var _hoisted_3 = {
  class: "global-anchor"
};

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("p", null, "提示某个任务的步骤", -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h3", {
  id: "ji-chu-yong-fa"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-chu-yong-fa"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" 基础用法")], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("p", null, "基本用法，组件会根据current自动判断各步骤状态。", -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", {
  class: "html"
}, "\n<template>\n  <b-steps :current=\"current\">\n    <b-step title=\"已完成\" content=\"这里是该步骤的描述信息\"></b-step>\n    <b-step title=\"进行中\" content=\"这里是该步骤的描述信息\"></b-step>\n    <b-step title=\"待进行\" content=\"这里是该步骤的描述信息\"></b-step>\n    <b-step title=\"待进行\" content=\"这里是该步骤的描述信息\"></b-step>\n  </b-steps>\n  <b-button type=\"primary\" @click=\"next\">下一步</b-button>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        current: 0\n      }\n    },\n    methods: {\n      next() {\n        if (this.current === 3) {\n          this.current = 0;\n        } else {\n          this.current += 1;\n        }\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h3", {
  id: "xiao-xing-bu-zou-tiao"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#xiao-xing-bu-zou-tiao"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" 小型步骤条")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])("设置 "), /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", null, "size=\"small\""), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])("开启显示小型步骤条")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", {
  class: "html"
}, "\n<template>\n  <b-steps :current=\"2\" size=\"small\">\n    <b-step title=\"已完成\"></b-step>\n    <b-step title=\"进行中\"></b-step>\n    <b-step title=\"待进行\"></b-step>\n    <b-step title=\"待进行\"></b-step>\n  </b-steps>\n</template>\n<script>\n  export default {}\n</script>\n")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h3", {
  id: "zi-ding-yi-tu-biao"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#zi-ding-yi-tu-biao"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" 自定义图标")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])("设置 "), /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", null, "icon"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])("自定义设置图标")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", {
  class: "html"
}, "\n<template>\n  <b-steps :current=\"1\">\n    <b-step title=\"已完成\" icon=\"ios-ribbon\"></b-step>\n    <b-step title=\"进行中\" icon=\"ios-snow\"></b-step>\n    <b-step title=\"待进行\" icon=\"ios-body\"></b-step>\n  </b-steps>\n</template>\n<script>\n  export default {}\n</script>\n")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h3", {
  id: "shu-xing-bu-zou"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#shu-xing-bu-zou"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" 竖型步骤")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])("设置"), /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", null, "direction=\"vertical\""), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])("可以开启竖向的步骤")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", {
  class: "html"
}, "\n<template>\n  <b-steps :current=\"current\" direction=\"vertical\">\n    <b-step title=\"已完成\" content=\"这里是该步骤的描述信息\"></b-step>\n    <b-step title=\"进行中\" content=\"这里是该步骤的描述信息\"></b-step>\n    <b-step title=\"待进行\" content=\"这里是该步骤的描述信息\"></b-step>\n    <b-step title=\"待进行\" content=\"这里是该步骤的描述信息\"></b-step>\n  </b-steps>\n  <b-button type=\"primary\" @click=\"next\">下一步</b-button>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        current: 0\n      }\n    },\n    methods: {\n      next() {\n        if (this.current === 3) {\n          this.current = 0;\n        } else {\n          this.current += 1;\n        }\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h3", {
  id: "she-zhi-zhuang-tai"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#she-zhi-zhuang-tai"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" 设置状态")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("p", null, "基本用法，组件会根据current自动判断各步骤状态。", -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", {
  class: "html"
}, "\n<template>\n  <b-steps :current=\"2\" status=\"error\">\n    <b-step title=\"已完成\" content=\"这里是该步骤的描述信息\"></b-step>\n    <b-step title=\"进行中\" content=\"这里是该步骤的描述信息\"></b-step>\n    <b-step title=\"待进行\" content=\"这里是该步骤的描述信息\"></b-step>\n    <b-step title=\"待进行\" content=\"这里是该步骤的描述信息\"></b-step>\n  </b-steps>\n</template>\n<script>\n  export default {}\n</script>\n")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["g" /* createStaticVNode */])("<h3 id=\"api\"><a class=\"header-anchor\" href=\"#api\">¶</a> API</h3><h3 id=\"steps-props\"><a class=\"header-anchor\" href=\"#steps-props\">¶</a> Steps Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>current</td><td>当前步骤</td><td>Number</td><td>—</td><td>0</td></tr><tr><td>status</td><td>当前步骤的状态</td><td>String</td><td>wait、process、finish、error、success</td><td>process</td></tr><tr><td>size</td><td>大小</td><td>String</td><td>small</td><td>—</td></tr><tr><td>direction</td><td>方向</td><td>String</td><td>horizontal（水平）或vertical（垂直）</td><td>horizontal</td></tr></tbody></table><h3 id=\"step-props\"><a class=\"header-anchor\" href=\"#step-props\">¶</a> Step Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>标题</td><td>String</td><td>—</td><td>—</td></tr><tr><td>status</td><td>当前步骤的状态</td><td>String</td><td>wait、process、finish、error、success</td><td>process</td></tr><tr><td>content</td><td>详细内容(可选)</td><td>String</td><td>—</td><td>—</td></tr><tr><td>icon</td><td>自定义图标</td><td>String</td><td>—</td><td>—</td></tr></tbody></table><h3 id=\"step-slot\"><a class=\"header-anchor\" href=\"#step-slot\">¶</a> Step Slot</h3><table><thead><tr><th>事件名</th><th>说明</th></tr></thead><tbody><tr><td>title</td><td>标题</td></tr><tr><td>content</td><td>详细内容</td></tr><tr><td>icon</td><td>自定义图标</td></tr></tbody></table>", 7);

function stepsvue_type_template_id_5a0a75c2_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_b_anchor_link = Object(vue_esm_browser["D" /* resolveComponent */])("b-anchor-link");

  var _component_b_anchor = Object(vue_esm_browser["D" /* resolveComponent */])("b-anchor");

  var _component_element_demo0 = Object(vue_esm_browser["D" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["D" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["D" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["D" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["D" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser["D" /* resolveComponent */])("element-demo4");

  return Object(vue_esm_browser["u" /* openBlock */])(), Object(vue_esm_browser["e" /* createBlock */])("section", stepsvue_type_template_id_5a0a75c2_hoisted_1, [_hoisted_2, Object(vue_esm_browser["i" /* createVNode */])("div", _hoisted_3, [Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor, {
    "scroll-offset": 100
  }, {
    default: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#ji-chu-yong-fa",
        title: "基础用法"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#xiao-xing-bu-zou-tiao",
        title: "小型步骤条"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#zi-ding-yi-tu-biao",
        title: "自定义图标"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#shu-xing-bu-zou",
        title: "竖型步骤"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#she-zhi-zhuang-tai",
        title: "设置状态"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#steps-props",
        title: "Steps Props"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#step-props",
        title: "Step Props"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#step-slot",
        title: "Step Slot"
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
// CONCATENATED MODULE: ./examples/docs/steps.md?vue&type=template&id=5a0a75c2

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./build/md-loader!./examples/docs/steps.md?vue&type=script&lang=ts
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


/* harmony default export */ var stepsvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _createVNode = vue_esm_browser["i" /* createVNode */],
          _withCtx = vue_esm_browser["N" /* withCtx */],
          _createTextVNode = vue_esm_browser["h" /* createTextVNode */],
          _openBlock = vue_esm_browser["u" /* openBlock */],
          _createBlock = vue_esm_browser["e" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("下一步");

      function render(_ctx, _cache) {
        var _component_b_step = _resolveComponent("b-step");

        var _component_b_steps = _resolveComponent("b-steps");

        var _component_b_button = _resolveComponent("b-button");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_b_steps, {
          current: _ctx.current
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_b_step, {
              title: "已完成",
              content: "这里是该步骤的描述信息"
            }), _createVNode(_component_b_step, {
              title: "进行中",
              content: "这里是该步骤的描述信息"
            }), _createVNode(_component_b_step, {
              title: "待进行",
              content: "这里是该步骤的描述信息"
            }), _createVNode(_component_b_step, {
              title: "待进行",
              content: "这里是该步骤的描述信息"
            })];
          }),
          _: 1
        }, 8, ["current"]), _createVNode(_component_b_button, {
          type: "primary",
          onClick: _ctx.next
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["onClick"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            current: 0
          };
        },
        methods: {
          next: function next() {
            if (this.current === 3) {
              this.current = 0;
            } else {
              this.current += 1;
            }
          }
        }
      };
      return _extends({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _createVNode = vue_esm_browser["i" /* createVNode */],
          _withCtx = vue_esm_browser["N" /* withCtx */],
          _openBlock = vue_esm_browser["u" /* openBlock */],
          _createBlock = vue_esm_browser["e" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_b_step = _resolveComponent("b-step");

        var _component_b_steps = _resolveComponent("b-steps");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_b_steps, {
          current: 2,
          size: "small"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_b_step, {
              title: "已完成"
            }), _createVNode(_component_b_step, {
              title: "进行中"
            }), _createVNode(_component_b_step, {
              title: "待进行"
            }), _createVNode(_component_b_step, {
              title: "待进行"
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
    "element-demo2": function () {
      var _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _createVNode = vue_esm_browser["i" /* createVNode */],
          _withCtx = vue_esm_browser["N" /* withCtx */],
          _openBlock = vue_esm_browser["u" /* openBlock */],
          _createBlock = vue_esm_browser["e" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_b_step = _resolveComponent("b-step");

        var _component_b_steps = _resolveComponent("b-steps");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_b_steps, {
          current: 1
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_b_step, {
              title: "已完成",
              icon: "ios-ribbon"
            }), _createVNode(_component_b_step, {
              title: "进行中",
              icon: "ios-snow"
            }), _createVNode(_component_b_step, {
              title: "待进行",
              icon: "ios-body"
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
    "element-demo3": function () {
      var _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _createVNode = vue_esm_browser["i" /* createVNode */],
          _withCtx = vue_esm_browser["N" /* withCtx */],
          _createTextVNode = vue_esm_browser["h" /* createTextVNode */],
          _openBlock = vue_esm_browser["u" /* openBlock */],
          _createBlock = vue_esm_browser["e" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("下一步");

      function render(_ctx, _cache) {
        var _component_b_step = _resolveComponent("b-step");

        var _component_b_steps = _resolveComponent("b-steps");

        var _component_b_button = _resolveComponent("b-button");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_b_steps, {
          current: _ctx.current,
          direction: "vertical"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_b_step, {
              title: "已完成",
              content: "这里是该步骤的描述信息"
            }), _createVNode(_component_b_step, {
              title: "进行中",
              content: "这里是该步骤的描述信息"
            }), _createVNode(_component_b_step, {
              title: "待进行",
              content: "这里是该步骤的描述信息"
            }), _createVNode(_component_b_step, {
              title: "待进行",
              content: "这里是该步骤的描述信息"
            })];
          }),
          _: 1
        }, 8, ["current"]), _createVNode(_component_b_button, {
          type: "primary",
          onClick: _ctx.next
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["onClick"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            current: 0
          };
        },
        methods: {
          next: function next() {
            if (this.current === 3) {
              this.current = 0;
            } else {
              this.current += 1;
            }
          }
        }
      };
      return _extends({
        render: render
      }, democomponentExport);
    }(),
    "element-demo4": function () {
      var _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _createVNode = vue_esm_browser["i" /* createVNode */],
          _withCtx = vue_esm_browser["N" /* withCtx */],
          _openBlock = vue_esm_browser["u" /* openBlock */],
          _createBlock = vue_esm_browser["e" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_b_step = _resolveComponent("b-step");

        var _component_b_steps = _resolveComponent("b-steps");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_b_steps, {
          current: 2,
          status: "error"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_b_step, {
              title: "已完成",
              content: "这里是该步骤的描述信息"
            }), _createVNode(_component_b_step, {
              title: "进行中",
              content: "这里是该步骤的描述信息"
            }), _createVNode(_component_b_step, {
              title: "待进行",
              content: "这里是该步骤的描述信息"
            }), _createVNode(_component_b_step, {
              title: "待进行",
              content: "这里是该步骤的描述信息"
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
// CONCATENATED MODULE: ./examples/docs/steps.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./examples/docs/steps.md



stepsvue_type_script_lang_ts.render = stepsvue_type_template_id_5a0a75c2_render

/* harmony default export */ var steps = __webpack_exports__["default"] = (stepsvue_type_script_lang_ts);

/***/ })

}]);