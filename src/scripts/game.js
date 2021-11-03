// import GameObject from "./game_object";
// import PlantObject from "./plant_object";
import GameWorld from "./game_world";
import DirInput from "./dir_input";
import utils from "./utils";

//testing only
import Tool from "./tool";
import PlantObject from "./plant_object";
import ToolBelt from "./tool_belt";
import Store from "./store";

class Game {
  constructor(element) {
    this.element = element;
    this.canvasEle = this.element.querySelector(".canvas");
    this.ctx = this.canvasEle.getContext("2d");

    this.toolBeltEle = this.element.querySelector(".tool-belt");


    this.hudEleLeft = this.element.querySelector(".hud-left");
    this.hudEleRight = this.element.querySelector(".hud-right");

    this.gameWorld = null;
    this.player = null;
    this.store = null;
    this.dirInput = new DirInput();

  }


  gameLoop() {
    const step = () => {

      //NEED REFACTORING
      //update HUD
      this.hudEleLeft.innerHTML = `Day: ${this.gameWorld.gameDays} Seconds: ${this.gameWorld.seconds}`;
      this.hudEleRight.innerHTML = `$ ${this.player.money}`;

      // Highlight toolbelt based on key input
      this.player.toolBelt.highlight({
        selectedSlot: this.dirInput.inventorySelection
      });


      //draw map
      this.gameWorld.draw(this.ctx);

      // draw plant objects
      this.gameWorld.drawPlants(this.ctx);


      // player movement
      this.player.move({
        dirInput: this.dirInput,
        ctx: this.ctx
      });

      //Player Action
      this.player.action({
        dirInput: this.dirInput,
        gameWorld: this.gameWorld,
        store: this.store
      }); 

      // in between day logic
      this.gameWorld.progressToNextDay({
        store: this.store
      });

      requestAnimationFrame(() => {
        step();
      });
    };

    step();
  }

  start() {
    //create new instance of GameWorld
    this.gameWorld = new GameWorld(this.element);
    
    // Set player as an attribute of game
    this.player = this.gameWorld.player;

    // Create store
    this.store = new Store({
      element: this.element,
      player: this.player
    });

    // Look for keyboard input
    this.dirInput.initialize();


    // start game loop
    this.gameLoop();

  }
}
export default Game;