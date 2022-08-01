const { app, BrowserWindow } = require('electron')

let win = null

app.on('ready', () => {
  win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    }
  })
  win.loadFile('index.html')
  win.on('closed', () => win = null)
})

app.on('window-all-closed', () => app.quit())