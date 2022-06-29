## 26-TypeScript 中文错误消息

### 前言

- 时长：2min

### 设置错误提示的语言

ts 的错误提示，是支持多种语言设置的，可以是英文、中文等等。下面介绍两种方式实现中文错误提示。

**方式1：tsc 命令参数**

```shell
tsc --locale zh-CN
# 在执行编译的时候，在 tsc 命令后边加上参数 --local zh-CN 即可。
```

**方式2：更改 vscode 配置**

打开设置，输入 typescript locale，将值改为 zh-CN 即可。

![20211117135824](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20211117135824.png)

> 还是看英文实在，报错的话，方便搜索。