(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./build/md-loader!./examples/docs/circle.md?vue&type=template&id=1e2f00f5

var circlevue_type_template_id_1e2f00f5_hoisted_1 = {
  class: "content element-doc"
};

var circlevue_type_template_id_1e2f00f5_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h2", {
  id: "circle-jin-du-huan"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#circle-jin-du-huan"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" Circle 进度环")], -1);

var circlevue_type_template_id_1e2f00f5_hoisted_3 = {
  class: "global-anchor"
};

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("p", null, "显示环形图，可以显示任务百分比或者是统计某些数据的占比情况", -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h3", {
  id: "ji-chu-yong-fa"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-chu-yong-fa"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" 基础用法")], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("p", null, "查看代码来查看配置信息", -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", {
  class: "html"
}, "\n<template>\n  <div flex=\"main:justify\" style=\"width:400px;\">\n    <b-circle :percent=\"80\">\n      <span class=\"demo-circle-inner\" style=\"font-size:24px\">80%</span>\n    </b-circle>\n    <b-circle :percent=\"100\" stroke-color=\"#5cb85c\">\n      <b-icon name=\"check\" size=\"30\" style=\"color:#5cb85c\"></b-icon>\n    </b-circle>\n    <b-circle :percent=\"35\" stroke-color=\"#ff5500\">\n           <span class=\"demo-circle-inner\">\n               <b-icon name=\"close\" size=\"30\" style=\"color:#ff5500\"></b-icon>\n           </span>\n    </b-circle>\n  </div>\n</template>\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h3", {
  id: "dong-tai-jin-du"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#dong-tai-jin-du"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" 动态进度")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("p", null, "可以配合外部操作进度", -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", {
  class: "html"
}, "\n<template>\n  <div flex=\"main:justify\" style=\"width:300px;\" class=\"demo-button\">\n    <b-circle :percent=\"percent\" :stroke-color=\"color\">\n      <b-icon name=\"check\" size=\"50\" style=\"color:#5cb85c\" v-if=\"percent === 100\"></b-icon>\n      <span v-else style=\"font-size:24px\">{{ percent }}%</span>\n    </b-circle>\n    <b-button-group>\n      <b-button icon=\"minus\" @click=\"minus\"></b-button>\n      <b-button icon=\"plus\" @click=\"add\"></b-button>\n    </b-button-group>\n  </div>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        percent: 0\n      }\n    },\n    computed: {\n      color() {\n        let color = '#2db7f5';\n        if (this.percent === 100) {\n          color = '#5cb85c';\n        }\n        return color;\n      }\n    },\n    methods: {\n      add() {\n        if (this.percent >= 100) {\n          return false;\n        }\n        this.percent += 10;\n      },\n      minus() {\n        if (this.percent <= 0) {\n          return false;\n        }\n        this.percent -= 10;\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h3", {
  id: "she-zhi-yang-shi"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#she-zhi-yang-shi"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" 设置样式")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("p", null, "可以配置更多的自定义样式", -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", {
  class: "html"
}, "\n<template>\n  <b-circle\n    :size=\"250\"\n    :trail-width=\"4\"\n    :stroke-width=\"5\"\n    :percent=\"75\"\n    stroke-linecap=\"square\"\n    stroke-color=\"#43a3fb\">\n    <div class=\"demo-Circle-custom\">\n      <h1>42,001,776</h1>\n      <p>消费人群规模</p>\n      <span>\n                总占人数\n                <i>75%</i>\n            </span>\n    </div>\n  </b-circle>\n</template>\n")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h3", {
  id: "yi-biao-pan-mo-shi"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#yi-biao-pan-mo-shi"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" 仪表盘模式")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])("通过设置属性 "), /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", null, "dashboard"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])("，可以很方便地实现仪表盘样式。")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", {
  class: "html"
}, "\n<template>\n  <b-circle :percent=\"80\" dashboard>\n    <span class=\"demo-circle-inner\" style=\"font-size:24px\">80%</span>\n  </b-circle>\n</template>\n")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["g" /* createStaticVNode */])("<h3 id=\"props\"><a class=\"header-anchor\" href=\"#props\">¶</a> Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>percent</td><td>百分比</td><td>Number</td><td>—</td><td>0</td></tr><tr><td>size</td><td>图表的宽度和高度，单位 px</td><td>Number</td><td>—</td><td>120</td></tr><tr><td>stroke-linecap</td><td>进度环顶端的形状</td><td>String</td><td>square（方）/round（圆）</td><td>round</td></tr><tr><td>stroke-width</td><td>进度环的线宽，单位 px</td><td>Number</td><td>—</td><td>6</td></tr><tr><td>stroke-color</td><td>进度环的颜色</td><td>String</td><td>—</td><td>#2db7f5</td></tr><tr><td>trail-width</td><td>进度环背景的线宽，单位 px</td><td>Number</td><td>—</td><td>5</td></tr><tr><td>trail-color</td><td>进度环背景的颜色</td><td>String</td><td>—</td><td>#eaeef2</td></tr><tr><td>dashboard</td><td>是否显示为仪表盘</td><td>Boolean</td><td>—</td><td>false</td></tr></tbody></table>", 2);

function circlevue_type_template_id_1e2f00f5_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_b_anchor_link = Object(vue_esm_browser["D" /* resolveComponent */])("b-anchor-link");

  var _component_b_anchor = Object(vue_esm_browser["D" /* resolveComponent */])("b-anchor");

  var _component_element_demo0 = Object(vue_esm_browser["D" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["D" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["D" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["D" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["D" /* resolveComponent */])("element-demo3");

  return Object(vue_esm_browser["u" /* openBlock */])(), Object(vue_esm_browser["e" /* createBlock */])("section", circlevue_type_template_id_1e2f00f5_hoisted_1, [circlevue_type_template_id_1e2f00f5_hoisted_2, Object(vue_esm_browser["i" /* createVNode */])("div", circlevue_type_template_id_1e2f00f5_hoisted_3, [Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor, {
    "scroll-offset": 100
  }, {
    default: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#ji-chu-yong-fa",
        title: "基础用法"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#dong-tai-jin-du",
        title: "动态进度"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#she-zhi-yang-shi",
        title: "设置样式"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#yi-biao-pan-mo-shi",
        title: "仪表盘模式"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#props",
        title: "Props"
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
// CONCATENATED MODULE: ./examples/docs/circle.md?vue&type=template&id=1e2f00f5

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./build/md-loader!./examples/docs/circle.md?vue&type=script&lang=ts
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


/* harmony default export */ var circlevue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createVNode = vue_esm_browser["i" /* createVNode */],
          _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _withCtx = vue_esm_browser["N" /* withCtx */],
          _openBlock = vue_esm_browser["u" /* openBlock */],
          _createBlock = vue_esm_browser["e" /* createBlock */];
      var _hoisted_1 = {
        flex: "main:justify",
        style: {
          "width": "400px"
        }
      };

      var _hoisted_2 = /*#__PURE__*/_createVNode("span", {
        class: "demo-circle-inner",
        style: {
          "font-size": "24px"
        }
      }, "80%", -1);

      var _hoisted_3 = {
        class: "demo-circle-inner"
      };

      function render(_ctx, _cache) {
        var _component_b_circle = _resolveComponent("b-circle");

        var _component_b_icon = _resolveComponent("b-icon");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode(_component_b_circle, {
          percent: 80
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }), _createVNode(_component_b_circle, {
          percent: 100,
          "stroke-color": "#5cb85c"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_b_icon, {
              name: "check",
              size: "30",
              style: {
                "color": "#5cb85c"
              }
            })];
          }),
          _: 1
        }), _createVNode(_component_b_circle, {
          percent: 35,
          "stroke-color": "#ff5500"
        }, {
          default: _withCtx(function () {
            return [_createVNode("span", _hoisted_3, [_createVNode(_component_b_icon, {
              name: "close",
              size: "30",
              style: {
                "color": "#ff5500"
              }
            })])];
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
      var _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _createVNode = vue_esm_browser["i" /* createVNode */],
          _openBlock = vue_esm_browser["u" /* openBlock */],
          _createBlock = vue_esm_browser["e" /* createBlock */],
          _createCommentVNode = vue_esm_browser["f" /* createCommentVNode */],
          _toDisplayString = vue_esm_browser["H" /* toDisplayString */],
          _withCtx = vue_esm_browser["N" /* withCtx */];
      var _hoisted_1 = {
        flex: "main:justify",
        style: {
          "width": "300px"
        },
        class: "demo-button"
      };
      var _hoisted_2 = {
        key: 1,
        style: {
          "font-size": "24px"
        }
      };

      function render(_ctx, _cache) {
        var _component_b_icon = _resolveComponent("b-icon");

        var _component_b_circle = _resolveComponent("b-circle");

        var _component_b_button = _resolveComponent("b-button");

        var _component_b_button_group = _resolveComponent("b-button-group");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode(_component_b_circle, {
          percent: _ctx.percent,
          "stroke-color": _ctx.color
        }, {
          default: _withCtx(function () {
            return [_ctx.percent === 100 ? (_openBlock(), _createBlock(_component_b_icon, {
              key: 0,
              name: "check",
              size: "50",
              style: {
                "color": "#5cb85c"
              }
            })) : (_openBlock(), _createBlock("span", _hoisted_2, _toDisplayString(_ctx.percent) + "%", 1))];
          }),
          _: 1
        }, 8, ["percent", "stroke-color"]), _createVNode(_component_b_button_group, null, {
          default: _withCtx(function () {
            return [_createVNode(_component_b_button, {
              icon: "minus",
              onClick: _ctx.minus
            }, null, 8, ["onClick"]), _createVNode(_component_b_button, {
              icon: "plus",
              onClick: _ctx.add
            }, null, 8, ["onClick"])];
          }),
          _: 1
        })])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            percent: 0
          };
        },
        computed: {
          color: function color() {
            var color = '#2db7f5';

            if (this.percent === 100) {
              color = '#5cb85c';
            }

            return color;
          }
        },
        methods: {
          add: function add() {
            if (this.percent >= 100) {
              return false;
            }

            this.percent += 10;
          },
          minus: function minus() {
            if (this.percent <= 0) {
              return false;
            }

            this.percent -= 10;
          }
        }
      };
      return _extends({
        render: render
      }, democomponentExport);
    }(),
    "element-demo2": function () {
      var _createVNode = vue_esm_browser["i" /* createVNode */],
          _createTextVNode = vue_esm_browser["h" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _withCtx = vue_esm_browser["N" /* withCtx */],
          _openBlock = vue_esm_browser["u" /* openBlock */],
          _createBlock = vue_esm_browser["e" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("div", {
        class: "demo-Circle-custom"
      }, [/*#__PURE__*/_createVNode("h1", null, "42,001,776"), /*#__PURE__*/_createVNode("p", null, "消费人群规模"), /*#__PURE__*/_createVNode("span", null, [/*#__PURE__*/_createTextVNode(" 总占人数 "), /*#__PURE__*/_createVNode("i", null, "75%")])], -1);

      function render(_ctx, _cache) {
        var _component_b_circle = _resolveComponent("b-circle");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_b_circle, {
          size: 250,
          "trail-width": 4,
          "stroke-width": 5,
          percent: 75,
          "stroke-linecap": "square",
          "stroke-color": "#43a3fb"
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
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
      var _createVNode = vue_esm_browser["i" /* createVNode */],
          _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _withCtx = vue_esm_browser["N" /* withCtx */],
          _openBlock = vue_esm_browser["u" /* openBlock */],
          _createBlock = vue_esm_browser["e" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("span", {
        class: "demo-circle-inner",
        style: {
          "font-size": "24px"
        }
      }, "80%", -1);

      function render(_ctx, _cache) {
        var _component_b_circle = _resolveComponent("b-circle");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_b_circle, {
          percent: 80,
          dashboard: ""
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
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
// CONCATENATED MODULE: ./examples/docs/circle.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./examples/docs/circle.md



circlevue_type_script_lang_ts.render = circlevue_type_template_id_1e2f00f5_render

/* harmony default export */ var circle = __webpack_exports__["default"] = (circlevue_type_script_lang_ts);

/***/ })

}]);