// 渲染进程
const {
  ipcRenderer
} = require('electron');
const Timer = require('timer.js');
const ProgressBar = require('progressbar.js/dist/progressbar.min.js');
const btn = document.getElementById('switchBtn');

let workTime = 5; // 工作总时长（s）
let restTime = 3; // 休息总时长（s）
let state = { // 状态数据
  // remainingTime: 0, // 剩余时间
  // type: 0, // 当前的状态
}
/* type 的可能取值以及对应的含义
0 开始工作
1 停止工作
2 开始休息
3 停止休息 */


const progressBarIns = new ProgressBar.Circle("#progressBar-container", {
  color: "#f40",
  strokeWidth: 3,
  trailColor: "#008c8caa",
  trailWidth: .5,
  svgStyle: null,
})

const timerIns = new Timer({
  tick: 1, // 1s
  ontick: (ms) => {
    console.log('剩余时间还有：', ms);
    setState({
      remainingTime: (ms / 1000).toFixed(0)
    })
  },
  onend: async () => {
    setState({
      remainingTime: 0
    })
    const {
      type
    } = state;
    if (type === '1') { // 工作时间满
      if (process.platform === 'darwin') { // macos
        // console.log('执行 ipcRenderer.invoke');
        const res = await ipcRenderer.invoke('notification', '1')
        console.log('接收到主进程的响应结果：', res);
        if (res.event === 'rest') startRest()
        if (res.event === 'work') startWork()
      } else { // windows
        alert('工作时间已满');
      }
    } else if (type === '3') { // 休息时间满
      if (process.platform === 'darwin') { // macos
        const res = await ipcRenderer.invoke('notification', '3')
        console.log('接收到主进程的响应结果：', res);
        if (res.event === 'rest') startRest()
        if (res.event === 'work') startWork()
      } else {
        alert('休息时间已满'); // windows
      }
    }
  },
});

function setState(_state) {
  state = {
    ...state,
    ..._state
  }
  console.log('混合后的状态：', state)
  render() // 状态数据变化，重新渲染页面
}

// 重新渲染页面
function render() {
  const {
    remainingTime: s,
    type,
  } = state;
  console.log('状态：', type, '剩余时间：', s);
  // 1 - 渲染进度
  progressBarIns.set(1 - s / workTime);
  // 2 - 渲染描述文本
  const ss = s % 60
  const mm = (ss / 60).toFixed(0)
  progressBarIns.setText(`${mm.toString().padStart(2, 0)}:${ss.toString().padStart(2, 0)}`)
  // 3 - 渲染按钮
  if (type === '0') btn.innerText = '开始工作'
  if (type === '1') btn.innerText = '停止工作'
  if (type === '2') btn.innerText = '开始休息'
  if (type === '3') btn.innerText = '停止休息'
}

// 开始工作
function startWork() {
  setState({
    type: '1',
    remainingTime: workTime
  })
  timerIns.start(workTime)
}

// 开始休息
function startRest() {
  setState({
    type: '3',
    remainingTime: restTime
  })
  timerIns.start(restTime)
}

btn.onclick = () => {
  const type = state.type;
  if (type === '0') { // 开始工作
    startWork();
  } else if (type === '1') { // 停止工作
    timerIns.stop(); // 停止计时
    setState({
      remainingTime: 0, // 剩余时间清零
      type: '2' // 下一个阶段 => 开始休息
    })
  } else if (type === '2') { // 开始休息
    startRest();
  } else if (type === '3') { // 停止休息
    timerIns.stop(); // 停止计时
    setState({
      remainingTime: 0, // 剩余时间清零
      type: '0' // 下一个阶段 => 开始工作
    })
  }
}

timerIns.start(workTime); // 开始工作

startWork(); // 开始工作