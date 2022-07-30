const {ipcMain, app, BrowserWindow, ipcRenderer} = require('electron')

let win

app.on('ready', () => {
  win = new BrowserWindow({
    width: 300,
    height: 300,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
  })

  win.loadFile('./index.html')
  win.webContents.openDevTools({
    mode: 'detach'
  })

  handleIPC()
})

function handleIPC() {
  win.webContents.send('do-some-work', 1, 2)
}