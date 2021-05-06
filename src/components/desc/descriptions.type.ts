import { InjectionKey, PropType } from 'vue'

type ComponentSize = 'large' | 'default' | 'small' | 'mini'

interface IDescriptionsInject {
  border: boolean
  column: number
  direction: PropType<'horizontal' | 'vertical'>
  size: PropType<ComponentSize>
  title: string
  extra: string
}

const DescKey: InjectionKey<IDescriptionsInject> = 'BDesc' as any

export {
  IDescriptionsInject,
  DescKey,
}
