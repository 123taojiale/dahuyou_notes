import isPrime from './isPrime'

class NumberTimer {
  constructor (duration = 500) {
    this.duration = duration // 产生数字的计时器，默认每 0.5s 产生一个数字
    this.number = 1 // 当前的数字
    this.timer = null // 计算器
    this.onNumberCreated = null // 回调 - 产生一个数字时，需要做的一些事儿
  }

  // 开始产生数字
  start () {
    if (this.timer) return

    this.timer = setInterval(() => {
      this.onNumberCreated &&
        this.onNumberCreated(this.number, isPrime(this.number))
      this.number++
    }, this.duration)
  }

  // 停止产生数字
  stop () {
    clearInterval(this.timer)
    this.timer = null
  }
}

export default NumberTimer
