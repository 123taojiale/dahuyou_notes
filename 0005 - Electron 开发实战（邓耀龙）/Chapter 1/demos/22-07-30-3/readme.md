练习 - 渲染进程之间的通信

**启动项目**

- `npm i`
- `npx electron main.js`

**版本说明：**

![](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202207301800325.png)

# 踩坑

remote 模块的使用问题：
- 在 Electron9 中，如果在渲染进程中使用 remote 模块，控制台会抛出警告信息
- 在 Electron10 中，如果没有配置 `webPreferences.enableRemoteModule: true` 那么将没法在渲染进程中使用 remote 模块
- 在 Electron12 中，remote 模块将被废弃
- 在 Electron14 中，remote 模块直接被移除

```json
{
  "name": "22-07-30-3",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "dependencies": {
    "@electron/remote": "^2.0.8",
    "electron": "^19.0.10"
  }
}
```

现在项目中使用的是最新版的 Electron，也就是 v19，此时早就没有 remote 模块了，如果还想要在渲染进程中引入 remote 模块，得手动安装 `@electron/remote` 包

`npm install --save @electron/remote`

安装完之后呢，还是没法正常使用的，还需要在主进程中初始化 remote 模块：`require('@electron/remote/main').initialize()`

如果版本大于 v14，那么还需要使用该模块中的 enable 方法，处理一下需要使用 remote 模块的渲染进程：`require("@electron/remote/main").enable(webContents)`

> 详细内容，见源码

# 参考资料1

- https://www.electronjs.org/docs/latest/breaking-changes#default-changed-enableremotemodule-defaults-to-false

重点看这一部分，不过就现在的版本（v19）来说，这个配置已经没有任何意义了

![](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202207302102530.png)

# 参考资料2

- https://www.electronjs.org/zh/docs/latest/breaking-changes#%E8%AE%A1%E5%88%92%E9%87%8D%E5%86%99%E7%9A%84-api-140

![](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202207302229788.png)

# 参考资料3

https://github.com/electron/remote

![](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202207302226977.png)

![](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202207302231711.png)