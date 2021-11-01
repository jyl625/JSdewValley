import PlantSprite from "./plant_sprite";
import PlantObject from "./plant_object";

class Potato extends PlantObject {
  constructor(option) {
    super(option);
    this.sprite = new PlantSprite({
      plantObject: this,
      src: '././dist/assets/crops/potato.png'
    });
    this.harvestAge = 6;
  }

  static create(option) {
    return new Potato(option);
  }
}

export default Potato;