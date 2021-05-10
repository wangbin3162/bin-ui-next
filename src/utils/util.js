/**
 * @description 更新标题
 * @param {String} title 标题
 */
export function title(title) {
  if (title) {
    window.document.title = title
  }
}

/**
 * @description 复制到剪切板
 * @param content
 */
export function copy(content) {
  return new Promise(resolve => {
    const copyInput = document.createElement('textarea')
    copyInput.value = content
    copyInput.setAttribute('id', 'b-copy-temp')
    document.body.appendChild(copyInput)
    copyInput.select() // 选择对象
    const result = document.execCommand('Copy') // 执行浏览器复制命令
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
export function open(url, target = false) {
  const a = document.createElement('a')
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
export function parseTime(time, cFormat = '{y}-{m}-{d} {h}:{i}:{s}', weekArray) {
  if (arguments.length === 0) {
    return null
  }
  const type = typeOf(time)
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
    for (const i in data) {
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
 * 节流函数，(限制函数的执行频率)返回函数连续调用时，空闲时间必须大于或等于 wait，func 才会执行
 *
 * @param  {function} func        回调函数
 * @param  {number}   wait        表示时间窗口的间隔
 * @param immediate 是否立即执行 true 则先调用，false不先调用
 * @return {function}             返回客户调用函数
 */
export function throttle(func, wait, immediate) {
  let timeoutID
  let lastExec = 0

  function wrapper() {
    const self = this
    const elapsed = Number(new Date()) - lastExec
    const args = arguments

    function clearExistingTimeout() {
      if (timeoutID) {
        clearTimeout(timeoutID)
      }
    }

    function clear() {
      timeoutID = undefined
    }

    function exec() {
      lastExec = Number(new Date())
      func.apply(self, args)
    }

    if (immediate && !timeoutID) {
      exec()
    }
    clearExistingTimeout()
    if (immediate === undefined && elapsed > wait) {
      exec()
    } else {
      timeoutID = setTimeout(immediate ? clear : exec, immediate === undefined ? wait - elapsed : wait)
    }
  }

  return wrapper
}

/**
 * 防抖函数，(限制函数的执行频率) 保证再一系列调用时间内，只调用一次
 *
 * @param  {function} func        回调函数
 * @param  {number}   wait        表示时间窗口的间隔
 * @return {function}             返回客户调用函数
 */
export function debounce(func, wait) {
  return throttle(func, wait, false)
}
