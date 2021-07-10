<template>
  <div
    ref="selectWrapper"
    v-click-outside:[popperPaneRef]="handleClose"
    class="bin-tree-select"
    @click.stop="toggleMenu"
  >
    <b-popper
      ref="popper"
      v-model:visible="visible"
      placement="bottom-start"
      :append-to-body="appendToBody"
      :popper-class="`bin-tree-select__popper ${popperClass||''}`"
      manual-mode
      theme="light"
      pure
      trigger="click"
      :stop-popper-mouse-event="false"
      :gpu-acceleration="false"
      :show-arrow="false"
      :offset="4"
      transition="zoom-in-top"
    >
      <template #trigger>
        <div class="select-trigger">
          <b-input
            ref="reference"
            v-model="selectedLabel"
            type="text"
            :placeholder="placeholder"
            :size="inputSize"
            :disabled="disabled"
            :readonly="true"
            :validate-event="false"
            :class="{ 'is-focus': visible }"
            @mouseenter="inputHovering = true"
            @mouseleave="inputHovering = false"
          >
            <template #suffix>
              <i v-show="!showClose" :class="['bin-select__caret', 'b-iconfont', 'b-icon-'+iconClass]"></i>
              <i
                v-if="showClose"
                :class="`bin-select__caret is-show-close b-iconfont b-icon-close-circle-fill`"
                @click.stop.prevent="handleClearClick"
              ></i>
            </template>
          </b-input>
        </div>
      </template>
      <template #default>
        <b-scrollbar
          v-show="visible"
          ref="scrollbar"
          wrap-class="bin-tree-select-panel__wrap"
        >
          <div class="bin-tree-select-inner" :style="{ minWidth: minWidth }">
            <b-tree
              :data="data"
              :show-checkbox="showCheckbox"
              :check-directly="checkDirectly"
              :check-strictly="checkStrictly"
              :lock-select="lockSelect"
              :load-data="loadData"
              :children-key="childrenKey"
              :default-expand="defaultExpand"
              :empty-text="emptyText"
              :filter-node-method="filterNodeMethod"
              :render="render"
              :title-key="titleKey"
              ref="treeRef"
              @select-change="handleSelect"
            >
            </b-tree>
          </div>
        </b-scrollbar>
      </template>
    </b-popper>
  </div>
</template>

<script>
import BPopper from '../popper'
import { ClickOutside } from '../../directives'
import BInput from '../input/input'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '../../utils/constants'
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import useForm from '../../hooks/useForm'
import BScrollbar from '../scrollbar/scrollbar'
import BTree from '../tree/tree'
import { addResizeListener, removeResizeListener } from '../../utils/resize-event'
import { throwWarn } from '../../utils/log'

export default {
  name: 'BTreeSelect',
  components: { BScrollbar, BInput, BPopper, BTree },
  directives: { ClickOutside },
  props: {
    modelValue: String, // value一般为选中的id
    valueKey: {
      type: String,
      default: 'id',
    }, // 实际保存值
    checked: {
      type: Array,
      default() {
        return []
      },
    },
    size: {
      type: String,
      validator: (value) => {
        return ['small', 'large', 'default', 'mini'].includes(value)
      },
      default: 'default',
    },
    disabled: Boolean,
    clearable: Boolean,
    placeholder: {
      type: String,
      default: '请选择',
    },
    appendToBody: {
      type: Boolean,
      default: true,
    },
    clearIcon: {
      type: String,
      default: 'close-circle-fill',
    },
    popperClass: String,
    // 树结构的props
    data: {
      type: Array,
      default: () => {
        return []
      },
    },
    showCheckbox: Boolean,
    checkStrictly: Boolean,
    checkDirectly: Boolean,
    emptyText: {
      type: String,
      default: '暂无数据',
    },
    titleKey: {
      type: String,
      default: 'title',
    },
    childrenKey: {
      type: String,
      default: 'children',
    },
    loadData: Function,
    render: Function,
    lockSelect: Boolean,
    defaultExpand: Boolean,
    filterNodeMethod: Function,
  },
  emits: [UPDATE_MODEL_EVENT, CHANGE_EVENT, 'clear', 'visible-change', 'focus', 'blur', 'update:checked'],
  setup(props, { emit }) {
    const popper = ref(null)
    const selectWrapper = ref(null)
    const input = ref(null)
    const treeRef = ref(null)
    const reference = ref(null)
    const selectedLabel = ref(props.modelValue) // 选中显示值
    const visible = ref(false)
    const inputHovering = ref(false)
    const query = ref('')
    const minWidth = ref('')

    const popperPaneRef = computed(() => popper.value?.popperRef)
    const showClose = computed(() => selectedLabel.value && inputHovering.value)
    const iconClass = computed(() => (visible.value ? 'down is-reverse' : 'down'))
    const inputSize = computed(() => props.size || BForm.size)
    const { BForm, formEmit } = useForm()

    function handleSelect(selected, node, flatState) {
      node.selected = true
      changeValue(node)
      visible.value = false
    }

    function toggleMenu() {
      visible.value = !visible.value
      if (visible.value === false) {
        emit('update:checked', treeRef.value.getCheckedNodes().map(v => v[props.valueKey]))
      }
    }

    function handleClose() {
      visible.value = false
      query.value = ''
      emit('update:checked', treeRef.value.getCheckedNodes().map(v => v[props.valueKey]))
    }

    function handleClearClick() {
      emit('clear')
      changeValue()
      visible.value = false

      treeRef.value && treeRef.value.collapseAll()
      treeRef.value && treeRef.value.unselectAll()
    }

    function changeValue(node) {
      if (!node) {
        selectedLabel.value = ''
        emit(UPDATE_MODEL_EVENT, '')
        emit(CHANGE_EVENT, '', null)
        formEmit('change', '')
        return
      }
      selectedLabel.value = node[props.titleKey] // 更新显示值
      const value = node[props.valueKey]
      emit(UPDATE_MODEL_EVENT, value)
      emit(CHANGE_EVENT, value, node)
      formEmit('change', value)
    }

    watch(() => props.modelValue, (val) => {
      if (val.length > 0) {
        nextTick(() => {
          // 获取全部拍平节点
          const flatState = treeRef.value.getFlatState()
          const matchItem = flatState.find(item => item.node[props.valueKey] === val)
          if (matchItem) {
            treeRef.value.setSelected([matchItem.nodeKey])
            // changeValue(matchItem.node)
          } else {
            throwWarn('BTreeSelect', ' There is no such data in the tree structure!')
          }
        })
      }
    }, { deep: true, immediate: true })

    watch(() => props.checked, (val) => {
      nextTick(() => {
        const checkedKeys = []
        const flatState = treeRef.value.getFlatState()
        val.forEach(id => {
          const matchItem = flatState.find(v => v.node[props.valueKey] === id)
          if (matchItem) {
            checkedKeys.push(matchItem.nodeKey)
          }
        })
        treeRef.value.uncheckAll()
        treeRef.value.setChecked(checkedKeys)
      })
    }, { deep: true, immediate: true })

    function updateMinWidth() {
      minWidth.value = selectWrapper.value?.getBoundingClientRect().width + 'px'
    }

    onMounted(() => {
      addResizeListener(selectWrapper.value, updateMinWidth)
    })

    onBeforeUnmount(() => {
      removeResizeListener(selectWrapper.value, updateMinWidth)
    })
    return {
      selectWrapper,
      reference,
      input,
      treeRef,
      popper,
      minWidth,
      query,
      popperPaneRef,
      selectedLabel,
      visible,
      inputHovering,
      showClose,
      iconClass,
      inputSize,
      toggleMenu,
      handleSelect,
      handleClose,
      handleClearClick,
    }
  },
}
</script>

<style scoped>

</style>
