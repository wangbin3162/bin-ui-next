export const isLeaf = (el) => !el.getAttribute('aria-owns')

export const getSibling = (el, distance) => {
  const { parentNode } = el

  if (!parentNode) return null

  const siblings = parentNode.querySelectorAll('.bin-cascader-node[tabindex="-1"]')
  const index = Array.prototype.indexOf.call(siblings, el)
  return siblings[index + distance] || null
}

export const getMenuIndex = (el) => {
  if (!el) return 0
  const pieces = el.id.split('-')
  return Number(pieces[pieces.length - 2])
}

export const focusNode = el => {
  if (!el) return
  el.focus()
  !isLeaf(el) && el.click()
}

export const checkNode = el => {
  if (!el) return

  const input = el.querySelector('input')
  if (input) {
    input.click()
  } else if (isLeaf(el)) {
    el.click()
  }
}

export const sortByOriginalOrder = (oldNodes, newNodes) => {
  const newNodesCopy = newNodes.slice(0)
  const newIds = newNodesCopy.map(node => node.uid)
  const res = oldNodes.reduce((acc, item) => {
    const index = newIds.indexOf(item.uid)
    if (index > -1) {
      acc.push(item)
      newNodesCopy.splice(index, 1)
      newIds.splice(index, 1)
    }
    return acc
  }, [])

  res.push(...newNodesCopy)

  return res
}
