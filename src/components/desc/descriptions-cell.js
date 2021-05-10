import { computed, h, inject } from 'vue'

export default {
  name: 'BDescCell',
  props: {
    cell: {
      type: Object,
    },
    tag: {
      type: String,
    },
    type: {
      type: String,
    },
  },
  setup(props) {
    const descriptions = inject('BDesc', {})

    const label = computed(() => props.cell?.children?.label?.() || props.cell?.props?.label)
    const content = computed(() => props.cell?.children?.default?.())
    const span = computed(() => props.cell?.props?.span || 1)

    return {
      descriptions,
      label: label,
      content: content,
      span: span,
    }
  },
  render() {
    switch (this.type) {
      case 'label':
        return h(this.tag, {
          class: ['bin-desc__label', { 'is-bordered-label': this.descriptions.border }],
          colSpan: this.descriptions.direction === 'vertical' ? this.span : 1,
        }, this.label)
      case 'content':
        return h(this.tag, {
          class: 'bin-desc__content',
          colSpan: this.descriptions.direction === 'vertical' ? this.span : this.span * 2 - 1,
        }, this.content)
      default:
        return h('td', {
          colSpan: this.span,
        }, [
          h('span', {
            class: ['bin-desc__label', { 'is-bordered-label': this.descriptions.border }],
          }, this.label),
          h('span', {
            class: 'bin-desc__content',
          }, this.content)])
    }
  },
}
