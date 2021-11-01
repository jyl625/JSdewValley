import Sprite from "./sprite";
import GameObject from "./game_object";
import utils from "./utils";

//testing only
import Tomato from "./tomato";
import Potato from "./potato";
import Tool from "./tool";

class Player extends GameObject{
  constructor(option) {
    super(option);
    this.movementRemaining = 0;
    this.dir = "right";
    this.sprite = new Sprite({
      gameObject: this,
      src: '././dist/assets/player_1.png'
    });
    this.directionMap = {
      "up": ["y", -1],
      "down": ["y", 1],
      "left": ["x", -1],
      "right": ["x", 1]
    };
    this.inventory = [Potato, Tomato, Tool];
    this.cropsToSell = [];
  }

  updatePosition() {
    if (this.movementRemaining > 0) {
      const [direction, delta] = this.directionMap[this.dir];

      if (direction === "x") {
        const next_pos_x = this.x + delta;
        if (next_pos_x > 0 && next_pos_x < 208) {
          this.x = next_pos_x;
        }
      } else if (direction === "y") {
        const next_pos_y = this.y + delta;
        if (next_pos_y > 0 && next_pos_y < 144) {
          this.y = next_pos_y;
        }
      }
      this.movementRemaining -= 1;
    }
  }

  updateSprite() {
    if (this.movementRemaining > 0){
      this.sprite.setAnimation(`walk-${this.dir}`);
    } else if (this.movementRemaining === 0) {
      this.sprite.setAnimation(`idle-${this.dir}`);
    }
  }

  update(state) {
    if (this.movementRemaining > 0) {
      this.updatePosition();
    } else {
      if (state.direction) {
        this.dir = state.direction;
        this.movementRemaining = 16;
      }
      this.updateSprite();
    }
  }

  nearestPos() {
    return [utils.rounded(this.x), utils.rounded(this.y)];
  }

  plantSeed(option) {
    //get nearest location

    if (option.gameWorld.isEmptyPlot(this.nearestPos())) {

      const newCrop = option.plantObject.create({
        x: this.nearestPos()[0], y: this.nearestPos()[1],
        dayPlanted: option.gameWorld.gameDays
      });

      option.gameWorld.plantObjects.push(newCrop);
    }
  }

  harvest(option) {
    option.gameWorld.plantObjects.forEach((plantObject, idx) => {
      if (plantObject.x === this.nearestPos()[0] && plantObject.y === this.nearestPos()[1] && 
      plantObject.isRipe) {
        this.cropsToSell.push(option.gameWorld.plantObjects[idx]);
        console.log(this.cropsToSell);
        option.gameWorld.plantObjects.splice(idx,1);
        console.log(option.gameWorld.plantObjects);
      }
    });
  }


}

export default Player;