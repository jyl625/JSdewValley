import PlantSprite from "./plant_sprite";
import GameObject from "./game_object";

class PlantObject extends GameObject {
  constructor(option) {
    super(option);
    this.sprite = new PlantSprite({
      plantObject: this,
      src: option.src,
    });

  }
}

export default PlantObject;