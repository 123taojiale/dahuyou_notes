const {
  app,
  BrowserWindow,
  BrowserView
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

  // win.webContents.openDevTools()

  // let view = new BrowserView({
  //   webPreferences: { preload }
  // })

  let view = new BrowserView()
  win.setBrowserView(view)

  let size = win.getSize()
  view.setBounds({
    x: 0,
    y: 100,
    width: size[0],
    height: size[1] - 100
  })

  view.setAutoResize({
    width: true,
    height: true
  })

  view.webContents.loadURL('https://www.baidu.com')
}