(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ 557:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./build/md-loader!./examples/docs/loading.md?vue&type=template&id=f1be49bc

var loadingvue_type_template_id_f1be49bc_hoisted_1 = {
  class: "content element-doc"
};

var loadingvue_type_template_id_f1be49bc_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h2", {
  id: "jia-zai-jin-du"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#jia-zai-jin-du"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" 加载进度")], -1);

var loadingvue_type_template_id_f1be49bc_hoisted_3 = {
  class: "global-anchor"
};

var loadingvue_type_template_id_f1be49bc_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("p", null, "获取数据或加载中时显示，提示用户正在等待中。", -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h3", {
  id: "ji-chu-yong-fa"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-chu-yong-fa"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" 基础用法")], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("p", null, "最简单的Loading", -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", {
  class: "html"
}, "\n<template>\n  <b-loading></b-loading>\n</template>\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h3", {
  id: "ju-zhong-gu-ding"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ju-zhong-gu-ding"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" 居中固定")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("p", null, "可以在父级元素中居中固定", -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", {
  class: "html"
}, "\n<template>\n  <div class=\"demo-loading\">\n    <div>我是后面的段落我是后面的段落我是后面的段落我是后面的段落</div>\n    <b-loading fix></b-loading>\n  </div>\n</template>\n")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h3", {
  id: "zi-ding-yi-nei-rong"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#zi-ding-yi-nei-rong"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" 自定义内容")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("p", null, "可以自定义文字和内容", -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", {
  class: "html"
}, "\n<template>\n  <div class=\"demo-loading\">\n    <b-loading fix>加载中</b-loading>\n  </div>\n  <div class=\"demo-loading\">\n    <b-loading fix show-text=\"loading\"></b-loading>\n  </div>\n  <div class=\"demo-loading\">\n    <b-loading fix show-text=\"loading\" show-icon=\"loading\"></b-loading>\n  </div>\n</template>\n")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h3", {
  id: "qie-huan-xian-shi-zhuang-tai"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#qie-huan-xian-shi-zhuang-tai"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" 切换显示状态")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("p", null, "切换显示状态", -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", {
  class: "html"
}, "\n<template>\n  <div class=\"demo-loading\">\n    <div>我是后面的段落我是后面的段落我是后面的段落我是后面的段落</div>\n    <b-loading fix v-if=\"spinShow\"></b-loading>\n  </div>\n  <div>\n    <b-button @click=\"spinShow=true\">加载</b-button>\n    <b-button type=\"danger\" @click=\"spinShow=false\">停止</b-button>\n  </div>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        spinShow: true\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["g" /* createStaticVNode */])("<h3 id=\"props\"><a class=\"header-anchor\" href=\"#props\">¶</a> Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>showIcon</td><td>显示加载图标</td><td>String</td><td>loading</td><td>—</td></tr><tr><td>showText</td><td>显示加载的文字</td><td>String</td><td>loading</td><td>—</td></tr><tr><td>fix</td><td>是否固定于父级中心</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>size</td><td>文字显示的大小</td><td>Number</td><td>—</td><td>—</td></tr></tbody></table>", 2);

function loadingvue_type_template_id_f1be49bc_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_b_anchor_link = Object(vue_esm_browser["D" /* resolveComponent */])("b-anchor-link");

  var _component_b_anchor = Object(vue_esm_browser["D" /* resolveComponent */])("b-anchor");

  var _component_element_demo0 = Object(vue_esm_browser["D" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["D" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["D" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["D" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["D" /* resolveComponent */])("element-demo3");

  return Object(vue_esm_browser["u" /* openBlock */])(), Object(vue_esm_browser["e" /* createBlock */])("section", loadingvue_type_template_id_f1be49bc_hoisted_1, [loadingvue_type_template_id_f1be49bc_hoisted_2, Object(vue_esm_browser["i" /* createVNode */])("div", loadingvue_type_template_id_f1be49bc_hoisted_3, [Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor, {
    "scroll-offset": 100
  }, {
    default: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#ji-chu-yong-fa",
        title: "基础用法"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#ju-zhong-gu-ding",
        title: "居中固定"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#zi-ding-yi-nei-rong",
        title: "自定义内容"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#qie-huan-xian-shi-zhuang-tai",
        title: "切换显示状态"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#props",
        title: " Props"
      })];
    }),
    _: 1
  })]), loadingvue_type_template_id_f1be49bc_hoisted_4, _hoisted_5, _hoisted_6, Object(vue_esm_browser["i" /* createVNode */])(_component_demo_block, null, {
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
// CONCATENATED MODULE: ./examples/docs/loading.md?vue&type=template&id=f1be49bc

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./build/md-loader!./examples/docs/loading.md?vue&type=script&lang=ts
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


/* harmony default export */ var loadingvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _createVNode = vue_esm_browser["i" /* createVNode */],
          _openBlock = vue_esm_browser["u" /* openBlock */],
          _createBlock = vue_esm_browser["e" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_b_loading = _resolveComponent("b-loading");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_b_loading)]);
      }

      var democomponentExport = {};
      return _extends({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _createVNode = vue_esm_browser["i" /* createVNode */],
          _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _openBlock = vue_esm_browser["u" /* openBlock */],
          _createBlock = vue_esm_browser["e" /* createBlock */];
      var _hoisted_1 = {
        class: "demo-loading"
      };

      var _hoisted_2 = /*#__PURE__*/_createVNode("div", null, "我是后面的段落我是后面的段落我是后面的段落我是后面的段落", -1);

      function render(_ctx, _cache) {
        var _component_b_loading = _resolveComponent("b-loading");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_hoisted_2, _createVNode(_component_b_loading, {
          fix: ""
        })])]);
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
      var _hoisted_1 = {
        class: "demo-loading"
      };

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("加载中");

      var _hoisted_3 = {
        class: "demo-loading"
      };
      var _hoisted_4 = {
        class: "demo-loading"
      };

      function render(_ctx, _cache) {
        var _component_b_loading = _resolveComponent("b-loading");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode(_component_b_loading, {
          fix: ""
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        })]), _createVNode("div", _hoisted_3, [_createVNode(_component_b_loading, {
          fix: "",
          "show-text": "loading"
        })]), _createVNode("div", _hoisted_4, [_createVNode(_component_b_loading, {
          fix: "",
          "show-text": "loading",
          "show-icon": "loading"
        })])]);
      }

      var democomponentExport = {};
      return _extends({
        render: render
      }, democomponentExport);
    }(),
    "element-demo3": function () {
      var _createVNode = vue_esm_browser["i" /* createVNode */],
          _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _openBlock = vue_esm_browser["u" /* openBlock */],
          _createBlock = vue_esm_browser["e" /* createBlock */],
          _createCommentVNode = vue_esm_browser["f" /* createCommentVNode */],
          _createTextVNode = vue_esm_browser["h" /* createTextVNode */],
          _withCtx = vue_esm_browser["N" /* withCtx */];
      var _hoisted_1 = {
        class: "demo-loading"
      };

      var _hoisted_2 = /*#__PURE__*/_createVNode("div", null, "我是后面的段落我是后面的段落我是后面的段落我是后面的段落", -1);

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("加载");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("停止");

      function render(_ctx, _cache) {
        var _component_b_loading = _resolveComponent("b-loading");

        var _component_b_button = _resolveComponent("b-button");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_hoisted_2, _ctx.spinShow ? (_openBlock(), _createBlock(_component_b_loading, {
          key: 0,
          fix: ""
        })) : _createCommentVNode("", true)]), _createVNode("div", null, [_createVNode(_component_b_button, {
          onClick: _cache[1] || (_cache[1] = function ($event) {
            return _ctx.spinShow = true;
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_3];
          }),
          _: 1
        }), _createVNode(_component_b_button, {
          type: "danger",
          onClick: _cache[2] || (_cache[2] = function ($event) {
            return _ctx.spinShow = false;
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_4];
          }),
          _: 1
        })])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            spinShow: true
          };
        }
      };
      return _extends({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./examples/docs/loading.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./examples/docs/loading.md



loadingvue_type_script_lang_ts.render = loadingvue_type_template_id_f1be49bc_render

/* harmony default export */ var loading = __webpack_exports__["default"] = (loadingvue_type_script_lang_ts);

/***/ })

}]);