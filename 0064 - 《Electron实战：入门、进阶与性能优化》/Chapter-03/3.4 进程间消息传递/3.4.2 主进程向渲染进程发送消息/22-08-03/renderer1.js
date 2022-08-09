const {
  ipcRenderer
} = require('electron')

init()
handleIPC()

function init() {
  const btn = document.querySelector('#snedMsg2')
  btn.addEventListener('click', () => {
    console.log('向主进程发送 msg_render2main 请求')
    ipcRenderer.send('msg_render2main')
  })
}

function handleIPC() {
  ipcRenderer.on('msg_main2render', (e, a, b) => {
    console.log('接收到主进程发送的 msg_main2render 请求')
    console.log(a, b)
  })
}