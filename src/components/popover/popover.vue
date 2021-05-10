<script>
import {
  createCommentVNode,
  createTextVNode,
  createVNode,
  Fragment,
  renderSlot,
  Teleport,
  toDisplayString,
  withDirectives,
} from 'vue'
import BPopper, { defaultProps, Theme } from '../popper'
import { renderArrow, renderPopper, renderTrigger } from '../popper'
import { ClickOutside } from '../../directives'
import { throwWarn } from '../../utils/log'
import { PatchFlags, renderBlock, renderIf } from '../../utils/vnode'
import usePopover, { HIDE_EVENT, SHOW_EVENT } from './usePopover'

const _hoist = { key: 0, class: 'bin-popover__title', role: 'title' }
const _content = { key: 1, class: 'bin-popover__body', role: 'body' }
export default {
  name: 'BPopover',
  components: {
    BPopper,
  },
  props: {
    ...defaultProps,
    content: {
      type: String,
    },
    trigger: {
      type: String,
      default: 'click',
    },
    title: {
      type: String,
    },
    transition: {
      type: String,
      default: 'fade-in-linear',
    },
    width: {
      type: [String, Number],
      default: 150,
    },
    appendToBody: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:visible', 'after-enter', 'after-leave', SHOW_EVENT, HIDE_EVENT],
  setup(props, ctx) {
    if (process.env.NODE_ENV !== 'production' && props.visible && !ctx.slots.reference) {
      throwWarn('BPopover', ' You cannot init popover without given reference')
    }
    return usePopover(props, ctx)
  },
  render() {
    const { $slots } = this
    const trigger = $slots.default ? $slots.default() : null

    const title = renderIf(this.title, 'div', _hoist, toDisplayString(this.title), PatchFlags.TEXT)

    const content = $slots.content ? renderSlot($slots, 'content', {},
      () => [createTextVNode(toDisplayString(this.content), PatchFlags.TEXT)])
      : renderIf(this.content, 'div', _content, toDisplayString(this.content), PatchFlags.TEXT)
    const {
      events,
      onAfterEnter,
      onAfterLeave,
      onPopperMouseEnter,
      onPopperMouseLeave,
      popperStyle,
      popperId,
      popperClass,
      showArrow,
      transition,
      visibility,
    } = this

    const kls = [
      this.content ? 'bin-popover--plain' : '',
      'bin-popover',
      popperClass,
    ].join(' ')

    let popover = renderPopper({
        theme: Theme.LIGHT,
        name: transition,
        popperClass: kls,
        popperStyle: popperStyle,
        popperId,
        visibility,
        onMouseEnter: onPopperMouseEnter,
        onMouseLeave: onPopperMouseLeave,
        onAfterEnter,
        onAfterLeave,
        stopPopperMouseEvent: false,
      }, [
        title,
        content,
        renderArrow(showArrow),
      ],
    )

    // when user uses popover directively, trigger will be null so that we only
    // render a popper window for displaying contents
    const _trigger = trigger ? renderTrigger(trigger, {
      ariaDescribedby: popperId,
      ref: 'triggerRef',
      ...events,
    }) : createCommentVNode('v-if', true)

    return renderBlock(Fragment, null, [
      this.trigger === 'click'
        ? withDirectives(_trigger, [[ClickOutside, this.hide]])
        : _trigger,
      createVNode(Teleport, {
        disabled: !this.appendToBody,
        to: 'body',
      }, [popover], PatchFlags.PROPS, ['disabled']),
    ])
  },
}
</script>
