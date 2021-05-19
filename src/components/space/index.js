import { renderSlot, createVNode, createTextVNode, isVNode } from 'vue'
import { PatchFlags, isFragment, isValidElementNode } from '../../utils/vnode'
import { isArray } from '@vue/shared'
import Item from './item.vue'
import { useSpace, defaultProps } from './useSpace'

const Space = {
  name: 'BSpace',
  props: defaultProps,
  setup(props) {
    return useSpace(props)
  },
  render(ctx) {
    const {
      classes,
      $slots,
      containerStyle,
      itemStyle,
      spacer,
      prefixCls,
    } = ctx

    const children = renderSlot($slots, 'default', { key: 0 }, () => [])
    // retrieve the children out via a simple for loop
    // the edge case here is that when users uses directives like <v-for>, <v-if>
    // we need to go one layer deeper

    if (children.children.length === 0) return null

    // loop the children, if current children is rendered via `renderList` or `<v-for>`
    if (isArray(children.children)) {
      let extractedChildren = []
      children.children.forEach((child, loopKey) => {
        if (isFragment(child)) {
          if (isArray(child.children)) {
            child.children.forEach((nested, key) => {
              extractedChildren.push(
                createVNode(
                  Item,
                  {
                    style: {
                      ...itemStyle,
                      marginRight: loopKey === children.children.length ? null : itemStyle.marginRight,
                    },
                    prefixCls,
                    key: `nested-${key}`,
                  },
                  {
                    default: () => [nested],
                  },
                  PatchFlags.PROPS | PatchFlags.STYLE,
                  ['style', 'prefixCls'],
                ),
              )
            })
          }
          // if the current child is valid vnode, then append this current vnode
          // to item as child node.
        } else if (isValidElementNode(child)) {
          extractedChildren.push(
            createVNode(
              Item,
              {
                style: {
                  ...itemStyle,
                  marginRight: loopKey === children.children.length - 1 ? null : itemStyle.marginRight,
                },
                prefixCls,
                key: `LoopKey${loopKey}`,
              },
              {
                default: () => [child],
              },
              PatchFlags.PROPS | PatchFlags.STYLE,
              ['style', 'prefixCls'],
            ),
          )
        }
      })

      if (spacer) {
        // track the current rendering index, when encounters the last element
        // then no need to add a spacer after it.
        const len = extractedChildren.length - 1
        extractedChildren = extractedChildren.reduce((acc, child, idx) => {
          return idx === len
            ? [...acc, child]
            : [...acc,
              child,
              createVNode(
                'span',
                {
                  style: [itemStyle, 'width: 100%'], key: idx,
                },
                [
                  isVNode(spacer)
                    ? spacer
                    : createTextVNode(spacer, PatchFlags.TEXT),
                ],
                PatchFlags.STYLE,
              ),
            ]
        }, [])
      }

      // spacer container.
      return createVNode(
        'div',
        {
          class: classes,
          style: containerStyle,
        },
        extractedChildren,
        PatchFlags.STYLE | PatchFlags.CLASS,
      )
    }

    return children.children
  },
}

Space.install = (app) => {
  app.component(Space.name, Space)
}

export default Space
