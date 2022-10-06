/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/commonjsModuleA.js":
/*!********************************!*\
  !*** ./src/commonjsModuleA.js ***!
  \********************************/
/***/ ((module) => {

eval("module.exports = {\n  a: 1,\n  b: 2,\n  c: 3\n}\n\n\n//# sourceURL=webpack://22-10-06/./src/commonjsModuleA.js?");

/***/ }),

/***/ "./src/es6ModuleA.js":
/*!***************************!*\
  !*** ./src/es6ModuleA.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"a\": () => (/* binding */ a),\n/* harmony export */   \"b\": () => (/* binding */ b),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst a = 1\nconst b = 2\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (3);\n\n\n//# sourceURL=webpack://22-10-06/./src/es6ModuleA.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _commonjsModuleA__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commonjsModuleA */ \"./src/commonjsModuleA.js\");\n/* harmony import */ var _commonjsModuleA__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_commonjsModuleA__WEBPACK_IMPORTED_MODULE_0__);\nconst es6ModuleA = __webpack_require__(/*! ./es6ModuleA */ \"./src/es6ModuleA.js\")\n;\n\nconst test = () => {\n  console.log('./src/index.js')\n\n  console.log('typeof es6ModuleA => ', typeof es6ModuleA)\n  console.log('es6ModuleA.a => ', es6ModuleA.a)\n  console.log('es6ModuleA.b => ', es6ModuleA.b)\n  console.log('es6ModuleA.default => ', es6ModuleA.default) // 注意：如果使用 commonjs 的 require 来导入的话，es6 的默认导出，将会作为 es6ModuleA 的 default 属性被导入。不要误以为变量 es6ModuleA 存放的值就是默认导出的 3\n\n  console.log('commonjsModuleA.a => ', (_commonjsModuleA__WEBPACK_IMPORTED_MODULE_0___default().a))\n  console.log('commonjsModuleA.b => ', (_commonjsModuleA__WEBPACK_IMPORTED_MODULE_0___default().b))\n  console.log('commonjsModuleA.c => ', (_commonjsModuleA__WEBPACK_IMPORTED_MODULE_0___default().c))\n}\n\ntest()\n\n\n//# sourceURL=webpack://22-10-06/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;