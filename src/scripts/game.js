import GameWorld from "./game_world";
import DirInput from "./dir_input";
import gameControl from "./game_control";



class Game {
  constructor(element) {
    this.element = element;
    this.canvasEle = this.element.querySelector(".canvas");
    this.ctx = this.canvasEle.getContext("2d");

    this.gameWorld = null;
    this.player = null;
    this.store = null;
    this.dirInput = new DirInput();
  }


  gameLoop() {
    const step = () => {

      //update HUD
      gameControl.updateHUD({
        gameWorld: this.gameWorld,
        player: this.player
      });

      // Highlight toolbelt selection based on input
      this.player.toolBelt.highlight({
        selectedSlot: this.dirInput.inventorySelection
      });


      //draw map
      this.gameWorld.drawFarm(this.ctx);

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
      this.gameWorld.progressInGameTime({
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
    this.store = this.gameWorld.store;

    // Look for keyboard input
    this.dirInput.initialize();

    // Adds event listeners to left menu and other game control buttons
    gameControl.initialize({
      element: this.element,
      game: this
    });

    // start game loop
    this.gameLoop();
  }

  restart() {
    //reset world
    this.gameWorld.reset();

    // Reset Player
    this.player.reset();

    //reset ToolBelt
    this.player.toolBelt.reset();

    //reset Store
    this.store.reset();
  }
}
export default Game;