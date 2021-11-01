import PlantSprite from "./plant_sprite";
import PlantObject from "./plant_object";

//test
const src = '././dist/assets/crops/tomato.png';

class Tomato extends PlantObject {
  constructor(option) {
    super(option);
    this.growthStages = [1, 2, 3, 4, 6]; //days when they grow
  }

  static create(option) {
    return new Tomato(option);
  }

  updateSprite() {
    this.sprite = new PlantSprite({
      plantObject: this,
      src: '././dist/assets/crops/tomato.png'
    });
  }

  //testing
  static get src() {
    return src;
  }

}

export default Tomato;