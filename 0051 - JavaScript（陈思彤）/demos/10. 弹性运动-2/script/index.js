/* No.1 */
// // 1. 获取节点
// const oLiArr = document.getElementsByClassName('ele'),
//     oLibg = document.getElementsByClassName('bg')[0]

// // 2. 绑定事件
// for (let i = 0; i < oLiArr.length; i++) {
//     oLiArr[i].onmouseenter = function () {
//         // startMove(oLibg, oLiArr[i].offsetLeft);
//         startMove(oLibg, this.offsetLeft);
//     }
// }

// /**
//  * 缓冲运动
//  * @param {HTMLElement} dom dom节点
//  * @param {Number} target 目标值
//  */
// function startMove(dom, target) {
//     // 1. 关闭前一个定时器 并 定义相关变量
//     clearInterval(dom.timer);
//     let a,
//         iSpeed = 0,
//         iCur;
//     // 2. 开启定时器
//     dom.timer = setInterval(() => {
//         iCur = dom.offsetLeft
//         // 1. 设置 加速度 和 速度
//         a = (target - iCur) / 7;
//         iSpeed += a;
//         iSpeed *= 0.8;
//         // 2. 开始运动 并 设置运动的停止条件
//         if (Math.abs(iSpeed) < 1 && Math.abs(iCur - target) < 1) {
//             clearInterval(dom.timer);
//             dom.style.left = target + 'px';
//         } else {
//             dom.style.left = iCur + iSpeed + 'px';
//         }
//     }, 30);
// }






/* No.2 */
// 1. 获取节点
const oLiArr = document.getElementsByClassName("ele"),
    oLibg = document.getElementsByClassName("bg")[0];

// 2. 绑定事件
for (let i = 0; i < oLiArr.length; i++) {
    oLiArr[i].onmouseenter = function () {
        startMove(oLibg, oLiArr[i].offsetLeft)
    }
}

/**
 * 缓冲运动
 * @param {HTMLElement} dom dom节点
 * @param {Number} target 目标值
 */
function startMove(dom, target) {
    clearInterval(dom.timer)
    let a,
        iSpeed = 0,
        iCur;
    dom.timer = setInterval(() => {
        console.log(1);
        iCur = dom.offsetLeft
        a = (target - iCur) / 7
        iSpeed += a;
        iSpeed *= 0.8;
        if (Math.abs(target - iCur) < 1 && Math.abs(iSpeed) < 1) {
            clearInterval(dom.timer)
            dom.style.left = target + "px"
        } else {
            dom.style.left = iCur + iSpeed + "px"
        }
    }, 30);
}