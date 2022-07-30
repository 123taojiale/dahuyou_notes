const {ipcRenderer} = require('electron')

ipcRenderer.on('do-some-work', (e, a, b) => {
  console.log('trigger do-some-work', e, a, b)
})