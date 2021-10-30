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

eval("var GameObject = __webpack_require__(/*! ./game_object */ \"./src/scripts/game_object.js\");\n\nvar PlantObject = __webpack_require__(/*! ./plant_object */ \"./src/scripts/plant_object.js\");\n\nfunction Game(element) {\n  this.element = element;\n  this.canvasEle = this.element.querySelector(\"canvas\");\n  this.ctx = this.canvasEle.getContext(\"2d\");\n}\n\nGame.prototype.start = function start() {\n  var _this = this;\n\n  console.log(\"hello\"); //load farm map\n\n  var farm = new Image();\n\n  farm.onload = function () {\n    _this.ctx.drawImage(farm, 0, 0);\n  };\n\n  farm.src = '././dist/assets/farm_dev.png'; //place player\n\n  var player = new GameObject({\n    x: 1,\n    y: 1,\n    src: '././dist/assets/character.png'\n  });\n  var potato = new PlantObject({\n    x: 2,\n    y: 2,\n    src: '././dist/assets/crops/potato.png'\n  });\n  var tomato = new PlantObject({\n    x: 3,\n    y: 3,\n    src: '././dist/assets/crops/tomato.png'\n  });\n  potato.sprite.draw(this.ctx);\n  tomato.sprite.draw(this.ctx);\n  player.sprite.draw(this.ctx);\n};\n\nmodule.exports = Game;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLElBQU1BLFVBQVUsR0FBR0MsbUJBQU8sQ0FBRSxtREFBRixDQUExQjs7QUFDQSxJQUFNQyxXQUFXLEdBQUdELG1CQUFPLENBQUUscURBQUYsQ0FBM0I7O0FBRUEsU0FBU0UsSUFBVCxDQUFjQyxPQUFkLEVBQXVCO0FBQ3JCLE9BQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNBLE9BQUtDLFNBQUwsR0FBaUIsS0FBS0QsT0FBTCxDQUFhRSxhQUFiLENBQTJCLFFBQTNCLENBQWpCO0FBQ0EsT0FBS0MsR0FBTCxHQUFXLEtBQUtGLFNBQUwsQ0FBZUcsVUFBZixDQUEwQixJQUExQixDQUFYO0FBQ0Q7O0FBRURMLElBQUksQ0FBQ00sU0FBTCxDQUFlQyxLQUFmLEdBQXVCLFNBQVNBLEtBQVQsR0FBaUI7QUFBQTs7QUFFdENDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFGc0MsQ0FJdEM7O0FBQ0EsTUFBTUMsSUFBSSxHQUFHLElBQUlDLEtBQUosRUFBYjs7QUFDQUQsRUFBQUEsSUFBSSxDQUFDRSxNQUFMLEdBQWMsWUFBTTtBQUNsQixTQUFJLENBQUNSLEdBQUwsQ0FBU1MsU0FBVCxDQUFtQkgsSUFBbkIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUI7QUFDRCxHQUZEOztBQUdBQSxFQUFBQSxJQUFJLENBQUNJLEdBQUwsR0FBVyw4QkFBWCxDQVRzQyxDQWF0Qzs7QUFDQSxNQUFNQyxNQUFNLEdBQUcsSUFBSWxCLFVBQUosQ0FBZTtBQUM1Qm1CLElBQUFBLENBQUMsRUFBRSxDQUR5QjtBQUN0QkMsSUFBQUEsQ0FBQyxFQUFFLENBRG1CO0FBQ2hCSCxJQUFBQSxHQUFHLEVBQUU7QUFEVyxHQUFmLENBQWY7QUFLQSxNQUFNSSxNQUFNLEdBQUcsSUFBSW5CLFdBQUosQ0FBZ0I7QUFDN0JpQixJQUFBQSxDQUFDLEVBQUUsQ0FEMEI7QUFDdkJDLElBQUFBLENBQUMsRUFBRSxDQURvQjtBQUNqQkgsSUFBQUEsR0FBRyxFQUFFO0FBRFksR0FBaEIsQ0FBZjtBQUtBLE1BQU1LLE1BQU0sR0FBRyxJQUFJcEIsV0FBSixDQUFnQjtBQUM3QmlCLElBQUFBLENBQUMsRUFBRSxDQUQwQjtBQUN2QkMsSUFBQUEsQ0FBQyxFQUFFLENBRG9CO0FBQ2pCSCxJQUFBQSxHQUFHLEVBQUU7QUFEWSxHQUFoQixDQUFmO0FBS0FJLEVBQUFBLE1BQU0sQ0FBQ0UsTUFBUCxDQUFjQyxJQUFkLENBQW1CLEtBQUtqQixHQUF4QjtBQUNBZSxFQUFBQSxNQUFNLENBQUNDLE1BQVAsQ0FBY0MsSUFBZCxDQUFtQixLQUFLakIsR0FBeEI7QUFDQVcsRUFBQUEsTUFBTSxDQUFDSyxNQUFQLENBQWNDLElBQWQsQ0FBbUIsS0FBS2pCLEdBQXhCO0FBR0QsQ0FsQ0Q7O0FBb0NBa0IsTUFBTSxDQUFDQyxPQUFQLEdBQWlCdkIsSUFBakIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KU2Rld1ZhbGxleS8uL3NyYy9zY3JpcHRzL2dhbWUuanM/Y2RjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBHYW1lT2JqZWN0ID0gcmVxdWlyZSAoXCIuL2dhbWVfb2JqZWN0XCIpXG5jb25zdCBQbGFudE9iamVjdCA9IHJlcXVpcmUgKFwiLi9wbGFudF9vYmplY3RcIilcblxuZnVuY3Rpb24gR2FtZShlbGVtZW50KSB7XG4gIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gIHRoaXMuY2FudmFzRWxlID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJjYW52YXNcIik7XG4gIHRoaXMuY3R4ID0gdGhpcy5jYW52YXNFbGUuZ2V0Q29udGV4dChcIjJkXCIpO1xufVxuXG5HYW1lLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KCkge1xuXG4gIGNvbnNvbGUubG9nKFwiaGVsbG9cIik7XG5cbiAgLy9sb2FkIGZhcm0gbWFwXG4gIGNvbnN0IGZhcm0gPSBuZXcgSW1hZ2UoKTtcbiAgZmFybS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKGZhcm0sIDAsIDApO1xuICB9O1xuICBmYXJtLnNyYyA9ICcuLy4vZGlzdC9hc3NldHMvZmFybV9kZXYucG5nJztcblxuXG5cbiAgLy9wbGFjZSBwbGF5ZXJcbiAgY29uc3QgcGxheWVyID0gbmV3IEdhbWVPYmplY3Qoe1xuICAgIHg6IDEsIHk6IDEsIHNyYzogJy4vLi9kaXN0L2Fzc2V0cy9jaGFyYWN0ZXIucG5nJ1xuICB9KTtcblxuXG4gIGNvbnN0IHBvdGF0byA9IG5ldyBQbGFudE9iamVjdCh7XG4gICAgeDogMiwgeTogMiwgc3JjOiAnLi8uL2Rpc3QvYXNzZXRzL2Nyb3BzL3BvdGF0by5wbmcnXG4gIH0pO1xuXG5cbiAgY29uc3QgdG9tYXRvID0gbmV3IFBsYW50T2JqZWN0KHtcbiAgICB4OiAzLCB5OiAzLCBzcmM6ICcuLy4vZGlzdC9hc3NldHMvY3JvcHMvdG9tYXRvLnBuZydcbiAgfSk7XG5cblxuICBwb3RhdG8uc3ByaXRlLmRyYXcodGhpcy5jdHgpO1xuICB0b21hdG8uc3ByaXRlLmRyYXcodGhpcy5jdHgpO1xuICBwbGF5ZXIuc3ByaXRlLmRyYXcodGhpcy5jdHgpO1xuXG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZTsiXSwibmFtZXMiOlsiR2FtZU9iamVjdCIsInJlcXVpcmUiLCJQbGFudE9iamVjdCIsIkdhbWUiLCJlbGVtZW50IiwiY2FudmFzRWxlIiwicXVlcnlTZWxlY3RvciIsImN0eCIsImdldENvbnRleHQiLCJwcm90b3R5cGUiLCJzdGFydCIsImNvbnNvbGUiLCJsb2ciLCJmYXJtIiwiSW1hZ2UiLCJvbmxvYWQiLCJkcmF3SW1hZ2UiLCJzcmMiLCJwbGF5ZXIiLCJ4IiwieSIsInBvdGF0byIsInRvbWF0byIsInNwcml0ZSIsImRyYXciLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/game_object.js":
/*!************************************!*\
  !*** ./src/scripts/game_object.js ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var Sprite = __webpack_require__(/*! ./sprite */ \"./src/scripts/sprite.js\");\n\nfunction GameObject(option) {\n  this.x = option.x;\n  this.y = option.y;\n  this.sprite = new Sprite({\n    gameObject: this,\n    src: option.src\n  });\n  console.log(this.x);\n  console.log(this.y);\n}\n\nmodule.exports = GameObject;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lX29iamVjdC5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQSxJQUFNQSxNQUFNLEdBQUdDLG1CQUFPLENBQUMseUNBQUQsQ0FBdEI7O0FBRUEsU0FBU0MsVUFBVCxDQUFxQkMsTUFBckIsRUFBNkI7QUFDM0IsT0FBS0MsQ0FBTCxHQUFTRCxNQUFNLENBQUNDLENBQWhCO0FBQ0EsT0FBS0MsQ0FBTCxHQUFTRixNQUFNLENBQUNFLENBQWhCO0FBQ0EsT0FBS0MsTUFBTCxHQUFjLElBQUlOLE1BQUosQ0FBVztBQUN2Qk8sSUFBQUEsVUFBVSxFQUFFLElBRFc7QUFFdkJDLElBQUFBLEdBQUcsRUFBRUwsTUFBTSxDQUFDSztBQUZXLEdBQVgsQ0FBZDtBQUtBQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLTixDQUFqQjtBQUNBSyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLTCxDQUFqQjtBQUNEOztBQUVETSxNQUFNLENBQUNDLE9BQVAsR0FBaUJWLFVBQWpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vSlNkZXdWYWxsZXkvLi9zcmMvc2NyaXB0cy9nYW1lX29iamVjdC5qcz9lMjllIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFNwcml0ZSA9IHJlcXVpcmUoXCIuL3Nwcml0ZVwiKTtcblxuZnVuY3Rpb24gR2FtZU9iamVjdCAob3B0aW9uKSB7XG4gIHRoaXMueCA9IG9wdGlvbi54O1xuICB0aGlzLnkgPSBvcHRpb24ueTtcbiAgdGhpcy5zcHJpdGUgPSBuZXcgU3ByaXRlKHtcbiAgICBnYW1lT2JqZWN0OiB0aGlzLFxuICAgIHNyYzogb3B0aW9uLnNyYyxcbiAgfSk7XG5cbiAgY29uc29sZS5sb2codGhpcy54KTtcbiAgY29uc29sZS5sb2codGhpcy55KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lT2JqZWN0OyJdLCJuYW1lcyI6WyJTcHJpdGUiLCJyZXF1aXJlIiwiR2FtZU9iamVjdCIsIm9wdGlvbiIsIngiLCJ5Iiwic3ByaXRlIiwiZ2FtZU9iamVjdCIsInNyYyIsImNvbnNvbGUiLCJsb2ciLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game_object.js\n");

/***/ }),

/***/ "./src/scripts/plant_object.js":
/*!*************************************!*\
  !*** ./src/scripts/plant_object.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var PlantSprite = __webpack_require__(/*! ./plant_sprite */ \"./src/scripts/plant_sprite.js\");\n\nfunction PlantObject(option) {\n  this.x = option.x;\n  this.y = option.y;\n  this.sprite = new PlantSprite({\n    plantObject: this,\n    src: option.src\n  });\n  console.log(this.x);\n  console.log(this.y);\n}\n\nmodule.exports = PlantObject;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wbGFudF9vYmplY3QuanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsSUFBTUEsV0FBVyxHQUFHQyxtQkFBTyxDQUFDLHFEQUFELENBQTNCOztBQUVBLFNBQVNDLFdBQVQsQ0FBc0JDLE1BQXRCLEVBQThCO0FBQzVCLE9BQUtDLENBQUwsR0FBU0QsTUFBTSxDQUFDQyxDQUFoQjtBQUNBLE9BQUtDLENBQUwsR0FBU0YsTUFBTSxDQUFDRSxDQUFoQjtBQUNBLE9BQUtDLE1BQUwsR0FBYyxJQUFJTixXQUFKLENBQWdCO0FBQzVCTyxJQUFBQSxXQUFXLEVBQUUsSUFEZTtBQUU1QkMsSUFBQUEsR0FBRyxFQUFFTCxNQUFNLENBQUNLO0FBRmdCLEdBQWhCLENBQWQ7QUFLQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBS04sQ0FBakI7QUFDQUssRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBS0wsQ0FBakI7QUFDRDs7QUFFRE0sTUFBTSxDQUFDQyxPQUFQLEdBQWlCVixXQUFqQiIsInNvdXJjZXMiOlsid2VicGFjazovL0pTZGV3VmFsbGV5Ly4vc3JjL3NjcmlwdHMvcGxhbnRfb2JqZWN0LmpzPzAzODgiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUGxhbnRTcHJpdGUgPSByZXF1aXJlKFwiLi9wbGFudF9zcHJpdGVcIik7XG5cbmZ1bmN0aW9uIFBsYW50T2JqZWN0IChvcHRpb24pIHtcbiAgdGhpcy54ID0gb3B0aW9uLng7XG4gIHRoaXMueSA9IG9wdGlvbi55O1xuICB0aGlzLnNwcml0ZSA9IG5ldyBQbGFudFNwcml0ZSh7XG4gICAgcGxhbnRPYmplY3Q6IHRoaXMsXG4gICAgc3JjOiBvcHRpb24uc3JjLFxuICB9KTtcblxuICBjb25zb2xlLmxvZyh0aGlzLngpO1xuICBjb25zb2xlLmxvZyh0aGlzLnkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBsYW50T2JqZWN0OyJdLCJuYW1lcyI6WyJQbGFudFNwcml0ZSIsInJlcXVpcmUiLCJQbGFudE9iamVjdCIsIm9wdGlvbiIsIngiLCJ5Iiwic3ByaXRlIiwicGxhbnRPYmplY3QiLCJzcmMiLCJjb25zb2xlIiwibG9nIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/plant_object.js\n");

/***/ }),

/***/ "./src/scripts/plant_sprite.js":
/*!*************************************!*\
  !*** ./src/scripts/plant_sprite.js ***!
  \*************************************/
/***/ (function(module) {

eval("function PlantSprite(option) {\n  this.img = new Image();\n  this.img.src = option.src; // this.img.onload = () => {\n  //   this.isLoaded = true;\n  // };\n\n  this.plantObject = option.plantObject;\n}\n\nPlantSprite.prototype.draw = function (ctx) {\n  var _this = this;\n\n  var x = this.plantObject.x * 16;\n  var y = this.plantObject.y * 16;\n  var stage = 16 * 5;\n\n  this.img.onload = function () {\n    ctx.drawImage(_this.img, stage, 0, 16, 16, x, y, 16, 16);\n  };\n}; //load character\n// const tile_pos_x = 1; // 14 tiles total\n// const tile_pos_y = 1; //10 tiles total\n// const character = new Image();\n// character.onload = () => {\n//   this.ctx.drawImage(character, 0, 0, 32, 32,\n//     tile_pos_x * 16 - 8, tile_pos_y * 16 - 20, 32, 32);\n// };\n// character.src = '././dist/assets/character.png';\n\n\nmodule.exports = PlantSprite;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KU2Rld1ZhbGxleS8uL3NyYy9zY3JpcHRzL3BsYW50X3Nwcml0ZS5qcz9hZTQwIl0sIm5hbWVzIjpbIlBsYW50U3ByaXRlIiwib3B0aW9uIiwiaW1nIiwiSW1hZ2UiLCJzcmMiLCJwbGFudE9iamVjdCIsInByb3RvdHlwZSIsImRyYXciLCJjdHgiLCJ4IiwieSIsInN0YWdlIiwib25sb2FkIiwiZHJhd0ltYWdlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsV0FBVCxDQUFzQkMsTUFBdEIsRUFBOEI7QUFDNUIsT0FBS0MsR0FBTCxHQUFXLElBQUlDLEtBQUosRUFBWDtBQUNBLE9BQUtELEdBQUwsQ0FBU0UsR0FBVCxHQUFlSCxNQUFNLENBQUNHLEdBQXRCLENBRjRCLENBRzVCO0FBQ0E7QUFDQTs7QUFDQSxPQUFLQyxXQUFMLEdBQW1CSixNQUFNLENBQUNJLFdBQTFCO0FBQ0Q7O0FBRURMLFdBQVcsQ0FBQ00sU0FBWixDQUFzQkMsSUFBdEIsR0FBNkIsVUFBVUMsR0FBVixFQUFlO0FBQUE7O0FBQzFDLE1BQU1DLENBQUMsR0FBRyxLQUFLSixXQUFMLENBQWlCSSxDQUFqQixHQUFxQixFQUEvQjtBQUNBLE1BQU1DLENBQUMsR0FBRyxLQUFLTCxXQUFMLENBQWlCSyxDQUFqQixHQUFxQixFQUEvQjtBQUNBLE1BQU1DLEtBQUssR0FBRyxLQUFLLENBQW5COztBQUNBLE9BQUtULEdBQUwsQ0FBU1UsTUFBVCxHQUFrQixZQUFNO0FBQ3RCSixJQUFBQSxHQUFHLENBQUNLLFNBQUosQ0FBYyxLQUFJLENBQUNYLEdBQW5CLEVBQXdCUyxLQUF4QixFQUErQixDQUEvQixFQUFrQyxFQUFsQyxFQUFzQyxFQUF0QyxFQUEwQ0YsQ0FBMUMsRUFBNkNDLENBQTdDLEVBQWdELEVBQWhELEVBQW9ELEVBQXBEO0FBQ0QsR0FGRDtBQUdELENBUEQsQyxDQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUFJLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmYsV0FBakIiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBQbGFudFNwcml0ZSAob3B0aW9uKSB7XG4gIHRoaXMuaW1nID0gbmV3IEltYWdlKCk7XG4gIHRoaXMuaW1nLnNyYyA9IG9wdGlvbi5zcmM7XG4gIC8vIHRoaXMuaW1nLm9ubG9hZCA9ICgpID0+IHtcbiAgLy8gICB0aGlzLmlzTG9hZGVkID0gdHJ1ZTtcbiAgLy8gfTtcbiAgdGhpcy5wbGFudE9iamVjdCA9IG9wdGlvbi5wbGFudE9iamVjdDtcbn1cblxuUGxhbnRTcHJpdGUucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbiAoY3R4KSB7XG4gIGNvbnN0IHggPSB0aGlzLnBsYW50T2JqZWN0LnggKiAxNjtcbiAgY29uc3QgeSA9IHRoaXMucGxhbnRPYmplY3QueSAqIDE2O1xuICBjb25zdCBzdGFnZSA9IDE2ICogNTtcbiAgdGhpcy5pbWcub25sb2FkID0gKCkgPT4ge1xuICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWcsIHN0YWdlLCAwLCAxNiwgMTYsIHgsIHksIDE2LCAxNik7XG4gIH07XG59O1xuXG4vL2xvYWQgY2hhcmFjdGVyXG4vLyBjb25zdCB0aWxlX3Bvc194ID0gMTsgLy8gMTQgdGlsZXMgdG90YWxcbi8vIGNvbnN0IHRpbGVfcG9zX3kgPSAxOyAvLzEwIHRpbGVzIHRvdGFsXG4vLyBjb25zdCBjaGFyYWN0ZXIgPSBuZXcgSW1hZ2UoKTtcbi8vIGNoYXJhY3Rlci5vbmxvYWQgPSAoKSA9PiB7XG4vLyAgIHRoaXMuY3R4LmRyYXdJbWFnZShjaGFyYWN0ZXIsIDAsIDAsIDMyLCAzMixcbi8vICAgICB0aWxlX3Bvc194ICogMTYgLSA4LCB0aWxlX3Bvc195ICogMTYgLSAyMCwgMzIsIDMyKTtcbi8vIH07XG4vLyBjaGFyYWN0ZXIuc3JjID0gJy4vLi9kaXN0L2Fzc2V0cy9jaGFyYWN0ZXIucG5nJztcblxubW9kdWxlLmV4cG9ydHMgPSBQbGFudFNwcml0ZTsiXSwiZmlsZSI6Ii4vc3JjL3NjcmlwdHMvcGxhbnRfc3ByaXRlLmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/plant_sprite.js\n");

/***/ }),

/***/ "./src/scripts/sprite.js":
/*!*******************************!*\
  !*** ./src/scripts/sprite.js ***!
  \*******************************/
/***/ (function(module) {

eval("function Sprite(option) {\n  this.img = new Image();\n  this.img.src = option.src; // this.img.onload = () => {\n  //   this.isLoaded = true;\n  // };\n\n  this.gameObject = option.gameObject;\n}\n\nSprite.prototype.draw = function (ctx) {\n  var _this = this;\n\n  var x = this.gameObject.x * 16 - 8;\n  var y = this.gameObject.y * 16 - 20;\n\n  this.img.onload = function () {\n    ctx.drawImage(_this.img, 0, 0, 32, 32, x, y, 32, 32);\n  };\n}; //load character\n// const tile_pos_x = 1; // 14 tiles total\n// const tile_pos_y = 1; //10 tiles total\n// const character = new Image();\n// character.onload = () => {\n//   this.ctx.drawImage(character, 0, 0, 32, 32,\n//     tile_pos_x * 16 - 8, tile_pos_y * 16 - 20, 32, 32);\n// };\n// character.src = '././dist/assets/character.png';\n\n\nmodule.exports = Sprite;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KU2Rld1ZhbGxleS8uL3NyYy9zY3JpcHRzL3Nwcml0ZS5qcz8wYWM3Il0sIm5hbWVzIjpbIlNwcml0ZSIsIm9wdGlvbiIsImltZyIsIkltYWdlIiwic3JjIiwiZ2FtZU9iamVjdCIsInByb3RvdHlwZSIsImRyYXciLCJjdHgiLCJ4IiwieSIsIm9ubG9hZCIsImRyYXdJbWFnZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLE1BQVQsQ0FBaUJDLE1BQWpCLEVBQXlCO0FBQ3ZCLE9BQUtDLEdBQUwsR0FBVyxJQUFJQyxLQUFKLEVBQVg7QUFDQSxPQUFLRCxHQUFMLENBQVNFLEdBQVQsR0FBZUgsTUFBTSxDQUFDRyxHQUF0QixDQUZ1QixDQUd2QjtBQUNBO0FBQ0E7O0FBQ0EsT0FBS0MsVUFBTCxHQUFrQkosTUFBTSxDQUFDSSxVQUF6QjtBQUNEOztBQUVETCxNQUFNLENBQUNNLFNBQVAsQ0FBaUJDLElBQWpCLEdBQXdCLFVBQVVDLEdBQVYsRUFBZTtBQUFBOztBQUNyQyxNQUFNQyxDQUFDLEdBQUcsS0FBS0osVUFBTCxDQUFnQkksQ0FBaEIsR0FBb0IsRUFBcEIsR0FBeUIsQ0FBbkM7QUFDQSxNQUFNQyxDQUFDLEdBQUcsS0FBS0wsVUFBTCxDQUFnQkssQ0FBaEIsR0FBb0IsRUFBcEIsR0FBeUIsRUFBbkM7O0FBRUEsT0FBS1IsR0FBTCxDQUFTUyxNQUFULEdBQWtCLFlBQU07QUFDdEJILElBQUFBLEdBQUcsQ0FBQ0ksU0FBSixDQUFjLEtBQUksQ0FBQ1YsR0FBbkIsRUFBd0IsQ0FBeEIsRUFBMkIsQ0FBM0IsRUFBOEIsRUFBOUIsRUFBa0MsRUFBbEMsRUFBc0NPLENBQXRDLEVBQXlDQyxDQUF6QyxFQUE0QyxFQUE1QyxFQUFnRCxFQUFoRDtBQUNELEdBRkQ7QUFHRCxDQVBELEMsQ0FTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBRyxNQUFNLENBQUNDLE9BQVAsR0FBaUJkLE1BQWpCIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gU3ByaXRlIChvcHRpb24pIHtcbiAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcbiAgdGhpcy5pbWcuc3JjID0gb3B0aW9uLnNyYztcbiAgLy8gdGhpcy5pbWcub25sb2FkID0gKCkgPT4ge1xuICAvLyAgIHRoaXMuaXNMb2FkZWQgPSB0cnVlO1xuICAvLyB9O1xuICB0aGlzLmdhbWVPYmplY3QgPSBvcHRpb24uZ2FtZU9iamVjdDtcbn1cblxuU3ByaXRlLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gKGN0eCkge1xuICBjb25zdCB4ID0gdGhpcy5nYW1lT2JqZWN0LnggKiAxNiAtIDg7XG4gIGNvbnN0IHkgPSB0aGlzLmdhbWVPYmplY3QueSAqIDE2IC0gMjA7XG5cbiAgdGhpcy5pbWcub25sb2FkID0gKCkgPT4ge1xuICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWcsIDAsIDAsIDMyLCAzMiwgeCwgeSwgMzIsIDMyKTtcbiAgfTtcbn07XG5cbi8vbG9hZCBjaGFyYWN0ZXJcbi8vIGNvbnN0IHRpbGVfcG9zX3ggPSAxOyAvLyAxNCB0aWxlcyB0b3RhbFxuLy8gY29uc3QgdGlsZV9wb3NfeSA9IDE7IC8vMTAgdGlsZXMgdG90YWxcbi8vIGNvbnN0IGNoYXJhY3RlciA9IG5ldyBJbWFnZSgpO1xuLy8gY2hhcmFjdGVyLm9ubG9hZCA9ICgpID0+IHtcbi8vICAgdGhpcy5jdHguZHJhd0ltYWdlKGNoYXJhY3RlciwgMCwgMCwgMzIsIDMyLFxuLy8gICAgIHRpbGVfcG9zX3ggKiAxNiAtIDgsIHRpbGVfcG9zX3kgKiAxNiAtIDIwLCAzMiwgMzIpO1xuLy8gfTtcbi8vIGNoYXJhY3Rlci5zcmMgPSAnLi8uL2Rpc3QvYXNzZXRzL2NoYXJhY3Rlci5wbmcnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNwcml0ZTsiXSwiZmlsZSI6Ii4vc3JjL3NjcmlwdHMvc3ByaXRlLmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/sprite.js\n");

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