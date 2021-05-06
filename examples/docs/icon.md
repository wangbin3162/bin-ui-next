## Icon 图标

<div class="global-anchor">
  <b-anchor :scroll-offset="100">
    <b-anchor-link href="#icon-tu-biao" title="Icon 图标"></b-anchor-link>
    <b-anchor-link href="#tu-biao-ji-he" title="图标集合"></b-anchor-link>
  </b-anchor>
</div>

图标这里使用了阿里[iconfont](https://www.iconfont.cn/)图标库生成了图标，图标来源于开源项目 ionicons，结合整理添加了一些其他的图标。

i 标签可以直接设置样式类名为 `b-iconfont b-icon-xxx` 来使用即可。icon 组件可以只设置 name 来实用。 设置 `icon-is-rotating` 可以开启旋转

:::demo size 和 color 可以设置字体大小和颜色

```html

<div class="demo-icon">
  <i class="b-iconfont b-icon-addteam"></i>
  <b-icon name="read-fill" color="#ff53a5"></b-icon>
  <b-icon name="loading" class="icon-is-rotating"></b-icon>
</div>
```

:::

### 图标集合

<icon-pane/>

