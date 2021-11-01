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

    // console.log(x)
    // console.log(y)
    // console.log(this.stageFrame);

    if (this.isLoaded) ctx.drawImage(this.img, this.stageFrame, 0, 16, 16, x, y, 16, 16);
    // ctx.drawImage(this.img, this.stageFrame, 0, 16, 16, x, y, 16, 16);
  }

  // drawSeedItem(option) {
  //   const ctx = option.ctx;
  //   const x = option.idx * 16;
  //   const y = 0;

  //   console.log(this.isLoaded);
  //   // if (this.isLoaded) {
  //     ctx.drawImage(this.img, 0, 0, 16, 16, x, y, 16, 16);
  //     // console.log("should be drawing");
  //   // }
  // }
}

export default PlantSprite;