// 渲染进程
const {
  ipcRenderer
} = require('electron')
const ProgressBar = require('progressbar.js')
const Timer = require('timer.js')

const toggleBtn = document.querySelector('.toggle-btn')
let state // 状态数据
let proIns // 进度条实例
let pomodoroTimerIns // 番茄钟计时器实例

init()
startWork()

// 初始化
function init() {
  // 初始化状态
  state = {
    remainingTime: 0, // 剩余时间
    totalTime: 0, // 总时长
    type: 0, // 当前的状态
    // 0 准备开始工作
    // 1 工作中
    // 2 准备开始休息
    // 3 休息中
  }
  // 初始化进度条实例
  proIns = new ProgressBar.Circle('#timer-container', {
    color: '#3a3a3a',
    strokeWidth: 2.1,
    trailColor: '#f4f4f4',
    trailWidth: 0.8,
    svgStyle: {
      display: 'block',
      width: '100%'
    },
  })
  proIns.set(0)
  proIns.setText('🍅 demo')
  // 初始化计时器
  pomodoroTimerIns = new Timer({
    tick: 1,
    ontick: (ms) => setState({
      remainingTime: (ms / 1000).toFixed(0)
    }),
    onend: () => handleEnd()
  })
  handleBtnClicked()
}

function setState(_state) {
  state = {
    ...state,
    ..._state
  }
  render()
}

function render() {
  const {
    type,
    remainingTime,
    totalTime,
  } = state
  // 1. 根据剩余时间，更新当前番茄钟进度
  // 2. 根据当前状态，设置按钮文案
  if (type === 0) toggleBtn.innerText = '开始工作'
  else if (type === 1) toggleBtn.innerText = '停止工作'
  else if (type === 2) toggleBtn.innerText = '开始休息'
  else if (type === 3) toggleBtn.innerText = '停止休息'
  else throw new Error(`type: ${type}, is a invalid value`)
  proIns.set(1 - remainingTime / totalTime)
  proIns.setText(formatTime(remainingTime))
}

// 处理计时结束的逻辑
function handleEnd() {
  const {
    type
  } = state
  if (type === 1) { // 工作计时结束
    // 准备开始休息
    setState({
      type: 2,
      remainingTime: 0,
    })
  } else if (type === 3) { // 休息计时结束
    // 准备开始工作
    setState({
      type: 0,
      remainingTime: 0,
    })
  }
  handleIPCRenderer(type === 1 ? {
    tip: '是否开始休息？',
    onaction: startRest,
  } : {
    tip: '是否开始工作？',
    onaction: startWork,
  })
}

/**
 * 处理按钮的点击事件
 */
function handleBtnClicked() {
  toggleBtn.onclick = () => {
    const text = toggleBtn.innerText
    if (text === '开始工作') startWork()
    else if (text === '停止工作') {
      setState({
        remainingTime: 0,
        type: 2
      })
      pomodoroTimerIns.stop()
    }
    else if (text === '开始休息') startRest()
    else if (text === '停止休息') {
      setState({
        remainingTime: 0,
        type: 0
      })
      pomodoroTimerIns.stop()
    }
    else throw new Error(`text: ${text}, is a invalid value`)
  }
}

async function handleIPCRenderer(obj) {
  const res = await ipcRenderer.invoke('work-notification', obj.tip)
  // console.log('type => ', state.type)
  if (res.action === 'action') obj.onaction()
  else if (res.action === 'close') setState({ type: state.type === 2 ? 0 : 2 })
}

/**
 * 开始休息
 * @param {Number} restTime 休息时长（s）
 */
function startRest(restTime = 3) {
  if (isTiming()) return
  setState({
    type: 3,
    remainingTime: restTime,
    totalTime: restTime
  })
  pomodoroTimerIns.start(restTime)
}

/**
 * 开始工作
 * @param {Number} workTime 工作时长（s）
 */
function startWork(workTime = 5) {
  if (isTiming()) return
  setState({
    type: 1,
    remainingTime: workTime,
    totalTime: workTime
  })
  pomodoroTimerIns.start(workTime)
}

/**
 * @returns Boolean 是否正在计时
 */
function isTiming() {
  return state.remainingTime !== 0
}

/**
 * 示例：110 -> 00:01:50
 * @param {Number} remainingTime 剩余时间（s）
 * @returns 经过格式化之后的时间字符串
 */
function formatTime(remainingTime = 0) {
  const hh = ((remainingTime / 3600).toFixed(0)).toString().padStart(2, '0')
  const mm = ((remainingTime / 60).toFixed(0)).toString().padStart(2, '0')
  const ss = (remainingTime % 60).toString().padStart(2, '0')
  return `${hh}:${mm}:${ss}`
}