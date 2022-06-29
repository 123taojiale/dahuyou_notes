// /* No.1 */
// var oDiv = document.getElementById('demo');

// /**
//  * 实现dom节点的透明度缓冲改变
//  * @param {HTMLElement} dom dom节点
//  * @param {Number} target 目标透明度(单位%)
//  */
// function changeOpacity(dom, target) {
//     clearInterval(dom.timer);
//     let iSpeed, iCur;
//     dom.timer = setInterval(() => {
//         iCur = +dom.style.opacity * 100
//         iSpeed = (target - iCur) / 7
//         iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed)
//         if (iCur === target) {
//             clearInterval(dom.timer)
//             console.log('iSpeed ==> ' + iSpeed);
//         } else {
//             dom.style.opacity = (iCur + iSpeed) / 100
//             console.log('iSpeed ==> ' + iSpeed);
//         }
//     }, 30);
// }

// // 3. 绑定点击事件
// oDiv.onclick = function () {
//     changeOpacity(this, 50);
// }



// /* No.2 */
// const oDiv = document.querySelector("#demo")

// /**
//  * 实现dom节点的透明度缓冲改变
//  * @param {HTMLElement} dom dom节点
//  * @param {Number} target 目标透明度(单位%)
//  */
// function changeOpacity(dom, target) {
//     clearInterval(dom.tiemr)
//     let iCur, iSpeed;
//     dom.timer = setInterval(() => {
//         iCur = +dom.style.opacity * 100
//         iSpeed = (target - iCur) / 7
//         iSpeed = iSpeed > 0? Math.ceil(iSpeed) : Math.floor(iSpeed);
//         if (iCur === target) {
//             clearInterval(dom.tiemr)
//         } else {
//             dom.style.opacity = (iCur + iSpeed) / 100
//         }
//     }, 30);
// }

// // 3. 绑定点击事件
// oDiv.onclick = function () {
//     changeOpacity(this, 20)
// }