// import PlantSprite from "./plant_sprite";
import GameObject from "./game_object";

class PlantObject extends GameObject {
  constructor(option) {
    super(option);
    this.age = 0;
    this.isRipe = false;
  }

  static create(option) {
    return new PlantObject(option);
  }
}

export default PlantObject;