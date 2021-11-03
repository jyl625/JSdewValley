import PlantSprite from "./plant_sprite";
import PlantObject from "./plant_object";

//test
const src = '././dist/assets/crops/potato.png';
const ripeSrc = '././dist/assets/crops/potato_ripe.png';
const price = 10;

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

  static get src() {
    return src;
  }

  static get price() {
    return price;
  }

  static get ripeSrc() {
    return ripeSrc;
  }

  //IS THIS NECESSARY!?
  price() {
    return price;
  }

}

export default Potato;