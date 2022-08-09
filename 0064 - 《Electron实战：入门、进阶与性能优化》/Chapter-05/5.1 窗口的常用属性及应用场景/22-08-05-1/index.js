const {app, BrowserWindow, ipcMain} = require('electron')

const winList = []
let x = 0, y = 0

app.whenReady().then(() => {
  createWindow()
  handleIPC()
})

function createWindow() {
  const win = new BrowserWindow({
    x,
    y,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })

  win.webContents.openDevTools()
  win.loadFile('./index.html')

  x += 60
  y += 60
  winList.push(win)
  console.log(`第${winList.length}个窗口`)
}

function handleIPC() {
  ipcMain.handle('generateNewWin', () => createWindow())
}
