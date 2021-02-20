import type { InjectionKey } from 'vue'

type IModelType = boolean | string | number
type ComponentSize = 'large' | 'default' | 'small' | 'mini'

export interface RadioGroupContext {
  name: 'BRadioGroup'
  modelValue: IModelType
  fill: string
  textColor: string
  disabled: boolean
  size: ComponentSize
  radioGroupSize: ComponentSize
  // eslint-disable-next-line no-unused-vars
  changeEvent: (val: IModelType) => void
}

const radioGroupKey: InjectionKey<RadioGroupContext> = 'RadioGroup' as any

export default radioGroupKey
