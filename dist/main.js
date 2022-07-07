/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var app;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/CalculatorForm.js":
/*!***********************************!*\
  !*** ./scripts/CalculatorForm.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CalculatorForm)\n/* harmony export */ });\n/* harmony import */ var _calculatorManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculatorManager */ \"./scripts/calculatorManager.js\");\n\r\n\r\nclass CalculatorForm extends _calculatorManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  getValues() {\r\n    const formData = this._getFormData();\r\n    const firstNumber = +formData.get('firstNumber');\r\n    const secondNumber = +formData.get('secondNumber');\r\n\r\n    return { firstNumber, secondNumber };\r\n  }\r\n  clearInput() {\r\n    this._getForm().reset();\r\n  }\r\n  _getFormData() {\r\n    return new FormData(this._getForm());\r\n  }\r\n\r\n  _getForm() {\r\n    return document.querySelector('form');\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://app/./scripts/CalculatorForm.js?");

/***/ }),

/***/ "./scripts/calculatorManager.js":
/*!**************************************!*\
  !*** ./scripts/calculatorManager.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CalculatorManager)\n/* harmony export */ });\nclass CalculatorManager {\r\n  constructor(operation) {\r\n    this.operation = operation;\r\n  }\r\n  applyOperation(firstNumber, secondNumber, operate) {\r\n    const result = document.querySelector('#result');\r\n    result.innerText = this.operation[operate](firstNumber, secondNumber);\r\n  }\r\n  calculate(operate) {\r\n    const { firstNumber, secondNumber } = this.getValues();\r\n\r\n    this.applyOperation(firstNumber, secondNumber, operate);\r\n\r\n    this.clearInput();\r\n  }\r\n  clearInput() {}\r\n  getValues() {}\r\n}\r\n\n\n//# sourceURL=webpack://app/./scripts/calculatorManager.js?");

/***/ }),

/***/ "./scripts/calculatorQuerrySelector.js":
/*!*********************************************!*\
  !*** ./scripts/calculatorQuerrySelector.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CalculatorQuerrySelector)\n/* harmony export */ });\n/* harmony import */ var _calculatorManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculatorManager */ \"./scripts/calculatorManager.js\");\n\r\n\r\nclass CalculatorQuerrySelector extends _calculatorManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  getValues() {\r\n    const inputs = this._getInputs();\r\n    const firstNumber = +inputs[0].value;\r\n    const secondNumber = +inputs[1].value;\r\n\r\n    return { firstNumber, secondNumber };\r\n  }\r\n  clearInput() {\r\n    const inputs = this._getInputs();\r\n    inputs.forEach((input) => {\r\n      input.value = '';\r\n    });\r\n  }\r\n  _getInputs() {\r\n    return document.querySelectorAll('form input');\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://app/./scripts/calculatorQuerrySelector.js?");

/***/ }),

/***/ "./scripts/functionsApp.js":
/*!*********************************!*\
  !*** ./scripts/functionsApp.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _valids__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./valids */ \"./scripts/valids.js\");\n\r\n\r\nfunction addValidateListener(inputs) {\r\n  inputs.forEach((input) => {\r\n    input.addEventListener('input', _valids__WEBPACK_IMPORTED_MODULE_0__.validInputs);\r\n  });\r\n}\r\n\r\nfunction fillingSelect(select, operation) {\r\n  for (const key in operation) {\r\n    const optionElem = document.createElement('option');\r\n    optionElem.innerText = key;\r\n    optionElem.value = key;\r\n    select.appendChild(optionElem);\r\n  }\r\n}\r\n\r\nfunction stopSubmit() {\r\n  document.addEventListener('submit', (event) => {\r\n    event.preventDefault();\r\n  });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ addValidateListener, fillingSelect, stopSubmit });\r\n\n\n//# sourceURL=webpack://app/./scripts/functionsApp.js?");

/***/ }),

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _functionsApp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functionsApp.js */ \"./scripts/functionsApp.js\");\n/* harmony import */ var _CalculatorForm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CalculatorForm.js */ \"./scripts/CalculatorForm.js\");\n/* harmony import */ var _calculatorQuerrySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calculatorQuerrySelector.js */ \"./scripts/calculatorQuerrySelector.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nlet operate = '+';\r\n\r\nconst operation = {\r\n  '+': (num1, num2) => {\r\n    return num1 + num2;\r\n  },\r\n  '-': (num1, num2) => {\r\n    return num1 - num2;\r\n  },\r\n  '*': (num1, num2) => {\r\n    return num1 * num2;\r\n  },\r\n  '/': (num1, num2) => {\r\n    return num1 / num2;\r\n  },\r\n  '**': (num1, num2) => {\r\n    return num1 ** num2;\r\n  },\r\n};\r\n\r\nconst UI = {\r\n  button: document.querySelector('form button'),\r\n  inputs: document.querySelectorAll('form input'),\r\n  select: document.querySelector('form select'),\r\n};\r\n\r\nconst app = () => {\r\n  window.addEventListener('load', () => {\r\n    configuration();\r\n    run();\r\n  });\r\n};\r\n\r\nfunction configuration() {\r\n  _functionsApp_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addValidateListener(UI.inputs);\r\n  _functionsApp_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fillingSelect(UI.select, operation);\r\n  selectOperate(UI.select);\r\n  _functionsApp_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].stopSubmit();\r\n}\r\n\r\nfunction selectOperate(select) {\r\n  select.addEventListener('change', (e) => {\r\n    operate = e.target.value;\r\n  });\r\n}\r\n\r\nfunction run() {\r\n  UI.button.addEventListener('click', (event) => {\r\n    event.target.classList.toggle('btn-Style');\r\n\r\n    // const manager = new CalculatorQuerrySelector(operation);\r\n    const manager = new _CalculatorForm_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](operation);\r\n\r\n    manager.calculate(operate);\r\n    operate = '+';\r\n  });\r\n}\r\n\r\napp();\r\n\n\n//# sourceURL=webpack://app/./scripts/index.js?");

/***/ }),

/***/ "./scripts/valids.js":
/*!***************************!*\
  !*** ./scripts/valids.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"validInputs\": () => (/* binding */ validInputs)\n/* harmony export */ });\nfunction validInputs(e) {\r\n  const str = e.target.value;\r\n  const symbol = e.data;\r\n\r\n  if (symbol >= 0 && symbol <= 9) {\r\n    return;\r\n  } else {\r\n    e.target.value = str.substring(0, str.length - 1);\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://app/./scripts/valids.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/index.js");
/******/ 	app = __webpack_exports__;
/******/ 	
/******/ })()
;