理解的 loader 的原理后，写一个测试案例。

在入口文件 `index.js` 使用 CommonJS标准 require 函数导入 `index.css` 文件。

![20210710072937](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210710072937.png)

index.css

```css
body {
    background-color: #008c8c;
}
```

编写一个 style-loader.js 函数来处理这个 index.css 文件，在生成 AST 之前将 index.css 中的代码转换为有效的 js 代码。需要实现的效果是：让页面背景变为指定颜色。

![20210710074041](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210710074041.png)