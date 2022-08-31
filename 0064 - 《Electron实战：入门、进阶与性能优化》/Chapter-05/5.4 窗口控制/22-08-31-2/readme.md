# 5.4.4 Mac 系统下的关注点

## window-all-closed

**Emitted when all windows have been closed.**

> 当所有窗口都被关闭时，会触发该事件 `window-all-closed`。

If you do not subscribe to this event and all windows are closed, the default behavior is to quit the app; however, if you subscribe, you control whether the app quits or not. If the user pressed `Cmd + Q`, or the developer called `app.quit()`, Electron will first try to close all the windows and then emit the `will-quit` event, and in this case the `window-all-closed` event would not be emitted.

## activate

**Emitted when the application is activated.**

> 当点击 Dock 栏的应用图标时，会触发该事件
>
> ![](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202208311420604.png)

Various actions can trigger this event, such as launching the application for the first time, attempting to re-launch the application when it's already running, or clicking on the application's dock or taskbar icon.

## process.platform

The process.platform property returns a string identifying the operating system platform for which the Node.js binary was compiled.

Currently possible values are:

- `aix`
- `darwin` 表示当前操作系统为 mac 系统
- `freebsd`
- `linux` 表示当前操作系统为 Linux 系统
- `openbsd`
- `sunos`
- `win32` 表示当前操作系统为 Windows 系统（不管是不是 64 位的）

> 在 Electron 中，常用的就是 `darwin` `linux` `win32`

## 区分窗口关闭和窗口退出

`window-all-closed` 监听的是窗口的关闭事件，无法监听窗口的退出

- 关闭
  - cmd + w
  - 点击窗口标题栏的关闭图标
- 退出
  - cmd + q
  - 右键应用程序后选择退出

## 读取系统当前是否是深色模式


```js
const { nativeTheme } = require('electron')
nativeTheme.shouldUseDarkColors
// true 深色
// false 非深色
```