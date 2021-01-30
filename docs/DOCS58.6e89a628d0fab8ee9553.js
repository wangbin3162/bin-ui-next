(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[54],{

/***/ 566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./build/md-loader!./examples/docs/transition.md?vue&type=template&id=70a79f2d

var transitionvue_type_template_id_70a79f2d_hoisted_1 = {
  class: "content element-doc"
};

var transitionvue_type_template_id_70a79f2d_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h2", {
  id: "nei-zhi-guo-du-dong-hua"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#nei-zhi-guo-du-dong-hua"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" 内置过渡动画")], -1);

var transitionvue_type_template_id_70a79f2d_hoisted_3 = {
  class: "global-anchor"
};

var transitionvue_type_template_id_70a79f2d_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h3", {
  id: "dan-ru-dan-chu"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#dan-ru-dan-chu"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" 淡入淡出")], -1);

var transitionvue_type_template_id_70a79f2d_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])("提供 2种 淡入淡出效果"), /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", null, "fade-in-linear"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" 和 "), /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", null, "fade-in")], -1);

var transitionvue_type_template_id_70a79f2d_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", {
  class: "html"
}, "\n<template>\n  <div class=\"demo-transition\">\n    <b-button @click=\"show1= !show1\">查看效果</b-button>\n    <div style=\"display: flex; margin-top: 20px; height: 100px;\">\n      <transition name=\"fade-in-linear\">\n        <div v-show=\"show1\" class=\"transition-box\">fade-in-linear</div>\n      </transition>\n      <transition name=\"fade-in\">\n        <div v-show=\"show1\" class=\"transition-box\">fade-in</div>\n      </transition>\n    </div>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        show1: true\n      }\n    }\n  }\n</script>\n")], -1);

var transitionvue_type_template_id_70a79f2d_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h3", {
  id: "zuo-you-ping-yi"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#zuo-you-ping-yi"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" 左右平移")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", {
  class: "html"
}, "\n<template>\n  <div class=\"demo-transition\">\n    <b-button @click=\"show1= !show1\">查看效果</b-button>\n    <div style=\"display: flex; justify-content:center;margin-top: 20px; height: 100px;\">\n      <transition name=\"move-left\">\n        <div v-show=\"show1\" class=\"transition-box\">move-left</div>\n      </transition>\n      <transition name=\"move-right\">\n        <div v-show=\"show1\" class=\"transition-box\">move-right</div>\n      </transition>\n    </div>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        show1: true\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h3", {
  id: "suo-fang"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#suo-fang"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" 缩放")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])("提供 4种 缩放效果 "), /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", null, "zoom-in-center"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])("，"), /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", null, "zoom-in-top"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" ，"), /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", null, "zoom-in"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" 和 "), /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", null, "zoom-in-bottom")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", {
  class: "html"
}, "\n<template>\n  <div class=\"demo-transition\">\n    <b-button @click=\"show2= !show2\">查看效果</b-button>\n    <div style=\"display: flex; margin-top: 20px; height: 100px;\">\n      <transition name=\"zoom-in-center\">\n        <div v-show=\"show2\" class=\"transition-box\">zoom-in-center</div>\n      </transition>\n      <transition name=\"zoom-in-top\">\n        <div v-show=\"show2\" class=\"transition-box\">zoom-in-top</div>\n      </transition>\n      <transition name=\"zoom-in\">\n        <div v-show=\"show2\" class=\"transition-box\">zoom-in</div>\n      </transition>\n      <transition name=\"zoom-in-bottom\">\n        <div v-show=\"show2\" class=\"transition-box\">zoom-in-bottom</div>\n      </transition>\n    </div>\n  </div>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        show2: true\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h3", {
  id: "yi-dong-jian-bian"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#yi-dong-jian-bian"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" 移动渐变")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])("提供 3种 特殊的移动渐变 "), /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", null, "fade-transverse"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" ,"), /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", null, "fade-scale"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" ,"), /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", null, "fade-scale-move")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", {
  class: "html"
}, "\n<template>\n  <div class=\"demo-transition\">\n    <b-button @click=\"show3= !show3\">查看效果</b-button>\n    <div style=\"display: flex; margin-top: 20px; height: 100px;\">\n      <transition name=\"fade-transverse\">\n        <div v-show=\"show3\" class=\"transition-box\">fade-transverse</div>\n      </transition>\n      <transition name=\"fade-scale\">\n        <div v-show=\"show3\" class=\"transition-box\">fade-scale</div>\n      </transition>\n      <transition name=\"fade-scale-move\">\n        <div v-show=\"show3\" class=\"transition-box\">fade-scale-move</div>\n      </transition>\n      <transition name=\"fade-down\">\n        <div v-show=\"show3\" class=\"transition-box\">fade-down</div>\n      </transition>\n    </div>\n  </div>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        show3: true\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h3", {
  id: "zhan-kai-zhe-die"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#zhan-kai-zhe-die"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" 展开折叠")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", {
  class: "html"
}, "\n<template>\n  <div class=\"demo-transition\">\n    <b-button @click=\"show4= !show4\">查看效果</b-button>\n    <div style=\"margin-top: 20px; height: 200px;\">\n      <b-collapse-transition>\n        <div v-show=\"show4\">\n          <div class=\"transition-box\">collapse-transition</div>\n          <div class=\"transition-box\">collapse-transition</div>\n        </div>\n      </b-collapse-transition>\n    </div>\n  </div>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        show4: true\n      }\n    }\n  }\n</script>\n")], -1);

function transitionvue_type_template_id_70a79f2d_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_b_anchor_link = Object(vue_esm_browser["D" /* resolveComponent */])("b-anchor-link");

  var _component_b_anchor = Object(vue_esm_browser["D" /* resolveComponent */])("b-anchor");

  var _component_element_demo0 = Object(vue_esm_browser["D" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["D" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["D" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["D" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["D" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser["D" /* resolveComponent */])("element-demo4");

  return Object(vue_esm_browser["u" /* openBlock */])(), Object(vue_esm_browser["e" /* createBlock */])("section", transitionvue_type_template_id_70a79f2d_hoisted_1, [transitionvue_type_template_id_70a79f2d_hoisted_2, Object(vue_esm_browser["i" /* createVNode */])("div", transitionvue_type_template_id_70a79f2d_hoisted_3, [Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor, {
    "scroll-offset": 100
  }, {
    default: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#dan-ru-dan-chu",
        title: "淡入淡出"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#suo-fang",
        title: "缩放"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#yi-dong-jian-bian",
        title: "移动渐变"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#zhan-kai-zhe-die",
        title: "展开折叠"
      })];
    }),
    _: 1
  })]), transitionvue_type_template_id_70a79f2d_hoisted_4, transitionvue_type_template_id_70a79f2d_hoisted_5, Object(vue_esm_browser["i" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["i" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [transitionvue_type_template_id_70a79f2d_hoisted_6];
    }),
    _: 1
  }), transitionvue_type_template_id_70a79f2d_hoisted_7, Object(vue_esm_browser["i" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["i" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [_hoisted_8];
    }),
    _: 1
  }), _hoisted_9, _hoisted_10, Object(vue_esm_browser["i" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["i" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [_hoisted_11];
    }),
    _: 1
  }), _hoisted_12, _hoisted_13, Object(vue_esm_browser["i" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["i" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [_hoisted_14];
    }),
    _: 1
  }), _hoisted_15, Object(vue_esm_browser["i" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["i" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [_hoisted_16];
    }),
    _: 1
  })]);
}
// CONCATENATED MODULE: ./examples/docs/transition.md?vue&type=template&id=70a79f2d

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./build/md-loader!./examples/docs/transition.md?vue&type=script&lang=ts
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


/* harmony default export */ var transitionvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createTextVNode = vue_esm_browser["h" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _withCtx = vue_esm_browser["N" /* withCtx */],
          _createVNode = vue_esm_browser["i" /* createVNode */],
          _vShow = vue_esm_browser["L" /* vShow */],
          _withDirectives = vue_esm_browser["O" /* withDirectives */],
          _Transition = vue_esm_browser["b" /* Transition */],
          _openBlock = vue_esm_browser["u" /* openBlock */],
          _createBlock = vue_esm_browser["e" /* createBlock */];
      var _hoisted_1 = {
        class: "demo-transition"
      };

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("查看效果");

      var _hoisted_3 = {
        style: {
          "display": "flex",
          "margin-top": "20px",
          "height": "100px"
        }
      };
      var _hoisted_4 = {
        class: "transition-box"
      };
      var _hoisted_5 = {
        class: "transition-box"
      };

      function render(_ctx, _cache) {
        var _component_b_button = _resolveComponent("b-button");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode(_component_b_button, {
          onClick: _cache[1] || (_cache[1] = function ($event) {
            return _ctx.show1 = !_ctx.show1;
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }), _createVNode("div", _hoisted_3, [_createVNode(_Transition, {
          name: "fade-in-linear"
        }, {
          default: _withCtx(function () {
            return [_withDirectives(_createVNode("div", _hoisted_4, "fade-in-linear", 512), [[_vShow, _ctx.show1]])];
          }),
          _: 1
        }), _createVNode(_Transition, {
          name: "fade-in"
        }, {
          default: _withCtx(function () {
            return [_withDirectives(_createVNode("div", _hoisted_5, "fade-in", 512), [[_vShow, _ctx.show1]])];
          }),
          _: 1
        })])])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            show1: true
          };
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
          _vShow = vue_esm_browser["L" /* vShow */],
          _withDirectives = vue_esm_browser["O" /* withDirectives */],
          _Transition = vue_esm_browser["b" /* Transition */],
          _openBlock = vue_esm_browser["u" /* openBlock */],
          _createBlock = vue_esm_browser["e" /* createBlock */];
      var _hoisted_1 = {
        class: "demo-transition"
      };

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("查看效果");

      var _hoisted_3 = {
        style: {
          "display": "flex",
          "justify-content": "center",
          "margin-top": "20px",
          "height": "100px"
        }
      };
      var _hoisted_4 = {
        class: "transition-box"
      };
      var _hoisted_5 = {
        class: "transition-box"
      };

      function render(_ctx, _cache) {
        var _component_b_button = _resolveComponent("b-button");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode(_component_b_button, {
          onClick: _cache[1] || (_cache[1] = function ($event) {
            return _ctx.show1 = !_ctx.show1;
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }), _createVNode("div", _hoisted_3, [_createVNode(_Transition, {
          name: "move-left"
        }, {
          default: _withCtx(function () {
            return [_withDirectives(_createVNode("div", _hoisted_4, "move-left", 512), [[_vShow, _ctx.show1]])];
          }),
          _: 1
        }), _createVNode(_Transition, {
          name: "move-right"
        }, {
          default: _withCtx(function () {
            return [_withDirectives(_createVNode("div", _hoisted_5, "move-right", 512), [[_vShow, _ctx.show1]])];
          }),
          _: 1
        })])])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            show1: true
          };
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
          _vShow = vue_esm_browser["L" /* vShow */],
          _withDirectives = vue_esm_browser["O" /* withDirectives */],
          _Transition = vue_esm_browser["b" /* Transition */],
          _openBlock = vue_esm_browser["u" /* openBlock */],
          _createBlock = vue_esm_browser["e" /* createBlock */];
      var _hoisted_1 = {
        class: "demo-transition"
      };

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("查看效果");

      var _hoisted_3 = {
        style: {
          "display": "flex",
          "margin-top": "20px",
          "height": "100px"
        }
      };
      var _hoisted_4 = {
        class: "transition-box"
      };
      var _hoisted_5 = {
        class: "transition-box"
      };
      var _hoisted_6 = {
        class: "transition-box"
      };
      var _hoisted_7 = {
        class: "transition-box"
      };

      function render(_ctx, _cache) {
        var _component_b_button = _resolveComponent("b-button");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode(_component_b_button, {
          onClick: _cache[1] || (_cache[1] = function ($event) {
            return _ctx.show2 = !_ctx.show2;
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }), _createVNode("div", _hoisted_3, [_createVNode(_Transition, {
          name: "zoom-in-center"
        }, {
          default: _withCtx(function () {
            return [_withDirectives(_createVNode("div", _hoisted_4, "zoom-in-center", 512), [[_vShow, _ctx.show2]])];
          }),
          _: 1
        }), _createVNode(_Transition, {
          name: "zoom-in-top"
        }, {
          default: _withCtx(function () {
            return [_withDirectives(_createVNode("div", _hoisted_5, "zoom-in-top", 512), [[_vShow, _ctx.show2]])];
          }),
          _: 1
        }), _createVNode(_Transition, {
          name: "zoom-in"
        }, {
          default: _withCtx(function () {
            return [_withDirectives(_createVNode("div", _hoisted_6, "zoom-in", 512), [[_vShow, _ctx.show2]])];
          }),
          _: 1
        }), _createVNode(_Transition, {
          name: "zoom-in-bottom"
        }, {
          default: _withCtx(function () {
            return [_withDirectives(_createVNode("div", _hoisted_7, "zoom-in-bottom", 512), [[_vShow, _ctx.show2]])];
          }),
          _: 1
        })])])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            show2: true
          };
        }
      };
      return _extends({
        render: render
      }, democomponentExport);
    }(),
    "element-demo3": function () {
      var _createTextVNode = vue_esm_browser["h" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _withCtx = vue_esm_browser["N" /* withCtx */],
          _createVNode = vue_esm_browser["i" /* createVNode */],
          _vShow = vue_esm_browser["L" /* vShow */],
          _withDirectives = vue_esm_browser["O" /* withDirectives */],
          _Transition = vue_esm_browser["b" /* Transition */],
          _openBlock = vue_esm_browser["u" /* openBlock */],
          _createBlock = vue_esm_browser["e" /* createBlock */];
      var _hoisted_1 = {
        class: "demo-transition"
      };

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("查看效果");

      var _hoisted_3 = {
        style: {
          "display": "flex",
          "margin-top": "20px",
          "height": "100px"
        }
      };
      var _hoisted_4 = {
        class: "transition-box"
      };
      var _hoisted_5 = {
        class: "transition-box"
      };
      var _hoisted_6 = {
        class: "transition-box"
      };
      var _hoisted_7 = {
        class: "transition-box"
      };

      function render(_ctx, _cache) {
        var _component_b_button = _resolveComponent("b-button");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode(_component_b_button, {
          onClick: _cache[1] || (_cache[1] = function ($event) {
            return _ctx.show3 = !_ctx.show3;
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }), _createVNode("div", _hoisted_3, [_createVNode(_Transition, {
          name: "fade-transverse"
        }, {
          default: _withCtx(function () {
            return [_withDirectives(_createVNode("div", _hoisted_4, "fade-transverse", 512), [[_vShow, _ctx.show3]])];
          }),
          _: 1
        }), _createVNode(_Transition, {
          name: "fade-scale"
        }, {
          default: _withCtx(function () {
            return [_withDirectives(_createVNode("div", _hoisted_5, "fade-scale", 512), [[_vShow, _ctx.show3]])];
          }),
          _: 1
        }), _createVNode(_Transition, {
          name: "fade-scale-move"
        }, {
          default: _withCtx(function () {
            return [_withDirectives(_createVNode("div", _hoisted_6, "fade-scale-move", 512), [[_vShow, _ctx.show3]])];
          }),
          _: 1
        }), _createVNode(_Transition, {
          name: "fade-down"
        }, {
          default: _withCtx(function () {
            return [_withDirectives(_createVNode("div", _hoisted_7, "fade-down", 512), [[_vShow, _ctx.show3]])];
          }),
          _: 1
        })])])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            show3: true
          };
        }
      };
      return _extends({
        render: render
      }, democomponentExport);
    }(),
    "element-demo4": function () {
      var _createTextVNode = vue_esm_browser["h" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _withCtx = vue_esm_browser["N" /* withCtx */],
          _createVNode = vue_esm_browser["i" /* createVNode */],
          _vShow = vue_esm_browser["L" /* vShow */],
          _withDirectives = vue_esm_browser["O" /* withDirectives */],
          _openBlock = vue_esm_browser["u" /* openBlock */],
          _createBlock = vue_esm_browser["e" /* createBlock */];
      var _hoisted_1 = {
        class: "demo-transition"
      };

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("查看效果");

      var _hoisted_3 = {
        style: {
          "margin-top": "20px",
          "height": "200px"
        }
      };

      var _hoisted_4 = /*#__PURE__*/_createVNode("div", {
        class: "transition-box"
      }, "collapse-transition", -1);

      var _hoisted_5 = /*#__PURE__*/_createVNode("div", {
        class: "transition-box"
      }, "collapse-transition", -1);

      function render(_ctx, _cache) {
        var _component_b_button = _resolveComponent("b-button");

        var _component_b_collapse_transition = _resolveComponent("b-collapse-transition");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode(_component_b_button, {
          onClick: _cache[1] || (_cache[1] = function ($event) {
            return _ctx.show4 = !_ctx.show4;
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }), _createVNode("div", _hoisted_3, [_createVNode(_component_b_collapse_transition, null, {
          default: _withCtx(function () {
            return [_withDirectives(_createVNode("div", null, [_hoisted_4, _hoisted_5], 512), [[_vShow, _ctx.show4]])];
          }),
          _: 1
        })])])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            show4: true
          };
        }
      };
      return _extends({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./examples/docs/transition.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./examples/docs/transition.md



transitionvue_type_script_lang_ts.render = transitionvue_type_template_id_70a79f2d_render

/* harmony default export */ var transition = __webpack_exports__["default"] = (transitionvue_type_script_lang_ts);

/***/ })

}]);