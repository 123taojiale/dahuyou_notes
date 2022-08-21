**练习**

- [x] 窗口最大化时，页面背景为红色，否则为蓝色

**核心API**

1. `win.isMaximized()` 判断窗口是否已经最大化了
2. `win.addListener('resized', cb)` 监听窗口尺寸的变化
3. `win.setBackgroundColor()` 设置页面的背景色
4. `win.addListener('maximize', cb)` 进入最大化
5. `win.addListener('unmaximize', cb)` 退出最大化

**补充**

1. 3 可以使用 4、5 来代替，4、5 是书中用的 api
2. 如果通过 mac 窗口自带的交通灯来进入最大化
   - 无法被 `maximize` 监听到
   - 可以被 `resized` 监听到
   - `win.isMaximized()` 返回值是 `false`

![](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202208201722266.png)

![](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202208201726516.png)

![](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202208201732163.png)

![](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202208201758280.png)

![](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202208201759813.png)