// /* No.1 */
// var oDivArr = document.getElementsByTagName('div')

// /**
//  * 改变dom节点的宽度值
//  * @param {HTMLElement} dom dom节点
//  * @param {Number} target 目标宽度值
//  */
// function changeWidth(dom, target) {
//     clearInterval(dom.timer);
//     let iSpeed, iCur;
//     dom.timer = setInterval(() => {
//         iCur = parseInt(getComputedStyle(dom)['width']);
//         iSpeed = (target - iCur) / 7;
//         iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
//         if (iCur === target) {
//             clearInterval(dom.timer);
//         } else {
//             dom.style.width = iCur + iSpeed + 'px';
//         }
//     }, 30);
// }

// // 遍历4个div 依次绑定鼠标移入和移出事件
// for (var i = 0; i < oDivArr.length; i++) {
//     oDivArr[i].onmouseenter = function () {
//         changeWidth(this, 300);
//     }
//     oDivArr[i].onmouseleave = function () {
//         changeWidth(this, 100);
//     }
// }





/* No.2 */
const oDivArr = document.getElementsByTagName("div");

/**
 * 改变dom节点的宽度值
 * @param {HTMLElement} dom dom节点
 * @param {Number} target 目标宽度值
 */
function changeWidth(dom, target) {
    clearInterval(dom.timer)
    let iCur, iSpeed;
    dom.timer = setInterval(() => {
        iCur = parseFloat(getComputedStyle(dom).width)
        iSpeed = (target - iCur) / 5;
        iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed)
        if (Math.abs(iCur - target) <= iSpeed) {
            clearInterval(dom.timer)
            dom.style.width = target + "px"
        } else {
            dom.style.width = iCur + iSpeed + "px"
        }
    }, 30);
}

// 遍历4个div 依次绑定鼠标移入和移出事件
for (let i = 0; i < oDivArr.length; i++) {
    oDivArr[i].onmouseenter = function () {
        changeWidth(this, 400);
    }
    oDivArr[i].onmouseleave = function () {
        changeWidth(this, 100)
    }
}