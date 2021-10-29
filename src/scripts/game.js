function Game(element) {
  this.element = element;
  this.canvasEle = this.element.querySelector("canvas");
  this.ctx = this.canvasEle.getContext("2d");
}

Game.prototype.start = function start() {

  console.log("hello");

  //load farm map
  const farm = new Image();
  farm.onload = () => {
    this.ctx.drawImage(farm, 0, 0);
  };
  farm.src = '././dist/assets/farm_dev.png';


  //load character
  const tile_pos_x = 1; // 14 tiles total
  const tile_pos_y = 1; //10 tiles total
  const character = new Image();
  character.onload = () => {
    this.ctx.drawImage(character, 0, 0, 32, 32, 
      tile_pos_x * 16 - 8, tile_pos_y * 16 - 20, 32, 32);
  };
  character.src = '././dist/assets/character.png';
};

module.exports = Game;