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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const Game = __webpack_require__(/*! ./js/game */ \"./src/js/game.js\");\nconst GameView = __webpack_require__(/*! ./js/game_view */ \"./src/js/game_view.js\");\n\n\n\n\n\nconsole.log(\"testing testing\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  const canvasEle = document.querySelector(\".game-canvas\");\n\n  const ctx = canvasEle.getContext(\"2d\");\n  const game = new Game();\n  new GameView(game, ctx).start();\n  console.log(game);\n});\n\nconsole.log(\"loading done\");\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/***/ ((module) => {

eval("\nfunction Game() {\n  this.plants = [];\n  console.log(\"this is game constructor\");\n}\n\nmodule.exports = Game;\n\n\n\n//# sourceURL=webpack:///./src/js/game.js?");

/***/ }),

/***/ "./src/js/game_view.js":
/*!*****************************!*\
  !*** ./src/js/game_view.js ***!
  \*****************************/
/***/ ((module) => {

eval("function GameView(game, ctx) {\n  this.ctx = ctx;\n  this.game = game;\n  console.log(\"this is the game view constructor\");\n}\n\nGameView.prototype.start = function() {\n  console.log(\"this is the game.start method\");\n}\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/js/game_view.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;