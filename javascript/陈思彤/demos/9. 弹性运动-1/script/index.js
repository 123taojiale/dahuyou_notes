/* No.1 */
// // 1. 获取节点
// const oDiv = document.getElementById('demo'),
//     oSpan = document.getElementsByTagName("span")[0];

// // 2. 绑定事件
// oDiv.onclick = function () {
//     startMove(oDiv, parseFloat(getComputedStyle(oSpan).left));
// }

// /**
//  * 将dom节点弹性运动到目标值
//  * @param {HTMLElement} dom dom节点
//  * @param {Number} target 目标值
//  */
// function startMove(dom, target) {
//     // 1. 关闭前一个定时器 并 定义相关变量
//     clearInterval(dom.timer);
//     let a,
//         iCur,
//         iSpeed = 0;
//     // 2. 开启定时器
//     dom.timer = setInterval(() => {
//         console.log("1")
//         iCur = parseFloat(getComputedStyle(dom).left)
//         // 1. 设置 加速度 和 速度
//         a = (target - iCur) / 7; // 加速度在变化 随着距离目标点越近 加速度的值越小
//         iSpeed += a;
//         iSpeed *= 0.8; // 物体在运动过程中 由于受到 摩擦力 的作用, 速度会逐步减小
//         // 2. 重点 ==> 停止运动的条件
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
const oDiv = document.getElementById('demo'),
    oSpan = document.getElementsByTagName("span")[0];

// 2. 绑定事件
oDiv.onclick = function () {
    startMove(this, parseFloat(getComputedStyle(oSpan).left))
}
// console.log(parseFloat(getComputedStyle(oSpan).left)) // 300

/**
 * 将dom节点弹性运动到目标值
 * @param {HTMLElement} dom dom节点
 * @param {Number} target 目标值
 */
function startMove(dom, target) {
    clearInterval(dom.timer);
    let a,
        iCur,
        iSpeed = 0;
    dom.timer = setInterval(() => {
        // console.log("1")
        iCur = parseFloat(getComputedStyle(dom).left);
        a = (target - iCur) / 7;
        iSpeed += a;
        iSpeed *= 0.8;
        if (Math.abs(target - iCur) <= 1 && Math.abs(iSpeed) <= 1) {
            clearInterval(dom.timer);
            dom.style.left = target + "px"
        } else {
            dom.style.left = iCur + iSpeed + "px"
        }
    }, 30);
}