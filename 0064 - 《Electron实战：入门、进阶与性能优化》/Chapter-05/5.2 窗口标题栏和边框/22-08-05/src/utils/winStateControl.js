import fs from "fs"
import {
  ipcMain
} from "electron"
import debounce from "./debounce"

export default (winIns) => {
  tmWinControl()
  tmMonitorWinState()
  tmRestoreWinState()

  // winIns.addListener('maximize', handleMaximize)
  // winIns.addListener('unmaximize', handleUnMaximize)

  /**
   * 窗口控制
   * 最大化、最小化、还原
   */
  function tmWinControl() {
    ipcMain.on('tmWinControl', (e, op) => {
      if (op === 'maximize') winIns.maximize()
      if (op === 'minimize') winIns.minimize()
      if (op === 'close') winIns.close()
      winIns.webContents.send('fmWinControl', winIns.isMaximized())
    })
  }

  /**
   * 监听窗口的状态
   */
  function tmMonitorWinState() {
    // winIns.on('moved', setWinState)
    // winIns.on('resized', setWinState)
    winIns.on('move', debounce(() => { setWinState() }))
    winIns.on('resize', debounce(() => { setWinState() }))
  }

  /**
   * 记录窗口状态
   */
  function setWinState() {
    const rect = winIns.getBounds(),
      isMaxSize = winIns.isMaximized()
    // console.log('写入的数据：', JSON.stringify({
    //   rect,
    //   isMaxSize
    // }))
    fs.promises.writeFile('winState.json', JSON.stringify({
        rect,
        isMaxSize
      }))
      .then(() => console.log('winState.json write success'))
      .catch((err) => console.log('winState.json write fail, err => ', err))
  }

  function restoreWinState() {
    fs.promises.readFile('winState.json', 'utf-8')
      .then((winState) => {
        if (!winState) return
        const {
          isMaxSize,
          rect
        } = JSON.parse(winState)
        if (isMaxSize) winIns.maximize()
        else {
          winIns.setBounds(rect)
        }
      })
      .catch((err) => console.log('winState.json 读取文件出错 err => ', err))
      winIns.show()
    }

  /**
   * 恢复窗口状态
   */
  function tmRestoreWinState() {
    ipcMain.on('tmRestoreWinState', restoreWinState)
  }
}