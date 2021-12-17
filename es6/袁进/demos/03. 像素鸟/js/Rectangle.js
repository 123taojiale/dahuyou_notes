/**
 * 矩形类
 * @param {Number} width 矩形的 宽度
 * @param {Number} height 矩形的 高度
 * @param {Number} left 矩形的 横坐标
 * @param {Number} top 矩形的 纵坐标
 * @param {Number} xSpeed 矩形的 横向速度 单位 px/ms
 * @param {Number} ySpeed 矩形的 纵向速度 单位 px/ms
 * @param {HTMLElement} dom 矩形的 dom对象
 */
class Rectangle {
    constructor(width, height, left, top, xSpeed, ySpeed, dom) {
        this.width = width;
        this.height = height;
        this.left = left;
        this.top = top;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
        this.dom = dom;

        // 创建好实例后 重新渲染一下
        this.render();
    }

    /**
     * 渲染矩形
     */
    render() {
        this.dom.style.width = this.width + 'px';
        this.dom.style.height = this.height + 'px';
        this.dom.style.left = this.left + 'px';
        this.dom.style.top = this.top + 'px';
    }

    /**
     * 矩形运动
     * @param {Number} duration 每次运动的持续时间 单位 毫秒
     */
    move(duration) {
        this.left += this.xSpeed * duration; // 速度 * 时间 等于 运动距离
        this.top += this.ySpeed * duration;

        if (this.onMove) { // 若实例矩形对象身上有 onMove 方法 那么在运动的时候 调用一下该方法
            this.onMove();
        }

        this.render(); // 根据本次运动结束后的新的坐标来渲染矩形
    }
}