const skyDom = document.querySelector('.sky');
const skyStyles = getComputedStyle(skyDom);
const skyWidth = parseFloat(skyStyles.width);
const skyHeight = parseFloat(skyStyles.height);

class Sky extends Rectangle {
    constructor(xSpeed) { // 天空的横向移动速度 自定义
        super(skyWidth, skyHeight, 0, 0, xSpeed, 0, skyDom);
    }

    /**
     * 边界处理
     */
    onMove() {
        if (this.left < -skyWidth / 2) { // 天空的右边界与 game 容器的右边界重叠 (即将展示空白内容) 立即将天空复位
            this.left = 0;
        }
    }
}

// 测试一下天空类
/* const sky = new Sky(-50);

setInterval(() => {
    sky.move(16 / 1000);
}, 16); */