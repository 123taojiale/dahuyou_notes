const { ipcRenderer } = require('electron')

init()

function init() {
  const btn = document.getElementById('btn')
  btn.addEventListener('click', async () => {
    const res = await ipcRenderer.invoke('msg_render2main')
    console.log('渲染进程接收到的来自主进程的数据：', res)
  })
}