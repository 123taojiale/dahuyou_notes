(() => {
  // 所有模块信息
  var my_modules = {
    './src/a.js': module => { // 模块 id 就是当前模块的路径
      // 模块内容，就是函数体内容
      console.log('module a')
      module.exports = 'a'
    },

    './src/index.js': (module, exports, my_require) => {
      console.log('index module')
      const a = my_require('./src/a.js')
      console.log(a)
    }
  }

  var my_module_cache = {} // 模块缓存

  // 根据模块 id 导入指定模块
  function my_require (moduleId) {
    // 检查缓存
    var cachedModule = my_module_cache[moduleId]
    if (cachedModule !== undefined) {
      return cachedModule.exports
    }

    // 缓存初始化
    var module = (my_module_cache[moduleId] = {
      exports: {}
    })


    my_modules[moduleId](module, module.exports, my_require)

    return module.exports // 返回模块的导出内容
  }

  my_require('./src/index.js') // 导入入口模块
})()
