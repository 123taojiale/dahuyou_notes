const {
  app,
  BrowserWindow,
  Notification,
  ipcMain
} = require('electron')

let win
// app，用于控制应用生命周期。本次只会用到 app.on('ready', callback) 用于在应用就绪后开始业务
// 应用就绪时，也就是准备完毕时，会触发 ready 事件，对应的事件处理函数 callback 将会被执行
app.on('ready', () => {
  // 创建窗口并设置窗口的尺寸（宽、高）
  win = new BrowserWindow({ // BrowserWindow 用于创建和控制窗口
    width: 300,
    height: 300,
    // webPreferences.nodeIntegration 不理解
    webPreferences: {
      nodeIntegration: true
    }
  })
  // 加载窗口页面 win.loadURL(url)、win.loadFile(path)
  win.loadFile('./index.html') // 加载本地 index.html 作为展示页面
  win.webContents.openDevTools(); // 打开调试工具
  handleIPC() // 处理进程之间的通信业务逻辑
})

function handleIPC() {
  // ipcMain.handle(channel, handler) 处理渲染进程的 channel 请求，在 handler 中返回结果
  ipcMain.handle('work-notification', async function () {
    let res = await new Promise((resolve, reject) => {
      // 创建OS（操作系统）桌面通知
      let notification = new Notification({
        title: '任务结束',
        body: '是否开始休息',
        // actions 不太理解这个字段，根据最终效果来分析：action 应该是用来配置 confirm 按钮的描述，type 值就写死为 button，然后 text 是按钮的文本
        actions: [{
          text: '开始休息',
          type: 'button'
        }],
        // closeButtonText 定义 cancel 按钮的展示文本，和 actions 配置相对
        closeButtonText: '继续工作'
      })
      notification.show()
      notification.on('action', (...args) => {
        // console.log('notification action 接收到的事件参数：',...args) // 事件对象 0
        resolve('rest')
      })
      // Emitted when the notification is closed by manual intervention from the user.
      // 用户手动点击关闭按钮时触发
      // This event is not guaranteed to be emitted in all cases where the notification is closed.
      // 导致 notification 被关闭的情况有很多种，该事件并不保证所有情况下 notification 的关闭，都能会触发该事件
      notification.on('close', (...args) => {
        // console.log('notification close 接收到的事件参数：',...args) // 事件对象
        resolve('work')
      })
    })
    return res // res 会传递给调用 work-notification 这个 channel 的渲染进程
  })
}