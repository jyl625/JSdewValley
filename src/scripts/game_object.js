import Sprite from "./sprite";

class GameObject {
  constructor(option) {
    this.x = option.x;
    this.y = option.y;
    this.dir = option.dir || "down";
    this.sprite = new Sprite({
      gameObject: this,
      src: option.src,
    });
  }

  update() {

  }
}

export default GameObject;