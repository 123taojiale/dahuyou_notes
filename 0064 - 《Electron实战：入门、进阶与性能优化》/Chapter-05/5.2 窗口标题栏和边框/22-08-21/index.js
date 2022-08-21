const {
  app,
  BrowserWindow
} = require('electron')

require('@electron/remote/main').initialize()

let win

app.whenReady().then(() => {
  createWindow()
})

function createWindow() {
  win = new BrowserWindow({
    show: false, // 适时地显示窗口
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })

  win.loadFile('./index.html')

  win.webContents.openDevTools({mode: 'right'})

  require("@electron/remote/main").enable(win.webContents)
}