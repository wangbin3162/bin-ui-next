<template>
  <b-popper
    ref="popper"
    v-model:visible="visible"
    :placement="placement"
    theme="light"
    pure
    manual-mode
    trigger="click"
    popper-class="bin-select__popper"
    :append-to-body="appendToBody"
    transition="zoom-in-top"
    :offset="5"
    :stop-popper-mouse-event="false"
    :gpu-acceleration="false"
    :show-arrow="false">div
  </b-popper>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { ClickOutside } from '../../directives'
import BPopper from '../popper'

const prefixCls = 'bin-cascader'
const selectPrefixCls = 'bin-select'

export default defineComponent({
  name: 'BCascader',
  components: { BPopper },
  directives: { ClickOutside },
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      },
    },
    modelValue: {
      type: Array,
      default: () => {
        return []
      },
    },
    disabled: Boolean,
    clearable: {
      type: Boolean,
      default: true,
    },
    placeholder: {
      type: String,
      default: '请选择',
    },
    size: {
      validator: (value: string) => ['small', 'large', 'default', 'mini'].includes(value),
      default: 'default',
    },
    trigger: {
      validator: (value: string) => ['click', 'hover'].includes(value),
      default: 'click',
    },
    changeOnSelect: Boolean,
    renderFormat: {
      type: Function,
      default: (label) => label.join(' / '),
    },
    loadData: Function,
    filterable: Boolean,
    notFoundText: {
      type: String,
      default: '暂无匹配数据',
    },
    appendToBody: Boolean,
    name: String,
    elementId: String,
  },
  setup(props) {
    const data = reactive({
      prefixCls,
      selectPrefixCls,
      visible: false,
      selected: [],
      tmpSelected: [],
      updatingValue: false, // to fix set value in changeOnSelect type
      currentValue: props.modelValue,
      query: '',
      validDataStr: '',
      isLoadedChildren: false,
    })
    return {
      ...toRefs(data),
    }
  },
})
</script>
