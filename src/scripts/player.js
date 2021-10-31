// import Sprite from "./sprite";
import GameObject from "./game_object";

class Player extends GameObject{
  constructor(option) {
    super(option);
    this.movementPxRemaining = 0;

    this.directionMap = {
      "up": ["y", -1],
      "down": ["y", 1],
      "left": ["x", -1],
      "right": ["x", 1]
    };
  }

  update(state) {
    this.updatePosition();

    if (this.movementPxRemaining === 0 && state.direction) {
      this.dir = state.direction;
      this.movementPxRemaining = 16;
    }
  }

  updatePosition() {
    if (this.movementPxRemaining > 0) {
      const [direction, delta] = this.directionMap[this.dir];
      if (direction === "y") this.y += delta;
      if (direction === "x") this.x += delta;
      this.movementPxRemaining -=1;
    }
  }
}

export default Player;