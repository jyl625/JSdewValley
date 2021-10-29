function GameView(game, ctx) {
  this.ctx = ctx;
  this.game = game;
  console.log("this is the game view constructor");
}

GameView.prototype.start = function() {
  console.log("this is the game.start method");
}

module.exports = GameView;