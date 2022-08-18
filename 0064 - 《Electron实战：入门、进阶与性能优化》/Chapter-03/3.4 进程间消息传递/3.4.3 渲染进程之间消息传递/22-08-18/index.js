const { ipcMain, app, BrowserWindow } = require('electron')

let win1, win2

const path = require("path")

app.on('ready', () => {
  createWindows()
  hanldeWinClosed()
})

app.on('window-all-closed', () => app.quit())

function createWindows() {
  win1 = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })
  win1.loadFile('./index1.html')
  win1.webContents.openDevTools()

  win2 = new BrowserWindow({
    y: 0,
    x: 0,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })
  win2.loadFile('./index2.html')
  win2.webContents.openDevTools()
}

function hanldeWinClosed() {
  win1.on('closed', () => win1 = null)
  win2.on('closed', () => win2 = null)
}