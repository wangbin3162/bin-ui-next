import Node from './node'
import { isEqual } from '../../utils/util'

const flatNodes = (nodes, leafOnly) => {
  return nodes.reduce((res, node) => {
    if (node.isLeaf) {
      res.push(node)
    } else {
      !leafOnly && res.push(node)
      res = res.concat(flatNodes(node.children, leafOnly))
    }
    return res
  }, [])
}

export default class Store {
  constructor(data, config) {
    this.config = config
    const nodes = (data || []).map(nodeData => new Node(nodeData, this.config))
    this.nodes = nodes
    this.allNodes = flatNodes(nodes, false)
    this.leafNodes = flatNodes(nodes, true)
  }

  getNodes() {
    return this.nodes
  }

  getFlattedNodes(leafOnly) {
    return leafOnly ? this.leafNodes : this.allNodes
  }

  appendNode(nodeData, parentNode) {
    const node = parentNode
      ? parentNode.appendChild(nodeData)
      : new Node(nodeData, this.config)

    if (!parentNode) this.nodes.push(node)

    this.allNodes.push(node)
    node.isLeaf && this.leafNodes.push(node)
  }

  appendNodes(nodeDataList, parentNode) {
    nodeDataList.forEach(nodeData => this.appendNode(nodeData, parentNode))
  }

  // when checkStrictly, leaf node first
  getNodeByValue(value, leafOnly = false) {
    if (!value && value !== 0) return null

    const nodes = this.getFlattedNodes(leafOnly)
      .filter(node => node.value === value || isEqual(node.pathValues, value))

    return nodes[0] || null
  }

  getSameNode(node) {
    if (!node) return null

    const nodes = this.getFlattedNodes(false)
      .filter(({ value, level }) => node.value === value && node.level === level)

    return nodes[0] || null
  }
}
