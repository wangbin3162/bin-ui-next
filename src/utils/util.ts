/**
 * @description 更新标题
 * @param {String} title 标题
 */
export function title(title: string) {
  if (title) {
    window.document.title = title
  }
}

/**
 * @description 复制到剪切板
 * @param content
 */
export function copy(content: string) {
  return new Promise(resolve => {
    let copyInput = document.createElement('textarea')
    copyInput.value = content
    copyInput.setAttribute('id', 'b-copy-temp')
    document.body.appendChild(copyInput)
    copyInput.select() // 选择对象
    let result = document.execCommand('Copy') // 执行浏览器复制命令
    copyInput.style.display = 'none'
    document.body.removeChild(document.getElementById('b-copy-temp'))
    resolve(result)
  })
}

/**
 * @description 打开新页面
 * @param {String} url 地址
 * @param target
 */
export function open(url: string, target: boolean = false) {
  let a = document.createElement('a')
  a.setAttribute('href', url)
  if (target) {
    a.setAttribute('target', '_blank')
  }
  a.setAttribute('id', 'b-link-temp')
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(document.getElementById('b-link-temp'))
}

/**
 * @description 日期格式化
 * @param time
 * @param cFormat
 * @param weekArray
 */
export function parseTime(time: string | number | Date, cFormat = '{y}-{m}-{d} {h}:{i}:{s}', weekArray?) {
  if (arguments.length === 0) {
    return null
  }
  let type = typeOf(time)
  let date
  switch (type) {
    case 'date':
      date = time
      break
    case 'number':
      date = new Date(time)
      break
    case 'string':
      if (typeof time === 'string') {
        date = new Date(time.replace(/-/g, '/'))
      }
      break
    default:
      return null
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay(),
  }
  return cFormat.replace(/{([ymdhisa])+}/g, (result, key) => {
    let value = formatObj[key]
    if (key === 'a') {
      if (weekArray && weekArray.length === 7) {
        return weekArray[value]
      }
      return ['日', '一', '二', '三', '四', '五', '六'][value]
    }
    if (result.length > 0 && value < 10) { // 补0
      value = '0' + value
    }
    return value || 0
  })
}

/**
 * 获取区间范围，如近一周，近三个月，后一个月等
 * @param days 为负值时往前，正为之后的日期
 * @param mode
 * @returns {*}
 */
export function rangeTime(days, mode = '{y}-{m}-{d}') {
  const startDate = new Date()
  const endDate = new Date()
  if (days < 0) {
    startDate.setTime(startDate.getTime() + 3600 * 1000 * 24 * days)
  } else {
    endDate.setTime(endDate.getTime() + 3600 * 1000 * 24 * days)
  }
  const startDateStr = parseTime(startDate, mode)
  const endDateStr = parseTime(endDate, mode)
  return {
    startDate,
    endDate,
    startDateStr,
    endDateStr,
  }
}

/**
 * @description 精准判断对象类型
 * @param obj
 */
export function typeOf(obj) {
  const toString = Object.prototype.toString
  const map = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object',
  }
  return map[toString.call(obj)]
}

/**
 * @description 深拷贝
 * @param data
 */
export function deepCopy(data) {
  const t = typeOf(data)
  let o

  if (t === 'array') {
    o = []
  } else if (t === 'object') {
    o = {}
  } else {
    return data
  }

  if (t === 'array') {
    for (let i = 0; i < data.length; i++) {
      o.push(deepCopy(data[i]))
    }
  } else if (t === 'object') {
    for (let i in data) {
      o[i] = deepCopy(data[i])
    }
  }
  return o
}

/**
 * 在某个区间随机一个整数
 * @param min 最小值
 * @param max 最大值
 * @return {number}
 */
export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

/**
 * 防抖函数，返回函数连续调用时，空闲时间必须大于或等于 wait，func 才会执行
 *
 * @param  {function} func        回调函数
 * @param  {number}   wait        表示时间窗口的间隔
 * @param  {boolean}  immediate   设置为ture时，是否立即调用函数
 * @return {function}             返回客户调用函数
 */
export function debounce(func, wait = 50, immediate = true) {
  let timer, context, args
  // 延迟执行函数
  const later = () => setTimeout(() => {
    // 延迟函数执行完毕，清空缓存的定时器序号
    timer = null
    // 延迟执行的情况下，函数会在延迟函数中执行
    // 使用到之前缓存的参数和上下文
    if (!immediate) {
      func.apply(context, args)
      context = args = null
    }
  }, wait)

  // 这里返回的函数是每次实际调用的函数
  return function(...params) {
    // 如果没有创建延迟执行函数（later），就创建一个
    if (!timer) {
      timer = later()
      // 如果是立即执行，调用函数
      // 否则缓存参数和调用上下文
      if (immediate) {
        func.apply(this, params)
      } else {
        context = this
        args = params
      }
      // 如果已有延迟执行函数（later），调用的时候清除原来的并重新设定一个
      // 这样做延迟函数会重新计时
    } else {
      clearTimeout(timer)
      timer = later()
    }
  }
}
