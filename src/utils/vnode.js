import { Fragment, Text, Comment, createBlock, openBlock, createCommentVNode } from 'vue'

const TEMPLATE = 'template'

export const PatchFlags = {
  TEXT: 1,
  CLASS: 2,
  STYLE: 4,
  PROPS: 8,
  FULL_PROPS: 16,
  HYDRATE_EVENTS: 32,
  STABLE_FRAGMENT: 64,
  KEYED_FRAGMENT: 128,
  UNKEYED_FRAGMENT: 256,
  NEED_PATCH: 512,
  DYNAMIC_SLOTS: 1024,
  HOISTED: -1,
  BAIL: -2,
}

export const isFragment = (node) => node.type === Fragment

export const isText = (node) => node.type === Text

export const isComment = (node) => node.type === Comment

export const isTemplate = (node) => node.type === TEMPLATE

/**
 * get a valid child node (not fragment nor comment)
 * @param node {VNode} node to be searched
 * @param depth {number} depth to be searched
 */
function getChildren(node, depth) {
  if (isComment(node)) return
  if (isFragment(node) || isTemplate(node)) {
    return depth > 0
      ? getFirstValidNode(node.children, depth - 1)
      : undefined
  }
  return node
}

/**
 * determine if the element is a valid element type rather than fragments and comment e.g. <template> v-if
 * @param node {VNode} node to be tested
 */
export const isValidElementNode = (node) =>
  !(isFragment(node) || isComment(node))

export const getFirstValidNode = (nodes, maxDepth = 3) => {
  if (Array.isArray(nodes)) {
    return getChildren(nodes[0], maxDepth)
  } else {
    return getChildren(nodes, maxDepth)
  }
}

export function renderIf(condition, node, props, children, patchFlag, patchProps) {
  return (
    condition
      ? renderBlock(node, props, children, patchFlag, patchProps)
      : createCommentVNode('v-if', true)
  )
}

export function renderBlock(node, props, children, patchFlag, patchProps) {
  return (openBlock(), createBlock(node, props, children, patchFlag, patchProps))
}
