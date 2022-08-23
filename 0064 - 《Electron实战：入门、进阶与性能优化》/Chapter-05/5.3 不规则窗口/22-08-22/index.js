const {app, BrowserWindow} = require('electron')
require('@electron/remote/main').initialize()

let win

app.whenReady().then(() => {
  createWindow()
})

function createWindow() {
  win = new BrowserWindow({
    width: 100,
    height: 100,
    transparent: true, // 使窗口透明
    frame: false, // 去除窗口边框
    resizable: false, // 透明的窗口不可调整大小
    maximizable: false, // 防止双击窗口可拖拽区（通常指标题栏）而出发窗口的最大化事件
    alwaysOnTop: true, // 让窗口置顶
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })

  win.loadFile('./index.html')

  require("@electron/remote/main").enable(win.webContents)

  win.webContents.openDevTools({ mode: 'detach' })
}

