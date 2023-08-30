import { getPalette, alpha } from './color'

// 这里的变量覆盖，可以覆盖多种样式，组件库内的样式以bin开头，如binColorPrimary
// 这里如果是主题色，则对应再生成几种色板进行追加。如colorPrimaryLight1
// 如是需要覆盖本地默认的样式，按需求进行调整即可 如vMBgColor
// 首字母需要小写

/**
 * 转换一个变量值为css变量 turn binColorPrimary => to  --bin-color-primary
 * @param {*} str
 * @returns
 */
export function convertToCSSVariableName(str) {
  return `--${str.replace(/([A-Z])/g, '-$1').toLowerCase()}`
}

/**
 * 转换一个对象为css变量对象
 * @param {*} obj
 * @returns
 */
export function convertObjectPropsToCSSVariables(obj) {
  const result = {}
  Object.keys(obj).forEach(key => {
    // 转换实际css var变量 `--bin-color-primary`
    const cssVariableName = convertToCSSVariableName(key)
    result[cssVariableName] = obj[key]
    // 获取可能的扩展变量
    const extensionVars = getExtensionVariables(cssVariableName, obj[key])
    // 扩展变量名
    Object.keys(extensionVars).forEach(exKey => {
      result[exKey] = extensionVars[exKey]
    })
  })
  return result
}

/**
 * 循环设置一个css变量
 * @param {*} obj
 * @param {*} dom
 * @returns
 */
export function setObjectPropsCSSVariables(obj, dom = document.documentElement) {
  const props = convertObjectPropsToCSSVariables(obj)
  Object.keys(props).forEach(key => {
    setCssVar(key, props[key], dom)
  })
}

/**
 * 设置css变量
 * @param {*} prop
 * @param {*} val
 * @param {*} dom
 */
export function setCssVar(prop, val, dom = document.documentElement) {
  dom.style.setProperty(prop, val)
}

/**
 * 设置属性
 * @param {} prop
 * @param {*} val
 * @param {*} dom
 */
export function setAttrVar(prop, val, dom = document.documentElement) {
  dom.setAttribute(prop, val)
}

/**
 * 移除属性
 * @param {} prop
 * @param {*} val
 * @param {*} dom
 */
export function removeAttrVar(prop, dom = document.documentElement) {
  dom.removeAttribute(prop)
}

// 根据变量名称获取扩展名称色板对象 这里是为了扩充计算色板使用
function getExtensionVariables(key, color) {
  const mateProps = ['primary', 'success', 'warning', 'danger', 'info'].map(v => `--bin-color-${v}`)
  const result = {}
  // 如果有匹配主色的内容则需要扩充色板
  if (mateProps.includes(key)) {
    const paletteColors = getPalette(color)
    // 根据主色获取色板
    result[`${key}-light1`] = paletteColors[5]
    result[`${key}-light2`] = paletteColors[6]
    result[`${key}-light3`] = paletteColors[7]
    result[`${key}-light4`] = paletteColors[8]
    result[`${key}-light5`] = paletteColors[9]
    result[`${key}-light6`] = paletteColors[10]
    result[`${key}-active`] = paletteColors[3]

    if (key === '--bin-color-primary') {
      result['--bin-color-input-shadow'] = alpha(color, 0.2)
    }
    if (key === '--bin-color-danger') {
      result['--bin-color-input-error-shadow'] = alpha(color, 0.2)
    }
  }
  return result
}
