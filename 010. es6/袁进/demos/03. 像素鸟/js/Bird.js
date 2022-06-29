const birdDom = document.querySelector('.bird');
const birdStyles = getComputedStyle(birdDom);
const birdWidth = parseFloat(birdStyles.width);
const birdHeight = parseFloat(birdStyles.height);
const birdTop = parseFloat(birdStyles.top);
const birdLeft = parseFloat(birdStyles.left);

class Bird extends Rectangle {
    constructor() {
        super(birdWidth, birdHeight, birdLeft, birdTop, 0, 0, birdDom);

        // 小鸟有一个重力加速度
        this.g = 1500; // 单位 px/ms²

        // 小鸟运动的下界 也就是地面 即 小鸟纵坐标的最大值
        this.maxY = landTop - birdHeight;

        // 小鸟煽动翅膀的计时器
        this.timer = null;
        this.tick = 1000 / 16; // 小鸟煽动翅膀的频率 16次/s
        this.swingStatus = 0; // 小鸟翅膀的状态 共 0 1 2 三个状态

        this.render();
    }

    /**
     * 小鸟开始煽动翅膀
     */
    startSwing() {
        if (this.timer) {
            return;
        }

        this.timer = setInterval(() => {
            this.swingStatus = (this.swingStatus + 1) % 3;
            // console.log(this.swingStatus); // 将 3 个状态输出看看对不对
            this.render();
        }, this.tick);
    }

    /**
     * 小鸟停止煽动翅膀
     */
    stopSwing() {
        clearInterval(this.timer);
        this.timer = null;
    }

    render() {
        super.render(); // 重用父类的渲染逻辑
        birdDom.className = `bird swing${this.swingStatus}`;
    }

    move(duration) {
        super.move(duration); // 重用父类的 move 方法
        this.ySpeed += this.g * duration; // 多加一条语句 让 小鸟的纵向速度不断地发生改变
    }

    /**
     * 边界处理
     * 上界: 0
     * 下界: this.maxY
     */
    onMove() {
        if (this.top < 0) {
            this.top = 0;
        }
        if (this.top > this.maxY) {
            this.top = this.maxY;
        }
    }

    jump() {
        this.ySpeed = -400;
    }
}

/* const bird = new Bird();

setInterval(() => {
    bird.move(16 / 1000);
}, 16); */