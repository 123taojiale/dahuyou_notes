const {
  app,
  BrowserWindow,
  ipcMain
} = require('electron')

require('@electron/remote/main').initialize()

let win

app.whenReady().then(() => {
  createWindow()
})

function createWindow() {
  win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })

  win.loadFile('./index.html')
  win.webContents.openDevTools({
    mode: "right"
  })
  
  require("@electron/remote/main").enable(win.webContents)
}
