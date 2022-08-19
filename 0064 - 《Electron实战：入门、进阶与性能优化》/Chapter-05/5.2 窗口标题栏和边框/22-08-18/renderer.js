const {
  getCurrentWindow
} = require('@electron/remote')

const winIns = getCurrentWindow() // 当前窗口实例

document.querySelector('.min').onclick = () => {
  winIns.minimize() // 最小化窗口
}

document.querySelector('.max').onclick = () => {
  winIns.maximize() // 最大化窗口
}

document.querySelector('.restore').onclick = () => {
  winIns.restore() // Restores the window from minimized state to its previous state.
}

document.querySelector('.close').onclick = () => {
  winIns.close() // 关闭窗口
}