const { app, BrowserWindow } = require('electron')

let win

app.whenReady().then(() => {
  win = new BrowserWindow({
    frame: false,
  })

  win.loadFile('./index.html')
})