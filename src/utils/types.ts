/* eslint-disable no-unused-vars */
import { App, PropType } from 'vue'

export type SFCWithInstall<T> = T & { install(app: App): void; }

export type ComponentSize = PropType<'large' | 'default' | 'small' | 'mini'>

export type AnyFunction<T> = (...args: any[]) => T

export type PartialReturnType<T extends (...args: unknown[]) => unknown> = Partial<ReturnType<T>>
