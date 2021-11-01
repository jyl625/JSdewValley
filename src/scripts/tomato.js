import PlantSprite from "./plant_sprite";
import PlantObject from "./plant_object";

class Tomato extends PlantObject {
  constructor(option) {
    super(option);
    this.growthStages = [1, 3, 5, 6, 7];
    this.sprite = new PlantSprite({
      plantObject: this,
      src: '././dist/assets/crops/tomato.png',
      currentStage: this.currentStage
    });
  }

  static create(option) {
    return new Tomato(option);
  }

  updateSprite() {
    this.sprite = new PlantSprite({
      plantObject: this,
      src: '././dist/assets/crops/tomato.png',
      currentStage: this.currentStage
    });
  }
}

export default Tomato;