const { ipcRenderer } = require('electron')

init()

function init() {
  const btn = document.getElementById('btn')
  btn.addEventListener('click', () => {
    const res = ipcRenderer.sendSync('msg_render2main')
    console.log('received message from main process', res)
  })
}