import Sprite from "./sprite";
import GameObject from "./game_object";
import utils from "./utils";

//testing only
import Tomato from "./tomato";
import Potato from "./potato";

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
    this.inventory = [Potato, Tomato];
  }

  updatePosition() {
    if (this.movementRemaining > 0) {
      const [direction, delta] = this.directionMap[this.dir];
      const next_pos_x = this.y + delta;
      const next_pos_y = this.x + delta;
      if (direction === "y" && next_pos_x > 0 && next_pos_x < utils.gridVal(9)) {
        this.y = next_pos_x;
      }
      if (direction === "x" && next_pos_y > 0 && next_pos_y < utils.gridVal(13)) {
        this.x = next_pos_y;
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

      console.log(option.inventorySelection);

      //create new instance of plant and push to GameWorld PlantObjects
      // option.gameWorld.plantObjects.push(new Tomato({
      //   x: this.nearestPos()[0], y: this.nearestPos()[1]
      // }));
      console.log(this.inventory[option.inventorySelection]);

      option.gameWorld.plantObjects.push(this.inventory[option.inventorySelection].create({
        x: this.nearestPos()[0], y: this.nearestPos()[1]
      }));


      console.log(option.gameWorld.plantObjects.length);
    }
  }


}

export default Player;