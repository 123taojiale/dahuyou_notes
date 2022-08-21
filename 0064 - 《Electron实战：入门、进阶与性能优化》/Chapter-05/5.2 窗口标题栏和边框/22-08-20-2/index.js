const {
  app,
  BrowserWindow,
  ipcMain
} = require('electron')

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
  win.webContents.openDevTools({
    mode: "right"
  })

  // 监听窗口的变化
  win.addListener('resized', handleWinResized)
  handleWinResized()

  win.on('maximize', () => console.log('进入最大化'))
  win.on('unmaximize', () => console.log('退出最大化'))
}

function handleWinResized() {
  console.log('窗口的尺寸发生了变化', win.isMaximized())
  if (win.isMaximized()) win.setBackgroundColor('red')
  else win.setBackgroundColor('blue')
}