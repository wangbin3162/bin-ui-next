export const BAR_MAP = {
    vertical: {
        offset: 'offsetHeight',
        scroll: 'scrollTop',
        scrollSize: 'scrollHeight',
        size: 'height',
        key: 'vertical',
        axis: 'Y',
        client: 'clientY',
        direction: 'top',
    },
    horizontal: {
        offset: 'offsetWidth',
        scroll: 'scrollLeft',
        scrollSize: 'scrollWidth',
        size: 'width',
        key: 'horizontal',
        axis: 'X',
        client: 'clientX',
        direction: 'left',
    },
};
export function renderThumbStyle({ move, size, bar }) {
    const style = {};
    const translate = `translate${bar.axis}(${move}%)`;
    style[bar.size] = size;
    style.transform = translate;
    style.msTransform = translate;
    style.webkitTransform = translate;
    return style;
}
export function toObject(arr) {
    let res = {};
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            extend(res, arr[i]);
        }
    }
    return res;
}
function extend(to, _from) {
    for (let key in _from) {
        to[key] = _from[key];
    }
    return to;
}
//# sourceMappingURL=util.js.map