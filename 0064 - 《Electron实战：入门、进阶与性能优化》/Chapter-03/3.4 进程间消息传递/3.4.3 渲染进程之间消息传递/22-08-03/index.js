const { ipcMain, app, BrowserWindow } = require('electron')

let win1, win2

app.on('ready', () => {
  createWindows()
  handleIPC()
  hanldeWinClosed()
})

app.on('window-all-closed', () => app.quit())

function createWindows() {
  win1 = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })
  win1.loadFile('./index1.html')
  win1.webContents.openDevTools()

  win2 = new BrowserWindow({
    y: 0,
    x: 0,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })
  win2.loadFile('./index2.html')
  win2.webContents.openDevTools()
}

function handleIPC() {
  // 写法1
  ipcMain.handle('getWin2ID', async () => {
    const res = await new Promise(resolve => resolve(win2.webContents.id))
    return res
  })

  // 写法2（如果仅仅是获取一个值的话，这种写法更简洁）
  ipcMain.handle('getWin1ID', async () => win1.webContents.id)
}

function hanldeWinClosed() {
  win1.on('closed', () => win1 = null)
  win2.on('closed', () => win2 = null)
}