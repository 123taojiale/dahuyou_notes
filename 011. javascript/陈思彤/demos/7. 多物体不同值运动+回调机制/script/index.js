/* No.1 */
// // 1. 获取元素
// const oDiv1 = document.getElementById('demo1'),
//     oDiv2 = document.getElementById('demo2')

// // 2. 绑定事件
// oDiv1.onclick = function () {
//     startChange(oDiv1, {
//         width: 300,
//         height: 300,
//         opacity: 50,
//         left: 300,
//         top: 300
//     }, function () {
//         startChange(oDiv2, {
//             width: 300,
//             height: 300,
//             opacity: 50,
//             left: 300,
//             top: 300
//         }, function () {
//             alert('over')
//         })
//     })
// }

// /**
//  * 将传入的dom节点的一系列CSS属性改变到目标值 并在改变一个dom节点后 调用回调函数
//  * @param {HTMLElement} dom dom节点
//  * @param {Object} ObjAttr CSS属性对象 key:需要改变的属性 value: 目标值
//  * @param {Function} callback 回调函数
//  */
// function startChange(dom, ObjAttr, callback) {
//     clearInterval(dom.timer)
//     let iSpeed = null,
//         iCur = null
//     dom.timer = setInterval(() => {
//         var bStop = true
//         // 但凡有一个attr没有达到目标值 bStop 都将被设置为 false
//         for (var attr in ObjAttr) {
//             // 1. 获取属性的当前值
//             if (attr === 'opacity') {
//                 iCur = parseFloat(getComputedStyle(dom)[attr]) * 100
//             } else {
//                 iCur = parseInt(getComputedStyle(dom)[attr])
//             }
//             // 2. 设置速度
//             iSpeed = (ObjAttr[attr] - iCur) / 7
//             iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed)
//             // 3. 修改属性值
//             if (attr === 'opacity') {
//                 dom.style[attr] = (iCur + iSpeed) / 100
//             } else {
//                 dom.style[attr] = iCur + iSpeed + 'px'
//             }
//             // 4. 判断是否清除定时器
//             if (iCur !== ObjAttr[attr]) {
//                 bStop = false
//             }
//             // Q ==> 下面这种写法存在 BUG...  目前还不清楚原因
//             // bStop = iCur !== ObjAttr[attr] ? false : true
//             // 解决bug ==> 注意 下面这种写法 和 上面这种写法的不同
//             // bStop = iCur !== ObjAttr[attr] ? false : bStop
//         }
//         // 一个dom运动完之后 再调用回调函数
//         if (bStop) {
//             clearInterval(dom.timer)
//             typeof callback === 'function' && callback()
//         }
//     }, 30);
// }

// // 小结
// // 1. 三目运算符那个BUG..  卡了蛮久..  不知道为什么会有BUG
// // 2. 点击事件 ==> 绑定 startChange() 的时候 ==> 用一个 function() { startChange() } 来包一下, 
// // 否则直接将其作为参数传入 就等价于直接调用了回调函数






// /* No.2 */
// 1. 获取元素
const oDiv1 = document.querySelector("#demo1"),
    oDiv2 = document.querySelector("#demo2");


// 2. 绑定事件
oDiv1.onclick = function () {
    startChange(this, {
        width: 300,
        height: 300,
        opacity: 50,
        left: 300,
        top: 300
    }, function () {
        startChange(oDiv2, {
            width: 300,
            height: 300,
            opacity: 50,
            left: 300,
            top: 300
        }, function () {
            alert("over")
        })
    })
}


/**
 * 将传入的dom节点的一系列CSS属性改变到目标值 并在改变一个dom节点后 调用回调函数
 * @param {HTMLElement} dom dom节点
 * @param {Object} ObjAttr CSS属性对象 key:需要改变的属性 value: 目标值
 * @param {Function} callback 回调函数
 */
function startChange(dom, ObjAttr, callback) {
    clearInterval(dom.timer)
    let iCur, iSpeed;
    dom.timer = setInterval(() => {
        let bStop = true
        for (attr in ObjAttr) {
            if (attr === "opacity") {
                iCur = parseFloat(getComputedStyle(dom)[attr]) * 100
            } else {
                iCur = parseFloat(getComputedStyle(dom)[attr])
            }
            iSpeed = (ObjAttr[attr] - iCur) / 7
            iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed)
            if (Math.abs(ObjAttr[attr] - iCur) <= Math.abs(iSpeed)) {
                if (attr === "opacity") {
                    dom.style[attr] = ObjAttr[attr] / 100
                } else {
                    dom.style[attr] = ObjAttr[attr] + "px"
                }
            } else {
                if (attr === "opacity") {
                    dom.style[attr] = (iCur + iSpeed) / 100
                } else {
                    dom.style[attr] = iCur + iSpeed + "px"
                }
            }
            console.log(iCur, ObjAttr[attr]);
            if (iCur !== ObjAttr[attr]) {
                bStop = false
            }
        }
        if (bStop) {
            clearInterval(dom.timer)
            typeof callback === "function" && callback()
        }
    }, 30);
}


/* 
width: 300,
height: 300,
opacity: 50,
left: 300,
top: 300
 */

/* No.3 */
// // 1. 获取元素


// // 2. 绑定事件
// oDiv1.onclick = function () {}


// /**
//  * 将传入的dom节点的一系列CSS属性改变到目标值 并在改变一个dom节点后 调用回调函数
//  * @param {HTMLElement} dom dom节点
//  * @param {Object} ObjAttr CSS属性对象 key:需要改变的属性 value: 目标值
//  * @param {Function} callback 回调函数
//  */
// function startChange(dom, ObjAttr, callback) {}