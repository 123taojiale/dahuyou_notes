const { app, BrowserWindow, ipcMain } = require('electron')
require('@electron/remote/main').initialize() // import remote module

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
  win.webContents.openDevTools({mode: 'right'})
  require("@electron/remote/main").enable(win.webContents) // enable remote module
}

function handleIPC() {
  // method2 方案2
  ipcMain.handle('maximize', () => win.maximize())
  ipcMain.handle('minimize', () => win.minimize())
  ipcMain.handle('close', () => win.close())
}