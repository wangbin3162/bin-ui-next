(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ 559:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./build/md-loader!./examples/docs/notice.md?vue&type=template&id=056d7d36

var noticevue_type_template_id_056d7d36_hoisted_1 = {
  class: "content element-doc"
};

var noticevue_type_template_id_056d7d36_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h2", {
  id: "notice-tong-zhi"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#notice-tong-zhi"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" Notice 通知")], -1);

var noticevue_type_template_id_056d7d36_hoisted_3 = {
  class: "global-anchor"
};

var noticevue_type_template_id_056d7d36_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h3", {
  id: "ji-chu-yong-fa"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-chu-yong-fa"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" 基础用法")], -1);

var noticevue_type_template_id_056d7d36_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("p", null, "Notice 组件提供通知功能，组件注册了$notify方法，设置title字段和message字段用于直接调用", -1);

var noticevue_type_template_id_056d7d36_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", {
  class: "html"
}, "\n<template>\n  <b-button @click=\"open(false)\">提醒</b-button>\n  <b-button @click=\"open(true)\">打开提醒(仅标题)</b-button>\n  <b-button @click=\"open1\">render函数渲染</b-button>\n  <b-button @click=\"time\">自定义时长</b-button>\n</template>\n<script>\n  import { h } from 'vue'\n\n  export default {\n    methods: {\n      open1() {\n        this.$notice({\n          title: '标题名称',\n          message: h('i', { style: 'color: red' }, '我是render函数渲染出来的内容')\n        });\n      },\n      open(hasMessage) {\n        this.$notice({\n          title: 'Notice 标题',\n          message: hasMessage ? '' : '这是通知内容,这是通知内容. 这是通知内容,这是通知内容.'\n        });\n      },\n      time() {\n        this.$notice({\n          title: 'Notice 标题',\n          message: 'duration设置为0则不会自动关闭',\n          duration: 0\n        })\n      }\n    }\n  }\n</script>\n")], -1);

var noticevue_type_template_id_056d7d36_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h3", {
  id: "dai-tu-biao"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#dai-tu-biao"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" 带图标")], -1);

var noticevue_type_template_id_056d7d36_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("p", null, "可以附带提示性的图标进行使用", -1);

var noticevue_type_template_id_056d7d36_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", {
  class: "html"
}, "\n<template>\n  <div>\n    <div style=\"padding: 5px 0;\">带描述</div>\n    <b-button type=\"primary\" plain @click=\"info(false)\">Info</b-button>\n    <b-button type=\"success\" plain @click=\"success(false)\">Success</b-button>\n    <b-button type=\"warning\" plain @click=\"warning(false)\">Warning</b-button>\n    <b-button type=\"danger\" plain @click=\"error(false)\">error</b-button>\n    <div style=\"padding: 5px 0;\">仅标题</div>\n    <b-button type=\"primary\" plain @click=\"info(true)\">Info</b-button>\n    <b-button type=\"success\" plain @click=\"success(true)\">Success</b-button>\n    <b-button type=\"warning\" plain @click=\"warning(true)\">Warning</b-button>\n    <b-button type=\"danger\" plain @click=\"error(true)\">error</b-button>\n  </div>\n</template>\n<script>\n  export default {\n    methods: {\n      info(message) {\n        this.$notice.info({\n          title: 'Notice 标题',\n          message: message ? '' : '这是通知内容,这是通知内容. 这是通知内容,这是通知内容.'\n        });\n      },\n      success(message) {\n        this.$notice.success({\n          title: 'Notice 标题',\n          message: message ? '' : '这是通知内容,这是通知内容. 这是通知内容,这是通知内容.'\n        });\n      },\n      warning(message) {\n        this.$notice.warning({\n          title: 'Notice 标题',\n          message: message ? '' : '这是通知内容,这是通知内容. 这是通知内容,这是通知内容.'\n        });\n      },\n      error(message) {\n        this.$notice.error({\n          title: 'Notice 标题',\n          message: message ? '' : '这是通知内容,这是通知内容. 这是通知内容,这是通知内容.'\n        });\n      }\n    }\n  }\n</script>\n")], -1);

var noticevue_type_template_id_056d7d36_hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h3", {
  id: "4ge-fang-xiang"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#4ge-fang-xiang"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" 4个方向")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("p", null, "可以设置其他参数控制notice位置和显示", -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", {
  class: "html"
}, "\n<template>\n  <b-button @click=\"$notice.info({title:'右上角',message:'右上角弹出notice',position:'top-right'})\">\n    右上角\n  </b-button>\n  <b-button @click=\"$notice.info({title:'左上角',message:'左上角弹出notice',position:'top-left'})\">\n    左上角\n  </b-button>\n  <b-button @click=\"$notice.info({title:'右下角',message:'右下角弹出notice',position:'bottom-right'})\">\n    右下角\n  </b-button>\n  <b-button @click=\"$notice.info({title:'左下角',message:'左下角弹出notice',position:'bottom-left'})\">\n    左下角\n  </b-button>\n</template>\n")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h3", {
  id: "qi-ta-can-shu"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#qi-ta-can-shu"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" 其他参数")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("p", null, "可以设置其他参数控制notice位置和显示", -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", {
  class: "html"
}, "\n<template>\n  <b-button @click=\"$notice.info({title:'标题',useHTML:true,message:'我是<i>html</i>片段插入的内容'})\">\n    HTML片段\n  </b-button>\n  <b-button @click=\"$notice.info({title:'标题',showClose:false,message:'隐藏关闭按钮内容'})\">\n    隐藏关闭按钮\n  </b-button>\n  <b-button @click=\"$notice({title: '偏移',message: '这是一条带有偏移的提示消息',offset: 200})\">\n    偏移位置\n  </b-button>\n</template>\n")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["g" /* createStaticVNode */])("<h3 id=\"api\"><a class=\"header-anchor\" href=\"#api\">¶</a> API</h3><p>组件注册了$notice 已方便快速调用函数如下</p><pre><code class=\"hljs language-javascript\"><span class=\"hljs-built_in\">this</span>.$notice(options)\n<span class=\"hljs-built_in\">this</span>.$notice.info(options)\n<span class=\"hljs-built_in\">this</span>.$notice.success(options)\n<span class=\"hljs-built_in\">this</span>.$notice.warning(options)\n<span class=\"hljs-built_in\">this</span>.$notice.error(options)\n</code></pre><p>在vue3中你也可以手动引入并使用</p><pre><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">import</span> { Notice } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;bin-ui-next&#39;</span>\n\nNotice(options)\nNotice.info(options)\nNotice.success(options)\nNotice.warning(options)\nNotice.error(options)\n\n</code></pre><h3 id=\"options\"><a class=\"header-anchor\" href=\"#options\">¶</a> Options</h3><p>函数及参数说明如下：</p><table><thead><tr><th>函数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>通知提醒的标题</td><td>String</td><td>—</td></tr><tr><td>message</td><td>通知提醒的内容，为空或不填时，自动应用仅标题模式下的样式</td><td>String</td><td>—</td></tr><tr><td>duration</td><td>自动关闭的延时，单位毫秒，不关闭可以写 0</td><td>Number</td><td>4500</td></tr><tr><td>position</td><td>弹出位置 可选top-right 、top-left、bottom-right、bottom-left</td><td>String</td><td>top-right</td></tr><tr><td>onClose</td><td>关闭时的回调</td><td>Function</td><td>—</td></tr><tr><td>showClose</td><td>是否显示关闭按钮</td><td>Boolean</td><td>true</td></tr><tr><td>useHTML</td><td>是否将message转换成HTML片段插入，此操作需谨慎</td><td>Boolean</td><td>false</td></tr><tr><td>offset</td><td>偏移量</td><td>Number</td><td>—</td></tr><tr><td>zIndex</td><td>层级，默认2000以后追加</td><td>Number</td><td>—</td></tr></tbody></table>", 8);

function noticevue_type_template_id_056d7d36_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_b_anchor_link = Object(vue_esm_browser["D" /* resolveComponent */])("b-anchor-link");

  var _component_b_anchor = Object(vue_esm_browser["D" /* resolveComponent */])("b-anchor");

  var _component_element_demo0 = Object(vue_esm_browser["D" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["D" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["D" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["D" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["D" /* resolveComponent */])("element-demo3");

  return Object(vue_esm_browser["u" /* openBlock */])(), Object(vue_esm_browser["e" /* createBlock */])("section", noticevue_type_template_id_056d7d36_hoisted_1, [noticevue_type_template_id_056d7d36_hoisted_2, Object(vue_esm_browser["i" /* createVNode */])("div", noticevue_type_template_id_056d7d36_hoisted_3, [Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor, {
    "scroll-offset": 100
  }, {
    default: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#ji-chu-yong-fa",
        title: "基础用法"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#dai-tu-biao",
        title: "带图标"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#4ge-fang-xiang",
        title: "4个方向"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#qi-ta-can-shu",
        title: "其他参数调用"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#api",
        title: "API"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#options",
        title: "Options"
      })];
    }),
    _: 1
  })]), noticevue_type_template_id_056d7d36_hoisted_4, noticevue_type_template_id_056d7d36_hoisted_5, Object(vue_esm_browser["i" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["i" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [noticevue_type_template_id_056d7d36_hoisted_6];
    }),
    _: 1
  }), noticevue_type_template_id_056d7d36_hoisted_7, noticevue_type_template_id_056d7d36_hoisted_8, Object(vue_esm_browser["i" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["i" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [noticevue_type_template_id_056d7d36_hoisted_9];
    }),
    _: 1
  }), noticevue_type_template_id_056d7d36_hoisted_10, _hoisted_11, Object(vue_esm_browser["i" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["i" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [_hoisted_12];
    }),
    _: 1
  }), _hoisted_13, _hoisted_14, Object(vue_esm_browser["i" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["i" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [_hoisted_15];
    }),
    _: 1
  }), _hoisted_16]);
}
// CONCATENATED MODULE: ./examples/docs/notice.md?vue&type=template&id=056d7d36

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./build/md-loader!./examples/docs/notice.md?vue&type=script&lang=ts
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


/* harmony default export */ var noticevue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createTextVNode = vue_esm_browser["h" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _withCtx = vue_esm_browser["N" /* withCtx */],
          _createVNode = vue_esm_browser["i" /* createVNode */],
          _openBlock = vue_esm_browser["u" /* openBlock */],
          _createBlock = vue_esm_browser["e" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("提醒");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("打开提醒(仅标题)");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("render函数渲染");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("自定义时长");

      function render(_ctx, _cache) {
        var _component_b_button = _resolveComponent("b-button");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_b_button, {
          onClick: _cache[1] || (_cache[1] = function ($event) {
            return _ctx.open(false);
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }), _createVNode(_component_b_button, {
          onClick: _cache[2] || (_cache[2] = function ($event) {
            return _ctx.open(true);
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }), _createVNode(_component_b_button, {
          onClick: _ctx.open1
        }, {
          default: _withCtx(function () {
            return [_hoisted_3];
          }),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_b_button, {
          onClick: _ctx.time
        }, {
          default: _withCtx(function () {
            return [_hoisted_4];
          }),
          _: 1
        }, 8, ["onClick"])]);
      }

      var h = vue_esm_browser["l" /* h */];
      var democomponentExport = {
        methods: {
          open1: function open1() {
            this.$notice({
              title: '标题名称',
              message: h('i', {
                style: 'color: red'
              }, '我是render函数渲染出来的内容')
            });
          },
          open: function open(hasMessage) {
            this.$notice({
              title: 'Notice 标题',
              message: hasMessage ? '' : '这是通知内容,这是通知内容. 这是通知内容,这是通知内容.'
            });
          },
          time: function time() {
            this.$notice({
              title: 'Notice 标题',
              message: 'duration设置为0则不会自动关闭',
              duration: 0
            });
          }
        }
      };
      return _extends({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _createVNode = vue_esm_browser["i" /* createVNode */],
          _createTextVNode = vue_esm_browser["h" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _withCtx = vue_esm_browser["N" /* withCtx */],
          _openBlock = vue_esm_browser["u" /* openBlock */],
          _createBlock = vue_esm_browser["e" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("div", {
        style: {
          "padding": "5px 0"
        }
      }, "带描述", -1);

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Info");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Success");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Warning");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("error");

      var _hoisted_6 = /*#__PURE__*/_createVNode("div", {
        style: {
          "padding": "5px 0"
        }
      }, "仅标题", -1);

      var _hoisted_7 = /*#__PURE__*/_createTextVNode("Info");

      var _hoisted_8 = /*#__PURE__*/_createTextVNode("Success");

      var _hoisted_9 = /*#__PURE__*/_createTextVNode("Warning");

      var _hoisted_10 = /*#__PURE__*/_createTextVNode("error");

      function render(_ctx, _cache) {
        var _component_b_button = _resolveComponent("b-button");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", null, [_hoisted_1, _createVNode(_component_b_button, {
          type: "primary",
          plain: "",
          onClick: _cache[1] || (_cache[1] = function ($event) {
            return _ctx.info(false);
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }), _createVNode(_component_b_button, {
          type: "success",
          plain: "",
          onClick: _cache[2] || (_cache[2] = function ($event) {
            return _ctx.success(false);
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_3];
          }),
          _: 1
        }), _createVNode(_component_b_button, {
          type: "warning",
          plain: "",
          onClick: _cache[3] || (_cache[3] = function ($event) {
            return _ctx.warning(false);
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_4];
          }),
          _: 1
        }), _createVNode(_component_b_button, {
          type: "danger",
          plain: "",
          onClick: _cache[4] || (_cache[4] = function ($event) {
            return _ctx.error(false);
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_5];
          }),
          _: 1
        }), _hoisted_6, _createVNode(_component_b_button, {
          type: "primary",
          plain: "",
          onClick: _cache[5] || (_cache[5] = function ($event) {
            return _ctx.info(true);
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_7];
          }),
          _: 1
        }), _createVNode(_component_b_button, {
          type: "success",
          plain: "",
          onClick: _cache[6] || (_cache[6] = function ($event) {
            return _ctx.success(true);
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_8];
          }),
          _: 1
        }), _createVNode(_component_b_button, {
          type: "warning",
          plain: "",
          onClick: _cache[7] || (_cache[7] = function ($event) {
            return _ctx.warning(true);
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_9];
          }),
          _: 1
        }), _createVNode(_component_b_button, {
          type: "danger",
          plain: "",
          onClick: _cache[8] || (_cache[8] = function ($event) {
            return _ctx.error(true);
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_10];
          }),
          _: 1
        })])]);
      }

      var democomponentExport = {
        methods: {
          info: function info(message) {
            this.$notice.info({
              title: 'Notice 标题',
              message: message ? '' : '这是通知内容,这是通知内容. 这是通知内容,这是通知内容.'
            });
          },
          success: function success(message) {
            this.$notice.success({
              title: 'Notice 标题',
              message: message ? '' : '这是通知内容,这是通知内容. 这是通知内容,这是通知内容.'
            });
          },
          warning: function warning(message) {
            this.$notice.warning({
              title: 'Notice 标题',
              message: message ? '' : '这是通知内容,这是通知内容. 这是通知内容,这是通知内容.'
            });
          },
          error: function error(message) {
            this.$notice.error({
              title: 'Notice 标题',
              message: message ? '' : '这是通知内容,这是通知内容. 这是通知内容,这是通知内容.'
            });
          }
        }
      };
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode(" 右上角 ");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode(" 左上角 ");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode(" 右下角 ");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode(" 左下角 ");

      function render(_ctx, _cache) {
        var _component_b_button = _resolveComponent("b-button");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_b_button, {
          onClick: _cache[1] || (_cache[1] = function ($event) {
            return _ctx.$notice.info({
              title: '右上角',
              message: '右上角弹出notice',
              position: 'top-right'
            });
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }), _createVNode(_component_b_button, {
          onClick: _cache[2] || (_cache[2] = function ($event) {
            return _ctx.$notice.info({
              title: '左上角',
              message: '左上角弹出notice',
              position: 'top-left'
            });
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }), _createVNode(_component_b_button, {
          onClick: _cache[3] || (_cache[3] = function ($event) {
            return _ctx.$notice.info({
              title: '右下角',
              message: '右下角弹出notice',
              position: 'bottom-right'
            });
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_3];
          }),
          _: 1
        }), _createVNode(_component_b_button, {
          onClick: _cache[4] || (_cache[4] = function ($event) {
            return _ctx.$notice.info({
              title: '左下角',
              message: '左下角弹出notice',
              position: 'bottom-left'
            });
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
    "element-demo3": function () {
      var _createTextVNode = vue_esm_browser["h" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _withCtx = vue_esm_browser["N" /* withCtx */],
          _createVNode = vue_esm_browser["i" /* createVNode */],
          _openBlock = vue_esm_browser["u" /* openBlock */],
          _createBlock = vue_esm_browser["e" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode(" HTML片段 ");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode(" 隐藏关闭按钮 ");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode(" 偏移位置 ");

      function render(_ctx, _cache) {
        var _component_b_button = _resolveComponent("b-button");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_b_button, {
          onClick: _cache[1] || (_cache[1] = function ($event) {
            return _ctx.$notice.info({
              title: '标题',
              useHTML: true,
              message: '我是<i>html</i>片段插入的内容'
            });
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }), _createVNode(_component_b_button, {
          onClick: _cache[2] || (_cache[2] = function ($event) {
            return _ctx.$notice.info({
              title: '标题',
              showClose: false,
              message: '隐藏关闭按钮内容'
            });
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }), _createVNode(_component_b_button, {
          onClick: _cache[3] || (_cache[3] = function ($event) {
            return _ctx.$notice({
              title: '偏移',
              message: '这是一条带有偏移的提示消息',
              offset: 200
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
// CONCATENATED MODULE: ./examples/docs/notice.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./examples/docs/notice.md



noticevue_type_script_lang_ts.render = noticevue_type_template_id_056d7d36_render

/* harmony default export */ var notice = __webpack_exports__["default"] = (noticevue_type_script_lang_ts);

/***/ })

}]);