(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[60],{

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./build/md-loader!./examples/docs/card.md?vue&type=template&id=6209aaef

var cardvue_type_template_id_6209aaef_hoisted_1 = {
  class: "content element-doc"
};

var cardvue_type_template_id_6209aaef_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h2", {
  id: "card-qia-pian"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#card-qia-pian"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" Card 卡片")], -1);

var cardvue_type_template_id_6209aaef_hoisted_3 = {
  class: "global-anchor"
};

var cardvue_type_template_id_6209aaef_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("p", null, "按照一个区块来展示", -1);

var cardvue_type_template_id_6209aaef_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h3", {
  id: "ji-chu-yong-fa"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-chu-yong-fa"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" 基础用法")], -1);

var cardvue_type_template_id_6209aaef_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])("头部可以 开启高亮提示，如不需要头部则不用插入header 可以开启"), /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", null, "head-tip"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])("来高亮header的前头")], -1);

var cardvue_type_template_id_6209aaef_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <b-card class=\"box-card\" width=\"480px\" head-tip>\n      <template v-slot:header>\n          <div flex=\"main:justify cross:center\">\n            <span>卡片名称</span>\n            <b-icon name=\"ios-qr-scanner\" size=\"20\" style=\"cursor: pointer;\"></b-icon>\n          </div>\n      </template>\n      <div v-for=\"o in 4\" :key=\"o\" class=\"text item\">\n        {{'这是内容区域 ' + o }}\n      </div>\n  </b-card>\n</template>\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h3", {
  id: "mo-ren-biao-ti-he-fen-ge-xian"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#mo-ren-biao-ti-he-fen-ge-xian"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" 默认标题和分割线")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("p", null, "直接传入header可以生成默认标题,配置divider=\"no\"可以消除默认标题和内容的分割线", -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <div style=\"background: #f8f8f8;padding: 20px;\">\n    <div flex=\"main:justify box:mean\">\n        <div style=\"padding: 0 10px;\">\n          <b-card class=\"box-card\" header=\"卡片标题\">\n              <div v-for=\"o in 4\" :key=\"o\" class=\"text item\">\n                {{'这是内容区域 ' + o }}\n              </div>\n          </b-card>\n        </div>\n        <div style=\"padding: 0 10px;\">\n          <b-card class=\"box-card\" header=\"卡片标题\" divider=\"no\">\n              <div v-for=\"o in 4\" :key=\"o\" class=\"text item\">\n                {{'这是内容区域 ' + o }}\n              </div>\n          </b-card>\n        </div>\n    </div>\n  </div>\n</template>\n")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h3", {
  id: "bian-kuang-he-yuan-jiao"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#bian-kuang-he-yuan-jiao"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" 边框和圆角")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("p", null, "无边框适合在有背景的情况下使用", -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", {
  class: "html"
}, "<template>\n<div style=\"background: #f8f8f8;padding: 20px;\">\n  <div flex=\"main:justify box:mean\">\n      <div style=\"padding: 0 10px; \">\n        <b-card class=\"box-card\" header=\"卡片标题\" :bordered=\"false\">\n           <div>bordered 设置是否含有边框</div>\n        </b-card>\n      </div>\n      <div style=\"padding: 0 10px;\">\n        <b-card class=\"box-card\" header=\"卡片标题\" radius=\"0\">\n          <div>radius 设置圆角弧度</div>\n        </b-card>\n      </div>\n  </div>\n</div>\n</template>\n")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h3", {
  id: "shadowyong-fa"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#shadowyong-fa"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" shadow用法")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", {
  class: "html"
}, "<template>\n<div flex=\"main:justify box:mean\">\n    <div style=\"padding: 0 10px; \">\n      <b-card class=\"box-card\" shadow=\"always\">\n          <div>总是显示</div>\n      </b-card>\n    </div>\n    <div style=\"padding: 0 10px;\">\n      <b-card class=\"box-card\">\n          <div>默认悬停显示</div>\n      </b-card>\n    </div>\n    <div style=\"padding: 0 10px;\">\n      <b-card class=\"box-card\" shadow=\"never\">\n          <div>不显示</div>\n      </b-card>\n    </div>\n</div>\n</template>\n")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["g" /* createStaticVNode */])("<h3 id=\"props\"><a class=\"header-anchor\" href=\"#props\">¶</a> Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>header</td><td>设置 header，也可以已插槽形式插入</td><td>string</td><td>—</td><td>—</td></tr><tr><td>body-style</td><td>设置 body 的样式</td><td>object</td><td>—</td><td>{ padding: &#39;20px&#39; }</td></tr><tr><td>shadow</td><td>阴影的显示</td><td>string</td><td>always / hover / never</td><td>hover</td></tr><tr><td>bordered</td><td>设置是否有边框</td><td>Boolean</td><td>false</td><td>true</td></tr><tr><td>width</td><td>设置卡片默认宽度</td><td>string</td><td>—</td><td>100%</td></tr><tr><td>radius</td><td>设置圆角值</td><td>string</td><td>0 / 百分比 / 像素</td><td>4px</td></tr><tr><td>divider</td><td>header和body之间的分割线</td><td>string</td><td>no / has</td><td>has</td></tr><tr><td>head-tip</td><td>头部的高亮提示</td><td>Boolean</td><td>true / false</td><td>false</td></tr><tr><td>bg-color</td><td>整体的背景色</td><td>string</td><td>—</td><td>#fff</td></tr></tbody></table>", 2);

function cardvue_type_template_id_6209aaef_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_b_anchor_link = Object(vue_esm_browser["D" /* resolveComponent */])("b-anchor-link");

  var _component_b_anchor = Object(vue_esm_browser["D" /* resolveComponent */])("b-anchor");

  var _component_element_demo0 = Object(vue_esm_browser["D" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["D" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["D" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["D" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["D" /* resolveComponent */])("element-demo3");

  return Object(vue_esm_browser["u" /* openBlock */])(), Object(vue_esm_browser["e" /* createBlock */])("section", cardvue_type_template_id_6209aaef_hoisted_1, [cardvue_type_template_id_6209aaef_hoisted_2, Object(vue_esm_browser["i" /* createVNode */])("div", cardvue_type_template_id_6209aaef_hoisted_3, [Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor, {
    "scroll-offset": 100
  }, {
    default: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#ji-chu-yong-fa",
        title: "基础用法"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#mo-ren-biao-ti-he-fen-ge-xian",
        title: "默认标题和分割线"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#bian-kuang-he-yuan-jiao",
        title: "边框和圆角"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#shadowyong-fa",
        title: "shadow用法"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#props",
        title: "Props"
      })];
    }),
    _: 1
  })]), cardvue_type_template_id_6209aaef_hoisted_4, cardvue_type_template_id_6209aaef_hoisted_5, cardvue_type_template_id_6209aaef_hoisted_6, Object(vue_esm_browser["i" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["i" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [cardvue_type_template_id_6209aaef_hoisted_7];
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
  }), _hoisted_14, Object(vue_esm_browser["i" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["i" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [_hoisted_15];
    }),
    _: 1
  }), _hoisted_16]);
}
// CONCATENATED MODULE: ./examples/docs/card.md?vue&type=template&id=6209aaef

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./build/md-loader!./examples/docs/card.md?vue&type=script&lang=ts
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


/* harmony default export */ var cardvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createVNode = vue_esm_browser["i" /* createVNode */],
          _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _renderList = vue_esm_browser["B" /* renderList */],
          _Fragment = vue_esm_browser["a" /* Fragment */],
          _openBlock = vue_esm_browser["u" /* openBlock */],
          _createBlock = vue_esm_browser["e" /* createBlock */],
          _toDisplayString = vue_esm_browser["H" /* toDisplayString */],
          _withCtx = vue_esm_browser["N" /* withCtx */];
      var _hoisted_1 = {
        flex: "main:justify cross:center"
      };

      var _hoisted_2 = /*#__PURE__*/_createVNode("span", null, "卡片名称", -1);

      function render(_ctx, _cache) {
        var _component_b_icon = _resolveComponent("b-icon");

        var _component_b_card = _resolveComponent("b-card");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_b_card, {
          class: "box-card",
          width: "480px",
          "head-tip": ""
        }, {
          header: _withCtx(function () {
            return [_createVNode("div", _hoisted_1, [_hoisted_2, _createVNode(_component_b_icon, {
              name: "ios-qr-scanner",
              size: "20",
              style: {
                "cursor": "pointer"
              }
            })])];
          }),
          default: _withCtx(function () {
            return [(_openBlock(), _createBlock(_Fragment, null, _renderList(4, function (o) {
              return _createVNode("div", {
                key: o,
                class: "text item"
              }, _toDisplayString('这是内容区域 ' + o), 1);
            }), 64))];
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
      var _renderList = vue_esm_browser["B" /* renderList */],
          _Fragment = vue_esm_browser["a" /* Fragment */],
          _openBlock = vue_esm_browser["u" /* openBlock */],
          _createBlock = vue_esm_browser["e" /* createBlock */],
          _toDisplayString = vue_esm_browser["H" /* toDisplayString */],
          _createVNode = vue_esm_browser["i" /* createVNode */],
          _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _withCtx = vue_esm_browser["N" /* withCtx */];
      var _hoisted_1 = {
        style: {
          "background": "#f8f8f8",
          "padding": "20px"
        }
      };
      var _hoisted_2 = {
        flex: "main:justify box:mean"
      };
      var _hoisted_3 = {
        style: {
          "padding": "0 10px"
        }
      };
      var _hoisted_4 = {
        style: {
          "padding": "0 10px"
        }
      };

      function render(_ctx, _cache) {
        var _component_b_card = _resolveComponent("b-card");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode("div", _hoisted_2, [_createVNode("div", _hoisted_3, [_createVNode(_component_b_card, {
          class: "box-card",
          header: "卡片标题"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(), _createBlock(_Fragment, null, _renderList(4, function (o) {
              return _createVNode("div", {
                key: o,
                class: "text item"
              }, _toDisplayString('这是内容区域 ' + o), 1);
            }), 64))];
          }),
          _: 1
        })]), _createVNode("div", _hoisted_4, [_createVNode(_component_b_card, {
          class: "box-card",
          header: "卡片标题",
          divider: "no"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(), _createBlock(_Fragment, null, _renderList(4, function (o) {
              return _createVNode("div", {
                key: o,
                class: "text item"
              }, _toDisplayString('这是内容区域 ' + o), 1);
            }), 64))];
          }),
          _: 1
        })])])])]);
      }

      var democomponentExport = {};
      return _extends({
        render: render
      }, democomponentExport);
    }(),
    "element-demo2": function () {
      var _createVNode = vue_esm_browser["i" /* createVNode */],
          _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _withCtx = vue_esm_browser["N" /* withCtx */],
          _openBlock = vue_esm_browser["u" /* openBlock */],
          _createBlock = vue_esm_browser["e" /* createBlock */];
      var _hoisted_1 = {
        style: {
          "background": "#f8f8f8",
          "padding": "20px"
        }
      };
      var _hoisted_2 = {
        flex: "main:justify box:mean"
      };
      var _hoisted_3 = {
        style: {
          "padding": "0 10px"
        }
      };

      var _hoisted_4 = /*#__PURE__*/_createVNode("div", null, "bordered 设置是否含有边框", -1);

      var _hoisted_5 = {
        style: {
          "padding": "0 10px"
        }
      };

      var _hoisted_6 = /*#__PURE__*/_createVNode("div", null, "radius 设置圆角弧度", -1);

      function render(_ctx, _cache) {
        var _component_b_card = _resolveComponent("b-card");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode("div", _hoisted_2, [_createVNode("div", _hoisted_3, [_createVNode(_component_b_card, {
          class: "box-card",
          header: "卡片标题",
          bordered: false
        }, {
          default: _withCtx(function () {
            return [_hoisted_4];
          }),
          _: 1
        })]), _createVNode("div", _hoisted_5, [_createVNode(_component_b_card, {
          class: "box-card",
          header: "卡片标题",
          radius: "0"
        }, {
          default: _withCtx(function () {
            return [_hoisted_6];
          }),
          _: 1
        })])])])]);
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
      var _hoisted_1 = {
        flex: "main:justify box:mean"
      };
      var _hoisted_2 = {
        style: {
          "padding": "0 10px"
        }
      };

      var _hoisted_3 = /*#__PURE__*/_createVNode("div", null, "总是显示", -1);

      var _hoisted_4 = {
        style: {
          "padding": "0 10px"
        }
      };

      var _hoisted_5 = /*#__PURE__*/_createVNode("div", null, "默认悬停显示", -1);

      var _hoisted_6 = {
        style: {
          "padding": "0 10px"
        }
      };

      var _hoisted_7 = /*#__PURE__*/_createVNode("div", null, "不显示", -1);

      function render(_ctx, _cache) {
        var _component_b_card = _resolveComponent("b-card");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode("div", _hoisted_2, [_createVNode(_component_b_card, {
          class: "box-card",
          shadow: "always"
        }, {
          default: _withCtx(function () {
            return [_hoisted_3];
          }),
          _: 1
        })]), _createVNode("div", _hoisted_4, [_createVNode(_component_b_card, {
          class: "box-card"
        }, {
          default: _withCtx(function () {
            return [_hoisted_5];
          }),
          _: 1
        })]), _createVNode("div", _hoisted_6, [_createVNode(_component_b_card, {
          class: "box-card",
          shadow: "never"
        }, {
          default: _withCtx(function () {
            return [_hoisted_7];
          }),
          _: 1
        })])])]);
      }

      var democomponentExport = {};
      return _extends({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./examples/docs/card.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./examples/docs/card.md



cardvue_type_script_lang_ts.render = cardvue_type_template_id_6209aaef_render

/* harmony default export */ var card = __webpack_exports__["default"] = (cardvue_type_script_lang_ts);

/***/ })

}]);