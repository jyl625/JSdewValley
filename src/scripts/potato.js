import PlantSprite from "./plant_sprite";
import PlantObject from "./plant_object";

class Potato extends PlantObject {
  constructor(option) {
    super(option);
    this.growthStages = [1, 2, 3, 4, 6];
    this.sprite = new PlantSprite({
      plantObject: this,
      src: '././dist/assets/crops/potato.png',
      currentStage: this.currentStage
    });
  }

  static create(option) {
    return new Potato(option);
  }

  updateSprite() {
    this.sprite = new PlantSprite({
      plantObject: this,
      src: '././dist/assets/crops/potato.png',
      currentStage: this.currentStage
    });
  }
}

export default Potato;