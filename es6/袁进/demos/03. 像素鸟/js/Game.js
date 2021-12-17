const overDom = document.querySelector('.over');
// 先确定好游戏是 简单版/默认版
let spaceHeight = 150; // 水管对之间的默认间隙大小为 150px
const isEasy = window.confirm('是否开启简单版');
if (isEasy) {
    spaceHeight = 250; // 简单版的间隙为 250px
}

class Game {
    constructor() {
        this.sky = new Sky(-50);
        this.land = new Land(-100);
        this.bird = new Bird();
        this.pipeProducer = new PipePareProducer(-100, spaceHeight);

        this.timer = null;
        this.tick = 16;
        this.isGameOver = false;
    }

    /**
     * 开始游戏
     */
    startGame() {
        if (this.timer) { // 若游戏正在进行 表示游戏已开始 那么直接 return 即可
            return;
        }
        if (this.isGameOver) { // 若游戏已经结束 那么重新加载页面
            window.location.reload();
        }

        overDom.style.display = 'none'; // 隐藏游戏结束蒙版
        this.bird.startSwing(); // 小鸟开始煽动翅膀
        this.pipeProducer.startProduce(); // 开始自动生成水管对

        this.timer = setInterval(() => {
            const duration = this.tick / 1000;
            this.sky.move(duration);
            this.land.move(duration);
            this.bird.move(duration);
            this.pipeProducer.pairs.forEach(pair => {
                pair.move(duration);
            });

            if (this.isOver()) { // 判断游戏是否结束
                this.stopGame(); // 若游戏结束 那么停止游戏
                this.isGameOver = true;
            }
        }, this.tick);
    }

    /**
     * 停止游戏
     */
    stopGame() {
        overDom.style.display = 'block'; // 显示游戏结束蒙版
        this.bird.stopSwing(); // 小鸟停止煽动翅膀
        this.pipeProducer.stopProduce(); // 停止生成水管对

        clearInterval(this.timer);
        this.timer = null;
    }

    regEvent() {
        // console.log('dahuyou');
        window.onkeydown = (e) => {
            if (e.key === 'Enter') {
                if (this.timer) { // 若此时游戏正在进行 那么停止游戏
                    this.stopGame();
                } else { // 若此时游戏已停止 那么开始游戏
                    this.startGame();
                }
            }
            if (e.key === ' ') {
                this.bird.jump();
            }
        }
    }

    isOver() {
        if (this.bird.top === this.bird.maxY) { // 小鸟撞地面
            return true; // 游戏结束
        }
        for (let i = 0; i < this.pipeProducer.pairs.length; i++) {
            const pair = this.pipeProducer.pairs[i];
            if (this.isHit(this.bird, pair.upPipe) ||
                this.isHit(this.bird, pair.downPipe)) {
                return true; // 游戏结束
            }
        }

        return false; // 游戏继续
    }

    /**
     * 判断两个矩形是否发生碰撞
     * @param {*} bird
     * @param {*} pipe
     */
    isHit(bird, pipe) {
        const birdCenterX = bird.left + bird.width / 2;
        const birdCenterY = bird.top + bird.height / 2;
        const pipeCenterX = pipe.left + pipe.width / 2;
        const pipeCenterY = pipe.top + pipe.height / 2;
        const disX = Math.abs(birdCenterX - pipeCenterX);
        const disY = Math.abs(birdCenterY - pipeCenterY);
        const safeDisX = (bird.width + pipe.width) / 2;
        const safeDisY = (bird.height + pipe.height) / 2;

        if (disX < safeDisX && disY < safeDisY) {
            return true; // 发生了碰撞
        }
        return false; // 没有发生碰撞
    }
}

/* const g = new Game();
g.regEvent(); */