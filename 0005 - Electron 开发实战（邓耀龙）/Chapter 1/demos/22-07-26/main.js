// 主进程
const {
  app,
  BrowserWindow,
  ipcMain,
  Notification
} = require('electron')

// 准备完毕
app.whenReady().then(() => {
  createWindow()
  handleIPC()
})

// 创建窗口
let mainWin
function createWindow() {
  mainWin = new BrowserWindow({
    width: '400px',
    height: '600px',
    webPreferences: {
      nodeIntegration: true, // 是否集成 node
      contextIsolation: false // 是否上下文隔离
    }
  })
  mainWin.loadFile('./index.html')
  mainWin.webContents.openDevTools()
  mainWin.show()
}

// 处理 IPC 通信
function handleIPC() {
  ipcMain.handle('work-notification', async (e, tip) => {
    const res = new Promise((resolve, reject) => {
      console.log('tip => ', tip)
      const defaultOpts = {
        title: '时间到',
        body: tip,
        actions: [{
          type: 'button',
          text: '确定'
        }],
        closeButtonText: '取消'
      }
      const noIns = new Notification({
        ...defaultOpts
      })
      noIns.show()
      noIns.on('action', () => {
        resolve({
          action: 'action'
        })
      })
      noIns.on('close', () => {
        resolve({
          action: 'close'
        })
      })
    })
    return res
  })
}