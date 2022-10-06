/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page/event */ \"./src/page/event.js\");\n\n\n// 测试\n// import { isPrime, getRandom, radColor } from \"./utils\";\n\n// console.log(`isPrime(1) => ${isPrime(1)}`);\n// console.log(`isPrime(2) => ${isPrime(2)}`);\n// console.log(`isPrime(3) => ${isPrime(3)}`);\n// console.log(`isPrime(4) => ${isPrime(4)}`);\n// console.log(`isPrime(5) => ${isPrime(5)}`);\n\n// console.log(`getRandom(1, 5) => ${getRandom(1, 5)}`)\n// console.log(`getRandom(1, 5) => ${getRandom(1, 5)}`)\n// console.log(`getRandom(1, 5) => ${getRandom(1, 5)}`)\n// console.log(`getRandom(1, 5) => ${getRandom(1, 5)}`)\n// console.log(`getRandom(1, 5) => ${getRandom(1, 5)}`)\n\n// console.log(`radColor() => ${radColor()}`)\n// console.log(`radColor() => ${radColor()}`)\n// console.log(`radColor() => ${radColor()}`)\n// console.log(`radColor() => ${radColor()}`)\n// console.log(`radColor() => ${radColor()}`)\n// END测试\n\n//# sourceURL=webpack://22-10-05/./src/index.js?");

/***/ }),

/***/ "./src/page/appendNumber.js":
/*!**********************************!*\
  !*** ./src/page/appendNumber.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n\n\nconst divContainer = document.getElementById('divContainer')\nconst divCenter = document.getElementById('divCenter')\n\n/**\n * 在中间产生一个数字\n * @param {Number} n 产生的数字\n */\nconst createCenterNumber = n => {\n  divCenter.innerText = n\n}\n\n/**\n * 在中间产生一个素数\n * @param {Number} n 产生的数字\n * @param {*} color 中间的素数的颜色\n */\nconst createCenterPrimeNumber = (n, color) => {\n  const div = document.createElement('div')\n  div.classList.add('center')\n  div.style.color = color\n  div.innerText = n\n  document.body.appendChild(div)\n  getComputedStyle(div).left // 只要读取某个元素的位置或尺寸信息，则会导致浏览器重新渲染 reflow\n  div.style.transform = `translate(${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.getRandom)(-200, 200)}px, ${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.getRandom)(\n    -200,\n    200\n  )}px)`\n  div.style.opacity = 0\n\n  // 3 秒后，将自身给 remove 掉，防止页面上 opacity 为 0 的元素堆积\n  setTimeout(() => {\n    div.remove()\n  }, 3000)\n}\n\nconst appendNumber = (n, isPrime) => {\n  const span = document.createElement('span')\n  if (isPrime) {\n    const color = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.radColor)()\n    span.style.color = color\n    createCenterPrimeNumber(n, color)\n  }\n  span.innerText = n\n  divContainer.appendChild(span)\n\n  createCenterNumber(n)\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appendNumber);\n\n\n//# sourceURL=webpack://22-10-05/./src/page/appendNumber.js?");

/***/ }),

/***/ "./src/page/event.js":
/*!***************************!*\
  !*** ./src/page/event.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n/* harmony import */ var _appendNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appendNumber */ \"./src/page/appendNumber.js\");\n\n\n// import appendNumber from './appendNumberWithJquery'\n\nconst n = new _utils__WEBPACK_IMPORTED_MODULE_0__.NumberTimer(100)\n\nn.onNumberCreated = function (n, isPrime) {\n  ;(0,_appendNumber__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(n, isPrime)\n}\n\n//该模块用于注册事件\nlet isStart = false //默认没有开始\n\nwindow.onclick = () => {\n  if (isStart) {\n    n.stop()\n    isStart = false\n  } else {\n    n.start()\n    isStart = true\n  }\n}\n\n\n//# sourceURL=webpack://22-10-05/./src/page/event.js?");

/***/ }),

/***/ "./src/utils/getRandom.js":
/*!********************************!*\
  !*** ./src/utils/getRandom.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * 获取一个介于 [min, max] 区间内的随机整数\n * @param {Number} min 最小值\n * @param {Number} max 最大值\n * @returns [min, max] 随机整数\n */\nconst getRandom = (min, max) => Math.round(Math.random() * (max - min) + min)\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getRandom);\n\n\n//# sourceURL=webpack://22-10-05/./src/utils/getRandom.js?");

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NumberTimer\": () => (/* reexport safe */ _number__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n/* harmony export */   \"getRandom\": () => (/* reexport safe */ _getRandom__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"isPrime\": () => (/* reexport safe */ _isPrime__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   \"radColor\": () => (/* reexport safe */ _radColor__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _getRandom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getRandom */ \"./src/utils/getRandom.js\");\n/* harmony import */ var _isPrime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isPrime */ \"./src/utils/isPrime.js\");\n/* harmony import */ var _radColor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./radColor */ \"./src/utils/radColor.js\");\n/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./number */ \"./src/utils/number.js\");\n\n\n\n\n\n\n//# sourceURL=webpack://22-10-05/./src/utils/index.js?");

/***/ }),

/***/ "./src/utils/isPrime.js":
/*!******************************!*\
  !*** ./src/utils/isPrime.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * 判断一个数是否是素数\n * @param {Number} num 数字\n * @returns true 是素数 | false 不是素数\n */\nconst isPrime = num => {\n  if (num < 2) return false // 2 是最小的素数\n\n  // 查找除了 1 和自身之外，是否还有其它余数，如果有，则非素数\n  for (let i = 2; i < num - 1; i++) if (num % i === 0) return false\n\n  return true\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isPrime);\n\n\n//# sourceURL=webpack://22-10-05/./src/utils/isPrime.js?");

/***/ }),

/***/ "./src/utils/number.js":
/*!*****************************!*\
  !*** ./src/utils/number.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _isPrime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isPrime */ \"./src/utils/isPrime.js\");\n\n\nclass NumberTimer {\n  constructor (duration = 500) {\n    this.duration = duration // 产生数字的计时器，默认每 0.5s 产生一个数字\n    this.number = 1 // 当前的数字\n    this.timer = null // 计算器\n    this.onNumberCreated = null // 回调 - 产生一个数字时，需要做的一些事儿\n  }\n\n  // 开始产生数字\n  start () {\n    if (this.timer) return\n\n    this.timer = setInterval(() => {\n      this.onNumberCreated &&\n        this.onNumberCreated(this.number, (0,_isPrime__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.number))\n      this.number++\n    }, this.duration)\n  }\n\n  // 停止产生数字\n  stop () {\n    clearInterval(this.timer)\n    this.timer = null\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NumberTimer);\n\n\n//# sourceURL=webpack://22-10-05/./src/utils/number.js?");

/***/ }),

/***/ "./src/utils/radColor.js":
/*!*******************************!*\
  !*** ./src/utils/radColor.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getRandom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getRandom */ \"./src/utils/getRandom.js\");\n\n\nconst colors = [\n  '#f26395',\n  '#62efab',\n  '#ef7658',\n  '#ffe868',\n  '#80e3f7',\n  '#d781f9'\n]\n\n/**\n * 返回一个随机的颜色\n */\nconst radColor = () => colors[(0,_getRandom__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(0, colors.length - 1)]\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (radColor);\n\n\n//# sourceURL=webpack://22-10-05/./src/utils/radColor.js?");

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