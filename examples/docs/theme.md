## 定制主题

Bin UI Next 提供了一套默认的主题变量，并在一定程度上可以定制，已满足业务和项目上的多样化视觉需求。

为了实现更加通用的可定制化的主题设置，现组件库默认采用css变量方式替换原有的预处理主题机制，具体参考覆盖如下。

### 基础用法

以button为例，通过设置覆盖变量来进行主题定制

::: demo

```html

<template>
  <div
      style="
      --bin-color-primary: #722ed1;
      --bin-color-primary-active: #6729bc; 
      --bin-color-primary-light1: #8e58da;
      --bin-color-primary-light3: #c7abed;
      --bin-color-primary-light5: #f1eafa;
      --bin-color-success: #13c2c2;
      --bin-color-success-active: #11afaf;
      --bin-color-success-light1: #42cece;
      --bin-color-success-light3: #a1e7e7;
      --bin-color-success-light5: #e7f9f9;
      --bin-color-warning: #fa541c;
      --bin-color-warning-active: #e14c19;
      --bin-color-warning-light1: #fb7649;
      --bin-color-warning-light3: #fdbba4;
      --bin-color-warning-light5: #ffeee8;
      --bin-color-danger: #eb2f96;
      --bin-color-danger-active: #d42a87;
      --bin-color-danger-light1: #ef59ab;
      --bin-color-danger-light3: #f7acd5;
      --bin-color-danger-light5: #fdeaf5;"
  >
    <b-divider align="left">[default]默认按钮</b-divider>
    <div class="demo-button">
      <b-button type="primary">Primary</b-button>
      <b-button type="success">Success</b-button>
      <b-button type="warning">Warning</b-button>
      <b-button type="danger">Danger</b-button>
    </div>
    <b-divider align="left">[plain]简约按钮</b-divider>
    <div class="demo-button">
      <b-button type="primary" plain>Primary</b-button>
      <b-button type="success" plain>Success</b-button>
      <b-button type="warning" plain>Warning</b-button>
      <b-button type="danger" plain>Danger</b-button>
    </div>
    <b-divider align="left">[round]圆角按钮</b-divider>
    <div class="demo-button">
      <b-button type="primary" round>Primary</b-button>
      <b-button type="success" round>Success</b-button>
      <b-button type="warning" round>Warning</b-button>
      <b-button type="danger" round>Danger</b-button>
    </div>
    <b-divider align="left">[dashed]虚线按钮</b-divider>
    <div class="demo-button">
      <b-button type="primary" dashed>Primary</b-button>
      <b-button type="success" dashed>Success</b-button>
      <b-button type="warning" dashed>Warning</b-button>
      <b-button type="danger" dashed>Danger</b-button>
    </div>
  </div>
</template>
```

:::

### 变量列表

通过这种通用的主题解决方案，可以更加灵活的配置不同的主题颜色及配色，让组件更加灵活。

```css
:root {
  /* primary-color */
  --bin-color-primary: #1089ff;
  --bin-color-primary-light1: #40a1ff;
  --bin-color-primary-light2: #70b8ff;
  --bin-color-primary-light3: #9fd0ff;
  --bin-color-primary-light4: #cfe7ff;
  --bin-color-primary-light5: #e7f3ff;
  --bin-color-primary-light6: #f3f9ff;
  --bin-color-primary-active: #0e7be6;
  /* success-color */
  --bin-color-success: #52c41a;
  --bin-color-success-light1: #75d048;
  --bin-color-success-light2: #97dc76;
  --bin-color-success-light3: #bae7a3;
  --bin-color-success-light4: #dcf3d1;
  --bin-color-success-light5: #eef9e8;
  --bin-color-success-light6: #f6fcf4;
  --bin-color-success-active: #4ab017;
  /* info-color */
  --bin-color-info: #35495e;
  --bin-color-info-light1: #5d6d7e;
  --bin-color-info-light2: #86929e;
  --bin-color-info-light3: #aeb6bf;
  --bin-color-info-light4: #d7dbdf;
  --bin-color-info-light5: #ebedef;
  --bin-color-info-light6: #f5f6f7;
  --bin-color-info-active: #304255;
  /* warning-color */
  --bin-color-warning: #fa8c16;
  --bin-color-warning-light1: #fba345;
  --bin-color-warning-light2: #fcba73;
  --bin-color-warning-light3: #fdd1a2;
  --bin-color-warning-light4: #fee8d0;
  --bin-color-warning-light5: #fff4e8;
  --bin-color-warning-light6: #fff9f3;
  --bin-color-warning-active: #e17e14;
  /* danger-color */
  --bin-color-danger: #f5222d;
  --bin-color-danger-light1: #f74e57;
  --bin-color-danger-light2: #f97a81;
  --bin-color-danger-light3: #fba7ab;
  --bin-color-danger-light4: #fdd3d5;
  --bin-color-danger-light5: #fee9ea;
  --bin-color-danger-light6: #fff4f5;
  --bin-color-danger-active: #dd1f29;
  --bin-color-input-shadow: rgba(16, 137, 255, 0.2);
  --bin-color-input-error-shadow: rgba(245, 34, 45, 0.2);
  /* 背景色 */
  --bin-bg-color-1: #17171a;
  --bin-bg-color-2: #232324;
  --bin-bg-color-3: #2a2a2b;
  --bin-bg-color-4: #313132;
  --bin-bg-color-5: #ffffff;
  /* 文字色 */
  --bin-text-color-1: #1d2129;
  --bin-text-color-2: #4e5969;
  --bin-text-color-3: #86909c;
  --bin-text-color-4: #c9cdd4;
  --bin-text-color-5: #c0c4cc;
  /* 填充色 */
  --bin-fill-color-1: #f7f8fa;
  --bin-fill-color-2: #f2f3f5;
  --bin-fill-color-3: #e5e6eb;
  --bin-fill-color-4: #c9cdd4;
  /* white-color */
  --bin-white-color: #ffffff;
  --bin-black-color: var(--bin-bg-color-1);
  /* text-color */
  --bin-color-text-primary: var(--bin-text-color-1);
  --bin-color-text-default: var(--bin-text-color-2);
  --bin-color-text-secondary: var(--bin-text-color-3);
  --bin-color-text-disabled: var(--bin-text-color-4);
  --bin-color-text-placeholder: var(--bin-text-color-5);
  /* bg-color */
  --bin-color-select-hover: #f5f5f5;
  /* border */
  --bin-border-color-base: #dcdfe6;
  --bin-border-color-light: #f0f0f0;
  --bin-border-base: 1px solid var(--bin-border-color-base);
  --bin-border-base-light: 1px solid var(--bin-border-color-light);
  /* border-radiu */
  --bin-border-radius-none: 0;
  --bin-border-radius-default: 2px;
  --bin-border-radius-medium: 4px;
  /* font-size */
  --bin-font-size-small: 12px;
  --bin-font-size-default: 14px;
  --bin-font-size-large: 16px;
  /* line-height */
  --bin-large-height: 36px;
  --bin-large-height-2: calc(var(--bin-large-height) - 2px);
  --bin-default-height: 32px;
  --bin-default-height-2: calc(var(--bin-default-height) - 2px);
  --bin-small-height: 28px;
  --bin-small-height-2: calc(var(--bin-small-height) - 2px);
  --bin-mini-height: 24px;
  --bin-mini-height-2: calc(var(--bin-mini-height) - 2px);
  --bin-base-line-height: 1.5715;
  /* animation-duration */
  --bin-animation-duration-slow: 0.35s;
  --bin-animation-duration-base: 0.25s;
  /* shadow-duration */
  --bin-shadow-down: 0px 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0px rgba(0, 0, 0, 0.08),
    0 9px 28px 8px rgba(0, 0, 0, 0.05);
  --bin-shadow-popper: 0 2px 8px rgba(0, 0, 0, 0.15);
  /* scrollbar */
  --bin-scrollbar-width: 5px;
  --bin-scrollbar-radius: 5px;
  --bin-scrollbar-color: rgba(0, 0, 0, 0.25);
  --bin-scrollbar-color-hover: rgba(0, 0, 0, 0.4);
  --bin-scrollbar-track: rgba(0, 0, 0, 0.05);
  /* tag-style */
  --bin-tag-height: 22px;
  --bin-tag-font-size: 12px;
  --bin-tag-padding: 0 7px;
  /* page */
  --bin-page-border-color: transparent;
  --bin-page-bg: var(--bin-white-color);
  --bin-page-hover-bg: var(--bin-fill-color-2);
  --bin-page-active-bg: var(--bin-color-primary-light5);
  /* table */
  --bin-table-header-bg: var(--bin-fill-color-2);
  --bin-table-header-text: var(--bin-text-color-1);
  --bin-border-table-color: var(--bin-fill-color-3);
  --bin-border-table: 1px solid var(--bin-border-table-color);
  /* popper */
  --bin-popper-padding: 4px;
  --bin-popper-tooltip-padding: 8px 10px;
  --bin-popper-radius: 4px;
  --bin-popper-item-height: 30px;
  --bin-popper-item-margin-bottom: 4px;
  --bin-popper-bg-light: var(--bin-white-color);
  --bin-popper-bg-dark: var(--bin-black-color);
  /* menu */
  --bin-menu-padding: 8px;
  --bin-menu-item-height: 40px;
  --bin-menu-item-height-h: 60px;
  --bin-menu-item-border-radius: 4px;
  --bin-menu-collapse-width: 48px;
  --bin-menu-text-color: var(--bin-color-text-default);
  --bin-menu-text-hover-color: var(--bin-menu-text-color);
  --bin-menu-text-active-color: var(--bin-color-primary);
  --bin-menu-bg-color: var(--bin-white-color);
  --bin-menu-bg-hover-color: var(--bin-color-primary-light6);
  --bin-menu-bg-active-color: var(--bin-color-primary-light6);
}



```
