(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ 558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./build/md-loader!./examples/docs/message.md?vue&type=template&id=1d307338

var messagevue_type_template_id_1d307338_hoisted_1 = {
  class: "content element-doc"
};

var messagevue_type_template_id_1d307338_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h2", {
  id: "message-tong-zhi"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#message-tong-zhi"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" Message 通知")], -1);

var messagevue_type_template_id_1d307338_hoisted_3 = {
  class: "global-anchor"
};

var messagevue_type_template_id_1d307338_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("p", null, "轻量级的信息反馈组件，在顶部居中显示，并自动消失。有多种不同的提示状态可选择。", -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h3", {
  id: "ji-chu-yong-fa"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-chu-yong-fa"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" 基础用法")], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("p", null, "基本用法，默认在 3 秒后关闭", -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", {
  class: "html"
}, "\n<template>\n  <b-button @click=\"$message('普通的消息提示')\">info</b-button>\n  <b-button @click=\"open1\">render函数</b-button>\n</template>\n<script>\n  import { h } from 'vue'\n\n  export default {\n    methods: {\n      open1() {\n        this.$message.info({\n          message: h('i', { style: 'color: red' }, '我是render函数渲染出来的内容')\n        });\n      },\n    }\n  }\n</script>\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h3", {
  id: "bu-tong-lei-bie"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#bu-tong-lei-bie"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" 不同类别")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("p", null, "用来显示「成功、警告、消息、错误」类的操作反馈。", -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", {
  class: "html"
}, "\n<template>\n  <b-button type=\"primary\" plain @click=\"$message.info('我是普通消息提示')\">info</b-button>\n  <b-button type=\"success\" plain @click=\"$message.success('成功的提示消息')\">success</b-button>\n  <b-button type=\"warning\" plain @click=\"$message.warning('警告的提示消息')\">warning</b-button>\n  <b-button type=\"danger\" plain @click=\"$message.error('错误的提示消息')\">error</b-button>\n</template>\n")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h3", {
  id: "pei-zhi-can-shu"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#pei-zhi-can-shu"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" 配置参数")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("p", null, "可以设置配置参数来渲染", -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", {
  class: "html"
}, "\n<template>\n  <b-button @click=\"$message({message:'我10秒消失',duration:10})\">我10秒消失</b-button>\n  <b-button @click=\"$message({message:'我是可关闭的的提示', duration: 5, showClose: true})\">可关闭的</b-button>\n  <b-button @click=\"$message({message:'我永远不会关闭除非手动', duration: 0, showClose: true, zIndex:3000})\">不会关闭</b-button>\n</template>\n")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["g" /* createStaticVNode */])("<h3 id=\"api\"><a class=\"header-anchor\" href=\"#api\">¶</a> API</h3><p>组件注册了$notice 已方便快速调用函数如下</p><pre><code class=\"hljs language-javascript\"><span class=\"hljs-built_in\">this</span>.$message(options)\n<span class=\"hljs-built_in\">this</span>.$message.info(options)\n<span class=\"hljs-built_in\">this</span>.$message.success(options)\n<span class=\"hljs-built_in\">this</span>.$message.warning(options)\n<span class=\"hljs-built_in\">this</span>.$message.error(options)\n</code></pre><p>在vue3中你也可以手动引入并使用</p><pre><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">import</span> { Message } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;bin-ui-next&#39;</span>\n\nMessage(options)\nMessage.info(options)\nMessage.success(options)\nMessage.warning(options)\nMessage.error(options)\n\n</code></pre><h3 id=\"options\"><a class=\"header-anchor\" href=\"#options\">¶</a> Options</h3><table><thead><tr><th>函数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>message</td><td>通知提醒的内容，为空或不填时，自动应用仅标题模式下的样式</td><td>String</td><td>—</td></tr><tr><td>duration</td><td>自动关闭的延时，单位毫秒，不关闭可以写 0</td><td>Number</td><td>4500</td></tr><tr><td>onClose</td><td>关闭时的回调</td><td>Function</td><td>—</td></tr><tr><td>showClose</td><td>是否显示关闭按钮</td><td>Boolean</td><td>true</td></tr><tr><td>useHTML</td><td>是否将message转换成HTML片段插入，此操作需谨慎</td><td>Boolean</td><td>false</td></tr><tr><td>offset</td><td>偏移量</td><td>Number</td><td>—</td></tr><tr><td>zIndex</td><td>层级，默认2000以后追加</td><td>Number</td><td>—</td></tr></tbody></table>", 7);

function messagevue_type_template_id_1d307338_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_b_anchor_link = Object(vue_esm_browser["D" /* resolveComponent */])("b-anchor-link");

  var _component_b_anchor = Object(vue_esm_browser["D" /* resolveComponent */])("b-anchor");

  var _component_element_demo0 = Object(vue_esm_browser["D" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["D" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["D" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["D" /* resolveComponent */])("element-demo2");

  return Object(vue_esm_browser["u" /* openBlock */])(), Object(vue_esm_browser["e" /* createBlock */])("section", messagevue_type_template_id_1d307338_hoisted_1, [messagevue_type_template_id_1d307338_hoisted_2, Object(vue_esm_browser["i" /* createVNode */])("div", messagevue_type_template_id_1d307338_hoisted_3, [Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor, {
    "scroll-offset": 100
  }, {
    default: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#ji-chu-yong-fa",
        title: "基础用法"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#bu-tong-lei-bie",
        title: "不同类别"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#pei-zhi-can-shu",
        title: "配置参数"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#api",
        title: "API"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#options",
        title: "Options"
      })];
    }),
    _: 1
  })]), messagevue_type_template_id_1d307338_hoisted_4, _hoisted_5, _hoisted_6, Object(vue_esm_browser["i" /* createVNode */])(_component_demo_block, null, {
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
// CONCATENATED MODULE: ./examples/docs/message.md?vue&type=template&id=1d307338

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./build/md-loader!./examples/docs/message.md?vue&type=script&lang=ts
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


/* harmony default export */ var messagevue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createTextVNode = vue_esm_browser["h" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _withCtx = vue_esm_browser["N" /* withCtx */],
          _createVNode = vue_esm_browser["i" /* createVNode */],
          _openBlock = vue_esm_browser["u" /* openBlock */],
          _createBlock = vue_esm_browser["e" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("info");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("render函数");

      function render(_ctx, _cache) {
        var _component_b_button = _resolveComponent("b-button");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_b_button, {
          onClick: _cache[1] || (_cache[1] = function ($event) {
            return _ctx.$message('普通的消息提示');
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }), _createVNode(_component_b_button, {
          onClick: _ctx.open1
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }, 8, ["onClick"])]);
      }

      var h = vue_esm_browser["l" /* h */];
      var democomponentExport = {
        methods: {
          open1: function open1() {
            this.$message.info({
              message: h('i', {
                style: 'color: red'
              }, '我是render函数渲染出来的内容')
            });
          }
        }
      };
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("info");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("success");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("warning");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("error");

      function render(_ctx, _cache) {
        var _component_b_button = _resolveComponent("b-button");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_b_button, {
          type: "primary",
          plain: "",
          onClick: _cache[1] || (_cache[1] = function ($event) {
            return _ctx.$message.info('我是普通消息提示');
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }), _createVNode(_component_b_button, {
          type: "success",
          plain: "",
          onClick: _cache[2] || (_cache[2] = function ($event) {
            return _ctx.$message.success('成功的提示消息');
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }), _createVNode(_component_b_button, {
          type: "warning",
          plain: "",
          onClick: _cache[3] || (_cache[3] = function ($event) {
            return _ctx.$message.warning('警告的提示消息');
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_3];
          }),
          _: 1
        }), _createVNode(_component_b_button, {
          type: "danger",
          plain: "",
          onClick: _cache[4] || (_cache[4] = function ($event) {
            return _ctx.$message.error('错误的提示消息');
          })
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
    "element-demo2": function () {
      var _createTextVNode = vue_esm_browser["h" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _withCtx = vue_esm_browser["N" /* withCtx */],
          _createVNode = vue_esm_browser["i" /* createVNode */],
          _openBlock = vue_esm_browser["u" /* openBlock */],
          _createBlock = vue_esm_browser["e" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("我10秒消失");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("可关闭的");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("不会关闭");

      function render(_ctx, _cache) {
        var _component_b_button = _resolveComponent("b-button");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_b_button, {
          onClick: _cache[1] || (_cache[1] = function ($event) {
            return _ctx.$message({
              message: '我10秒消失',
              duration: 10
            });
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }), _createVNode(_component_b_button, {
          onClick: _cache[2] || (_cache[2] = function ($event) {
            return _ctx.$message({
              message: '我是可关闭的的提示',
              duration: 5,
              showClose: true
            });
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }), _createVNode(_component_b_button, {
          onClick: _cache[3] || (_cache[3] = function ($event) {
            return _ctx.$message({
              message: '我永远不会关闭除非手动',
              duration: 0,
              showClose: true,
              zIndex: 3000
            });
          })
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
// CONCATENATED MODULE: ./examples/docs/message.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./examples/docs/message.md



messagevue_type_script_lang_ts.render = messagevue_type_template_id_1d307338_render

/* harmony default export */ var message = __webpack_exports__["default"] = (messagevue_type_script_lang_ts);

/***/ })

}]);