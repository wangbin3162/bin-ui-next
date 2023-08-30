"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkbin_ui_next"] = self["webpackChunkbin_ui_next"] || []).push([[3110],{

/***/ 1051:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  \"default\": function() { return /* binding */ circle; }\n});\n\n// EXTERNAL MODULE: ./node_modules/.pnpm/@vue+runtime-core@3.3.4/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js\nvar runtime_core_esm_bundler = __webpack_require__(6440);\n;// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.3.0_@babel+core@7.22.11_webpack@5.88.2/node_modules/babel-loader/lib/index.js!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.3.4_webpack@5.88.2/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.3.4_webpack@5.88.2/node_modules/vue-loader/dist/index.js??clonedRuleSet-2.use[0]!./build/md-loader/index.js!./examples/docs/circle.md?vue&type=template&id=e523a9b8\n\nconst _hoisted_1 = {\n  class: \"content element-doc\"\n};\nconst _hoisted_2 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)(\"h2\", {\n  id: \"circle-jin-du-huan\",\n  tabindex: \"-1\"\n}, \"Circle 进度环\", -1);\nconst _hoisted_3 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)(\"p\", null, \"显示环形图，可以显示任务百分比或者是统计某些数据的占比情况\", -1);\nconst _hoisted_4 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)(\"h3\", {\n  id: \"ji-chu-yong-fa\",\n  tabindex: \"-1\"\n}, \"基础用法\", -1);\nconst _hoisted_5 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)(\"p\", null, \"查看代码来查看配置信息\", -1);\nconst _hoisted_6 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)(\"pre\", null, [/*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)(\"code\", {\n  class: \"html\"\n}, \"\\n<template>\\n  <div flex=\\\"main:justify\\\" style=\\\"width:400px;\\\">\\n    <b-circle :percent=\\\"80\\\">\\n      <span class=\\\"demo-circle-inner\\\" style=\\\"font-size:24px\\\">80%</span>\\n    </b-circle>\\n    <b-circle :percent=\\\"100\\\" stroke-color=\\\"#5cb85c\\\">\\n      <b-icon name=\\\"check\\\" size=\\\"30\\\" style=\\\"color:#5cb85c\\\"></b-icon>\\n    </b-circle>\\n    <b-circle :percent=\\\"35\\\" stroke-color=\\\"#ff5500\\\">\\n           <span class=\\\"demo-circle-inner\\\">\\n               <b-icon name=\\\"close\\\" size=\\\"30\\\" style=\\\"color:#ff5500\\\"></b-icon>\\n           </span>\\n    </b-circle>\\n  </div>\\n</template>\\n\")], -1);\nconst _hoisted_7 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)(\"h3\", {\n  id: \"dong-tai-jin-du\",\n  tabindex: \"-1\"\n}, \"动态进度\", -1);\nconst _hoisted_8 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)(\"p\", null, \"可以配合外部操作进度\", -1);\nconst _hoisted_9 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)(\"pre\", null, [/*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)(\"code\", {\n  class: \"html\"\n}, \"\\n<template>\\n  <div flex=\\\"main:justify\\\" style=\\\"width:300px;\\\" class=\\\"demo-button\\\">\\n    <b-circle :percent=\\\"percent\\\" :stroke-color=\\\"color\\\">\\n      <b-icon name=\\\"check\\\" size=\\\"50\\\" style=\\\"color:#5cb85c\\\" v-if=\\\"percent === 100\\\"></b-icon>\\n      <span v-else style=\\\"font-size:24px\\\">{{ percent }}%</span>\\n    </b-circle>\\n    <b-button-group>\\n      <b-button icon=\\\"minus\\\" @click=\\\"minus\\\"></b-button>\\n      <b-button icon=\\\"plus\\\" @click=\\\"add\\\"></b-button>\\n    </b-button-group>\\n  </div>\\n</template>\\n<script>\\n  export default {\\n    data() {\\n      return {\\n        percent: 0\\n      }\\n    },\\n    computed: {\\n      color() {\\n        let color = '#2db7f5';\\n        if (this.percent === 100) {\\n          color = '#5cb85c';\\n        }\\n        return color;\\n      }\\n    },\\n    methods: {\\n      add() {\\n        if (this.percent >= 100) {\\n          return false;\\n        }\\n        this.percent += 10;\\n      },\\n      minus() {\\n        if (this.percent <= 0) {\\n          return false;\\n        }\\n        this.percent -= 10;\\n      }\\n    }\\n  }\\n</script>\\n\")], -1);\nconst _hoisted_10 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)(\"h3\", {\n  id: \"she-zhi-yang-shi\",\n  tabindex: \"-1\"\n}, \"设置样式\", -1);\nconst _hoisted_11 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)(\"p\", null, \"可以配置更多的自定义样式\", -1);\nconst _hoisted_12 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)(\"pre\", null, [/*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)(\"code\", {\n  class: \"html\"\n}, \"\\n<template>\\n  <b-circle\\n    :size=\\\"250\\\"\\n    :trail-width=\\\"4\\\"\\n    :stroke-width=\\\"5\\\"\\n    :percent=\\\"75\\\"\\n    stroke-linecap=\\\"square\\\"\\n    stroke-color=\\\"#43a3fb\\\">\\n    <div class=\\\"demo-Circle-custom\\\">\\n      <h1>42,001,776</h1>\\n      <p>消费人群规模</p>\\n      <span>\\n                总占人数\\n                <i>75%</i>\\n            </span>\\n    </div>\\n  </b-circle>\\n</template>\\n\")], -1);\nconst _hoisted_13 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)(\"h3\", {\n  id: \"yi-biao-pan-mo-shi\",\n  tabindex: \"-1\"\n}, \"仪表盘模式\", -1);\nconst _hoisted_14 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)(\"p\", null, [/*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(\"通过设置属性 \"), /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)(\"code\", null, \"dashboard\"), /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(\"，可以很方便地实现仪表盘样式。\")], -1);\nconst _hoisted_15 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)(\"pre\", null, [/*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)(\"code\", {\n  class: \"html\"\n}, \"\\n<template>\\n  <b-circle :percent=\\\"80\\\" dashboard>\\n    <span class=\\\"demo-circle-inner\\\" style=\\\"font-size:24px\\\">80%</span>\\n  </b-circle>\\n</template>\\n\")], -1);\nconst _hoisted_16 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createStaticVNode */.uE)(\"<h3 id=\\\"props\\\" tabindex=\\\"-1\\\">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>percent</td><td>百分比</td><td>Number</td><td>—</td><td>0</td></tr><tr><td>size</td><td>图表的宽度和高度，单位 px</td><td>Number</td><td>—</td><td>120</td></tr><tr><td>stroke-linecap</td><td>进度环顶端的形状</td><td>String</td><td>square（方）/round（圆）</td><td>round</td></tr><tr><td>stroke-width</td><td>进度环的线宽，单位 px</td><td>Number</td><td>—</td><td>6</td></tr><tr><td>stroke-color</td><td>进度环的颜色</td><td>String</td><td>—</td><td>#2db7f5</td></tr><tr><td>trail-width</td><td>进度环背景的线宽，单位 px</td><td>Number</td><td>—</td><td>5</td></tr><tr><td>trail-color</td><td>进度环背景的颜色</td><td>String</td><td>—</td><td>#eaeef2</td></tr><tr><td>dashboard</td><td>是否显示为仪表盘</td><td>Boolean</td><td>—</td><td>false</td></tr></tbody></table>\", 2);\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_element_demo0 = (0,runtime_core_esm_bundler/* resolveComponent */.up)(\"element-demo0\");\n  const _component_demo_block = (0,runtime_core_esm_bundler/* resolveComponent */.up)(\"demo-block\");\n  const _component_element_demo1 = (0,runtime_core_esm_bundler/* resolveComponent */.up)(\"element-demo1\");\n  const _component_element_demo2 = (0,runtime_core_esm_bundler/* resolveComponent */.up)(\"element-demo2\");\n  const _component_element_demo3 = (0,runtime_core_esm_bundler/* resolveComponent */.up)(\"element-demo3\");\n  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(\"section\", _hoisted_1, [_hoisted_2, _hoisted_3, _hoisted_4, _hoisted_5, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_demo_block, null, {\n    source: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_element_demo0)]),\n    highlight: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_6]),\n    _: 1\n  }), _hoisted_7, _hoisted_8, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_demo_block, null, {\n    source: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_element_demo1)]),\n    highlight: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_9]),\n    _: 1\n  }), _hoisted_10, _hoisted_11, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_demo_block, null, {\n    source: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_element_demo2)]),\n    highlight: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_12]),\n    _: 1\n  }), _hoisted_13, _hoisted_14, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_demo_block, null, {\n    source: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_element_demo3)]),\n    highlight: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_15]),\n    _: 1\n  }), _hoisted_16]);\n}\n;// CONCATENATED MODULE: ./examples/docs/circle.md?vue&type=template&id=e523a9b8\n\n// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.3.4/node_modules/vue/dist/vue.runtime.esm-bundler.js\nvar vue_runtime_esm_bundler = __webpack_require__(262);\n;// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.3.0_@babel+core@7.22.11_webpack@5.88.2/node_modules/babel-loader/lib/index.js!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.3.4_webpack@5.88.2/node_modules/vue-loader/dist/index.js??clonedRuleSet-2.use[0]!./build/md-loader/index.js!./examples/docs/circle.md?vue&type=script&lang=js\n\n/* harmony default export */ var circlevue_type_script_lang_js = ({\n  name: 'component-doc',\n  components: {\n    \"element-demo0\": function () {\n      const {\n        createElementVNode: _createElementVNode,\n        resolveComponent: _resolveComponent,\n        withCtx: _withCtx,\n        createVNode: _createVNode,\n        openBlock: _openBlock,\n        createElementBlock: _createElementBlock\n      } = vue_runtime_esm_bundler;\n      const _hoisted_1 = {\n        flex: \"main:justify\",\n        style: {\n          \"width\": \"400px\"\n        }\n      };\n      const _hoisted_2 = /*#__PURE__*/_createElementVNode(\"span\", {\n        class: \"demo-circle-inner\",\n        style: {\n          \"font-size\": \"24px\"\n        }\n      }, \"80%\", -1);\n      const _hoisted_3 = {\n        class: \"demo-circle-inner\"\n      };\n      function render(_ctx, _cache) {\n        const _component_b_circle = _resolveComponent(\"b-circle\");\n        const _component_b_icon = _resolveComponent(\"b-icon\");\n        return _openBlock(), _createElementBlock(\"div\", null, [_createElementVNode(\"div\", _hoisted_1, [_createVNode(_component_b_circle, {\n          percent: 80\n        }, {\n          default: _withCtx(() => [_hoisted_2]),\n          _: 1\n        }), _createVNode(_component_b_circle, {\n          percent: 100,\n          \"stroke-color\": \"#5cb85c\"\n        }, {\n          default: _withCtx(() => [_createVNode(_component_b_icon, {\n            name: \"check\",\n            size: \"30\",\n            style: {\n              \"color\": \"#5cb85c\"\n            }\n          })]),\n          _: 1\n        }), _createVNode(_component_b_circle, {\n          percent: 35,\n          \"stroke-color\": \"#ff5500\"\n        }, {\n          default: _withCtx(() => [_createElementVNode(\"span\", _hoisted_3, [_createVNode(_component_b_icon, {\n            name: \"close\",\n            size: \"30\",\n            style: {\n              \"color\": \"#ff5500\"\n            }\n          })])]),\n          _: 1\n        })])]);\n      }\n      const democomponentExport = {};\n      return {\n        render,\n        ...democomponentExport\n      };\n    }(),\n    \"element-demo1\": function () {\n      const {\n        resolveComponent: _resolveComponent,\n        openBlock: _openBlock,\n        createBlock: _createBlock,\n        createCommentVNode: _createCommentVNode,\n        toDisplayString: _toDisplayString,\n        createElementBlock: _createElementBlock,\n        withCtx: _withCtx,\n        createVNode: _createVNode,\n        createElementVNode: _createElementVNode\n      } = vue_runtime_esm_bundler;\n      const _hoisted_1 = {\n        flex: \"main:justify\",\n        style: {\n          \"width\": \"300px\"\n        },\n        class: \"demo-button\"\n      };\n      const _hoisted_2 = {\n        key: 1,\n        style: {\n          \"font-size\": \"24px\"\n        }\n      };\n      function render(_ctx, _cache) {\n        const _component_b_icon = _resolveComponent(\"b-icon\");\n        const _component_b_circle = _resolveComponent(\"b-circle\");\n        const _component_b_button = _resolveComponent(\"b-button\");\n        const _component_b_button_group = _resolveComponent(\"b-button-group\");\n        return _openBlock(), _createElementBlock(\"div\", null, [_createElementVNode(\"div\", _hoisted_1, [_createVNode(_component_b_circle, {\n          percent: _ctx.percent,\n          \"stroke-color\": _ctx.color\n        }, {\n          default: _withCtx(() => [_ctx.percent === 100 ? (_openBlock(), _createBlock(_component_b_icon, {\n            key: 0,\n            name: \"check\",\n            size: \"50\",\n            style: {\n              \"color\": \"#5cb85c\"\n            }\n          })) : (_openBlock(), _createElementBlock(\"span\", _hoisted_2, _toDisplayString(_ctx.percent) + \"%\", 1))]),\n          _: 1\n        }, 8, [\"percent\", \"stroke-color\"]), _createVNode(_component_b_button_group, null, {\n          default: _withCtx(() => [_createVNode(_component_b_button, {\n            icon: \"minus\",\n            onClick: _ctx.minus\n          }, null, 8, [\"onClick\"]), _createVNode(_component_b_button, {\n            icon: \"plus\",\n            onClick: _ctx.add\n          }, null, 8, [\"onClick\"])]),\n          _: 1\n        })])]);\n      }\n      const democomponentExport = {\n        data() {\n          return {\n            percent: 0\n          };\n        },\n        computed: {\n          color() {\n            let color = '#2db7f5';\n            if (this.percent === 100) {\n              color = '#5cb85c';\n            }\n            return color;\n          }\n        },\n        methods: {\n          add() {\n            if (this.percent >= 100) {\n              return false;\n            }\n            this.percent += 10;\n          },\n          minus() {\n            if (this.percent <= 0) {\n              return false;\n            }\n            this.percent -= 10;\n          }\n        }\n      };\n      return {\n        render,\n        ...democomponentExport\n      };\n    }(),\n    \"element-demo2\": function () {\n      const {\n        createElementVNode: _createElementVNode,\n        createTextVNode: _createTextVNode,\n        resolveComponent: _resolveComponent,\n        withCtx: _withCtx,\n        createVNode: _createVNode,\n        openBlock: _openBlock,\n        createElementBlock: _createElementBlock\n      } = vue_runtime_esm_bundler;\n      const _hoisted_1 = /*#__PURE__*/_createElementVNode(\"div\", {\n        class: \"demo-Circle-custom\"\n      }, [/*#__PURE__*/_createElementVNode(\"h1\", null, \"42,001,776\"), /*#__PURE__*/_createElementVNode(\"p\", null, \"消费人群规模\"), /*#__PURE__*/_createElementVNode(\"span\", null, [/*#__PURE__*/_createTextVNode(\" 总占人数 \"), /*#__PURE__*/_createElementVNode(\"i\", null, \"75%\")])], -1);\n      function render(_ctx, _cache) {\n        const _component_b_circle = _resolveComponent(\"b-circle\");\n        return _openBlock(), _createElementBlock(\"div\", null, [_createVNode(_component_b_circle, {\n          size: 250,\n          \"trail-width\": 4,\n          \"stroke-width\": 5,\n          percent: 75,\n          \"stroke-linecap\": \"square\",\n          \"stroke-color\": \"#43a3fb\"\n        }, {\n          default: _withCtx(() => [_hoisted_1]),\n          _: 1\n        })]);\n      }\n      const democomponentExport = {};\n      return {\n        render,\n        ...democomponentExport\n      };\n    }(),\n    \"element-demo3\": function () {\n      const {\n        createElementVNode: _createElementVNode,\n        resolveComponent: _resolveComponent,\n        withCtx: _withCtx,\n        createVNode: _createVNode,\n        openBlock: _openBlock,\n        createElementBlock: _createElementBlock\n      } = vue_runtime_esm_bundler;\n      const _hoisted_1 = /*#__PURE__*/_createElementVNode(\"span\", {\n        class: \"demo-circle-inner\",\n        style: {\n          \"font-size\": \"24px\"\n        }\n      }, \"80%\", -1);\n      function render(_ctx, _cache) {\n        const _component_b_circle = _resolveComponent(\"b-circle\");\n        return _openBlock(), _createElementBlock(\"div\", null, [_createVNode(_component_b_circle, {\n          percent: 80,\n          dashboard: \"\"\n        }, {\n          default: _withCtx(() => [_hoisted_1]),\n          _: 1\n        })]);\n      }\n      const democomponentExport = {};\n      return {\n        render,\n        ...democomponentExport\n      };\n    }()\n  }\n});\n;// CONCATENATED MODULE: ./examples/docs/circle.md?vue&type=script&lang=js\n \n;// CONCATENATED MODULE: ./examples/docs/circle.md\n\n\n\ncirclevue_type_script_lang_js.render = render\n\n/* harmony default export */ var circle = (circlevue_type_script_lang_js);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTA1MS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBZ0JBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUE2Q0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQW1CQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFBQTtBQUFBOzs7Ozs7OztBQXZHQTtBQU9BO0FBQ0E7O0FBZ0JBO0FBSUE7QUFDQTs7QUE2Q0E7QUFJQTtBQUNBOztBQW1CQTtBQUlBO0FBQ0E7O0FBTUE7Ozs7Ozs7QUEwRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQVNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FFM1pBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Jpbi11aS1uZXh0Ly4vZXhhbXBsZXMvZG9jcy9jaXJjbGUubWQ/ZDZkNSIsIndlYnBhY2s6Ly9iaW4tdWktbmV4dC8uL2V4YW1wbGVzL2RvY3MvY2lyY2xlLm1kP2JjZDEiLCJ3ZWJwYWNrOi8vYmluLXVpLW5leHQvLi9leGFtcGxlcy9kb2NzL2NpcmNsZS5tZD9hNDM5Iiwid2VicGFjazovL2Jpbi11aS1uZXh0Ly4vZXhhbXBsZXMvZG9jcy9jaXJjbGUubWQ/MWQ5MyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgPHRlbXBsYXRlPlxuICAgIDxzZWN0aW9uIGNsYXNzPVwiY29udGVudCBlbGVtZW50LWRvY1wiPlxuICAgICAgPGgyIGlkPVwiY2lyY2xlLWppbi1kdS1odWFuXCIgdGFiaW5kZXg9XCItMVwiPkNpcmNsZSDov5vluqbnjq88L2gyPlxuPHA+5pi+56S6546v5b2i5Zu+77yM5Y+v5Lul5pi+56S65Lu75Yqh55m+5YiG5q+U5oiW6ICF5piv57uf6K6h5p+Q5Lqb5pWw5o2u55qE5Y2g5q+U5oOF5Ya1PC9wPlxuPGgzIGlkPVwiamktY2h1LXlvbmctZmFcIiB0YWJpbmRleD1cIi0xXCI+5Z+656GA55So5rOVPC9oMz5cbjxwPuafpeeci+S7o+eggeadpeafpeeci+mFjee9ruS/oeaBrzwvcD5cbjxkZW1vLWJsb2NrPlxuICAgICAgICBcbiAgICAgICAgPHRlbXBsYXRlICNzb3VyY2U+PGVsZW1lbnQtZGVtbzAgLz48L3RlbXBsYXRlPlxuICAgICAgICA8dGVtcGxhdGUgI2hpZ2hsaWdodD48cHJlIHYtcHJlPjxjb2RlIGNsYXNzPVwiaHRtbFwiPlxuJmx0O3RlbXBsYXRlJmd0O1xuICAmbHQ7ZGl2IGZsZXg9JnF1b3Q7bWFpbjpqdXN0aWZ5JnF1b3Q7IHN0eWxlPSZxdW90O3dpZHRoOjQwMHB4OyZxdW90OyZndDtcbiAgICAmbHQ7Yi1jaXJjbGUgOnBlcmNlbnQ9JnF1b3Q7ODAmcXVvdDsmZ3Q7XG4gICAgICAmbHQ7c3BhbiBjbGFzcz0mcXVvdDtkZW1vLWNpcmNsZS1pbm5lciZxdW90OyBzdHlsZT0mcXVvdDtmb250LXNpemU6MjRweCZxdW90OyZndDs4MCUmbHQ7L3NwYW4mZ3Q7XG4gICAgJmx0Oy9iLWNpcmNsZSZndDtcbiAgICAmbHQ7Yi1jaXJjbGUgOnBlcmNlbnQ9JnF1b3Q7MTAwJnF1b3Q7IHN0cm9rZS1jb2xvcj0mcXVvdDsjNWNiODVjJnF1b3Q7Jmd0O1xuICAgICAgJmx0O2ItaWNvbiBuYW1lPSZxdW90O2NoZWNrJnF1b3Q7IHNpemU9JnF1b3Q7MzAmcXVvdDsgc3R5bGU9JnF1b3Q7Y29sb3I6IzVjYjg1YyZxdW90OyZndDsmbHQ7L2ItaWNvbiZndDtcbiAgICAmbHQ7L2ItY2lyY2xlJmd0O1xuICAgICZsdDtiLWNpcmNsZSA6cGVyY2VudD0mcXVvdDszNSZxdW90OyBzdHJva2UtY29sb3I9JnF1b3Q7I2ZmNTUwMCZxdW90OyZndDtcbiAgICAgICAgICAgJmx0O3NwYW4gY2xhc3M9JnF1b3Q7ZGVtby1jaXJjbGUtaW5uZXImcXVvdDsmZ3Q7XG4gICAgICAgICAgICAgICAmbHQ7Yi1pY29uIG5hbWU9JnF1b3Q7Y2xvc2UmcXVvdDsgc2l6ZT0mcXVvdDszMCZxdW90OyBzdHlsZT0mcXVvdDtjb2xvcjojZmY1NTAwJnF1b3Q7Jmd0OyZsdDsvYi1pY29uJmd0O1xuICAgICAgICAgICAmbHQ7L3NwYW4mZ3Q7XG4gICAgJmx0Oy9iLWNpcmNsZSZndDtcbiAgJmx0Oy9kaXYmZ3Q7XG4mbHQ7L3RlbXBsYXRlJmd0O1xuPC9jb2RlPjwvcHJlPjwvdGVtcGxhdGU+PC9kZW1vLWJsb2NrPjxoMyBpZD1cImRvbmctdGFpLWppbi1kdVwiIHRhYmluZGV4PVwiLTFcIj7liqjmgIHov5vluqY8L2gzPlxuPHA+5Y+v5Lul6YWN5ZCI5aSW6YOo5pON5L2c6L+b5bqmPC9wPlxuPGRlbW8tYmxvY2s+XG4gICAgICAgIFxuICAgICAgICA8dGVtcGxhdGUgI3NvdXJjZT48ZWxlbWVudC1kZW1vMSAvPjwvdGVtcGxhdGU+XG4gICAgICAgIDx0ZW1wbGF0ZSAjaGlnaGxpZ2h0PjxwcmUgdi1wcmU+PGNvZGUgY2xhc3M9XCJodG1sXCI+XG4mbHQ7dGVtcGxhdGUmZ3Q7XG4gICZsdDtkaXYgZmxleD0mcXVvdDttYWluOmp1c3RpZnkmcXVvdDsgc3R5bGU9JnF1b3Q7d2lkdGg6MzAwcHg7JnF1b3Q7IGNsYXNzPSZxdW90O2RlbW8tYnV0dG9uJnF1b3Q7Jmd0O1xuICAgICZsdDtiLWNpcmNsZSA6cGVyY2VudD0mcXVvdDtwZXJjZW50JnF1b3Q7IDpzdHJva2UtY29sb3I9JnF1b3Q7Y29sb3ImcXVvdDsmZ3Q7XG4gICAgICAmbHQ7Yi1pY29uIG5hbWU9JnF1b3Q7Y2hlY2smcXVvdDsgc2l6ZT0mcXVvdDs1MCZxdW90OyBzdHlsZT0mcXVvdDtjb2xvcjojNWNiODVjJnF1b3Q7IHYtaWY9JnF1b3Q7cGVyY2VudCA9PT0gMTAwJnF1b3Q7Jmd0OyZsdDsvYi1pY29uJmd0O1xuICAgICAgJmx0O3NwYW4gdi1lbHNlIHN0eWxlPSZxdW90O2ZvbnQtc2l6ZToyNHB4JnF1b3Q7Jmd0O3t7IHBlcmNlbnQgfX0lJmx0Oy9zcGFuJmd0O1xuICAgICZsdDsvYi1jaXJjbGUmZ3Q7XG4gICAgJmx0O2ItYnV0dG9uLWdyb3VwJmd0O1xuICAgICAgJmx0O2ItYnV0dG9uIGljb249JnF1b3Q7bWludXMmcXVvdDsgQGNsaWNrPSZxdW90O21pbnVzJnF1b3Q7Jmd0OyZsdDsvYi1idXR0b24mZ3Q7XG4gICAgICAmbHQ7Yi1idXR0b24gaWNvbj0mcXVvdDtwbHVzJnF1b3Q7IEBjbGljaz0mcXVvdDthZGQmcXVvdDsmZ3Q7Jmx0Oy9iLWJ1dHRvbiZndDtcbiAgICAmbHQ7L2ItYnV0dG9uLWdyb3VwJmd0O1xuICAmbHQ7L2RpdiZndDtcbiZsdDsvdGVtcGxhdGUmZ3Q7XG4mbHQ7c2NyaXB0Jmd0O1xuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBlcmNlbnQ6IDBcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICBjb2xvcigpIHtcbiAgICAgICAgbGV0IGNvbG9yID0gJyMyZGI3ZjUnO1xuICAgICAgICBpZiAodGhpcy5wZXJjZW50ID09PSAxMDApIHtcbiAgICAgICAgICBjb2xvciA9ICcjNWNiODVjJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29sb3I7XG4gICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICBhZGQoKSB7XG4gICAgICAgIGlmICh0aGlzLnBlcmNlbnQgJmd0Oz0gMTAwKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGVyY2VudCArPSAxMDtcbiAgICAgIH0sXG4gICAgICBtaW51cygpIHtcbiAgICAgICAgaWYgKHRoaXMucGVyY2VudCAmbHQ7PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGVyY2VudCAtPSAxMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiZsdDsvc2NyaXB0Jmd0O1xuPC9jb2RlPjwvcHJlPjwvdGVtcGxhdGU+PC9kZW1vLWJsb2NrPjxoMyBpZD1cInNoZS16aGkteWFuZy1zaGlcIiB0YWJpbmRleD1cIi0xXCI+6K6+572u5qC35byPPC9oMz5cbjxwPuWPr+S7pemFjee9ruabtOWkmueahOiHquWumuS5ieagt+W8jzwvcD5cbjxkZW1vLWJsb2NrPlxuICAgICAgICBcbiAgICAgICAgPHRlbXBsYXRlICNzb3VyY2U+PGVsZW1lbnQtZGVtbzIgLz48L3RlbXBsYXRlPlxuICAgICAgICA8dGVtcGxhdGUgI2hpZ2hsaWdodD48cHJlIHYtcHJlPjxjb2RlIGNsYXNzPVwiaHRtbFwiPlxuJmx0O3RlbXBsYXRlJmd0O1xuICAmbHQ7Yi1jaXJjbGVcbiAgICA6c2l6ZT0mcXVvdDsyNTAmcXVvdDtcbiAgICA6dHJhaWwtd2lkdGg9JnF1b3Q7NCZxdW90O1xuICAgIDpzdHJva2Utd2lkdGg9JnF1b3Q7NSZxdW90O1xuICAgIDpwZXJjZW50PSZxdW90Ozc1JnF1b3Q7XG4gICAgc3Ryb2tlLWxpbmVjYXA9JnF1b3Q7c3F1YXJlJnF1b3Q7XG4gICAgc3Ryb2tlLWNvbG9yPSZxdW90OyM0M2EzZmImcXVvdDsmZ3Q7XG4gICAgJmx0O2RpdiBjbGFzcz0mcXVvdDtkZW1vLUNpcmNsZS1jdXN0b20mcXVvdDsmZ3Q7XG4gICAgICAmbHQ7aDEmZ3Q7NDIsMDAxLDc3NiZsdDsvaDEmZ3Q7XG4gICAgICAmbHQ7cCZndDvmtojotLnkurrnvqTop4TmqKEmbHQ7L3AmZ3Q7XG4gICAgICAmbHQ7c3BhbiZndDtcbiAgICAgICAgICAgICAgICDmgLvljaDkurrmlbBcbiAgICAgICAgICAgICAgICAmbHQ7aSZndDs3NSUmbHQ7L2kmZ3Q7XG4gICAgICAgICAgICAmbHQ7L3NwYW4mZ3Q7XG4gICAgJmx0Oy9kaXYmZ3Q7XG4gICZsdDsvYi1jaXJjbGUmZ3Q7XG4mbHQ7L3RlbXBsYXRlJmd0O1xuPC9jb2RlPjwvcHJlPjwvdGVtcGxhdGU+PC9kZW1vLWJsb2NrPjxoMyBpZD1cInlpLWJpYW8tcGFuLW1vLXNoaVwiIHRhYmluZGV4PVwiLTFcIj7ku6rooajnm5jmqKHlvI88L2gzPlxuPHA+6YCa6L+H6K6+572u5bGe5oCnIDxjb2RlPmRhc2hib2FyZDwvY29kZT7vvIzlj6/ku6Xlvojmlrnkvr/lnLDlrp7njrDku6rooajnm5jmoLflvI/jgII8L3A+XG48ZGVtby1ibG9jaz5cbiAgICAgICAgXG4gICAgICAgIDx0ZW1wbGF0ZSAjc291cmNlPjxlbGVtZW50LWRlbW8zIC8+PC90ZW1wbGF0ZT5cbiAgICAgICAgPHRlbXBsYXRlICNoaWdobGlnaHQ+PHByZSB2LXByZT48Y29kZSBjbGFzcz1cImh0bWxcIj5cbiZsdDt0ZW1wbGF0ZSZndDtcbiAgJmx0O2ItY2lyY2xlIDpwZXJjZW50PSZxdW90OzgwJnF1b3Q7IGRhc2hib2FyZCZndDtcbiAgICAmbHQ7c3BhbiBjbGFzcz0mcXVvdDtkZW1vLWNpcmNsZS1pbm5lciZxdW90OyBzdHlsZT0mcXVvdDtmb250LXNpemU6MjRweCZxdW90OyZndDs4MCUmbHQ7L3NwYW4mZ3Q7XG4gICZsdDsvYi1jaXJjbGUmZ3Q7XG4mbHQ7L3RlbXBsYXRlJmd0O1xuPC9jb2RlPjwvcHJlPjwvdGVtcGxhdGU+PC9kZW1vLWJsb2NrPjxoMyBpZD1cInByb3BzXCIgdGFiaW5kZXg9XCItMVwiPlByb3BzPC9oMz5cbjx0YWJsZT5cbjx0aGVhZD5cbjx0cj5cbjx0aD7lj4LmlbA8L3RoPlxuPHRoPuivtOaYjjwvdGg+XG48dGg+57G75Z6LPC90aD5cbjx0aD7lj6/pgInlgLw8L3RoPlxuPHRoPum7mOiupOWAvDwvdGg+XG48L3RyPlxuPC90aGVhZD5cbjx0Ym9keT5cbjx0cj5cbjx0ZD5wZXJjZW50PC90ZD5cbjx0ZD7nmb7liIbmr5Q8L3RkPlxuPHRkPk51bWJlcjwvdGQ+XG48dGQ+4oCUPC90ZD5cbjx0ZD4wPC90ZD5cbjwvdHI+XG48dHI+XG48dGQ+c2l6ZTwvdGQ+XG48dGQ+5Zu+6KGo55qE5a695bqm5ZKM6auY5bqm77yM5Y2V5L2NIHB4PC90ZD5cbjx0ZD5OdW1iZXI8L3RkPlxuPHRkPuKAlDwvdGQ+XG48dGQ+MTIwPC90ZD5cbjwvdHI+XG48dHI+XG48dGQ+c3Ryb2tlLWxpbmVjYXA8L3RkPlxuPHRkPui/m+W6pueOr+mhtuerr+eahOW9oueKtjwvdGQ+XG48dGQ+U3RyaW5nPC90ZD5cbjx0ZD5zcXVhcmXvvIjmlrnvvIkvcm91bmTvvIjlnIbvvIk8L3RkPlxuPHRkPnJvdW5kPC90ZD5cbjwvdHI+XG48dHI+XG48dGQ+c3Ryb2tlLXdpZHRoPC90ZD5cbjx0ZD7ov5vluqbnjq/nmoTnur/lrr3vvIzljZXkvY0gcHg8L3RkPlxuPHRkPk51bWJlcjwvdGQ+XG48dGQ+4oCUPC90ZD5cbjx0ZD42PC90ZD5cbjwvdHI+XG48dHI+XG48dGQ+c3Ryb2tlLWNvbG9yPC90ZD5cbjx0ZD7ov5vluqbnjq/nmoTpopzoibI8L3RkPlxuPHRkPlN0cmluZzwvdGQ+XG48dGQ+4oCUPC90ZD5cbjx0ZD4jMmRiN2Y1PC90ZD5cbjwvdHI+XG48dHI+XG48dGQ+dHJhaWwtd2lkdGg8L3RkPlxuPHRkPui/m+W6pueOr+iDjOaZr+eahOe6v+Wuve+8jOWNleS9jSBweDwvdGQ+XG48dGQ+TnVtYmVyPC90ZD5cbjx0ZD7igJQ8L3RkPlxuPHRkPjU8L3RkPlxuPC90cj5cbjx0cj5cbjx0ZD50cmFpbC1jb2xvcjwvdGQ+XG48dGQ+6L+b5bqm546v6IOM5pmv55qE6aKc6ImyPC90ZD5cbjx0ZD5TdHJpbmc8L3RkPlxuPHRkPuKAlDwvdGQ+XG48dGQ+I2VhZWVmMjwvdGQ+XG48L3RyPlxuPHRyPlxuPHRkPmRhc2hib2FyZDwvdGQ+XG48dGQ+5piv5ZCm5pi+56S65Li65Luq6KGo55uYPC90ZD5cbjx0ZD5Cb29sZWFuPC90ZD5cbjx0ZD7igJQ8L3RkPlxuPHRkPmZhbHNlPC90ZD5cbjwvdHI+XG48L3Rib2R5PlxuPC90YWJsZT5cblxuICAgIDwvc2VjdGlvbj5cbiAgPC90ZW1wbGF0ZT5cbiAgPHNjcmlwdD5cbiAgICAgIGltcG9ydCAqIGFzIFZ1ZSBmcm9tICd2dWUnO1xuICAgICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiAnY29tcG9uZW50LWRvYycsXG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICBcImVsZW1lbnQtZGVtbzBcIjogKGZ1bmN0aW9uKCkge1xuICAgIFxuICAgIGNvbnN0IHsgY3JlYXRlRWxlbWVudFZOb2RlOiBfY3JlYXRlRWxlbWVudFZOb2RlLCByZXNvbHZlQ29tcG9uZW50OiBfcmVzb2x2ZUNvbXBvbmVudCwgd2l0aEN0eDogX3dpdGhDdHgsIGNyZWF0ZVZOb2RlOiBfY3JlYXRlVk5vZGUsIG9wZW5CbG9jazogX29wZW5CbG9jaywgY3JlYXRlRWxlbWVudEJsb2NrOiBfY3JlYXRlRWxlbWVudEJsb2NrIH0gPSBWdWVcblxuY29uc3QgX2hvaXN0ZWRfMSA9IHtcbiAgZmxleDogXCJtYWluOmp1c3RpZnlcIixcbiAgc3R5bGU6IHtcIndpZHRoXCI6XCI0MDBweFwifVxufVxuY29uc3QgX2hvaXN0ZWRfMiA9IC8qI19fUFVSRV9fKi9fY3JlYXRlRWxlbWVudFZOb2RlKFwic3BhblwiLCB7XG4gIGNsYXNzOiBcImRlbW8tY2lyY2xlLWlubmVyXCIsXG4gIHN0eWxlOiB7XCJmb250LXNpemVcIjpcIjI0cHhcIn1cbn0sIFwiODAlXCIsIC0xKVxuY29uc3QgX2hvaXN0ZWRfMyA9IHsgY2xhc3M6IFwiZGVtby1jaXJjbGUtaW5uZXJcIiB9XG5cbmZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUpIHtcbiAgY29uc3QgX2NvbXBvbmVudF9iX2NpcmNsZSA9IF9yZXNvbHZlQ29tcG9uZW50KFwiYi1jaXJjbGVcIilcbiAgY29uc3QgX2NvbXBvbmVudF9iX2ljb24gPSBfcmVzb2x2ZUNvbXBvbmVudChcImItaWNvblwiKVxuXG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZGl2XCIsIG51bGwsIFtcbiAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzEsIFtcbiAgICAgIF9jcmVhdGVWTm9kZShfY29tcG9uZW50X2JfY2lyY2xlLCB7IHBlcmNlbnQ6IDgwIH0sIHtcbiAgICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICAgIF9ob2lzdGVkXzJcbiAgICAgICAgXSksXG4gICAgICAgIF86IDFcbiAgICAgIH0pLFxuICAgICAgX2NyZWF0ZVZOb2RlKF9jb21wb25lbnRfYl9jaXJjbGUsIHtcbiAgICAgICAgcGVyY2VudDogMTAwLFxuICAgICAgICBcInN0cm9rZS1jb2xvclwiOiBcIiM1Y2I4NWNcIlxuICAgICAgfSwge1xuICAgICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgICAgX2NyZWF0ZVZOb2RlKF9jb21wb25lbnRfYl9pY29uLCB7XG4gICAgICAgICAgICBuYW1lOiBcImNoZWNrXCIsXG4gICAgICAgICAgICBzaXplOiBcIjMwXCIsXG4gICAgICAgICAgICBzdHlsZToge1wiY29sb3JcIjpcIiM1Y2I4NWNcIn1cbiAgICAgICAgICB9KVxuICAgICAgICBdKSxcbiAgICAgICAgXzogMVxuICAgICAgfSksXG4gICAgICBfY3JlYXRlVk5vZGUoX2NvbXBvbmVudF9iX2NpcmNsZSwge1xuICAgICAgICBwZXJjZW50OiAzNSxcbiAgICAgICAgXCJzdHJva2UtY29sb3JcIjogXCIjZmY1NTAwXCJcbiAgICAgIH0sIHtcbiAgICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJzcGFuXCIsIF9ob2lzdGVkXzMsIFtcbiAgICAgICAgICAgIF9jcmVhdGVWTm9kZShfY29tcG9uZW50X2JfaWNvbiwge1xuICAgICAgICAgICAgICBuYW1lOiBcImNsb3NlXCIsXG4gICAgICAgICAgICAgIHNpemU6IFwiMzBcIixcbiAgICAgICAgICAgICAgc3R5bGU6IHtcImNvbG9yXCI6XCIjZmY1NTAwXCJ9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfOiAxXG4gICAgICB9KVxuICAgIF0pXG4gIF0pKVxufVxuICBcbiAgICBjb25zdCBkZW1vY29tcG9uZW50RXhwb3J0ID0ge31cbiAgICByZXR1cm4ge1xuICAgICAgcmVuZGVyLFxuICAgICAgLi4uZGVtb2NvbXBvbmVudEV4cG9ydFxuICAgIH1cbiAgfSkoKSxcImVsZW1lbnQtZGVtbzFcIjogKGZ1bmN0aW9uKCkge1xuICAgIFxuICAgIGNvbnN0IHsgcmVzb2x2ZUNvbXBvbmVudDogX3Jlc29sdmVDb21wb25lbnQsIG9wZW5CbG9jazogX29wZW5CbG9jaywgY3JlYXRlQmxvY2s6IF9jcmVhdGVCbG9jaywgY3JlYXRlQ29tbWVudFZOb2RlOiBfY3JlYXRlQ29tbWVudFZOb2RlLCB0b0Rpc3BsYXlTdHJpbmc6IF90b0Rpc3BsYXlTdHJpbmcsIGNyZWF0ZUVsZW1lbnRCbG9jazogX2NyZWF0ZUVsZW1lbnRCbG9jaywgd2l0aEN0eDogX3dpdGhDdHgsIGNyZWF0ZVZOb2RlOiBfY3JlYXRlVk5vZGUsIGNyZWF0ZUVsZW1lbnRWTm9kZTogX2NyZWF0ZUVsZW1lbnRWTm9kZSB9ID0gVnVlXG5cbmNvbnN0IF9ob2lzdGVkXzEgPSB7XG4gIGZsZXg6IFwibWFpbjpqdXN0aWZ5XCIsXG4gIHN0eWxlOiB7XCJ3aWR0aFwiOlwiMzAwcHhcIn0sXG4gIGNsYXNzOiBcImRlbW8tYnV0dG9uXCJcbn1cbmNvbnN0IF9ob2lzdGVkXzIgPSB7XG4gIGtleTogMSxcbiAgc3R5bGU6IHtcImZvbnQtc2l6ZVwiOlwiMjRweFwifVxufVxuXG5mdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlKSB7XG4gIGNvbnN0IF9jb21wb25lbnRfYl9pY29uID0gX3Jlc29sdmVDb21wb25lbnQoXCJiLWljb25cIilcbiAgY29uc3QgX2NvbXBvbmVudF9iX2NpcmNsZSA9IF9yZXNvbHZlQ29tcG9uZW50KFwiYi1jaXJjbGVcIilcbiAgY29uc3QgX2NvbXBvbmVudF9iX2J1dHRvbiA9IF9yZXNvbHZlQ29tcG9uZW50KFwiYi1idXR0b25cIilcbiAgY29uc3QgX2NvbXBvbmVudF9iX2J1dHRvbl9ncm91cCA9IF9yZXNvbHZlQ29tcG9uZW50KFwiYi1idXR0b24tZ3JvdXBcIilcblxuICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCBudWxsLCBbXG4gICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF8xLCBbXG4gICAgICBfY3JlYXRlVk5vZGUoX2NvbXBvbmVudF9iX2NpcmNsZSwge1xuICAgICAgICBwZXJjZW50OiBfY3R4LnBlcmNlbnQsXG4gICAgICAgIFwic3Ryb2tlLWNvbG9yXCI6IF9jdHguY29sb3JcbiAgICAgIH0sIHtcbiAgICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICAgIChfY3R4LnBlcmNlbnQgPT09IDEwMClcbiAgICAgICAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKF9jb21wb25lbnRfYl9pY29uLCB7XG4gICAgICAgICAgICAgICAga2V5OiAwLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiY2hlY2tcIixcbiAgICAgICAgICAgICAgICBzaXplOiBcIjUwXCIsXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcImNvbG9yXCI6XCIjNWNiODVjXCJ9XG4gICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgOiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwic3BhblwiLCBfaG9pc3RlZF8yLCBfdG9EaXNwbGF5U3RyaW5nKF9jdHgucGVyY2VudCkgKyBcIiVcIiwgMSkpXG4gICAgICAgIF0pLFxuICAgICAgICBfOiAxXG4gICAgICB9LCA4LCBbXCJwZXJjZW50XCIsIFwic3Ryb2tlLWNvbG9yXCJdKSxcbiAgICAgIF9jcmVhdGVWTm9kZShfY29tcG9uZW50X2JfYnV0dG9uX2dyb3VwLCBudWxsLCB7XG4gICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICBfY3JlYXRlVk5vZGUoX2NvbXBvbmVudF9iX2J1dHRvbiwge1xuICAgICAgICAgICAgaWNvbjogXCJtaW51c1wiLFxuICAgICAgICAgICAgb25DbGljazogX2N0eC5taW51c1xuICAgICAgICAgIH0sIG51bGwsIDgsIFtcIm9uQ2xpY2tcIl0pLFxuICAgICAgICAgIF9jcmVhdGVWTm9kZShfY29tcG9uZW50X2JfYnV0dG9uLCB7XG4gICAgICAgICAgICBpY29uOiBcInBsdXNcIixcbiAgICAgICAgICAgIG9uQ2xpY2s6IF9jdHguYWRkXG4gICAgICAgICAgfSwgbnVsbCwgOCwgW1wib25DbGlja1wiXSlcbiAgICAgICAgXSksXG4gICAgICAgIF86IDFcbiAgICAgIH0pXG4gICAgXSlcbiAgXSkpXG59XG4gIFxuICAgIGNvbnN0IGRlbW9jb21wb25lbnRFeHBvcnQgPSB7XG4gICAgZGF0YSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBlcmNlbnQ6IDBcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICBjb2xvcigpIHtcbiAgICAgICAgbGV0IGNvbG9yID0gJyMyZGI3ZjUnO1xuICAgICAgICBpZiAodGhpcy5wZXJjZW50ID09PSAxMDApIHtcbiAgICAgICAgICBjb2xvciA9ICcjNWNiODVjJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29sb3I7XG4gICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICBhZGQoKSB7XG4gICAgICAgIGlmICh0aGlzLnBlcmNlbnQgPj0gMTAwKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGVyY2VudCArPSAxMDtcbiAgICAgIH0sXG4gICAgICBtaW51cygpIHtcbiAgICAgICAgaWYgKHRoaXMucGVyY2VudCA8PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGVyY2VudCAtPSAxMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgICByZXR1cm4ge1xuICAgICAgcmVuZGVyLFxuICAgICAgLi4uZGVtb2NvbXBvbmVudEV4cG9ydFxuICAgIH1cbiAgfSkoKSxcImVsZW1lbnQtZGVtbzJcIjogKGZ1bmN0aW9uKCkge1xuICAgIFxuICAgIGNvbnN0IHsgY3JlYXRlRWxlbWVudFZOb2RlOiBfY3JlYXRlRWxlbWVudFZOb2RlLCBjcmVhdGVUZXh0Vk5vZGU6IF9jcmVhdGVUZXh0Vk5vZGUsIHJlc29sdmVDb21wb25lbnQ6IF9yZXNvbHZlQ29tcG9uZW50LCB3aXRoQ3R4OiBfd2l0aEN0eCwgY3JlYXRlVk5vZGU6IF9jcmVhdGVWTm9kZSwgb3BlbkJsb2NrOiBfb3BlbkJsb2NrLCBjcmVhdGVFbGVtZW50QmxvY2s6IF9jcmVhdGVFbGVtZW50QmxvY2sgfSA9IFZ1ZVxuXG5jb25zdCBfaG9pc3RlZF8xID0gLyojX19QVVJFX18qL19jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgeyBjbGFzczogXCJkZW1vLUNpcmNsZS1jdXN0b21cIiB9LCBbXG4gIC8qI19fUFVSRV9fKi9fY3JlYXRlRWxlbWVudFZOb2RlKFwiaDFcIiwgbnVsbCwgXCI0MiwwMDEsNzc2XCIpLFxuICAvKiNfX1BVUkVfXyovX2NyZWF0ZUVsZW1lbnRWTm9kZShcInBcIiwgbnVsbCwgXCLmtojotLnkurrnvqTop4TmqKFcIiksXG4gIC8qI19fUFVSRV9fKi9fY3JlYXRlRWxlbWVudFZOb2RlKFwic3BhblwiLCBudWxsLCBbXG4gICAgLyojX19QVVJFX18qL19jcmVhdGVUZXh0Vk5vZGUoXCIg5oC75Y2g5Lq65pWwIFwiKSxcbiAgICAvKiNfX1BVUkVfXyovX2NyZWF0ZUVsZW1lbnRWTm9kZShcImlcIiwgbnVsbCwgXCI3NSVcIilcbiAgXSlcbl0sIC0xKVxuXG5mdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlKSB7XG4gIGNvbnN0IF9jb21wb25lbnRfYl9jaXJjbGUgPSBfcmVzb2x2ZUNvbXBvbmVudChcImItY2lyY2xlXCIpXG5cbiAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJkaXZcIiwgbnVsbCwgW1xuICAgIF9jcmVhdGVWTm9kZShfY29tcG9uZW50X2JfY2lyY2xlLCB7XG4gICAgICBzaXplOiAyNTAsXG4gICAgICBcInRyYWlsLXdpZHRoXCI6IDQsXG4gICAgICBcInN0cm9rZS13aWR0aFwiOiA1LFxuICAgICAgcGVyY2VudDogNzUsXG4gICAgICBcInN0cm9rZS1saW5lY2FwXCI6IFwic3F1YXJlXCIsXG4gICAgICBcInN0cm9rZS1jb2xvclwiOiBcIiM0M2EzZmJcIlxuICAgIH0sIHtcbiAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgX2hvaXN0ZWRfMVxuICAgICAgXSksXG4gICAgICBfOiAxXG4gICAgfSlcbiAgXSkpXG59XG4gIFxuICAgIGNvbnN0IGRlbW9jb21wb25lbnRFeHBvcnQgPSB7fVxuICAgIHJldHVybiB7XG4gICAgICByZW5kZXIsXG4gICAgICAuLi5kZW1vY29tcG9uZW50RXhwb3J0XG4gICAgfVxuICB9KSgpLFwiZWxlbWVudC1kZW1vM1wiOiAoZnVuY3Rpb24oKSB7XG4gICAgXG4gICAgY29uc3QgeyBjcmVhdGVFbGVtZW50Vk5vZGU6IF9jcmVhdGVFbGVtZW50Vk5vZGUsIHJlc29sdmVDb21wb25lbnQ6IF9yZXNvbHZlQ29tcG9uZW50LCB3aXRoQ3R4OiBfd2l0aEN0eCwgY3JlYXRlVk5vZGU6IF9jcmVhdGVWTm9kZSwgb3BlbkJsb2NrOiBfb3BlbkJsb2NrLCBjcmVhdGVFbGVtZW50QmxvY2s6IF9jcmVhdGVFbGVtZW50QmxvY2sgfSA9IFZ1ZVxuXG5jb25zdCBfaG9pc3RlZF8xID0gLyojX19QVVJFX18qL19jcmVhdGVFbGVtZW50Vk5vZGUoXCJzcGFuXCIsIHtcbiAgY2xhc3M6IFwiZGVtby1jaXJjbGUtaW5uZXJcIixcbiAgc3R5bGU6IHtcImZvbnQtc2l6ZVwiOlwiMjRweFwifVxufSwgXCI4MCVcIiwgLTEpXG5cbmZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUpIHtcbiAgY29uc3QgX2NvbXBvbmVudF9iX2NpcmNsZSA9IF9yZXNvbHZlQ29tcG9uZW50KFwiYi1jaXJjbGVcIilcblxuICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCBudWxsLCBbXG4gICAgX2NyZWF0ZVZOb2RlKF9jb21wb25lbnRfYl9jaXJjbGUsIHtcbiAgICAgIHBlcmNlbnQ6IDgwLFxuICAgICAgZGFzaGJvYXJkOiBcIlwiXG4gICAgfSwge1xuICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICBfaG9pc3RlZF8xXG4gICAgICBdKSxcbiAgICAgIF86IDFcbiAgICB9KVxuICBdKSlcbn1cbiAgXG4gICAgY29uc3QgZGVtb2NvbXBvbmVudEV4cG9ydCA9IHt9XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlbmRlcixcbiAgICAgIC4uLmRlbW9jb21wb25lbnRFeHBvcnRcbiAgICB9XG4gIH0pKCksXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICA8L3NjcmlwdD5cbiAgIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2JhYmVsLWxvYWRlckA4LjMuMF9AYmFiZWwrY29yZUA3LjIyLjExX3dlYnBhY2tANS44OC4yL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS92dWUtbG9hZGVyQDE2LjUuMF9AdnVlK2NvbXBpbGVyLXNmY0AzLjMuNF93ZWJwYWNrQDUuODguMi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdIS4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS92dWUtbG9hZGVyQDE2LjUuMF9AdnVlK2NvbXBpbGVyLXNmY0AzLjMuNF93ZWJwYWNrQDUuODguMi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTIudXNlWzBdIS4uLy4uL2J1aWxkL21kLWxvYWRlci9pbmRleC5qcyEuL2NpcmNsZS5tZD92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lNTIzYTliOFwiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9iYWJlbC1sb2FkZXJAOC4zLjBfQGJhYmVsK2NvcmVANy4yMi4xMV93ZWJwYWNrQDUuODguMi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vdnVlLWxvYWRlckAxNi41LjBfQHZ1ZStjb21waWxlci1zZmNAMy4zLjRfd2VicGFja0A1Ljg4LjIvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0yLnVzZVswXSEuLi8uLi9idWlsZC9tZC1sb2FkZXIvaW5kZXguanMhLi9jaXJjbGUubWQ/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2JhYmVsLWxvYWRlckA4LjMuMF9AYmFiZWwrY29yZUA3LjIyLjExX3dlYnBhY2tANS44OC4yL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS92dWUtbG9hZGVyQDE2LjUuMF9AdnVlK2NvbXBpbGVyLXNmY0AzLjMuNF93ZWJwYWNrQDUuODguMi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTIudXNlWzBdIS4uLy4uL2J1aWxkL21kLWxvYWRlci9pbmRleC5qcyEuL2NpcmNsZS5tZD92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vY2lyY2xlLm1kP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWU1MjNhOWI4XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vY2lyY2xlLm1kP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL2NpcmNsZS5tZD92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5zY3JpcHQucmVuZGVyID0gcmVuZGVyXG5cbmV4cG9ydCBkZWZhdWx0IHNjcmlwdCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1051\n");

/***/ })

}]);