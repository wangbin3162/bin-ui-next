<template>
  <div class="color-pain">
    <h3 id="gai-shu">概述</h3>
    <p>Bin-UI 默认具有一套较为美观的配色方案，在开发中也推荐使用一下色板来达到视觉统一效果</p>
    <p>默认的色彩样式有5个主色调，并根据白色混入得到了若干个色板值，这些颜色基本可以满足中后台设计中对于颜色的要求</p>
    <p>颜色值的取值混合主要参考stylus的mix混合，js部分借助
      <a href="https://www.npmjs.com/package/color" target="_blank">color</a>
      这个第三方库实现，组件中提供了部分转化函数，可以按需引入。
    </p>
    <h3 id="zhu-se" style="margin-bottom: 20px;">主色</h3>
    <b-row :gutter="20">
      <b-col span="8">
        <div class="color-wrap">
          <div class="item"
               v-for="(name,index) in getColorPane(primary)"
               :key="index"
               @click="copyColor(name)"
               title="click to copy color"
               :style="{color:index<5?'#fff':'#333',background: name}"
          >
            <span>primary-{{ index + 1 }}</span><span>{{ name }}</span>
          </div>
        </div>
      </b-col>
      <b-col span="8">
        <div class="color-wrap">
          <div class="item"
               v-for="(name,index) in getColorPane(success)"
               :key="index"
               @click="copyColor(name)"
               title="click to copy color"
               :style="{color:index<5?'#fff':'#333',background: name}"
          >
            <span>success-{{ index + 1 }}</span><span>{{ name }}</span>
          </div>
        </div>
      </b-col>
      <b-col span="8">
        <div class="color-wrap">
          <div class="item"
               v-for="(name,index) in getColorPane(info)"
               :key="index"
               title="click to copy color"
               @click="copyColor(name)"
               :style="{color:index<5?'#fff':'#333',background: name}"
          >
            <span>info-{{ index + 1 }}</span><span>{{ name }}</span>
          </div>
        </div>
      </b-col>
    </b-row>
    <br />
    <b-row :gutter="20">
      <b-col span="8">
        <div class="color-wrap">
          <div class="item"
               v-for="(name,index) in getColorPane(warning)"
               :key="index"
               @click="copyColor(name)"
               title="click to copy color"
               :style="{color:index<5?'#fff':'#333',background: name}"
          >
            <span>warning-{{ index + 1 }}</span><span>{{ name }}</span>
          </div>
        </div>
      </b-col>
      <b-col span="8">
        <div class="color-wrap">
          <div class="item"
               v-for="(name,index) in getColorPane(danger)"
               :key="index"
               title="click to copy color"
               @click="copyColor(name)"
               :style="{color:index<5?'#fff':'#333',background: name}"
          >
            <span>danger-{{ index + 1 }}</span><span>{{ name }}</span>
          </div>
        </div>
      </b-col>
    </b-row>
    <br />
    <h3 id="custom" style="margin-bottom: 20px;">自定义色板</h3>
    <p>如果自定的配色不能满足要求，则可以取如下色板，默认会给生成不同的色板值，可供使用</p>
    <b-row :gutter="20">
      <b-col span="8">
        <div class="color-wrap">
          <div class="item"
               v-for="(name,index) in getColorPane(customColor1)"
               :key="index"
               title="click to copy color"
               @click="copyColor(name)"
               :style="{color:index<5?'#fff':'#333',background: name}"
          >
            <span>purple-{{ index + 1 }}</span><span>{{ name }}</span>
          </div>
        </div>
      </b-col>
      <b-col span="8">
        <div class="color-wrap">
          <div class="item"
               v-for="(name,index) in getColorPane(customColor2)"
               :key="index"
               @click="copyColor(name)"
               title="click to copy color"
               :style="{color:index<5?'#fff':'#333',background: name}"
          >
            <span>magenta-{{ index + 1 }}</span><span>{{ name }}</span>
          </div>
        </div>
      </b-col>
      <b-col span="8">
        <div class="color-wrap">
          <div class="item"
               v-for="(name,index) in getColorPane(customColor3)"
               :key="index"
               @click="copyColor(name)"
               title="click to copy color"
               :style="{color:index<5?'#fff':'#333',background: name}"
          >
            <span>cyan-{{ index + 1 }}</span><span>{{ name }}</span>
          </div>
        </div>
      </b-col>
    </b-row>
    <br />
    <b-row :gutter="20">
      <b-col span="8">
        <div class="color-wrap">
          <div class="item"
               v-for="(name,index) in getColorPane(customColor4)"
               :key="index"
               @click="copyColor(name)"
               title="click to copy color"
               :style="{color:index<5?'#fff':'#333',background: name}"
          >
            <span>lime-{{ index + 1 }}</span><span>{{ name }}</span>
          </div>
        </div>
      </b-col>
      <b-col span="8">
        <div class="color-wrap">
          <div class="item"
               v-for="(name,index) in getColorPane(customColor5)"
               :key="index"
               @click="copyColor(name)"
               title="click to copy color"
               :style="{color:index<5?'#fff':'#333',background: name}"
          >
            <span>volcano-{{ index + 1 }}</span><span>{{ name }}</span>
          </div>
        </div>
      </b-col>
      <b-col span="8">
        <div class="color-wrap">
          <div class="item"
               v-for="(name,index) in getColorPane(customColor6)"
               :key="index"
               title="click to copy color"
               @click="copyColor(name)"
               :style="{color:index<5?'#fff':'#333',background: name}"
          >
            <span>geekblue-{{ index + 1 }}</span><span>{{ name }}</span>
          </div>
        </div>
      </b-col>
    </b-row>
    <h3 id="zhong-xing-se" style="margin-bottom: 20px;">中性色</h3>
    <p>中性色包含了黑、白、灰。在后台设计中被大量使用到，合理地选择中性色能够令页面信息具备良好的主次关关系。</p>
    <div class="main-color">
      <div class="main-color-item"
           v-for="(color,index) in garyColor"
           :key="index"
           title="click to copy color"
           @click="copyColor(color)"
           :style="{background:color,color:index>5?'#fff':'rgba(0,0,0,.85)'}"
      >
        gary-{{ index + 1 }}<span class="main-color-value">{{ color }}</span>
      </div>
    </div>
    <h3 id="se-ban" style="margin-bottom: 20px;">色板工具</h3>
    <p>如果上面的色板还不能满足你的需求，你可以选择一个主色，这里会生成一个色板。</p>
    <div class="color-palette-pick t-center f-s-22 mb-20">选择你的主色</div>
    <div class="main-color">
      <div class="main-color-item"
           v-for="(color,index) in getColorPane(custom)"
           :key="index"
           title="click to copy color"
           @click="copyColor(color)"
           :style="{color:index<5?'#fff':'#333',background: color}"
      >
        color-{{ index + 1 }}<span class="main-color-value">{{ color }}</span>
      </div>
    </div>
    <div class="mt-20" flex="cross:center">
      <b-color-picker v-model="custom" style="width: 128px;" :colors="colorsList"></b-color-picker>
      <span class="ml-10">{{ custom }}</span>
    </div>
    <p class="ml-10 f-color-red f-s-12">注意：亮度和饱和度建议在70以上，以生成更好的效果</p>
    <div style="height: 100px;"></div>
  </div>
</template>

<script>
export default {
  name: 'color-base',
  data() {
    return {
      primary: '#1089ff',
      success: '#52c41a',
      info: '#35495e',
      warning: '#fa8c16',
      danger: '#f5222d',

      garyColor: [
        '#ffffff',
        '#fafafa',
        '#f5f5f5',
        '#f0f0f0',
        '#d9d9d9',
        '#bfbfbf',
        '#8c8c8c',
        '#595959',
        '#434343',
        '#262626',
        '#1f1f1f',
        '#141414',
        '#000000',
      ],

      customColor1: '#722ed1',
      customColor2: '#eb2f96',
      customColor3: '#13c2c2',
      customColor4: '#a0d911',
      customColor5: '#fa541c',
      customColor6: '#2f54eb',
      custom: '#1089ff',
      colorsList: [
        '#1089ff',
        '#52c41a',
        '#fa8c16',
        '#f5222d',
        '#2f54eb',
        '#faad14',
        '#722ed1',
        '#eb2f96',
        '#13c2c2',
        '#fadb14',
        '#a0d911',
        '#fa541c',
        '#00bcd4',
      ],
    }
  },
  methods: {
    getColor(name) {
      let node = document.querySelector(`.${name}`)
      return getComputedStyle(node).getPropertyValue('background-color')
    },
    getColorPane(color) {
      return this.$color.getPalette(color)
    },
    copyColor(color) {
      this.$copy(color).then(result => {
        if (result) {
          this.$message.info({ message: `已复制颜色 ${color} 至剪切板` })
          console.log(color)
        }
      })
    },
  },
}
</script>
