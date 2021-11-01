class PlantSprite {
  constructor(option) {
    this.img = new Image();
    this.img.src = option.src;
    this.img.onload = () => {
      this.isLoaded = true;
    };
    this.plantObject = option.plantObject;
    this.stageFrame = option.currentStage * 16;
  }

  draw(ctx) {
    const x = this.plantObject.x;
    const y = this.plantObject.y;

    if (this.isLoaded) ctx.drawImage(this.img, this.stageFrame, 0, 16, 16, x, y, 16, 16);
  }
}
//load character
// const tile_pos_x = 1; // 14 tiles total
// const tile_pos_y = 1; //10 tiles total
// const character = new Image();
// character.onload = () => {
//   this.ctx.drawImage(character, 0, 0, 32, 32,
//     tile_pos_x * 16 - 8, tile_pos_y * 16 - 20, 32, 32);
// };
// character.src = '././dist/assets/character.png';

export default PlantSprite;