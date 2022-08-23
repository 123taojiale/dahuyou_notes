# 🤔 如何实现一个不规则的窗口？

1. `win = new BrowserWindow({ transparent: true })` 创建窗口实例的时候，加上 `transparent` 属性，让整个窗口边透明
2. `.content { width: 100px; height: 100px; border-radius: 50%; background-color: #fff }` 对于窗口中想要展示的内容，自定义好形状（使用 css 的相关知识），并添加一个可见的背景色

![](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202208230707320.png)

# 🤔 无穿透效果，存在什么问题？

当用户点击透明的 4 个角时，相当于点击事件也发生在我们的窗口上。

- 如果透明区域下，正好有我们想要选中的内容，当我们点击透明区域时，是没法选中的。
- 鼠标长按透明区域，也可以实现拖拽窗口的效果。

![](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202208230706515.png)

![](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202208230707320.png)

# 🤔 如何让鼠标穿透我们的窗口？

- `win.setIgnoreMouseEvents(true, { forward: true })` 穿透
- `win.setIgnoreMouseEvents(false)` 不穿透

# 🤔 什么时刻判断是否需要让鼠标点击事件穿透？

- `window.addEventListener('mousemove', func)`

当鼠标在我们的窗口中移动时判断

`mousemove` 事件触发地很频繁，当鼠标移动时，它会不断地触发

# 🤔 如何判断当前鼠标移入的区域是否是透明区域？

- `html, body { pointer-events: none; }` 永远不会成为鼠标事件的 target
- `.content { pointer-events: auto; }` 可以成为鼠标事件的 target

![](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202208230715484.png)

**重点**

在窗口对象身上触发 `mousemove` 事件，获取到的 `e.target` 是 `document.documentElement`

# 🤔 设置 pointer-events 与否，实际有什么区别？

- `html, body { pointer-events: none; }`
- `.content { pointer-events: auto; }`

**没有设置 `pointer-events` 在透明区域移动**

![](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202208230704449.png)

**设置 `pointer-events` 在透明区域移动**

![](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202208230720570.png)

**分析**

该 demo 结构很简单，白色背景区域，其实就是 `.content`，但是它是 `body` 的子元素，当我们给 `body` 添加上 `pointer-events: none;` 样式时，为了防止子元素 `.content` 被影响，所以还得给 `.content` 单独处理一下，加上 `pointer-events: auto;` 才行。

**小结**

给 `html, body` 加上 `pointer-events: none;` 目的是为了防止它们成为鼠标事件的 target，加上该声明后，鼠标事件将不会在它们身上触发。

这么做的目的是为了配合回调中的逻辑判断 `e.target === document.documentElement` 当该逻辑成立时，意味着目前鼠标正处于透明区域，否则处于内容区域。

给 `html, body` 加上 `pointer-events: none;` 声明之后，如果鼠标在透明区域移动，就会触发窗口对象的 `mousemove` 事件，此时获取到的 `e.target` 就是 `document.documentElement`

