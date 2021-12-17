/* No.1 */
// /**
//  * 带有回调机制的运动函数
//  * @param {HTMLElement} dom dom节点
//  * @param {Object} attrObj 需要改变的CSS属性对象
//  * @param {Function} callback 回调函数
//  */
// function startMove(obj, data, func) {
//     clearInterval(obj.timer);
//     var iSpeed;
//     var iCur;
//     var name;
//     obj.timer = setInterval(function () {
//         var bStop = true;
//         for (var attr in data) {
//             if (attr === 'opacity') {
//                 name = attr;
//                 iCur = parseFloat(getComputedStyle(obj)[attr]) * 100;
//             } else {
//                 iCur = parseInt(getComputedStyle(obj)[attr]);
//             }
//             iSpeed = (data[attr] - iCur) / 8;

//             if (iSpeed > 0) {
//                 iSpeed = Math.ceil(iSpeed);
//             } else {
//                 iSpeed = Math.floor(iSpeed);
//             }

//             if (attr === 'opacity') {
//                 obj.style.opacity = (iCur + iSpeed) / 100;
//             } else {
//                 obj.style[attr] = iCur + iSpeed + 'px';
//             }
//             if (Math.floor(Math.abs(data[attr] - iCur)) != 0) {
//                 bStop = false;
//             }
//         }
//         if (bStop) {
//             clearInterval(obj.timer);
//             if (name === 'opacity') {
//                 obj.style.opacity = data[name] / 100;
//             }
//             func();
//         }
//     }, 30);
// }





/* No.2 */
// /**
//  * 带有回调机制的运动函数
//  * @param {HTMLElement} dom dom节点
//  * @param {Object} attrObj 需要改变的CSS属性对象
//  * @param {Function} callback 回调函数
//  */
// function startMove(dom, attrObj, callback) {
//     clearInterval(dom.timer);
//     let iCur,
//         iSpeed;
//     dom.timer = setInterval(() => {
//         var bStop = true;
//         for (let attr in attrObj) {
//             if (attr === "opacity") {
//                 iCur = parseFloat(getComputedStyle(dom)[attr]) * 100;
//             } else {
//                 iCur = parseFloat(getComputedStyle(dom)[attr]);
//             }

//             iSpeed = (attrObj[attr] - iCur) / 7;
//             iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);

//             if (attr === "opacity") {
//                 if (Math.abs(iCur - attrObj[attr]) <= Math.abs(iSpeed)) {
//                     dom.style[attr] = attrObj[attr] * 100
//                 } else {
//                     dom.style[attr] = (iCur + iSpeed) * 100
//                 }
//             } else {
//                 if (Math.abs(iCur - attrObj[attr]) <= Math.abs(iSpeed)) {
//                     dom.style[attr] = attrObj[attr] + "px"
//                 } else {
//                     dom.style[attr] = (iCur + iSpeed) + "px"
//                 }
//             }
//             if (iCur !== attrObj[attr]) {
//                 bStop = false;
//             }
//         }
//         if (bStop) {
//             clearInterval(dom.timer);
//             typeof callback === "function" && callback();
//         }
//     }, 30);
// }





/* No.3 */
/**
 * 带有回调机制的运动函数
 * @param {HTMLElement} dom dom节点
 * @param {Object} attrObj 需要改变的CSS属性对象
 * @param {Function} callback 回调函数
 */
function startMove(dom, attrObj, callback) {
    clearInterval(dom.timer)
    let iSpeed,
        iCur;
    dom.timer = setInterval(() => {
        let bStop = true
        for (let attr in attrObj) {
            if (attr === "opacity") {
                iCur = parseFloat(getComputedStyle(dom)[attr]) * 100
            } else {
                iCur = parseFloat(getComputedStyle(dom)[attr])
            }

            iSpeed = (attrObj[attr] - iCur) / 7
            iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed)

            if (Math.abs(iCur - attrObj[attr]) < Math.abs(iSpeed)) {
                if (attr === "opacity") {
                    dom.style[attr] = attrObj[attr] / 100
                } else {
                    dom.style[attr] = attrObj[attr] + "px"
                }
            } else {
                if (attr === "opacity") {
                    dom.style[attr] = (iCur + iSpeed) / 100
                } else {
                    dom.style[attr] = iCur + iSpeed + "px"
                }
            }

            if(iCur !== attrObj[attr]){
                bStop = false
            }
        }
        if (bStop) {
            clearInterval(dom.timer)
            typeof callback === "function" && callback()
        }
    }, 30);
}