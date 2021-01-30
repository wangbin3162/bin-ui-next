(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[52],{

/***/ 565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./build/md-loader!./examples/docs/timeline.md?vue&type=template&id=638f00d4

var timelinevue_type_template_id_638f00d4_hoisted_1 = {
  class: "content element-doc"
};

var timelinevue_type_template_id_638f00d4_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h2", {
  id: "timeline-shi-jian-xian"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#timeline-shi-jian-xian"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" Timeline 时间线")], -1);

var timelinevue_type_template_id_638f00d4_hoisted_3 = {
  class: "global-anchor"
};

var timelinevue_type_template_id_638f00d4_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("p", null, "时间线组件", -1);

var timelinevue_type_template_id_638f00d4_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h3", {
  id: "ji-chu-yong-fa"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-chu-yong-fa"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" 基础用法")], -1);

var timelinevue_type_template_id_638f00d4_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("p", null, "简单定义一个时间轴的方法", -1);

var timelinevue_type_template_id_638f00d4_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", {
  class: "html"
}, "\n<template>\n  <b-timeline>\n    <b-timeline-item>\n      <p class=\"time\">2019年4月12日</p>\n      <p class=\"content\">初始化bin-ui</p>\n    </b-timeline-item>\n    <b-timeline-item>\n      <p class=\"time\">2019年4月21日</p>\n      <p class=\"content\">发布1.1.0版本，新增几个基础组件</p>\n    </b-timeline-item>\n    <b-timeline-item>\n      <p class=\"time\">2019年7月24日</p>\n      <p class=\"content\">发布1.5.0版本，增加大量表单组件和常用组件</p>\n    </b-timeline-item>\n    <b-timeline-item>\n      <p class=\"time\">2019年8月23日</p>\n      <p class=\"content\">发布2.0.0版本，正式实现表格菜单等组件</p>\n    </b-timeline-item>\n  </b-timeline>\n</template>\n")], -1);

var timelinevue_type_template_id_638f00d4_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h3", {
  id: "ke-yi-she-zhi-bu-tong-lei-xing-huo-zhe-zi-ding-yi-yan-se"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ke-yi-she-zhi-bu-tong-lei-xing-huo-zhe-zi-ding-yi-yan-se"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" 可以设置不同类型或者自定义颜色")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("p", null, "用各种颜色来标识不同状态，可以使用success、info、warning, danger或自定义的颜色，默认是 primary 。", -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", {
  class: "html"
}, "\n<template>\n  <b-timeline>\n    <b-timeline-item color=\"primary\">发布1.0版本</b-timeline-item>\n    <b-timeline-item color=\"info\">发布1.5版本</b-timeline-item>\n    <b-timeline-item color=\"warning\">错误修复</b-timeline-item>\n    <b-timeline-item color=\"danger\">严重故障</b-timeline-item>\n    <b-timeline-item color=\"success\">发布2.0版本</b-timeline-item>\n    <b-timeline-item color=\"#ff30b5\">里程碑发布</b-timeline-item>\n  </b-timeline>\n</template>\n")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h3", {
  id: "zui-hou-yi-ge-jie-dian-she-zhi"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#zui-hou-yi-ge-jie-dian-she-zhi"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" 最后一个节点设置")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("p", null, "通过添加pending属性来标记最后一个为节点", -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", {
  class: "html"
}, "\n<template>\n  <b-timeline pending>\n    <b-timeline-item>发布1.0版本</b-timeline-item>\n    <b-timeline-item>发布1.5版本</b-timeline-item>\n    <b-timeline-item>发布2.0版本</b-timeline-item>\n    <b-timeline-item>持续更新...</b-timeline-item>\n  </b-timeline>\n</template>\n")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h3", {
  id: "zi-ding-yi-jie-dian-tu-biao"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#zi-ding-yi-jie-dian-tu-biao"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" 自定义节点图标")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("p", null, "默认是空心远点，可以自定义轴点图标", -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", {
  class: "html"
}, "\n<template>\n  <b-timeline>\n    <b-timeline-item color=\"success\" dot-top=\"10px\">\n      <template #dot>\n        <b-icon name=\"heart-fill\" size=\"20\"></b-icon>\n      </template>\n      <span>正式版上线</span>\n    </b-timeline-item>\n    <b-timeline-item>发布2.0版本</b-timeline-item>\n    <b-timeline-item>发布1.5版本</b-timeline-item>\n    <b-timeline-item>发布1.0版本</b-timeline-item>\n  </b-timeline>\n</template>\n")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["g" /* createStaticVNode */])("<h3 id=\"timeline-props\"><a class=\"header-anchor\" href=\"#timeline-props\">¶</a> Timeline Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>pending</td><td>指定是否最后一个节点</td><td>Boolean</td><td>—</td><td>false</td></tr></tbody></table><h3 id=\"timelineitem-props\"><a class=\"header-anchor\" href=\"#timelineitem-props\">¶</a> TimelineItem Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>color</td><td>圆圈颜色</td><td>String</td><td>primary,success,info,warning,danger,或者自定义颜色值</td><td>primary</td></tr><tr><td>dot-top</td><td>dot顶部偏移</td><td>String</td><td>自定义dot距离顶部的偏移量</td><td>—</td></tr></tbody></table><h3 id=\"timelineitem-slot\"><a class=\"header-anchor\" href=\"#timelineitem-slot\">¶</a> TimelineItem Slot</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>基本内容</td></tr><tr><td>dot</td><td>自定义时间轴点内容</td></tr></tbody></table>", 6);

function timelinevue_type_template_id_638f00d4_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_b_anchor_link = Object(vue_esm_browser["D" /* resolveComponent */])("b-anchor-link");

  var _component_b_anchor = Object(vue_esm_browser["D" /* resolveComponent */])("b-anchor");

  var _component_element_demo0 = Object(vue_esm_browser["D" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["D" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["D" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["D" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["D" /* resolveComponent */])("element-demo3");

  return Object(vue_esm_browser["u" /* openBlock */])(), Object(vue_esm_browser["e" /* createBlock */])("section", timelinevue_type_template_id_638f00d4_hoisted_1, [timelinevue_type_template_id_638f00d4_hoisted_2, Object(vue_esm_browser["i" /* createVNode */])("div", timelinevue_type_template_id_638f00d4_hoisted_3, [Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor, {
    "scroll-offset": 100
  }, {
    default: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#ji-chu-yong-fa",
        title: "基础用法"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#ke-yi-she-zhi-bu-tong-lei-xing-huo-zhe-zi-ding-yi-yan-se",
        title: "可以设置不同类型或者自定义颜色"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#zui-hou-yi-ge-jie-dian-she-zhi",
        title: "最后一个节点设置"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#zi-ding-yi-jie-dian-tu-biao",
        title: "自定义节点图标"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#timeline-props",
        title: "Timeline Props"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#timelineitem-props",
        title: "TimelineItem Props"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#timelineitem-slots",
        title: "TimelineItem  Slot"
      })];
    }),
    _: 1
  })]), timelinevue_type_template_id_638f00d4_hoisted_4, timelinevue_type_template_id_638f00d4_hoisted_5, timelinevue_type_template_id_638f00d4_hoisted_6, Object(vue_esm_browser["i" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["i" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [timelinevue_type_template_id_638f00d4_hoisted_7];
    }),
    _: 1
  }), timelinevue_type_template_id_638f00d4_hoisted_8, _hoisted_9, Object(vue_esm_browser["i" /* createVNode */])(_component_demo_block, null, {
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
// CONCATENATED MODULE: ./examples/docs/timeline.md?vue&type=template&id=638f00d4

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./build/md-loader!./examples/docs/timeline.md?vue&type=script&lang=ts
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


/* harmony default export */ var timelinevue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createVNode = vue_esm_browser["i" /* createVNode */],
          _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _withCtx = vue_esm_browser["N" /* withCtx */],
          _openBlock = vue_esm_browser["u" /* openBlock */],
          _createBlock = vue_esm_browser["e" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("p", {
        class: "time"
      }, "2019年4月12日", -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("p", {
        class: "content"
      }, "初始化bin-ui", -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("p", {
        class: "time"
      }, "2019年4月21日", -1);

      var _hoisted_4 = /*#__PURE__*/_createVNode("p", {
        class: "content"
      }, "发布1.1.0版本，新增几个基础组件", -1);

      var _hoisted_5 = /*#__PURE__*/_createVNode("p", {
        class: "time"
      }, "2019年7月24日", -1);

      var _hoisted_6 = /*#__PURE__*/_createVNode("p", {
        class: "content"
      }, "发布1.5.0版本，增加大量表单组件和常用组件", -1);

      var _hoisted_7 = /*#__PURE__*/_createVNode("p", {
        class: "time"
      }, "2019年8月23日", -1);

      var _hoisted_8 = /*#__PURE__*/_createVNode("p", {
        class: "content"
      }, "发布2.0.0版本，正式实现表格菜单等组件", -1);

      function render(_ctx, _cache) {
        var _component_b_timeline_item = _resolveComponent("b-timeline-item");

        var _component_b_timeline = _resolveComponent("b-timeline");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_b_timeline, null, {
          default: _withCtx(function () {
            return [_createVNode(_component_b_timeline_item, null, {
              default: _withCtx(function () {
                return [_hoisted_1, _hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_b_timeline_item, null, {
              default: _withCtx(function () {
                return [_hoisted_3, _hoisted_4];
              }),
              _: 1
            }), _createVNode(_component_b_timeline_item, null, {
              default: _withCtx(function () {
                return [_hoisted_5, _hoisted_6];
              }),
              _: 1
            }), _createVNode(_component_b_timeline_item, null, {
              default: _withCtx(function () {
                return [_hoisted_7, _hoisted_8];
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("发布1.0版本");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("发布1.5版本");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("错误修复");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("严重故障");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("发布2.0版本");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("里程碑发布");

      function render(_ctx, _cache) {
        var _component_b_timeline_item = _resolveComponent("b-timeline-item");

        var _component_b_timeline = _resolveComponent("b-timeline");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_b_timeline, null, {
          default: _withCtx(function () {
            return [_createVNode(_component_b_timeline_item, {
              color: "primary"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_b_timeline_item, {
              color: "info"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_b_timeline_item, {
              color: "warning"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_b_timeline_item, {
              color: "danger"
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            }), _createVNode(_component_b_timeline_item, {
              color: "success"
            }, {
              default: _withCtx(function () {
                return [_hoisted_5];
              }),
              _: 1
            }), _createVNode(_component_b_timeline_item, {
              color: "#ff30b5"
            }, {
              default: _withCtx(function () {
                return [_hoisted_6];
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
    "element-demo2": function () {
      var _createTextVNode = vue_esm_browser["h" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _withCtx = vue_esm_browser["N" /* withCtx */],
          _createVNode = vue_esm_browser["i" /* createVNode */],
          _openBlock = vue_esm_browser["u" /* openBlock */],
          _createBlock = vue_esm_browser["e" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("发布1.0版本");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("发布1.5版本");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("发布2.0版本");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("持续更新...");

      function render(_ctx, _cache) {
        var _component_b_timeline_item = _resolveComponent("b-timeline-item");

        var _component_b_timeline = _resolveComponent("b-timeline");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_b_timeline, {
          pending: ""
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_b_timeline_item, null, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_b_timeline_item, null, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_b_timeline_item, null, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_b_timeline_item, null, {
              default: _withCtx(function () {
                return [_hoisted_4];
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
    "element-demo3": function () {
      var _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _createVNode = vue_esm_browser["i" /* createVNode */],
          _withCtx = vue_esm_browser["N" /* withCtx */],
          _createTextVNode = vue_esm_browser["h" /* createTextVNode */],
          _openBlock = vue_esm_browser["u" /* openBlock */],
          _createBlock = vue_esm_browser["e" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("span", null, "正式版上线", -1);

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("发布2.0版本");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("发布1.5版本");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("发布1.0版本");

      function render(_ctx, _cache) {
        var _component_b_icon = _resolveComponent("b-icon");

        var _component_b_timeline_item = _resolveComponent("b-timeline-item");

        var _component_b_timeline = _resolveComponent("b-timeline");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_b_timeline, null, {
          default: _withCtx(function () {
            return [_createVNode(_component_b_timeline_item, {
              color: "success",
              "dot-top": "10px"
            }, {
              dot: _withCtx(function () {
                return [_createVNode(_component_b_icon, {
                  name: "heart-fill",
                  size: "20"
                })];
              }),
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_b_timeline_item, null, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_b_timeline_item, null, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_b_timeline_item, null, {
              default: _withCtx(function () {
                return [_hoisted_4];
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
// CONCATENATED MODULE: ./examples/docs/timeline.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./examples/docs/timeline.md



timelinevue_type_script_lang_ts.render = timelinevue_type_template_id_638f00d4_render

/* harmony default export */ var timeline = __webpack_exports__["default"] = (timelinevue_type_script_lang_ts);

/***/ })

}]);