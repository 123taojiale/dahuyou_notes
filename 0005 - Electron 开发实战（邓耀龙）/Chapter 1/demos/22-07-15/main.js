const {
  app,
  BrowserWindow
} = require('electron');

let win;

app.whenReady().then(() => {
  win = new BrowserWindow({
    width: '100%',
    height: '100%',
  })

  win.loadURL("https://app.mediatrack.cn/player/1546440698104905728")
})

