import GameObject from "./game_object";
import PlantObject from "./plant_object";
import GameWorld from "./game_world";

class Game {
  constructor(element) {
    this.element = element;
    this.canvasEle = this.element.querySelector("canvas");
    this.ctx = this.canvasEle.getContext("2d");
    this.gameWorld = null;
  }

  gameLoop() {
    const step = () => {

      this.gameWorld.draw(this.ctx);

      Object.values(this.gameWorld.gameObjects).forEach(object => {
        object.sprite.draw(this.ctx);
      })

      requestAnimationFrame(() => {
        step();
      });
    };

    step();
  }

  start() {
    this.gameWorld = new GameWorld(window.GameWorldMaps.FarmDefault);
    
    // start game loop
    this.gameLoop();
    console.log("make sure to turn on game loop");

    // //load farm map
    // const farm = new Image();
    // farm.onload = () => {
    //   this.ctx.drawImage(farm, 0, 0);
    // };
    // farm.src = '././dist/assets/farm_dev.png';

    // //place player
    // const player = new GameObject({
    //   x: 6, y: 4, src: '././dist/assets/character.png'
    // });


    // const potato = new PlantObject({
    //   x: 2, y: 2, src: '././dist/assets/crops/potato.png'
    // });


    // const tomato = new PlantObject({
    //   x: 3, y: 3, src: '././dist/assets/crops/tomato.png'
    // });


    // setTimeout (() => {
    //   potato.sprite.draw(this.ctx);
    //   tomato.sprite.draw(this.ctx);
    //   player.sprite.draw(this.ctx);
    //   console.log("setTimeout");
    // }, 200);


  }
}
export default Game;