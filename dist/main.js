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
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var GameObject = __webpack_require__(/*! ./game_object */ \"./src/scripts/game_object.js\");\n\nfunction Game(element) {\n  this.element = element;\n  this.canvasEle = this.element.querySelector(\"canvas\");\n  this.ctx = this.canvasEle.getContext(\"2d\");\n}\n\nGame.prototype.start = function start() {\n  var _this = this;\n\n  console.log(\"hello\"); //load farm map\n\n  var farm = new Image();\n\n  farm.onload = function () {\n    _this.ctx.drawImage(farm, 0, 0);\n  };\n\n  farm.src = '././dist/assets/farm_dev.png'; //place player\n\n  var player = new GameObject({\n    x: 1,\n    y: 1,\n    src: '././dist/assets/character.png'\n  });\n  player.sprite.draw(this.ctx); // //load character\n  // const tile_pos_x = 1; // 14 tiles total\n  // const tile_pos_y = 1; //10 tiles total\n  // const character = new Image();\n  // character.onload = () => {\n  //   this.ctx.drawImage(character, 0, 0, 32, 32, \n  //     tile_pos_x * 16 - 8, tile_pos_y * 16 - 20, 32, 32);\n  // };\n  // character.src = '././dist/assets/character.png';\n};\n\nmodule.exports = Game;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLElBQU1BLFVBQVUsR0FBR0MsbUJBQU8sQ0FBRSxtREFBRixDQUExQjs7QUFFQSxTQUFTQyxJQUFULENBQWNDLE9BQWQsRUFBdUI7QUFDckIsT0FBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsT0FBS0MsU0FBTCxHQUFpQixLQUFLRCxPQUFMLENBQWFFLGFBQWIsQ0FBMkIsUUFBM0IsQ0FBakI7QUFDQSxPQUFLQyxHQUFMLEdBQVcsS0FBS0YsU0FBTCxDQUFlRyxVQUFmLENBQTBCLElBQTFCLENBQVg7QUFDRDs7QUFFREwsSUFBSSxDQUFDTSxTQUFMLENBQWVDLEtBQWYsR0FBdUIsU0FBU0EsS0FBVCxHQUFpQjtBQUFBOztBQUV0Q0MsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWixFQUZzQyxDQUl0Qzs7QUFDQSxNQUFNQyxJQUFJLEdBQUcsSUFBSUMsS0FBSixFQUFiOztBQUNBRCxFQUFBQSxJQUFJLENBQUNFLE1BQUwsR0FBYyxZQUFNO0FBQ2xCLFNBQUksQ0FBQ1IsR0FBTCxDQUFTUyxTQUFULENBQW1CSCxJQUFuQixFQUF5QixDQUF6QixFQUE0QixDQUE1QjtBQUNELEdBRkQ7O0FBR0FBLEVBQUFBLElBQUksQ0FBQ0ksR0FBTCxHQUFXLDhCQUFYLENBVHNDLENBYXRDOztBQUNBLE1BQU1DLE1BQU0sR0FBRyxJQUFJakIsVUFBSixDQUFlO0FBQzVCa0IsSUFBQUEsQ0FBQyxFQUFFLENBRHlCO0FBQ3RCQyxJQUFBQSxDQUFDLEVBQUUsQ0FEbUI7QUFDaEJILElBQUFBLEdBQUcsRUFBRTtBQURXLEdBQWYsQ0FBZjtBQUdBQyxFQUFBQSxNQUFNLENBQUNHLE1BQVAsQ0FBY0MsSUFBZCxDQUFtQixLQUFLZixHQUF4QixFQWpCc0MsQ0FtQnRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNELENBNUJEOztBQThCQWdCLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnJCLElBQWpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vSlNkZXdWYWxsZXkvLi9zcmMvc2NyaXB0cy9nYW1lLmpzP2NkYzAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgR2FtZU9iamVjdCA9IHJlcXVpcmUgKFwiLi9nYW1lX29iamVjdFwiKVxuXG5mdW5jdGlvbiBHYW1lKGVsZW1lbnQpIHtcbiAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgdGhpcy5jYW52YXNFbGUgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcImNhbnZhc1wiKTtcbiAgdGhpcy5jdHggPSB0aGlzLmNhbnZhc0VsZS5nZXRDb250ZXh0KFwiMmRcIik7XG59XG5cbkdhbWUucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gc3RhcnQoKSB7XG5cbiAgY29uc29sZS5sb2coXCJoZWxsb1wiKTtcblxuICAvL2xvYWQgZmFybSBtYXBcbiAgY29uc3QgZmFybSA9IG5ldyBJbWFnZSgpO1xuICBmYXJtLm9ubG9hZCA9ICgpID0+IHtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoZmFybSwgMCwgMCk7XG4gIH07XG4gIGZhcm0uc3JjID0gJy4vLi9kaXN0L2Fzc2V0cy9mYXJtX2Rldi5wbmcnO1xuXG5cblxuICAvL3BsYWNlIHBsYXllclxuICBjb25zdCBwbGF5ZXIgPSBuZXcgR2FtZU9iamVjdCh7XG4gICAgeDogMSwgeTogMSwgc3JjOiAnLi8uL2Rpc3QvYXNzZXRzL2NoYXJhY3Rlci5wbmcnXG4gIH0pO1xuICBwbGF5ZXIuc3ByaXRlLmRyYXcodGhpcy5jdHgpO1xuXG4gIC8vIC8vbG9hZCBjaGFyYWN0ZXJcbiAgLy8gY29uc3QgdGlsZV9wb3NfeCA9IDE7IC8vIDE0IHRpbGVzIHRvdGFsXG4gIC8vIGNvbnN0IHRpbGVfcG9zX3kgPSAxOyAvLzEwIHRpbGVzIHRvdGFsXG4gIC8vIGNvbnN0IGNoYXJhY3RlciA9IG5ldyBJbWFnZSgpO1xuICAvLyBjaGFyYWN0ZXIub25sb2FkID0gKCkgPT4ge1xuICAvLyAgIHRoaXMuY3R4LmRyYXdJbWFnZShjaGFyYWN0ZXIsIDAsIDAsIDMyLCAzMiwgXG4gIC8vICAgICB0aWxlX3Bvc194ICogMTYgLSA4LCB0aWxlX3Bvc195ICogMTYgLSAyMCwgMzIsIDMyKTtcbiAgLy8gfTtcbiAgLy8gY2hhcmFjdGVyLnNyYyA9ICcuLy4vZGlzdC9hc3NldHMvY2hhcmFjdGVyLnBuZyc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWU7Il0sIm5hbWVzIjpbIkdhbWVPYmplY3QiLCJyZXF1aXJlIiwiR2FtZSIsImVsZW1lbnQiLCJjYW52YXNFbGUiLCJxdWVyeVNlbGVjdG9yIiwiY3R4IiwiZ2V0Q29udGV4dCIsInByb3RvdHlwZSIsInN0YXJ0IiwiY29uc29sZSIsImxvZyIsImZhcm0iLCJJbWFnZSIsIm9ubG9hZCIsImRyYXdJbWFnZSIsInNyYyIsInBsYXllciIsIngiLCJ5Iiwic3ByaXRlIiwiZHJhdyIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/game_object.js":
/*!************************************!*\
  !*** ./src/scripts/game_object.js ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var Sprite = __webpack_require__(/*! ./sprite */ \"./src/scripts/sprite.js\");\n\nfunction GameObject(option) {\n  this.x = option.x;\n  this.y = option.y;\n  this.sprite = new Sprite({\n    gameObject: this,\n    src: option.src\n  });\n  console.log(this.x);\n  console.log(this.y);\n}\n\nmodule.exports = GameObject;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lX29iamVjdC5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQSxJQUFNQSxNQUFNLEdBQUdDLG1CQUFPLENBQUMseUNBQUQsQ0FBdEI7O0FBRUEsU0FBU0MsVUFBVCxDQUFxQkMsTUFBckIsRUFBNkI7QUFDM0IsT0FBS0MsQ0FBTCxHQUFTRCxNQUFNLENBQUNDLENBQWhCO0FBQ0EsT0FBS0MsQ0FBTCxHQUFTRixNQUFNLENBQUNFLENBQWhCO0FBQ0EsT0FBS0MsTUFBTCxHQUFjLElBQUlOLE1BQUosQ0FBVztBQUN2Qk8sSUFBQUEsVUFBVSxFQUFFLElBRFc7QUFFdkJDLElBQUFBLEdBQUcsRUFBRUwsTUFBTSxDQUFDSztBQUZXLEdBQVgsQ0FBZDtBQUtBQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLTixDQUFqQjtBQUNBSyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLTCxDQUFqQjtBQUNEOztBQUVETSxNQUFNLENBQUNDLE9BQVAsR0FBaUJWLFVBQWpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vSlNkZXdWYWxsZXkvLi9zcmMvc2NyaXB0cy9nYW1lX29iamVjdC5qcz9lMjllIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFNwcml0ZSA9IHJlcXVpcmUoXCIuL3Nwcml0ZVwiKTtcblxuZnVuY3Rpb24gR2FtZU9iamVjdCAob3B0aW9uKSB7XG4gIHRoaXMueCA9IG9wdGlvbi54O1xuICB0aGlzLnkgPSBvcHRpb24ueTtcbiAgdGhpcy5zcHJpdGUgPSBuZXcgU3ByaXRlKHtcbiAgICBnYW1lT2JqZWN0OiB0aGlzLFxuICAgIHNyYzogb3B0aW9uLnNyYyxcbiAgfSk7XG5cbiAgY29uc29sZS5sb2codGhpcy54KTtcbiAgY29uc29sZS5sb2codGhpcy55KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lT2JqZWN0OyJdLCJuYW1lcyI6WyJTcHJpdGUiLCJyZXF1aXJlIiwiR2FtZU9iamVjdCIsIm9wdGlvbiIsIngiLCJ5Iiwic3ByaXRlIiwiZ2FtZU9iamVjdCIsInNyYyIsImNvbnNvbGUiLCJsb2ciLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game_object.js\n");

/***/ }),

/***/ "./src/scripts/sprite.js":
/*!*******************************!*\
  !*** ./src/scripts/sprite.js ***!
  \*******************************/
/***/ (function(module) {

eval("function Sprite(option) {\n  this.img = new Image();\n  this.img.src = option.src; // this.img.onload = () => {\n  //   this.isLoaded = true;\n  // };\n\n  this.gameObject = option.gameObject;\n}\n\nSprite.prototype.draw = function (ctx) {\n  var _this = this;\n\n  var x = this.gameObject.x * 16 - 8;\n  var y = this.gameObject.y * 17 - 20;\n\n  this.img.onload = function () {\n    ctx.drawImage(_this.img, 0, 0, 32, 32, x, y, 32, 32);\n  };\n}; //load character\n// const tile_pos_x = 1; // 14 tiles total\n// const tile_pos_y = 1; //10 tiles total\n// const character = new Image();\n// character.onload = () => {\n//   this.ctx.drawImage(character, 0, 0, 32, 32,\n//     tile_pos_x * 16 - 8, tile_pos_y * 16 - 20, 32, 32);\n// };\n// character.src = '././dist/assets/character.png';\n\n\nmodule.exports = Sprite;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KU2Rld1ZhbGxleS8uL3NyYy9zY3JpcHRzL3Nwcml0ZS5qcz8wYWM3Il0sIm5hbWVzIjpbIlNwcml0ZSIsIm9wdGlvbiIsImltZyIsIkltYWdlIiwic3JjIiwiZ2FtZU9iamVjdCIsInByb3RvdHlwZSIsImRyYXciLCJjdHgiLCJ4IiwieSIsIm9ubG9hZCIsImRyYXdJbWFnZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLE1BQVQsQ0FBaUJDLE1BQWpCLEVBQXlCO0FBQ3ZCLE9BQUtDLEdBQUwsR0FBVyxJQUFJQyxLQUFKLEVBQVg7QUFDQSxPQUFLRCxHQUFMLENBQVNFLEdBQVQsR0FBZUgsTUFBTSxDQUFDRyxHQUF0QixDQUZ1QixDQUd2QjtBQUNBO0FBQ0E7O0FBQ0EsT0FBS0MsVUFBTCxHQUFrQkosTUFBTSxDQUFDSSxVQUF6QjtBQUNEOztBQUVETCxNQUFNLENBQUNNLFNBQVAsQ0FBaUJDLElBQWpCLEdBQXdCLFVBQVVDLEdBQVYsRUFBZTtBQUFBOztBQUNyQyxNQUFNQyxDQUFDLEdBQUcsS0FBS0osVUFBTCxDQUFnQkksQ0FBaEIsR0FBb0IsRUFBcEIsR0FBeUIsQ0FBbkM7QUFDQSxNQUFNQyxDQUFDLEdBQUcsS0FBS0wsVUFBTCxDQUFnQkssQ0FBaEIsR0FBb0IsRUFBcEIsR0FBeUIsRUFBbkM7O0FBRUEsT0FBS1IsR0FBTCxDQUFTUyxNQUFULEdBQWtCLFlBQU07QUFDdEJILElBQUFBLEdBQUcsQ0FBQ0ksU0FBSixDQUFjLEtBQUksQ0FBQ1YsR0FBbkIsRUFBd0IsQ0FBeEIsRUFBMkIsQ0FBM0IsRUFBOEIsRUFBOUIsRUFBa0MsRUFBbEMsRUFBc0NPLENBQXRDLEVBQXlDQyxDQUF6QyxFQUE0QyxFQUE1QyxFQUFnRCxFQUFoRDtBQUNELEdBRkQ7QUFHRCxDQVBELEMsQ0FTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBRyxNQUFNLENBQUNDLE9BQVAsR0FBaUJkLE1BQWpCIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gU3ByaXRlIChvcHRpb24pIHtcbiAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcbiAgdGhpcy5pbWcuc3JjID0gb3B0aW9uLnNyYztcbiAgLy8gdGhpcy5pbWcub25sb2FkID0gKCkgPT4ge1xuICAvLyAgIHRoaXMuaXNMb2FkZWQgPSB0cnVlO1xuICAvLyB9O1xuICB0aGlzLmdhbWVPYmplY3QgPSBvcHRpb24uZ2FtZU9iamVjdDtcbn1cblxuU3ByaXRlLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gKGN0eCkge1xuICBjb25zdCB4ID0gdGhpcy5nYW1lT2JqZWN0LnggKiAxNiAtIDg7XG4gIGNvbnN0IHkgPSB0aGlzLmdhbWVPYmplY3QueSAqIDE3IC0gMjA7XG5cbiAgdGhpcy5pbWcub25sb2FkID0gKCkgPT4ge1xuICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWcsIDAsIDAsIDMyLCAzMiwgeCwgeSwgMzIsIDMyKTtcbiAgfTtcbn07XG5cbi8vbG9hZCBjaGFyYWN0ZXJcbi8vIGNvbnN0IHRpbGVfcG9zX3ggPSAxOyAvLyAxNCB0aWxlcyB0b3RhbFxuLy8gY29uc3QgdGlsZV9wb3NfeSA9IDE7IC8vMTAgdGlsZXMgdG90YWxcbi8vIGNvbnN0IGNoYXJhY3RlciA9IG5ldyBJbWFnZSgpO1xuLy8gY2hhcmFjdGVyLm9ubG9hZCA9ICgpID0+IHtcbi8vICAgdGhpcy5jdHguZHJhd0ltYWdlKGNoYXJhY3RlciwgMCwgMCwgMzIsIDMyLFxuLy8gICAgIHRpbGVfcG9zX3ggKiAxNiAtIDgsIHRpbGVfcG9zX3kgKiAxNiAtIDIwLCAzMiwgMzIpO1xuLy8gfTtcbi8vIGNoYXJhY3Rlci5zcmMgPSAnLi8uL2Rpc3QvYXNzZXRzL2NoYXJhY3Rlci5wbmcnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNwcml0ZTsiXSwiZmlsZSI6Ii4vc3JjL3NjcmlwdHMvc3ByaXRlLmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/sprite.js\n");

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