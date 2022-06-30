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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page/event */ \"./src/page/event.js\");\n\r\n\r\n/* import NumberTimer from \"./util/NumberTimer\";\r\nimport appendNumber from \"./page/appendNumber\";\r\n\r\nconst n = new NumberTimer(100);\r\n\r\nn.onNumberCreated = function (n, isPrime) {\r\n    appendNumber(n, isPrime);\r\n}\r\n\r\nn.start();\r\n\r\nsetTimeout(() => {\r\n    n.stop();\r\n}, 5000); */\r\n\r\n\r\n/* import NumberTimer from \"./util/NumberTimer\";\r\n\r\nconst n = new NumberTimer(100);\r\n\r\nn.onNumberCreated = function (n, isPrime) {\r\n    console.log(n, isPrime);\r\n}\r\n\r\nn.start();\r\n\r\nsetTimeout(() => {\r\n    n.stop();\r\n}, 3000); */\r\n\r\n\r\n\r\n/* import radColor, {\r\n    getRandom\r\n} from \"./util/radColor\";\r\n\r\nconsole.log(getRandom(1, 5));\r\nconsole.log(getRandom(1, 5));\r\nconsole.log(getRandom(1, 5));\r\nconsole.log(getRandom(1, 5));\r\nconsole.log(getRandom(1, 5));\r\nconsole.log(getRandom(1, 5));\r\nconsole.log(getRandom(1, 5));\r\nconsole.log(getRandom(1, 5));\r\n\r\nconsole.log(radColor());\r\nconsole.log(radColor());\r\nconsole.log(radColor());\r\nconsole.log(radColor());\r\nconsole.log(radColor());\r\nconsole.log(radColor()); */\r\n\r\n/* import isPrime from \"./util/isPrime\";\r\n\r\nconsole.log(isPrime(1));\r\nconsole.log(isPrime(2));\r\nconsole.log(isPrime(3));\r\nconsole.log(isPrime(4));\r\nconsole.log(isPrime(5));\r\nconsole.log(isPrime(6)); */\n\n//# sourceURL=webpack://test/./src/index.js?");

/***/ }),

/***/ "./src/page/appendNumber.js":
/*!**********************************!*\
  !*** ./src/page/appendNumber.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ appendNumber)\n/* harmony export */ });\n/* harmony import */ var _util_radColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/radColor */ \"./src/util/radColor.js\");\n\r\n\r\nconst divContainer = document.getElementById('divContainer');\r\nconst divCenter = document.getElementById('divCenter');\r\n\r\n/**\r\n * 每产生一个新的数字，就将其插入到页面中。\r\n * @param {Number} n 产生的数字\r\n * @param {Boolean} isPrime 是否是素数\r\n */\r\nfunction appendNumber(n, isPrime) {\r\n    const span = document.createElement('span');\r\n    span.innerText = n;\r\n\r\n    if (isPrime) {\r\n        const color = (0,_util_radColor__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n        span.style.color = color;\r\n        createCenterPrimeNumber(n, color); // 如果这个数是素数，那么在插入到中间位置时，要特殊处理。\r\n    }\r\n\r\n    divContainer.appendChild(span);\r\n    divCenter.innerText = n;\r\n}\r\n\r\n/**\r\n * 特殊处理中间位置的素数。\r\n * @param {Number} n 素数\r\n * @param {String} color 颜色\r\n */\r\nfunction createCenterPrimeNumber(n, color) {\r\n    const div = document.createElement('div');\r\n    div.classList.add('center');\r\n    div.innerText = n;\r\n    div.style.color = color;\r\n    document.body.appendChild(div);\r\n\r\n    // 解决因为没有 reflow 而导致的 bug\r\n    getComputedStyle(div).left;\r\n\r\n    div.style.transform = `translate(${(0,_util_radColor__WEBPACK_IMPORTED_MODULE_0__.getRandom)(-200, 200)}px, ${(0,_util_radColor__WEBPACK_IMPORTED_MODULE_0__.getRandom)(-200, 200)}px)`;\r\n    div.style.opacity = 0;\r\n}\n\n//# sourceURL=webpack://test/./src/page/appendNumber.js?");

/***/ }),

/***/ "./src/page/event.js":
/*!***************************!*\
  !*** ./src/page/event.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_NumberTimer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/NumberTimer */ \"./src/util/NumberTimer.js\");\n/* harmony import */ var _appendNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appendNumber */ \"./src/page/appendNumber.js\");\n\r\n\r\n\r\nconst n = new _util_NumberTimer__WEBPACK_IMPORTED_MODULE_0__.default(100);\r\n\r\nn.onNumberCreated = function (n, isPrime) {\r\n    (0,_appendNumber__WEBPACK_IMPORTED_MODULE_1__.default)(n, isPrime);\r\n}\r\n\r\nlet isStart = false; // 记录当前的游戏状态\r\n\r\nwindow.onclick = function () {\r\n    if (isStart) { // 游戏已开始\r\n        n.stop(); // 停止游戏\r\n        isStart = false;\r\n    } else { // 游戏已停止\r\n        n.start(); // 开始游戏\r\n        isStart = true;\r\n    }\r\n}\n\n//# sourceURL=webpack://test/./src/page/event.js?");

/***/ }),

/***/ "./src/util/NumberTimer.js":
/*!*********************************!*\
  !*** ./src/util/NumberTimer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ NumberTimer)\n/* harmony export */ });\n/* harmony import */ var _isPrime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isPrime */ \"./src/util/isPrime.js\");\n\r\n\r\n/**\r\n * 产生新的数字\r\n * @param {Number} duration 新数字产生的时间间隔（默认 0.5s）\r\n */\r\nclass NumberTimer {\r\n    constructor(duration = 500) {\r\n        this.duration = duration;\r\n        this.timer = null;\r\n        this.number = 1; // 当前的数字\r\n        this.onNumberCreated = null; // 新数字产生的 回调函数\r\n    }\r\n\r\n    start() {\r\n        if (this.timer) {\r\n            return;\r\n        }\r\n        this.timer = setInterval(() => {\r\n            this.onNumberCreated && this.onNumberCreated(this.number, (0,_isPrime__WEBPACK_IMPORTED_MODULE_0__.default)(this.number));\r\n            this.number++;\r\n        }, this.duration);\r\n    }\r\n\r\n    stop() {\r\n        clearInterval(this.timer);\r\n        this.timer = null;\r\n    }\r\n}\n\n//# sourceURL=webpack://test/./src/util/NumberTimer.js?");

/***/ }),

/***/ "./src/util/isPrime.js":
/*!*****************************!*\
  !*** ./src/util/isPrime.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isPrime)\n/* harmony export */ });\n/**\r\n * 判断传入的数字是否是素数。是，返回 true；否，返回 false。\r\n * @param {Number} n 数字\r\n */\r\nfunction isPrime(n) {\r\n    if (n < 2) { // 2 是最小的素数\r\n        return false;\r\n    }\r\n    for (let i = 2; i < n - 1; i++) {\r\n        if (n % i === 0) {\r\n            return false;\r\n        }\r\n    }\r\n    return true;\r\n}\n\n//# sourceURL=webpack://test/./src/util/isPrime.js?");

/***/ }),

/***/ "./src/util/radColor.js":
/*!******************************!*\
  !*** ./src/util/radColor.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRandom\": () => (/* binding */ getRandom),\n/* harmony export */   \"default\": () => (/* binding */ radColor)\n/* harmony export */ });\nconst colors = [\"#f26395\", \"#62efab\", \"#ef7658\", \"#ffe868\", \"#80e3f7\", \"#d781f9\"]; // 颜色库\r\n\r\n/**\r\n * 获取一个随机整数 [min, max) 能取到最小值，无法取到最大值。\r\n * @param {Number} min 最小值\r\n * @param {Number} max 最大值\r\n */\r\nfunction getRandom(min, max) {\r\n    return Math.floor(Math.random() * (max - min) + min);\r\n}\r\n\r\n/**\r\n * 从颜色库 colors 中随机获取一个颜色\r\n */\r\nfunction radColor() {\r\n    const index = getRandom(0, colors.length);\r\n    return colors[index];\r\n}\n\n//# sourceURL=webpack://test/./src/util/radColor.js?");

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