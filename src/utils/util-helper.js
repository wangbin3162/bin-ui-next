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

export function getPropByPath(obj, path, strict) {
  let tempObj = obj
  path = path.replace(/\[(\w+)\]/g, '.$1')
  path = path.replace(/^\./, '')

  const keyArr = path.split('.')
  let i = 0
  for (i; i < keyArr.length - 1; i++) {
    if (!tempObj && !strict) break
    const key = keyArr[i]

    if (key in tempObj) {
      tempObj = tempObj[key]
    } else {
      if (strict) {
        throw new Error('please transfer a valid prop path to form item!')
      }
      break
    }
  }
  return {
    o: tempObj,
    k: keyArr[i],
    v: tempObj?.[keyArr[i]],
  }
}

export const isIE = function() {
  return !isServer && !isNaN(Number(document.DOCUMENT_NODE))
}

export const isEdge = function() {
  return !isServer && navigator.userAgent.indexOf('Edge') > -1
}
// export const valueEquals

export const escapeRegexpString = (value = '') => String(value).replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')

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

export function isUndefined(val) {
  return val === void 0
}

export function arrayFlat(arr) {
  return arr.reduce((acm, item) => {
    const val = Array.isArray(item) ? arrayFlat(item) : item
    return acm.concat(val)
  }, [])
}

export function deduplicate(arr) {
  return Array.from(new Set(arr))
}

// coerce truthy value to array
export const coerceTruthyValueToArray = arr => {
  if (!arr && arr !== 0) {
    return []
  }
  return Array.isArray(arr) ? arr : [arr]
}

export function isEmpty(val) {
  return !val && val !== 0 ||
    isArray(val) && !val.length ||
    isObject(val) && !Object.keys(val).length
}

export const arrayFind = function(arr, pred) {
  return arr.find(pred)
}

export const arrayFindIndex = (arr, pred) => arr.findIndex(pred)
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
