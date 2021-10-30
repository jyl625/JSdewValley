const GameObject = require ("./game_object")
const PlantObject = require ("./plant_object")

function Game(element) {
  this.element = element;
  this.canvasEle = this.element.querySelector("canvas");
  this.ctx = this.canvasEle.getContext("2d");
}

Game.prototype.gameLoop = function gameLoop() {
  const step = () => {

    //load farm map
    const farm = new Image();
    farm.onload = () => {
      this.ctx.drawImage(farm, 0, 0);
    };
    farm.src = '././dist/assets/farm_dev.png';


    requestAnimationFrame(() => {
      step();
    });
  };

  step();
}

Game.prototype.start = function start() {

  // start game loop
  this.gameLoop();

  //place player
  const player = new GameObject({
    x: 5, y: 4, src: '././dist/assets/character.png'
  });


  const potato = new PlantObject({
    x: 2, y: 2, src: '././dist/assets/crops/potato.png'
  });


  const tomato = new PlantObject({
    x: 3, y: 3, src: '././dist/assets/crops/tomato.png'
  });


  setTimeout (() => {
    potato.sprite.draw(this.ctx);
    tomato.sprite.draw(this.ctx);
    player.sprite.draw(this.ctx);
    console.log("setTimeout");
  }, 200);


};

module.exports = Game;