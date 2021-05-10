<template>
  <div :class="[
        `bin-steps`,
        `bin-steps-${direction}`,
        {[`bin-steps-${size}`]: !!size,},
      ]">
    <slot></slot>
  </div>
</template>

<script>
import {  onMounted, onUnmounted, provide, ref } from 'vue'
import mitt from 'mitt'
import { throttle } from '../../utils/util'

export default {
  name: 'BSteps',
  props: {
    current: {
      type: Number,
      default: 0,
    },
    status: {
      validator: (value) => ['wait', 'process', 'finish', 'error', 'success'].includes(value),
      default: 'process',
    },
    size: {
      validator: (value) => ['small'].includes(value),
    },
    direction: {
      validator: (value) => ['horizontal', 'vertical'].includes(value),
      default: 'horizontal',
    },
  },
  setup(props) {
    const stepsMitt = mitt()
    const stepChild = ref([]) // 用于获取所有子组件示例

    const updateChildProps = (isInit) => {
      const total = stepChild.value.length
      stepChild.value.forEach((child, index) => {
        child.stepNumber = index + 1

        if (props.direction === 'horizontal') {
          child.total = total
        }
        // 如果已存在status,且在初始化时,则略过
        // todo 如果当前是error,在current改变时需要处理
        if (!(isInit && child.currentStatus)) {
          if (index === props.current) {
            if (props.status !== 'error') {
              child.currentStatus = 'process'
            }
            if (props.status === 'success') {
              child.currentStatus = 'success'
            }
          } else if (index < props.current) {
            child.currentStatus = 'finish'
          } else {
            child.currentStatus = 'wait'
          }
        }

        if (child.currentStatus !== 'error' && index !== 0) {
          stepChild.value[index - 1].nextError = false
        }
      })
    }

    const setNextError = () => {
      stepChild.value.forEach((child, index) => {
        if (child.currentStatus === 'error' && index !== 0) {
          stepChild.value[index - 1].nextError = true
        }
      })
    }

    const updateCurrent = (isInit) => {
      // 防止溢出边界
      if (props.current < 0 || props.current >= stepChild.value.length) {
        return
      }
      if (isInit) {
        if (!stepChild.value[props.current].currentStatus) {
          stepChild.value[props.current].currentStatus = props.status
        }
      } else {
        stepChild.value[props.current].currentStatus = props.status
      }
    }

    const updateSteps = () => {
      updateChildProps(true)
      setNextError()
      updateCurrent(true)
    }
    const debouncedAppendRemove = throttle(updateSteps, 50, false)

    stepsMitt.on('append', debouncedAppendRemove)
    stepsMitt.on('remove', debouncedAppendRemove)
    provide('Steps', { stepChild, stepsMitt })

    onMounted(() => {
      updateSteps()
    })
    onUnmounted(() => {
      stepsMitt.all.clear()
    })
    return {
      stepChild, updateChildProps, updateCurrent,
    }
  },
  watch: {
    current() {
      this.updateChildProps()
    },
    status() {
      this.updateCurrent()
    },
  },
}
</script>
