`<img loading="lazy" src="xxx" />`

给 `img` 元素加上 `loading="lazy"` 之后，即可图片懒加载的效果。

这些特性在 chrome 内核中很早就实现了，如果我们仅对 chrome 浏览器负责的话，那么这些特性，我们可以大胆使用，而无需顾及其它浏览器的兼容性问题。实际上，在 Electron 中，我们就是可以直接使用的。Electron 的组成中，包括了 Chromium 和 Node.js，这些东西在 Chromium 中都是实现了的。

我们在开发 Electron 应用时，但凡是 chrome 兼容的，我们都可以直接用，不用将过多的精力花费在考虑兼容性的问题上。不仅限于 chrome 的新特新，包括 es 中的高级语法啥的，也都可以直接用。

