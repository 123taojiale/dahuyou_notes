# 5.2.2 窗口的控制按钮

**核心逻辑：**

```js
let { remote } = require('electron')
export default {
  methods: {
    close() {
      remote.getCurrentWindow().close()
    },
    minisize() {
      remote.getCurrentWindow().minimize()
    },
    restore() {
      remote.getCurrentWindow().restore()
    },
    maxsize() {
      remote.getCurrentWindow().maxmize()
    }
  }
};
```

**在渲染进程中引入 remote 模块**

https://www.npmjs.com/package/@electron/remote

**注意**

`win.restore()` 注意 `restore` 方法，它的效果和我们在 windows 操作系统上的还原窗口操作有所不同。

> 对 `win.restore` 的官方描述：Restores the window from minimized state to its previous state.

从官方描述中可以得知，restore 是将窗口从最小化状态恢复到最小化之前的状态。

如果窗口本身就处于最大化状态下，调用 restore 方法时，并不会让窗口还原为最大化之前的状态。


