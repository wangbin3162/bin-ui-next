<script>
import mitt from 'mitt'
import {
  computed,
  ref,
  provide,
  inject,
  getCurrentInstance,
  reactive,
  onMounted,
  onBeforeMount,
  onBeforeUnmount,
  withDirectives,
  Fragment,
  Transition,
  vShow,
  h,
} from 'vue'
import BCollapseTransition from '../collapse-transition'
import useMenu from './useMenu'
import BPopper from '../popper'

export default {
  name: 'BSubmenu',
  componentName: 'BSubmenu',
  props: {
    index: {
      type: String,
      required: true,
    },
    showTimeout: {
      type: Number,
      default: 300,
    },
    hideTimeout: {
      type: Number,
      default: 300,
    },
    disabled: Boolean,
    popperAppendToBody: {
      type: Boolean,
      default: undefined,
    },
  },
  setup(props) {
    const data = reactive({
      popperJS: null,
      timeout: null,
      items: {},
      submenus: {},
      currentPlacement: '',
      mouseInChild: false,
      opened: false,
    })
    const verticalTitleRef = ref(null)
    const popperVnode = ref(null)

    // instance
    const instance = getCurrentInstance()
    const { paddingStyle, indexPath, parentMenu } = useMenu(
      instance,
      props.index,
    )

    // inject
    const {
      openedMenus,
      isMenuPopup,
      hoverBackground: rootHoverBackground,
      methods: rootMethods,
      props: rootProps,
      methods: { closeMenu },
      rootMenuOn,
      rootMenuEmit,
    } = inject('rootMenu')

    const {
      addSubMenu: parentAddSubmenu,
      removeSubMenu: parentRemoveSubmenu,
      handleMouseleave: parentHandleMouseleave,
    } = inject(`subMenu:${parentMenu.value.uid}`)

    // computed
    const submenuTitleIcon = computed(() => {
      return (mode.value === 'horizontal' && isFirstLevel.value) ||
      (mode.value === 'vertical' && !rootProps.collapse)
        ? 'b-icon-down'
        : 'b-icon-right'
    })
    const isFirstLevel = computed(() => {
      let isFirstLevel = true
      let parent = instance.parent
      while (parent && parent.type.name !== 'BMenu') {
        if (['BSubmenu', 'BMenuItemGroup'].includes(parent.type.name)) {
          isFirstLevel = false
          break
        } else {
          parent = parent.parent
        }
      }
      return isFirstLevel
    })
    const appendToBody = computed(() => {
      return props.popperAppendToBody === undefined
        ? isFirstLevel.value
        : Boolean(props.popperAppendToBody)
    })
    const menuTransitionName = computed(() => {
      return rootProps.collapse ? 'zoom-in-left' : 'zoom-in-top'
    })
    const opened = computed(() => {
      return openedMenus.value.includes(props.index)
    })
    const active = computed(() => {
      let isActive = false
      const submenus = data.submenus
      const items = data.items

      Object.keys(items).forEach((index) => {
        if (items[index].active) {
          isActive = true
        }
      })

      Object.keys(submenus).forEach((index) => {
        if (submenus[index].active) {
          isActive = true
        }
      })

      return isActive
    })

    const backgroundColor = computed(() => {
      return rootProps.backgroundColor || ''
    })
    const activeTextColor = computed(() => {
      return rootProps.activeTextColor || ''
    })
    const textColor = computed(() => {
      return rootProps.textColor || ''
    })
    const mode = computed(() => {
      return rootProps.mode
    })
    const titleStyle = computed(() => {
      if (mode.value !== 'horizontal') {
        return {
          color: textColor.value,
        }
      }
      return {
        borderBottomColor: active.value
          ? rootProps.activeTextColor
            ? activeTextColor.value
            : ''
          : 'transparent',
        color: active.value ? activeTextColor.value : textColor.value,
      }
    })

    // emitter
    const subMenuEmitter = mitt()

    const doDestroy = () => {
      popperVnode.value?.doDestroy()
    }

    // methods

    const handleCollapseToggle = (value) => {
      if (value) {
        updatePlacement()
      } else {
        doDestroy()
      }
    }
    const addItem = (item) => {
      data.items[item.index] = item
    }
    const removeItem = (item) => {
      delete data.items[item.index]
    }
    const addSubMenu = (item) => {
      data.submenus[item.index] = item
    }
    const removeSubMenu = (item) => {
      delete data.submenus[item.index]
    }
    const handleClick = () => {
      const disabled = props.disabled
      if (
        (rootProps.menuTrigger === 'hover' &&
          rootProps.mode === 'horizontal') ||
        (rootProps.collapse && rootProps.mode === 'vertical') ||
        disabled
      ) {
        return
      }
      rootMenuEmit('submenu:submenu-click', { index: props.index, indexPath })
    }
    const handleMouseenter = (event, showTimeout = props.showTimeout) => {
      if (
        !('ActiveXObject' in window) &&
        event.type === 'focus' &&
        !event.relatedTarget
      ) {
        return
      }
      const disabled = props.disabled
      if (
        (rootProps.menuTrigger === 'click' &&
          rootProps.mode === 'horizontal') ||
        (!rootProps.collapse && rootProps.mode === 'vertical') ||
        disabled
      ) {
        return
      }
      subMenuEmitter.emit('submenu:mouse-enter-child')
      clearTimeout(data.timeout)
      data.timeout = setTimeout(() => {
        rootMethods.openMenu(props.index, indexPath)
      }, showTimeout)

      if (appendToBody.value) {
        parentMenu.value.vnode.el.dispatchEvent(new MouseEvent('mouseenter'))
      }
    }
    const handleMouseleave = (deepDispatch = false) => {
      if (
        (rootProps.menuTrigger === 'click' &&
          rootProps.mode === 'horizontal') ||
        (!rootProps.collapse && rootProps.mode === 'vertical')
      ) {
        return
      }
      subMenuEmitter.emit('submenu:mouse-leave-child')
      clearTimeout(data.timeout)
      data.timeout = setTimeout(() => {
        !data.mouseInChild && closeMenu(props.index)
      }, props.hideTimeout)

      if (appendToBody.value && deepDispatch) {
        if (instance.parent.type.name === 'BSubmenu') {
          parentHandleMouseleave(true)
        }
      }
    }
    const handleTitleMouseenter = () => {
      if (mode.value === 'horizontal' && !rootProps.backgroundColor) return
      const title = popperVnode.value?.triggerRef || verticalTitleRef.value
      title && (title.style.backgroundColor = rootHoverBackground.value)
    }
    const handleTitleMouseleave = () => {
      if (mode.value === 'horizontal' && !rootProps.backgroundColor) return
      const title = popperVnode.value?.triggerRef || verticalTitleRef.value
      title && (title.style.backgroundColor = rootProps.backgroundColor || '')
    }
    const updatePlacement = () => {
      data.currentPlacement =
        mode.value === 'horizontal' && isFirstLevel.value
          ? 'bottom-start'
          : 'right-start'
    }

    // provide
    provide(`subMenu:${instance.uid}`, {
      addSubMenu,
      removeSubMenu,
      handleMouseleave,
    })

    // lifecycle
    onBeforeMount(() => {
      rootMenuOn('rootMenu:toggle-collapse', (val) => {
        handleCollapseToggle(val)
      })
      subMenuEmitter.on('submenu:mouse-enter-child', () => {
        data.mouseInChild = true
        clearTimeout(data.timeout)
      })
      subMenuEmitter.on('submenu:mouse-leave-child', () => {
        data.mouseInChild = false
        clearTimeout(data.timeout)
      })
    })

    onMounted(() => {
      rootMethods.addSubMenu({
        index: props.index,
        indexPath,
        active,
      })
      parentAddSubmenu({
        index: props.index,
        indexPath,
        active,
      })
      updatePlacement()
    })
    onBeforeUnmount(() => {
      parentRemoveSubmenu({
        index: props.index,
        indexPath,
        active,
      })
      rootMethods.removeSubMenu({
        index: props.index,
        indexPath,
        active,
      })
    })

    return {
      data,
      props,
      mode,
      active,
      isMenuPopup,
      opened,
      paddingStyle,
      titleStyle,
      backgroundColor,
      rootProps,
      menuTransitionName,
      submenuTitleIcon,
      appendToBody,

      handleClick,
      handleMouseenter,
      handleMouseleave,
      handleTitleMouseenter,
      handleTitleMouseleave,

      addItem,
      removeItem,
      addSubMenu,
      removeSubMenu,

      popperVnode,
      verticalTitleRef,
    }
  },
  render() {
    const titleTag = [
      this.$slots.title?.(),
      h(
        'i',
        {
          class: ['bin-submenu__icon-arrow','b-iconfont', this.submenuTitleIcon],
        },
        null,
      ),
    ]
    const ulStyle = {
      backgroundColor: this.rootProps.backgroundColor || '',
    }
    const child = this.isMenuPopup
      ? h(
        BPopper,
        {
          ref: 'popperVNode',
          manualMode: true,
          visible: this.opened,
          'onUpdate:visible': (val) => (this.opened = val),
          theme: 'light',
          pure: true,
          offset: 6,
          boundariesPadding: 0,
          showArrow: false,
          popperClass: 'bin-submenu-popper',
          placement: this.data.currentPlacement,
          appendToBody: this.appendToBody,
        },
        {
          default: () =>
            h(
              Transition,
              {
                name: this.menuTransitionName,
              },
              {
                default: () =>
                  withDirectives(
                    h(
                      'div',
                      {
                        ref: 'menu',
                        class: [`bin-menu--${this.mode}`, 'bin-submenu-popper'],
                        onMouseenter: ($event) =>
                          this.handleMouseenter($event, 100),
                        onMouseleave: () => this.handleMouseleave(true),
                        onFocus: ($event) =>
                          this.handleMouseenter($event, 100),
                      },
                      [
                        h(
                          'ul',
                          {
                            class: [
                              'bin-menu bin-menu--popup',
                              `bin-menu--popup-${this.data.currentPlacement}`,
                            ],
                            style: ulStyle,
                          },
                          [this.$slots.default?.()],
                        ),
                      ],
                    ),
                    [[vShow, this.opened]],
                  ),
              },
            ),
          trigger: () =>
            h(
              'div',
              {
                class: 'bin-submenu__title',
                style: [
                  this.paddingStyle,
                  this.titleStyle,
                  { backgroundColor: this.backgroundColor },
                ],
                onClick: this.handleClick,
                onMouseenter: this.handleTitleMouseenter,
                onMouseleave: this.handleTitleMouseleave,
              },
              titleTag,
            ),
        },
      )
      : h(Fragment, {}, [
        h(
          'div',
          {
            class: 'bin-submenu__title',
            style: [
              this.paddingStyle,
              this.titleStyle,
              { backgroundColor: this.backgroundColor },
            ],
            ref: 'verticalTitleRef',
            onClick: this.handleClick,
            onMouseenter: this.handleTitleMouseenter,
            onMouseleave: this.handleTitleMouseleave,
          },
          titleTag,
        ),
        h(
          BCollapseTransition,
          {},
          {
            default: () =>
              withDirectives(
                h(
                  'ul',
                  {
                    role: 'menu',
                    class: 'bin-menu bin-menu--inline',
                    style: ulStyle,
                  },
                  [this.$slots.default?.()],
                ),
                [[vShow, this.opened]],
              ),
          },
        ),
      ])

    return h(
      'li',
      {
        class: [
          'bin-submenu',
          {
            'is-active': this.active,
            'is-opened': this.opened,
            'is-disabled': this.disabled,
          },
        ],
        role: 'menuitem',
        ariaHaspopup: true,
        ariaExpanded: this.opened,
        onMouseenter: this.handleMouseenter,
        onMouseleave: () => this.handleMouseleave(true),
        onFocus: this.handleMouseenter,
      },
      [child],
    )
  },
}
</script>
