/* No.1 */
// var oDivArr = document.getElementsByTagName('div')

// /**
//  * 将传入的dom节点的指定属性缓冲改变到目标值
//  * @param {HTMLElement} dom dom节点
//  * @param {String} attr CSS属性
//  * @param {Number} target 目标值
//  */
// function startChange(dom, attr, target) {
//     clearInterval(dom.timer);
//     let iSpeed, iCur;
//     dom.timer = setInterval(() => {
//         // 1. 获取 属性 当前值
//         if (attr === 'opacity') {
//             iCur = parseFloat(getComputedStyle(dom)['opacity']) * 100
//         } else {
//             iCur = parseInt(getComputedStyle(dom)[attr])
//         }
//         // 2. 设置 速度
//         iSpeed = (target - iCur) / 7
//         iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
//         // 3. 判断是否清除定时器
//         if (iCur === target) {
//             clearInterval(dom.timer);
//         }
//         // 4. 改变属性值
//         if (attr === 'opacity') {
//             dom.style.opacity = (iCur + iSpeed) / 100;
//         } else {
//             dom.style[attr] = iCur + iSpeed + 'px';
//         }
//     }, 30);
// }

// // 绑定鼠标移入事件
// oDivArr[0].onmouseenter = function () {
//     startChange(this, 'width', 300)
// }
// oDivArr[1].onmouseenter = function () {
//     startChange(this, 'height', 300)
// }
// oDivArr[2].onmouseenter = function () {
//     startChange(this, 'borderWidth', 30)
// }
// oDivArr[3].onmouseenter = function () {
//     startChange(this, 'opacity', 30)
// }






/* No.2 */
// 获取div数组
var oDivArr = document.getElementsByTagName("div")

/**
 * 将传入的dom节点的指定属性缓冲改变到目标值
 * @param {HTMLElement} dom dom节点
 * @param {String} attr CSS属性
 * @param {Number} target 目标值
 */
function startChange(dom, attr, target) {
    clearInterval(dom.timer)
    let iCur, iSpeed;
    dom.timer = setInterval(() => {
        iCur = attr === "opacity" ?
            parseFloat(getComputedStyle(dom)[attr]) * 100 :
            parseFloat(getComputedStyle(dom)[attr]);
        iSpeed = (target - iCur) / 5;
        iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
        if (Math.abs(iCur - target) <= iSpeed) {
            clearInterval(dom.timer)
            if (attr === "opacity") {
                dom.style[attr] = target / 100
            } else {
                dom.style[attr] = target + "px"
            }
        } else {
            if (attr === "opacity") {
                dom.style[attr] = (iCur + iSpeed) / 100
            } else {
                dom.style[attr] = iCur + iSpeed + "px"
            }
        }
    }, 30);
}

// 绑定鼠标移入事件
oDivArr[0].onmouseenter = function () {
    startChange(this, 'width', 500)
}
oDivArr[1].onmouseenter = function () {
    startChange(this, 'height', 500)
}
oDivArr[2].onmouseenter = function () {
    startChange(this, 'borderWidth', 500)
}
oDivArr[3].onmouseenter = function () {
    startChange(this, 'opacity', 50)
}