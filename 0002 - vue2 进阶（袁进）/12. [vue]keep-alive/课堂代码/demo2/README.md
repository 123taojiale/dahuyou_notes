UI 方面的内容，别太关注，主要是用到了：tailwindcss

https://www.tailwindcss.cn/

🤔 tailwindcss 是干啥的？

**无需离开您的 HTML，即可快速建立现代网站。**

🤔 tailwindcss 是啥？

官网首页对其的定义：Tailwind CSS 是一个功能类优先的 **CSS 框架**，它集成了诸如 flex, pt-4, text-center 和 rotate-90 这样的的类，它们能直接在脚本标记语言中组合起来，构建出任何设计。

> 暂时知道这些就 OK 了，之后有需要的话，再抽时间学习学习 tailwind，并将其整理到知识库中。

**补充：**

其实 tailwindcss 给我们提供的这些预设 className，语义化做的还是非常 nice 的，即便不看官方文档，大体上也都能猜到是啥。

比如：
- `h-full` 是 `height: 100%`
- `w-full` 是 `width: 100%`
- `flex` 是 `display: flex`
- `overflow-hidden` 是 `overflow: hidden`
- `text-center` 是 `text-align: center`
- `mb-10` 中的 `md` 是 `margin-bottom`，`10` 是 `2.5rem`

对于其中的一些细节，比如：mb-10 中的 10 并不是 10px，默认情况下，10 表示 2.5rem。这些值具体是如何计算的，如何转换的，可以去查阅官方文档。