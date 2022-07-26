// 渲染进程
const {
  ipcRenderer
} = require("electron")

const timerContainerDom = document.getElementsByClassName('timer-container')[0]

const Timer = require('timer.js')

/**
 * 开启计时器
 * 测试：5s 表示工作，3s 表示休息
 * @param {Number} remainingTime 剩余时间（s）
 */
function startTimer(t = 10) {
  const timerIns = new Timer({
    tick: 1,
    ontick(remainingTime) {
      updateRemainingTime(Math.round(remainingTime / 1000))
    },
    onend() {
      updateRemainingTime(0)
      handleIPC()
    }
  })
  timerIns.start(t)
}

function updateRemainingTime(remainingTime) {
  const ss = remainingTime % 60
  const mm = (remainingTime / 60).toFixed(0)
  timerContainerDom.innerText = `${mm.toString().padStart(2, '0')}:${ss.toString().padStart(2, '0')}`;
}

async function handleIPC() {
  const res = await ipcRenderer.invoke('work-notification')
  console.log(res, `${res === 'work' ? '点击了✅' : '点击了❎'}`)
  if (res === 'rest') startTimer(5)
  else if (res === 'work') startTimer(10)
}

startTimer(10)