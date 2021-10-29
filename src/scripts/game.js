function Game(element) {
  this.element = element;
  this.canvasEle = this.element.querySelector("canvas");
  this.ctx = this.canvasEle.getContext("2d");
}

Game.prototype.start = function start() {
  const img = new Image();
  console.log("hello");

  // Set line width
  this.ctx.lineWidth = 10;

  // Wall
  this.ctx.strokeRect(75, 140, 150, 110);



  img.onload = () => {
    this.ctx.drawImage(img, 0, 0, 32, 32, 0, 0, 32, 32);
  };
  img.src = '././dist/assets/character.png';
};

module.exports = Game;