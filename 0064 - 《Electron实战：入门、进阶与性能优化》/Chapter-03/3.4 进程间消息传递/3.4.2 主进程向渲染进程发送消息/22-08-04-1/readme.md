**练习：**

使用同步地方式来实现渲染进程和主进程之间的通信

**核心：**

- 渲染进程发送同步请求：`ipcRenderer.sendSync`
- 主进程响应请求：`event.returnValue`

**安装依赖：**

`yarn install`

**启动工程：**

`yarn start`

