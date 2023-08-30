// 配置注入器的props
export const configProviderProps = {
  // 是否是抽象的
  abstract: {
    type: Boolean,
  },
  tag: {
    type: String,
    default: 'div',
  },
  // 是否禁用 inline css 主题变量 如果不需要更改主题变量theme
  inlineThemeDisabled: {
    type: Boolean,
  },
  // 语言包
  locale: {
    type: String,
    default: 'zh-CN',
  },
  // 主题名称
  themeName: {
    type: String,
    validate: val => ['dark'].includes(val),
  },
  // 主题样式对象,这里可以存储js变量
  theme: {
    type: Object,
  },
}
