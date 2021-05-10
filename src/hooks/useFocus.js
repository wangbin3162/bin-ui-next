export default (el) => {
  return {
    focus: () => {
      el.value?.focus?.()
    },
  }
}
