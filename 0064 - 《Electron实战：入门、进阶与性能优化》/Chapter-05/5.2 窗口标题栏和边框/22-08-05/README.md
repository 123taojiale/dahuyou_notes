[toc]

# start

**工具版本：**

![](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202208051543978.png)

**安装依赖：**

`yarn install`

**项目启动：**

`yarn electron:serve` 或 `yarn start`

# 未解决的问题

## 样式问题

![](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202208061034178.png)

这个自定义的标题栏，明明给 icon 设置了 `cursor: pointer`

现象：如果鼠标悬停在图标之外的蓝色区域，那么是小手（pointer）的形状，但是如果直接悬停在图标上，那就变为了默认（normal）的鼠标光标样式。

![](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202208061038588.gif)

暂时还不知道该如何解决该问题

## window.require 和 require

🤔 如果想要在 .vue 文件中使用 Node.js 环境中的模块，为什么不能直接使用 `require` 而得使用 `window.require`？

> 如果出现类似下面这样的报错，那么很可能就是因为在 .vue 文件中直接使用 require 导致的。
>
> ![](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202208082236485.png)

**注意：**

如果想要在渲染进程中使用 Node.js 模块，那么得配置 `webPreferences: { odeIntegration: true, contextIsolation: false }`

# 踩坑

## css 的 @import 语法报错

![](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202208060729619.png)

![](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202208060730816.png)

错误原因：缺少结尾的分号 `;`

## 拖拽问题

网上搜索到的现成的最简单的解决方案：
- 拖拽区域（父级）设置：`-webkit-app-region: drag;`
- 禁止拖拽（子级）设置：`-webkit-app-region: no-drag;`

这个方案是可行的，但是实际在测试的过程中，遇到了坑：**得将这些样式直接写在元素身上，否则无效**

如果将样式写在这里 👇🏻 是无效的：

![](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202208061043157.png)

正确的写法如下 👇🏻：

![](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202208061044408.png)

> 原因不详，猜测也许和 vue 中的 style 解析策略有关

### 细节

`-webkit-user-select: none; user-select: none;` 如果加上这一部分，那么内容（比如：标题的文字，左侧的 logo）将无法被选中。但是，这一部分不是必然要有的，即便去掉，功能依旧正常。

不过，感觉还是有必要加上它们，打开 **Electron Fiddle** 快速测试了一下，在主进程中创建窗口时，加上 `frame: false`，给渲染进程的 `h1` 加上 `-webkit-app-region: drag;` 之后，启动应用。

现象：点击「Hello World！」区域（一整行的任意区域），确实可以实现拖拽效果，👇🏻 记录俩细节问题：
1. 如果鼠标是悬停在 Hello World！ 文字上来拖拽的话，依旧可以拖拽，但是鼠标的光标样式会变为 `I`（此时没法选中 Hello World！ 文字，一旦拖动鼠标，窗口也就）
2. 给 `h1` 设置上 `-webkit-app-region: drag;` 之后，虽然没法直接选中 `h1` 中的内容，还是还是有办法选中的，选中后续内容之后，然后往上拖动，就能选中 Hello World！了

如果需要解决这俩问题，那么只要将 `-webkit-user-select: none; user-select: none;` 给加上就好。

![](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202208061052406.png)

## process.env 的取值问题

`process.env.ELECTRON_NODE_INTEGRATION`

为什么使用 `yarn electron:serve` 启动项目时，它的默认值是 `false`

```js
win = new BrowserWindow({
  width: 800,
  height: 600,
  webPreferences: {
    // Use pluginOptions.nodeIntegration, leave this alone
    // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info

    nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
    contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION,
  }
})
```

### 🤔 如果想要集成 Node.js 环境，让渲染进程也能访问 Node.js 模块，该如何配置呢？

参考文章：[链接](https://nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html)

![](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202208082241459.png)

> **补充两点：**
> 1. 该问题应该早一些意识到的，瞎琢磨了很久才反应过来，默认生成的模板代码中就有提示：![](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202208082245560.png)
> 2. 该问题除了可以通过配置 nodeIntegration、contextIsolation 这俩来解决，还有可以使用 preload script 的方案来实现。（查阅解决方案的时候，了解到的一种解决方式，参考资料：[链接1](https://nklayman.github.io/vue-cli-plugin-electron-builder/guide/guide.html#preload-files)、[链接2](https://nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration)）

### 🤔 如果 `process.env.ELECTRON_NODE_INTEGRATION` 是 `false`，会出现什么问题？

也就意味着：`webPreferences: {nodeIntegration: false, contextIsolation: true}`

此时是没法使用 Node.js 环境的

`const { ipcRenderer } = window.require('electron')`

👆🏻 这种写法，在 `.vue` 文件中会报错

![](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202208082232976.png)

# apis

窗口实例对应的事件：

![](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202208081513625.png)