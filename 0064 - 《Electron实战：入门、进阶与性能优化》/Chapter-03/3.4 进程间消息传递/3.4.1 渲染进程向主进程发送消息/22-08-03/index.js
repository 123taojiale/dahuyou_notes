const { ipcMain, app, BrowserWindow } = require('electron')

let win

app.on('ready', () => {
  createWindow()
  handleIPC()
})

// 所有窗口都关闭之后，默认退出程序
app.on('window-all-closed', () => app.quit())

function createWindow() {
  win = new BrowserWindow({ webPreferences: { nodeIntegration: true, contextIsolation: false } })
  win.loadFile('./index.html')
  win.webContents.openDevTools()
  // 当窗口被关闭的时候，将 win 置空 - 垃圾回收
  win.on('closed', () => win = null)
}

function handleIPC() {
  // ipcMain.on 方法的第一个参数是 channel 的名称（消息管道的名称），要求与渲染进程发消息的管道名称一致
  ipcMain.on('msg_render2main', (e, a, b) => {
    // e 事件对象，该对象包含消息发送者的相关信息
    // e.sender 是对应渲染进程的 webContents 对象实例
    console.log(e.sender === win.webContents) // => true
    // a 和 b 是消息数据，可以有多个消息数据（此案例中有两个）
    console.log(a, b)
  })
}