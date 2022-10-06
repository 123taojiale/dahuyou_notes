import { NumberTimer } from '../utils'
import appendNumber from './appendNumber'
// import appendNumber from './appendNumberWithJquery'

const n = new NumberTimer(100)

n.onNumberCreated = function (n, isPrime) {
  appendNumber(n, isPrime)
}

//该模块用于注册事件
let isStart = false //默认没有开始

window.onclick = () => {
  if (isStart) {
    n.stop()
    isStart = false
  } else {
    n.start()
    isStart = true
  }
}
