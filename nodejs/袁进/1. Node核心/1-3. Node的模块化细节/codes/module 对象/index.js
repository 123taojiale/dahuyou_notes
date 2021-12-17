console.log(module);

/*
Module {
  id: '.',
  // => 如果该模块是一个入口模块，那么 id 是一个 . 否则，id 为该模块的绝对路径
  path: 'c:\\Users\\dahuyou\\Desktop\\fenotes\\nodejs\\袁进\\1. Node核心\\1-3. Node的模块化细节\\codes\\module 对象',
  // => 表示的是该模块所在的目录
  exports: {},
  // => 表示该模块的导出内容
  parent: null,
  // => 表示哪个模块正在使用该模块，它也是一个 Module 对象（或 null 入口模块没有父模块）
  filename: 'c:\\Users\\dahuyou\\Desktop\\fenotes\\nodejs\\袁进\\1. Node核心\\1-3. Node的模块化细节\\codes\\module 对象\\index.js',
  // => 表示该模块的绝对路径
  loaded: false,
  // => 表示当前模块是否加载完了
  children: [],
  // => 当前模块依赖（导入）的子模块
  paths: [
    'c:\\Users\\dahuyou\\Desktop\\fenotes\\nodejs\\袁进\\1. Node核心\\1-3. Node的模块化细节\\codes\\module 对象\\node_modules',
    'c:\\Users\\dahuyou\\Desktop\\fenotes\\nodejs\\袁进\\1. Node核心\\1-3. Node的模块化细节\\codes\\node_modules',
    'c:\\Users\\dahuyou\\Desktop\\fenotes\\nodejs\\袁进\\1. Node核心\\1-3. Node的模块化细节\\node_modules',
    'c:\\Users\\dahuyou\\Desktop\\fenotes\\nodejs\\袁进\\1. Node核心\\node_modules',
    'c:\\Users\\dahuyou\\Desktop\\fenotes\\nodejs\\袁进\\node_modules',
    'c:\\Users\\dahuyou\\Desktop\\fenotes\\nodejs\\node_modules',
    'c:\\Users\\dahuyou\\Desktop\\fenotes\\node_modules',
    'c:\\Users\\dahuyou\\Desktop\\node_modules',
    'c:\\Users\\dahuyou\\node_modules',
    'c:\\Users\\node_modules',
    'c:\\node_modules'
  ]
  // => paths 表示的模块的查找顺序（使用 require("abc") 这种模式加载模块时，会依据这个 paths 数组来查找我们想要导入的指定模块。）
}
*/