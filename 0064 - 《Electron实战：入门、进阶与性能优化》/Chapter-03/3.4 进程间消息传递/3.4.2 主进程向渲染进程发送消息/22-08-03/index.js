const { ipcMain, app, BrowserWindow } = require('electron')

let win

app.on('ready', () => {
  createWindow()
  handleIPC()
})

app.on('window-all-closed', () => app.quit())

function createWindow() {
  win = new BrowserWindow({ webPreferences: {nodeIntegration: true, contextIsolation: false} })
  win.loadFile('./index.html')
  win.webContents.openDevTools()
  win.on('closed', () => win = null)
}

function handleIPC() {
  ipcMain.on('msg_render2main', (e) => {
    // win.webContents.send('msg_main2render', 3, 4)
    // e.sender.send('msg_main2render', 3, 4)
    e.reply('msg_main2render', 3, 4)
  })
}
// webContents.send 方法介绍：
// 参数1：管道名称
// 后续参数：消息数据，可以有多个消息数据