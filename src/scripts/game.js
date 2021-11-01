// import GameObject from "./game_object";
// import PlantObject from "./plant_object";
import GameWorld from "./game_world";
import DirInput from "./dir_input";
import utils from "./utils";

//testing only
import Tool from "./tool";
import PlantObject from "./plant_object";

class Game {
  constructor(element) {
    this.element = element;
    this.canvasEle = this.element.querySelector("canvas");
    this.ctx = this.canvasEle.getContext("2d");

    


    this.gameWorld = null;
    this.player = null;
    this.dirInput = new DirInput();

  }

  gameLoop() {
    const step = () => {

      //clear canvas
      this.ctx.clearRect(0,0, this.canvasEle.width, this.canvasEle.height);

      //draw map
      this.gameWorld.draw(this.ctx);

      // draw plant objects
      this.gameWorld.plantObjects.forEach(plantObject => {
          // will update age here
          plantObject.sprite.draw(this.ctx);
      });

      //draw game objects
      Object.values(this.gameWorld.gameObjects).forEach(object => {
        // currently no gameObjects
        // object.update({
          
        // });
        // object.sprite.draw(this.ctx);
      });

      // player movement
      this.player.update({
        direction: this.dirInput.direction,
      });
      this.player.sprite.draw(this.ctx);

      //plant action
      if (this.dirInput.action) {
        const currentItem = this.player.inventory[this.dirInput.inventorySelection];
 
        if (currentItem === Tool) {
          console.log("action tool");
          this.player.harvest({
            plantObjects: this.gameWorld.plantObjects
          });
        } else {
          this.player.plantSeed({
            gameWorld: this.gameWorld,
            plantObject: currentItem
          });
        }  
      }

      // in between day logic
      if (this.gameWorld.updateDay()) {
        console.log(`Day: ${this.gameWorld.gameDays}`);

        //update plants age
        this.gameWorld.plantObjects.forEach(plantObject => {
          plantObject.update();
          plantObject.sprite.draw(this.ctx);
          // console.log(`${plantObject.constructor.name}'s Age: ${plantObject.age} Days`);
          // console.log(`${plantObject.constructor.name}'s current stage: ${plantObject.currentStage}`);
        });
      }

      requestAnimationFrame(() => {
        step();
      });
    };

    step();
  }

  start() {
    //create new instance of GameWorld
    this.gameWorld = new GameWorld(window.GameWorldMaps.FarmDefault);
    
    // Set player as an attribute of game
    this.player = this.gameWorld.player;

    // Look for keyboard input
    this.dirInput.initialize();


    // start game loop
    this.gameLoop();

  }


}
export default Game;