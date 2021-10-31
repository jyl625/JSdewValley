// import GameObject from "./game_object";
// import PlantObject from "./plant_object";
import GameWorld from "./game_world";
import DirInput from "./dir_input";

class Game {
  constructor(element) {
    this.element = element;
    this.canvasEle = this.element.querySelector("canvas");
    this.ctx = this.canvasEle.getContext("2d");
    this.gameWorld = null;
  }

  gameLoop() {
    const step = () => {

      //clear cavas
      this.ctx.clearRect(0,0, this.canvasEle.width, this.canvasEle.height);

      //draw map
      this.gameWorld.draw(this.ctx);

      //draw game objects
      Object.values(this.gameWorld.gameObjects).forEach(object => {
        object.update({
          direction: this.dirInput.direction
        });
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
    
    // Look for keyboard input
    this.dirInput = new DirInput();
    this.dirInput.initialize();


    // start game loop
    this.gameLoop();

  }
}
export default Game;