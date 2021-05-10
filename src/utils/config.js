let $ELEMENT = {}

let transferIndex = 0

function transferIncrease() {
  return ++transferIndex + $ELEMENT.zIndex
}

const setConfig = (option) => {
  $ELEMENT = option
}
const getConfig = (key) => {
  return $ELEMENT[key]
}

export { transferIncrease, getConfig, setConfig }
