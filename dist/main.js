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

eval("function Game(element) {\n  this.element = element;\n  this.canvasEle = this.element.querySelector(\"canvas\");\n  this.ctx = this.canvasEle.getContext(\"2d\");\n}\n\nGame.prototype.start = function start() {\n  var _this = this;\n\n  var img = new Image();\n  console.log(\"hello\"); // Set line width\n\n  this.ctx.lineWidth = 10; // Wall\n\n  this.ctx.strokeRect(75, 140, 150, 110);\n\n  img.onload = function () {\n    _this.ctx.drawImage(img, 0, 0, 32, 32, 0, 0, 32, 32);\n  };\n\n  img.src = '././dist/assets/character.png';\n};\n\nmodule.exports = Game;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KU2Rld1ZhbGxleS8uL3NyYy9zY3JpcHRzL2dhbWUuanM/Y2RjMCJdLCJuYW1lcyI6WyJHYW1lIiwiZWxlbWVudCIsImNhbnZhc0VsZSIsInF1ZXJ5U2VsZWN0b3IiLCJjdHgiLCJnZXRDb250ZXh0IiwicHJvdG90eXBlIiwic3RhcnQiLCJpbWciLCJJbWFnZSIsImNvbnNvbGUiLCJsb2ciLCJsaW5lV2lkdGgiLCJzdHJva2VSZWN0Iiwib25sb2FkIiwiZHJhd0ltYWdlIiwic3JjIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsSUFBVCxDQUFjQyxPQUFkLEVBQXVCO0FBQ3JCLE9BQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNBLE9BQUtDLFNBQUwsR0FBaUIsS0FBS0QsT0FBTCxDQUFhRSxhQUFiLENBQTJCLFFBQTNCLENBQWpCO0FBQ0EsT0FBS0MsR0FBTCxHQUFXLEtBQUtGLFNBQUwsQ0FBZUcsVUFBZixDQUEwQixJQUExQixDQUFYO0FBQ0Q7O0FBRURMLElBQUksQ0FBQ00sU0FBTCxDQUFlQyxLQUFmLEdBQXVCLFNBQVNBLEtBQVQsR0FBaUI7QUFBQTs7QUFDdEMsTUFBTUMsR0FBRyxHQUFHLElBQUlDLEtBQUosRUFBWjtBQUNBQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBRnNDLENBSXRDOztBQUNBLE9BQUtQLEdBQUwsQ0FBU1EsU0FBVCxHQUFxQixFQUFyQixDQUxzQyxDQU90Qzs7QUFDQSxPQUFLUixHQUFMLENBQVNTLFVBQVQsQ0FBb0IsRUFBcEIsRUFBd0IsR0FBeEIsRUFBNkIsR0FBN0IsRUFBa0MsR0FBbEM7O0FBSUFMLEVBQUFBLEdBQUcsQ0FBQ00sTUFBSixHQUFhLFlBQU07QUFDakIsSUFBQSxLQUFJLENBQUNWLEdBQUwsQ0FBU1csU0FBVCxDQUFtQlAsR0FBbkIsRUFBd0IsQ0FBeEIsRUFBMkIsQ0FBM0IsRUFBOEIsRUFBOUIsRUFBa0MsRUFBbEMsRUFBc0MsQ0FBdEMsRUFBeUMsQ0FBekMsRUFBNEMsRUFBNUMsRUFBZ0QsRUFBaEQ7QUFDRCxHQUZEOztBQUdBQSxFQUFBQSxHQUFHLENBQUNRLEdBQUosR0FBVSwrQkFBVjtBQUNELENBaEJEOztBQWtCQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCbEIsSUFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBHYW1lKGVsZW1lbnQpIHtcbiAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgdGhpcy5jYW52YXNFbGUgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcImNhbnZhc1wiKTtcbiAgdGhpcy5jdHggPSB0aGlzLmNhbnZhc0VsZS5nZXRDb250ZXh0KFwiMmRcIik7XG59XG5cbkdhbWUucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gc3RhcnQoKSB7XG4gIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICBjb25zb2xlLmxvZyhcImhlbGxvXCIpO1xuXG4gIC8vIFNldCBsaW5lIHdpZHRoXG4gIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDEwO1xuXG4gIC8vIFdhbGxcbiAgdGhpcy5jdHguc3Ryb2tlUmVjdCg3NSwgMTQwLCAxNTAsIDExMCk7XG5cblxuXG4gIGltZy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKGltZywgMCwgMCwgMzIsIDMyLCAwLCAwLCAzMiwgMzIpO1xuICB9O1xuICBpbWcuc3JjID0gJy4vLi9kaXN0L2Fzc2V0cy9jaGFyYWN0ZXIucG5nJztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZTsiXSwiZmlsZSI6Ii4vc3JjL3NjcmlwdHMvZ2FtZS5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

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