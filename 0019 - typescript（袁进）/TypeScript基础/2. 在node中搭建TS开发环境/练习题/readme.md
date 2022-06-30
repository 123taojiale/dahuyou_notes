本章 3 节课都学完之后，按照 2-3 中的需求描述：

> 在 node 中搭建 TS 开发环境
>
> 实现的效果：
>
> 启动工程：npm run dev
> 1. 我们的所有 ts 代码，都写在 src 目录下边
> 2. 每当 src 下边的 ts 代码发生变化之后，立刻自动在内存中完成编译，并运行
>
> 打包：tsc
> 将 src 目录下边的 ts 文件，打包到 dist 目录中

搭建一个 node 下的 ts 开发环境

---

第三方库：
1. node-ts
2. nodemon

主要是完成：
1. tsconfig.json 文件的配置
2. package.json 文件的 scripts 的配置