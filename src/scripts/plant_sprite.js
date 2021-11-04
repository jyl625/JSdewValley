class PlantSprite {
  constructor(option) {
    this.img = new Image();
    this.img.src = option.src;
    this.img.onload = () => {
      this.isLoaded = true;
    };
    this.plantObject = option.plantObject;
    this.stageFrame = this.plantObject.currentStage * 16;
  }

  draw(ctx) {
    const x = this.plantObject.x;
    const y = this.plantObject.y;



    if (this.isLoaded) ctx.drawImage(this.img, this.stageFrame, 0, 16, 16, x, y, 16, 16);
  }

}

export default PlantSprite;