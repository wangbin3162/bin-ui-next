<template>
  <div :class="['bin-cascader-panel', border && 'is-bordered']" @keydown="handleKeyDown">
    <b-cascader-menu
      v-for="(menu, index) in menus"
      :key="index"
      :ref="item => (menuList[index] = item)"
      :index="index"
      :nodes="menu"
    />
  </div>
</template>

<script>
import { computed, nextTick, onBeforeUpdate, onMounted, provide, reactive, ref, watch } from 'vue'
import BCascaderMenu from './menu.vue'
import Store from '../utils/store'
import Node from '../utils/node'
import { EVENT_CODE } from '../../../utils/aria'
import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from '../../../utils/constants'
import isServer from '../../../utils/isServer'
import scrollIntoView from '../../../utils/scroll-into-view'
import {
  arrayFlat,
  coerceTruthyValueToArray,
  deduplicate,
  isEmpty,
} from '../../../utils/util-helper'
import { useCascaderConfig } from '../utils/config'
import {
  checkNode,
  focusNode,
  getMenuIndex,
  getSibling,
  PANEL_INJECTION_KEY,
  sortByOriginalOrder,
} from '../utils/utils'
import { isEqual } from '../../../utils/util'

export default {
  name: 'BCascaderPanel',
  components: { BCascaderMenu },
  props: {
    modelValue: [Number, String, Array],
    options: {
      type: Array,
      default() {
        return []
      },
    },
    props: {
      type: Object,
      default: () => ({}),
    },
    border: {
      type: Boolean,
      default: true,
    },
    renderLabel: Function,
  },

  emits: [UPDATE_MODEL_EVENT, CHANGE_EVENT, 'close', 'expand-change'],

  setup(props, { emit, slots }) {
    let initialLoaded = true
    // for interrupt sync check status in lazy mode
    let manualChecked = false

    const config = useCascaderConfig(props)

    const store = ref(null)
    const menuList = ref([])
    const checkedValue = ref(null)
    const menus = ref([])
    const expandingNode = ref(null)
    const checkedNodes = ref([])

    const isHoverMenu = computed(() => config.value.expandTrigger === 'hover')
    const renderLabelFn = computed(() => props.renderLabel || slots.default)

    const initStore = () => {
      const { options } = props
      const cfg = config.value

      manualChecked = false
      store.value = new Store(options, cfg)
      menus.value = [store.value.getNodes()]

      if (cfg.lazy && isEmpty(props.options)) {
        initialLoaded = false
        lazyLoad(null, () => {
          initialLoaded = true
          syncCheckedValue(false, true)
        })
      } else {
        syncCheckedValue(false, true)
      }
    }

    const lazyLoad = (node, cb) => {
      const cfg = config.value
      node = node || new Node({}, cfg, null, true)
      node.loading = true

      const resolve = dataList => {
        const parent = node.root ? null : node
        dataList && store.value.appendNodes(dataList, parent)
        node.loading = false
        node.loaded = true
        cb && cb(dataList)
      }

      cfg.lazyLoad(node, resolve)
    }

    const expandNode = (node, silent) => {
      const { level } = node
      const newMenus = menus.value.slice(0, level)
      let newExpandingNode

      if (node.isLeaf) {
        newExpandingNode = node.pathNodes[level - 2]
      } else {
        newExpandingNode = node
        newMenus.push(node.children)
      }

      if (expandingNode.value?.uid !== newExpandingNode?.uid) {
        expandingNode.value = node
        menus.value = newMenus
        !silent && emit('expand-change', node?.pathValues || [])
      }
    }

    const handleCheckChange = (node, checked, emitClose = true) => {
      const { checkStrictly, multiple } = config.value
      const oldNode = checkedNodes.value[0]
      manualChecked = true

      !multiple && oldNode?.doCheck(false)
      node.doCheck(checked)
      calculateCheckedValue()
      emitClose && !multiple && !checkStrictly && emit('close')
    }

    const getFlattedNodes = leafOnly => {
      return store.value.getFlattedNodes(leafOnly)
    }

    const getCheckedNodes = leafOnly => {
      return getFlattedNodes(leafOnly).filter(node => node.checked !== false)
    }

    const clearCheckedNodes = () => {
      checkedNodes.value.forEach(node => node.doCheck(false))
      calculateCheckedValue()
    }

    const calculateCheckedValue = () => {
      const { checkStrictly, multiple } = config.value
      const oldNodes = checkedNodes.value
      const newNodes = getCheckedNodes(!checkStrictly)
      // ensure the original order
      const nodes = sortByOriginalOrder(oldNodes, newNodes)
      const values = nodes.map(node => node.valueByOption)
      checkedNodes.value = nodes
      checkedValue.value = multiple ? values : values[0] ?? null
    }

    const syncCheckedValue = (loaded = false, forced = false) => {
      const { modelValue } = props
      const { lazy, multiple, checkStrictly } = config.value
      const leafOnly = !checkStrictly
      if (!initialLoaded || manualChecked || (!forced && isEqual(modelValue, checkedValue.value)))
        return

      if (lazy && !loaded) {
        const values = deduplicate(arrayFlat(coerceTruthyValueToArray(modelValue)))
        const nodes = values
          .map(val => store.value.getNodeByValue(val))
          .filter(node => !!node && !node.loaded && !node.loading)

        if (nodes.length) {
          nodes.forEach(node => {
            lazyLoad(node, () => syncCheckedValue(false, forced))
          })
        } else {
          syncCheckedValue(true, forced)
        }
      } else {
        const values = multiple ? coerceTruthyValueToArray(modelValue) : [modelValue]
        const nodes = deduplicate(values.map(val => store.value.getNodeByValue(val, leafOnly)))
        syncMenuState(nodes, false)
        checkedValue.value = modelValue
      }
    }

    const syncMenuState = (newCheckedNodes, reserveExpandingState = true) => {
      const { checkStrictly } = config.value
      const oldNodes = checkedNodes.value
      const newNodes = newCheckedNodes.filter(node => !!node && (checkStrictly || node.isLeaf))
      const oldExpandingNode = store.value.getSameNode(expandingNode.value)
      const newExpandingNode = (reserveExpandingState && oldExpandingNode) || newNodes[0]

      if (newExpandingNode) {
        newExpandingNode.pathNodes.forEach(node => expandNode(node, true))
      } else {
        expandingNode.value = null
      }

      oldNodes.forEach(node => node.doCheck(false))
      newNodes.forEach(node => node.doCheck(true))

      checkedNodes.value = newNodes
      nextTick(scrollToExpandingNode)
    }

    const scrollToExpandingNode = () => {
      if (isServer) return

      menuList.value.forEach(menu => {
        const menuElement = menu?.$el
        if (menuElement) {
          const container = menuElement.querySelector('.bin-scrollbar__wrap')
          const activeNode =
            menuElement.querySelector('.bin-cascader-node.is-active') ||
            menuElement.querySelector('.bin-cascader-node.in-active-path')
          scrollIntoView(container, activeNode)
        }
      })
    }

    const handleKeyDown = e => {
      const target = e.target
      const { code } = e

      switch (code) {
        case EVENT_CODE.up:
        case EVENT_CODE.down:
          // eslint-disable-next-line no-case-declarations
          const distance = code === EVENT_CODE.up ? -1 : 1
          focusNode(getSibling(target, distance))
          break
        case EVENT_CODE.left:
          // eslint-disable-next-line no-case-declarations
          const preMenu = menuList.value[getMenuIndex(target) - 1]
          // eslint-disable-next-line no-case-declarations
          const expandedNode = preMenu?.$el.querySelector(
            '.bin-cascader-node[aria-expanded="true"]',
          )
          focusNode(expandedNode)
          break
        case EVENT_CODE.right:
          // eslint-disable-next-line no-case-declarations
          const nextMenu = menuList.value[getMenuIndex(target) + 1]
          // eslint-disable-next-line no-case-declarations
          const firstNode = nextMenu?.$el.querySelector('.bin-cascader-node[tabindex="-1"]')
          focusNode(firstNode)
          break
        case EVENT_CODE.enter:
          checkNode(target)
          break
        case EVENT_CODE.esc:
        case EVENT_CODE.tab:
          emit('close')
          break
      }
    }

    provide(
      PANEL_INJECTION_KEY,
      reactive({
        config,
        expandingNode,
        checkedNodes,
        isHoverMenu,
        renderLabelFn,
        lazyLoad,
        expandNode,
        handleCheckChange,
      }),
    )

    watch(
      [config, () => props.options],
      ([newConfig, newOptions], [oldConfig, oldOptions]) => {
        if (isEqual(newOptions, oldOptions)) return

        initStore()
      },
      { deep: true, immediate: true },
    )

    watch(
      () => props.modelValue,
      () => {
        manualChecked = false
        syncCheckedValue()
      },
    )

    watch(checkedValue, val => {
      if (!isEqual(val, props.modelValue)) {
        emit(UPDATE_MODEL_EVENT, val)
        emit(CHANGE_EVENT, val)
      }
    })

    onBeforeUpdate(() => (menuList.value = []))

    onMounted(() => !isEmpty(props.modelValue) && syncCheckedValue())

    return {
      menuList,
      menus,
      checkedNodes,
      expandingNode,
      handleKeyDown,
      handleCheckChange,
      getFlattedNodes,
      getCheckedNodes,
      clearCheckedNodes,
      calculateCheckedValue,
      scrollToExpandingNode,
    }
  },
}
</script>
