// import { ipcRenderer } from 'electron'
// window.ipcRenderer = ipcRenderer

import { contextBridge, ipcRenderer } from "electron"

contextBridge.exposeInMainWorld('ipcRenderer', {
  send(channel, data) {
    // whitelist channels
    const validChannels = ['tmWinControl', 'tmMonitorWinState', 'tmRestoreWinState']
    if (validChannels.includes(channel)) ipcRenderer.send(channel, data)
  },
  receive(channel, func) {
    const validChannels = ['fmWinControl']
    // 因为事件对象中包含 e.sender - ipc 通信的发起者，所以故意将事件对象给剥离掉，不传递给 func 回调
    if (validChannels.includes(channel)) ipcRenderer.on(channel, (e, ...args) => func(...args))
  }
})