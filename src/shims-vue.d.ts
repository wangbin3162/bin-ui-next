/* eslint-disable no-unused-vars */
declare module '*.vue' {
  import { App, defineComponent } from 'vue'
  const component: ReturnType<typeof defineComponent> & {
    install(app: App): void
  }
  export default component
}

declare type CustomizedHTMLElement<T> = HTMLElement & T
