import { computed } from 'vue'
import { NOOP } from '@vue/shared'

export const DefaultProps = {
  expandTrigger: 'click',
  multiple: false,
  checkStrictly: false, // whether all nodes can be selected
  emitPath: true, // wether to emit an array of all levels value in which node is located
  lazy: false,
  lazyLoad: NOOP,
  value: 'value',
  label: 'label',
  children: 'children',
  leaf: 'leaf',
  disabled: 'disabled',
  hoverThreshold: 500,
}

export const useCascaderConfig = (props) => {
  return computed(() => ({
    ...DefaultProps,
    ...props.props,
  }))
}
