console.log('module => ', module)
console.log('require => ', require)

/* ⚠️ 以下内容并非直接执行 1.js 的打印结果，而是在 ./index.js 中，通过 require('./1.js') 导入 1.js 模块时打印的内容
module =>  Module {
  id: '/Users/huyouda/Documents/dahuyou_notes/0015 - nodejs（袁进）/1. Node核心/1-3. Node的模块化细节/22-09-08-1/1.js',
  // => 由于 1.js 作为一个模块被 index.js 导入（说明 1.js 不是入口），此时 module.id 就是当前模块的绝对路径

  path: '/Users/huyouda/Documents/dahuyou_notes/0015 - nodejs（袁进）/1. Node核心/1-3. Node的模块化细节/22-09-08-1',
  exports: {},
  filename: '/Users/huyouda/Documents/dahuyou_notes/0015 - nodejs（袁进）/1. Node核心/1-3. Node的模块化细节/22-09-08-1/1.js',
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
  // => 通过 require.main 可以查看当前模块所在的包，主模块（也就是入口）的 module 对象

  extensions: [Object: null prototype] {
    '.js': [Function (anonymous)],
    '.json': [Function (anonymous)],
    '.node': [Function (anonymous)]
  },
  // => 查找模块的过程中，自动补全路径的时候，先补全啥，后补全啥，看的应该就是 require.extensions

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
      loaded: false,
      children: [],
      paths: [Array]
    }
  }
  // => require.cache 表示当前模块的缓存，本质上就是一个对象，对象的 key，其实就是 module.filename，value 就是模块对象本身
}
*/