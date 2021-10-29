const Game = require("./js/game");
const GameView = require("./js/game_view");





console.log("testing testing");

document.addEventListener("DOMContentLoaded", function () {
  const canvasEle = document.querySelector(".game-canvas");

  const ctx = canvasEle.getContext("2d");
  const game = new Game();
  new GameView(game, ctx).start();
  console.log(game);
});

console.log("loading done");