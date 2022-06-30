// /* No.1 */
// const oDiv = document.getElementById('demo')
// let lastX = 0,
//     lastY = 0,
//     iSpeedX = 0,
//     iSpeedY = 0

//     /**
//      * 
//      * @param {MouseEvent} e 鼠标事件对象
//      */
// oDiv.onmousedown = function (e) {
//     clearInterval(this.timer)
//     // 2. 确定位置 鼠标点击 相对于 元素左上角
//     let disX = e.clientX - this.offsetLeft,
//         disY = e.clientY - this.offsetTop;
//     document.onmousemove = (e) => {
//         // 2. 确定元素左上角的坐标 ==> 获取的是最新的坐标
//         let newLeft = e.clientX - disX,
//             newTop = e.clientY - disY;
//         // 3. 利用 onmousedown 监听事件的时间间隔来确定速度
//         iSpeedX = newLeft - lastX;
//         iSpeedY = newTop - lastY;
//         // 4. 保留上一个时间点的坐标
//         lastX = newLeft;
//         lastY = newTop;
//         // 5. 更新元素的坐标位置
//         this.style.left = newLeft + 'px';
//         this.style.top = newTop + 'px';
//     }
//     document.onmouseup = () => {
//         // 注销事件
//         // 1. 清除鼠标抬起事件 ==> 不理解... 貌似如果不取消 那么就会保持上一次的 iSpeedX, iSpeedY 可以取消掉注释 然后狂点鼠标来玩...
//         document.onmouseup = null;
//         // 2. 清除鼠标移动事件 ==> 不理解... 如果不注释掉 那么鼠标一旦移动 那么元素就会回到鼠标所在位置...
//         document.onmousemove = null;
//         startMove(this, iSpeedX, iSpeedY);
//     }
// }

// function startMove(dom, iSpeedX, iSpeedY) {
//     clearInterval(dom.timer)
//     let g = 3
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


/* 小结:
1. 注销事件; */



// /* No.2 */
// const oDiv = document.getElementById("demo");

// let iSpeedX,
//     iSpeedY,
//     lastLeft,
//     lastTop;

// /**
//  * 
//  * @param {MouseEvent} e 
//  */
// oDiv.onmousedown = function (e) {
//     let disX = e.clientX - this.offsetLeft,
//         disY = e.clientY - this.offsetTop;

//     window.onmousemove = function (e) {
//         let newLeft = e.clientX - disX,
//             newTop = e.clientY - disY;
//         oDiv.style.left = newLeft + "px";
//         oDiv.style.top = newTop + "px";
//         iSpeedX = newLeft - lastLeft;
//         iSpeedY = newTop - lastTop;
//         lastLeft = newLeft;
//         lastTop = newTop;
//         console.log(iSpeedX, iSpeedY);
//     }
//     window.onmouseup = function () {
//         window.onmouseup = null;
//         window.onmousemove = null;
//         startMove(oDiv, iSpeedX, iSpeedY);
//     }
// }

// /**
//  * 重力场
//  * @param {HTMLElement} dom dom节点
//  * @param {Number} iSpeedX 横向速度
//  * @param {Number} iSpeedY 纵向速度
//  */
// function startMove(dom, iSpeedX, iSpeedY) {
//     clearInterval(dom.timer);
//     let g = 1;
//     dom.timer = setInterval(() => {
//         iSpeedY += g;
//         let newLeft = dom.offsetLeft + iSpeedX;
//         let newTop = dom.offsetTop + iSpeedY;
//         // 上
//         if (newTop < 0) {
//             iSpeedY *= -1;
//             iSpeedX *= 0.8;
//             iSpeedY *= 0.8;
//             newTop = 0;
//         }
//         // 右
//         if (newLeft > document.documentElement.clientWidth - dom.clientWidth) {
//             iSpeedX *= -1;
//             iSpeedX *= 0.8;
//             iSpeedY *= 0.8;
//             newLeft = document.documentElement.clientWidth - dom.clientWidth;
//         }
//         // 下
//         if (newTop > document.documentElement.clientHeight - dom.clientHeight) {
//             iSpeedY *= -1;
//             iSpeedX *= 0.8;
//             iSpeedY *= 0.8;
//             newTop = document.documentElement.clientHeight - dom.clientHeight;
//         }
//         // 左
//         if (newLeft < 0) {
//             iSpeedX *= -1;
//             iSpeedX *= 0.8;
//             iSpeedY *= 0.8;
//             newLeft = 0;
//         }
//         if (Math.abs(iSpeedX) < 1) {
//             iSpeedX = 0;
//         }
//         if (Math.abs(iSpeedY) < 1) {
//             iSpeedY = 0;
//         }
//         if (iSpeedX === 0 && iSpeedY === 0 && newTop === document.documentElement.clientHeight - dom.clientHeight) {
//             clearInterval(dom.timer);
//             console.log("over")
//         } else {
//             dom.style.left = newLeft + "px";
//             dom.style.top = newTop + "px";
//         }
//     }, 30);
// }