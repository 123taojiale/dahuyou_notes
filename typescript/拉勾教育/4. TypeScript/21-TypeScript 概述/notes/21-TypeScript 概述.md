## 21-TypeScript 概述

### 前言

- 时长：6min

### TypeScipt 和 JavaScript 的关系

![20211115103558](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20211115103558.png)

typescript 是 javascript 的超级。

typescript 是我们在开发阶段写的代码，最终运行的代码并不是 typescript，而是由 typescript 编译生成的 javascript。通过配置，我们可以指定生成的 javascript 的版本（比如：ES3）。所以，我们在使用 typescript 写代码时，可以不去考虑兼容性问题，因为运行的，是最终编译生成的等效的 javascript 代码。

任何一种 javascript 的运行环境都支持 typescript。比如：浏览器、node、桌面应用，等等。原因同上，因为最终运行的是 javascript。

> typescript 可以将高版本的 javascript 代码编译为较低版本的 javascript，这功能有点类似于 bable，都可以让咋们写代码的时候不需要顾及兼容性问题，es 的新特性，随便用。

### TS 和 Flow

它们俩的初衷都是用于解决 javascript 中类型系统不足的问题。但是，typescript 相对于 flow 而言，它的功能更为强大，生态也更健全、更完善。

typescript 和 vscode 都是 Microsoft 推出的，都是一家人，支持也更友好一些。

> 所以，直接学 typescript 就完事了，若之前有了解过 flow，那自然最好，不了解就直接上 typescript 吧。

### examples

- Angular
- Vue.js 3.0

这俩框架，都是直接用 ts 写的，对 ts 的支持都很友好。

### TS 特点

TypeScript —— 前端领域的第二语言。

**新增了较多概念**

对于初学者而言，该语言本身的诸多概念，是我们必须要学习的。比如，接口、泛型、枚举等等。

**progressive**

TypeScript 是属于渐进式的，也就是说，它给我们提供的东西，我们是可以选用的。若不使用它给我们提供的东西，完全按照之前的 js 的开发方式来开发，也完全是 OK 的。

**项目初期成本**

若使用 ts 来做开发，那么在项目初期，我们需要定义很多类型，定义完之后，才正式开始开发，这需要一定的成本。但是，这样的做法，在大型项目中，尤其是对于那些需要长期维护的项目而言，都是很有必要的。一劳永逸。

