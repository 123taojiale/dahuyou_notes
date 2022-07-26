// 主进程
const {
  app,
  BrowserWindow,
  Notification,
  ipcMain
} = require('electron')

let mainWindow

function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 680,
    webPreferences: {
      nodeIntegration: true, // 实现和 node 的交互
      contextIsolation: false, // Electron 官方出于应用的安全考虑，在 v12 之后，把 webPreferences.contextIsolation 的默认值由 false 改为了 true，如果想要引入我们自己的脚本，得把 contextIsolation 设置为 false 才行，否则会报错 Uncaught ReferenceError: require is not defined
    }
  })
  mainWindow.loadFile('./index.html');
  mainWindow.webContents.openDevTools()
}


// 处理进程之间的通信
function handleIPC() {
  // console.log('执行 handleIPC');
  ipcMain.handle('notification', async (e, type) => {
    console.log('ipcMain 接收到的参数：', type)
    const res = await new Promise((resolve, reject) => {
      let notification;
      if (type === '1') { // 工作时间满
        notification = new Notification({
          title: "🎉 您已完成工作",
          body: "是否开始休息",
          actions: [{
            type: 'button',
            text: '开始休息'
          }],
          closeButtonText: '继续工作',
        })
        notification.on("action", () => {
          resolve({
            event: 'rest'
          })
        })

        notification.on('close', () => {
          resolve({
            event: 'work'
          })
        })
      } else if (type === '3') { // 休息时间满
        notification = new Notification({
          title: "😭 休息时间结束",
          body: "是否开始工作",
          actions: [{
            type: 'button',
            text: '开始工作'
          }],
          closeButtonText: '继续休息',
        })
        notification.on("action", () => {
          resolve({
            event: 'work'
          })
        })

        notification.on('close', () => {
          resolve({
            event: 'rest'
          })
        })
      }
      notification.show();
    })
    return res
  })
}

app.whenReady().then(() => {
  handleIPC();
  createMainWindow();
})