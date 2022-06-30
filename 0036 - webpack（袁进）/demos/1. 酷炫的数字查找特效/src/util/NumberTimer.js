import isPrime from "./isPrime";

/**
 * 产生新的数字
 * @param {Number} duration 新数字产生的时间间隔（默认 0.5s）
 */
export default class NumberTimer {
    constructor(duration = 500) {
        this.duration = duration;
        this.timer = null;
        this.number = 1; // 当前的数字
        this.onNumberCreated = null; // 新数字产生的 回调函数
    }

    start() {
        if (this.timer) {
            return;
        }
        this.timer = setInterval(() => {
            this.onNumberCreated && this.onNumberCreated(this.number, isPrime(this.number));
            this.number++;
        }, this.duration);
    }

    stop() {
        clearInterval(this.timer);
        this.timer = null;
    }
}