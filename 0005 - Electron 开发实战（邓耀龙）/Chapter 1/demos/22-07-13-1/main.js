// 主进程
const {
  app,
  BrowserWindow,
  ipcMain,
  dialog
} = require('electron');

let win;

app.on('ready', () => {
  win = new BrowserWindow({
    width: 300,
    height: 400,
    webPreferences: {
      nodeIntegration: true,
      devTools: true, // 允许展示调试窗口
    }
  });
  win.webContents.openDevTools(); // 展示调试窗口
  win.loadFile('./index.html');
  handleIPC();
})



// 处理 IPC 通信
function handleIPC() {
  ipcMain.handle('work-notification', async () => {
    return await new Promise((resolve, reject) => {
      const res = dialog.showMessageBoxSync({
        type: 'info',
        title: 'title - 🍅 番茄钟',
        message: 'message - 计时时间到',
        detail: 'detail - 🍅🍅🍅',
        cancelId: 0, // 按esc默认点击索引按钮 - 按下 esc 相当于按下「继续工作」
        defaultId: 1, // 默认高亮的按钮下标 - 默认高亮显示的按钮是「开始休息」
        buttons: ['继续工作', '开始休息'], // 按钮按索引从右往左排序 - 展示的 dialog 按钮顺序和数组的顺序相反
      })
      resolve(res); // 0 - 继续工作；1 - 开始休息
    })
  });
}