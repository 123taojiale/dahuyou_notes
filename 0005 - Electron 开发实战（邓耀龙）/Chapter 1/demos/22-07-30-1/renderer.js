const { ipcRenderer } = require('electron')

ipcRenderer.send('do-some-work', 1, 2)