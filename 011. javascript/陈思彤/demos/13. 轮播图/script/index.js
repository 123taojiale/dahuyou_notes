/* No.1 */
// // 1. 先实现轮播图的自动轮播
// // 2. 给按钮添加上点击事件
// // 3. 给下面的小点添加事件

// var timer = null;
// var sliderPage = document.getElementsByClassName('sliderPage')[0];
// var moveWidth = sliderPage.children[0].offsetWidth;
// // 获取轮播图数量
// var num = sliderPage.children.length - 1;
// var leftBtn = document.getElementsByClassName('leftBtn')[0];
// var rightBtn = document.getElementsByClassName('rightBtn')[0];
// var oSpanArray = document.getElementsByClassName('sliderIndex')[0].getElementsByTagName('span');
// var lock = true; // 初值为 true ==> 第一次进入页面 or 页面刷新 ==> 开锁
// var index = 0;

// leftBtn.onclick = function () {
//     autoMove('right->left');
// }

// rightBtn.onclick = function () {
//     autoMove('left->right');
// }


// // for (var i = 0; i < oSpanArray.length; i++) {
// //     (function (myIndex) {
// //         oSpanArray[i].onclick = function () {
// //             lock = false;
// //             clearTimeout(timer);
// //             index = myIndex;
// //             startMove(sliderPage, {
// //                 left: -index * moveWidth
// //             }, function () {
// //                 lock = true;
// //                 timer = setTimeout(autoMove, 1500);
// //                 changeIndex(index);
// //             })
// //         }
// //     })(i)
// // }

// for (let i = 0; i < oSpanArray.length; i++) {
//     oSpanArray[i].onclick = function () {
//         lock = false;
//         clearTimeout(timer);
//         index = i
//         startMove(sliderPage, {
//             left: -index * moveWidth
//         }, function () {
//             lock = true;
//             timer = setTimeout(autoMove, 1500);
//             changeIndex(index);
//         })
//     }
// }


// // direction
// //默认轮播方向/right按钮  'left->right' / undefined
// //点击left按钮  'right->left' 
// function autoMove(direction) {
//     // 加锁 ==> 防止正在轮播的过程中 点击按钮 生效
//     if (lock) {
//         lock = false; // 开始轮播 ==> 加锁
//         clearTimeout(timer); // 
//         if (!direction || direction == 'left->right') {
//             index++;
//             startMove(sliderPage, {
//                 left: sliderPage.offsetLeft - moveWidth
//             }, function () {
//                 // 判断是否到最后一张
//                 if (index === 4) {
//                     index = 0;
//                     sliderPage.style.left = '0px';
//                 }
//                 timer = setTimeout(autoMove, 1500);
//                 lock = true; // 轮播结束 ==> 开锁
//                 changeIndex(index);
//             });
//         } else if (direction == 'right->left') {
//             // 解决第一张图片轮播时就点击 向左轮播按钮 而出现空白的 bug
//             if (sliderPage.offsetLeft == 0) {
//                 sliderPage.style.left = -num * moveWidth + 'px';
//                 index = num;
//             }
//             index--;
//             startMove(sliderPage, {
//                 left: sliderPage.offsetLeft + moveWidth
//             }, function () {
//                 timer = setTimeout(autoMove, 1500);
//                 lock = true; // 轮播结束 ==> 开锁
//                 changeIndex(index);
//             })
//         }
//     }
// }

// function changeIndex(_index) {
//     for (var i = 0; i < oSpanArray.length; i++) {
//         oSpanArray[i].className = '';
//     }
//     oSpanArray[_index].className = 'active';
// }

// timer = setTimeout(autoMove, 1500);



// // 尝试自己写一个 ==> 轮播图生成器... ==> ... 还没思路... 
// // HTMLDivElement.prototype.createTurnPage = function (
// //     [
// //         "./cat1.jpg",
// //         './cat2.jpg',
// //         './cat3.jpg'
// //     ]
// // ) {

// // }











/* No.2 */
// 1. 先实现轮播图的自动轮播
// 2. 给按钮添加上点击事件
// 3. 给下面的小点添加事件
// let config = {
//     timer: null,
//     sliderPage: document.querySelector(".sliderPage"),
//     moveWidth: document.querySelector(".sliderPage").children[0].offsetWidth,
//     num: document.querySelector(".sliderPage").children.length - 1,
//     leftBtn: document.querySelector(".leftBtn"),
//     rightBtn: document.querySelector(".rightBtn"),
//     oSpanArray: document.querySelector(".sliderIndex").getElementsByTagName("span"),
//     lock: true,
//     index: 0
// }

// config.leftBtn.onclick = function () {
//     autoMove('==>');
// }

// config.rightBtn.onclick = function () {
//     autoMove('<==');
// }

// for (let i = 0; i < config.oSpanArray.length; i++) {
//     config.oSpanArray[i].onclick = function () {
//         config.lock = false;
//         clearTimeout(config.timer);
//         config.index = i
//         startMove(config.sliderPage, {
//             left: -config.index * config.moveWidth
//         }, function () {
//             config.lock = true;
//             config.timer = setTimeout(autoMove, 1500);
//             changeIndex(config.index);
//         })
//     }
// }


// /**
//  * 自动轮播
//  * @param {String} direction 方向
//  */
// function autoMove(direction) {
//     // 加锁 ==> 防止正在轮播的过程中 点击按钮 生效
//     if (config.lock) {
//         config.lock = false; // 开始轮播 ==> 加锁
//         // clearTimeout(config.timer);
//         if (!direction || direction == '==>') {
//             config.index++;
//             startMove(config.sliderPage, {
//                 left: config.sliderPage.offsetLeft - config.moveWidth
//             }, function () {
//                 if (config.index === 4) { // 判断是否到最后一张
//                     config.index = 0;
//                     config.sliderPage.style.left = '0px';
//                 }
//                 config.timer = setTimeout(autoMove, 1500);
//                 config.lock = true; // 轮播结束 ==> 开锁
//                 changeIndex(config.index);
//             });
//         } else if (direction == '<==') {
//             if (config.sliderPage.offsetLeft == 0) { // 解决第一张图片轮播时就点击 向左轮播按钮 而出现空白的 bug
//                 config.sliderPage.style.left = -config.num * config.moveWidth + 'px';
//                 config.index = config.num;
//             }
//             config.index--;
//             startMove(config.sliderPage, {
//                 left: config.sliderPage.offsetLeft + config.moveWidth
//             }, function () {
//                 config.timer = setTimeout(autoMove, 1500);
//                 config.lock = true; // 轮播结束 ==> 开锁
//                 changeIndex(config.index);
//             })
//         }
//     }
// }

// /**
//  * 切换轮播点
//  * @param {Number} _index 轮播小点下标
//  * 1. 先清楚所有span的className;
//  * 2. 再给指定的 span 加上对应的 className
//  */
// function changeIndex(_index) {
//     for (let i = 0; i < config.oSpanArray.length; i++) {
//         config.oSpanArray[i].className = '';
//     }
//     config.oSpanArray[_index].className = 'active';
// }

// config.timer = setTimeout(autoMove, 1500);













// /* No.3 */
// // 1. 基本配置信息
// let config = {
//     isLocked: false,
//     sliderPage: document.querySelector(".sliderPage"),
//     index: 0,
//     leftBtn: document.querySelector(".leftBtn"),
//     rightBtn: document.querySelector(".rightBtn"),
//     oSpanArray: document.querySelector(".sliderIndex").children,
// }

// config.num = config.sliderPage.children.length - 1;
// config.moveWidth = config.sliderPage.children[0].clientWidth;

// config.rightBtn.onclick = function () {
//     autoMove("==>")
// }
// config.leftBtn.onclick = function () {
//     autoMove("<==")
// }

// for (let i = 0; i < config.oSpanArray.length; i++) {
//     config.oSpanArray[i].onclick = function () {
//         if (!config.isLocked) {
//             config.isLocked = true
//             config.index = i;
//             startMove(config.sliderPage, {
//                 left: -config.index * config.moveWidth
//             }, function () {
//                 config.isLocked = false
//                 setTimeout(autoMove, 500)
//                 changeIndex(config.index)
//             })
//         }
//     }
// }

// /**
//  * 自动轮播
//  * @param {String} direction 方向
//  */
// function autoMove(direction) {
//     if (!config.isLocked) {
//         config.isLocked = true
//         if (direction === "==>" || !direction) {
//             config.index++
//             startMove(config.sliderPage, {
//                 left: config.sliderPage.offsetLeft - config.moveWidth
//             }, function () {
//                 if (config.index === config.num) {
//                     config.index = 0
//                     config.sliderPage.style.left = "0px"
//                 }
//                 config.isLocked = false
//                 setTimeout(autoMove, 500)
//                 changeIndex(config.index)
//             })
//         } else if (direction === "<==") {
//             if (config.index === 0) {
//                 config.index = config.num
//                 config.sliderPage.style.left = -config.index * config.moveWidth + "px"
//             }
//             config.index--
//             startMove(config.sliderPage, {
//                 left: config.sliderPage.offsetLeft + config.moveWidth
//             }, function () {
//                 config.isLocked = false
//                 setTimeout(autoMove, 500)
//                 changeIndex(config.index)
//             })
//         }
//     }

// }


// /**
//  * 切换轮播点
//  * @param {Number} _index 轮播小点下标
//  * 1. 先清除所有span的className;
//  * 2. 再给指定的 span 加上对应的 className
//  */
// function changeIndex(_index) {
//     for (let i = 0; i < config.oSpanArray.length; i++) {
//         config.oSpanArray[i].className = ""
//     }
//     config.oSpanArray[_index].className = "active"
// }

// setTimeout(autoMove, 1500)






// /* No.4 */
// // 基本配置
// let config = {
//     dom: {
//         ulSliderPage: document.querySelector(".sliderPage"),
//         divLeftBtn: document.querySelector(".leftBtn"),
//         divRightBtn: document.querySelector(".rightBtn"),
//         divSliderIndex: document.querySelector(".sliderIndex")
//     },
//     isLocked: false,
//     index: 0
// }

// config.moveWidth = config.dom.ulSliderPage.children[0].clientWidth
// config.imgNum = config.dom.ulSliderPage.children.length - 1
// config.dom.dotsArr = config.dom.divSliderIndex.children;

// config.dom.divLeftBtn.onclick = function () {
//     autoMove("<==")
// }
// config.dom.divRightBtn.onclick = function () {
//     autoMove("==>")
// }

// for (let i = 0; i < config.dom.dotsArr.length; i++) {
//     config.dom.dotsArr[i].onclick = function () {
//         if (!config.isLocked) {
//             config.isLocked = true
//             config.index = i
//             startMove(config.dom.ulSliderPage, {
//                 left: -i * config.moveWidth
//             }, function () {
//                 config.isLocked = false
//                 changeIndex(config.index)
//                 setTimeout(autoMove, 500)
//             })
//         }
//     }
// }

// function autoMove(direction) {
//     if (!config.isLocked) {
//         config.isLocked = true
//         if (!direction || direction === "==>") {
//             config.index++
//             startMove(config.dom.ulSliderPage, {
//                 left: config.dom.ulSliderPage.offsetLeft - config.moveWidth
//             }, function () {
//                 if (config.index === config.imgNum) {
//                     config.index = 0
//                     config.dom.ulSliderPage.style.left = "0px"
//                 }
//                 config.isLocked = false
//                 changeIndex(config.index)
//                 setTimeout(autoMove, 500)
//             })
//         } else if (direction === "<==") {
//             if (config.index === 0) {
//                 config.index = config.imgNum
//                 config.dom.ulSliderPage.style.left = -config.imgNum * config.moveWidth + "px"
//             }
//             startMove(config.dom.ulSliderPage, {
//                 left: config.dom.ulSliderPage.offsetLeft + config.moveWidth
//             }, function () {
//                 config.isLocked = false
//                 config.index--
//                 changeIndex(config.index)
//                 setTimeout(autoMove, 500)
//             })
//         }
//     }
// }

// changeIndex = function (_index) {
//     for (let i = 0; i < config.dom.dotsArr.length; i++) {
//         config.dom.dotsArr[i].className = ""
//     }
//     config.dom.dotsArr[_index].className = "active"
// }

// setTimeout(autoMove, 500)