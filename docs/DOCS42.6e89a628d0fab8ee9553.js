(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./build/md-loader!./examples/docs/scrollbar.md?vue&type=template&id=930d87fc

var scrollbarvue_type_template_id_930d87fc_hoisted_1 = {
  class: "content element-doc"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h2", {
  id: "scrollbar-gun-dong"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#scrollbar-gun-dong"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" ScrollBar 滚动")], -1);

var _hoisted_3 = {
  class: "global-anchor"
};

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("p", null, "由于默认浏览器滚动条极为丑陋切不同浏览器之间样式不统一，故封装一个滚动组件用于实现滚动", -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h3", {
  id: "yong-fa"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#yong-fa"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" 用法")], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])("使用"), /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", null, "b-scrollbar"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])("进行包裹，默认"), /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", null, "slot"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])("为内容显示区域,如当前示例所包含的滚动结构如下:")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", {
  class: "html"
}, "\n<template>\n  <div style=\"height: 400px;\">\n    <b-scrollbar style=\"height:100%;\" ref=\"componentScrollBar\">\n      <p v-for=\"i in 40\" :key=\"i\">我是填充内容....</p>\n    </b-scrollbar>\n  </div>\n</template>\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["g" /* createStaticVNode */])("<p>注意：如果内容区域不超过容器高度则不会生成滚动条</p><h3 id=\"shi-yong-tie-shi\"><a class=\"header-anchor\" href=\"#shi-yong-tie-shi\">¶</a> 使用贴士</h3><ul><li>b-scrollbar的父层要有固定高度</li><li>b-scrollbar的高度要设成100%</li><li>如果出现横滚动条，请添加css（.bin-scrollbar__wrap{overflow-x:hidden;}）</li></ul><h3 id=\"props\"><a class=\"header-anchor\" href=\"#props\">¶</a> Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>normal</td><td>是否采用原生滚动 (隐藏原生滚动条)</td><td>boolean</td><td>true</td><td>false</td></tr><tr><td>wrapStyle</td><td>内联方式 自定义wrap容器的样式</td><td>Object</td><td>-</td><td>{}</td></tr><tr><td>wrapClass</td><td>类名方式 自定义wrap容器的样式</td><td>Object</td><td>-</td><td>{}</td></tr><tr><td>viewClass</td><td>类名方式 自定义view容器的样式</td><td>Object</td><td>-</td><td>{}</td></tr><tr><td>viewStyle</td><td>内联方式 自定义view容器的样式</td><td>Object</td><td>-</td><td>{}</td></tr><tr><td>barStyle</td><td>滚动条thumb样式</td><td>Object</td><td>-</td><td>{}</td></tr><tr><td>barWrapStyle</td><td>滚动条bar样式</td><td>Object</td><td>-</td><td>{}</td></tr><tr><td>noresize</td><td>如果 container 尺寸不会发生变化，最好设置它可以优化性能</td><td>boolean</td><td>true</td><td>false</td></tr></tbody></table>", 5);

function scrollbarvue_type_template_id_930d87fc_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_b_anchor_link = Object(vue_esm_browser["D" /* resolveComponent */])("b-anchor-link");

  var _component_b_anchor = Object(vue_esm_browser["D" /* resolveComponent */])("b-anchor");

  var _component_element_demo0 = Object(vue_esm_browser["D" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["D" /* resolveComponent */])("demo-block");

  return Object(vue_esm_browser["u" /* openBlock */])(), Object(vue_esm_browser["e" /* createBlock */])("section", scrollbarvue_type_template_id_930d87fc_hoisted_1, [_hoisted_2, Object(vue_esm_browser["i" /* createVNode */])("div", _hoisted_3, [Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor, {
    "scroll-offset": 100
  }, {
    default: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#yong-fa",
        title: "用法"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#shi-yong-tie-shi",
        title: "使用贴士"
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
  }), _hoisted_8]);
}
// CONCATENATED MODULE: ./examples/docs/scrollbar.md?vue&type=template&id=930d87fc

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./build/md-loader!./examples/docs/scrollbar.md?vue&type=script&lang=ts
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


/* harmony default export */ var scrollbarvue_type_script_lang_ts = ({
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
          "height": "400px"
        }
      };

      function render(_ctx, _cache) {
        var _component_b_scrollbar = _resolveComponent("b-scrollbar");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode(_component_b_scrollbar, {
          style: {
            "height": "100%"
          },
          ref: "componentScrollBar"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(), _createBlock(_Fragment, null, _renderList(40, function (i) {
              return _createVNode("p", {
                key: i
              }, "我是填充内容....");
            }), 64))];
          }),
          _: 1
        }, 512)])]);
      }

      var democomponentExport = {};
      return _extends({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./examples/docs/scrollbar.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./examples/docs/scrollbar.md



scrollbarvue_type_script_lang_ts.render = scrollbarvue_type_template_id_930d87fc_render

/* harmony default export */ var scrollbar = __webpack_exports__["default"] = (scrollbarvue_type_script_lang_ts);

/***/ })

}]);