const {
  app,
  BrowserWindow
} = require('electron')
let win
app.on('ready', () => {
  win = new BrowserWindow({
    backgroundColor: '#2e2c29' // 给一个和 https://github.com 页面相近的背景色
    // Note that even for apps that use ready-to-show event, it is still recommended to set backgroundColor to make the app feel more native.
    // 请注意：即使应用程序可以使用 ready-to-show 事件来解决窗口闪烁的问题，但是我们仍旧更加推荐使用设置背景色的方式来解决该问题，因为这样可以让应用程序在使用体验上，更像是一个本地的应用。
  })
  win.loadURL('https://github.com')
})