直接沿用之前的代码即可，从 package.json 的 name 字段，可以看出是基于哪个目录沿用的。

本节代码和刘晓伦老师书中所提供的代码所有不同，根本原因在于目前（22-08-03）安装最新版的 Electron（^19.0.10），和老师写书时的 Electron 版本不同导致的。remote 模块现在已经没法直接拿来用了，还得做一些额外处理才行。

remote 模块的坑，不就之前刚踩过，相关文档说明：https://github.com/123taojiale/dahuyou_notes/tree/main/0005%20-%20Electron%20%E5%BC%80%E5%8F%91%E5%AE%9E%E6%88%98%EF%BC%88%E9%82%93%E8%80%80%E9%BE%99%EF%BC%89/Chapter%201/demos/22-07-30-3
