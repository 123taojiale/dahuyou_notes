// /* No.1 */
// const oDiv = document.getElementById('demo')
// oDiv.onclick = function () {
//     startMove(this)
// }

// /**
//  * 模拟重力场
//  * @param {HTMLElement} dom dom节点
//  */
// function startMove(dom) {
//     clearInterval(dom.timer)
//     let iSpeedX = 8,
//         iSpeedY = 10,
//         g = 3
//     dom.timer = setInterval(() => {
//         iSpeedY += g
//         let newTop = iSpeedY + dom.offsetTop,
//             newLeft = iSpeedX + dom.offsetLeft

//         // 底部检测
//         if (newTop > document.documentElement.clientHeight - dom.clientHeight) {
//             iSpeedY *= -1
//             iSpeedY *= 0.8
//             iSpeedX *= 0.8
//             newTop = document.documentElement.clientHeight - dom.clientHeight
//         }
//         // 顶部检测
//         if (newTop < 0) {
//             iSpeedY *= -1
//             iSpeedY *= 0.8
//             iSpeedX *= 0.8
//             newTop = 0
//         }
//         // 右侧检测
//         if (newLeft > document.documentElement.clientWidth - dom.clientWidth) {
//             iSpeedX *= -1
//             iSpeedX *= 0.8
//             iSpeedY *= 0.8
//             newLeft = document.documentElement.clientWidth - dom.clientWidth
//         }
//         // 左侧检测
//         if (newLeft < 0) {
//             iSpeedX *= -1
//             iSpeedX *= 0.8
//             iSpeedY *= 0.8
//             newLeft = 0
//         }

//         if (Math.abs(iSpeedX) < 1) {
//             iSpeedX = 0
//         }
//         if (Math.abs(iSpeedY) < 1) {
//             iSpeedY = 0
//         }

//         if (iSpeedX == 0 && iSpeedY == 0 && newTop == document.documentElement.clientHeight - dom
//             .clientHeight) {
//             clearInterval(dom.timer)
//             console.log('over')
//         } else {
//             dom.style.top = newTop + 'px'
//             dom.style.left = newLeft + 'px'
//         }
//     }, 30);
// }







/* No.2 */
const oDiv = document.getElementById('demo')
oDiv.onclick = function () {
    startMove(this)
}

/**
 * 模拟重力场
 * @param {HTMLElement} dom dom节点
 */
function startMove(dom) {
    clearInterval(dom.timer)
    let g = 3,
        iSpeedX = 10,
        iSpeedY = 10;
    dom.timer = setInterval(() => {
        iSpeedY += g;
        newTop = dom.offsetTop + iSpeedY;
        newLeft = dom.offsetLeft + iSpeedX;

        // 底部检测
        if (newTop > document.documentElement.clientHeight - dom.clientHeight) {
            iSpeedY *= -1;
            iSpeedX *= 0.8;
            iSpeedY *= 0.8;
            newTop = document.documentElement.clientHeight - dom.clientHeight
        }
        // 顶部检测
        if (newTop < 0) {
            iSpeedY *= -1;
            iSpeedX *= 0.8;
            iSpeedY *= 0.8;
            newTop = 0
        }
        // 右侧检测
        if (newLeft > document.documentElement.clientWidth - dom.clientWidth) {
            iSpeedX *= -1;
            iSpeedX *= 0.8;
            iSpeedY *= 0.8;
            newLeft = document.documentElement.clientWidth - dom.clientWidth
        }
        // 左侧检测
        if (newLeft < 0) {
            iSpeedX *= -1;
            iSpeedX *= 0.8;
            iSpeedY *= 0.8;
            newLeft = 0
        }

        if (Math.abs(iSpeedY) < 1 && Math.abs(iSpeedX) < 1 && newTop === document.documentElement.clientHeight - dom.clientHeight) {
            clearInterval(dom.timer)
            dom.style.left = newLeft + "px";
            dom.style.top = newTop + "px";
            console.log("over");
        } else {
            dom.style.left = newLeft + "px";
            dom.style.top = newTop + "px";
        }
    }, 30);
}