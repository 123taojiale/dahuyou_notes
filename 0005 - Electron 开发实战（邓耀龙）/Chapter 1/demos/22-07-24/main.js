// 主进程
const {app, BrowserWindow, ipcMain, Notification} = require("electron");

app.on('ready', () => {
  createMainWin()
  handleIPC()
})

let mainWin

function createMainWin() {
  mainWin = new BrowserWindow({
    width: 400,
    height: 200,
    webPreferences: {
      nodeIntegration: true
    }
  })

  mainWin.loadFile(`./index.html`)
  mainWin.webContents.openDevTools({mode: 'detach'})
}

function handleIPC() {
  ipcMain.handle('work-notification', async () => {
    const res = await new Promise((resolve, reject) => {
      const notificationIns = new Notification({
        title: '计时结束',
        body: '是否开始工作',
        actions: [
          {
            type: 'button',
            text: '✅'
          }
        ],
        closeButtonText: '❎',
        // hasReply: true
      })
      notificationIns.on('action', () => {
        console.log('action ...')
        resolve('work')
      })
      notificationIns.on('close', () => {
        console.log('close ...')
        resolve('rest')
      })
      notificationIns.show()
      // notificationIns.on('show', () => console.log('trigger show'))
      // notificationIns.on('click', (e) => console.log('trigger click', e))
      // notificationIns.on('reply', (e) => console.log('trigger reply', e))
      // notificationIns.on('failed', () => console.log('trigger failed'))
    })
    return res
  })
}