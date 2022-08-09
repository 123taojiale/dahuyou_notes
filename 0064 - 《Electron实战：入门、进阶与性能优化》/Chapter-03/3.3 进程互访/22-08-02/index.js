const { app, BrowserWindow } = require('electron')
require('@electron/remote/main').initialize()

let win = null

app.on('ready', () => {
  win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })
  win.loadFile('index.html')
  require("@electron/remote/main").enable(win.webContents)
  win.on('closed', () => win = null)
})

app.on('window-all-closed', () => app.quit())