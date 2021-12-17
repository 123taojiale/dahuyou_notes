const gameDom = document.querySelector('.game');
const gameWidth = gameDom.clientWidth;

/**
 * 单水管
 */
class Pipe extends Rectangle {
    constructor(height, top, xSpeed, dom) {
        super(52, height, gameWidth, top, xSpeed, 0, dom);
    }

    /**
     * 移除视野范围之外的 水管dom
     */
    onMove() {
        if (this.left < -this.width) {
            this.dom.remove();
        }
    }
}

/**
 * 获取一个介于 [min, max] 之间的随机整数
 * @param {Number} min 最小值
 * @param {Number} max 最大值
 * @returns
 */
function getRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

/**
 * 水管对
 */
class PipePare {
    constructor(xSpeed, spaceHeight) {
        // 1. 获取 上/下 水管的 height
        this.spaceHeight = spaceHeight;

        // this.spaceHeight = 150; // 上下水管之间的间隙大小固定为 150px
        // this.spaceHeight = 250; // 上下水管之间的间隙大小固定为 250px (简单版)
        this.minHeight = 80; // 水管的最小高度值固定位 80px
        this.upPipeHeight = getRandom(this.minHeight, landTop - this.spaceHeight - this.minHeight); // 上水管的高度
        this.downPipeHeight = landTop - this.upPipeHeight - this.spaceHeight; // 下水管的高度

        // 2. 获取 上/下 水管对的 top
        this.upPipeTop = 0; // 上水管的 top 值
        this.downPipeTop = landTop - this.downPipeHeight; // 下水管的 top 值

        // 3. 获取 上/下 水管对的 dom 对象
        const upPipeDom = document.createElement('div');
        const downPipeDom = document.createElement('div');
        upPipeDom.className = 'pipe up';
        downPipeDom.className = 'pipe down';
        gameDom.appendChild(upPipeDom);
        gameDom.appendChild(downPipeDom);

        this.upPipe = new Pipe(this.upPipeHeight, this.upPipeTop, xSpeed, upPipeDom);
        this.downPipe = new Pipe(this.downPipeHeight, this.downPipeTop, xSpeed, downPipeDom);
    }

    /**
     * 判断水管对是否移除视野范围
     */
    get useLess() {
        return this.upPipe.left < -this.upPipe.width; // 每一个水管对的 left 值都是相同的 只要判断其中一只水管即可
    }

    /**
     * 水管对的移动 同时移动两个 水管
     * @param {Number} duration
     */
    move(duration) {
        this.upPipe.move(duration);
        this.downPipe.move(duration);
    }
}

/**
 * 自动生成水管对
 */
class PipePareProducer {
    constructor(xSpeed, spaceHeight) {
        this.xSpeed = xSpeed; // 将传递进来的参数 xSpeed 的值保存到 this.xSpeed 中 在 startProduce 函数中会用到这个值
        this.spaceHeight = spaceHeight; // 水管对间隙的高度值
        this.pairs = []; // 存放自动生成的水管对
        this.timer = null; // 自动生成水管对的计时器
        this.tick = 1500; // 自动生成水管对的时间间隔 单位: (ms)
    }

    /**
     * 开始自动生成水管对 (同时也在不断地检测水管对是否移出视野范围 一旦移出 那么将它从数组 this.pairs 中移除)
     */
    startProduce() {
        if (this.timer) {
            return;
        }
        this.timer = setInterval(() => {
            this.pairs.push(new PipePare(this.xSpeed, this.spaceHeight));
            for (let i = 0; i < this.pairs.length; i++) {
                const pair = this.pairs[i];
                if (pair.useLess) {
                    this.pairs.splice(i, 1);
                    i--;
                }
            }
        }, this.tick);
    }

    /**
     * 停止生成水管对
     */
    stopProduce() {
        clearInterval(this.timer);
        this.timer = null;
    }
}

/* const pipeProducer = new PipePareProducer(-100);

pipeProducer.startProduce();

setInterval(() => {
    pipeProducer.pairs.forEach(pair => {
        pair.move(16 / 1000);
    });
}, 16); */
