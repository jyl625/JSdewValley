import PlantSprite from "./plant_sprite";

class PlantObject {
  constructor(option) {
    this.x = option.x;
    this.y = option.y;
    this.sprite = new PlantSprite({
      plantObject: this,
      src: option.src,
    });

  }
}

export default PlantObject;