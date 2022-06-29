// /* No.1 */
// // 获取相关节点
// let config = {
//     oDiv1: document.getElementById('wrapper1'),
//     oDiv2: document.getElementById('wrapper2'),
//     oSpan1: document.getElementsByClassName('click')[0],
//     oSpan2: document.getElementsByClassName('move')[0]
// }

// /**
//  * 将传入的dom弹出
//  * @param {HTMLElement} dom 需要弹出的隐藏内容
//  * @param {Number} target 弹出的距离
//  */
// function startMove(dom, target) {
//     clearInterval(dom.timer);
//     // if (dom.timer) { // 此时这种处理方式体验效果不好
//     //     return;
//     // }
//     dom.timer = setInterval(() => {
//         let iCur = getPositionLeft(dom);
//         let iSpeed = (target - iCur) / 7;
//         iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
//         if (iCur === target) {
//             clearInterval(dom.timer);
//             // dom.timer = null;
//         } else {
//             dom.style.left = iCur + iSpeed + 'px'
//         }
//         console.log("1");
//     }, 30);
// }

// /**
//  * 返回传入的dom节点的left属性值
//  * @param {HTMLElement} dom 传入的dom节点
//  */
// function getPositionLeft(dom) {
//     return parseFloat(getComputedStyle(dom).left);
// }

// // 事件捕获
// var num = 0;
// config.oSpan1.onclick = function () {
//     if (num % 2 === 0) {
//         startMove(config.oDiv1, 0);
//         num++;
//     } else {
//         startMove(config.oDiv1, -300);
//         num++;
//     }
// }

// // 事件捕获
// config.oDiv2.onmouseenter = function () {
//     startMove(config.oDiv2, 0)
// }
// config.oDiv2.onmouseleave = function () {
//     startMove(config.oDiv2, -300)
// }


/* [思考 ==> DOM中offsetLeft与style.left的区别] */


/* No.2 */
// 获取相关节点
let config = {
    // oDiv1: document.querySelector("#wrapper1"),
    oDiv2: document.querySelector("#wrapper2"),
    // oSpan1: document.querySelector(".click"),
    oSpan2: document.querySelector(".moveon")
}

/**
 * 将传入的dom弹出
 * @param {HTMLElement} dom 需要弹出的隐藏内容
 * @param {Number} target 弹出的距离
 */
function startMove(dom, target) {
    clearInterval(dom.timer)
    let iCur, iSpeed
    dom.timer = setInterval(() => {
        iCur = dom.offsetLeft
        iSpeed = (target - iCur) / 7;
        iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
        if (Math.abs(iCur - target) <= iSpeed) {
            clearInterval(dom.timer);
            dom.style.left = target + "px"
        } else {
            dom.style.left = iCur + iSpeed + "px"
        }
        console.log("1")
    }, 30);
}

// 注册事件
// let num = 0;
// config.oDiv1.onclick = function () {
//     if (num % 2 === 0) {
//         startMove(this, 0)
//         num++
//     } else {
//         startMove(this, -300)
//         num++
//     }
// }

// onmouseenter 和 onmouseleave 不会冒泡
// 利用事件捕获 ==> 实现事件委托(事件代理)
config.oDiv2.onmouseenter = function () {
    startMove(this, 0)
}
config.oDiv2.onmouseleave = function () {
    startMove(this, -300)
}