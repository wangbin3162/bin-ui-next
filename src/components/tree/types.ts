export type RootTreeType = {
  // eslint-disable-next-line no-unused-vars
  loadData: (item, callback) => void
  showCheckbox: boolean
  checkDirectly: boolean
  flatState: any[]
  // eslint-disable-next-line no-unused-vars
  handleToggle: (node) => void
  // eslint-disable-next-line no-unused-vars
  handleSelect: (nodeKey) => void
  // eslint-disable-next-line no-unused-vars
  handleCheck: ({ checked, nodeKey }) => void
  updateTreeState: () => void
}

export type DataProp = {
  title?: string
  expand?: boolean
  disabled?: boolean
  selected?: boolean
  checked?: boolean
  visible?: boolean
  loading?: boolean
  isLeaf?: boolean
  disableCheckbox?: boolean
  children?: DataProp[]
}
