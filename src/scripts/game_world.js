import Player from "./player";
import utils from "./utils";
import Potato from "./potato";
import Tomato from "./tomato";
import Store from "./store";

import gameControl from "./game_control";

class GameWorld {
  constructor(element) {
    this.element = element;

    this.gameSpeed = 3; //how many seconds per day; 2 sec is fun

    this.steps = 0;
    this.seconds = 0;
    this.gameDays = 0;

    this.player = new Player({
      x: utils.gridVal(5), y: utils.gridVal(4), element: this.element
    });

    this.farmMap = new Image();
    this.farmMap.src = '././dist/assets/farm_dev.png';

    this.store = new Store({
      element: this.element,
      player: this.player
    });

    this.plantObjects = [
      // create plant 1
      new Potato({
        x: utils.gridVal(2), y: utils.gridVal(2)
      }),

      // create plant 2
      new Tomato({
        x: utils.gridVal(3), y: utils.gridVal(3)
      })
    ];

  }

  drawFarm(ctx) {
    ctx.drawImage(this.farmMap, 0, 0);
  }

  drawPlants(ctx) {
    this.plantObjects.forEach(plantObject => {
      plantObject.sprite.draw(ctx);
    });
  }

  progressToNextDay(option) {
    if (this.updateDay()) {

      //update plants age
      this.plantObjects.forEach(plantObject => {
        plantObject.update();
        plantObject.sprite.draw(this.ctx);
      });

      option.store.updateSellPrices();
    }
  }

  updateDay() {
    this.steps++;
    if (this.steps === 60) {
      this.steps = 0;
      this.seconds++;
      if (this.seconds === this.gameSpeed) {
        this.seconds = 0;
        this.gameDays++;
        return this.gameDays;
      }
    }
  }

  isEmptyPlot(pos) {
    return !this.plantObjects.some( plant => {
      return (plant.x === pos[0] && plant.y === pos[1]);
    } );
  }
}



export default GameWorld;