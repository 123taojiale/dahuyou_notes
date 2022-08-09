const { app, BrowserWindow, ipcMain } = require('electron')

let win

app.whenReady().then(() => {
  createWindow()
  handleIPC()
})

app.on('window-all-closed', () => app.quit())

function createWindow() {
  win = new BrowserWindow({
    webPreferences: { nodeIntegration: true, contextIsolation: false }
  })
  win.loadFile('./index.html')
  win.webContents.openDevTools()
  win.on('closed', () => win = null)
}

function handleIPC() {
  ipcMain.on('msg_render2main', e => {
    e.returnValue = {
      channel: 'msg_render2main',
      data: '主进程返回的数据'
    }
  })
}