const {app, BrowserWindow} = require('electron')

let win1, win2, win3

app.whenReady().then(() => {
  createWindow()
})

function createWindow() {
  win1 = new BrowserWindow({
    height: 300,
    width: 300,
    resizable: false
  })

  win1.loadFile('./index.html')

  win2 = new BrowserWindow({
    height: 300,
    width: 300,
    minWidth: 100,
    minHeight: 100,
    maxWidth: 500,
    maxHeight: 500
  })

  win2.loadFile('./index2.html')

  win3 = new BrowserWindow({
    height: 300,
    width: 300,
    minWidth: 100,
    minHeight: 100,
    maxWidth: 500,
    maxHeight: 500
  })

  win3.loadFile('./index3.html')
  win3.setAspectRatio(1960 / 1080) // 无法约束初始尺寸
}
// width、height 设置的是窗口尺寸的初始值，如果不设置，那么默认宽度是 800 高度是 600