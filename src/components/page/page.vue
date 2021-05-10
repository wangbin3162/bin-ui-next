<template>
  <ul :class="simpleWrapClasses" :style="styles" v-if="simple">
    <li title="上一页" :class="prevClasses" @click="prev">
      <a><i class="b-iconfont b-icon-left"></i></a>
    </li>
    <li :class="simplePagerClasses" :title="currentPage + '/' + allPages"><label>
      <input
        type="text"
        :value="currentPage"
        autocomplete="off"
        spellcheck="false"
        @keydown="keyDown"
        @keyup="keyUp"
        @change="keyUp">
    </label>
      <span>/</span>
      {{ allPages }}
    </li>
    <li title="下一页" :class="nextClasses" @click="next">
      <a><i class="b-iconfont b-icon-right"></i></a>
    </li>
  </ul>
  <ul :class="wrapClasses" :style="styles" v-else>
    <li v-if="showTotal" :class="[prefixCls + '-total']">
        <span>
            <slot>共 {{ total }} 条</slot>
        </span>
    </li>
    <li title="上一页" :class="prevClasses" @click="prev">
      <a>
        <template v-if="prevText !== ''">{{ prevText }}</template>
        <i v-else class="b-iconfont b-icon-left"></i></a>
    </li>
    <li title="1" :class="firstPageClasses" @click="changePage(1)"><a>1</a></li>
    <li title="向前5页" v-if="currentPage > 5" :class="[prefixCls + '-item-jump-prev']" @click="fastPrev">
      <a><i class="b-iconfont b-icon-doubleleft"></i></a>
    </li>
    <li :title="currentPage - 3" v-if="currentPage === 5" :class="[prefixCls + '-item']"
        @click="changePage(currentPage - 3)">
      <a>{{ currentPage - 3 }}</a>
    </li>
    <li :title="currentPage - 2" v-if="currentPage - 2 > 1" :class="[prefixCls + '-item']"
        @click="changePage(currentPage - 2)">
      <a>{{ currentPage - 2 }}</a>
    </li>
    <li :title="currentPage - 1" v-if="currentPage - 1 > 1" :class="[prefixCls + '-item']"
        @click="changePage(currentPage - 1)">
      <a>{{ currentPage - 1 }}</a>
    </li>
    <li :title="currentPage" v-if="currentPage !== 1 && currentPage !== allPages"
        :class="[prefixCls + '-item',prefixCls + '-item-active']">
      <a>{{ currentPage }}</a>
    </li>
    <li :title="currentPage + 1" v-if="currentPage + 1 < allPages" :class="[prefixCls + '-item']"
        @click="changePage(currentPage + 1)">
      <a>{{ currentPage + 1 }}</a>
    </li>
    <li :title="currentPage + 2" v-if="currentPage + 2 < allPages" :class="[prefixCls + '-item']"
        @click="changePage(currentPage + 2)">
      <a>{{ currentPage + 2 }}</a>
    </li>
    <li :title="currentPage + 3" v-if="allPages - currentPage === 4" :class="[prefixCls + '-item']"
        @click="changePage(currentPage + 3)">
      <a>{{ currentPage + 3 }}</a>
    </li>
    <li title="向后5页" v-if="allPages - currentPage >= 5" :class="[prefixCls + '-item-jump-next']"
        @click="fastNext">
      <a><i class="b-iconfont b-icon-doubleright"></i></a>
    </li>
    <li :title="allPages" v-if="allPages > 1" :class="lastPageClasses" @click="changePage(allPages)">
      <a>{{ allPages }}</a>
    </li>
    <li title="下一页" :class="nextClasses" @click="next">
      <a>
        <template v-if="nextText !== ''">{{ nextText }}</template>
        <i v-else class="b-iconfont b-icon-right"></i></a>
    </li>
    <options
      :show-sizer="showSizer"
      :page-size="currentPageSize"
      :page-size-opts="pageSizeOpts"
      :placement="placement"
      :append-to-body="appendToBody"
      :show-elevator="showElevator"
      :current="currentPage"
      :all-pages="allPages"
      :is-small="isSmall"
      @size="onSize"
      @page="onPage">
    </options>
  </ul>
</template>

<script>
import { computed, reactive, toRefs } from 'vue'
import Options from './options.vue'

const prefixCls = 'bin-page'

export default {
  name: 'BPage',
  components: { Options },
  props: {
    current: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 0,
    },
    pageSize: {
      type: Number,
      default: 10,
    },
    pageSizeOpts: {
      type: Array,
      default: () => {
        return [10, 20, 30, 40]
      },
    },
    placement: {
      validator: (value) => ['top', 'bottom'].includes(value),
      default: 'bottom',
    },
    appendToBody: Boolean,
    size: {
      validator: (value) => ['', 'small'].includes(value),
    },
    simple: Boolean,
    showTotal: Boolean,
    showElevator: Boolean,
    showSizer: Boolean,
    className: String,
    styles: Object,
    prevText: {
      type: String,
      default: '',
    },
    nextText: {
      type: String,
      default: '',
    },
  },
  emits: ['update:current', 'change', 'size-change'],
  setup(props, ctx) {
    const states = reactive({
      prefixCls,
      currentPage: props.current,
      currentPageSize: props.pageSize,
    })

    const allPages = computed(() => {
      const allPage = Math.ceil(props.total / states.currentPageSize)
      return (allPage === 0) ? 1 : allPage
    })
    const changePage = (page) => {
      if (states.currentPage !== page) {
        states.currentPage = page
        ctx.emit('update:current', page)
        ctx.emit('change', page)
      }
    }
    const prev = () => {
      const current = states.currentPage
      if (current <= 1) {
        return false
      }
      changePage(current - 1)
    }
    const next = () => {
      const current = states.currentPage
      if (current >= allPages.value) {
        return false
      }
      changePage(current + 1)
    }
    const fastPrev = () => {
      const page = states.currentPage - 5
      if (page > 0) {
        changePage(page)
      } else {
        changePage(1)
      }
    }
    const fastNext = () => {
      const page = states.currentPage + 5
      if (page > allPages.value) {
        changePage(allPages.value)
      } else {
        changePage(page)
      }
    }
    const onSize = (pageSize) => {
      states.currentPageSize = pageSize
      ctx.emit('size-change', pageSize)
      changePage(1)
    }
    const onPage = (page) => {
      changePage(page)
    }
    const keyDown = (e) => {
      const key = e.keyCode
      const condition = (key >= 48 && key <= 57) || (key >= 96 && key <= 105) || key === 8 || key === 37 || key === 39

      if (!condition) {
        e.preventDefault()
      }
    }
    const keyUp = (e) => {
      const key = e.keyCode
      const val = parseInt(e.target.value)

      if (key === 38) {
        prev()
      } else if (key === 40) {
        next()
      } else if (key === 13) {
        let page = 1

        if (val > allPages.value) {
          page = allPages.value
        } else if (val <= 0 || !val) {
          page = 1
        } else {
          page = val
        }

        e.target.value = page
        changePage(page)
      }
    }
    return {
      ...toRefs(states),
      allPages,
      changePage,
      prev,
      next,
      fastPrev,
      fastNext,
      onSize,
      onPage,
      keyDown,
      keyUp,
    }
  },
  computed: {
    isSmall() {
      return !!this.size
    },
    simpleWrapClasses() {
      return [
        `${prefixCls}`,
        `${prefixCls}-simple`,
        {
          [`${this.className}`]: !!this.className,
        },
      ]
    },
    simplePagerClasses() {
      return `${prefixCls}-simple-pager`
    },
    wrapClasses() {
      return [
        `${prefixCls}`,
        {
          [`${this.className}`]: !!this.className,
          'mini': !!this.size,
        },
      ]
    },
    prevClasses() {
      return [
        `${prefixCls}-prev`,
        {
          [`${prefixCls}-disabled`]: this.currentPage === 1,
          [`${prefixCls}-custom-text`]: this.prevText !== '',
        },
      ]
    },
    nextClasses() {
      return [
        `${prefixCls}-next`,
        {
          [`${prefixCls}-disabled`]: this.currentPage === this.allPages,
          [`${prefixCls}-custom-text`]: this.nextText !== '',
        },
      ]
    },
    firstPageClasses() {
      return [
        `${prefixCls}-item`,
        {
          [`${prefixCls}-item-active`]: this.currentPage === 1,
        },
      ]
    },
    lastPageClasses() {
      return [
        `${prefixCls}-item`,
        {
          [`${prefixCls}-item-active`]: this.currentPage === this.allPages,
        },
      ]
    },
  },
  watch: {
    total(val) {
      let maxPage = Math.ceil(val / this.currentPageSize)
      if (maxPage < this.currentPage) {
        this.currentPage = (maxPage === 0 ? 1 : maxPage)
      }
    },
    current(val) {
      this.currentPage = val
    },
    pageSize(val) {
      this.currentPageSize = val
    },
  },
}
</script>
