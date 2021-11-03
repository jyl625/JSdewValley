import PlantSprite from "./plant_sprite";
import PlantObject from "./plant_object";

//test
const src = '././dist/assets/crops/tomato.png';
const ripeSrc = '././dist/assets/crops/tomato_ripe.png';
const price = 15;

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

  static get src() {
    return src;
  }

  static get price() {
    return price;
  }

  static get ripeSrc() {
    return ripeSrc;
  }

  price() {
    return price;
  }

}

export default Tomato;