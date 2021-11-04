import Sprite from "./sprite";
import GameObject from "./game_object";
import utils from "./utils";

//testing only
import ToolBelt from "./tool_belt";
import Tool from "./tool";

class Player extends GameObject{
  constructor(option) {
    super(option);
    this.element = option.element;

    this.movementRemaining = 0;
    this.dir = "right";
    this.sprite = new Sprite({
      gameObject: this,
      src: './dist/assets/player_1.png'
    });
    this.directionMap = {
      "up": ["y", -1],
      "down": ["y", 1],
      "left": ["x", -1],
      "right": ["x", 1]
    };
    this.money = 100;

    //Create toolbelt
 
    this.toolBelt = new ToolBelt(this.element);
    this.forSale = [];
  }

  move(option) {
  this.update({
    direction: option.dirInput.direction,
  });
  this.sprite.draw(option.ctx);
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

  updatePosition() {
    if (this.movementRemaining > 0) {
      const [direction, delta] = this.directionMap[this.dir];

      if (direction === "x") {
        const next_pos_x = this.x + delta;
        if (next_pos_x > 16 && next_pos_x < 192) {
          this.x = next_pos_x;
        }
      } else if (direction === "y") {
        const next_pos_y = this.y + delta;
        if (next_pos_y > 16 && next_pos_y < 128) {
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
      this.toolBelt.inventory[option.inventorySelection][1]--;
      this.toolBelt.updateToolBeltElements();
    }
  }

  harvest(option) {
    option.plantObjects.forEach((plantObject, idx) => {
      if (plantObject.x === this.nearestPos()[0] && plantObject.y === this.nearestPos()[1] && 
      plantObject.isRipe) {
        option.plantObjects.splice(idx,1);
        this.forSale.push(plantObject);
        option.store.renderStore();

      }
    });
  }

  action(option) {
    if (option.dirInput.action && this.toolBelt.inventory[option.dirInput.inventorySelection]) {

      const currentItem = this.toolBelt.inventory[option.dirInput.inventorySelection][0];
      let currentItemCount = this.toolBelt.inventory[option.dirInput.inventorySelection][1];

      if (currentItem === Tool) {
        this.harvest({
          plantObjects: option.gameWorld.plantObjects,
          store: option.store
        });
      } else if (currentItem !== undefined) {
        if (currentItemCount >= 1) {
          this.plantSeed({
            gameWorld: option.gameWorld,
            plantObject: currentItem,
            inventorySelection: option.dirInput.inventorySelection
          });
        }
      }
    }
  }

  reset() {
    this.x = utils.gridVal(6);
    this.y = utils.gridVal(4);
    this.money = 100;
    this.forSale = [];
  }


}

export default Player;