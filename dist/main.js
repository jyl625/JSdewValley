/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("var Game = __webpack_require__(/*! ./scripts/game.js */ \"./src/scripts/game.js\"); // // const GameView = require(\"./scripts/game_view\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var game = new Game(document.querySelector(\".game-container\"));\n  game.start();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsSUFBTUEsSUFBSSxHQUFHQyxtQkFBTyxDQUFDLGdEQUFELENBQXBCLEMsQ0FDQTs7O0FBS0FDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQVk7QUFFeEQsTUFBTUMsSUFBSSxHQUFHLElBQUlKLElBQUosQ0FBU0UsUUFBUSxDQUFDRyxhQUFULENBQXVCLGlCQUF2QixDQUFULENBQWI7QUFDQUQsRUFBQUEsSUFBSSxDQUFDRSxLQUFMO0FBRUQsQ0FMRCIsInNvdXJjZXMiOlsid2VicGFjazovL0pTZGV3VmFsbGV5Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgR2FtZSA9IHJlcXVpcmUoXCIuL3NjcmlwdHMvZ2FtZS5qc1wiKTtcbi8vIC8vIGNvbnN0IEdhbWVWaWV3ID0gcmVxdWlyZShcIi4vc2NyaXB0cy9nYW1lX3ZpZXdcIik7XG5cblxuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcblxuICBjb25zdCBnYW1lID0gbmV3IEdhbWUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLWNvbnRhaW5lclwiKSk7XG4gIGdhbWUuc3RhcnQoKTtcblxufSk7Il0sIm5hbWVzIjpbIkdhbWUiLCJyZXF1aXJlIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZ2FtZSIsInF1ZXJ5U2VsZWN0b3IiLCJzdGFydCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(module) {

eval("function Game(element) {\n  this.element = element;\n  this.canvasEle = this.element.querySelector(\"canvas\");\n  this.ctx = this.canvasEle.getContext(\"2d\");\n}\n\nGame.prototype.start = function start() {\n  var _this = this;\n\n  console.log(\"hello\"); //load farm map\n\n  var farm = new Image();\n\n  farm.onload = function () {\n    _this.ctx.drawImage(farm, 0, 0);\n  };\n\n  farm.src = '././dist/assets/farm_dev.png'; //load character\n\n  var tile_pos_x = 1; // 14 tiles total\n\n  var tile_pos_y = 1; //10 tiles total\n\n  var character = new Image();\n\n  character.onload = function () {\n    _this.ctx.drawImage(character, 0, 0, 32, 32, tile_pos_x * 16 - 8, tile_pos_y * 16 - 20, 32, 32);\n  };\n\n  character.src = '././dist/assets/character.png';\n};\n\nmodule.exports = Game;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KU2Rld1ZhbGxleS8uL3NyYy9zY3JpcHRzL2dhbWUuanM/Y2RjMCJdLCJuYW1lcyI6WyJHYW1lIiwiZWxlbWVudCIsImNhbnZhc0VsZSIsInF1ZXJ5U2VsZWN0b3IiLCJjdHgiLCJnZXRDb250ZXh0IiwicHJvdG90eXBlIiwic3RhcnQiLCJjb25zb2xlIiwibG9nIiwiZmFybSIsIkltYWdlIiwib25sb2FkIiwiZHJhd0ltYWdlIiwic3JjIiwidGlsZV9wb3NfeCIsInRpbGVfcG9zX3kiLCJjaGFyYWN0ZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxJQUFULENBQWNDLE9BQWQsRUFBdUI7QUFDckIsT0FBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsT0FBS0MsU0FBTCxHQUFpQixLQUFLRCxPQUFMLENBQWFFLGFBQWIsQ0FBMkIsUUFBM0IsQ0FBakI7QUFDQSxPQUFLQyxHQUFMLEdBQVcsS0FBS0YsU0FBTCxDQUFlRyxVQUFmLENBQTBCLElBQTFCLENBQVg7QUFDRDs7QUFFREwsSUFBSSxDQUFDTSxTQUFMLENBQWVDLEtBQWYsR0FBdUIsU0FBU0EsS0FBVCxHQUFpQjtBQUFBOztBQUV0Q0MsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWixFQUZzQyxDQUl0Qzs7QUFDQSxNQUFNQyxJQUFJLEdBQUcsSUFBSUMsS0FBSixFQUFiOztBQUNBRCxFQUFBQSxJQUFJLENBQUNFLE1BQUwsR0FBYyxZQUFNO0FBQ2xCLElBQUEsS0FBSSxDQUFDUixHQUFMLENBQVNTLFNBQVQsQ0FBbUJILElBQW5CLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCO0FBQ0QsR0FGRDs7QUFHQUEsRUFBQUEsSUFBSSxDQUFDSSxHQUFMLEdBQVcsOEJBQVgsQ0FUc0MsQ0FZdEM7O0FBQ0EsTUFBTUMsVUFBVSxHQUFHLENBQW5CLENBYnNDLENBYWhCOztBQUN0QixNQUFNQyxVQUFVLEdBQUcsQ0FBbkIsQ0Fkc0MsQ0FjaEI7O0FBQ3RCLE1BQU1DLFNBQVMsR0FBRyxJQUFJTixLQUFKLEVBQWxCOztBQUNBTSxFQUFBQSxTQUFTLENBQUNMLE1BQVYsR0FBbUIsWUFBTTtBQUN2QixJQUFBLEtBQUksQ0FBQ1IsR0FBTCxDQUFTUyxTQUFULENBQW1CSSxTQUFuQixFQUE4QixDQUE5QixFQUFpQyxDQUFqQyxFQUFvQyxFQUFwQyxFQUF3QyxFQUF4QyxFQUNFRixVQUFVLEdBQUcsRUFBYixHQUFrQixDQURwQixFQUN1QkMsVUFBVSxHQUFHLEVBQWIsR0FBa0IsRUFEekMsRUFDNkMsRUFEN0MsRUFDaUQsRUFEakQ7QUFFRCxHQUhEOztBQUlBQyxFQUFBQSxTQUFTLENBQUNILEdBQVYsR0FBZ0IsK0JBQWhCO0FBQ0QsQ0FyQkQ7O0FBdUJBSSxNQUFNLENBQUNDLE9BQVAsR0FBaUJuQixJQUFqQiIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIEdhbWUoZWxlbWVudCkge1xuICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICB0aGlzLmNhbnZhc0VsZSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiY2FudmFzXCIpO1xuICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzRWxlLmdldENvbnRleHQoXCIyZFwiKTtcbn1cblxuR2FtZS5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiBzdGFydCgpIHtcblxuICBjb25zb2xlLmxvZyhcImhlbGxvXCIpO1xuXG4gIC8vbG9hZCBmYXJtIG1hcFxuICBjb25zdCBmYXJtID0gbmV3IEltYWdlKCk7XG4gIGZhcm0ub25sb2FkID0gKCkgPT4ge1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZShmYXJtLCAwLCAwKTtcbiAgfTtcbiAgZmFybS5zcmMgPSAnLi8uL2Rpc3QvYXNzZXRzL2Zhcm1fZGV2LnBuZyc7XG5cblxuICAvL2xvYWQgY2hhcmFjdGVyXG4gIGNvbnN0IHRpbGVfcG9zX3ggPSAxOyAvLyAxNCB0aWxlcyB0b3RhbFxuICBjb25zdCB0aWxlX3Bvc195ID0gMTsgLy8xMCB0aWxlcyB0b3RhbFxuICBjb25zdCBjaGFyYWN0ZXIgPSBuZXcgSW1hZ2UoKTtcbiAgY2hhcmFjdGVyLm9ubG9hZCA9ICgpID0+IHtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoY2hhcmFjdGVyLCAwLCAwLCAzMiwgMzIsIFxuICAgICAgdGlsZV9wb3NfeCAqIDE2IC0gOCwgdGlsZV9wb3NfeSAqIDE2IC0gMjAsIDMyLCAzMik7XG4gIH07XG4gIGNoYXJhY3Rlci5zcmMgPSAnLi8uL2Rpc3QvYXNzZXRzL2NoYXJhY3Rlci5wbmcnO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lOyJdLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KU2Rld1ZhbGxleS8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;