import { openBlock, createBlock, Comment } from 'vue'
import { PatchFlags } from '../../../../utils/vnode'

export default function renderArrow(showArrow) {
  return showArrow
    ? (openBlock(),
      createBlock(
        'div',
        {
          ref: 'arrowRef',
          class: 'bin-popper__arrow',
          'data-popper-arrow': '',
        },
        null,
        PatchFlags.NEED_PATCH,
      ))
    : (openBlock(), createBlock(Comment, null, ''))
}
