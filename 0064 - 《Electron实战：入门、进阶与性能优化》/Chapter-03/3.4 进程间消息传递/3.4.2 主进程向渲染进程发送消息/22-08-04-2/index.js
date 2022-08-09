const { ipcMain, app, BrowserWindow } = require('electron')

let win

app.whenReady().then(() => {
  createWindow()
  handleIPC()
})

app.on('window-all-closed', () => app.quit())

function handleIPC() {
 ipcMain.handle('msg_render2main', async () => {
  const res = new Promise(resolve => {
    resolve({
      channel: 'msg_render2main',
      data: '主进程返回的数据'
    })
  })
  return res
 })
}

function createWindow() {
  win = new BrowserWindow({
    webPreferences: { nodeIntegration: true, contextIsolation: false }
  })
  win.loadFile('./index.html')
  win.webContents.openDevTools()
  win.on('closed', () => win = null)
}