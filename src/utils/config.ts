export interface InstallOptions {
  zIndex: number
}

let $ELEMENT = {} as InstallOptions

let transferIndex = 0

function transferIncrease() {
  return ++transferIndex + $ELEMENT.zIndex
}

const setConfig = (option: InstallOptions): void => {
  $ELEMENT = option
}
const getConfig = (key: keyof InstallOptions): unknown => {
  return $ELEMENT[key]
}

export { transferIncrease, getConfig, setConfig }
