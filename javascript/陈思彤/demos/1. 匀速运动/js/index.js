/* No.2 */
// 基本配置信息
let config = {
    oDiv1: document.querySelector("#demo1"),
    oDiv2: document.querySelector("#demo2"),
    btn1: document.querySelector(".btn1"),
    btn2: document.querySelector(".btn2"),
    span: document.querySelector(".line")
}

// console.log(config);

/**
 * 传入一个dom节点 ==> 得到这个dom节点的left值
 * @param {HTMLElement} dom 
 */
function getLeftPosition(dom) {
    return parseFloat(getComputedStyle(dom).left);
}

/**
 * 匀速运动函数
 * @param {HTMLElement} dom dom节点
 * @param {Number} target 目标点
 */
function startMove(dom, target) {
    if (dom.timer) { // 防止多次点击
        return
    }
    dom.timer = setInterval(() => {
        var iCur = getLeftPosition(dom); // 当前值
        var iSpeed = target - iCur > 0 ? 7 : -7; // 当前速度值
        // 如果某次的当前位置与目标点之间的距离 小于 速度的绝对值 也就是一次可以运动到 那么直接将 dom 运动到目标点即可
        if (Math.abs(iCur - target) < Math.abs(iSpeed)) {
            dom.style.left = target + "px";
            clearInterval(dom.timer); // 记得关闭定时器
        } else {
            dom.style.left = iSpeed + iCur + "px";
        }
        // console.log("1"); // 测试定时器是否关闭
    }, 30);
}


// 给按钮1和按钮2添加点击事件
config.btn1.onclick = function () {
    startMove(config.oDiv1, getLeftPosition(config.span));
}

config.btn2.onclick = function () {
    startMove(config.oDiv2, getLeftPosition(config.span));
}



/* No.1 */
// // 获取相关节点
// var oDiv1 = document.getElementById('demo1'),
//     oDiv2 = document.getElementById('demo2'),
//     btn1 = document.getElementsByClassName('btn1')[0],
//     btn2 = document.getElementsByClassName('btn2')[0],
//     oSpan = document.getElementsByClassName('line')[0]

// // console.log(oDiv1);
// // console.log(oDiv2);
// // console.log(btn1);
// // console.log(btn2);
// // console.log(oSpan);

// /**
//  * 匀速运动函数
//  * @param {Node} dom dom节点
//  * @param {Number} target 目标点
//  */
// function startMove(dom, target) {
//     dom.timer = setInterval(() => {
//         var iSpeed = target - dom.offsetLeft > 0 ? 7 : -7
//         if (Math.abs(dom.offsetLeft - target) < iSpeed) {
//             clearInterval(dom.timer)
//             dom.style.left = target + 'px'
//         } else {
//             dom.style.left = dom.offsetLeft + iSpeed + 'px'
//         }
//     }, 30);
// }
// // 给按钮1和按钮2添加点击事件
// btn1.onclick = function () {
//     startMove(oDiv1, 300)
//     // Q ==> 尝试不要将第二个参数写死
// }
// btn2.onclick = function () {
//     startMove(oDiv2, 300)
// }