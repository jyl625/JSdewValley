// const Game = require("./scripts/game.js");
// // const GameView = require("./scripts/game_view");
import Game from "./scripts/game";



document.addEventListener("DOMContentLoaded", function () {

  const game = new Game(document.querySelector(".game-container"));
  game.start();

});