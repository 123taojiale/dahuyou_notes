// 渲染进程
const {ipcRenderer} = require('electron');

updateTimer() // 开始工作

/**
 * 更新计时器剩余时间
 * @param {Number} restTime 剩余时间，单位 ms（默认剩余时间为 5s）
 */
function updateTimer(restTime = 5 * 1000) {
  const timerContainer = document.getElementById('timer-container')
  const timer = setInterval(() => {
    restTime -= 1000 // 更新时间
    if (restTime <= 0) {
      restTime = 0;
      notification(); // 通知主进程 - 展示提示消息
      clearInterval(timer);
    }
    timerContainer.innerText = restTime + 'ms';
  }, 1000);
};

async function notification() {
  const res = await ipcRenderer.invoke('work-notification') // 0 - 继续工作；1 - 开始休息
  if (res === 0) {
    updateTimer()
  } else {
    updateTimer(3 * 1000)
  }
}
