;(() => {
  // webpackBootstrap
  var __webpack_modules__ = {
    './src/a.js': (module, __unused_webpack_exports, __webpack_require__) => {
      __webpack_require__(/*! ./b */ './src/b.js')
      console.log('a')
      module.exports = 'a'
    },

    './src/b.js': module => {
      console.log('b')
      module.exports = 'b'
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

  var __webpack_exports__ = {}
  ;(() => {
    console.log('index')
    __webpack_require__('./src/a.js')
    __webpack_require__('./src/b.js')
  })()
})()
