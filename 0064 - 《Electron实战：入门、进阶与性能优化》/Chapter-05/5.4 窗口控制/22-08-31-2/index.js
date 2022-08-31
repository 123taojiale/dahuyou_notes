const {app, BrowserWindow, nativeTheme} = require('electron')

let win

app.whenReady().then(() => {
  createWindow()
})

function createWindow() {
  win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })

  win.loadFile('./index.html')

  win.webContents.openDevTools()

  win.on('close', () => win = null)

  // 查看当前是否是深色模式
  console.log('当前是深色模式嘛？', nativeTheme.shouldUseDarkColors)
}

// mac 下的特殊处理，所有窗口关闭后，不退出应用，应用图标依旧驻留在 Dock 栏上
app.on('window-all-closed', () => {
  console.log('所有窗口都被关闭了')
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  console.log('激活应用程序')
  if (win === null) createWindow()
})

// 当前的操作系统信息
console.log('process.platform => ', process.platform)
console.log("require('os').platform() => ", require('os').platform())
// 在同一环境下，使用这两种方式，获取到的结果都是一样的

// 查看当前的 Electron 版本号
console.log('查看当前的 Electron 版本号 => ', process.versions.electron)