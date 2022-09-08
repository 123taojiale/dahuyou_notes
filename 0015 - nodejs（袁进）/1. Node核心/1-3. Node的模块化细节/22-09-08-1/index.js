require('./1')
console.log('module => ', module)
console.log('require => ', require)

/*  不执行 require('./1') 的打印内容
module =>  Module {
  id: '.',
  // => 如果该模块是一个入口模块，那么 id 是一个 . 否则，id 为该模块的绝对路径

  path: '/Users/huyouda/Documents/dahuyou_notes/0015 - nodejs（袁进）/1. Node核心/1-3. Node的模块化细节/22-09-08-1',
  // => 表示的是该模块所在的目录

  exports: {},
  // => 表示该模块的导出内容

  filename: '/Users/huyouda/Documents/dahuyou_notes/0015 - nodejs（袁进）/1. Node核心/1-3. Node的模块化细节/22-09-08-1/index.js',
  // => 表示该模块的绝对路径

  loaded: false,
  // => 表示当前模块是否加载完了

  children: [],
  // => 当前模块依赖（导入）的子模块

  paths: [
    '/Users/huyouda/Documents/dahuyou_notes/0015 - nodejs（袁进）/1. Node核心/1-3. Node的模块化细节/22-09-08-1/node_modules',
    '/Users/huyouda/Documents/dahuyou_notes/0015 - nodejs（袁进）/1. Node核心/1-3. Node的模块化细节/node_modules',
    '/Users/huyouda/Documents/dahuyou_notes/0015 - nodejs（袁进）/1. Node核心/node_modules',
    '/Users/huyouda/Documents/dahuyou_notes/0015 - nodejs（袁进）/node_modules',
    '/Users/huyouda/Documents/dahuyou_notes/node_modules',
    '/Users/huyouda/Documents/node_modules',
    '/Users/huyouda/node_modules',
    '/Users/node_modules',
    '/node_modules'
  ]
  // => paths 表示的模块的查找顺序（使用 require("abc") 这种模式加载模块时，会依据这个 paths 数组来查找我们想要导入的指定模块。）
}

require =>  [Function: require] {
  resolve: [Function: resolve] { paths: [Function: paths] },
  main: Module {
    id: '.',
    path: '/Users/huyouda/Documents/dahuyou_notes/0015 - nodejs（袁进）/1. Node核心/1-3. Node的模块化细节/22-09-08-1',
    exports: {},
    filename: '/Users/huyouda/Documents/dahuyou_notes/0015 - nodejs（袁进）/1. Node核心/1-3. Node的模块化细节/22-09-08-1/index.js',
    loaded: false,
    children: [],
    paths: [
      '/Users/huyouda/Documents/dahuyou_notes/0015 - nodejs（袁进）/1. Node核心/1-3. Node的模块化细节/22-09-08-1/node_modules',
      '/Users/huyouda/Documents/dahuyou_notes/0015 - nodejs（袁进）/1. Node核心/1-3. Node的模块化细节/node_modules',
      '/Users/huyouda/Documents/dahuyou_notes/0015 - nodejs（袁进）/1. Node核心/node_modules',
      '/Users/huyouda/Documents/dahuyou_notes/0015 - nodejs（袁进）/node_modules',
      '/Users/huyouda/Documents/dahuyou_notes/node_modules',
      '/Users/huyouda/Documents/node_modules',
      '/Users/huyouda/node_modules',
      '/Users/node_modules',
      '/node_modules'
    ]
  },
  extensions: [Object: null prototype] {
    '.js': [Function (anonymous)],
    '.json': [Function (anonymous)],
    '.node': [Function (anonymous)]
  },
  cache: [Object: null prototype] {
    '/Users/huyouda/Documents/dahuyou_notes/0015 - nodejs（袁进）/1. Node核心/1-3. Node的模块化细节/22-09-08-1/index.js': Module {
      id: '.',
      path: '/Users/huyouda/Documents/dahuyou_notes/0015 - nodejs（袁进）/1. Node核心/1-3. Node的模块化细节/22-09-08-1',
      exports: {},
      filename: '/Users/huyouda/Documents/dahuyou_notes/0015 - nodejs（袁进）/1. Node核心/1-3. Node的模块化细节/22-09-08-1/index.js',
      loaded: false,
      children: [],
      paths: [Array]
    }
  }
}
*/

/* 执行 require('./1') 的打印内容
module =>  Module {
  id: '.',
  path: '/Users/huyouda/Documents/dahuyou_notes/0015 - nodejs（袁进）/1. Node核心/1-3. Node的模块化细节/22-09-08-1',
  exports: {},
  filename: '/Users/huyouda/Documents/dahuyou_notes/0015 - nodejs（袁进）/1. Node核心/1-3. Node的模块化细节/22-09-08-1/index.js',
  loaded: false,
  children: [
    Module {
      id: '/Users/huyouda/Documents/dahuyou_notes/0015 - nodejs（袁进）/1. Node核心/1-3. Node的模块化细节/22-09-08-1/1.js',
      path: '/Users/huyouda/Documents/dahuyou_notes/0015 - nodejs（袁进）/1. Node核心/1-3. Node的模块化细节/22-09-08-1',
      exports: {},
      filename: '/Users/huyouda/Documents/dahuyou_notes/0015 - nodejs（袁进）/1. Node核心/1-3. Node的模块化细节/22-09-08-1/1.js',
      loaded: true,
      children: [],
      paths: [Array]
    }
  ],
  // => children 存放当前模块都依赖哪些子模块

  paths: [
    '/Users/huyouda/Documents/dahuyou_notes/0015 - nodejs（袁进）/1. Node核心/1-3. Node的模块化细节/22-09-08-1/node_modules',
    '/Users/huyouda/Documents/dahuyou_notes/0015 - nodejs（袁进）/1. Node核心/1-3. Node的模块化细节/node_modules',
    '/Users/huyouda/Documents/dahuyou_notes/0015 - nodejs（袁进）/1. Node核心/node_modules',
    '/Users/huyouda/Documents/dahuyou_notes/0015 - nodejs（袁进）/node_modules',
    '/Users/huyouda/Documents/dahuyou_notes/node_modules',
    '/Users/huyouda/Documents/node_modules',
    '/Users/huyouda/node_modules',
    '/Users/node_modules',
    '/node_modules'
  ]
}
require =>  [Function: require] {
  resolve: [Function: resolve] { paths: [Function: paths] },
  main: Module {
    id: '.',
    path: '/Users/huyouda/Documents/dahuyou_notes/0015 - nodejs（袁进）/1. Node核心/1-3. Node的模块化细节/22-09-08-1',
    exports: {},
    filename: '/Users/huyouda/Documents/dahuyou_notes/0015 - nodejs（袁进）/1. Node核心/1-3. Node的模块化细节/22-09-08-1/index.js',
    loaded: false,
    children: [ [Module] ],
    paths: [
      '/Users/huyouda/Documents/dahuyou_notes/0015 - nodejs（袁进）/1. Node核心/1-3. Node的模块化细节/22-09-08-1/node_modules',
      '/Users/huyouda/Documents/dahuyou_notes/0015 - nodejs（袁进）/1. Node核心/1-3. Node的模块化细节/node_modules',
      '/Users/huyouda/Documents/dahuyou_notes/0015 - nodejs（袁进）/1. Node核心/node_modules',
      '/Users/huyouda/Documents/dahuyou_notes/0015 - nodejs（袁进）/node_modules',
      '/Users/huyouda/Documents/dahuyou_notes/node_modules',
      '/Users/huyouda/Documents/node_modules',
      '/Users/huyouda/node_modules',
      '/Users/node_modules',
      '/node_modules'
    ]
  },
  extensions: [Object: null prototype] {
    '.js': [Function (anonymous)],
    '.json': [Function (anonymous)],
    '.node': [Function (anonymous)]
  },
  cache: [Object: null prototype] {
    '/Users/huyouda/Documents/dahuyou_notes/0015 - nodejs（袁进）/1. Node核心/1-3. Node的模块化细节/22-09-08-1/index.js': Module {
      id: '.',
      path: '/Users/huyouda/Documents/dahuyou_notes/0015 - nodejs（袁进）/1. Node核心/1-3. Node的模块化细节/22-09-08-1',
      exports: {},
      filename: '/Users/huyouda/Documents/dahuyou_notes/0015 - nodejs（袁进）/1. Node核心/1-3. Node的模块化细节/22-09-08-1/index.js',
      loaded: false,
      children: [Array],
      paths: [Array]
    },
    '/Users/huyouda/Documents/dahuyou_notes/0015 - nodejs（袁进）/1. Node核心/1-3. Node的模块化细节/22-09-08-1/1.js': Module {
      id: '/Users/huyouda/Documents/dahuyou_notes/0015 - nodejs（袁进）/1. Node核心/1-3. Node的模块化细节/22-09-08-1/1.js',
      path: '/Users/huyouda/Documents/dahuyou_notes/0015 - nodejs（袁进）/1. Node核心/1-3. Node的模块化细节/22-09-08-1',
      exports: {},
      filename: '/Users/huyouda/Documents/dahuyou_notes/0015 - nodejs（袁进）/1. Node核心/1-3. Node的模块化细节/22-09-08-1/1.js',
      loaded: true,
      children: [],
      paths: [Array]
    }
  }
}
*/