
class Sprite {


  constructor (option) {
    this.img = new Image();
    this.img.src = option.src;
    this.img.onload = () => {
      this.isLoaded = true;
    };
    this.gameObject = option.gameObject;
  }

  draw(ctx) {
    const x = this.gameObject.x * 16 - 8;
    const y = this.gameObject.y * 16 - 20;

    if (this.isLoaded) ctx.drawImage(this.img, 0, 0, 32, 32, x, y, 32, 32);
  }
}

export default Sprite;