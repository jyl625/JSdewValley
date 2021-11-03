import PlantSprite from "./plant_sprite";
import PlantObject from "./plant_object";
import utils from "./utils";

//test
const src = '././dist/assets/crops/potato.png';
const ripeSrc = '././dist/assets/crops/potato_ripe.png';
// const price = 10;

class Potato extends PlantObject {
  constructor(option) {
    super(option);
    this.growthStages = [1, 2, 3, 4, 6]; //days when they grow
    // this.sellPrice = Potato.price;
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

  // static get price() {
  //   return price;
  // }

  static get ripeSrc() {
    return ripeSrc;
  }

  // static get sellPrice() {
  //   return Potato.create({ x: -1, y: -1 }).sellPrice;
  // }

  // //IS THIS NECESSARY!?
  // sellPrice() {
  //   return this.sellPrice * 2;
  // }

  static updateSellPrice() {
    Potato.sellPrice = utils.randomGuassian(Potato.seedPrice);
  }

}

Potato.seedPrice = 10;
Potato.sellPrice = 10;

export default Potato;