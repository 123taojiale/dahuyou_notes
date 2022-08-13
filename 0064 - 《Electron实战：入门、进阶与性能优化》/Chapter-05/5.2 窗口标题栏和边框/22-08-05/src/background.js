'use strict'

import {
  app,
  protocol,
  BrowserWindow,
  ipcMain
} from 'electron'
import {
  createProtocol
} from 'vue-cli-plugin-electron-builder/lib'
import installExtension, {
  VUEJS3_DEVTOOLS
} from 'electron-devtools-installer'
// require('@electron/remote/main').initialize()
import path from "path"

const isDevelopment = process.env.NODE_ENV !== 'production'
// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([{
  scheme: 'app',
  privileges: {
    secure: true,
    standard: true
  }
}])

let win

async function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    webPreferences: {
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      // nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
      // contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION,
      // enableRemoteModule: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    win.loadURL('app://./index.html')
  }

  // 监听窗口进入|退出最大化
  win.addListener('maximize', handleMaximize)
  win.addListener('unmaximize', handleUnMaximize)
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await installExtension(VUEJS3_DEVTOOLS)
    } catch (e) {
      console.error('Vue Devtools failed to install:', e.toString())
    }
  }
  createWindow()
  handleIPC()
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}

function handleIPC() {
  ipcMain.on('toMain', (e, op) => {
    let isMax = win.isMaximized()
    let res = isMax
    if (op === 'restore' || op === 'maximize') {
      if (isMax) {
        console.log('调用 win.restore 退出窗口最大化')
        win.restore()
        res = false
      } else {
        console.log('调用 win.maximize 使窗口进入最大化')
        win.maximize()
        res = true
      }
    }
    if (op === 'minimize') win.minimize()
    if (op === 'close') win.close()
    win.webContents.send('fromMain', res)
  })
}

/**
 * 窗口进入最大化时的回调
 */
function handleMaximize() {
  console.log('窗口最大化了')
  win.webContents.send('fromMain', true)
}

/**
 * 窗口退出最大化时的回调
 */
function handleUnMaximize() {
  console.log('窗口退出最大化了')
  win.webContents.send('fromMain', false)
}