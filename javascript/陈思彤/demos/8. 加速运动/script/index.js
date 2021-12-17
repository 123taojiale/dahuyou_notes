// 1. 获取节点
const oDiv = document.getElementById('demo')

// 2. 绑定事件
oDiv.onclick = function () {
    startMove(this)
}

/**
 * 实现加速运动
 * @param {HTMLElement} dom dom节点
 */
function startMove(dom) {
    clearInterval(dom.timer);
    // 给定一个初速度和加速度
    let a = 2,
        iSpeed = 10;
    dom.timer = setInterval(() => {
        let iCur = parseFloat(getComputedStyle(dom).left);
        iSpeed += a;
        // 让元素在浏览器的右边界处停止运动
        if (Math.abs(iCur - window.innerWidth + parseFloat(getComputedStyle(dom).width)) <= Math.abs(iSpeed)) {
            clearInterval(dom.timer)
            dom.style.left = dom.style.width = window.innerWidth - parseFloat(getComputedStyle(dom).width) + "px"
        } else {
            dom.style.left = iCur + iSpeed + 'px';
        }
    }, 30);
}