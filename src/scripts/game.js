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




    // ////////////Development area//////////
    // this.storeEle = this.element.querySelector(".store");
    // this.bindEvents();
    // ////////////Development area//////////

  }


  // bindEvents() {
  //   this.storeEle.addEventListener("click", this.handleStoreClick.bind(this));
  // }



  // handleStoreClick(e) {
  //   let clickedItem = e.target;

  //   console.log(clickedItem);
  // }



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


      // this.player.toolBelt.updateToolBeltElements();

      //draw map
      this.gameWorld.draw(this.ctx);

      // draw plant objects
      this.gameWorld.plantObjects.forEach(plantObject => {
          // will update age here
          plantObject.sprite.draw(this.ctx);
      });

      //draw game objects
      // Object.values(this.gameWorld.gameObjects).forEach(object => {
        // currently no gameObjects
        // object.update({
          
        // });
        // object.sprite.draw(this.ctx);
      // });

      // player movement
      this.player.update({
        direction: this.dirInput.direction,
      });
      this.player.sprite.draw(this.ctx);


      // NEED TO MOVE TO PLAYER#plant
      //plant action
      if (this.dirInput.action && this.player.toolBelt.inventory[this.dirInput.inventorySelection]) {
        const currentItem = this.player.toolBelt.inventory[this.dirInput.inventorySelection][0];
        let currentItemCount = this.player.toolBelt.inventory[this.dirInput.inventorySelection][1];

        if (currentItem === Tool) {
          this.player.harvest({
            plantObjects: this.gameWorld.plantObjects,
            store: this.store
          });
        } else if (currentItem !== undefined){
          if (currentItemCount >= 1) {
            this.player.plantSeed({
              gameWorld: this.gameWorld,
              plantObject: currentItem,
              inventorySelection: this.dirInput.inventorySelection
            });
            // this.player.inventory[this.dirInput.inventorySelection][1]--;
          }
        }  
      }

      // in between day logic
      if (this.gameWorld.updateDay()) {

        //update plants age
        this.gameWorld.plantObjects.forEach(plantObject => {
          plantObject.update();
          plantObject.sprite.draw(this.ctx);
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