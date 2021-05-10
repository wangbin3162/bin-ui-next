import {
  isObject,
  isArray,
  isString,
  capitalize,
  looseEqual,
  extend,
  camelize,
  hasOwn,
  toRawType,
} from '@vue/shared'
import isServer from './isServer'


/**
 * Generate random number in range [0, 1000]
 * Maybe replace with [uuid](https://www.npmjs.com/package/uuid)
 */
export const generateId = () => Math.floor(Math.random() * 10000)
export const isBool = (val) => typeof val === 'boolean'
export const isNumber = (val) => typeof val === 'number'
export const isHTMLElement = (val) => toRawType(val).startsWith('HTML')
export const clearTimer = (timer) => {
  clearTimeout(timer.value)
  timer.value = null
}
export const autoprefixer = function(style) {
  const rules = ['transform', 'transition', 'animation']
  const prefixes = ['ms-', 'webkit-']
  rules.forEach(rule => {
    const value = style[rule]
    if (rule && value) {
      prefixes.forEach(prefix => {
        style[prefix + rule] = value
      })
    }
  })
  return style
}
export const getValueByPath = (obj, paths = '') => {
  let ret = obj
  paths.split('.').map(path => {
    ret = ret?.[path]
  })
  return ret
}
export const isIE = function() {
  return !isServer && !isNaN(Number(document.DOCUMENT_NODE))
}

export const isEdge = function() {
  return !isServer && navigator.userAgent.indexOf('Edge') > -1
}
// export const valueEquals

export const escapeRegexpString = (value = '') =>
  String(value).replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')

export function entries(obj) {
  return Object
    .keys(obj)
    .map((key) => ([key, obj[key]]))
}

/**
 * Unwraps refed value
 * @param ref Refed value
 */
export function $(ref) {
  return ref.value
}

export {
  hasOwn,
  isObject,
  isArray,
  isString,
  capitalize,
  camelize,
  looseEqual,
  extend,
}
