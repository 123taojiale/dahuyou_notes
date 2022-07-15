const {
  app,
  BrowserWindow
} = require('electron')
let win
app.on('ready', () => {
  win = new BrowserWindow({
    show: false // Whether window should be shown when created. Default is `true`.
    // Class: BrowserWindow
    // new BrowserWindow([options]) 查看 options 都可以填写哪些值：
    // https://www.electronjs.org/zh/docs/latest/api/browser-window#new-browserwindowoptions
  })
  win.loadURL('https://www.electronjs.org/zh/docs/latest/api/browser-window#winloadurlurl-options')
  win.once('ready-to-show', () => {
    win.show(); // Shows and gives focus to the window. - 显示并且聚焦于窗口
  })
  // ready-to-show
  // Emitted when the web page has been rendered (while not being shown) and window can be displayed without a visual flash.
  // 当页面已经渲染完成（但是还没有显示）并且窗口可以被显示时触发
})