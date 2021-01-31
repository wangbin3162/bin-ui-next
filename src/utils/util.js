export function title(title) {
    if (title) {
        window.document.title = title;
    }
}
export function copy(content) {
    return new Promise(resolve => {
        let copyInput = document.createElement('textarea');
        copyInput.value = content;
        copyInput.setAttribute('id', 'b-copy-temp');
        document.body.appendChild(copyInput);
        copyInput.select();
        let result = document.execCommand('Copy');
        copyInput.style.display = 'none';
        document.body.removeChild(document.getElementById('b-copy-temp'));
        resolve(result);
    });
}
export function open(url, target = false) {
    let a = document.createElement('a');
    a.setAttribute('href', url);
    if (target) {
        a.setAttribute('target', '_blank');
    }
    a.setAttribute('id', 'b-link-temp');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(document.getElementById('b-link-temp'));
}
export function parseTime(time, cFormat = '{y}-{m}-{d} {h}:{i}:{s}', weekArray) {
    if (arguments.length === 0) {
        return null;
    }
    let type = typeOf(time);
    let date;
    switch (type) {
        case 'date':
            date = time;
            break;
        case 'number':
            date = new Date(time);
            break;
        case 'string':
            if (typeof time === 'string') {
                date = new Date(time.replace(/-/g, '/'));
            }
            break;
        default:
            return null;
    }
    const formatObj = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds(),
        a: date.getDay(),
    };
    return cFormat.replace(/{([ymdhisa])+}/g, (result, key) => {
        let value = formatObj[key];
        if (key === 'a') {
            if (weekArray && weekArray.length === 7) {
                return weekArray[value];
            }
            return ['日', '一', '二', '三', '四', '五', '六'][value];
        }
        if (result.length > 0 && value < 10) {
            value = '0' + value;
        }
        return value || 0;
    });
}
export function rangeTime(days, mode = '{y}-{m}-{d}') {
    const startDate = new Date();
    const endDate = new Date();
    if (days < 0) {
        startDate.setTime(startDate.getTime() + 3600 * 1000 * 24 * days);
    }
    else {
        endDate.setTime(endDate.getTime() + 3600 * 1000 * 24 * days);
    }
    const startDateStr = parseTime(startDate, mode);
    const endDateStr = parseTime(endDate, mode);
    return {
        startDate,
        endDate,
        startDateStr,
        endDateStr,
    };
}
export function typeOf(obj) {
    const toString = Object.prototype.toString;
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
    };
    return map[toString.call(obj)];
}
export function deepCopy(data) {
    const t = typeOf(data);
    let o;
    if (t === 'array') {
        o = [];
    }
    else if (t === 'object') {
        o = {};
    }
    else {
        return data;
    }
    if (t === 'array') {
        for (let i = 0; i < data.length; i++) {
            o.push(deepCopy(data[i]));
        }
    }
    else if (t === 'object') {
        for (let i in data) {
            o[i] = deepCopy(data[i]);
        }
    }
    return o;
}
export function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
export function debounce(func, wait = 50, immediate = true) {
    let timer, context, args;
    const later = () => setTimeout(() => {
        timer = null;
        if (!immediate) {
            func.apply(context, args);
            context = args = null;
        }
    }, wait);
    return function (...params) {
        if (!timer) {
            timer = later();
            if (immediate) {
                func.apply(this, params);
            }
            else {
                context = this;
                args = params;
            }
        }
        else {
            clearTimeout(timer);
            timer = later();
        }
    };
}
//# sourceMappingURL=util.js.map