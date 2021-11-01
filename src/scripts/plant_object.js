// import PlantSprite from "./plant_sprite";
import GameObject from "./game_object";

class PlantObject extends GameObject {
  constructor(option) {
    super(option);
    // this.dayPlanted = option.dayPlanted || 0;
    this.age = 0; //in days
    this.currentStage = 1;
    this.isRipe = false;
    console.log(this.age);
  }

  static create(option) {
    return new PlantObject(option);
  }

  update() {
    this.age++;
    if (this.growthStages.includes(this.age)) {
      this.currentStage++;
    }
    this.updateSprite();
  }
}

export default PlantObject;