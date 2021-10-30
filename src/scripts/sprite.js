function Sprite (option) {
  this.img = new Image();
  this.img.src = option.src;
  // this.img.onload = () => {
  //   this.isLoaded = true;
  // };
  this.gameObject = option.gameObject;
}

Sprite.prototype.draw = function (ctx) {
  const x = this.gameObject.x * 16 - 8;
  const y = this.gameObject.y * 17 - 20;

  this.img.onload = () => {
    ctx.drawImage(this.img, 0, 0, 32, 32, x, y, 32, 32);
  };
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

module.exports = Sprite;