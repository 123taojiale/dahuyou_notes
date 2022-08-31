const {
  app,
  BrowserWindow,
  ipcMain
} = require('electron')

let win

app.whenReady().then(() => {
  createWin()
  preventWinClose()
  handleWinClose()
})

function createWin() {
  win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })

  win.loadFile('./index.html')

  win.webContents.openDevTools()
}

/**
 * 阻止窗口被关闭
 */
function preventWinClose() {
  win.on('close', (e) => {
    // 通知渲染进程，触发了窗口的关闭事件
    win.webContents.send('close-win')
    e.preventDefault(); // 阻止窗口关闭
    // return false // 注意 return false 是无效的，没法阻止窗口的关闭
  })
}

/**
 * 阻止窗口关闭
 */
function handleWinClose() {
  ipcMain.on('destroy-win', () => win.destroy())
}