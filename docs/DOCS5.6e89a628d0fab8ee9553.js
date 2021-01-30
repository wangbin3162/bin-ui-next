(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[45],{

/***/ 546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./build/md-loader!./examples/docs/base.md?vue&type=template&id=609fd759

var basevue_type_template_id_609fd759_hoisted_1 = {
  class: "content element-doc"
};

var basevue_type_template_id_609fd759_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("h2", {
  id: "ji-chu"
}, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-chu"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["h" /* createTextVNode */])(" 基础")], -1);

var _hoisted_3 = {
  class: "global-anchor"
};

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["g" /* createStaticVNode */])("<h3 id=\"ji-chu-api\"><a class=\"header-anchor\" href=\"#ji-chu-api\">¶</a> 基础api</h3><p>暴露了以下几个api用于实现常用功能，log print在专门模块中说明</p><pre><code class=\"hljs language-javascript\"><span class=\"hljs-built_in\">this</span>.$global = { <span class=\"hljs-attr\">zIndex</span>: <span class=\"hljs-number\">2000</span> }\n<span class=\"hljs-built_in\">this</span>.$title = util.title\n<span class=\"hljs-built_in\">this</span>.$open = util.open\n<span class=\"hljs-built_in\">this</span>.$copy = util.copy\n<span class=\"hljs-built_in\">this</span>.$parseTime = util.parseTime\n<span class=\"hljs-built_in\">this</span>.$rangeTime = util.rangeTime\n<span class=\"hljs-built_in\">this</span>.$typeOf = util.typeOf\n<span class=\"hljs-built_in\">this</span>.$deepCopy = util.deepCopy\n<span class=\"hljs-built_in\">this</span>.$getRandomInt = util.getRandomInt\n<span class=\"hljs-built_in\">this</span>.$debounce = util.debounce\n<span class=\"hljs-built_in\">this</span>.$log = log\n</code></pre><p>util方法函数</p><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>$title</td><td>更新标题</td><td>title</td></tr><tr><td>$open</td><td>打开新页面</td><td>url,target</td></tr><tr><td>$copy</td><td>复制内容至剪切板 ,返回一个promise用于判断是否复制成功</td><td>content</td></tr><tr><td>$parseTime</td><td>时间格式化</td><td>time,cFormat(&#39;{y}-{m}-{d} {h}:{i}:{s}&#39;),weekArray：长度为7的显示数组</td></tr><tr><td>$rangeTime</td><td>获取日期区间，如如近一周，近三个月，后一个月等</td><td>days, mode=&#39;{y}-{m}-{d}&#39; days为负往前追加，为正时表示之后的天数</td></tr><tr><td>$debounce</td><td>防抖函数</td><td>func, wait = 50, immediate = true</td></tr><tr><td>$getRandomInt</td><td>在某个区间随机一个整数</td><td>min, max</td></tr><tr><td>$typeOf</td><td>精准判断类型</td><td>any</td></tr><tr><td>$deepCopy</td><td>深拷贝函数</td><td>obj/arr</td></tr></tbody></table><h3 id=\"wu-shu-ju-zu-jian\"><a class=\"header-anchor\" href=\"#wu-shu-ju-zu-jian\">¶</a> 无数据组件</h3><p>目前表格和tree型结构使用，也可以自己使用</p>", 7);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", {
  class: "html"
}, "\n<template>\n  <div style=\"width: 224px;\">\n    <b-empty>当前无数据</b-empty>\n  </div>\n</template>\n")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["g" /* createStaticVNode */])("<h3 id=\"flex.cssshi-yong\"><a class=\"header-anchor\" href=\"#flex.cssshi-yong\">¶</a> flex.css使用</h3><p>本项目已集成normalize.css初始化样式，<a href=\"https://github.com/lzxb/flex.css\">flex.css</a>基本样式和自定义基础样式库common.css</p><p><code>flex.css</code> 扩展了换行属性<code>wrap</code></p><pre><code class=\"hljs language-css\"><span class=\"hljs-selector-attr\">[flex~=<span class=\"hljs-string\">&quot;wrap:wrap&quot;</span>]</span> {\n  <span class=\"hljs-attribute\">-webkit-flex-wrap</span>: wrap;\n  <span class=\"hljs-attribute\">-ms-flex-wrap</span>: wrap;\n  <span class=\"hljs-attribute\">flex-wrap</span>: wrap;\n}\n</code></pre>", 4);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createVNode */])("code", {
  class: "html"
}, "\n<template>\n  <!--\n    将dist目录下的css文件引入到你的页面中，根据你的需要引入\n    flex.css 使用flex属性匹配\n    data-flex.css 使用data-flex属性匹配（React使用）\n    如果使用了webpack打包，npm安装后，并且配置了ES6编译器的话，\n    flex 属性匹配可以直接使用：\n      import 'flex.css';\n    data-flex 属性匹配可以直接使用(react使用)\n      import 'flex.css/dist/data-flex.css';\n   -->\n  <!-- flex属性匹配，简单的子元素居中例子： -->\n  <div flex=\"main:center cross:center\" style=\"height: 80px; border:1px solid #1089ff\">\n    <div style=\"background: #fff;padding: 15px;\">看看我是不是居中的</div>\n  </div>\n</template>\n")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["g" /* createStaticVNode */])("<h3 id=\"flexshu-xing-da-quan\"><a class=\"header-anchor\" href=\"#flexshu-xing-da-quan\">¶</a> flex属性大全</h3><pre><code class=\"hljs\">dir：主轴方向\n    top：从上到下\n    right：从右到左\n    bottom：从下到上\n    left：从左到右（默认）\n</code></pre><pre><code class=\"hljs\">main：主轴对齐方式\n    right：从右到左\n    left：从左到右（默认）\n    justify：两端对齐\n    center：居中对齐\n</code></pre><pre><code class=\"hljs\">cross：交叉轴对齐方式\n    top：从上到下（默认）\n    bottom：从上到下\n    baseline：基线对齐\n    center：居中对齐\n    stretch：高度并排铺满\n</code></pre><pre><code class=\"hljs\">box：子元素设置\n    mean：子元素平分空间\n    first：第一个子元素不要多余空间，其他子元素平分多余空间\n    last：最后一个子元素不要多余空间，其他子元素平分多余空间\n    justify：两端第一个元素不要多余空间，其他子元素平分多余空间\n</code></pre><h3 id=\"flex-boxshu-xing-shuo-ming\"><a class=\"header-anchor\" href=\"#flex-boxshu-xing-shuo-ming\">¶</a> flex-box属性说明</h3><pre><code class=\"hljs\">取值范围(0-10)，单独设置子元素多余空间的如何分配，设置为0，则子元素不占用多余的多余空间\n多余空间分配 = 当前flex-box值/子元素的flex-box值相加之和\n</code></pre><h3 id=\"common.css\"><a class=\"header-anchor\" href=\"#common.css\">¶</a> common.css</h3><p>基础的css样式主要有内外边距，文字大小，链接等。具体如下</p><table><thead><tr><th>外边距</th><th>说明</th><th>内边距</th><th>说明</th></tr></thead><tbody><tr><td>m0</td><td>外边距0</td><td>p0</td><td>内边距0</td></tr><tr><td>m5</td><td>外边距5</td><td>p5</td><td>内边距5</td></tr><tr><td>m10</td><td>外边距10</td><td>p10</td><td>内边距10</td></tr><tr><td>m15</td><td>外边距15</td><td>p15</td><td>内边距15</td></tr><tr><td>m20</td><td>外边距20</td><td>p20</td><td>内边距20</td></tr><tr><td>mt-5</td><td>上外边距5</td><td>pt-5</td><td>上内边距5</td></tr><tr><td>mt-10</td><td>上外边距10</td><td>pt-10</td><td>上内边距10</td></tr><tr><td>mt-15</td><td>上外边距15</td><td>pt-15</td><td>上内边距15</td></tr><tr><td>mt-20</td><td>上外边距20</td><td>pt-20</td><td>上内边距20</td></tr><tr><td>mr-5</td><td>右外边距5</td><td>pr-5</td><td>右内边距5</td></tr><tr><td>mr-10</td><td>右外边距10</td><td>pr-10</td><td>右内边距10</td></tr><tr><td>mr-15</td><td>右外边距15</td><td>pr-15</td><td>右内边距15</td></tr><tr><td>mr-20</td><td>右外边距20</td><td>pr-20</td><td>右内边距20</td></tr><tr><td>mb-5</td><td>下外边距5</td><td>pb-5</td><td>下内边距5</td></tr><tr><td>mb-10</td><td>下外边距10</td><td>pb-10</td><td>下内边距10</td></tr><tr><td>mb-15</td><td>下外边距15</td><td>pb-15</td><td>下内边距15</td></tr><tr><td>mb-20</td><td>下外边距20</td><td>pb-20</td><td>下内边距20</td></tr><tr><td>ml-5</td><td>左外边距5</td><td>pl-5</td><td>左内边距5</td></tr><tr><td>ml-10</td><td>左外边距10</td><td>pl-10</td><td>左内边距10</td></tr><tr><td>ml-15</td><td>左外边距15</td><td>pl-15</td><td>左内边距15</td></tr><tr><td>ml-20</td><td>左外边距20</td><td>pl-20</td><td>左内边距20</td></tr></tbody></table><p>还有文字等其他常用样式</p><table><thead><tr><th>类名</th><th>说明</th></tr></thead><tbody><tr><td>f-s-12</td><td>字体大小12</td></tr><tr><td>f-s-14</td><td>字体大小14</td></tr><tr><td>f-s-16</td><td>字体大小16</td></tr><tr><td>f-s-18</td><td>字体大小18</td></tr><tr><td>f-s-20</td><td>字体大小20</td></tr><tr><td>f-s-22</td><td>字体大小22</td></tr><tr><td>f-s-20</td><td>字体大小20</td></tr><tr><td>f-color-blue</td><td>文字颜色#1089ff;</td></tr><tr><td>f-color-red</td><td>文字颜色#ff4d4f;</td></tr><tr><td>f-color-333</td><td>文字颜色#333;</td></tr><tr><td>f-color-666</td><td>文字颜色#666;</td></tr><tr><td>f-color-999</td><td>文字颜色#999;</td></tr><tr><td>t-center</td><td>文字居中</td></tr><tr><td>t-right</td><td>文字居右</td></tr><tr><td>t-right</td><td>文字居右</td></tr><tr><td>t-ellipsis</td><td>文字超出...</td></tr><tr><td>link</td><td>蓝色链接样式</td></tr><tr><td>link-red</td><td>红色链接样式</td></tr></tbody></table>", 12);

function basevue_type_template_id_609fd759_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_b_anchor_link = Object(vue_esm_browser["D" /* resolveComponent */])("b-anchor-link");

  var _component_b_anchor = Object(vue_esm_browser["D" /* resolveComponent */])("b-anchor");

  var _component_element_demo0 = Object(vue_esm_browser["D" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["D" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["D" /* resolveComponent */])("element-demo1");

  return Object(vue_esm_browser["u" /* openBlock */])(), Object(vue_esm_browser["e" /* createBlock */])("section", basevue_type_template_id_609fd759_hoisted_1, [basevue_type_template_id_609fd759_hoisted_2, Object(vue_esm_browser["i" /* createVNode */])("div", _hoisted_3, [Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor, {
    "scroll-offset": 100
  }, {
    default: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#ji-chu-api",
        title: "基础api"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#wu-shu-ju-zu-jian",
        title: "无数据组件"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#flex.cssshi-yong",
        title: "flex.css使用"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#flexshu-xing-da-quan",
        title: "flex属性大全"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#flex-boxshu-xing-shuo-ming",
        title: "flex-box属性说明"
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_b_anchor_link, {
        href: "#common.css",
        title: "common.css"
      })];
    }),
    _: 1
  })]), _hoisted_4, Object(vue_esm_browser["i" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["i" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [_hoisted_11];
    }),
    _: 1
  }), _hoisted_12, Object(vue_esm_browser["i" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["i" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [_hoisted_16];
    }),
    _: 1
  }), _hoisted_17]);
}
// CONCATENATED MODULE: ./examples/docs/base.md?vue&type=template&id=609fd759

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./build/md-loader!./examples/docs/base.md?vue&type=script&lang=ts
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


/* harmony default export */ var basevue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createTextVNode = vue_esm_browser["h" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _withCtx = vue_esm_browser["N" /* withCtx */],
          _createVNode = vue_esm_browser["i" /* createVNode */],
          _openBlock = vue_esm_browser["u" /* openBlock */],
          _createBlock = vue_esm_browser["e" /* createBlock */];
      var _hoisted_1 = {
        style: {
          "width": "224px"
        }
      };

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("当前无数据");

      function render(_ctx, _cache) {
        var _component_b_empty = _resolveComponent("b-empty");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode(_component_b_empty, null, {
          default: _withCtx(function () {
            return [_hoisted_2];
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
      var _createVNode = vue_esm_browser["i" /* createVNode */],
          _openBlock = vue_esm_browser["u" /* openBlock */],
          _createBlock = vue_esm_browser["e" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("div", {
        flex: "main:center cross:center",
        style: {
          "height": "80px",
          "border": "1px solid #1089ff"
        }
      }, [/*#__PURE__*/_createVNode("div", {
        style: {
          "background": "#fff",
          "padding": "15px"
        }
      }, "看看我是不是居中的")], -1);

      function render(_ctx, _cache) {
        return _openBlock(), _createBlock("div", null, [_hoisted_1]);
      }

      var democomponentExport = {};
      return _extends({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./examples/docs/base.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./examples/docs/base.md



basevue_type_script_lang_ts.render = basevue_type_template_id_609fd759_render

/* harmony default export */ var base = __webpack_exports__["default"] = (basevue_type_script_lang_ts);

/***/ })

}]);