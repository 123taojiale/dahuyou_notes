const { ipcRenderer } = require('electron')

ipcRenderer.on('do-some-work', (e, a, b) => {
  console.log('renderer trigger do-some-work event, args => ', e, a, b)
})