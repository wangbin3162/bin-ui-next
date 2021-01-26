/* eslint-disable no-unused-vars */
import { App } from 'vue'

/** ElementUI component common definition */
export interface BinUIComponent {
  /** Install component into Vue */
  install: (app: App, ...options: any[]) => any
}

export type BinUIComponentSize = 'large' | 'default' | 'small' | 'mini'
