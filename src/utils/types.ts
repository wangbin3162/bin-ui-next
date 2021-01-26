/* eslint-disable no-unused-vars */
import { App, PropType } from 'vue'

export type SFCWithInstall<T> = T & { install(app: App): void; }

export type ComponentSize = PropType<'large' | 'default' | 'small' | 'mini'>
