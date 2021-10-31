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

      //draw map
      this.gameWorld.draw(this.ctx);

      Object.values(this.gameWorld.gameObjects).forEach(object => {
        object.x += 0.02;
        object.sprite.draw(this.ctx);
      })

      requestAnimationFrame(() => {
        step();
      });
    };

    step();
  }

  start() {
    //create new instance of GameWorld
    this.gameWorld = new GameWorld(window.GameWorldMaps.FarmDefault);
    
    // start game loop
    this.gameLoop();

  }
}
export default Game;