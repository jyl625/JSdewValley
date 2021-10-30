function PlantSprite (option) {
  this.img = new Image();
  this.img.src = option.src;
  this.img.onload = () => {
    this.isLoaded = true;
  };
  this.plantObject = option.plantObject;
}

PlantSprite.prototype.draw = function (ctx) {
  const x = this.plantObject.x * 16;
  const y = this.plantObject.y * 16;
  const stage = 16 * 6;
  
  if (this.isLoaded) ctx.drawImage(this.img, stage, 0, 16, 16, x, y, 16, 16);
};

//load character
// const tile_pos_x = 1; // 14 tiles total
// const tile_pos_y = 1; //10 tiles total
// const character = new Image();
// character.onload = () => {
//   this.ctx.drawImage(character, 0, 0, 32, 32,
//     tile_pos_x * 16 - 8, tile_pos_y * 16 - 20, 32, 32);
// };
// character.src = '././dist/assets/character.png';

module.exports = PlantSprite;