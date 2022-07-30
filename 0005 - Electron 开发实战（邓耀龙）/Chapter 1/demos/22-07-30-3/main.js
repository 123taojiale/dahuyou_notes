const { app, BrowserWindow } = require("electron")
require('@electron/remote/main').initialize()

let win1, win2

app.whenReady().then(() => {
  const opt = {
    width: 300,
    height: 300,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      // enableRemoteModule: true
      // https://www.electronjs.org/docs/latest/breaking-changes#default-changed-enableremotemodule-defaults-to-false
    }
  }
  win1 = new BrowserWindow(opt)
  win1.loadFile('./index1.html')
  win1.webContents.openDevTools({
    mode: 'detach'
  })
  require("@electron/remote/main").enable(win1.webContents)

  win2 = new BrowserWindow(opt)
  win2.loadFile('./index2.html')
  win2.webContents.openDevTools({
    mode: 'detach'
  })

  global.shareObj = {
    win2Id: win2.webContents.id
  }

  global.a = 1
})