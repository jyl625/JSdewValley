import PlantSprite from "./plant_sprite";
import PlantObject from "./plant_object";

//test
const src = '././dist/assets/crops/potato.png';

class Potato extends PlantObject {
  constructor(option) {
    super(option);
    this.growthStages = [1, 2, 3, 4, 6]; //days when they grow
  }

  static create(option) {
    return new Potato(option);
  }

  updateSprite() {
    this.sprite = new PlantSprite({
      plantObject: this,
      src: '././dist/assets/crops/potato.png'
    });
  }

  //testing
  static get src() {
    return src;
  }

}

export default Potato;