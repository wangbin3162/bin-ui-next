import {
  ComponentInternalInstance,
  ComputedRef,
  Ref,
} from 'vue'

type Nullable<T> = T | null;

export interface IElDropdownInstance {
  instance?: ComponentInternalInstance
  visible?: Ref<boolean>
  handleClick?: () => void
  // eslint-disable-next-line no-unused-vars
  commandHandler?: (...arg) => void
  show?: () => void
  hide?: () => void
  trigger?: ComputedRef<string>
  hideOnClick?: ComputedRef<boolean>
  triggerElm?: ComputedRef<Nullable<HTMLButtonElement>>
}
