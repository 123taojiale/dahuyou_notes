require('@electron/remote/main').initialize()
const {app, BrowserWindow, ipcMain} = require('electron')

let win

app.whenReady().then(() => {
  createWindow()
  handleIPC()
})

function createWindow() {
  win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })

  win.loadFile('./index.html')

  win.webContents.openDevTools({ mode: 'right' })

  require("@electron/remote/main").enable(win.webContents)
}

function handleIPC() {
  // ipcMain.handle('checkSave')
  ipcMain.on('destroyWin', () => {
    console.log('关闭窗口')
    win.destory()
  })
}