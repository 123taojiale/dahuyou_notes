/* No.1 */
// // 获取相关节点
// var oDiv1 = document.getElementById('demo1'),
//     oDiv2 = document.getElementById('demo2'),
//     btn1 = document.getElementsByClassName('btn1')[0],
//     btn2 = document.getElementsByClassName('btn2')[0],
//     oSpan = document.getElementsByClassName('line')[0]

// // 封装缓冲运动函数
// function startMove(dom, target) {
//     dom.timer = setInterval(() => {
//         let iSpeed = (target - dom.offsetLeft) / 7
//         // 随着与目标点之间的距离不断的接近 速度的值将会不断的减小 最终必然会减小到 0.xxx
//         // 由于dom.offsetLeft ==> 读取到到的数值将会舍去小数部分 
//         // 在这种情况下如果不对小数值的速度进行处理 那么物体将永远不会达到目标点 最后会卡死在目标点的附近
//         iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed)
//         if (dom.offsetLeft === target) {
//             clearInterval(dom.timer)
//         } else {
//             dom.style.left = dom.offsetLeft + iSpeed + 'px'
//         }
//     }, 30);
// }


// // 给按钮1和按钮2添加点击事件
// btn1.onclick = function () {
//     startMove(oDiv1, 300)
//     // bug ==> 目标点必须是整数...  否则 物体永远不会移动到目标点
// }
// btn2.onclick = function () {
//     startMove(oDiv2, 300)
// }






// /* No.2 */
// // 基本配置
// let config = {
//     oDiv1: document.querySelector("#demo1"),
//     oDiv2: document.querySelector("#demo2"),
//     btn1: document.querySelector(".btn1"),
//     btn2: document.querySelector(".btn2"),
//     span: document.querySelector(".line")
// }

// // console.log(config); // 测试

// /**
//  * 返回传入的dom节点的left属性值
//  * @param {HTMLElement} dom dom节点
//  */
// function getPositionLeft(dom) {
//     return parseFloat(getComputedStyle(dom).left);
// }

// /**
//  * 将传入的DOM节点 缓冲运动到目标位置
//  * @param {HTMLElement} dom dom节点
//  * @param {Number} target 目标位置
//  */
// function startMove(dom, target) {
//     if (dom.timer) {
//         return;
//     }
//     dom.timer = setInterval(() => {
//         var iCur = getPositionLeft(dom);
//         var iSpeed = (target - iCur) / 5;
//         iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
//         // console.log("1");
//         if (Math.abs(target - iCur) <= iSpeed) {
//             clearInterval(dom.timer);
//             dom.style.left = target + "px";
//         } else {
//             dom.style.left = iCur + iSpeed + "px";
//         }
//         console.log(iSpeed);
//     }, 30);

// }

// // 绑定两个按钮的点击事件
// config.btn1.onclick = function () {
//     startMove(config.oDiv1, getPositionLeft(config.span));
// }

// config.btn2.onclick = function () {
//     startMove(config.oDiv2, getPositionLeft(config.span));
// }