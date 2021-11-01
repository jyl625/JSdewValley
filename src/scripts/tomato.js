import PlantSprite from "./plant_sprite";
import PlantObject from "./plant_object";

class Tomato extends PlantObject {
  constructor(option) {
    super(option);
    this.sprite = new PlantSprite({
      plantObject: this,
      src: '././dist/assets/crops/tomato.png'
    });
    this.harvestAge = 6;
  }

  static create(option) {
    return new Tomato(option);
  }
}

export default Tomato;