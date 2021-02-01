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
import type { Ref } from 'vue'


/**
 * Generate random number in range [0, 1000]
 * Maybe replace with [uuid](https://www.npmjs.com/package/uuid)
 */
export const generateId = (): number => Math.floor(Math.random() * 10000)
export const isBool = (val: unknown) => typeof val === 'boolean'
export const isNumber = (val: unknown) => typeof val === 'number'
export const isHTMLElement = (val: unknown) => toRawType(val).startsWith('HTML')

/**
 * Unwraps refed value
 * @param ref Refed value
 */
export function $<T>(ref: Ref<T>) {
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
