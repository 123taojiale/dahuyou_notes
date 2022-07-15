const {
  app,
  BrowserWindow
} = require('electron')

let mainWindow
let win2
app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    width: 1000,
    heigth: 680,
  })
  mainWindow.loadURL('https://mathiasbynens.be/demo/img-loading-lazy')
  mainWindow.webContents.openDevTools();

  // win2 = new BrowserWindow({
  //   width: 1000,
  //   heigth: 680,
  // })
  // win2.loadFile('./index.html')
  // win2.webContents.openDevTools();
})