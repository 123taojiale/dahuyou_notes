;(() => {
  var __webpack_modules__ = {
    './src/a.js': module => {
      eval(
        "console.log('module a')\nmodule.exports = 'a'\n\n//# sourceURL=webpack://22-10-06/./src/a.js?"
      )
      // console.log('module a')
      // module.exports = 'a'
    },

    './src/index.js': (
      __unused_webpack_module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      eval(
        'console.log(\'index module\')\nconst a = __webpack_require__(/*! ./a */ "./src/a.js")\nconsole.log(a)\n\n\n//# sourceURL=webpack://22-10-06/./src/index.js?'
      )
      // console.log('index module')
      // const a = __webpack_require__("./src/a.js")
      // console.log(a)
    }
  }
  // The module cache
  var __webpack_module_cache__ = {}
  // The require function
  function __webpack_require__ (moduleId) {
    // Check if module is in cache
    var cachedModule = __webpack_module_cache__[moduleId]
    if (cachedModule !== undefined) {
      return cachedModule.exports
    }
    // Create a new module (and put it into the cache)
    var module = (__webpack_module_cache__[moduleId] = {
      // no module.id needed
      // no module.loaded needed
      exports: {}
    })
    // Execute the module function
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__)
    // Return the exports of the module
    return module.exports
  }
  // startup
  // Load entry module and return exports
  // This entry module can't be inlined because the eval devtool is used.
  var __webpack_exports__ = __webpack_require__('./src/index.js')
})()
