# __dirname 和 __filename

在 22-09-07-1 中，简单介绍了模块化的实现原理，了解了「为何 `__dirname` `__filename` 并非 `global` 全局对象身上的属性，我们却可以在模块中访问到它们」

下面，来认识一下这两个值

- `__dirname` 其实就是 `module.path`
- `__filename` 其实就是 `module.filename`

这两个值，仅和当前模块的位置有关，和导入该模块的其它模块所在的位置没有任何关系
比如，无论是在 `./index.js` 还是在 `./src/index.js` 中导入，打印出来的结果都是一样的

```
./1.js
__dirname =>  /Users/huyouda/Documents/dahuyou_notes/0015 - nodejs（袁进）/1. Node核心/1-3. Node的模块化细节/22-09-07-2
__filename =>  /Users/huyouda/Documents/dahuyou_notes/0015 - nodejs（袁进）/1. Node核心/1-3. Node的模块化细节/22-09-07-2/1.js
./src/2.js
__dirname =>  /Users/huyouda/Documents/dahuyou_notes/0015 - nodejs（袁进）/1. Node核心/1-3. Node的模块化细节/22-09-07-2/src
__filename =>  /Users/huyouda/Documents/dahuyou_notes/0015 - nodejs（袁进）/1. Node核心/1-3. Node的模块化细节/22-09-07-2/src/2.js
```

> 以上打印的内容，是运行 `./index.js` 和 `./src/index.js` 得到的结果