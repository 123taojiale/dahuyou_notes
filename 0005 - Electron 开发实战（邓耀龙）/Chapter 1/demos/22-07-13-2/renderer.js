const {
  ipcRenderer
} = require('electron')
const Timer = require('timer.js')

// What is timer.js?
// Simple and lightweight library without any dependencies to create and manage, well, timers.
// 它是一个简单且轻量的库，专门用来解决计时问题，不依赖其它任何依赖项来创建和管理计时器。
// 小结：timer.js 就是一个简单的用于解决计时问题的 js 工具库
// github：https://github.com/husa/timer.js/
// demo：https://husa.github.io/timer.js/

function startWork() {
  let workTimer = new Timer({
    // tick: 1, // set specific tick(e.g. you can set it to 2, then your ontick handler will fire every 2 seconds) default value 1 - 默认值是 1，表示计时器的时间间隔默认是 1s，每间隔 1s 会计时一次
    ontick: (ms) => { // what to do on every tick - 每一个 tick 结束都会触发，相当于每一秒中都要做的事儿
      updateTime(ms) // 更新当前的时间 参数 ms 是剩余的时间（remaining time（in ms））
    },
    // onstart: () => {}, // start event handler - 开始计时的时候需要做的事儿
    // onstop: () => {}, // stop event handler - 结束计时的时候需要做的事儿
    // onpause: () => {}, // pause event handler - 暂停计时的时候需要做的事儿
    onend: () => { // end event handler(when Timer stops without interrupt) - 倒计时结束时触发（计时器要求是正常停止，而不是突然中断）
      notification()
    }
  })
  workTimer.start(3)
}

// 更新页面时间
function updateTime(ms) {
  let timerContainer = document.getElementById('timer-container')
  let s = (ms / 1000).toFixed(0) // 一共还有多少秒
  let ss = s % 60 // 对 60 取余，用于页面展示
  let mm = (s / 60).toFixed(0) // 还有多少分钟
  timerContainer.innerText = `${mm.toString().padStart(2, 0)}: ${ss.toString().padStart(2, 0)}`
}

// 展示提示信息 - 当计时时间到了之后，弹出提示弹框
async function notification() {
  let res = await ipcRenderer.invoke('work-notification') // ipcRenderer - Communicate asynchronously from a renderer process to the main process. - 用于实现渲染进程和主进程之间的异步通信
  if (res === 'rest') {
    setTimeout(() => {
      alert('休息')
    }, 5 * 1000)
  } else if (res === 'work') {
    startWork()
  }
}

startWork()