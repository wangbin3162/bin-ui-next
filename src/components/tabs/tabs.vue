<template>
  <div class="bin-tabs-wrapper" :class="[type,{'closable':closable}]" ref="rootRef">
    <scroll-pane class="nav-wrapper" ref="scrollPaneRef">
      <div class="tab-list">
        <!--下标-->
        <div v-if="type==='default'" class="tabs-active-bar" :style="activeBarStyle"></div>
        <span v-for="(tab,index) in data" :key="tab.key || 'tab-'+index"
              class="tab-item" :id="tab.key"
              :class="[{'width-icon':tab.icon},{'no-close':tab.noClose},{'active':tab.key===modelValue}]"
              @click.stop="handleSelectTab(tab)"
              @contextmenu.stop.prevent="openMenu(tab,$event)">
        <i v-if="tab.icon" class="custom-icon" :class="['b-iconfont',`b-icon-${tab.icon}`]"></i>
        {{ tab.title }}
        <i v-if="type!=='default'&& closable && !tab.noClose" class="b-iconfont b-icon-close"
           @click.prevent.stop="closeSelectedTab(tab)"></i>
      </span>
      </div>
    </scroll-pane>
    <template v-if="contextMenu">
      <transition name="zoom-in-top">
        <ul class="contextmenu" v-show="visible" :style="{left:left+'px',top:top+'px'}">
          <slot name="menu">
            <li>自定义插入li标签</li>
          </slot>
        </ul>
      </transition>
    </template>
  </div>
</template>

<script>
import { nextTick, onBeforeUnmount, onMounted, ref, reactive, toRefs, watch } from 'vue'
import ScrollPane from './scroll-pane.vue'
import { throttle, deepCopy } from '../../utils/util'
import { on, off } from '../../utils/dom'
import { addResizeListener, removeResizeListener } from '../../utils/resize-event'

export default {
  name: 'BTabs',
  components: { ScrollPane },
  props: {
    modelValue: String,
    data: {
      type: Array,
      required: true,
    },
    type: {
      validator: (value) => {
        return ['default', 'card', 'tag'].includes(value)
      },
      default: 'default',
    },
    closable: Boolean,
    contextMenu: Boolean,
  },
  emits: ['update:modelValue', 'change', 'tab-close', 'tab-select'],
  setup(props, { emit }) {
    const rootRef = ref(null)
    const scrollPaneRef = ref(null)
    const data = reactive({
      visible: false, // 选中面板弹出
      top: 0, // 选中面板top
      left: 0, // 选中面板left
      selectedTag: {}, // 选中的tag
      activeBarStyle: {},
    })

    // 计算导航条样式属性
    const calcBar = () => {
      if (props.data.length === 0) return
      let style = {
        width: '',
        transform: '',
        msTransform: '',
        webkitTransform: '',
      }
      let width = 0
      let offset = 0
      // 获取选中的el的宽度
      props.data.every(tab => {
        let $el = rootRef?.value.querySelector(`#${tab.key}`)
        if (!$el) return false
        let isActive = $el.classList.contains('active')
        if (!isActive) {
          offset += $el['clientWidth']
          return true
        } else {
          width = $el['clientWidth']
          return false
        }
      })
      const transform = `translateX(${offset}px)`
      style.width = `${width}px`
      style.transform = transform
      style.msTransform = transform
      style.webkitTransform = transform
      data.activeBarStyle = style
    }
    // 计算滚动宽度
    const calcScrollWidth = () => {
      scrollPaneRef?.value.calcWidth()
    }

    // 移动到当前的tag
    const moveToCurrentTab = () => {
      nextTick(() => {
        if (props.data.length === 0) return
        let $target = rootRef?.value.querySelector(`#${props.modelValue}`)
        scrollPaneRef?.value.moveToTarget($target)
      })
    }
    // 更新选中active
    const emitInput = () => {
      emit('update:modelValue', data.selectedTag.key)
      emit('change', data.selectedTag)
    }
    // 选择当前tab
    const handleSelectTab = (tab) => {
      data.selectedTag = { ...tab }
      emitInput()
      nextTick(() => {
          // 计算bar位置
          calcBar()
        },
      )
    }

    // 移动焦点至后一个view
    const toLastView = (visitedViews, view) => {
      data.selectedTag = { key: '' }
      const currentIndex = visitedViews.findIndex(t => t.key === view.key)
      // 前后的索引缓存
      let prev = currentIndex - 1
      let next = currentIndex + 1
      // 如果下一个索引小于数组长度
      if (next < visitedViews.length) {
        data.selectedTag = { ...visitedViews[next] }
      } else if (next === visitedViews.length) {
        // 如果当前关闭的是最后一个tag，则判断其前一个索引是否存在，如存在则跳至前一个
        if (prev >= 0) {
          data.selectedTag = { ...visitedViews[prev] }
        }
      }
      emitInput()
    }
    // 关闭当前的tab页签
    const closeSelectedTab = (tab) => {
      // 缓存tabs
      let visitedViews = deepCopy(props.data)
      if (tab.key === props.modelValue) {
        toLastView(visitedViews, tab)
      }
      emit('tab-close', tab)
    }   // 打开右键菜单选择
    const openMenu = (tab, e) => {
      if (props.contextMenu) {
        data.visible = true
        data.selectedTag = tab
        data.left = e.clientX
        data.top = e.clientY
        emit('tab-select', tab)
      }
    }
    const closeMenu = () => {
      data.visible = false
    }
    const calcEvent = throttle(calcScrollWidth, 10)
    onMounted(() => {
      calcBar()
      addResizeListener(rootRef.value, calcEvent)
      on(window, 'resize', calcEvent)
      nextTick(() => {
        calcScrollWidth()
      })
    })
    onBeforeUnmount(() => {
      removeResizeListener(rootRef.value, calcEvent)
      off(window, 'resize', calcEvent)
    })
    watch(
      () => props.data,
      () => {
        nextTick(() => {
          calcScrollWidth()
        })
      },
    )
    watch(
      () => data.visible,
      (val) => {
        if (val) {
          document.body.addEventListener('click', closeMenu)
        } else {
          document.body.removeEventListener('click', closeMenu)
        }
      },
    )
    watch(
      () => props.modelValue,
      () => {
        moveToCurrentTab()
      },
    )
    return {
      rootRef,
      scrollPaneRef,
      ...toRefs(data),
      handleSelectTab,
      moveToCurrentTab,
      calcScrollWidth,
      openMenu,
      closeMenu,
      closeSelectedTab,
    }
  },
}
</script>
