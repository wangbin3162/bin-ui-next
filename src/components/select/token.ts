import type { InjectionKey } from 'vue'
import type { Emitter } from 'mitt'
import { Ref } from 'vue'

export interface SelectContext {
  props: {
    multiple?: boolean
    multipleLimit?: number
    valueKey?: string
    modelValue?: string | number | unknown[]
    popperClass?: string
    remote?: boolean
    autoComplete?: boolean
  }
  states: {
    vModelValue?: string | number | unknown[]
  }
  optionsChild: Ref<any[]>
  selectEmitter: Emitter
}

export interface SelectOptionProxy {
  value: string | number | Record<string, string>
  label: string | number
  disabled: boolean
}

export const selectGroupKey = 'SelectGroup'

export const selectKey = 'Select' as unknown as InjectionKey<SelectContext>

export const selectEvents = {
  queryChange: 'QueryChange',
  selected: 'Selected',
}
