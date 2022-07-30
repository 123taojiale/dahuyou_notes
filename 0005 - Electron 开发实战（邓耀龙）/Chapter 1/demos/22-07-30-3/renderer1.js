const {ipcRenderer} = require('electron')
const { getGlobal } = require('@electron/remote')

// 测试：
global.getGlobal = getGlobal

const win2Id = getGlobal('shareObj').win2Id
console.log('renderer1', getGlobal('shareObj').win2Id, win2Id)
ipcRenderer.sendTo(win2Id, 'do-some-work', 1, 2)