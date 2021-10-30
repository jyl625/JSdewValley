const GameObject = require ("./game_object")
const PlantObject = require ("./plant_object")

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



  //place player
  const player = new GameObject({
    x: 1, y: 1, src: '././dist/assets/character.png'
  });


  const potato = new PlantObject({
    x: 2, y: 2, src: '././dist/assets/crops/potato.png'
  });


  const tomato = new PlantObject({
    x: 3, y: 3, src: '././dist/assets/crops/tomato.png'
  });


  potato.sprite.draw(this.ctx);
  tomato.sprite.draw(this.ctx);
  player.sprite.draw(this.ctx);


};

module.exports = Game;