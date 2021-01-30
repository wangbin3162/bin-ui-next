(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./build/md-loader!./examples/docs/anchor.md?vue&type=template&id=2397c6b2

var anchorvue_type_template_id_2397c6b2_hoisted_1 = {
  class: "content element-doc"
};

var anchorvue_type_template_id_2397c6b2_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h2", {
  id: "anchor-mao-dian"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#anchor-mao-dian"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" Anchor 锚点")], -1);

var anchorvue_type_template_id_2397c6b2_hoisted_3 = {
  class: "global-anchor"
};

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h3", {
  id: "ji-chu-yong-fa"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-chu-yong-fa"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" 基础用法")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])("锚点主要应用于滚动导航，默认是window滚动，也可以设置滚动区域的 target，并且可以设置"), /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", null, "b-affix"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])("来固定")], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", {
  class: "html"
}, "\n<template>\n  <div style=\"overflow: hidden;border:1px solid #eee;display: flex;justify-content: flex-end;\">\n    <div style=\"width: 200px;\">\n      <b-affix :offset=\"100\">\n        <b-anchor show-ink style=\"margin-left:20px;\" :scroll-offset=\"100\">\n          <b-anchor-link href=\"#ji-chu-yong-fa\" title=\"基础用法\"></b-anchor-link>\n          <b-anchor-link href=\"#zi-ding-yi-tu-biao\" title=\"自定义图标\"></b-anchor-link>\n          <b-anchor-link href=\"#zi-ding-yi-yan-se\" title=\"自定义颜色\"></b-anchor-link>\n          <b-anchor-link href=\"#zhi-ding-gun-dong-rong-qi\" title=\"指定滚动容器\"></b-anchor-link>\n          <b-anchor-link href=\"#props\" title=\"Props\"></b-anchor-link>\n          <b-anchor-link href=\"#events\" title=\"Events\"></b-anchor-link>\n          <b-anchor-link href=\"#anchorlink-props\" title=\"AnchorLink Props\"></b-anchor-link>\n        </b-anchor>\n      </b-affix>\n    </div>\n  </div>\n</template>\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h3", {
  id: "zi-ding-yi-tu-biao"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#zi-ding-yi-tu-biao"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" 自定义图标")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])("可以通过设置"), /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", null, "icon"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])("来设置小圆点为自定义图标，推荐使用实心图标以达到最好的显示效果")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", {
  class: "html"
}, "\n<template>\n  <div style=\"overflow: hidden;border:1px solid #eee;\" flex=\"box:mean\">\n    <div style=\"padding: 20px;background-color: #fff;border-right:1px solid #eee;\">\n      <b-anchor icon=\"star-fill\" :scroll-offset=\"100\">\n        <b-anchor-link href=\"#ji-chu-yong-fa\" title=\"基础用法\"></b-anchor-link>\n        <b-anchor-link href=\"#zi-ding-yi-tu-biao\" title=\"自定义图标\"></b-anchor-link>\n        <b-anchor-link href=\"#zi-ding-yi-yan-se\" title=\"自定义颜色\"></b-anchor-link>\n        <b-anchor-link href=\"#zhi-ding-gun-dong-rong-qi\" title=\"指定滚动容器\"></b-anchor-link>\n        <b-anchor-link href=\"#props\" title=\"Props\"></b-anchor-link>\n        <b-anchor-link href=\"#events\" title=\"Events\"></b-anchor-link>\n        <b-anchor-link href=\"#anchorlink-props\" title=\"AnchorLink Props\"></b-anchor-link>\n      </b-anchor>\n    </div>\n    <div style=\"padding: 20px;background-color: #fff;\">\n      <b-anchor icon=\"tag-fill\" :icon-size=\"20\" :scroll-offset=\"100\">\n        <b-anchor-link href=\"#ji-chu-yong-fa\" title=\"基础用法\"></b-anchor-link>\n        <b-anchor-link href=\"#zi-ding-yi-tu-biao\" title=\"自定义图标\"></b-anchor-link>\n        <b-anchor-link href=\"#zi-ding-yi-yan-se\" title=\"自定义颜色\"></b-anchor-link>\n        <b-anchor-link href=\"#zhi-ding-gun-dong-rong-qi\" title=\"指定滚动容器\"></b-anchor-link>\n        <b-anchor-link href=\"#props\" title=\"Props\"></b-anchor-link>\n        <b-anchor-link href=\"#events\" title=\"Events\"></b-anchor-link>\n        <b-anchor-link href=\"#anchorlink-props\" title=\"AnchorLink Props\"></b-anchor-link>\n      </b-anchor>\n    </div>\n  </div>\n</template>\n")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h3", {
  id: "zi-ding-yi-yan-se"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#zi-ding-yi-yan-se"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" 自定义颜色")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])("可以通过设置"), /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", null, "activeColor"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])("来设置自定义图标的颜色")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", {
  class: "html"
}, "\n<template>\n  <div style=\"overflow: hidden;border:1px solid #eee;\" flex=\"box:mean\">\n    <div style=\"padding: 20px;background-color: #fff;border-right:1px solid #eee;\">\n      <b-anchor icon=\"fire-fill\" active-color=\"success\" :scroll-offset=\"100\">\n        <b-anchor-link href=\"#ji-chu-yong-fa\" title=\"基础用法\"></b-anchor-link>\n        <b-anchor-link href=\"#zi-ding-yi-tu-biao\" title=\"自定义图标\"></b-anchor-link>\n        <b-anchor-link href=\"#zi-ding-yi-yan-se\" title=\"自定义颜色\"></b-anchor-link>\n        <b-anchor-link href=\"#zhi-ding-gun-dong-rong-qi\" title=\"指定滚动容器\"></b-anchor-link>\n        <b-anchor-link href=\"#props\" title=\"Props\"></b-anchor-link>\n        <b-anchor-link href=\"#events\" title=\"Events\"></b-anchor-link>\n        <b-anchor-link href=\"#anchorlink-props\" title=\"AnchorLink Props\"></b-anchor-link>\n      </b-anchor>\n    </div>\n    <div style=\"padding: 20px;background-color: #fff;\">\n      <b-anchor active-color=\"#ff53a5\" show-ink :scroll-offset=\"100\">\n        <b-anchor-link href=\"#ji-chu-yong-fa\" title=\"基础用法\"></b-anchor-link>\n        <b-anchor-link href=\"#zi-ding-yi-tu-biao\" title=\"自定义图标\"></b-anchor-link>\n        <b-anchor-link href=\"#zi-ding-yi-yan-se\" title=\"自定义颜色\"></b-anchor-link>\n        <b-anchor-link href=\"#zhi-ding-gun-dong-rong-qi\" title=\"指定滚动容器\"></b-anchor-link>\n        <b-anchor-link href=\"#props\" title=\"Props\"></b-anchor-link>\n        <b-anchor-link href=\"#events\" title=\"Events\"></b-anchor-link>\n        <b-anchor-link href=\"#anchorlink-props\" title=\"AnchorLink Props\"></b-anchor-link>\n      </b-anchor>\n    </div>\n  </div>\n</template>\n")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h3", {
  id: "zhi-ding-gun-dong-rong-qi"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#zhi-ding-gun-dong-rong-qi"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" 指定滚动容器")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])("可以通过设置"), /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", null, "target"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])("来指定滚动区域的标识，设置的滚动容器需要设置定位")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", {
  class: "html"
}, "\n<template>\n  <div style=\"overflow: hidden;border:1px solid #eee;\" flex>\n    <div style=\"padding: 20px;width:30%;background-color: #fff;border-right:1px solid #eee;\">\n      <b-anchor target=\"#scrollWrap\" show-ink>\n        <b-anchor-link href=\"#id1\" title=\"标题1\"></b-anchor-link>\n        <b-anchor-link href=\"#id3\" title=\"标题3\"></b-anchor-link>\n        <b-anchor-link href=\"#id6\" title=\"标题6\"></b-anchor-link>\n        <b-anchor-link href=\"#id10\" title=\"标题10\"></b-anchor-link>\n      </b-anchor>\n    </div>\n    <div id=\"scrollWrap\"\n         style=\"position:relative;padding: 20px;width:70%;height:400px;overflow:auto;background-color: #fff;\">\n      <div v-for=\"i in 10\" :key=\"i\">\n        <h4 style=\"font-weight:500;border-bottom: 1px solid #eee;\" :id=\"`id${i}`\">标题{{i}}</h4>\n        <p v-for=\"k in 10\" :key=\"k\">{{ `我是第${k}行内容...` }}</p>\n      </div>\n    </div>\n  </div>\n</template>\n")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["g" /* createStaticVNode */])("<h3 id=\"props\"><a class=\"header-anchor\" href=\"#props\">¶</a> Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>icon</td><td>是否设置自定义图标</td><td>string</td><td>—</td><td>—</td></tr><tr><td>icon-size</td><td>自定义图标大小</td><td>Number</td><td>—</td><td>—</td></tr><tr><td>active-color</td><td>选中颜色</td><td>string</td><td>primary,info,success,warning,danger,自定义</td><td>—</td></tr><tr><td>offset-top</td><td>距离窗口顶部达到指定偏移量后触发</td><td>Number</td><td>—</td><td>0</td></tr><tr><td>bounds</td><td>锚点区域边界</td><td>Number</td><td>—</td><td>5</td></tr><tr><td>showInk</td><td>是否显示小圆点</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>scroll-offset</td><td>点击滚动的额外距离</td><td>Number</td><td>—</td><td>0</td></tr><tr><td>target</td><td>指定滚动容器的标识，滚动容器需要设置position定位用于计算滚动偏移</td><td>string</td><td>—</td><td>—</td></tr></tbody></table><h3 id=\"events\"><a class=\"header-anchor\" href=\"#events\">¶</a> Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>返回值</th></tr></thead><tbody><tr><td>select</td><td>点击锚点时触发，返回链接</td><td>href</td></tr></tbody></table><h3 id=\"anchorlink-props\"><a class=\"header-anchor\" href=\"#anchorlink-props\">¶</a> AnchorLink Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>href</td><td>锚点链接</td><td>String</td><td>—</td><td>—</td></tr><tr><td>title</td><td>文字内容</td><td>String</td><td>—</td><td>—</td></tr></tbody></table>", 6);

function anchorvue_type_template_id_2397c6b2_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_b_anchor_link = Object(vue_esm_browser["D" /* resolveComponent */])("b-anchor-link");

  var _component_b_anchor = Object(vue_esm_browser["D" /* resolveComponent */])("b-anchor");

  var _component_element_demo0 = Object(vue_esm_browser["D" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["D" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["D" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["D" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["D" /* resolveComponent */])("element-demo3");

  return Object(vue_esm_browser["u" /* openBlock */])(), Object(vue_esm_browser["e" /* createBlock */])("section", anchorvue_type_template_id_2397c6b2_hoisted_1, [anchorvue_type_template_id_2397c6b2_hoisted_2, Object(vue_esm_browser["i" /* createVNode */])("div", anchorvue_type_template_id_2397c6b2_hoisted_3, [Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor, {
    "scroll-offset": 100
  }, {
    default: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#ji-chu-yong-fa",
        title: "基础用法"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#zi-ding-yi-tu-biao",
        title: "自定义图标"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#zi-ding-yi-yan-se",
        title: "自定义颜色"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#zhi-ding-gun-dong-rong-qi",
        title: "指定滚动容器"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#props",
        title: "Props"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#events",
        title: "Events"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#anchorlink-props",
        title: "AnchorLink Props"
      })];
    }),
    _: 1
  })]), _hoisted_4, _hoisted_5, Object(vue_esm_browser["i" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["i" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    _: 1
  }), _hoisted_7, _hoisted_8, Object(vue_esm_browser["i" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["i" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [_hoisted_9];
    }),
    _: 1
  }), _hoisted_10, _hoisted_11, Object(vue_esm_browser["i" /* createVNode */])(_component_demo_block, null, {
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
// CONCATENATED MODULE: ./examples/docs/anchor.md?vue&type=template&id=2397c6b2

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./build/md-loader!./examples/docs/anchor.md?vue&type=script&lang=ts
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


/* harmony default export */ var anchorvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _createVNode = vue_esm_browser["i" /* createVNode */],
          _withCtx = vue_esm_browser["N" /* withCtx */],
          _openBlock = vue_esm_browser["u" /* openBlock */],
          _createBlock = vue_esm_browser["e" /* createBlock */];
      var _hoisted_1 = {
        style: {
          "overflow": "hidden",
          "border": "1px solid #eee",
          "display": "flex",
          "justify-content": "flex-end"
        }
      };
      var _hoisted_2 = {
        style: {
          "width": "200px"
        }
      };

      function render(_ctx, _cache) {
        var _component_b_anchor_link = _resolveComponent("b-anchor-link");

        var _component_b_anchor = _resolveComponent("b-anchor");

        var _component_b_affix = _resolveComponent("b-affix");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode("div", _hoisted_2, [_createVNode(_component_b_affix, {
          offset: 100
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_b_anchor, {
              "show-ink": "",
              style: {
                "margin-left": "20px"
              },
              "scroll-offset": 100
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_b_anchor_link, {
                  href: "#ji-chu-yong-fa",
                  title: "基础用法"
                }), _createVNode(_component_b_anchor_link, {
                  href: "#zi-ding-yi-tu-biao",
                  title: "自定义图标"
                }), _createVNode(_component_b_anchor_link, {
                  href: "#zi-ding-yi-yan-se",
                  title: "自定义颜色"
                }), _createVNode(_component_b_anchor_link, {
                  href: "#zhi-ding-gun-dong-rong-qi",
                  title: "指定滚动容器"
                }), _createVNode(_component_b_anchor_link, {
                  href: "#props",
                  title: "Props"
                }), _createVNode(_component_b_anchor_link, {
                  href: "#events",
                  title: "Events"
                }), _createVNode(_component_b_anchor_link, {
                  href: "#anchorlink-props",
                  title: "AnchorLink Props"
                })];
              }),
              _: 1
            })];
          }),
          _: 1
        })])])]);
      }

      var democomponentExport = {};
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
      var _hoisted_1 = {
        style: {
          "overflow": "hidden",
          "border": "1px solid #eee"
        },
        flex: "box:mean"
      };
      var _hoisted_2 = {
        style: {
          "padding": "20px",
          "background-color": "#fff",
          "border-right": "1px solid #eee"
        }
      };
      var _hoisted_3 = {
        style: {
          "padding": "20px",
          "background-color": "#fff"
        }
      };

      function render(_ctx, _cache) {
        var _component_b_anchor_link = _resolveComponent("b-anchor-link");

        var _component_b_anchor = _resolveComponent("b-anchor");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode("div", _hoisted_2, [_createVNode(_component_b_anchor, {
          icon: "star-fill",
          "scroll-offset": 100
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_b_anchor_link, {
              href: "#ji-chu-yong-fa",
              title: "基础用法"
            }), _createVNode(_component_b_anchor_link, {
              href: "#zi-ding-yi-tu-biao",
              title: "自定义图标"
            }), _createVNode(_component_b_anchor_link, {
              href: "#zi-ding-yi-yan-se",
              title: "自定义颜色"
            }), _createVNode(_component_b_anchor_link, {
              href: "#zhi-ding-gun-dong-rong-qi",
              title: "指定滚动容器"
            }), _createVNode(_component_b_anchor_link, {
              href: "#props",
              title: "Props"
            }), _createVNode(_component_b_anchor_link, {
              href: "#events",
              title: "Events"
            }), _createVNode(_component_b_anchor_link, {
              href: "#anchorlink-props",
              title: "AnchorLink Props"
            })];
          }),
          _: 1
        })]), _createVNode("div", _hoisted_3, [_createVNode(_component_b_anchor, {
          icon: "tag-fill",
          "icon-size": 20,
          "scroll-offset": 100
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_b_anchor_link, {
              href: "#ji-chu-yong-fa",
              title: "基础用法"
            }), _createVNode(_component_b_anchor_link, {
              href: "#zi-ding-yi-tu-biao",
              title: "自定义图标"
            }), _createVNode(_component_b_anchor_link, {
              href: "#zi-ding-yi-yan-se",
              title: "自定义颜色"
            }), _createVNode(_component_b_anchor_link, {
              href: "#zhi-ding-gun-dong-rong-qi",
              title: "指定滚动容器"
            }), _createVNode(_component_b_anchor_link, {
              href: "#props",
              title: "Props"
            }), _createVNode(_component_b_anchor_link, {
              href: "#events",
              title: "Events"
            }), _createVNode(_component_b_anchor_link, {
              href: "#anchorlink-props",
              title: "AnchorLink Props"
            })];
          }),
          _: 1
        })])])]);
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
      var _hoisted_1 = {
        style: {
          "overflow": "hidden",
          "border": "1px solid #eee"
        },
        flex: "box:mean"
      };
      var _hoisted_2 = {
        style: {
          "padding": "20px",
          "background-color": "#fff",
          "border-right": "1px solid #eee"
        }
      };
      var _hoisted_3 = {
        style: {
          "padding": "20px",
          "background-color": "#fff"
        }
      };

      function render(_ctx, _cache) {
        var _component_b_anchor_link = _resolveComponent("b-anchor-link");

        var _component_b_anchor = _resolveComponent("b-anchor");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode("div", _hoisted_2, [_createVNode(_component_b_anchor, {
          icon: "fire-fill",
          "active-color": "success",
          "scroll-offset": 100
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_b_anchor_link, {
              href: "#ji-chu-yong-fa",
              title: "基础用法"
            }), _createVNode(_component_b_anchor_link, {
              href: "#zi-ding-yi-tu-biao",
              title: "自定义图标"
            }), _createVNode(_component_b_anchor_link, {
              href: "#zi-ding-yi-yan-se",
              title: "自定义颜色"
            }), _createVNode(_component_b_anchor_link, {
              href: "#zhi-ding-gun-dong-rong-qi",
              title: "指定滚动容器"
            }), _createVNode(_component_b_anchor_link, {
              href: "#props",
              title: "Props"
            }), _createVNode(_component_b_anchor_link, {
              href: "#events",
              title: "Events"
            }), _createVNode(_component_b_anchor_link, {
              href: "#anchorlink-props",
              title: "AnchorLink Props"
            })];
          }),
          _: 1
        })]), _createVNode("div", _hoisted_3, [_createVNode(_component_b_anchor, {
          "active-color": "#ff53a5",
          "show-ink": "",
          "scroll-offset": 100
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_b_anchor_link, {
              href: "#ji-chu-yong-fa",
              title: "基础用法"
            }), _createVNode(_component_b_anchor_link, {
              href: "#zi-ding-yi-tu-biao",
              title: "自定义图标"
            }), _createVNode(_component_b_anchor_link, {
              href: "#zi-ding-yi-yan-se",
              title: "自定义颜色"
            }), _createVNode(_component_b_anchor_link, {
              href: "#zhi-ding-gun-dong-rong-qi",
              title: "指定滚动容器"
            }), _createVNode(_component_b_anchor_link, {
              href: "#props",
              title: "Props"
            }), _createVNode(_component_b_anchor_link, {
              href: "#events",
              title: "Events"
            }), _createVNode(_component_b_anchor_link, {
              href: "#anchorlink-props",
              title: "AnchorLink Props"
            })];
          }),
          _: 1
        })])])]);
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
          _renderList = vue_esm_browser["B" /* renderList */],
          _Fragment = vue_esm_browser["a" /* Fragment */],
          _openBlock = vue_esm_browser["u" /* openBlock */],
          _createBlock = vue_esm_browser["e" /* createBlock */],
          _toDisplayString = vue_esm_browser["H" /* toDisplayString */];
      var _hoisted_1 = {
        style: {
          "overflow": "hidden",
          "border": "1px solid #eee"
        },
        flex: ""
      };
      var _hoisted_2 = {
        style: {
          "padding": "20px",
          "width": "30%",
          "background-color": "#fff",
          "border-right": "1px solid #eee"
        }
      };
      var _hoisted_3 = {
        id: "scrollWrap",
        style: {
          "position": "relative",
          "padding": "20px",
          "width": "70%",
          "height": "400px",
          "overflow": "auto",
          "background-color": "#fff"
        }
      };

      function render(_ctx, _cache) {
        var _component_b_anchor_link = _resolveComponent("b-anchor-link");

        var _component_b_anchor = _resolveComponent("b-anchor");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode("div", _hoisted_2, [_createVNode(_component_b_anchor, {
          target: "#scrollWrap",
          "show-ink": ""
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_b_anchor_link, {
              href: "#id1",
              title: "标题1"
            }), _createVNode(_component_b_anchor_link, {
              href: "#id3",
              title: "标题3"
            }), _createVNode(_component_b_anchor_link, {
              href: "#id6",
              title: "标题6"
            }), _createVNode(_component_b_anchor_link, {
              href: "#id10",
              title: "标题10"
            })];
          }),
          _: 1
        })]), _createVNode("div", _hoisted_3, [(_openBlock(), _createBlock(_Fragment, null, _renderList(10, function (i) {
          return _createVNode("div", {
            key: i
          }, [_createVNode("h4", {
            style: {
              "font-weight": "500",
              "border-bottom": "1px solid #eee"
            },
            id: "id" + i
          }, "标题" + _toDisplayString(i), 9, ["id"]), (_openBlock(), _createBlock(_Fragment, null, _renderList(10, function (k) {
            return _createVNode("p", {
              key: k
            }, _toDisplayString("\u6211\u662F\u7B2C" + k + "\u884C\u5185\u5BB9..."), 1);
          }), 64))]);
        }), 64))])])]);
      }

      var democomponentExport = {};
      return _extends({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./examples/docs/anchor.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./examples/docs/anchor.md



anchorvue_type_script_lang_ts.render = anchorvue_type_template_id_2397c6b2_render

/* harmony default export */ var docs_anchor = __webpack_exports__["default"] = (anchorvue_type_script_lang_ts);

/***/ })

}]);