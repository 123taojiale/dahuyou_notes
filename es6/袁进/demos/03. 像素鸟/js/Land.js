const landDom = document.querySelector('.land');
const landStyles = getComputedStyle(landDom);
const landWidth = parseFloat(landStyles.width);
const landHeight = parseFloat(landStyles.height);
const landTop = parseFloat(landStyles.top);

class Land extends Rectangle {
    constructor(xSpeed) { // 大地的横向移动速度 自定义
        super(landWidth, landHeight, 0, landTop, xSpeed, 0, landDom);
    }

    /**
     * 边界处理
     */
    onMove() {
        if (this.left < -landWidth / 2) { // 大地的右边界与 game 容器的右边界重叠 (即将展示空白内容) 立即将天空复位
            this.left = 0;
        }
    }
}

// 测试一下大地类 (大地默认运动的比天空快一些)
/* const land = new Land(-100);

setInterval(() => {
    land.move(16 / 1000);
}, 16); */