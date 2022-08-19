const { app, BrowserWindow } = require('electron')

require('@electron/remote/main').initialize()

let win

app.on('ready', () => {
  createWindow()
})

function createWindow() {
  win = new BrowserWindow({
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })

  win.loadFile('./index.html')

  require("@electron/remote/main").enable(win.webContents)
}