const { ipcRenderer } = require('electron')

btnMax2.onclick = () => ipcRenderer.invoke('maximize')
btnMin2.onclick = () => ipcRenderer.invoke('minimize')
btnClose2.onclick = () => ipcRenderer.invoke('close')