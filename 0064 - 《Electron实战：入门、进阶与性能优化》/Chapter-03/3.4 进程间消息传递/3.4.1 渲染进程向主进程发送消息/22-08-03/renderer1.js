const { ipcRenderer } = require('electron')

init()

function init() {
  const btn = document.querySelector('#snedMsg1')
  btn.addEventListener('click', handleIPC)
}

function handleIPC() {
  console.log('向主进程发送 msg_render2main 请求')
  ipcRenderer.send('msg_render2main', 1, 2)
}