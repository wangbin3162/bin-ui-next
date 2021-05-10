<template>
  <div
    class="bin-rate"
    @keydown="handleKey"
    role="slider"
    :aria-valuenow="currentValue"
    :aria-valuetext="text"
    aria-valuemin="0"
    :aria-valuemax="max"
    tabindex="0"
  >
    <span
      v-for="(item, key) in max"
      class="bin-rate__item"
      @mousemove="setCurrentValue(item, $event)"
      @mouseleave="resetCurrentValue"
      @click="selectValue(item)"
      :style="{ cursor: rateDisabled ? 'auto' : 'pointer' }"
      :key="key"
    >
      <i
        class="bin-rate__icon b-iconfont"
        :class="[`b-icon-${classes[item - 1]}`, { hover: hoverIndex === item }]"
        :style="getIconStyle(item)"
      >
        <i
          class="bin-rate__decimal b-iconfont"
          v-if="showDecimalIcon(item)"
          :class="`b-icon-${decimalIconClass}`"
          :style="decimalStyle"
        >
        </i>
      </i>
    </span>
    <span
      v-if="showText || showScore"
      class="bin-rate__text"
      :style="{ color: textColor }"
    >{{ text }}</span
    >
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue'
import { hasClass } from '../../utils/dom'
import { isObject, isArray } from '@vue/shared'
import { EVENT_CODE } from '../../utils/aria'

export default {
  name: 'BRate',
  props: {
    modelValue: {
      type: Number,
      default: 0,
    },
    lowThreshold: {
      type: Number,
      default: 2,
    },
    highThreshold: {
      type: Number,
      default: 4,
    },
    max: {
      type: Number,
      default: 5,
    },
    colors: {
      type: Array,
      default: () => {
        return ['#F7BA2A', '#F7BA2A', '#F7BA2A']
      },
    },
    voidColor: {
      type: String,
      default: '#C6D1DE',
    },
    disabledVoidColor: {
      type: String,
      default: '#EFF2F7',
    },
    iconClasses: {
      type: Array,
      default: () => {
        return ['star-fill', 'star-fill', 'star-fill']
      },
    },
    voidIconClass: {
      type: String,
      default: 'star',
    },
    disabledVoidIconClass: {
      type: String,
      default: 'star-fill',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    allowHalf: {
      type: Boolean,
      default: false,
    },
    showText: {
      type: Boolean,
      default: false,
    },
    showScore: {
      type: Boolean,
      default: false,
    },
    textColor: {
      type: String,
      default: 'rgba(0,0,0,.65)',
    },
    texts: {
      type: Array,
      default: () => {
        return ['极差', '失望', '一般', '满意', '惊喜']
      },
    },
    scoreTemplate: {
      type: String,
      default: '{value}',
    },
  },
  emits: ['update:modelValue', 'change'],
  setup(props, { emit }) {
    const currentValue = ref(props.modelValue)

    const rateDisabled = computed(() => props.disabled)

    const text = computed(() => {
      let result = ''
      if (props.showScore) {
        result = props.scoreTemplate.replace(
          /\{\s*value\s*\}/,
          rateDisabled.value ? `${props.modelValue}` : `${currentValue.value}`,
        )
      } else if (props.showText) {
        result = props.texts[Math.ceil(currentValue.value) - 1]
      }
      return result
    })

    function getValueFromMap(value, map) {
      const matchedKeys = Object.keys(map)
        .filter((key) => {
          const val = map[key]
          const excluded = isObject(val) ? val.excluded : false
          return excluded ? value < key : value <= key
        })
        .sort((a, b) => a - b)
      const matchedValue = map[matchedKeys[0]]
      return isObject(matchedValue) ? matchedValue.value : matchedValue || ''
    }

    const valueDecimal = computed(
      () => props.modelValue * 100 - Math.floor(props.modelValue) * 100,
    )
    const colorMap = computed(() =>
      isArray(props.colors)
        ? {
          [props.lowThreshold]: props.colors[0],
          [props.highThreshold]: { value: props.colors[1], excluded: true },
          [props.max]: props.colors[2],
        }
        : props.colors,
    )
    const activeColor = computed(() =>
      getValueFromMap(currentValue.value, colorMap.value),
    )
    const decimalStyle = computed(() => {
      let width = ''
      if (rateDisabled.value) {
        width = `${valueDecimal.value}%`
      } else if (props.allowHalf) {
        width = '50%'
      }
      return {
        color: activeColor.value,
        width,
      }
    })

    const classMap = computed(() =>
      isArray(props.iconClasses)
        ? {
          [props.lowThreshold]: props.iconClasses[0],
          [props.highThreshold]: {
            value: props.iconClasses[1],
            excluded: true,
          },
          [props.max]: props.iconClasses[2],
        }
        : props.iconClasses,
    )
    const decimalIconClass = computed(() =>
      getValueFromMap(props.modelValue, classMap.value),
    )
    const voidClass = computed(() =>
      rateDisabled.value ? props.disabledVoidIconClass : props.voidIconClass,
    )
    const activeClass = computed(() =>
      getValueFromMap(currentValue.value, classMap.value),
    )
    const classes = computed(() => {
      let result = Array(props.max)
      let threshold = currentValue.value
      // if (props.allowHalf && currentValue.value !== Math.floor(currentValue.value)) {
      //   threshold--
      // }
      result.fill(activeClass.value, 0, threshold)
      result.fill(voidClass.value, threshold, props.max)
      return result
    })

    const pointerAtLeftHalf = ref(true)
    watch(
      () => props.modelValue,
      (val) => {
        currentValue.value = val
        pointerAtLeftHalf.value =
          props.modelValue !== Math.floor(props.modelValue)
      },
    )

    function showDecimalIcon(item) {
      let showWhenDisabled =
        rateDisabled.value &&
        valueDecimal.value > 0 &&
        item - 1 < props.modelValue &&
        item > props.modelValue
      /* istanbul ignore next */
      let showWhenAllowHalf =
        props.allowHalf &&
        pointerAtLeftHalf.value &&
        item - 0.5 <= currentValue.value &&
        item > currentValue.value
      return showWhenDisabled || showWhenAllowHalf
    }

    function getIconStyle(item) {
      const voidColor = rateDisabled.value
        ? props.disabledVoidColor
        : props.voidColor
      return {
        color: item <= currentValue.value ? activeColor.value : voidColor,
      }
    }

    function selectValue(value) {
      if (rateDisabled.value) {
        return
      }
      if (props.allowHalf && pointerAtLeftHalf.value) {
        emit('update:modelValue', currentValue.value)
        emit('change', this.currentValue)
      } else {
        emit('update:modelValue', value)
        emit('change', value)
      }
    }

    function handleKey(e) {
      if (rateDisabled.value) {
        return
      }
      let _currentValue = currentValue.value
      const code = e.code
      if (code === EVENT_CODE.up || code === EVENT_CODE.right) {
        if (props.allowHalf) {
          _currentValue += 0.5
        } else {
          _currentValue += 1
        }
        e.stopPropagation()
        e.preventDefault()
      } else if (code === EVENT_CODE.left || code === EVENT_CODE.down) {
        if (props.allowHalf) {
          _currentValue -= 0.5
        } else {
          _currentValue -= 1
        }
        e.stopPropagation()
        e.preventDefault()
      }
      _currentValue = _currentValue < 0 ? 0 : _currentValue
      _currentValue = _currentValue > props.max ? props.max : _currentValue
      emit('update:modelValue', _currentValue)
      emit('change', _currentValue)
      return _currentValue
    }

    const hoverIndex = ref(-1)

    function setCurrentValue(value, event) {
      if (rateDisabled.value) {
        return
      }
      /* istanbul ignore if */
      if (props.allowHalf) {
        let target = event.target
        if (hasClass(target, 'el-rate__item')) {
          target = target.querySelector('.el-rate__icon')
        }
        if (hasClass(target, 'el-rate__decimal')) {
          target = target.parentNode
        }
        pointerAtLeftHalf.value = event.offsetX * 2 <= target.clientWidth
        currentValue.value = pointerAtLeftHalf.value ? value - 0.5 : value
      } else {
        currentValue.value = value
      }
      hoverIndex.value = value
    }

    function resetCurrentValue() {
      if (rateDisabled.value) {
        return
      }
      if (props.allowHalf) {
        pointerAtLeftHalf.value =
          props.modelValue !== Math.floor(props.modelValue)
      }
      currentValue.value = props.modelValue
      hoverIndex.value = -1
    }

    if (!props.modelValue) {
      emit('update:modelValue', 0)
    }
    return {
      hoverIndex,
      currentValue,
      rateDisabled,
      text,
      decimalStyle,
      decimalIconClass,
      classes,
      showDecimalIcon,
      getIconStyle,
      selectValue,
      handleKey,
      setCurrentValue,
      resetCurrentValue,
    }
  },
}
</script>
