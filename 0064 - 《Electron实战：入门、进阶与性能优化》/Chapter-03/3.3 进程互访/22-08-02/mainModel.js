let { BrowserWindow } = require('electron')

exports.makeWin = () => new BrowserWindow({ nodeIntegration: true })